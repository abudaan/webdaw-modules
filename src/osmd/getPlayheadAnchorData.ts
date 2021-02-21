import { OpenSheetMusicDisplay, SourceMeasure } from "opensheetmusicdisplay";
import { getBoundingBoxData } from "./mapper3";
import { PartData, RepeatData } from "../musicxml/parser";
import { LoopData } from "./types";
import { BBox } from "../types";
import { getBoundingBoxMeasureAll } from "./getBoundingBoxMeasure";

export const getTicksAtBar = (parts: PartData[]) => {
  parts.forEach(data => {
    let bar = 0;
    data.events.reduce((acc, val) => {
      if (val.bar && val.bar !== bar) {
        bar = val.bar;
        // console.log(bar, val.ticks);
      }
      return bar;
    }, 0);
  });
};

export type AnchorData = {
  measureNumber: number;
  startTicks: number;
  endTicks: number;
  bbox: BBox;
  bboxMeasure: BBox;
  yPos: number;
  numPixels: number;
  numTicks: number;
  pixelsPerTick: number;
  ghost: boolean;
  nextAnchor: AnchorData | null;
};

export const getPlayheadAnchorData = (
  osmd: OpenSheetMusicDisplay,
  repeats: RepeatData[],
  loops: LoopData[],
  ppq: number = 960
): { anchorData: AnchorData[]; measureStartTicks: number[]; upbeat: boolean } => {
  const measureBoundingBoxes = getBoundingBoxMeasureAll(osmd);
  // console.log("measureBoundingBoxes", measureBoundingBoxes);
  const measureStartTicks = osmd.Sheet.SourceMeasures.map((measure: SourceMeasure) => {
    return ppq * measure.AbsoluteTimestamp.RealValue * 4;
  });
  const { Numerator, Denominator } = osmd.Sheet.SourceMeasures[osmd.Sheet.SourceMeasures.length - 1].ActiveTimeSignature;
  measureStartTicks.push(measureStartTicks[measureStartTicks.length - 1] + Numerator * (4 / Denominator) * 960);
  // console.log(measureStartTicks, measureStartTicks[73]);

  // console.log(ppq);
  let upbeat = false;
  const anchorData: AnchorData[] = [];
  osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(container => {
    const realValue = container.AbsoluteTimestamp.RealValue;
    const runningTicks = ppq * 4 * realValue;
    const data: AnchorData[] = [];

    container.StaffEntries.forEach((entry, i) => {
      let measureNumber = entry.parentMeasure.MeasureNumber;
      if (measureNumber === 0 && upbeat === false) {
        upbeat = true;
        console.log("UPBEAT");
      }
      if (upbeat) {
        measureNumber += 1;
      }
      const measureIndex = measureNumber - 1;
      const bboxMeasure = measureBoundingBoxes[measureIndex];
      // console.log(measureIndex, bboxMeasure);
      const yPos = (entry.parentMeasure as any).parentMusicSystem.boundingBox.absolutePosition.y * 10;

      if (typeof (entry.parentMeasure as any).multiRestElement !== "undefined") {
        const { Numerator, Denominator } = osmd.Sheet.SourceMeasures[measureIndex].ActiveTimeSignature;
        const numberOfMeasures = (entry.parentMeasure as any).multiRestElement.number_of_measures;
        const diffTicks = numberOfMeasures * Numerator * (ppq / (Denominator / 4));
        const numGhostAnchors = numberOfMeasures * Numerator;
        const anchorTicks = diffTicks / numGhostAnchors;
        const anchorPixels = bboxMeasure.width / numGhostAnchors;
        let x = bboxMeasure.x;
        for (let i = 0; i < numGhostAnchors; i++) {
          data.push({
            numPixels: anchorTicks,
            startTicks: runningTicks + i * anchorTicks,
            endTicks: 0,
            numTicks: 0,
            pixelsPerTick: 0,
            measureNumber,
            bbox: {
              x: x + i * anchorPixels,
              y: bboxMeasure.y,
              width: anchorPixels,
              height: bboxMeasure.height,
            },
            bboxMeasure,
            yPos,
            ghost: true,
            nextAnchor: null,
          });
        }
      } else {
        const bbox = getBoundingBoxData((entry as any).boundingBox);
        data.push({
          numPixels: 0,
          startTicks: runningTicks,
          endTicks: 0,
          numTicks: 0,
          pixelsPerTick: 0,
          measureNumber,
          bbox,
          // bboxMeasure: getBoundingBoxData((entry.parentMeasure as any).boundingBox),
          bboxMeasure,
          yPos,
          ghost: false,
          nextAnchor: null,
        });
      }
    });

    data.sort((a, b) => {
      if (a.bbox.x < b.bbox.x) {
        return -1;
      }
      if (a.bbox.x > b.bbox.x) {
        return 1;
      }
      return 0;
    });
    // console.log(boxes);

    // always get the first vertical graphical staff entry
    const anchor = data[0];
    if (anchor.ghost === false) {
      anchorData.push(anchor);
    } else {
      let x;
      for (let i = 0; i < data.length; i++) {
        const tmpX = data[i].bbox.x;
        if (tmpX !== x) {
          x = tmpX;
          anchorData.push(data[i]);
        }
      }
    }
  });

  // console.log(anchorData);

  // copy anchor data for all repeats
  let diffTicks = 0;
  let diffBars = 0;
  const copies: AnchorData[] = [];
  for (let i = 0; i < repeats.length; i++) {
    const { start, end } = repeats[i];
    const minTicks = measureStartTicks[start - 1];
    const maxTicks = measureStartTicks[end];
    // console.log(start, end, minTicks, maxTicks);
    diffTicks += maxTicks - minTicks;
    diffBars += end - (start - 1);
    // console.log(min, max, minTicks, maxTicks, diffTicks);
    for (let j = 0; j < anchorData.length; j++) {
      const anchor = anchorData[j];
      if (anchor.measureNumber >= start && anchor.measureNumber <= end) {
        const clone = { ...anchor };
        clone.startTicks += diffTicks;
        clone.measureNumber += diffBars;
        copies.push(clone);
      }
    }
  }
  // console.log(copies);

  // update the ticks and measure number of the bars that come after the repeats
  const result: AnchorData[] = anchorData.map(d => {
    const { measureNumber, startTicks } = d;
    const clone = { ...d };
    let diffTicks = 0;
    let diffBars = 0;
    for (let i = 0; i < repeats.length; i++) {
      const { start, end } = repeats[i];
      // console.log(start, end);
      const minTicks = measureStartTicks[start - 1];
      const maxTicks = measureStartTicks[end];
      diffTicks += maxTicks - minTicks;
      // console.log(diffTicks);
      diffBars += end - (start - 1);
      if (measureNumber > end) {
        clone.startTicks = startTicks + diffTicks;
        clone.measureNumber = measureNumber + diffBars;
      }
    }
    return clone;
  });

  // result.forEach(d => {
  //   console.log(d.measureNumber, d.ticks);
  // });

  // copies.forEach(d => {
  //   console.log(d.measureNumber, d.ticks);
  // });

  result.push(...copies);
  result.sort((a, b) => {
    if (a.startTicks < b.startTicks) {
      return -1;
    }
    if (a.startTicks > b.startTicks) {
      return 1;
    }
    return 0;
  });

  result.sort((a, b) => {
    if (a.measureNumber < b.measureNumber) {
      return -1;
    }
    if (a.measureNumber > b.measureNumber) {
      return 1;
    }
    return 0;
  });

  const result1: number[] = [];
  let currentMeasureNumber = 0;
  result.forEach(r => {
    const { startTicks, measureNumber } = r;
    if (currentMeasureNumber !== measureNumber) {
      currentMeasureNumber = measureNumber;
      result1.push(startTicks);
    }
  });

  // add ticks position of the end of the last bar
  // const { Numerator, Denominator } = osmd.Sheet.SourceMeasures[osmd.Sheet.SourceMeasures.length - 1].ActiveTimeSignature;
  const lastTicks = result1[result1.length - 1] + Numerator * (4 / Denominator) * 960;
  result1.push(lastTicks);

  for (let i = 0; i < result.length; i++) {
    let a1 = result[i];
    let a2 = result[i + 1];
    if (a2) {
      a1.endTicks = a2.startTicks;
      a1.numPixels = a2.bbox.x - a1.bbox.x;
      if (a2.yPos !== a1.yPos || a2.bbox.x < a1.bbox.x) {
        // a1.numPixels = a1.bbox.width
        a1.numPixels = a1.bboxMeasure.x + a1.bboxMeasure.width - a1.bbox.x;
      }
      a1.nextAnchor = a2;
    } else {
      a1.endTicks = lastTicks;
      a1.numPixels = a1.bboxMeasure.x + a1.bboxMeasure.width - a1.bbox.x;
      // create a dummy anchor
      a1.nextAnchor = { ...a1, endTicks: lastTicks, measureNumber: a1.measureNumber + 1 };
    }
    const diffTicks = a1.endTicks - a1.startTicks;
    a1.pixelsPerTick = a1.numPixels / diffTicks;
    a1.numTicks = a1.endTicks - a1.startTicks;
  }

  if (loops.length) {
    // console.log("optimize for loops", loops);
    for (let i = 0; i < loops.length; i++) {
      const { startBar, endBar } = loops[i];
      for (let j = 0; j < result.length; j++) {
        const anchor = result[j];
        const prevAnchor = result[j - 1];
        const nextAnchor = result[j + 1];
        // if (anchor.measureNumber === start) {
        // anchor.numPixels = anchor.bboxMeasure.x + anchor.bboxMeasure.width - anchor.bbox.x;
        // anchor.pixelsPerTick = anchor.numPixels / (anchor.endTicks - anchor.startTicks);
        // } else if (anchor.measureNumber === end && nextAnchor && nextAnchor.measureNumber === end + 1) {
        // if (anchor.measureNumber === start && prevAnchor && prevAnchor.measureNumber === start - 1) {
        //   anchor.startTicks = measureStartTicks[anchor.measureNumber];
        //   anchor.bbox.x = anchor.bboxMeasure.x;
        //   anchor.numPixels += anchor.bbox.x - anchor.bboxMeasure.x;
        //   anchor.pixelsPerTick = anchor.numPixels / (anchor.endTicks - anchor.startTicks);
        // }

        if (anchor.measureNumber === endBar && nextAnchor && nextAnchor.measureNumber === endBar + 1) {
          // console.log("update last anchor", anchor);
          // anchor.endTicks = measureStartTicks[nextAnchor.measureNumber - 1];
          anchor.numPixels = anchor.bboxMeasure.x + anchor.bboxMeasure.width - anchor.bbox.x;
          anchor.pixelsPerTick = anchor.numPixels / (anchor.endTicks - anchor.startTicks);
        }
      }
    }
  }

  // result.forEach(d => {
  //   console.log(d.measureNumber, d.startTicks, d.numPixels);
  // });

  return { anchorData: result, measureStartTicks: result1, upbeat };
};

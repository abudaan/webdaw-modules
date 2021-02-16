import { OpenSheetMusicDisplay, SourceMeasure } from "opensheetmusicdisplay";
import { getBoundingBoxData } from "./mapper3";
import { PartData } from "../musicxml/parser";
import { BBox } from "../types";

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
};

export const getPlayheadAnchorData = (
  osmd: OpenSheetMusicDisplay,
  repeats: number[][],
  ppq: number = 960
): { anchorData: AnchorData[]; measureStartTicks: number[] } => {
  const measureStartTicks = osmd.Sheet.SourceMeasures.map((measure: SourceMeasure) => {
    return ppq * measure.AbsoluteTimestamp.RealValue * 4;
  });

  let ticks = 0;
  const anchorData: AnchorData[] = osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.map(container => {
    const realValue = container.AbsoluteTimestamp.RealValue;
    const data: { measureNumber: number; bbox: BBox }[] = container.StaffEntries.map(entry => {
      const measureNumber = entry.parentMeasure.MeasureNumber;
      if (typeof (entry.parentMeasure as any).multiRestElement !== "undefined") {
        const numberOfMeasures = (entry.parentMeasure as any).multiRestElement.number_of_measures;
        console.log(measureNumber, numberOfMeasures);
      }
      return { measureNumber, bbox: getBoundingBoxData((entry as any).boundingBox) };
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
    ticks = ppq * 4 * realValue;
    // console.log("realValue", realValue, ticks);
    // always get the first vertical graphical staff entry
    const bbox = data[0].bbox;
    const measureNumber = data[0].measureNumber;
    return { startTicks: ticks, endTicks: 0, bbox, measureNumber };
  });

  // console.log(anchorData);

  // copy anchor data for all repeats
  let diffTicks = 0;
  const copies: AnchorData[] = [];
  for (let i = 0; i < repeats.length; i++) {
    const [min, max] = repeats[i];
    const minTicks = measureStartTicks[min - 1];
    const maxTicks = measureStartTicks[max];
    // console.log(min, max, minTicks, maxTicks);
    diffTicks += maxTicks - minTicks;
    // console.log(min, max, minTicks, maxTicks, diffTicks);
    for (let j = 0; j < anchorData.length; j++) {
      const anchor = anchorData[j];
      if (anchor.measureNumber >= min && anchor.measureNumber <= max) {
        const clone = { ...anchor };
        clone.startTicks += diffTicks;
        clone.measureNumber += max - (min - 1);
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
      const [min, max] = repeats[i];
      const minTicks = measureStartTicks[min - 1];
      const maxTicks = measureStartTicks[max];
      diffTicks += maxTicks - minTicks;
      diffBars += max - (min - 1);
      if (measureNumber > max) {
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

  for (let i = 0; i < result.length; i++) {
    let a1 = result[i];
    let a2 = result[i + 1];
    if (a2) {
      a1.endTicks = a2.startTicks;
    }
  }

  // result.forEach(d => {
  //   console.log(d.measureNumber, d.ticks);
  // });

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
  const { Numerator, Denominator } = osmd.Sheet.SourceMeasures[osmd.Sheet.SourceMeasures.length - 1].ActiveTimeSignature;
  const lastTicks = result1[result1.length - 1] + Numerator * (4 / Denominator) * 960;
  result1.push(lastTicks);
  result[result.length - 1].endTicks = lastTicks;

  console.log(result);

  return { anchorData: result, measureStartTicks: result1 };
};

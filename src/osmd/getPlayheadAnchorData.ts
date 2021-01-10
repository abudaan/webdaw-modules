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
  ticks: number;
  bbox: BBox;
};

export const getPlayheadAnchorData = (
  osmd: OpenSheetMusicDisplay,
  repeats: number[][],
  ppq: number = 960
): AnchorData[] => {
  const measureStartTicks = osmd.Sheet.SourceMeasures.map((measure: SourceMeasure) => {
    return ppq * measure.AbsoluteTimestamp.RealValue * 4;
  });
  const { Numerator, Denominator } = osmd.Sheet.SourceMeasures[
    osmd.Sheet.SourceMeasures.length - 1
  ].ActiveTimeSignature;
  const lastTicks = measureStartTicks[measureStartTicks.length - 1];
  measureStartTicks.push(lastTicks + Numerator * (4 / Denominator) * 960);
  // console.log(measureStartTicks);

  let ticks = 0;
  const result: AnchorData[] = osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.map(
    container => {
      const realValue = container.AbsoluteTimestamp.RealValue;
      const data: { measureNumber: number; bbox: BBox }[] = container.StaffEntries.map(entry => {
        const measureNumber = entry.parentMeasure.MeasureNumber;
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
      const bbox = data[0].bbox;
      const measureNumber = data[0].measureNumber;
      return { ticks, bbox, measureNumber };
    }
  );

  let diffTicks = 0;
  const copies: AnchorData[] = [];
  for (let i = 0; i < repeats.length; i++) {
    const [min, max] = repeats[i];
    const minTicks = measureStartTicks[min - 1];
    const maxTicks = measureStartTicks[max];
    diffTicks += maxTicks - minTicks;
    // console.log(min, max, minTicks, maxTicks, diffTicks);
    for (let j = 0; j < result.length; j++) {
      const anchor = result[j];
      if (anchor.measureNumber >= min && anchor.measureNumber <= max) {
        const clone = { ...anchor };
        clone.ticks += diffTicks;
        copies.push(clone);
      }
    }
  }
  result.push(...copies);
  result.sort((a, b) => {
    if (a.ticks < b.ticks) {
      return -1;
    }
    if (a.ticks > b.ticks) {
      return 1;
    }
    return 0;
  });

  // console.log(result);
  return result;
};

import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { getMusicSystemMeasureBoundingBoxes } from "./getMusicSystemMeasureBoundingBox";
import { BoundingBoxMeasure, BoundingBox } from "../types";
import { hasOverlap } from "../util/2d";

/**
 * finds all measures that have a overlap with the selection rectangle
 */
export const getSelectedMeasures = (
  osmd: OpenSheetMusicDisplay,
  start: { x: number; y: number },
  end: { x: number; y: number }
): { barNumbers: number[]; boundingBoxes: BoundingBoxMeasure[] } => {
  const boundingBoxes = getMusicSystemMeasureBoundingBoxes(osmd);
  // console.log(boundingBoxes);
  const selectedBars: number[] = [];
  const selection: BoundingBox = {
    x: start.x,
    y: start.y,
    width: end.x - start.x,
    height: end.y - start.y,
    left: start.x,
    top: start.y,
    right: end.x,
    bottom: end.y,
  };
  boundingBoxes.forEach(bbox => {
    if (hasOverlap(bbox, selection)) {
      selectedBars.push(bbox.measureNumber);
    }
  });
  // console.log(selectedBars);
  const barNumbers: number[] = [];
  // add missing bar numbers
  for (let i = 0; i < selectedBars.length; i++) {
    let value = selectedBars[i];
    barNumbers.push(value);
    if (i + 1 < selectedBars.length) {
      let next = selectedBars[i + 1];
      // console.log(value, next);
      while (next - value > 1) {
        // console.log(value);
        barNumbers.push(++value);
      }
    }
  }

  return {
    barNumbers,
    boundingBoxes: barNumbers.map(num => boundingBoxes[num - 1]),
  };
};

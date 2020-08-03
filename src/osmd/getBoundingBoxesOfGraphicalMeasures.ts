import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { GraphicalMeasureShim } from "./type_shims";
import { BoundingBoxMeasure } from "../types";

// return the bounding boxes of all staves per measure
export const getBoundingBoxesOfGraphicalMeasures = (
  osmd: OpenSheetMusicDisplay
): BoundingBoxMeasure[][] => {
  return osmd.GraphicSheet.MeasureList.map(arr => {
    return arr.map(measure => {
      const { stave, measureNumber } = (measure as unknown) as GraphicalMeasureShim;
      return {
        measureNumber,
        x: stave.x,
        y: stave.y,
        width: stave.width,
        height: stave.height,
        top: stave.y,
        right: stave.x + stave.width,
        bottom: stave.y + stave.height,
        left: stave.x,
      };
    });
  });
};

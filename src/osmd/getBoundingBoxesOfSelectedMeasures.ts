import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { getMusicSystemMeasureBoundingBoxes } from "./getMusicSystemMeasureBoundingBox";
import { BoundingBoxMeasure } from "../types";

export const getBoundingBoxesOfSelectedMeasures = (
  selectedMeasures: number[],
  osmd: OpenSheetMusicDisplay
): BoundingBoxMeasure[] => {
  const boundingBoxes = getMusicSystemMeasureBoundingBoxes(osmd);
  return selectedMeasures.map(num => boundingBoxes[num - 1]);
};

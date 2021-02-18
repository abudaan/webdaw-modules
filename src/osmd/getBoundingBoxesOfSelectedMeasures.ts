import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
// import { getMusicSystemMeasureBoundingBoxes } from "./getMusicSystemMeasureBoundingBox";
import { BoundingBox } from "../types";
import { getBoundingBoxMeasureAll } from "./getBoundingBoxMeasure";

export const getBoundingBoxesOfSelectedMeasures = (selectedMeasures: number[], osmd: OpenSheetMusicDisplay): BoundingBox[] => {
  // const boundingBoxes = getMusicSystemMeasureBoundingBoxes(osmd);
  const boundingBoxes = getBoundingBoxMeasureAll(osmd);
  // console.log("boundingBoxes", boundingBoxes);
  return selectedMeasures.map(num => boundingBoxes[num - 1]);
};

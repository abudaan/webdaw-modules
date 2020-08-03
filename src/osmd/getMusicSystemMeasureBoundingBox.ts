import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { BoundingBoxMeasure } from "../types";
import { getBoundingBoxesOfGraphicalMeasures } from "./getBoundingBoxesOfGraphicalMeasures";

/**
 * combines per measure the bounding boxes of all staves
 */
export const getMusicSystemMeasureBoundingBoxes = (
  osmd: OpenSheetMusicDisplay
): BoundingBoxMeasure[] => {
  const boundingBoxes: BoundingBoxMeasure[][] = getBoundingBoxesOfGraphicalMeasures(osmd);
  // console.log(graphicalNotesPerBar);
  const result: BoundingBoxMeasure[] = [];
  for (let i = 0; i < boundingBoxes.length; i++) {
    const staffLines = boundingBoxes[i];
    const topValues = staffLines.map(s => s.top);
    const bottomValues = staffLines.map(s => s.bottom);
    const leftValues = staffLines.map(s => s.left);
    const rightValues = staffLines.map(s => s.right);
    const heightValues = staffLines.map(s => s.top - s.bottom);
    const widthValues = staffLines.map(s => s.right - s.left);

    const t = {
      top: Math.min(...topValues),
      bottom: Math.max(...bottomValues),
      left: Math.min(...leftValues),
      right: Math.max(...rightValues),
    };

    result.push({
      measureNumber: i + 1,
      top: t.top,
      left: t.left,
      bottom: t.bottom,
      right: t.right,
      x: t.left,
      y: t.top,
      width: Math.max(...widthValues),
      height: Math.max(...heightValues),
    });
  }
  return result;
};

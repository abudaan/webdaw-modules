import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { BoundingBox } from "../types";

export const getMeasureBoundingBoxesInStave = (
  staveIndex: number,
  osmd: OpenSheetMusicDisplay
): BoundingBox[] => {
  if (staveIndex === -1) {
    return [];
  }
  const offsetX = osmd["container"].offsetLeft;
  const offsetY = osmd["container"].offsetTop;
  const boundingBoxes: BoundingBox[] = [];
  for (let i = 0; i < osmd.GraphicSheet.MeasureList.length; i++) {
    const m = osmd.GraphicSheet.MeasureList[i];
    const stave = m[staveIndex];
    let {
      stave: { x, y, width, height },
    } = stave as any;
    x = x + offsetX;
    y = y + offsetY;
    height = (height / 5) * 4;

    boundingBoxes.push({
      x,
      y,
      width,
      height,
      left: x,
      right: x + width,
      top: y,
      bottom: y + height,
    });
  }
  return boundingBoxes;
};

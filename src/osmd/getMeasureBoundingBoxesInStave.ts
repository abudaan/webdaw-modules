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
  const scrollPosX = window.scrollX;
  const scrollPosY = window.scrollY;
  const boundingBoxes: BoundingBox[] = [];
  for (let i = 0; i < osmd.GraphicSheet.MeasureList.length; i++) {
    const m = osmd.GraphicSheet.MeasureList[i];
    const stave = m[staveIndex];
    let {
      stave: { x, y, width, height },
    } = stave as any;
    x = x + offsetX + scrollPosX;
    y = y + offsetY + scrollPosY;

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

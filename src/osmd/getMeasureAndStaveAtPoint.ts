import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { hasOverlap } from "../util/2d";

type Result = { staveIndex: number; measureIndex: number };

export const getMeasureAndStaveAtPoint = (e: PointerEvent, osmd: OpenSheetMusicDisplay): Result => {
  const offsetX = osmd["container"].offsetLeft;
  const offsetY = osmd["container"].offsetTop;
  const scrollPosX = window.scrollX;
  const scrollPosY = window.scrollY;
  // const x = e.clientX + offsetX + scrollPosX;
  // const y = e.clientY + offsetY + scrollPosY;
  const x = e.clientX - offsetX + scrollPosX;
  const y = e.clientY - offsetY + scrollPosY;
  // console.log(offsetY, scrollPosY, x, y);

  const refClick = {
    top: y,
    bottom: y + 2,
    left: x,
    right: x + 2,
    x,
    y,
    width: 2,
    height: 2,
  };

  let staveIndex = -1;
  let measureIndex = -1;

  for (let i = 0; i < osmd.GraphicSheet.MeasureList.length; i++) {
    const m = osmd.GraphicSheet.MeasureList[i];
    for (let j = 0; j < m.length; j++) {
      const stave = m[j];
      const {
        stave: { x, y, width, height },
      } = stave as any;
      const refStave = {
        x,
        y,
        width,
        height,
        left: x,
        right: x + width,
        top: y,
        bottom: y + height,
      };
      if (hasOverlap(refClick, refStave)) {
        staveIndex = j;
        measureIndex = i;
        break;
      }
    }
  }
  // console.log(staveIndex, measureIndex);

  return {
    staveIndex,
    measureIndex,
  };
};

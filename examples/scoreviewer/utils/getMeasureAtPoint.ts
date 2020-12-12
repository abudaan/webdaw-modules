import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import { BoundingBox, hasOverlap } from 'webdaw-modules';
import { getBoundingBoxMeasureAll } from './getBoundingBoxMeasure';

type Result = { bbox: BoundingBox; measureNumber: number; offset: number } | null;

export const getMeasureAtPoint = (
  e: MouseEvent,
  osmd: OpenSheetMusicDisplay,
  bboxes?: BoundingBox[]
): Result => {
  const offsetX = osmd['container'].offsetLeft;
  const offsetY = osmd['container'].offsetTop;
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

  let boundingBoxes = bboxes;
  if (!boundingBoxes) {
    boundingBoxes = getBoundingBoxMeasureAll(osmd);
  }

  let result: Result;

  for (let i = 0; i < boundingBoxes.length; i++) {
    const bbox = boundingBoxes[i];
    const hit = hasOverlap(refClick, bbox);
    if (hit) {
      result = {
        bbox,
        measureNumber: i + 1,
        offset: x - bbox.x,
      };
      return result;
    }
  }

  return null;
};

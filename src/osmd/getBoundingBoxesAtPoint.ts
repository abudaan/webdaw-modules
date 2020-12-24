import { OpenSheetMusicDisplay, BoundingBox } from "opensheetmusicdisplay";
import { hasOverlap } from "../util/2d";
import { BoundingBox as BoundingBox2 } from "../types";
import { has } from "ramda";

const getBoundingBox = (boundingBox: BoundingBox): BoundingBox2 => {
  let {
    absolutePosition: { x, y },
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
  } = boundingBox as any;

  let width = borderRight - borderLeft;
  let height = borderBottom - borderTop;
  // console.log(width, height);
  x += borderLeft;
  y += borderTop;
  x *= 10;
  y *= 10;
  width *= 10;
  height *= 10;
  // width = width === 0 ? 0.5 : width;
  // height = height === 0 ? 1 : height;
  // console.log(x, y, width, height);
  const bbox = {
    x,
    y,
    width,
    height,
    left: x,
    right: x + width,
    top: y,
    bottom: y + height,
  };
  return bbox;
};

const checkBoundingBox = (boxes: BoundingBox[], refClick: BoundingBox2): BoundingBox2[] => {
  // console.log(boxes);
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    // const b = getBoundingBox(box);
    // if (hasOverlap(refClick, b)) {
    //   return [b];
    // } else if (
    if (
      box.ChildElements.length &&
      box.ChildElements[0].ChildElements &&
      box.ChildElements[0].ChildElements.length !== 0
    ) {
      return checkBoundingBox(box.ChildElements, refClick);
    } else {
      const b = getBoundingBox(box);
      const o = hasOverlap(refClick, b);
      if (b.width !== 0 && b.height !== 0) {
        // console.log(o);
        if (o) {
          // console.log(hasOverlap(refClick, b));
          return [b];
        }
      }
    }
  }
  return [];
};

export const getBoundingBoxesAtPoint = (
  e: PointerEvent,
  osmd: OpenSheetMusicDisplay
): BoundingBox2[] => {
  const offsetX = osmd["container"].offsetLeft;
  const offsetY = osmd["container"].offsetTop;
  const scrollPosX = window.scrollX;
  const scrollPosY = window.scrollY;
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

  for (let i = 0; i < osmd.GraphicSheet.MeasureList.length; i++) {
    const m = osmd.GraphicSheet.MeasureList[i];
    for (let j = 0; j < m.length; j++) {
      const stave = m[j];
      const { staffEntries } = stave;
      for (let k = 0; k < staffEntries.length; k++) {
        const staffEntry = staffEntries[k];
        const boundingBox: BoundingBox = (staffEntry as any).boundingBox;
        const result = checkBoundingBox([boundingBox], refClick);
        // console.log(k, result);
        if (result.length) {
          return result;
        }
      }
    }
  }
  return [];
};

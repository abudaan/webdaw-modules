import { OpenSheetMusicDisplay, BoundingBox } from "opensheetmusicdisplay";
import { hasOverlap } from "../util/2d";
import { BoundingBox as BoundingBox2 } from "../types";
import { has } from "ramda";

let t = 0;
const getBoundingBox = (boundingBox: BoundingBox): BoundingBox2 => {
  if (t <= 1) {
    console.log(boundingBox);
    // t++;
  }
  let {
    absolutePosition: { x, y },
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
  } = boundingBox as any;

  let width = 0.2; //x + borderRight - (x + borderLeft);
  let height = borderBottom - borderTop;
  // console.log(width, height);
  x += borderLeft;
  // y += borderTop;
  x *= 10;
  y *= 10;
  y -= 10;
  width *= 10;
  height *= 10;
  height = 70;
  // width = width === 0 ? 0.5 : width;
  // height = height === 0 ? 1 : height;
  if (t === 0) {
    console.log(x, y, width, height);
  }
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
  t++;
  return bbox;
};

const checkBoundingBox2 = (
  boxes: BoundingBox[],
  refClick: BoundingBox2,
  result: BoundingBox2[]
) => {
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    const b = getBoundingBox(box);
    if (hasOverlap(refClick, b)) {
      console.log("add 1", b);
      result.push(b);
    }

    if (
      box.ChildElements.length &&
      box.ChildElements[0].ChildElements &&
      box.ChildElements[0].ChildElements.length !== 0
    ) {
      checkBoundingBox2(box.ChildElements, refClick, result);
    } else {
      const b = getBoundingBox(box);
      const o = hasOverlap(refClick, b);
      if (b.width !== 0 && b.height !== 0) {
        // console.log(o);
        if (o) {
          // console.log(hasOverlap(refClick, b));
          result.push(b);
          console.log("add 2", b);
        }
      }
    }
  }
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

export const getChildren = (boundingBox: BoundingBox, result: BoundingBox2[]): void => {
  if (
    boundingBox.ChildElements.length &&
    boundingBox.ChildElements[0].ChildElements &&
    boundingBox.ChildElements[0].ChildElements.length !== 0
  ) {
    boundingBox.ChildElements.forEach(c => {
      result.push(getBoundingBox(c));
      getChildren(c, result);
    });
  }
};

export const getVerticalStaffEntryContainers = (
  e: PointerEvent,
  osmd: OpenSheetMusicDisplay
): [BoundingBox2[], BoundingBox2[]] => {
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

  const resultLevel1: BoundingBox2[] = [];
  const resultLevel2: BoundingBox2[] = [];
  for (let i = 0; i < osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.length; i++) {
    const c = osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers[i];
    c.StaffEntries.forEach(entry => {
      const boundingBox: BoundingBox = (entry as any).boundingBox;
      resultLevel1.push(getBoundingBox(boundingBox));
      getChildren(boundingBox, resultLevel2);
    });
    // checkBoundingBox2([boundingBox], refClick, result);
  }
  return [resultLevel1, resultLevel2];
};

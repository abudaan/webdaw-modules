// https://stackoverflow.com/questions/12066870/how-to-check-if-an-element-is-overlapping-other-elements

import { BoundingBox } from "../types";
export const hasOverlap = (rect1: BoundingBox, rect2: BoundingBox) => {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
};

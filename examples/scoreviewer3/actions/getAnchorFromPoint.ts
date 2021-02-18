import { AnchorData } from "webdaw-modules";
import { store } from "../store";

/**
 * User clicks somewhere in the score, look for the nearest anchor
 */
export const getAnchorFromPoint = (x: number, y: number): AnchorData | null => {
  const { playheadAnchors } = store.getState();

  // find the current and the next anchor and check which one is the closest to
  // the pointer position
  let i = 0;
  let anchor: AnchorData | null = null;
  let nextAnchor: AnchorData | null = null;
  for (; i < playheadAnchors.length; i++) {
    anchor = playheadAnchors[i];
    // console.log(i, y, anchor.bbox.y, anchor.bbox.y + anchor.bbox.height);
    if (anchor.bbox.x >= x && y >= anchor.bbox.y + 50 && y <= anchor.bbox.y + anchor.bbox.height) {
      nextAnchor = anchor;
      const index = i === 0 ? 0 : i - 1;
      anchor = playheadAnchors[index];
      const diff = nextAnchor.bbox.x - anchor.bbox.x;
      // console.log(x, anchor.bbox.x);
      // nextAnchor = anchor;
      if (x - anchor.bbox.x > diff / 2) {
        anchor = nextAnchor;
      }
      break;
    }
  }
  // console.log("song", x, "anchor", anchor?.bbox.x);
  return anchor;
};

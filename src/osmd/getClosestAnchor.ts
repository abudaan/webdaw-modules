import { AnchorData } from "./getPlayheadAnchorData";

type Args = {
  pointerX: number;
  anchors: AnchorData[];
  currentBarSong: number;
};

export const getClosestAnchor = ({ pointerX, currentBarSong, anchors }: Args): AnchorData | null => {
  // find the current and the previous anchor
  let anchor: AnchorData | null = null;
  for (let i = 0; i < anchors.length; i++) {
    anchor = anchors[i];
    // only test further if the anchor is in the current measure or the next one
    if (anchor.measureNumber === currentBarSong || anchor.measureNumber === currentBarSong + 1) {
      let index = i < anchors.length - 1 ? i + 1 : i;
      index = i === 0 ? 0 : i - 1;
      const previousAnchor = anchors[index];
      // test if the pointer is inside the anchor bbox
      if (anchor.bbox.x > pointerX) {
        // anchor is the first one in the next measure so choose the previous because
        // we always select an anchor that is inside the measure that the user has clicked on
        if (anchor.measureNumber !== currentBarSong) {
          anchor = previousAnchor;
          // console.log("> last in measure");
          break;
        }

        if (previousAnchor.measureNumber !== currentBarSong) {
          // console.log("> first in measure");
          break;
        }

        // now we have two anchors in the same measure; we select the anchor that is
        // the closest to the pointer position
        const diff1 = pointerX - (previousAnchor.bbox.x + previousAnchor.bbox.width);
        const diff2 = anchor.bbox.x - pointerX;
        // console.log(diff1, diff2);
        // console.log(pointerX, prev.bbox.x, diff1, anchor.bbox.x, diff2);
        if (diff1 < diff2) {
          anchor = previousAnchor;
          // console.log("> diff");
          break;
        }
        break;
      }
      //   } else if (anchor.measureNumber !== currentBarSong) {
      //     console.log("> stave");
      //     anchor = previousAnchor;
      //     break;
      // }
    }
  }
  return anchor;
};

import { songPositionFromScore, getMeasureAtPoint, AnchorData } from "webdaw-modules";
import { getSong } from "../songWrapper";
import { store } from "../store";
import { getOSMD } from "../scoreWrapper";

// briefly highlight the bar that the playhead is currently in
const debug = ({
  x,
  y,
  width,
  height,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
}) => {
  const d = document.createElement("div");
  d.className = "debug fadeOut";
  d.style.top = `${y}px`;
  d.style.left = `${x}px`;
  d.style.width = `${width}px`;
  d.style.height = `${height}px`;
  document.body.appendChild(d);
  setTimeout(() => {
    document.body.removeChild(d);
  }, 1000);
};

/**
 * User clicks somewhere in the score, we translate the position where the user clicked
 * to a position in the song.
 */
export const setPlayhead = (e: PointerEvent) => {
  const osmd = getOSMD();
  const data = getMeasureAtPoint(e, osmd);

  if (data !== null) {
    // data contains the bounding box of the measure, the measure number
    // and the offset, which is the x-position of the pointer event relative
    // to the start of the measure
    const {
      bbox: { x, y, height, width },
      measureNumber,
      offset,
    } = data;

    const song = getSong();
    const {
      playhead,
      repeats,
      offset: { x: offsetX, y: offsetY },
      playheadAnchors,
    } = store.getState();

    debug({ x: x + offsetX, y: y + offsetY, height, width });
    const { barSong: currentBarSong } = songPositionFromScore(repeats, measureNumber);
    const playheadOffsetX = playhead.width / 2;

    // find the current and the previous anchor
    const pointerX = x + offset;
    let anchor: AnchorData | null = null;
    for (let i = 0; i < playheadAnchors.length; i++) {
      anchor = playheadAnchors[i];
      // only test further if the anchor is in the current measure or the next one
      if (anchor.measureNumber === currentBarSong || anchor.measureNumber === currentBarSong + 1) {
        let index = i < playheadAnchors.length - 1 ? i + 1 : i;
        index = i === 0 ? 0 : i - 1;
        const previousAnchor = playheadAnchors[index];
        // test if the pointer is inside the anchor bbox
        if (anchor.bbox.x > pointerX) {
          // anchor is the first one in th next measure so choose the previous because
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

    if (anchor === null) {
      console.log("setPlayhead -> anchor is null");
      anchor = playheadAnchors[0];
    }
    song.setPlayhead("ticks", anchor === null ? 0 : anchor.startTicks);

    store.setState({
      currentBarSong,
      currentBarScore: measureNumber,
      currentPlayheadAnchor: anchor,
      playhead: {
        ...playhead,
        // x: x + offsetX + offset - playhead.width / 2,
        x: anchor === null ? 0 : anchor.bbox.x + offsetX - playheadOffsetX,
        y: anchor.yPos + offsetY,
        height: anchor.bboxMeasure.height,
      },
    });
  }
};

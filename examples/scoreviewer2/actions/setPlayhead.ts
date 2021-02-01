import {
  songPositionFromScore,
  getMeasureAtPoint,
  heartbeat_utils,
  AnchorData,
  match,
  scorePositionFromSong,
} from "webdaw-modules";
import { getSong } from "../songWrapper";
import { store } from "../store";
import { getOSMD } from "../scoreWrapper";
const { getBarInfo } = heartbeat_utils;

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
      boundingBoxesMeasures,
    } = store.getState();

    // debug({ x: x + offsetX, y: y + offsetY, height, width });
    const { barSong: currentBarSong } = songPositionFromScore(repeats, measureNumber);
    const { durationMillis, startMillis } = getBarInfo(song, currentBarSong);
    const pixelsPerMillisecond = width / durationMillis;
    // const songPositionMillis = startMillis + offset / pixelsPerMillisecond;
    // song.setPlayhead("millis", songPositionMillis);

    // find the current and the next anchor
    let i = 0;
    const pointerX = x + offset;
    let anchor: AnchorData | null = null;
    for (; i < playheadAnchors.length; i++) {
      anchor = playheadAnchors[i];
      if (anchor.measureNumber === currentBarSong || anchor.measureNumber === currentBarSong + 1) {
        const index = i === 0 ? 0 : i - 1;
        const prev = playheadAnchors[index];
        if (anchor.bbox.x > pointerX) {
          // console.log(
          //   "bar",
          //   currentBarSong,
          //   "prev",
          //   prev.measureNumber,
          //   "anchor",
          //   anchor.measureNumber
          // );
          if (anchor.measureNumber !== currentBarSong) {
            anchor = prev;
            console.log("> last in measure");
            break;
          }

          if (prev.measureNumber !== currentBarSong) {
            console.log("> first in measure");
            break;
          }

          const diff1 = pointerX - (prev.bbox.x + prev.bbox.width);
          const diff2 = anchor.bbox.x - pointerX;
          // console.log(diff1, diff2);
          // console.log(pointerX, prev.bbox.x, diff1, anchor.bbox.x, diff2);
          if (diff1 < diff2) {
            anchor = prev;
            console.log("> diff");
            break;
          }
          break;
        } else if (anchor.measureNumber !== currentBarSong) {
          console.log("> stave");
          anchor = prev;
          break;
        }
        // break;

        // console.log(anchor.measureNumber, currentBarSong);
        // if (i + 1 < playheadAnchors.length) {
        //   nextAnchor = playheadAnchors[i + 1];
        //   if (nextAnchor.measureNumber !== anchor.measureNumber) {
        //     console.log("last anchor in measure");
        //     return;
        //   }
        //   const diff1 = left - anchor.bbox.x;
        //   const diff2 = nextAnchor.bbox.x - left;
        //   // console.log(left, anchor.bbox.x, diff1, nextAnchor.bbox.x, diff2);
        //   if (diff1 < diff2) {
        //     break;
        //   } else {
        //     anchor = nextAnchor;
        //     break;
        //   }
        // }
      }
      // anchor = null;
    }
    // console.log(
    //   "song",
    //   x + offset,
    //   "anchor",
    //   anchor?.bbox.x,
    //   "bar",
    //   currentBarSong,
    //   anchor?.measureNumber
    // );
    song.setPlayhead("ticks", anchor === null ? 0 : anchor.ticks);

    store.setState({
      currentBarSong,
      currentBarScore: measureNumber,
      currentPlayheadAnchor: anchor,
      playhead: {
        ...playhead,
        // x: x + offsetX + offset - playhead.width / 2,
        x: anchor === null ? 0 : anchor.bbox.x + offsetX,
        y: y + offsetY,
        width: playhead.width,
        height,
      },
    });
  }
};

import { songPositionFromScore, getMeasureAtPoint, getClosestAnchor } from "webdaw-modules";
import { getSong } from "../songWrapper";
import { store } from "../store";
import { getOSMD } from "../scoreWrapper";

// briefly highlight the bar that the playhead is currently in
const highlight = ({
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
export const setPlayheadFromPointer = (e: PointerEvent) => {
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

    const {
      playhead,
      repeats,
      offset: { x: offsetX, y: offsetY },
      playheadAnchors,
    } = store.getState();

    highlight({ x: x + offsetX, y: y + offsetY, height, width });

    const song = getSong();
    const { barSong: currentBarSong } = songPositionFromScore(repeats, measureNumber);

    let anchor = getClosestAnchor({
      pointerX: x + offset,
      currentBarSong,
      anchors: playheadAnchors,
    });

    if (anchor === null) {
      console.log("setPlayhead -> anchor is null");
      anchor = playheadAnchors[0];
    }

    song.setPlayhead("ticks", anchor === null ? 0 : anchor.startTicks);

    const playheadOffsetX = playhead.width / 2;
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

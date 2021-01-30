import { songPositionFromScore, getMeasureAtPoint, heartbeat_utils } from "webdaw-modules";
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

  // console.log(data);
  if (data !== null) {
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
    } = store.getState();

    const { barSong: currentBarSong } = songPositionFromScore(repeats, measureNumber);
    const { durationMillis, startMillis } = getBarInfo(song, currentBarSong);
    const pixelsPerMillisecond = width / durationMillis;
    const songPositionMillis = startMillis + offset / pixelsPerMillisecond;

    debug({ x: x + offsetX, y: y + offsetY, height, width });

    song.setPlayhead("millis", songPositionMillis);

    store.setState({
      currentBarSong,
      currentBarScore: measureNumber,
      playhead: {
        ...playhead,
        x: x + offsetX + offset - playhead.width / 2,
        y: y + offsetY,
        width: playhead.width,
        height,
      },
    });
  }
};

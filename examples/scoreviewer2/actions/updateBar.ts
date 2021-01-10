import { scorePositionFromSong, heartbeat_utils } from "webdaw-modules";
import { getSong } from "../songWrapper";
import { store } from "../store";
const { getBarInfo } = heartbeat_utils;
/**
 * The song playhead enters a new bar
 */
export const updateBar = () => {
  const song = getSong();
  const {
    repeats,
    boundingBoxesMeasures,
    playhead,
    offset: { y: offsetY, x: offsetX },
  } = store.getState();

  const { bar } = scorePositionFromSong(repeats, song.bar);
  const { x, y, width, height } = boundingBoxesMeasures[bar - 1];
  const { durationMillis, startMillis } = getBarInfo(song, song.bar);
  const pixelsPerMillisecond = width / durationMillis;
  store.setState({
    pixelsPerMillisecond,
    playhead: {
      x: x + offsetX,
      y: y + offsetY,
      height,
      width: playhead.width,
    },
    currentBarScore: bar,
    currentBarSong: song.bar,
    currentBarStartX: x,
    currentBarStartMillis: startMillis,
  });
};

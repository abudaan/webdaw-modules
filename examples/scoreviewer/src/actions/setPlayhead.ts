import { songPositionFromScore } from '../utils/songPositionFromScore';
import { getBarInfo } from '../utils/getBarInfo';
import { getBoundingBoxMeasureAll } from '../utils/getBoundingBoxMeasure';
import { getMeasureAtPoint } from '../utils/getMeasureAtPoint';
import { getSong } from '../songWrapper';
import { store } from '../store';
import { getOSMD } from '../scoreWrapper';

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
  const d = document.createElement('div');
  d.className = 'debug fadeOut';
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
  const data = getMeasureAtPoint(e, osmd, getBoundingBoxMeasureAll(osmd));

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
      hasRepeated,
      offset: { x: offsetX, y: offsetY },
    } = store.getState();

    const { barSong: currentBarSong, hasRepeated: hasRepeatedClone } = songPositionFromScore(
      repeats,
      hasRepeated,
      measureNumber
    );
    const { durationMillis, startMillis } = getBarInfo(song, currentBarSong);
    const pixelsPerMillisecond = width / durationMillis;
    const songPositionMillis = startMillis + offset / pixelsPerMillisecond;

    debug({ x: x + offsetX, y: y + offsetY, height, width });

    song.setPlayhead('millis', songPositionMillis);

    store.setState({
      pixelsPerMillisecond,
      currentBarSong,
      currentBarScore: measureNumber,
      currentBarStartX: x,
      currentBarStartMillis: startMillis,
      playhead: {
        x: x + offsetX + offset,
        y: y + offsetY,
        width: playhead.width,
        height,
      },
      hasRepeated: hasRepeatedClone,
    });
  }
};

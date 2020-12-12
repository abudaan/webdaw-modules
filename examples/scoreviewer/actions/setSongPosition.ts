import { store } from '../store';

export const setSongPosition = (millis: number) => {
  const {
    offset: { x: offsetX },
    currentBarStartX,
    currentBarStartMillis,
    pixelsPerMillisecond,
    playhead,
  } = store.getState();

  const relPos = millis - currentBarStartMillis;

  store.setState({
    playhead: {
      ...playhead,
      x: offsetX + currentBarStartX + relPos * pixelsPerMillisecond,
    },
  });
};

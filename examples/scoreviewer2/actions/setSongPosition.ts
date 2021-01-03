import { store } from "../store";

export const setSongPosition = (millis: number, ticks: number) => {
  const {
    offset: { x: offsetX },
    currentBarStartX,
    currentBarStartMillis,
    pixelsPerMillisecond,
    playhead,
    playheadAnchors,
  } = store.getState();

  const relPos = millis - currentBarStartMillis;

  let x = 0;
  let i = 0;
  for (; i < playheadAnchors.length; i++) {
    const { ticks: nextTicks, bbox } = playheadAnchors[i];
    if (nextTicks > ticks) {
      break;
    }
    x = bbox.x;
  }

  store.setState({
    playhead: {
      ...playhead,
      x,
      // x: offsetX + currentBarStartX + relPos * pixelsPerMillisecond,
    },
  });
};

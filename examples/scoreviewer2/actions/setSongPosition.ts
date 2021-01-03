import { BBox } from "webdaw-modules";
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

  let i = 0;
  let x = 0;
  let anchor: { ticks: number; bbox: BBox } | null = null;
  let nextAnchor: { ticks: number; bbox: BBox } | null = null;
  for (; i < playheadAnchors.length; i++) {
    anchor = playheadAnchors[i];
    if (anchor.ticks > ticks) {
      nextAnchor = anchor;
      const index = i === 0 ? 0 : i - 1;
      anchor = playheadAnchors[index];
      break;
    }
  }
  if (anchor !== null && nextAnchor !== null) {
    let diffPixels = nextAnchor.bbox.x - anchor.bbox.x;
    const diffTicks = nextAnchor.ticks - anchor.ticks;
    if (diffPixels > 0) {
      const pixelsPerTick = diffPixels / diffTicks;
      // console.log(pixelsPerTick);
      x = anchor.bbox.x - 10 + (ticks - anchor.ticks) * pixelsPerTick;
    } else {
      // console.log(diffPixels);
      diffPixels = anchor.bbox.width;
      const pixelsPerTick = diffPixels / diffTicks;
      // console.log(pixelsPerTick);
      x = anchor.bbox.x - 10 + (ticks - anchor.ticks) * pixelsPerTick;
    }
  }

  store.setState({
    playhead: {
      ...playhead,
      x,
      // x: offsetX + currentBarStartX + relPos * pixelsPerMillisecond,
    },
    currentPlayheadAnchor: anchor,
  });
};

import { AnchorData, scorePositionFromSong } from "webdaw-modules";
import { store } from "../store";

export const setSongPosition = (millis: number, ticks: number, bar: number) => {
  const {
    playhead,
    playheadAnchors,
    currentPlayheadAnchor,
    offset: { x: offsetX, y: offsetY },
  } = store.getState();

  let i = 0;
  let x = 0;
  let anchor: AnchorData | null = null;
  let nextAnchor: AnchorData | null = null;
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

    if (currentPlayheadAnchor?.measureNumber !== anchor.measureNumber) {
      const { repeats, boundingBoxesMeasures } = store.getState();
      const { bar: scoreBar } = scorePositionFromSong(repeats, bar);
      const { y, height } = boundingBoxesMeasures[scoreBar - 1];
      store.setState({
        playhead: {
          ...playhead,
          x: x + offsetX,
          y: y + offsetY,
          height,
        },
        currentPlayheadAnchor: anchor,
      });
    } else {
      store.setState({
        playhead: {
          ...playhead,
          x: x + offsetX,
        },
        currentPlayheadAnchor: anchor,
      });
    }
  }
};

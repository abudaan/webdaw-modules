import { AnchorData, scorePositionFromSong } from "webdaw-modules";
import { store } from "../store";

export const setSongPosition = (millis: number, ticks: number, bar: number) => {
  const {
    playhead,
    playheadAnchors,
    currentPlayheadAnchor,
    offset: { x: offsetX, y: offsetY },
  } = store.getState();

  const playheadOffsetX = playhead.width / 2;

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
      // the next anchor is on the same staff
      const pixelsPerTick = diffPixels / diffTicks;
      x = anchor.bbox.x - playheadOffsetX + (ticks - anchor.ticks) * pixelsPerTick;
    } else {
      // the next anchor is on the next staff
      diffPixels = anchor.bbox.width;
      const pixelsPerTick = diffPixels / diffTicks;
      x = anchor.bbox.x - playheadOffsetX + (ticks - anchor.ticks) * pixelsPerTick;
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
    // } else if (currentPlayheadAnchor !== null) {
    //   // we are at the end of the song
    //   const { measureStartTicks } = store.getState();
    //   const diffTicks = measureStartTicks[measureStartTicks.length - 1] - currentPlayheadAnchor.ticks;
    //   console.log(currentPlayheadAnchor, measureStartTicks[measureStartTicks.length - 1]);
    //   const diffPixels = currentPlayheadAnchor.bbox.width;
    //   const pixelsPerTick = diffPixels / diffTicks;
    //   x =
    //     currentPlayheadAnchor.bbox.x -
    //     playheadOffsetX +
    //     (ticks - currentPlayheadAnchor.ticks) * pixelsPerTick;
    //   store.setState({
    //     playhead: {
    //       ...playhead,
    //       x: x + offsetX,
    //     },
    //     currentPlayheadAnchor: null,
    //   });
  }
};

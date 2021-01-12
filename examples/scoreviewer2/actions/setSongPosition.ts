import { AnchorData, scorePositionFromSong } from "webdaw-modules";
import { store } from "../store";
import { getSong } from "../songWrapper";

export const setSongPosition = (millis: number, ticks: number, bar: number) => {
  const {
    playhead,
    playheadAnchors,
    measureStartTicks,
    currentPlayheadAnchor,
    boundingBoxesMeasures,
    jumpToNextStave,
    offset: { x: offsetX, y: offsetY },
  } = store.getState();

  const song = getSong();
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

  let endBarTicks = 0;
  let endBarMillis = 0;

  if (anchor !== null && nextAnchor !== null) {
    endBarTicks = measureStartTicks[nextAnchor.measureNumber - 1];
    endBarMillis = song.getPosition("ticks", endBarTicks).millis;
    let diffPixels = nextAnchor.bbox.x - anchor.bbox.x;
    const diffTicks = nextAnchor.ticks - anchor.ticks;
    if (diffPixels > 0) {
      // the next anchor is on the same staff
      const pixelsPerTick = diffPixels / diffTicks;
      // console.log(diffPixels, anchor.bbox.width);
      // const pixelsPerTick = anchor.bbox.width / diffTicks;
      x = anchor.bbox.x - playheadOffsetX + (ticks - anchor.ticks) * pixelsPerTick;
    } else {
      // the next anchor is on the next staff
      diffPixels = boundingBoxesMeasures[anchor.measureNumber - 1].right - anchor.bbox.x;
      const pixelsPerTick = diffPixels / diffTicks;
      x = anchor.bbox.x - playheadOffsetX + (ticks - anchor.ticks) * pixelsPerTick;
    }

    // console.log(jumpToNextStave);
    // console.log(endBarMillis);
    if (millis >= endBarMillis - 100) {
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
        jumpToNextStave: false,
      });
    } else {
      store.setState({
        playhead: {
          ...playhead,
          x: x + offsetX,
        },
        currentPlayheadAnchor: anchor,
        jumpToNextStave: ticks >= endBarTicks,
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

import { AnchorData, match, scorePositionFromSong } from "webdaw-modules";
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
    lastMillis,
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

  let nextBarTicks = 0;
  let nextBarMillis = 0;
  let diffTicks = playhead.diffTicks;
  let diffPixels = playhead.diffPixels;
  let pixelsPerTick = playhead.pixelsPerTick;
  if (currentPlayheadAnchor && anchor && nextAnchor && currentPlayheadAnchor.ticks < anchor.ticks) {
    // we have moved to a new anchor
    const currentMeasureIndex = anchor.measureNumber - 1;
    const nextMeasureIndex = currentMeasureIndex + 1;
    nextBarTicks = measureStartTicks[nextMeasureIndex];
    nextBarMillis = song.getPosition("ticks", nextBarTicks).millis;
    // console.log("next anchor", anchor.ticks, anchor.measureNumber, ticks, millis, nextBarMillis);
    diffTicks = nextAnchor.ticks - anchor.ticks;
    diffPixels = nextAnchor.bbox.x - anchor.bbox.x;
    if (diffPixels <= 0) {
      diffPixels = boundingBoxesMeasures[anchor.measureNumber - 1].right - anchor.bbox.x;
    }
    pixelsPerTick = diffPixels / diffTicks;
  }

  if (anchor) {
    x = anchor.bbox.x - playheadOffsetX + (ticks - anchor.ticks) * pixelsPerTick;
    const { repeats } = store.getState();
    const { bar: scoreBar } = scorePositionFromSong(repeats, bar);
    // const { y, height } = boundingBoxesMeasures[scoreBar - 1];
    const { y, height } = boundingBoxesMeasures[anchor.measureNumber - 1];
    store.setState({
      playhead: {
        ...playhead,
        x: x + offsetX,
        y: y + offsetY,
        height,
        pixelsPerTick,
      },
      currentPlayheadAnchor: millis >= nextBarMillis ? anchor : currentPlayheadAnchor,
    });
  }

  // } else {
  //   store.setState({
  //     playhead: {
  //       ...playhead,
  //       x: x + offsetX,
  //     },
  //     currentPlayheadAnchor: anchor,
  //     jumpToNextStave: ticks >= endBarTicks,
  //     lastMillis: millis,
  //   });
  // }
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
};

import { AnchorData, match, scorePositionFromSong } from "webdaw-modules";
import { store } from "../store";
import { getSong } from "../songWrapper";

export const setSongPosition = (millis: number, ticks: number, bar: number) => {
  const {
    repeats,
    playhead,
    playheadAnchors,
    measureStartTicks,
    currentPlayheadAnchor,
    boundingBoxesMeasures,
    offset: { x: offsetX, y: offsetY },
  } = store.getState();

  const song = getSong();
  // console.log(song.bars, song.durationMillis, song.durationTicks);
  const playheadOffsetX = playhead.width / 2;

  // find the current and the next anchor
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

  // calculate the speed of the playhead based on the distance between the anchors
  let nextBarTicks = 0;
  let nextBarMillis = 0;
  let diffTicks = playhead.diffTicks;
  let diffPixels = playhead.diffPixels;
  let pixelsPerTick = playhead.pixelsPerTick;
  const refTicks = currentPlayheadAnchor !== null ? currentPlayheadAnchor.ticks : 0;

  // console.log(refTicks, currentPlayheadAnchor, anchor?.ticks);
  // if (anchor && nextAnchor && refTicks < anchor.ticks) {
  if (currentPlayheadAnchor && anchor && nextAnchor && currentPlayheadAnchor.ticks < anchor.ticks) {
    // we have moved to a new anchor so we need to recalculate the playhead speed
    const currentMeasureIndex = anchor.measureNumber - 1;
    const nextMeasureIndex = currentMeasureIndex + 1;
    nextBarTicks = measureStartTicks[nextMeasureIndex];
    nextBarMillis = song.getPosition("ticks", nextBarTicks).millis;
    diffTicks = nextAnchor.ticks - anchor.ticks;
    diffPixels = nextAnchor.bbox.x - anchor.bbox.x;
    if (diffPixels <= 0) {
      diffPixels = boundingBoxesMeasures[anchor.measureNumber - 1].right - anchor.bbox.x;
    }
    pixelsPerTick = diffPixels / diffTicks;
  }
  // console.log(nextAnchor);

  if (anchor) {
    x = anchor.bbox.x - playheadOffsetX + (ticks - anchor.ticks) * pixelsPerTick;
    const { bar: scoreBar } = scorePositionFromSong(repeats, bar);
    const { y, height } = boundingBoxesMeasures[scoreBar - 1];
    // update the current anchor as soon as the playhead has passed the anchor (in millis)
    let newAnchor = currentPlayheadAnchor;
    if (millis >= nextBarMillis || currentPlayheadAnchor === null) {
      newAnchor = anchor;
    }
    store.setState({
      playhead: {
        ...playhead,
        x: x + offsetX,
        y: y + offsetY,
        height,
        pixelsPerTick,
      },
      // currentPlayheadAnchor: newAnchor,
      currentPlayheadAnchor: millis >= nextBarMillis ? anchor : currentPlayheadAnchor,
    });
  } else {
    console.log("no anchor?");
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

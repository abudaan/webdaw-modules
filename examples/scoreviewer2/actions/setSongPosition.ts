import { AnchorData, scorePositionFromSong } from "webdaw-modules";
import { store } from "../store";
import { getSong } from "../songWrapper";

export const setSongPosition = (millis: number, ticks: number, bar: number) => {
  const {
    repeats,
    playhead,
    playheadAnchors,
    measureStartTicks,
    currentPlayheadAnchor,
    nextPlayheadAnchor,
    boundingBoxesMeasures,
    offset: { x: offsetX, y: offsetY },
  } = store.getState();

  const song = getSong();
  const playheadOffsetX = playhead.width / 2;
  const { bar: nextBar } = scorePositionFromSong(repeats, bar + 1);
  // console.log(bar, nextBar);

  // if (
  //   currentPlayheadAnchor === null ||
  //   (nextPlayheadAnchor !== null && ticks >= nextPlayheadAnchor.ticks)
  // ) {
  // console.log("recalculate", currentPlayheadAnchor?.ticks, ticks);
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

  if (anchor === null) {
    console.error("could not find an anchor");
    return;
  }

  // calculate the speed of the playhead based on the distance between the anchors
  let nextX = 0;
  let diffTicks = playhead.diffTicks;
  let diffPixels = playhead.diffPixels;
  let pixelsPerTick = playhead.pixelsPerTick;

  if (nextAnchor === null) {
    // if there is no nextAnchor we have reached the end of the song, in that case we count
    // the pixels and ticks that are left in the current measure
    nextX = boundingBoxesMeasures[anchor.measureNumber - 1].right;
    diffTicks = song.durationTicks - anchor.ticks;
  } else {
    nextX = nextAnchor.bbox.x;
    diffTicks = nextAnchor.ticks - anchor.ticks;
  }
  diffPixels = nextX - anchor.bbox.x;
  // if diffPixels is less than 0 we have moved to the next stave, in that case we count
  // the pixels and ticks that are left in the current measure
  if (diffPixels < 0) {
    const currentMeasureIndex = anchor.measureNumber - 1;
    const nextMeasureIndex = currentMeasureIndex + 1;
    nextX = boundingBoxesMeasures[currentMeasureIndex].right;
    diffTicks = measureStartTicks[nextMeasureIndex] - anchor.ticks;
    diffPixels = nextX - anchor.bbox.x;
    // console.log("next stave", diffPixels, diffTicks);
  }
  if (
    nextBar < anchor.measureNumber &&
    (nextAnchor === null || nextAnchor?.measureNumber !== anchor.measureNumber)
  ) {
    // console.log("REPEAT", nextBar, bar, anchor.measureNumber);
  }
  pixelsPerTick = diffPixels / diffTicks;

  x = anchor.bbox.x + (ticks - anchor.ticks) * pixelsPerTick;
  // update the current anchor as soon as the playhead has passed the anchor (in millis)
  // let newAnchor = currentPlayheadAnchor;
  // if (millis >= nextBarMillis || currentPlayheadAnchor === null) {
  //   // console.log("what is this?");
  //   newAnchor = anchor;
  // }

  const { bar: scoreBar } = scorePositionFromSong(repeats, anchor.measureNumber);
  const { y, height } = boundingBoxesMeasures[scoreBar - 1];

  store.setState({
    playhead: {
      ...playhead,
      x: x + offsetX - playheadOffsetX,
      // x: anchor.bbox.x + offsetX - playhead.width / 2,
      y: y + offsetY,
      height,
      pixelsPerTick,
    },
    currentPlayheadAnchor: anchor,
    nextPlayheadAnchor: nextAnchor,
    // currentPlayheadAnchor: millis >= nextBarMillis ? anchor : currentPlayheadAnchor,
  });
  // } else {
  //   const x =
  //     currentPlayheadAnchor.bbox.x -
  //     playheadOffsetX +
  //     (ticks - currentPlayheadAnchor.ticks) * playhead.pixelsPerTick;

  //   const { bar: scoreBar } = scorePositionFromSong(repeats, currentPlayheadAnchor.measureNumber);
  //   const { y, height } = boundingBoxesMeasures[scoreBar - 1];

  //   store.setState({
  //     playhead: {
  //       ...playhead,
  //       x: x + offsetX - playhead.width / 2,
  //       y: y + offsetY,
  //       height,
  //     },
  //   });
  // }
};

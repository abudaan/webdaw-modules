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

  // const refTicks = currentPlayheadAnchor !== null ? currentPlayheadAnchor.ticks : 0;
  // console.log(refTicks, currentPlayheadAnchor, anchor?.ticks);
  // if (anchor && nextAnchor && refTicks < anchor.ticks) {

  // here we test if we have reached a new anchor, if so we need to recalculate the playhead speed
  if (anchor && (currentPlayheadAnchor === null || currentPlayheadAnchor.ticks < anchor.ticks)) {
    const currentMeasureIndex = anchor.measureNumber - 1;
    const nextMeasureIndex = currentMeasureIndex + 1;
    nextBarTicks = measureStartTicks[nextMeasureIndex];
    nextBarMillis = song.getPosition("ticks", nextBarTicks).millis;
    if (nextAnchor !== null) {
      diffTicks = nextAnchor.ticks - anchor.ticks;
      diffPixels = nextAnchor.bbox.x - anchor.bbox.x;
    } else {
      // if there is no nextAnchor we have reached the end of the song, in that case we count
      // the pixels and ticks that are left in the current measure
      diffTicks = song.durationTicks - anchor.ticks;
      diffPixels = boundingBoxesMeasures[anchor.measureNumber - 1].right - anchor.bbox.x;
    }
    // if diffPixels is less than 0 we have moved to the next stave, in that case we count
    // the pixels and ticks that are left in the current measure
    if (diffPixels < 0) {
      diffTicks = song.durationTicks - anchor.ticks;
      diffPixels = boundingBoxesMeasures[anchor.measureNumber - 1].right - anchor.bbox.x;
    }
    pixelsPerTick = diffPixels / diffTicks;
    store.setState({
      currentPlayheadAnchor: anchor,
    });
    console.log("new anchor", anchor.ticks, anchor.bbox.x);
  }

  if (anchor) {
    x = anchor.bbox.x - playheadOffsetX + (ticks - anchor.ticks) * pixelsPerTick;
    const { bar: scoreBar } = scorePositionFromSong(repeats, bar);
    const { y, height } = boundingBoxesMeasures[scoreBar - 1];
    // update the current anchor as soon as the playhead has passed the anchor (in millis)
    // let newAnchor = currentPlayheadAnchor;
    // if (millis >= nextBarMillis || currentPlayheadAnchor === null) {
    //   // console.log("what is this?");
    //   newAnchor = anchor;
    // }
    store.setState({
      playhead: {
        ...playhead,
        x: x + offsetX - playhead.width / 2,
        y: y + offsetY,
        height,
        pixelsPerTick,
      },
      // currentPlayheadAnchor: newAnchor,
      // currentPlayheadAnchor: millis >= nextBarMillis ? anchor : currentPlayheadAnchor,
    });
  } else {
    console.error("no anchor");
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

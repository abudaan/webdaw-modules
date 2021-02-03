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
  // console.log(
  //   millis,
  //   song.getPosition("ticks", nextPlayheadAnchor?.ticks).millis,
  //   nextPlayheadAnchor?.ticks
  // );
  // if (
  //   currentPlayheadAnchor === null ||
  //   (nextPlayheadAnchor !== null &&
  //     millis >= song.getPosition("ticks", nextPlayheadAnchor.ticks).millis)
  // ) {
  // console.log(
  //   "recalculate",
  //   millis,
  //   song.getPosition("ticks", nextPlayheadAnchor?.ticks || 0).millis
  // );

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
  let diffTicks = playhead.diffTicks;
  let diffPixels = playhead.diffPixels;
  let pixelsPerTick = playhead.pixelsPerTick;

  let nextPosY = playhead.y;
  if (nextAnchor) {
    const { bar: barNumber } = scorePositionFromSong(repeats, nextAnchor.measureNumber);
    nextPosY = boundingBoxesMeasures[barNumber - 1].top + offsetY;
  }

  if (nextAnchor === null) {
    // if there is no nextAnchor we have reached the end of the song, in that case we count
    // the pixels and ticks that are left in the current measure, so nextX is the end of the
    // current bar and the amount of ticks left is the difference between the end of the song
    // and the last anchor
    diffTicks = song.durationTicks - anchor.ticks;
    const { bar: barNumber } = scorePositionFromSong(repeats, anchor.measureNumber);
    const endOfLastBar = boundingBoxesMeasures[barNumber - 1].right;
    diffPixels = endOfLastBar - anchor.bbox.x;
  } else if (nextPosY !== playhead.y) {
    // if the next anchor has a different y position we will move to another staff
    if (currentPlayheadAnchor !== null) {
      diffTicks =
        measureStartTicks[currentPlayheadAnchor.measureNumber] - currentPlayheadAnchor.ticks;
      const { bar: barNumber } = scorePositionFromSong(
        repeats,
        currentPlayheadAnchor.measureNumber
      );
      const endOfCurrentBar = boundingBoxesMeasures[barNumber - 1].right;
      diffPixels = endOfCurrentBar - currentPlayheadAnchor.bbox.x;
    }
    console.log(
      "Y",
      nextPosY,
      diffPixels,
      diffTicks,
      measureStartTicks[nextAnchor.measureNumber - 1],
      anchor,
      nextAnchor
    );
  } else {
    // we are moving to a next anchor on the same staff
    diffTicks = nextAnchor.ticks - anchor.ticks;
    diffPixels = nextAnchor.bbox.x - anchor.bbox.x;
  }

  pixelsPerTick = diffPixels / diffTicks;
  x = anchor.bbox.x + (ticks - anchor.ticks) * pixelsPerTick;
  const { bar: scoreBar } = scorePositionFromSong(repeats, anchor.measureNumber);
  const { y, height } = boundingBoxesMeasures[scoreBar - 1];

  store.setState({
    playhead: {
      ...playhead,
      x: x + offsetX - playheadOffsetX,
      // uncomment this line if you want the playhead to jump from anchor to anchor
      // instead of a smooth movement
      // x: anchor.bbox.x + offsetX - playhead.width / 2,
      y: y + offsetY,
      height,
      pixelsPerTick,
    },
    currentPlayheadAnchor: anchor,
    nextPlayheadAnchor: nextAnchor,
  });
  // if (pixelsPerTick === Infinity) {
  //   console.log(anchor, nextAnchor, diffTicks, diffPixels);
  // }
  // } else {
  //   const x =
  //     currentPlayheadAnchor.bbox.x + (ticks - currentPlayheadAnchor.ticks) * playhead.pixelsPerTick;

  //   store.setState({
  //     playhead: {
  //       ...playhead,
  //       x: x + offsetX - playheadOffsetX,
  //     },
  //   });
  // }
};

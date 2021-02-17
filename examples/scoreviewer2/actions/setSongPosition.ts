import { AnchorData, scorePositionFromSong } from "webdaw-modules";
import { store } from "../store";
import { getSong } from "../songWrapper";

export const setSongPosition = (millis: number, ticks: number, bar: number) => {
  const {
    repeats,
    playhead,
    playheadAnchors,
    currentPlayheadAnchor,
    boundingBoxesMeasures,
    offset: { x: offsetX, y: offsetY },
  } = store.getState();

  const song = getSong();
  const playheadOffsetX = playhead.width / 2;

  // currentPlayheadAnchor === null || millis >= song.getPosition("ticks", currentPlayheadAnchor.endTicks).millis) {
  if (currentPlayheadAnchor === null || ticks >= currentPlayheadAnchor.endTicks) {
    // find the current anchor
    let anchor: AnchorData | null = null;
    for (let i = 0; i < playheadAnchors.length; i++) {
      anchor = playheadAnchors[i];
      if (anchor.startTicks > ticks) {
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
    const x = anchor.bbox.x + (ticks - anchor.startTicks) * anchor.pixelsPerTick;

    store.setState({
      playhead: {
        ...playhead,
        x: x + offsetX - playheadOffsetX,
        y: anchor.yPos + offsetY,
        height: anchor.bboxMeasure.height,
      },
      currentPlayheadAnchor: anchor,
    });
  } else {
    const x =
      currentPlayheadAnchor.bbox.x +
      (ticks - currentPlayheadAnchor.startTicks) * currentPlayheadAnchor.pixelsPerTick;

    store.setState({
      playhead: {
        ...playhead,
        x: x + offsetX - playheadOffsetX,
      },
    });
  }
};

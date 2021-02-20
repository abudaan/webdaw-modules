import { AnchorData } from "webdaw-modules";
import { store } from "../store";
import { getSong } from "../songWrapper";

export const setSongPosition = (millis: number, ticks: number) => {
  const {
    playhead,
    playheadAnchors,
    currentPlayheadAnchor,
    offset: { x: offsetX, y: offsetY },
  } = store.getState();

  const playheadOffsetX = playhead.width / 2;

  // TODO: check here which is the next bar in case of looping!!!

  // here we check if the position in ticks has passed the current anchor, you can
  // also perform this check in millis like so:
  //
  // currentPlayheadAnchor === null || millis >= song.getPosition("ticks", currentPlayheadAnchor.endTicks).millis) {
  //
  console.log(ticks, currentPlayheadAnchor?.endTicks);
  const endMillis = currentPlayheadAnchor
    ? getSong().getPosition("ticks", currentPlayheadAnchor.endTicks).millis
    : 0;
  if (currentPlayheadAnchor === null || millis >= endMillis) {
    // if (currentPlayheadAnchor === null || ticks >= currentPlayheadAnchor.endTicks) {
    // find the current anchor
    let anchor: AnchorData | null = null;
    let i = 0;
    let index = 0;
    for (; i < playheadAnchors.length; i++) {
      anchor = playheadAnchors[i];
      if (anchor?.startTicks > ticks) {
        index = i === 0 ? 0 : i - 1;
        anchor = playheadAnchors[index];
        break;
      }
    }
    console.log("update", millis, endMillis, index);

    if (anchor === null) {
      console.error("could not find an anchor");
      return;
    }

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

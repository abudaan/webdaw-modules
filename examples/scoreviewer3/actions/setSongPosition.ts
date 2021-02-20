import { AnchorData } from "webdaw-modules";
import { store } from "../store";
import { getSong } from "../songWrapper";

export const setSongPosition = (millis: number, ticks: number) => {
  const {
    playhead,
    playheadAnchors,
    currentPlayheadAnchor,
    offset: { x: offsetX, y: offsetY },
    loops,
  } = store.getState();

  const playheadOffsetX = playhead.width / 2;

  // check if we are in a loop
  let inLoop = false;
  let currentLoop = null;
  const currentMeasureNumber = currentPlayheadAnchor ? currentPlayheadAnchor.measureNumber : 1;
  if (loops.length) {
    // presently only a single loop is supported
    currentLoop = loops[0];
    inLoop = millis >= currentLoop.startMillis && millis < currentLoop.endMillis;
  }

  // here we check if the position in ticks has passed the current anchor, you can
  // also perform this check in millis like so:
  //
  // currentPlayheadAnchor === null || millis >= song.getPosition("ticks", currentPlayheadAnchor.endTicks).millis) {
  //

  let endMillis = currentPlayheadAnchor
    ? getSong().getPosition("ticks", currentPlayheadAnchor.endTicks).millis
    : 0;

  // console.log(ticks, currentPlayheadAnchor?.endTicks);
  console.log(millis, endMillis);

  if (inLoop && currentMeasureNumber === currentLoop.endBar) {
  }

  if (currentPlayheadAnchor === null || millis >= endMillis) {
    // if (currentPlayheadAnchor === null || ticks >= currentPlayheadAnchor.endTicks) {
    const currentMeasureNumber = currentPlayheadAnchor ? currentPlayheadAnchor.measureNumber : 1;
    // find the current anchor
    let anchor: AnchorData | null = null;
    console.log("UPDATE");

    let i = 0;
    let index = 0;
    if (inLoop && currentMeasureNumber === currentLoop.endBar) {
      console.log("in loop");
      for (; i < playheadAnchors.length; i++) {
        anchor = playheadAnchors[i];
        if (anchor?.measureNumber === currentLoop.startBar) {
          index = i === 0 ? 0 : i - 1;
          anchor = playheadAnchors[index];
          break;
        }
      }
    } else {
      for (; i < playheadAnchors.length; i++) {
        anchor = playheadAnchors[i];
        if (anchor?.startTicks > ticks) {
          index = i === 0 ? 0 : i - 1;
          anchor = playheadAnchors[index];
          break;
        }
      }
      // console.log("update", millis, endMillis, index);
    }

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

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
    ppq,
  } = store.getState();

  // choose to use millis or ticks to check if the playhead has passed the current anchor
  // millis is recommended when you use a low ppq value and your song has a slow tempo
  const useMillis = false;
  const playheadOffsetX = playhead.width / 2;
  const currentMeasureNumber = currentPlayheadAnchor ? currentPlayheadAnchor.measureNumber : 1;

  let forceUpdate = false;
  if (currentPlayheadAnchor !== null) {
    if (loops.length) {
      // check if we are in a loop and if we've reached the last anchor before the song repeats
      // presently only a single loop is supported
      const currentLoop = loops[0];
      // const inLoop = millis >= currentLoop.startMillis && millis < currentLoop.endMillis;
      if (
        currentPlayheadAnchor.measureNumber === currentLoop.endBar &&
        currentPlayheadAnchor.nextAnchor &&
        currentPlayheadAnchor.nextAnchor.measureNumber !== currentMeasureNumber
      ) {
        // if (useMillis) {
        //   const endMillis = getSong().getPosition("ticks", currentPlayheadAnchor.endTicks).millis;
        //   forceUpdate = millis >= endMillis - 50;
        // } else {
        //   // check if the position in ticks has passed the current anchor
        //   forceUpdate = ticks >= currentPlayheadAnchor.endTicks - Math.max(ppq / 8, 120);
        // }
        forceUpdate = true;
      }
    }
    if (forceUpdate === false) {
      if (useMillis) {
        // check if the position in millis has passed the current anchor
        const endMillis = getSong().getPosition("ticks", currentPlayheadAnchor.endTicks).millis;
        forceUpdate = millis >= endMillis;
      } else {
        // check if the position in ticks has passed the current anchor
        forceUpdate = ticks >= currentPlayheadAnchor.endTicks;
      }
    }
  }

  // console.log(ticks, currentPlayheadAnchor?.endTicks);
  // console.log(millis, endMillis);

  if (currentPlayheadAnchor === null || forceUpdate) {
    // find the current anchor
    let anchor: AnchorData | null = null;
    // console.log("UPDATE");

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

import { getCurrentAnchor } from "webdaw-modules";
import { store } from "../store";
import { getSong } from "../songWrapper";

export const setSongPosition = (millis: number, ticks: number) => {
  const {
    playhead,
    playheadAnchors: anchors,
    currentPlayheadAnchor: currentAnchor,
    offset: { x: offsetX, y: offsetY },
    loops,
  } = store.getState();

  // decide whether the playhead should jump from anchor to anchor or travel smoothly
  // between anchors, sometimes jumping looks better
  const smooth = true;

  // choose to use millis or ticks to check if the playhead has passed the current anchor
  // millis is recommended when you use a low ppq value and your song has a slow tempo
  // if you want to use millis, pass a positive value with the endMillis key to getCurrentAnchor()
  const useMillis = true;
  let endMillis = -1;
  if (currentAnchor && useMillis) {
    endMillis = getSong().getPosition("ticks", currentAnchor.endTicks).millis;
  }
  const { anchor, updated } = getCurrentAnchor({
    ticks,
    millis,
    endMillis,
    currentAnchor,
    anchors,
    loops,
  });

  if (anchor !== null) {
    const playheadOffsetX = playhead.width / 2;
    if (updated) {
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
    } else if (currentAnchor !== null && smooth) {
      const x =
        currentAnchor.bbox.x + (ticks - currentAnchor.startTicks) * currentAnchor.pixelsPerTick;

      store.setState({
        playhead: {
          ...playhead,
          x: x + offsetX - playheadOffsetX,
        },
      });
    }
  } else {
    console.error("could not find an anchor");
  }
};

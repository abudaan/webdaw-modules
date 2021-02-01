import {
  songPositionFromScore,
  getMeasureAtPoint,
  heartbeat_utils,
  AnchorData,
} from "webdaw-modules";
import { getAnchorsFromPoint } from "./getAnchorsFromPoint";
import { getSong } from "../songWrapper";
import { store } from "../store";
import { getOSMD } from "../scoreWrapper";

/**
 * User clicks somewhere in the score, we translate the position where the user clicked
 * to a position in the song.
 */
export const setPlayheadFromPointer = (e: PointerEvent) => {
  const osmd = getOSMD();
  const song = getSong();
  const data = getMeasureAtPoint(e, osmd);

  // console.log(data);
  if (data !== null) {
    const {
      bbox: { x, y, height, width },
      measureNumber,
      offset,
    } = data;

    // // we need to add a little margin in case note are above the stave
    // const margin = 50;
    const [anchor, nextAnchor] = getAnchorsFromPoint(x + offset, y);
    const {
      playhead,
      offset: { x: offsetX, y: offsetY },
    } = store.getState();

    song.setPlayhead("ticks", anchor?.ticks);

    store.setState({
      currentPlayheadAnchor: anchor,
      playhead: {
        ...playhead,
        x: anchor === null ? 0 : anchor.bbox.x + offsetX,
        y: anchor === null ? 0 : anchor.bbox.y + offsetY,
        width: playhead.width,
        height,
      },
    });
  }
};

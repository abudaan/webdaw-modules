import { AnchorData } from "./getPlayheadAnchorData";
import { LoopData } from "./types";

type Args = {
  ticks: number;
  millis: number;
  endMillis: number;
  currentAnchor: AnchorData | null;
  anchors: AnchorData[];
  loops: LoopData[];
};

export const getCurrentAnchor = ({
  ticks,
  millis,
  endMillis,
  currentAnchor,
  anchors,
  loops,
}: Args): { anchor: AnchorData | null; updated: boolean } => {
  // choose to use millis or ticks to check if the playhead has passed the current anchor
  // millis is recommended when you use a low ppq value and your song has a slow tempo

  let forceUpdate = false;
  if (currentAnchor !== null) {
    if (loops.length) {
      // check if we are in a loop and if we've reached the last anchor before the song repeats
      // presently only a single loop is supported
      const currentLoop = loops[0];
      const diff1 = millis - currentLoop.startMillis;
      const diff2 = currentLoop.endMillis - millis;
      forceUpdate = diff1 < diff2;
    }
    if (forceUpdate === false) {
      if (endMillis !== -1) {
        // check if the position in millis has passed the current anchor
        forceUpdate = millis >= endMillis;
      } else {
        // check if the position in ticks has passed the current anchor
        forceUpdate = ticks >= currentAnchor.endTicks;
      }
    }
  }

  let anchor: AnchorData | null = currentAnchor;
  // find the current anchor
  if (currentAnchor === null || forceUpdate) {
    // console.log("UPDATE");
    forceUpdate = true;
    let i = 0;
    let index = 0;
    for (; i < anchors.length; i++) {
      anchor = anchors[i];
      if (anchor?.startTicks > ticks) {
        index = i === 0 ? 0 : i - 1;
        anchor = anchors[index];
        break;
      }
    }
  }

  return { anchor, updated: forceUpdate };
};

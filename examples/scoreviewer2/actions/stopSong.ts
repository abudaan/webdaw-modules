import {
  songPositionFromScore,
  getMeasureAtPoint,
  heartbeat_utils,
  AnchorData,
  match,
  scorePositionFromSong,
} from "webdaw-modules";
import { getSong } from "../songWrapper";
import { store } from "../store";
import { getOSMD } from "../scoreWrapper";
const { getBarInfo } = heartbeat_utils;

export const stopSong = () => {
  const { playheadAnchors } = store.getState();
  store.setState({
    songState: "stop",
    currentBarSong: 0,
    currentPlayheadAnchor: playheadAnchors[0],
    nextPlayheadAnchor: playheadAnchors[1],
  });
};

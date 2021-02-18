import { store } from "../store";

export const stopSong = () => {
  const {
    playheadAnchors,
    playhead,
    offset: { x: offsetX, y: offsetY },
  } = store.getState();

  const currentPlayheadAnchor = playheadAnchors[0];

  store.setState({
    songState: "stop",
    currentBarSong: 0,
    currentPlayheadAnchor,
    playhead: {
      ...playhead,
      x: currentPlayheadAnchor.bbox.x + offsetX - playhead.width / 2,
      y: currentPlayheadAnchor.yPos + offsetY,
      width: playhead.width,
      height: currentPlayheadAnchor.bboxMeasure.height,
    },
  });
};

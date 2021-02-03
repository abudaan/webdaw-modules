import { store } from "../store";

export const stopSong = () => {
  const {
    playheadAnchors,
    playhead,
    boundingBoxesMeasures,
    offset: { x: offsetX, y: offsetY },
  } = store.getState();
  const currentPlayheadAnchor = playheadAnchors[0];
  const nextPlayheadAnchor = playheadAnchors[1];
  const { top: y, height } = boundingBoxesMeasures[currentPlayheadAnchor.measureNumber - 1];

  const diffTicks = nextPlayheadAnchor.ticks - currentPlayheadAnchor.ticks;
  const diffPixels = nextPlayheadAnchor.bbox.x - currentPlayheadAnchor.bbox.x;
  const pixelsPerTick = diffPixels / diffTicks;

  store.setState({
    songState: "stop",
    currentBarSong: 0,
    currentPlayheadAnchor,
    nextPlayheadAnchor,
    playhead: {
      ...playhead,
      x: currentPlayheadAnchor.bbox.x + offsetX - playhead.width / 2,
      y: y + offsetY,
      width: playhead.width,
      height,
      pixelsPerTick,
    },
  });
};

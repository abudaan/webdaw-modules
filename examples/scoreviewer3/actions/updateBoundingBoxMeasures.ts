import { OpenSheetMusicDisplay, getBoundingBoxMeasureAll } from "webdaw-modules";
import { store } from "../store";

export const updateBoundingBoxMeasures = (osmd: OpenSheetMusicDisplay) => {
  const boundingBoxesMeasures = getBoundingBoxMeasureAll(osmd);
  const {
    playhead: { width },
    currentBarScore,
    offset: { x: offsetX, y: offsetY },
  } = store.getState();
  const { x, y, height } = boundingBoxesMeasures[currentBarScore - 1];

  store.setState({
    boundingBoxesMeasures,
    playhead: {
      x: x + offsetX,
      y: y + offsetY,
      width,
      height,
    },
  });
};

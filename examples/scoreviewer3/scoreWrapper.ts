import {
  parseMusicXML,
  loadMusicXMLFile,
  OpenSheetMusicDisplay,
  getPlayheadAnchorData,
} from "webdaw-modules";
import { updateBoundingBoxMeasures } from "./actions/updateBoundingBoxMeasures";
import { store } from "./store";

let scoreDiv: HTMLDivElement;
let osmd: OpenSheetMusicDisplay;

const render = (osmd: OpenSheetMusicDisplay) => {
  osmd.render();
  store.setState({ offset: { x: scoreDiv.offsetLeft, y: scoreDiv.offsetTop } });
};

export const getOSMD = (): OpenSheetMusicDisplay => osmd;

export const setup = async (divElem: HTMLDivElement): Promise<{ cleanup: () => void }> => {
  scoreDiv = divElem;
  const { mxmlFile, ppq } = store.getState();
  osmd = new OpenSheetMusicDisplay(scoreDiv, {
    backend: "svg",
    autoResize: false,
    // disableCursor: false,
  });
  console.log(`OSMD: ${osmd.Version}`);

  const xmlDoc = await loadMusicXMLFile(mxmlFile);
  const parsed = parseMusicXML(xmlDoc, ppq);
  if (parsed === null) {
    return Promise.reject();
  }
  const { repeats, initialTempo } = parsed;

  store.setState({
    repeats,
    initialTempo,
  });
  await osmd.load(xmlDoc);

  const unsub1 = store.subscribe(
    () => {
      render(osmd);
      updateBoundingBoxMeasures(osmd);
      const { anchorData, measureStartTicks } = getPlayheadAnchorData(osmd, repeats, ppq);
      store.setState({ playheadAnchors: anchorData, measureStartTicks });
    },
    (state) => state.width
  );

  render(osmd);
  // console.log(osmd);
  updateBoundingBoxMeasures(osmd);
  const { anchorData, measureStartTicks } = getPlayheadAnchorData(osmd, repeats, ppq);
  store.setState({ playheadAnchors: anchorData, measureStartTicks });

  return {
    cleanup: () => {
      unsub1();
    },
  };
};

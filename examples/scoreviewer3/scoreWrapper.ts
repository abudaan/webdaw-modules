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
  const { files, currentFilesIndex, ppq, loops } = store.getState();
  const { mxmlFile } = files[currentFilesIndex];
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

  const subscribes: (() => void)[] = [];

  subscribes[subscribes.length] = store.subscribe(
    () => {
      render(osmd);
      updateBoundingBoxMeasures(osmd);
      const { upbeat, anchorData, measureStartTicks } = getPlayheadAnchorData(
        osmd,
        repeats,
        loops,
        ppq
      );
      store.setState({ playheadAnchors: anchorData, measureStartTicks, upbeat });
    },
    (state) => state.width
  );

  render(osmd);
  // console.log(osmd);
  updateBoundingBoxMeasures(osmd);
  const { upbeat, anchorData, measureStartTicks } = getPlayheadAnchorData(
    osmd,
    repeats,
    loops,
    ppq
  );
  store.setState({ playheadAnchors: anchorData, measureStartTicks, upbeat });

  return {
    cleanup: () => {
      subscribes.forEach((sub) => {
        sub();
      });
    },
  };
};

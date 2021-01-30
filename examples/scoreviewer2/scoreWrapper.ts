import { SourceMeasure } from "opensheetmusicdisplay";
import {
  parseMusicXML,
  loadMusicXMLFile,
  getBoundingBoxMeasureAll,
  OpenSheetMusicDisplay,
  getNotesInStaff,
  getPlayheadAnchorData,
} from "webdaw-modules";
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
  const { repeats, initialTempo } = parsed as any;
  store.setState({
    repeats: repeats.map((repeat: [number, number]) => [...repeat, true]),
    initialTempo,
  });
  await osmd.load(xmlDoc);
  // console.log(getNotesInStaff(osmd, 0, 480, 10));

  const unsub1 = store.subscribe(
    () => {
      render(osmd);
      store.getState().updateBoundingBoxMeasures(getBoundingBoxMeasureAll(osmd));
      const { anchorData, measureStartTicks } = getPlayheadAnchorData(osmd, repeats, ppq);
      store.setState({ playheadAnchors: anchorData, measureStartTicks });
    },
    (state) => state.width
  );

  render(osmd);
  console.log(osmd);

  store.getState().updateBoundingBoxMeasures(getBoundingBoxMeasureAll(osmd));
  const { anchorData, measureStartTicks } = getPlayheadAnchorData(osmd, repeats, ppq);
  // console.log(measureStartTicks, anchorData);
  // anchorData.forEach((d) => {
  //   console.log(d.measureNumber, d.ticks);
  // });
  store.setState({ playheadAnchors: anchorData, measureStartTicks });

  return {
    cleanup: () => {
      unsub1();
    },
  };
};

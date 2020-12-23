import {
  parseMusicXML,
  loadMusicXMLFile,
  getBoundingBoxMeasureAll,
  OpenSheetMusicDisplay,
  mapEntityToNote,
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
    repeats,
    initialTempo,
  });

  await osmd.load(xmlDoc);

  const unsub1 = store.subscribe(
    () => {
      render(osmd);
      store.getState().updateBoundingBoxMeasures(getBoundingBoxMeasureAll(osmd));
    },
    (state) => state.width
  );

  render(osmd);
  console.log(osmd);
  const entityData = mapEntityToNote(osmd);
  const container = document.createElement("div");
  container.id = "container-staffentries";
  const offsetX = osmd["container"].offsetLeft;
  const offsetY = osmd["container"].offsetTop;

  entityData.forEach((data, i) => {
    const { boundingBox, sourceNote, ticks, noteNumber, bar } = data;
    const {
      dataObject: {
        parentVoiceEntry: { boundingBox: boundingBoxParent },
      },
    } = boundingBox as any;
    let { borderLeft, borderRight, borderTop, borderBottom } = boundingBoxParent;
    if (borderLeft === 0 && borderRight === 0 && borderTop === 0 && borderBottom === 0) {
      borderLeft = -0.8;
      borderRight = 0.4;
      borderTop = 0;
      borderBottom = 6;
    }
    console.log(i, boundingBox);
    console.log(borderLeft, borderRight, borderTop, borderBottom, boundingBoxParent);
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.background = "rgba(0, 255, 255, 0.3)";
    div.style.left = `${(boundingBox.AbsolutePosition.x + borderLeft) * 10 + offsetX}px`;
    div.style.top = `${(boundingBox.AbsolutePosition.y + borderTop) * 10 + offsetY}px`;
    div.style.width = `${(borderRight - borderLeft) * 10}px`;
    div.style.height = `${(borderBottom - borderTop) * 10}px`;
    div.addEventListener("click", () => {
      console.log(`ticks:  ${ticks} noteNumber: ${noteNumber} bar: ${bar}`);
    });
    container.appendChild(div);
  });
  document.body.appendChild(container);
  store.getState().updateBoundingBoxMeasures(getBoundingBoxMeasureAll(osmd));

  return {
    cleanup: () => {
      unsub1();
    },
  };
};

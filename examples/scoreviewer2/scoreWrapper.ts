import {
  parseMusicXML,
  loadMusicXMLFile,
  getBoundingBoxMeasureAll,
  OpenSheetMusicDisplay,
  mapper3,
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
  const container = document.createElement("div");
  container.id = "container-staffentries";
  document.body.appendChild(container);

  const offsetX = osmd["container"].offsetLeft;
  const offsetY = osmd["container"].offsetTop;
  const scrollPosX = window.scrollX;
  const scrollPosY = window.scrollY;

  const createDiv = (bbox: { x: number; y: number; width: number; height: number }): void => {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.zIndex = "-101";
    div.style.backgroundColor = "rgba(0, 0, 255, 0.4)"; // getRandomColor(0.6);
    div.style.border = "1px dotted blue";
    div.style.boxSizing = "border-box";

    div.style.width = `${bbox.width}px`;
    div.style.height = `${bbox.height}px`;
    div.style.left = `${bbox.x + offsetX + scrollPosX}px`;
    div.style.top = `${bbox.y + offsetY + scrollPosY}px`;
    div.addEventListener("click", () => {
      console.log(div);
    });
    container.appendChild(div);
  };

  const bboxes = mapper3(osmd);
  console.log(bboxes);
  bboxes.forEach((bbox) => {
    createDiv(bbox);
  });

  store.getState().updateBoundingBoxMeasures(getBoundingBoxMeasureAll(osmd));

  return {
    cleanup: () => {
      unsub1();
    },
  };
};

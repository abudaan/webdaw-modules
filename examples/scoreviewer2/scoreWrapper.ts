import {
  parseMusicXML,
  loadMusicXMLFile,
  getBoundingBoxMeasureAll,
  OpenSheetMusicDisplay,
  mapEntityToNote,
  getVerticalStaffEntryContainers,
  getBoundingBoxesAtPoint,
  getNoteEntriesPerStave,
  OSMDNoteData,
  getRandomColor,
  entityMapper,
  getEntries,
  MeasureData,
  OSMDEntityData,
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

  const createDiv = (data: OSMDNoteData): void => {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.backgroundColor = getRandomColor(0.6);
    div.style.border = "1px dotted red";
    div.style.boxSizing = "border-box";

    div.style.width = `${1}px`;
    div.style.height = `${40}px`;
    div.style.left = `${data.x + offsetX}px`;
    div.style.top = `${data.y + offsetY}px`;
    div.addEventListener("click", () => {
      console.log(div);
    });
    container.appendChild(div);
  };

  const entityData: OSMDEntityData[] = getEntries(osmd);
  console.log(entityData);
  // const staves = noteData.reduce(
  //   (
  //     acc: {
  //       [index: number]: { index: number; x: number; y: number; width: number; height: number };
  //     },
  //     val: OSMDNoteData
  //   ) => {
  //     const stave = val.stave;
  //     if (typeof acc[stave.index] === "undefined") {
  //       acc[stave.index] = stave;
  //     }
  //     return acc;
  //   },
  //   {}
  // );
  entityData.forEach(({ measures }) => {
    measures.forEach((measure: MeasureData) => {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.backgroundColor = "rgba(0, 255, 0, 0.1)"; //getRandomColor(0.1);
      div.style.border = "1px dotted red";
      div.style.boxSizing = "border-box";

      div.style.width = `${measure.width}px`;
      div.style.height = `${measure.height}px`;
      div.style.left = `${measure.x + offsetX}px`;
      div.style.top = `${measure.y + offsetY}px`;
      container.appendChild(div);
    });
  });
  // console.log(noteData);
  // entityMapper(osmd, noteData);

  store.getState().updateBoundingBoxMeasures(getBoundingBoxMeasureAll(osmd));

  return {
    cleanup: () => {
      unsub1();
    },
  };
};

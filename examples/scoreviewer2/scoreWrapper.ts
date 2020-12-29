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
  // MeasureData,
  OSMDEntityData,
  firstTest,
  StaveData,
  match,
  setAttibuteSVGElement,
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

  const createDiv = (bbox: DOMRect): void => {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.zIndex = "-101";
    div.style.backgroundColor = "rgba(0, 0, 255, 0.4)"; // getRandomColor(0.6);
    div.style.border = "1px dotted blue";
    div.style.boxSizing = "border-box";

    div.style.width = `${bbox.width}px`;
    div.style.height = `${bbox.height}px`;
    div.style.left = `${bbox.x + offsetX}px`;
    div.style.top = `${bbox.y + offsetY}px`;
    div.addEventListener("click", () => {
      console.log(div);
    });
    container.appendChild(div);
  };
  console.log(firstTest(osmd));
  /*
  const entryData: StaveData[][] = firstTest(osmd);
  const noteHeads: { elem: SVGElement; bbox: DOMRect }[] = [];
  const t = document.querySelectorAll(".vf-notehead");
  t.forEach((a) => {
    const bbox = a.getBoundingClientRect();
    bbox.x -= offsetX;
    bbox.y -= offsetY;
    createDiv(bbox);
    noteHeads.push({ elem: a as SVGElement, bbox });
  });

  for (let i = 0; i < entryData.length; i++) {
    if (i === 60) {
      break;
    }
    const entry = entryData[i];

    for (let j = 0; j < entry.length; j++) {
      const stave = entry[j];

      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.zIndex = "-100";
      div.style.backgroundColor = "rgba(0, 255, 0, 0.1)"; //getRandomColor(0.1);
      div.style.border = "1px dotted red";
      div.style.boxSizing = "border-box";

      if (stave) {
        div.style.width = `${stave.width}px`;
        div.style.height = `${stave.height}px`;
        div.style.left = `${stave.x + offsetX}px`;
        div.style.top = `${stave.y + offsetY}px`;
        container.appendChild(div);

        const maxMatches = stave.notes.length;
        const matches = [];
        stave.notes.forEach((note) => {
          for (let k = 0; k < noteHeads.length; k++) {
            const { elem, bbox } = noteHeads[k];
            if (
              match(bbox.x, stave.x, 10) &&
              bbox.y >= stave.y - 5 &&
              bbox.bottom <= stave.y + stave.height + 5
            ) {
              // if (match(bbox.x, stave.x, 5)) {
              matches.push([elem, note]);
              // console.log(elem);
              setAttibuteSVGElement(elem, "path", "fill", "red");
              elem.addEventListener("click", () => {
                console.log(note.measureIndex, note.staffIndex, note.noteNumber);
              });

              if (matches.length === maxMatches) {
                break;
              }
            }
          }
        });
        console.log(stave.measureIndex, stave.index, maxMatches, matches);
        // if (stave.notes.length > 1) {
        //   stave.notes.forEach((note) => {
        //     console.log(note.measureIndex, note.containerIndex, note.staffIndex, note.noteNumber);
        //   });
        // }
      }
    }
  }
*/
  // console.log(noteData);
  // entityMapper(osmd, entityData);
  store.getState().updateBoundingBoxMeasures(getBoundingBoxMeasureAll(osmd));

  return {
    cleanup: () => {
      unsub1();
    },
  };
};

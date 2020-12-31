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
  NoteData,
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

  const createDiv = (bbox: DOMRect): void => {
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

  const entryData: StaveData[][] = firstTest(osmd);
  console.log(entryData);
  const noteHeads: { element: SVGElement; bbox: DOMRect; id: string }[] = [];
  const t = document.querySelectorAll(".vf-notehead");
  // const t = document.querySelectorAll(".vf-tabnote");
  t.forEach((a, i) => {
    setAttibuteSVGElement(a as SVGElement, "path", "opacity", "0.2");
    const bbox = a.getBoundingClientRect();
    bbox.x -= offsetX;
    bbox.y -= offsetY;
    createDiv(bbox);
    noteHeads.push({ element: a as SVGElement, bbox, id: `notehead-${i}` });
  });

  console.time("start");
  for (let i = 0; i < entryData.length; i++) {
    // if (i === 354) {
    //   break;
    // }
    const entry = entryData[i];

    for (let j = 0; j < entry.length; j++) {
      const stave = entry[j];

      if (stave) {
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.zIndex = "-100";
        div.style.backgroundColor = "rgba(0, 255, 0, 0.1)"; //getRandomColor(0.1);
        div.style.border = "1px dotted red";

        div.style.boxSizing = "border-box";
        div.style.width = `${stave.width}px`;
        div.style.height = `${stave.height}px`;
        div.style.left = `${stave.x + offsetX}px`;
        div.style.top = `${stave.y + offsetY}px`;
        container.appendChild(div);

        // const maxMatches = stave.notes.reduce((acc, val) => {
        //   if (val.isRestFlag === false) {
        //     return acc + 1;
        //   }
        //   return acc;
        // }, 0);
        const maxMatches = stave.notes.length;
        const matches: {
          notes: NoteData[];
          graphicalNotes: { element: SVGElement; bbox: DOMRect; id: string }[];
        } = {
          notes: [],
          graphicalNotes: [],
        };

        for (let s = 0; s < stave.notes.length; s++) {
          const note = stave.notes[s];

          for (let k = 0; k < noteHeads.length; k++) {
            const noteHead = noteHeads[k];
            const { element, bbox } = noteHead;
            const margin = 5;
            // if (note.isRestFlag === false) {
            if (
              // match(bbox.x, stave.x, 10) &&
              bbox.x >= stave.x - margin &&
              bbox.right <= stave.x + stave.width + margin &&
              bbox.y >= stave.y - margin &&
              bbox.bottom <= stave.y + stave.height + margin
            ) {
              matches.notes.push(note);
              matches.graphicalNotes.push(noteHead);
              if (matches.notes.length === maxMatches) {
                // console.log("reaping done!", k);
                break;
              }
            }
            // }
          }
        }
        if (matches.notes.length === 1) {
          const note = matches.notes[0];
          const graphical = matches.graphicalNotes[0];
          if (graphical) {
            const { element } = graphical;
            if (note.isRestFlag === false) {
              setAttibuteSVGElement(element, "path", "fill", "red");
              element.addEventListener("click", () => {
                console.log(note.measureIndex, note.staffIndex, note.noteNumber);
              });
            }
          }
        } else if (matches.notes.length > 1) {
          let { notes, graphicalNotes } = matches;
          const notesById: { [id: string]: NoteData } = {};
          const graphicalNotesById: {
            [id: string]: { element: SVGElement; bbox: DOMRect; id: string };
          } = {};
          notes.forEach((note) => {
            notesById[note.id] = note;
          });
          notes = Object.values(notesById);
          graphicalNotes.forEach((note) => {
            graphicalNotesById[note.id] = note;
          });
          graphicalNotes = Object.values(graphicalNotesById);

          // notes.sort((a, b) => {
          //   if (a.noteNumber > b.noteNumber) {
          //     return -1;
          //   } else if (a.noteNumber > b.noteNumber) {
          //     return 1;
          //   }
          //   return 0;
          // });
          // graphicalNotes = graphicalNotes.sort((a, b) => {
          //   if (a.bbox.y > b.bbox.y) {
          //     return 1;
          //   } else if (a.bbox.y < b.bbox.y) {
          //     return -1;
          //   }
          //   return 0;
          // });
          for (let i = 0; i < notes.length; i++) {
            const note = notes[i];
            const graphical = graphicalNotes[i];
            if (graphical) {
              if (note.isRestFlag === false) {
                const { element } = graphical;
                setAttibuteSVGElement(element, "path", "fill", "red");
                element.addEventListener("click", () => {
                  console.log(note.measureIndex, note.staffIndex, note.noteNumber);
                });
              }
            }
          }
        }
        // console.log(stave.measureIndex, stave.containerIndex);
        // console.log(matches.notes);
        // console.log(matches.graphicalNotes);
        // console.log("----");
      }
    }
  }
  console.timeEnd("start");

  // entityMapper(osmd, entityData);
  store.getState().updateBoundingBoxMeasures(getBoundingBoxMeasureAll(osmd));

  return {
    cleanup: () => {
      unsub1();
    },
  };
};

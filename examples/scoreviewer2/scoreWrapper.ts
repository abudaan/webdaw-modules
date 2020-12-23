import { Note, Cursor } from "opensheetmusicdisplay";
import {
  parseMusicXML,
  loadMusicXMLFile,
  getBoundingBoxMeasureAll,
  OpenSheetMusicDisplay,
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

  // osmd.GraphicSheet.MeasureList.forEach((measure, m) => {
  //   measure.forEach((stave, s) => {
  //     console.log(m, s, stave.staffEntries);
  //   });
  // });

  // console.log(osmd);
  // console.log(osmd.GraphicSheet);

  const unsub1 = store.subscribe(
    () => {
      render(osmd);
      store.getState().updateBoundingBoxMeasures(getBoundingBoxMeasureAll(osmd));
    },
    (state) => state.width
  );

  render(osmd);
  console.log(osmd.GraphicSheet);
  console.log(osmd.Sheet);
  // osmd.cursor.show();
  // osmd.cursor.next();
  // console.log(osmd.cursor.NotesUnderCursor());
  store.getState().updateBoundingBoxMeasures(getBoundingBoxMeasureAll(osmd));

  document.addEventListener("click", (e: MouseEvent) => {
    const offsetX = osmd["container"].offsetLeft;
    const offsetY = osmd["container"].offsetTop;
    const scrollPosX = window.scrollX;
    const scrollPosY = window.scrollY;
    // const x = e.clientX + offsetX + scrollPosX;
    // const y = e.clientY + offsetY + scrollPosY;
    const x = e.clientX - offsetX + scrollPosX; // / 10;
    const y = e.clientY - offsetY + scrollPosY; // / 10;
    const ToString = () => `${x}-${y}`;
    const obj = osmd.GraphicSheet.getClickedObjectOfType<Note>({ x, y, ToString });
    const obj2 = osmd.GraphicSheet.GetNearestNote({ x, y, ToString }, { x: 1, y: 1, ToString });
    // console.log(1, obj, x, y);
    console.log(2, obj2, x, y);
  });

  return {
    cleanup: () => {
      unsub1();
    },
  };
};

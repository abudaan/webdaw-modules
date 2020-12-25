import { BoundingBox, Note } from "opensheetmusicdisplay";
import {
  parseMusicXML,
  loadMusicXMLFile,
  getBoundingBoxMeasureAll,
  OpenSheetMusicDisplay,
  mapEntityToNote,
  getVerticalStaffEntryContainers,
  getBoundingBoxesAtPoint,
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
  // const entityData = mapEntityToNote(osmd);
  const container = document.createElement("div");
  container.id = "container-staffentries";
  const offsetX = osmd["container"].offsetLeft;
  const offsetY = osmd["container"].offsetTop;

  const domToSvg = (svg: any, point: any) => {
    var pt = svg.createSVGPoint();
    pt.x = point.x;
    pt.y = point.y;
    var sp = pt.matrixTransform(svg.getScreenCTM().inverse());
    console.log("SP", sp);
    return {
      x: sp.x,
      y: sp.y,
    };
  };

  const loop = (elem: SVGElement, type: string, color: string) => {
    if (elem.hasChildNodes()) {
      elem.childNodes.forEach((child) => {
        const c = child as SVGElement;
        if (c.tagName && c.tagName.toLowerCase() === type) {
          (c as SVGElement).setAttribute("fill", color);
        }
        if (c.hasChildNodes()) {
          loop(c, type, color);
        }
      });
    }
  };

  if (document !== null) {
    const svgDoc = document.getElementById("osmdSvgPage1");
    if (svgDoc !== null) {
      const notes = document.querySelectorAll(".vf-stavenote");
      const tabs = document.querySelectorAll(".vf-tabnote");
      // console.log(tabs);
      tabs.forEach((tab) => {
        let elem = tab as SVGElement;
        // loop(elem, "text", "red");
        tab.addEventListener("click", (e) => {
          console.log(tab);
        });
      });
      // console.log(notes);
      notes.forEach((note) => {
        let elem = note as SVGElement;
        // loop(elem, "path", "red");
        note.addEventListener(
          "click",
          (e) => {
            console.log(note);
          },
          true
        );
      });
      // console.log((svgDoc as any).createSVGPoint());
    }
  }
  document.addEventListener("click", (e: MouseEvent) => {
    // const boxes = getBoundingBoxesAtPoint(e as PointerEvent, osmd);
    const [boxesLevel1, boxesLevel2] = getVerticalStaffEntryContainers(e as PointerEvent, osmd);
    // console.log(boxesLevel1, boxesLevel2);
    const colors = ["rgba(0,255,0,0.5)", "rgba(0,255,255,0.5)"];
    boxesLevel1.forEach((bbox, i) => {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.backgroundColor = colors[i % 2 === 0 ? 0 : 1];
      // div.style.border = "1px dotted green";
      div.style.width = `${bbox.width}px`;
      div.style.height = `${bbox.height}px`;
      div.style.left = `${bbox.x + offsetX}px`;
      div.style.top = `${bbox.y + offsetY}px`;
      container.appendChild(div);
      div.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        // console.log("click");
        container.removeChild(div);
      });
    });

    let colorIndex = -1;
    const colors2: string[] = ["rgba(200,0,0,0.5)", "rgba(0,200,0,0.5)", "rgba(0,0,200,0.5)"];
    boxesLevel2.forEach((bbox) => {
      const color = colors2[colorIndex++];
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.backgroundColor = color;
      // div.style.border = "1px dotted green";
      div.style.width = `${bbox.width}px`;
      div.style.height = `${bbox.height}px`;
      div.style.left = `${bbox.x + offsetX}px`;
      div.style.top = `${bbox.y + offsetY}px`;
      container.appendChild(div);
      div.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        // console.log("click");
        container.removeChild(div);
      });
      if (colorIndex === colors2.length) {
        colorIndex = 0;
      }
    });

    // console.log(container.childNodes);
  });

  // document.addEventListener("click", (e: MouseEvent) => {
  //   const offsetX = osmd["container"].offsetLeft;
  //   const offsetY = osmd["container"].offsetTop;
  //   const scrollPosX = window.scrollX;
  //   const scrollPosY = window.scrollY;
  //   // const x = e.clientX + offsetX + scrollPosX;
  //   // const y = e.clientY + offsetY + scrollPosY;
  //   // const x = (e.clientX - offsetX) / 10;
  //   // const y = (e.clientY - offsetY) / 10;
  //   const ToString = () => `${x}-${y}`;
  //   const { x, y } = domToSvg(document.getElementById("osmdSvgPage1"), {
  //     x: (e.clientX - offsetX) / 10,
  //     y: (e.clientY - offsetY) / 10,
  //   });
  //   // const obj = osmd.GraphicSheet.getClickedObjectOfType<Note>({ x, y, ToString });
  //   const obj2 = osmd.GraphicSheet.GetNearestNote({ x, y, ToString }, { x: 10, y: 10, ToString });
  //   // console.log(1, obj, x, y);
  //   // console.log(2, obj2, x, y);
  // });

  // osmd.GraphicSheet.MeasureList.forEach((measure, measureIndex) => {
  //   measure.forEach((stave) => {
  //     const {
  //       boundingBox: { childElements },
  //     } = stave as any;
  //     // console.log(measureIndex, childElements);
  //     childElements.forEach((bbox: BoundingBox) => {
  //       let { borderLeft, borderRight, borderTop, borderBottom, borderMarginLeft } = bbox as any;
  //       if (borderLeft === 0 && borderRight === 0 && borderTop === 0 && borderBottom === 0) {
  //         borderLeft = -0.8;
  //         borderRight = 0.4;
  //         borderTop = 0;
  //         borderBottom = 6;
  //       }
  //       const div = document.createElement("div");
  //       div.style.position = "absolute";
  //       div.style.backgroundColor = "red";
  //       div.style.width = "1px";
  //       div.style.height = "40px";
  //       div.style.left = `${
  //         (bbox.AbsolutePosition.x + borderLeft + borderMarginLeft) * 10 + offsetX
  //       }px`;
  //       div.style.top = `${bbox.AbsolutePosition.y * 10 + offsetY}px`;
  //       container.appendChild(div);
  //     });
  //   });
  // });
  // container.style.zIndex = "-100";
  document.body.appendChild(container);

  // entityData.forEach((data, i) => {
  //   const { boundingBox, sourceNote, ticks, noteNumber, bar } = data;
  //   const {
  //     dataObject: {
  //       parentVoiceEntry: { boundingBox: boundingBoxParent },
  //     },
  //   } = boundingBox as any;
  //   let { borderLeft, borderRight, borderTop, borderBottom } = boundingBoxParent;
  //   if (borderLeft === 0 && borderRight === 0 && borderTop === 0 && borderBottom === 0) {
  //     borderLeft = -0.8;
  //     borderRight = 0.4;
  //     borderTop = 0;
  //     borderBottom = 6;
  //   }
  //   console.log(i, boundingBox);
  //   console.log(borderLeft, borderRight, borderTop, borderBottom, boundingBoxParent);
  //   const div = document.createElement("div");
  //   div.style.position = "absolute";
  //   div.style.background = "rgba(0, 255, 255, 0.3)";
  //   div.style.left = `${(boundingBox.AbsolutePosition.x + borderLeft) * 10 + offsetX}px`;
  //   div.style.top = `${(boundingBox.AbsolutePosition.y + borderTop) * 10 + offsetY}px`;
  //   div.style.width = `${(borderRight - borderLeft) * 10}px`;
  //   div.style.height = `${(borderBottom - borderTop) * 10}px`;
  //   div.addEventListener("click", () => {
  //     console.log(`ticks:  ${ticks} noteNumber: ${noteNumber} bar: ${bar}`);
  //   });
  //   container.appendChild(div);
  // });
  // document.body.appendChild(container);

  store.getState().updateBoundingBoxMeasures(getBoundingBoxMeasureAll(osmd));

  return {
    cleanup: () => {
      unsub1();
    },
  };
};

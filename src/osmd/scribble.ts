/*
  if (document !== null) {
    const svgDoc = document.getElementById("osmdSvgPage1");
    if (svgDoc !== null) {
      const notes = document.querySelectorAll(".vf-notehead");
      const tabs = document.querySelectorAll(".vf-tabnote");
      const elementData: [SVGElement, DOMRect][] = [];
      // const
      // console.log(tabs);
      tabs.forEach((tab) => {
        const elem = tab as SVGElement;
        loop2(elem, "path", "0.6");
        // loop(elem, "text", "red");
        const bbox = elem.getBoundingClientRect();
        elementData.push([elem, bbox]);
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.backgroundColor = getRandomColor(0.6);
        div.style.border = "1px dotted red";
        div.style.width = `${bbox.width}px`;
        // div.style.width = `1px`;
        div.style.height = `${bbox.height}px`;
        div.style.left = `${bbox.x}px`;
        div.style.top = `${bbox.y}px`;
        // container.appendChild(div);

        // tab.addEventListener("click", (e) => {
        //   console.log(tab);
        // });
      });

      // t.sort((a: SVGElement, b: SVGElement) => {
      //   const bboxA = a.getBoundingClientRect();
      //   const bboxB = b.getBoundingClientRect();
      //   // console.log(a.parentElement?.getBoundingClientRect().y);

      //   if (bboxA.x < bboxB.x) return 1;
      //   if (bboxA.x > bboxB.x) return -1;
      //   return 0;
      // });
      // console.log(t);
      // console.log(notes);
      notes.forEach((note) => {
        const elem = note as SVGElement;
        // loop(elem, "path", "red");
        loop2(elem, "path", "0.6");
        const bbox = elem.getBoundingClientRect();
        elementData.push([elem, bbox]);
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.backgroundColor = getRandomColor(0.6);
        div.style.border = "1px dotted red";
        div.style.boxSizing = "border-box";

        div.style.width = `${bbox.width}px`;
        // div.style.width = `1px`;
        div.style.height = `${bbox.height}px`;
        div.style.left = `${bbox.x}px`;
        div.style.top = `${bbox.y}px`;
        // container.appendChild(div);

        // note.addEventListener(
        //   "click",
        //   (e) => {
        //     console.log(note);
        //   },
        //   true
        // );
      });
      // console.log((svgDoc as any).createSVGPoint());
      const voiceEntries: GraphicalVoiceEntry[] = [];
      console.log(osmd.GraphicSheet);
      osmd.GraphicSheet.MeasureList.forEach((m: GraphicalMeasure[]) => {
        m.forEach((m1: GraphicalMeasure) => {
          // staffEntry.forEach((m: GraphicalMeasure) => {});
          m1.staffEntries.forEach((e) => {
            e.graphicalVoiceEntries.forEach((ve) => {
              voiceEntries.push(ve);
            });
          });
        });
      });

      let m = 0;
      const voiceEntryData: { x: number; y: number; ve: GraphicalVoiceEntry }[] = [];
      voiceEntries.forEach((ve, i) => {
        let {
          boundingBox: {
            absolutePosition: { x, y },
            borderLeft,
          },
        } = ve as any;

        x += borderLeft;
        y += 2.5;
        x *= 10;
        y *= 10;
        voiceEntryData.push({ x, y, ve });

        const div = document.createElement("div");
        const span = document.createElement("span");
        // span.innerHTML = `${i}`;
        div.appendChild(span);
        div.style.position = "absolute";
        div.style.backgroundColor = getRandomColor(0.6);
        div.style.border = "1px dotted red";
        div.style.boxSizing = "border-box";

        div.style.width = `${1}px`;
        // div.style.width = `1px`;
        div.style.height = `${60}px`;
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        container.appendChild(div);
      });

      let matches = 0;
      for (let v = 0; v < voiceEntryData.length; v++) {
        const curr = voiceEntryData[v];
        for (let d = 0; d < elementData.length; d++) {
          const [elem, box] = elementData[d];
          // console.log(curr.x, curr.y, box.x, box.y, osmd["container"].offsetTop);
          // if (match(box.x, curr.x, 2) && match(box.y, curr.y, 30)) {
          if (match(box.x, curr.x, 20) && match(box.y, curr.y, 60)) {
            matches++;
            const div = document.createElement("div");
            div.innerHTML = `${curr.ve.notes[0].sourceNote.halfTone}`;
            div.style.position = "absolute";
            // div.style.backgroundColor = getRandomColor(0.6);
            div.style.border = "1px dotted red";
            div.style.boxSizing = "border-box";

            div.style.width = `${10}px`;
            div.style.height = `${10}px`;
            div.style.left = `${box.x}px`;
            div.style.top = `${box.y + 15}px`;
            container.appendChild(div);

            const sourceNote = curr.ve.notes[0].sourceNote;
            const sourceMeasure = (sourceNote as any).sourceMeasure;
            // console.log(sourceMeasure.measureNumber);
            // console.log((sourceNote as any).voiceEntry.timestamp.relPosInMeasure);
            const ticks =
              sourceMeasure.measureNumber * ppq * 4 +
              (sourceNote as any).voiceEntry.timestamp.realValue * ppq * 4;
            elem.addEventListener("click", (e) => {
              console.log(sourceNote.halfTone, ticks);
            });
            break;
          }
        }
      }
      console.log(matches, voiceEntryData.length);
    }
  }
*/
// document.addEventListener("click", (e: MouseEvent) => {
//   // const boxes = getBoundingBoxesAtPoint(e as PointerEvent, osmd);
//   const [boxesLevel1, boxesLevel2] = getVerticalStaffEntryContainers(e as PointerEvent, osmd);
//   // console.log(boxesLevel1, boxesLevel2);
//   const colors = ["rgba(0,255,0,0.5)", "rgba(0,255,255,0.5)"];
//   boxesLevel1.forEach((bbox, i) => {
//     const div = document.createElement("div");
//     div.style.position = "absolute";
//     div.style.backgroundColor = colors[i % 2 === 0 ? 0 : 1];
//     // div.style.border = "1px dotted green";
//     div.style.width = `${bbox.width}px`;
//     div.style.height = `${bbox.height}px`;
//     div.style.left = `${bbox.x + offsetX}px`;
//     div.style.top = `${bbox.y + offsetY}px`;
//     container.appendChild(div);
//     div.addEventListener("click", (e) => {
//       e.stopImmediatePropagation();
//       // console.log("click");
//       container.removeChild(div);
//     });
//   });

//   let colorIndex = -1;
//   const colors2: string[] = ["rgba(200,0,0,0.5)", "rgba(0,200,0,0.5)", "rgba(0,0,200,0.5)"];
//   boxesLevel2.forEach((bbox) => {
//     const color = colors2[colorIndex++];
//     const div = document.createElement("div");
//     div.style.position = "absolute";
//     div.style.backgroundColor = color;
//     // div.style.border = "1px dotted green";
//     div.style.width = `${bbox.width}px`;
//     div.style.height = `${bbox.height}px`;
//     div.style.left = `${bbox.x + offsetX}px`;
//     div.style.top = `${bbox.y + offsetY}px`;
//     container.appendChild(div);
//     div.addEventListener("click", (e) => {
//       e.stopImmediatePropagation();
//       // console.log("click");
//       container.removeChild(div);
//     });
//     if (colorIndex === colors2.length) {
//       colorIndex = 0;
//     }
//   });

//   // console.log(container.childNodes);
// });

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
// document.body.appendChild(container);

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

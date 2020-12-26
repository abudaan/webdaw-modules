"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityMapper = void 0;
var ppq = 960;
exports.entityMapper = function (osmd, noteData) {
    var svgDoc = document.getElementById("osmdSvgPage1");
    if (svgDoc === null) {
        return;
    }
    // const container = document.createElement("div");
    // document.body.appendChild(container);
    // const notes = document.querySelectorAll(".vf-notehead");
    // const tabs = document.querySelectorAll(".vf-tabnote");
    // const elementData: [SVGElement, DOMRect][] = [];
    // notes.forEach(note => {
    //   const elem = note as SVGElement;
    //   const bbox = elem.getBoundingClientRect();
    //   elementData.push([elem, bbox]);
    //   elem.addEventListener("click", e => {
    //     console.log("CLICK");
    //   });
    // });
    // tabs.forEach(tab => {
    //   const elem = tab as SVGElement;
    //   const bbox = elem.getBoundingClientRect();
    //   elementData.push([elem, bbox]);
    //   elem.addEventListener("click", e => {
    //     console.log("CLICK");
    //   });
    // });
    // const filtered = noteData.filter(data => data.staveIndex === 0);
    // let j = 0;
    // let matches = 0;
    // // for (let i = 0; i < filtered.length; i++) {
    // //   const data = filtered[i];
    // for (let j = 0; j < elementData.length; j++) {
    //   const [elem, box] = elementData[j];
    //   // console.log(data.x, data.y, box.x, box.y);
    //   // if (match(box.x, data.x, 2) && match(box.y, data.y, 2)) {
    //   //   matches++;
    //   const div = document.createElement("div");
    //   div.innerHTML = `${j}`;
    //   div.style.position = "absolute";
    //   // div.style.backgroundColor = getRandomColor(0.6);
    //   div.style.border = "1px dotted red";
    //   div.style.boxSizing = "border-box";
    //   div.style.width = `${15}px`;
    //   div.style.height = `${15}px`;
    //   div.style.left = `${box.x}px`;
    //   div.style.top = `${box.y}px`;
    //   container.appendChild(div);
    //   setAttibuteSVGElement(elem, "path", "opacity", "0");
    //   setAttibuteSVGElement(elem, "text", "opacity", "0");
    //   elem.addEventListener("click", e => {
    //     // console.log("MATCH", data.noteNumber, data.ticks);
    //   });
    //   //   break;
    //   // }
    // }
    // // }
    // // console.log(matches, filtered.length);
};
//# sourceMappingURL=entityMapper.js.map
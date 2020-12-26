"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityMapper = void 0;
var util_1 = require("./util");
var ppq = 960;
exports.entityMapper = function (osmd, noteData) {
    var svgDoc = document.getElementById("osmdSvgPage1");
    if (svgDoc === null) {
        return;
    }
    var container = document.createElement("div");
    document.body.appendChild(container);
    var notes = document.querySelectorAll(".vf-notehead");
    var tabs = document.querySelectorAll(".vf-tabnote");
    var elementData = [];
    notes.forEach(function (note) {
        var elem = note;
        var bbox = elem.getBoundingClientRect();
        elementData.push([elem, bbox]);
        elem.addEventListener("click", function (e) {
            console.log("CLICK");
        });
    });
    tabs.forEach(function (tab) {
        var elem = tab;
        var bbox = elem.getBoundingClientRect();
        elementData.push([elem, bbox]);
        elem.addEventListener("click", function (e) {
            console.log("CLICK");
        });
    });
    var filtered = noteData.filter(function (data) { return data.staveIndex === 0; });
    var j = 0;
    var matches = 0;
    // for (let i = 0; i < filtered.length; i++) {
    //   const data = filtered[i];
    for (var j_1 = 0; j_1 < elementData.length; j_1++) {
        var _a = __read(elementData[j_1], 2), elem = _a[0], box = _a[1];
        // console.log(data.x, data.y, box.x, box.y);
        // if (match(box.x, data.x, 2) && match(box.y, data.y, 2)) {
        //   matches++;
        var div = document.createElement("div");
        div.innerHTML = "" + j_1;
        div.style.position = "absolute";
        // div.style.backgroundColor = getRandomColor(0.6);
        div.style.border = "1px dotted red";
        div.style.boxSizing = "border-box";
        div.style.width = 15 + "px";
        div.style.height = 15 + "px";
        div.style.left = box.x + "px";
        div.style.top = box.y + "px";
        container.appendChild(div);
        util_1.setAttibuteSVGElement(elem, "path", "opacity", "0");
        util_1.setAttibuteSVGElement(elem, "text", "opacity", "0");
        elem.addEventListener("click", function (e) {
            // console.log("MATCH", data.noteNumber, data.ticks);
        });
        //   break;
        // }
    }
    // }
    // console.log(matches, filtered.length);
};
//# sourceMappingURL=entityMapper.js.map
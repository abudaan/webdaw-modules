"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGraphicalNotesInSelection = exports.hasOverlap = void 0;
var ramda_1 = require("ramda");
exports.hasOverlap = function (rect1, rect2) {
    return !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom);
};
exports.getGraphicalNotesInSelection = function (graphicalNotesPerBar, start, end) {
    var selectedBars = [];
    var rect2 = {
        left: start.x,
        top: start.y,
        right: end.x,
        bottom: end.y,
        measureNumber: -1,
    };
    var measureRects = {};
    graphicalNotesPerBar.forEach(function (bar, i) {
        bar.forEach(function (note, j) {
            var system = note.parentMusicSystem;
            var measures = system.graphicalMeasures;
            measures.forEach(function (m) {
                m.forEach(function (m1) {
                    var _a = m1.stave, x = _a.x, y = _a.y, width = _a.width, height = _a.height, measureNumber = m1.measureNumber;
                    var rect1 = {
                        measureNumber: measureNumber,
                        top: y,
                        right: x + width,
                        bottom: y + height,
                        left: x,
                    };
                    measureRects[measureNumber] = rect1;
                    // console.log("---", measureNumber);
                    // console.log("sel", start.x, start.y, end.x, end.y);
                    // console.log("bar", Math.round(x), Math.round(y), Math.round(maxX), Math.round(maxY));
                    if (exports.hasOverlap(rect1, rect2)) {
                        selectedBars.push(measureNumber);
                    }
                });
            });
        });
    });
    var u = ramda_1.uniq(selectedBars);
    // console.log(u);
    var a = [];
    // add missing bar numbers
    for (var i = 0; i < u.length; i++) {
        var value = u[i];
        a.push(value);
        if (i + 1 < u.length) {
            var next = u[i + 1];
            // console.log(value, next);
            while (next - value > 1) {
                // console.log(value);
                a.push(++value);
            }
        }
    }
    // console.log(a.sort());
    return a.map(function (bar) { return measureRects[bar]; });
};
//# sourceMappingURL=getGraphicalNotesInSelection.js.map
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
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
    var firstNote = graphicalNotesPerBar[0][0];
    var system = firstNote.parentMusicSystem;
    var graphicalMeasures = system.graphicalMeasures;
    var measureRectsPerSystem = [];
    // measureRectsPerSystem[i] = [];
    graphicalMeasures.forEach(function (measure, i) {
        measureRectsPerSystem[i] = [];
        measure.forEach(function (staffLine, j) {
            var _a = staffLine.stave, x = _a.x, y = _a.y, width = _a.width, height = _a.height, measureNumber = staffLine.measureNumber;
            var rect1 = {
                measureNumber: measureNumber,
                top: y,
                right: x + width,
                bottom: y + height,
                left: x,
            };
            var inArray = false;
            for (var k = 0; k < measureRectsPerSystem[i].length; k++) {
                var val = measureRectsPerSystem[i][k];
                if (val.top === rect1.top) {
                    inArray = true;
                }
            }
            if (inArray === false) {
                measureRectsPerSystem[i].push(rect1);
            }
            // console.log("---", measureNumber);
            // console.log("sel", start.x, start.y, end.x, end.y);
            // console.log("bar", Math.round(x), Math.round(y), Math.round(maxX), Math.round(maxY));
            if (exports.hasOverlap(rect1, rect2)) {
                selectedBars.push(measureNumber);
            }
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
    return a.map(function (measureNumber) {
        var staffLines = measureRectsPerSystem[measureNumber - 1];
        var topValues = staffLines.map(function (s) { return s.top; });
        var bottomValues = staffLines.map(function (s) { return s.bottom; });
        var leftValues = staffLines.map(function (s) { return s.left; });
        var rightValues = staffLines.map(function (s) { return s.right; });
        var heightValues = staffLines.map(function (s) { return s.top - s.bottom; });
        var widthValues = staffLines.map(function (s) { return s.right - s.left; });
        return {
            measureNumber: measureNumber,
            top: Math.min.apply(Math, __spread(topValues)),
            bottom: Math.max.apply(Math, __spread(bottomValues)),
            left: Math.min.apply(Math, __spread(leftValues)),
            right: Math.max.apply(Math, __spread(rightValues)),
        };
    });
    // console.log(a.sort());
    // console.log(measureRectsPerSystem);
    // return a.map(bar => {
    //   return {};
    // });
    // return [];
};
//# sourceMappingURL=getGraphicalNotesInSelection.js.map
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
exports.getSelectedMeasures = exports.getSelectedMeasureBoundingBoxes = exports.getMeasureBoundingBoxes = exports.hasOverlap = void 0;
exports.hasOverlap = function (rect1, rect2) {
    return !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom);
};
exports.getMeasureBoundingBoxes = function (graphicalNotesPerBar) {
    var firstNote = graphicalNotesPerBar[0][0];
    var system = firstNote.parentMusicSystem;
    var graphicalMeasures = system.graphicalMeasures;
    var boundingBoxes = [];
    graphicalMeasures.forEach(function (measure, i) {
        boundingBoxes[i] = [];
        measure.forEach(function (staffLine, j) {
            var _a = staffLine.stave, x = _a.x, y = _a.y, width = _a.width, height = _a.height, measureNumber = staffLine.measureNumber;
            var bbox = {
                measureNumber: measureNumber,
                top: y,
                right: x + width,
                bottom: y + height,
                left: x,
            };
            var inArray = false;
            for (var k = 0; k < boundingBoxes[i].length; k++) {
                var val = boundingBoxes[i][k];
                if (val.top === bbox.top) {
                    inArray = true;
                }
            }
            if (inArray === false) {
                boundingBoxes[i].push(bbox);
            }
        });
    });
    var result = [];
    for (var i = 0; i < boundingBoxes.length; i++) {
        var staffLines = boundingBoxes[i];
        var topValues = staffLines.map(function (s) { return s.top; });
        var bottomValues = staffLines.map(function (s) { return s.bottom; });
        var leftValues = staffLines.map(function (s) { return s.left; });
        var rightValues = staffLines.map(function (s) { return s.right; });
        var heightValues = staffLines.map(function (s) { return s.top - s.bottom; });
        var widthValues = staffLines.map(function (s) { return s.right - s.left; });
        var t = {
            measureNumber: i + 1,
            top: Math.min.apply(Math, __spread(topValues)),
            bottom: Math.max.apply(Math, __spread(bottomValues)),
            left: Math.min.apply(Math, __spread(leftValues)),
            right: Math.max.apply(Math, __spread(rightValues)),
        };
        // console.log("---");
        // console.log(topValues, bottomValues);
        // console.log(leftValues, rightValues);
        // console.log(t);
        result.push(t);
    }
    return result;
};
exports.getSelectedMeasureBoundingBoxes = function (selectedMeasures, graphicalNotesPerBar) {
    var boundingBoxes = exports.getMeasureBoundingBoxes(graphicalNotesPerBar);
    console.log(boundingBoxes);
    return selectedMeasures.map(function (num) { return boundingBoxes[num - 1]; });
};
exports.getSelectedMeasures = function (graphicalNotesPerBar, start, end) {
    var boundingBoxes = exports.getMeasureBoundingBoxes(graphicalNotesPerBar);
    var selectedBars = [];
    var selectedBoundingBoxes = [];
    var selection = {
        left: start.x,
        top: start.y,
        right: end.x,
        bottom: end.y,
    };
    boundingBoxes.forEach(function (bbox) {
        if (exports.hasOverlap(bbox, selection)) {
            selectedBars.push(bbox.measureNumber);
            selectedBoundingBoxes.push(bbox);
        }
    });
    // console.log(selectedBars);
    var barNumbers = [];
    // add missing bar numbers
    for (var i = 0; i < selectedBars.length; i++) {
        var value = selectedBars[i];
        barNumbers.push(value);
        if (i + 1 < selectedBars.length) {
            var next = selectedBars[i + 1];
            // console.log(value, next);
            while (next - value > 1) {
                // console.log(value);
                barNumbers.push(++value);
            }
        }
    }
    return {
        barNumbers: barNumbers,
        boundingBoxes: selectedBoundingBoxes,
    };
};
//# sourceMappingURL=getGraphicalNotesInSelection.js.map
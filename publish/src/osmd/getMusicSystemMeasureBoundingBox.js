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
exports.getMusicSystemMeasureBoundingBoxes = void 0;
var getBoundingBoxesOfGraphicalMeasures_1 = require("./getBoundingBoxesOfGraphicalMeasures");
/**
 * combines per measure the bounding boxes of all staves
 */
exports.getMusicSystemMeasureBoundingBoxes = function (osmd) {
    var boundingBoxes = getBoundingBoxesOfGraphicalMeasures_1.getBoundingBoxesOfGraphicalMeasures(osmd);
    // console.log(graphicalNotesPerBar);
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
            top: Math.min.apply(Math, __spread(topValues)),
            bottom: Math.max.apply(Math, __spread(bottomValues)),
            left: Math.min.apply(Math, __spread(leftValues)),
            right: Math.max.apply(Math, __spread(rightValues)),
        };
        result.push({
            measureNumber: i + 1,
            top: t.top,
            left: t.left,
            bottom: t.bottom,
            right: t.right,
            x: t.left,
            y: t.top,
            width: Math.max.apply(Math, __spread(widthValues)),
            height: Math.max.apply(Math, __spread(heightValues)),
        });
    }
    return result;
};
//# sourceMappingURL=getMusicSystemMeasureBoundingBox.js.map
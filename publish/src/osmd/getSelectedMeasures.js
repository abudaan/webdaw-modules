"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectedMeasures = void 0;
var getMusicSystemMeasureBoundingBox_1 = require("./getMusicSystemMeasureBoundingBox");
var _2d_1 = require("../util/2d");
/**
 * finds all measures that have a overlap with the selection rectangle
 */
exports.getSelectedMeasures = function (osmd, start, end) {
    var boundingBoxes = getMusicSystemMeasureBoundingBox_1.getMusicSystemMeasureBoundingBoxes(osmd);
    // console.log(boundingBoxes);
    var selectedBars = [];
    var selection = {
        x: start.x,
        y: start.y,
        width: end.x - start.x,
        height: end.y - start.y,
        left: start.x,
        top: start.y,
        right: end.x,
        bottom: end.y,
    };
    boundingBoxes.forEach(function (bbox) {
        if (_2d_1.hasOverlap(bbox, selection)) {
            selectedBars.push(bbox.measureNumber);
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
        boundingBoxes: barNumbers.map(function (num) { return boundingBoxes[num - 1]; }),
    };
};
//# sourceMappingURL=getSelectedMeasures.js.map
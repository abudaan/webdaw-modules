"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoundingBoxesOfSelectedMeasures = void 0;
var getBoundingBoxMeasure_1 = require("./getBoundingBoxMeasure");
exports.getBoundingBoxesOfSelectedMeasures = function (selectedMeasures, osmd) {
    // const boundingBoxes = getMusicSystemMeasureBoundingBoxes(osmd);
    var boundingBoxes = getBoundingBoxMeasure_1.getBoundingBoxMeasureAll(osmd);
    console.log("boundingBoxes", boundingBoxes);
    return selectedMeasures.map(function (num) { return boundingBoxes[num - 1]; });
};
//# sourceMappingURL=getBoundingBoxesOfSelectedMeasures.js.map
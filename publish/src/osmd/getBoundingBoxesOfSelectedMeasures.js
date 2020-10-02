"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getMusicSystemMeasureBoundingBox_1 = require("./getMusicSystemMeasureBoundingBox");
exports.getBoundingBoxesOfSelectedMeasures = function (selectedMeasures, osmd) {
    var boundingBoxes = getMusicSystemMeasureBoundingBox_1.getMusicSystemMeasureBoundingBoxes(osmd);
    return selectedMeasures.map(function (num) { return boundingBoxes[num - 1]; });
};
//# sourceMappingURL=getBoundingBoxesOfSelectedMeasures.js.map
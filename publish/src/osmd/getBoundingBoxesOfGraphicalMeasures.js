"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoundingBoxesOfGraphicalMeasures = void 0;
// return the bounding boxes of all staves per measure
exports.getBoundingBoxesOfGraphicalMeasures = function (osmd) {
    return osmd.GraphicSheet.MeasureList.map(function (arr) {
        return arr.map(function (measure) {
            var _a = measure, stave = _a.stave, measureNumber = _a.measureNumber;
            return {
                measureNumber: measureNumber,
                x: stave.x,
                y: stave.y,
                width: stave.width,
                height: stave.height,
                top: stave.y,
                right: stave.x + stave.width,
                bottom: stave.y + stave.height,
                left: stave.x,
            };
        });
    });
};
//# sourceMappingURL=getBoundingBoxesOfGraphicalMeasures.js.map
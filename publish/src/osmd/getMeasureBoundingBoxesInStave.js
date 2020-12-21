"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeasureBoundingBoxesInStave = void 0;
exports.getMeasureBoundingBoxesInStave = function (staveIndex, osmd) {
    if (staveIndex === -1) {
        return [];
    }
    var offsetX = osmd["container"].offsetLeft;
    var offsetY = osmd["container"].offsetTop;
    var scrollPosX = window.scrollX;
    var scrollPosY = window.scrollY;
    var boundingBoxes = [];
    for (var i = 0; i < osmd.GraphicSheet.MeasureList.length; i++) {
        var m = osmd.GraphicSheet.MeasureList[i];
        var stave = m[staveIndex];
        var _a = stave.stave, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        x = x + offsetX; // + scrollPosX;
        y = y + offsetY; // + scrollPosY;
        boundingBoxes.push({
            x: x,
            y: y,
            width: width,
            height: height,
            left: x,
            right: x + width,
            top: y,
            bottom: y + height,
        });
    }
    return boundingBoxes;
};
//# sourceMappingURL=getMeasureBoundingBoxesInStave.js.map
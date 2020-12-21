"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeasureAndStaveAtPoint = void 0;
var _2d_1 = require("../util/2d");
exports.getMeasureAndStaveAtPoint = function (e, osmd) {
    var offsetX = osmd["container"].offsetLeft;
    var offsetY = osmd["container"].offsetTop;
    var scrollPosX = window.scrollX;
    var scrollPosY = window.scrollY;
    // const x = e.clientX + offsetX + scrollPosX;
    // const y = e.clientY + offsetY + scrollPosY;
    var x = e.clientX - offsetX + scrollPosX;
    var y = e.clientY - offsetY + scrollPosY;
    // console.log(offsetY, scrollPosY, x, y);
    var refClick = {
        top: y,
        bottom: y + 2,
        left: x,
        right: x + 2,
        x: x,
        y: y,
        width: 2,
        height: 2,
    };
    var staveIndex = -1;
    var measureIndex = -1;
    for (var i = 0; i < osmd.GraphicSheet.MeasureList.length; i++) {
        var m = osmd.GraphicSheet.MeasureList[i];
        for (var j = 0; j < m.length; j++) {
            var stave = m[j];
            var _a = stave.stave, x_1 = _a.x, y_1 = _a.y, width = _a.width, height = _a.height;
            var refStave = {
                x: x_1,
                y: y_1,
                width: width,
                height: height,
                left: x_1,
                right: x_1 + width,
                top: y_1,
                bottom: y_1 + height,
            };
            if (_2d_1.hasOverlap(refClick, refStave)) {
                staveIndex = j;
                measureIndex = i;
                break;
            }
        }
    }
    // console.log(staveIndex, measureIndex);
    return {
        staveIndex: staveIndex,
        measureIndex: measureIndex,
    };
};
//# sourceMappingURL=getMeasureAndStaveAtPoint.js.map
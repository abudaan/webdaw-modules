"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeasureAtPoint = void 0;
var _2d_1 = require("../util/2d");
var getBoundingBoxMeasure_1 = require("./getBoundingBoxMeasure");
exports.getMeasureAtPoint = function (e, osmd, bboxes) {
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
    var boundingBoxes = bboxes;
    if (!boundingBoxes) {
        boundingBoxes = getBoundingBoxMeasure_1.getBoundingBoxMeasureAll(osmd);
    }
    var result;
    for (var i = 0; i < boundingBoxes.length; i++) {
        var bbox = boundingBoxes[i];
        var hit = _2d_1.hasOverlap(refClick, bbox);
        if (hit) {
            result = {
                bbox: bbox,
                measureNumber: i + 1,
                offset: x - bbox.x,
            };
            return result;
        }
    }
    return null;
};
//# sourceMappingURL=getMeasureAtPoint.js.map
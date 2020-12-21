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
exports.getStaveAtPoint = exports.getBoundingBoxMeasureAll = exports.getBoundingBoxMeasure = exports.calculateBoundingBoxMeasure = void 0;
var _2d_1 = require("../util/2d");
// generic util methods, will become part of WebDAW
exports.calculateBoundingBoxMeasure = function (staves) {
    var x = 0;
    var y = 0;
    var width = 0;
    var height = 0;
    if (staves) {
        var yPos_1 = [];
        staves.forEach(function (s, i) {
            var stave = s.stave;
            // console.log(i, stave);
            (x = stave.x, y = stave.y, width = stave.width, height = stave.height);
            yPos_1.push(y);
        });
        var yMin = Math.min.apply(Math, __spread(yPos_1));
        var yMax = Math.max.apply(Math, __spread(yPos_1));
        height += yMax - yMin;
        // console.log(yMax, yMin, height, yMax - yMin + height);
        return {
            x: x,
            y: yMin,
            width: width,
            height: height,
            top: yMin,
            bottom: yMin + height,
            left: x,
            right: x + width,
        };
    }
    return { x: x, y: y, width: width, height: height, top: 0, left: 0, bottom: 0, right: 0 };
};
exports.getBoundingBoxMeasure = function (osmd, measureNumber) {
    var staves = osmd.GraphicSheet.MeasureList.find(function (e) { return e[0]["measureNumber"] === measureNumber; });
    return exports.calculateBoundingBoxMeasure(staves);
};
exports.getBoundingBoxMeasureAll = function (osmd) {
    return osmd.GraphicSheet.MeasureList.map(function (staves) { return exports.calculateBoundingBoxMeasure(staves); });
};
exports.getStaveAtPoint = function (e, osmd) {
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
    console.log(osmd);
    osmd.GraphicSheet.MeasureList.map(function (staves) {
        staves.forEach(function (stave, i) {
            var _a = stave.stave, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
            var refStave = {
                x: x,
                y: y,
                width: width,
                height: height,
                left: x,
                right: x + width,
                top: y,
                bottom: y + height,
            };
            if (_2d_1.hasOverlap(refClick, refStave)) {
                // console.log("stave", i, refClick.x, refClick.y, x, y, width, height);
                console.log("hit", i, refStave, refClick);
                // } else {
                //   console.log("no hit", i, refStave, refClick);
            }
        });
    });
};
//# sourceMappingURL=getBoundingBoxMeasure.js.map
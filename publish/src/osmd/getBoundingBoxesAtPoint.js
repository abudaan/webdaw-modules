"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoundingBoxesAtPoint = void 0;
var _2d_1 = require("../util/2d");
var t = 0;
var getBoundingBox = function (boundingBox) {
    if (t === 0) {
        console.log(boundingBox);
        t++;
    }
    var _a = boundingBox, _b = _a.absolutePosition, x = _b.x, y = _b.y, borderLeft = _a.borderLeft, borderRight = _a.borderRight, borderTop = _a.borderTop, borderBottom = _a.borderBottom;
    var width = borderRight - (x + borderLeft);
    var height = borderBottom - borderTop;
    // console.log(width, height);
    x += borderLeft;
    y += borderTop;
    x *= 10;
    y *= 10;
    width *= 10;
    height *= 10;
    // width = width === 0 ? 0.5 : width;
    // height = height === 0 ? 1 : height;
    // console.log(x, y, width, height);
    var bbox = {
        x: x,
        y: y,
        width: width,
        height: height,
        left: x,
        right: x + width,
        top: y,
        bottom: y + height,
    };
    return bbox;
};
var checkBoundingBox2 = function (boxes, refClick, result) {
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        var b = getBoundingBox(box);
        if (_2d_1.hasOverlap(refClick, b)) {
            console.log("add 1", b);
            result.push(b);
        }
        if (box.ChildElements.length &&
            box.ChildElements[0].ChildElements &&
            box.ChildElements[0].ChildElements.length !== 0) {
            checkBoundingBox2(box.ChildElements, refClick, result);
        }
        else {
            var b_1 = getBoundingBox(box);
            var o = _2d_1.hasOverlap(refClick, b_1);
            if (b_1.width !== 0 && b_1.height !== 0) {
                // console.log(o);
                if (o) {
                    // console.log(hasOverlap(refClick, b));
                    result.push(b_1);
                    console.log("add 2", b_1);
                }
            }
        }
    }
};
var checkBoundingBox = function (boxes, refClick) {
    // console.log(boxes);
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        // const b = getBoundingBox(box);
        // if (hasOverlap(refClick, b)) {
        //   return [b];
        // } else if (
        if (box.ChildElements.length &&
            box.ChildElements[0].ChildElements &&
            box.ChildElements[0].ChildElements.length !== 0) {
            return checkBoundingBox(box.ChildElements, refClick);
        }
        else {
            var b = getBoundingBox(box);
            var o = _2d_1.hasOverlap(refClick, b);
            if (b.width !== 0 && b.height !== 0) {
                // console.log(o);
                if (o) {
                    // console.log(hasOverlap(refClick, b));
                    return [b];
                }
            }
        }
    }
    return [];
};
exports.getBoundingBoxesAtPoint = function (e, osmd) {
    var offsetX = osmd["container"].offsetLeft;
    var offsetY = osmd["container"].offsetTop;
    var scrollPosX = window.scrollX;
    var scrollPosY = window.scrollY;
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
    // for (let i = 0; i < osmd.GraphicSheet.MeasureList.length; i++) {
    //   const m = osmd.GraphicSheet.MeasureList[i];
    //   for (let j = 0; j < m.length; j++) {
    //     const stave = m[j];
    //     const { staffEntries } = stave;
    //     for (let k = 0; k < staffEntries.length; k++) {
    //       const staffEntry = staffEntries[k];
    //       const boundingBox: BoundingBox = (staffEntry as any).boundingBox;
    //       const result = checkBoundingBox([boundingBox], refClick);
    //       // console.log(k, result);
    //       if (result.length) {
    //         return result;
    //       }
    //     }
    //   }
    // }
    // return [];
    var result = [];
    for (var i = 0; i < osmd.GraphicSheet.MeasureList.length; i++) {
        var m = osmd.GraphicSheet.MeasureList[i];
        for (var j = 0; j < m.length; j++) {
            var stave = m[j];
            var staffEntries = stave.staffEntries;
            for (var k = 0; k < staffEntries.length; k++) {
                var staffEntry = staffEntries[k];
                var boundingBox = staffEntry.boundingBox;
                checkBoundingBox2([boundingBox], refClick, result);
            }
        }
    }
    return result;
};
//# sourceMappingURL=getBoundingBoxesAtPoint.js.map
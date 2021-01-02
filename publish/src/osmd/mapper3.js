"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapper3 = void 0;
var getBoundingBoxData = function (bbox) {
    var _a = bbox.AbsolutePosition, x = _a.x, y = _a.y, BorderTop = bbox.BorderTop, BorderBottom = bbox.BorderBottom, BorderLeft = bbox.BorderLeft, BorderRight = bbox.BorderRight;
    // xAbs *= 10;
    // yAbs *= 10;
    // x *= 10;
    // y *= 10;
    // width *= 10;
    // height *= 10;
    // const topLeft = (drawer as any).applyScreenTransformation(x + BorderLeft, y + BorderTop);
    // const bottomRight = (drawer as any).applyScreenTransformation(
    //   x + BorderRight,
    //   y + BorderBottom
    // );
    var topLeft = { x: (x + BorderLeft) * 10, y: (y + BorderTop) * 10 };
    var bottomRight = { x: (x + BorderRight) * 10, y: (y + BorderBottom) * 10 };
    return {
        x: topLeft.x,
        y: topLeft.y,
        width: bottomRight.x - topLeft.x,
        height: bottomRight.y - topLeft.y,
    };
};
var getBoundingBox = function (boxes, result, drawer) {
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        // console.log("SYMBOL", (box as any).isSymbol);
        // console.log("CHILDREN", box.ChildElements.length);
        if (box.isSymbol === true) {
            result.push(getBoundingBoxData(box));
        }
        if (box.ChildElements.length) {
            getBoundingBox(box.ChildElements, result, drawer);
        }
    }
};
exports.mapper3 = function (osmd) {
    var bboxes = [];
    osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(function (container) {
        container.staffEntries.forEach(function (staffEntry) {
            bboxes.push(getBoundingBoxData(staffEntry.boundingBox));
        });
    });
    return bboxes;
};
//# sourceMappingURL=mapper3.js.map
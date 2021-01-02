"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapper2 = void 0;
var getBoundingBox = function (boxes, result, drawer) {
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        // console.log("SYMBOL", (box as any).isSymbol);
        // console.log("CHILDREN", box.ChildElements.length);
        if (box.isSymbol === true) {
            var _a = box.AbsolutePosition, x = _a.x, y = _a.y, BorderTop = box.BorderTop, BorderBottom = box.BorderBottom, BorderLeft = box.BorderLeft, BorderRight = box.BorderRight;
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
            result.push({
                x: topLeft.x,
                y: topLeft.y,
                width: bottomRight.x - topLeft.x,
                height: bottomRight.y - topLeft.y,
            });
        }
        if (box.ChildElements.length) {
            getBoundingBox(box.ChildElements, result, drawer);
        }
    }
};
exports.mapper2 = function (osmd) {
    var bboxes = [];
    osmd.GraphicSheet.MeasureList.forEach(function (staffList) {
        staffList.forEach(function (measure) {
            getBoundingBox([measure.boundingBox], bboxes, osmd.Drawer);
        });
    });
    return bboxes;
};
//# sourceMappingURL=mapper2.js.map
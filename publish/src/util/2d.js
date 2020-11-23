"use strict";
// https://stackoverflow.com/questions/12066870/how-to-check-if-an-element-is-overlapping-other-elements
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasOverlap = void 0;
exports.hasOverlap = function (rect1, rect2) {
    return !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom);
};
//# sourceMappingURL=2d.js.map
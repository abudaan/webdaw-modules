"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = exports.setAttibuteSVGElement = exports.domToSvg = exports.getRandomColor = void 0;
exports.getRandomColor = function (alpha) {
    if (alpha === void 0) { alpha = 0.3; }
    var color = [];
    for (var i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 200));
    }
    return "rgba(" + color.join(", ") + ", " + alpha;
};
exports.domToSvg = function (svg, point) {
    var pt = svg.createSVGPoint();
    pt.x = point.x;
    pt.y = point.y;
    var sp = pt.matrixTransform(svg.getScreenCTM().inverse());
    console.log("SP", sp);
    return {
        x: sp.x,
        y: sp.y,
    };
};
exports.setAttibuteSVGElement = function (elem, type, attribute, value) {
    if (elem.hasChildNodes()) {
        elem.childNodes.forEach(function (child) {
            var c = child;
            if (c.tagName && c.tagName.toLowerCase() === type) {
                c.setAttribute(attribute, value);
            }
            if (c.hasChildNodes()) {
                exports.setAttibuteSVGElement(c, type, attribute, value);
            }
        });
    }
};
exports.match = function (a, b, margin) {
    if (margin === void 0) { margin = 1; }
    // console.log(a, b);
    // console.log(Math.abs(a - b) < margin);
    // console.log("---");
    if (a === b) {
        return true;
    }
    if (Math.abs(a - b) <= margin) {
        return true;
    }
    return false;
};
//# sourceMappingURL=util.js.map
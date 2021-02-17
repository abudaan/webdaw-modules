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
exports.getBoundingBoxMeasureAll = exports.getBoundingBoxMeasure = exports.calculateBoundingBoxMeasure = void 0;
var i = 0;
exports.calculateBoundingBoxMeasure = function (staves) {
    var x = 0;
    var y = 0;
    var width = 0;
    var height = 0;
    // console.log("staves", ++i, staves);
    if (staves) {
        var yPos_1 = [];
        var filtered = staves.filter(function (s) { return typeof s !== "undefined"; });
        filtered.forEach(function (s, i) {
            var stave = s.stave;
            // console.log(stave, stave.multiRestElement);
            var measure = s;
            if (typeof measure.multiRestElement !== "undefined") {
                console.log("multi-bar", measure.multiRestElement.number_of_measures);
            }
            // console.log(i, stave);
            (x = stave.x, y = stave.y, width = stave.width, height = stave.height);
            yPos_1.push(y);
        });
        var yMin = Math.min.apply(Math, __spread(yPos_1));
        var yMax = Math.max.apply(Math, __spread(yPos_1));
        height = (height / 5) * 4;
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
/*
export const getStaveAtPoint = (e: PointerEvent, osmd: OpenSheetMusicDisplay) => {
  const offsetX = osmd["container"].offsetLeft;
  const offsetY = osmd["container"].offsetTop;
  const scrollPosX = window.scrollX;
  const scrollPosY = window.scrollY;
  // const x = e.clientX + offsetX + scrollPosX;
  // const y = e.clientY + offsetY + scrollPosY;
  const x = e.clientX - offsetX + scrollPosX;
  const y = e.clientY - offsetY + scrollPosY;
  // console.log(offsetY, scrollPosY, x, y);

  const refClick = {
    top: y,
    bottom: y + 2,
    left: x,
    right: x + 2,
    x,
    y,
    width: 2,
    height: 2,
  };

  console.log(osmd);

  osmd.GraphicSheet.MeasureList.map(staves => {
    staves.forEach((stave, i) => {
      const {
        stave: { x, y, width, height },
      } = stave as any;
      const refStave = {
        x,
        y,
        width,
        height,
        left: x,
        right: x + width,
        top: y,
        bottom: y + height,
      };
      if (hasOverlap(refClick, refStave)) {
        // console.log("stave", i, refClick.x, refClick.y, x, y, width, height);
        console.log("hit", i, refStave, refClick);
        // } else {
        //   console.log("no hit", i, refStave, refClick);
      }
    });
  });
};
*/
//# sourceMappingURL=getBoundingBoxMeasure.js.map
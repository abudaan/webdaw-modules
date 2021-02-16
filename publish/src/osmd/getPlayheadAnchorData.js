"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.getPlayheadAnchorData = exports.getTicksAtBar = void 0;
var mapper3_1 = require("./mapper3");
exports.getTicksAtBar = function (parts) {
    parts.forEach(function (data) {
        var bar = 0;
        data.events.reduce(function (acc, val) {
            if (val.bar && val.bar !== bar) {
                bar = val.bar;
                // console.log(bar, val.ticks);
            }
            return bar;
        }, 0);
    });
};
exports.getPlayheadAnchorData = function (osmd, repeats, ppq) {
    if (ppq === void 0) { ppq = 960; }
    var measureStartTicks = osmd.Sheet.SourceMeasures.map(function (measure) {
        return ppq * measure.AbsoluteTimestamp.RealValue * 4;
    });
    var ticks = 0;
    var anchorData = osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.map(function (container) {
        var realValue = container.AbsoluteTimestamp.RealValue;
        var data = container.StaffEntries.map(function (entry) {
            var measureNumber = entry.parentMeasure.MeasureNumber;
            if (typeof entry.parentMeasure.multiRestElement !== "undefined") {
                var numberOfMeasures = entry.parentMeasure.multiRestElement.number_of_measures;
                console.log(measureNumber, numberOfMeasures);
            }
            return { measureNumber: measureNumber, bbox: mapper3_1.getBoundingBoxData(entry.boundingBox) };
        });
        data.sort(function (a, b) {
            if (a.bbox.x < b.bbox.x) {
                return -1;
            }
            if (a.bbox.x > b.bbox.x) {
                return 1;
            }
            return 0;
        });
        // console.log(boxes);
        ticks = ppq * 4 * realValue;
        // console.log("realValue", realValue, ticks);
        // always get the first vertical graphical staff entry
        var bbox = data[0].bbox;
        var measureNumber = data[0].measureNumber;
        return { startTicks: ticks, endTicks: 0, bbox: bbox, measureNumber: measureNumber };
    });
    // console.log(anchorData);
    // copy anchor data for all repeats
    var diffTicks = 0;
    var copies = [];
    for (var i = 0; i < repeats.length; i++) {
        var _a = __read(repeats[i], 2), min = _a[0], max = _a[1];
        var minTicks = measureStartTicks[min - 1];
        var maxTicks = measureStartTicks[max];
        // console.log(min, max, minTicks, maxTicks);
        diffTicks += maxTicks - minTicks;
        // console.log(min, max, minTicks, maxTicks, diffTicks);
        for (var j = 0; j < anchorData.length; j++) {
            var anchor = anchorData[j];
            if (anchor.measureNumber >= min && anchor.measureNumber <= max) {
                var clone = __assign({}, anchor);
                clone.startTicks += diffTicks;
                clone.measureNumber += max - (min - 1);
                copies.push(clone);
            }
        }
    }
    // console.log(copies);
    // update the ticks and measure number of the bars that come after the repeats
    var result = anchorData.map(function (d) {
        var measureNumber = d.measureNumber, startTicks = d.startTicks;
        var clone = __assign({}, d);
        var diffTicks = 0;
        var diffBars = 0;
        for (var i = 0; i < repeats.length; i++) {
            var _a = __read(repeats[i], 2), min = _a[0], max = _a[1];
            var minTicks = measureStartTicks[min - 1];
            var maxTicks = measureStartTicks[max];
            diffTicks += maxTicks - minTicks;
            diffBars += max - (min - 1);
            if (measureNumber > max) {
                clone.startTicks = startTicks + diffTicks;
                clone.measureNumber = measureNumber + diffBars;
            }
        }
        return clone;
    });
    // result.forEach(d => {
    //   console.log(d.measureNumber, d.ticks);
    // });
    // copies.forEach(d => {
    //   console.log(d.measureNumber, d.ticks);
    // });
    result.push.apply(result, __spread(copies));
    result.sort(function (a, b) {
        if (a.startTicks < b.startTicks) {
            return -1;
        }
        if (a.startTicks > b.startTicks) {
            return 1;
        }
        return 0;
    });
    result.sort(function (a, b) {
        if (a.measureNumber < b.measureNumber) {
            return -1;
        }
        if (a.measureNumber > b.measureNumber) {
            return 1;
        }
        return 0;
    });
    for (var i = 0; i < result.length; i++) {
        var a1 = result[i];
        var a2 = result[i + 1];
        if (a2) {
            a1.endTicks = a2.startTicks;
        }
    }
    // result.forEach(d => {
    //   console.log(d.measureNumber, d.ticks);
    // });
    var result1 = [];
    var currentMeasureNumber = 0;
    result.forEach(function (r) {
        var startTicks = r.startTicks, measureNumber = r.measureNumber;
        if (currentMeasureNumber !== measureNumber) {
            currentMeasureNumber = measureNumber;
            result1.push(startTicks);
        }
    });
    // add ticks position of the end of the last bar
    var _b = osmd.Sheet.SourceMeasures[osmd.Sheet.SourceMeasures.length - 1].ActiveTimeSignature, Numerator = _b.Numerator, Denominator = _b.Denominator;
    var lastTicks = result1[result1.length - 1] + Numerator * (4 / Denominator) * 960;
    result1.push(lastTicks);
    result[result.length - 1].endTicks = lastTicks;
    console.log(result);
    return { anchorData: result, measureStartTicks: result1 };
};
//# sourceMappingURL=getPlayheadAnchorData.js.map
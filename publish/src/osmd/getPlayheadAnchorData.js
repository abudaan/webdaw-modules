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
var getBoundingBoxMeasure_1 = require("./getBoundingBoxMeasure");
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
    var measureBoundingBoxes = getBoundingBoxMeasure_1.getBoundingBoxMeasureAll(osmd);
    var measureStartTicks = osmd.Sheet.SourceMeasures.map(function (measure) {
        return ppq * measure.AbsoluteTimestamp.RealValue * 4;
    });
    // console.log(ppq);
    var anchorData = [];
    osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(function (container) {
        var realValue = container.AbsoluteTimestamp.RealValue;
        var data = [];
        container.StaffEntries.forEach(function (entry) {
            var measureNumber = entry.parentMeasure.MeasureNumber;
            var bboxMeasure = measureBoundingBoxes[measureNumber - 1];
            var _a = osmd.Sheet.SourceMeasures[measureNumber - 1].ActiveTimeSignature, Numerator = _a.Numerator, Denominator = _a.Denominator;
            var beatTicks = ppq / (Denominator / 4);
            var runningTicks = beatTicks * Numerator * realValue;
            var yPos = entry.parentMeasure.parentMusicSystem.boundingBox.absolutePosition.y * 10;
            if (typeof entry.parentMeasure.multiRestElement !== "undefined") {
                var numberOfMeasures = entry.parentMeasure.multiRestElement.number_of_measures;
                var diffTicks_1 = numberOfMeasures * Numerator * beatTicks;
                var numGhostAnchors = numberOfMeasures * Numerator;
                var anchorTicks = diffTicks_1 / numGhostAnchors;
                var anchorPixels = bboxMeasure.width / numGhostAnchors;
                var x = bboxMeasure.x;
                for (var i = 0; i < numGhostAnchors; i++) {
                    data.push({
                        numPixels: anchorTicks,
                        startTicks: runningTicks + i * anchorTicks,
                        endTicks: 0,
                        numTicks: 0,
                        pixelsPerTick: 0,
                        measureNumber: measureNumber,
                        bbox: {
                            x: x + i * anchorPixels,
                            y: bboxMeasure.y,
                            width: anchorPixels,
                            height: bboxMeasure.height,
                        },
                        bboxMeasure: bboxMeasure,
                        yPos: yPos,
                        ghost: true,
                    });
                }
            }
            else {
                var bbox = mapper3_1.getBoundingBoxData(entry.boundingBox);
                data.push({
                    numPixels: 0,
                    startTicks: runningTicks,
                    endTicks: 0,
                    numTicks: 0,
                    pixelsPerTick: 0,
                    measureNumber: measureNumber,
                    bbox: bbox,
                    // bboxMeasure: getBoundingBoxData((entry.parentMeasure as any).boundingBox),
                    bboxMeasure: bboxMeasure,
                    yPos: yPos,
                    ghost: false,
                });
            }
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
        // always get the first vertical graphical staff entry
        var anchor = data[0];
        if (anchor.ghost === false) {
            anchorData.push(anchor);
        }
        else {
            var x = void 0;
            for (var i = 0; i < data.length; i++) {
                var tmpX = data[i].bbox.x;
                if (tmpX !== x) {
                    x = tmpX;
                    anchorData.push(data[i]);
                }
            }
        }
    });
    // console.log(anchorData);
    // copy anchor data for all repeats
    var diffTicks = 0;
    var diffBars = 0;
    var copies = [];
    for (var i = 0; i < repeats.length; i++) {
        var _a = repeats[i], start = _a.start, end = _a.end;
        var minTicks = measureStartTicks[start - 1];
        var maxTicks = measureStartTicks[end];
        // console.log(min, max, minTicks, maxTicks);
        diffTicks += maxTicks - minTicks;
        diffBars += end - (start - 1);
        // console.log(min, max, minTicks, maxTicks, diffTicks);
        for (var j = 0; j < anchorData.length; j++) {
            var anchor = anchorData[j];
            if (anchor.measureNumber >= start && anchor.measureNumber <= end) {
                var clone = __assign({}, anchor);
                clone.startTicks += diffTicks;
                clone.measureNumber += diffBars;
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
            var _a = repeats[i], start = _a.start, end = _a.end;
            console.log(start, end);
            var minTicks = measureStartTicks[start - 1];
            var maxTicks = measureStartTicks[end];
            diffTicks += maxTicks - minTicks;
            diffBars += end - (start - 1);
            if (measureNumber > end) {
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
    for (var i = 0; i < result.length; i++) {
        var a1 = result[i];
        var a2 = result[i + 1];
        if (a2) {
            a1.endTicks = a2.startTicks;
            a1.numPixels = a2.bbox.x - a1.bbox.x;
            if (a2.yPos !== a1.yPos || a2.bbox.x < a1.bbox.x) {
                // a1.numPixels = a1.bbox.width
                a1.numPixels = a1.bboxMeasure.x + a1.bboxMeasure.width - a1.bbox.x;
            }
        }
        else {
            a1.endTicks = lastTicks;
            a1.numPixels = a1.bboxMeasure.x + a1.bboxMeasure.width - a1.bbox.x;
        }
        var diffTicks_2 = a1.endTicks - a1.startTicks;
        a1.pixelsPerTick = a1.numPixels / (a1.endTicks - a1.startTicks);
        a1.numTicks = a1.endTicks - a1.startTicks;
    }
    // result.forEach(d => {
    //   console.log(d.measureNumber, d.ticks);
    // });
    // console.log(result);
    return { anchorData: result, measureStartTicks: result1 };
};
//# sourceMappingURL=getPlayheadAnchorData.js.map
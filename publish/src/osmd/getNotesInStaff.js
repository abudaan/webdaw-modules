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
exports.getNotesInStaff = void 0;
/**
 * @param {NotesInStaffArgs} args
 *
 * The returned notes are objects that contain the ticks value, the MIDI note number and the measure index.
 * Passing a value for ppq affects the ticks values of the notes, this is handy if you need to match tick values
 * with a MIDI file that has a different ppq value then the score.
 */
exports.getNotesInStaff = function (_a) {
    var osmd = _a.osmd, staffIndex = _a.staffIndex, repeats = _a.repeats, _b = _a.ppq, ppq = _b === void 0 ? 960 : _b, _c = _a.amount, amount = _c === void 0 ? 100 : _c, _d = _a.start, start = _d === void 0 ? 0 : _d;
    var measures = osmd.GraphicSheet.MeasureList.map(function (staves) {
        return staves[staffIndex];
    });
    var notes = [];
    var ticks = 0;
    // console.log(measures);
    for (var i = 0; i < measures.length; i++) {
        var measure = measures[i];
        if (measure) {
            var measureNumber = measure.MeasureNumber;
            for (var j = 0; j < measure.staffEntries.length; j++) {
                var staffEntry = measure.staffEntries[j];
                for (var k = 0; k < staffEntry.graphicalVoiceEntries.length; k++) {
                    var voiceEntry = staffEntry.graphicalVoiceEntries[k];
                    for (var l = 0; l < voiceEntry.notes.length; l++) {
                        var note = voiceEntry.notes[l];
                        var realValue = staffEntry.getAbsoluteTimestamp().RealValue;
                        // realValue is based on 4/4 so even when the time signature
                        // changes the realValue calculates fractions based on 4/4
                        ticks = realValue * 4 * ppq;
                        if (note.sourceNote.isRestFlag === false) {
                            notes.push({
                                ticks: ticks,
                                noteNumber: note.sourceNote.halfTone + 12,
                                measureIndex: i,
                            });
                        }
                    }
                }
            }
        }
    }
    var measureStartTicks = osmd.Sheet.SourceMeasures.map(function (measure) {
        return ppq * measure.AbsoluteTimestamp.RealValue * 4;
    });
    // copy note data for all repeats
    var diffTicks = 0;
    var diffBars = 0;
    var copies = [];
    for (var i = 0; i < repeats.length; i++) {
        var _e = repeats[i], start_1 = _e.start, end = _e.end;
        // console.log(start, end);
        var minTicks = measureStartTicks[start_1 - 1];
        var maxTicks = measureStartTicks[end];
        diffTicks += maxTicks - minTicks;
        diffBars += end - (start_1 - 1);
        // console.log(diffTicks, diffBars);
        for (var j = 0; j < notes.length; j++) {
            var note = notes[j];
            var measureNumber = note.measureIndex + 1;
            if (measureNumber >= start_1 && measureNumber <= end) {
                var clone = __assign({}, note);
                clone.ticks += diffTicks;
                clone.measureIndex += diffBars;
                copies.push(clone);
                // console.log(measureNumber, clone.ticks);
            }
        }
    }
    // update the ticks and measure number of the bars that come after the repeats
    var result = notes.map(function (d) {
        var measureIndex = d.measureIndex, ticks = d.ticks;
        var measureNumber = measureIndex + 1;
        var clone = __assign({}, d);
        var diffTicks = 0;
        var diffBars = 0;
        for (var i = 0; i < repeats.length; i++) {
            var _a = repeats[i], start_2 = _a.start, end = _a.end;
            var minTicks = measureStartTicks[start_2 - 1];
            var maxTicks = measureStartTicks[end];
            diffTicks += maxTicks - minTicks;
            diffBars += end - (start_2 - 1);
            // console.log("diffBars", diffBars);
            if (measureNumber > end) {
                clone.ticks = ticks + diffTicks;
                clone.measureIndex = measureIndex + diffBars;
            }
        }
        return clone;
    });
    result.push.apply(result, __spread(copies));
    result.sort(function (a, b) {
        if (a.ticks < b.ticks) {
            return -1;
        }
        if (a.ticks > b.ticks) {
            return 1;
        }
        return 0;
    });
    // console.log(result.slice(start, start + amount));
    return result.slice(start, start + amount);
};
//# sourceMappingURL=getNotesInStaff.js.map
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
exports.getNoteEntriesPerStave = void 0;
exports.getNoteEntriesPerStave = function (osmd, ppq) {
    if (ppq === void 0) { ppq = 960; }
    var noteData = [];
    osmd.GraphicSheet.MeasureList.forEach(function (staves, measureIndex) {
        staves.forEach(function (measure, staveIndex) {
            measure.staffEntries.forEach(function (staffEntry) {
                var sx = [];
                var sy = [];
                var _a = staffEntry, borderLeft = _a.boundingBox.borderLeft, _b = _a.parentMusicSystem, id = _b.id, _c = _b.boundingBox, px = _c.x, py = _c.y, pwidth = _c.width, pheight = _c.height;
                var data;
                var tmpDatas = [];
                staffEntry.graphicalVoiceEntries.forEach(function (voiceEntry) {
                    voiceEntry.notes.forEach(function (note) {
                        var _a = note, _b = _a.boundingBox.absolutePosition, x = _b.x, y = _b.y, sourceNote = _a.sourceNote;
                        sx.push(x);
                        sy.push(y);
                        // console.log((note as any).boundingBox);
                        var _c = note.graphicalNoteLength, numerator = _c.numerator, denominator = _c.denominator, wholeValue = _c.wholeValue, realValue = _c.realValue;
                        data = {
                            center: { x: x * 10, y: 0 },
                            x: (x + borderLeft) * 10,
                            y: y * 10,
                            ticks: measureIndex * ppq * 4 + realValue * ppq * 4,
                            noteNumber: sourceNote.halfTone + 12,
                            measureIndex: measureIndex,
                            stave: {
                                index: staveIndex,
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0,
                            },
                            isRestFlag: sourceNote.isRestFlag,
                            noteLength: { numerator: numerator, denominator: denominator, wholeValue: wholeValue, realValue: realValue },
                            parentMusicSystem: {
                                id: id,
                                x: px,
                                y: py,
                                width: pwidth,
                                height: pheight,
                            },
                        };
                        tmpDatas.push(data);
                        // console.log(note);
                    });
                });
                var minX = Math.min.apply(Math, __spread(sx));
                var maxX = Math.max.apply(Math, __spread(sx));
                var minY = Math.min.apply(Math, __spread(sy));
                var maxY = Math.max.apply(Math, __spread(sy));
                tmpDatas.forEach(function (data) {
                    data.stave.x = minX;
                    data.stave.y = minY;
                    data.stave.width = maxX - minX;
                    data.stave.height = maxY - minY;
                    noteData.push(data);
                });
            });
        });
    });
    return noteData;
};
//# sourceMappingURL=getNoteEntriesPerStave.js.map
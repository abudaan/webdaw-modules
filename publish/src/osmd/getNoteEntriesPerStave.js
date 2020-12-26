"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoteEntriesPerStave = void 0;
exports.getNoteEntriesPerStave = function (osmd, ppq) {
    if (ppq === void 0) { ppq = 960; }
    var noteData = [];
    osmd.GraphicSheet.MeasureList.forEach(function (staves, measureIndex) {
        staves.forEach(function (measure, staveIndex) {
            measure.staffEntries.forEach(function (staffEntry) {
                staffEntry.graphicalVoiceEntries.forEach(function (voiceEntry) {
                    voiceEntry.notes.forEach(function (note) {
                        var _a = note, _b = _a.boundingBox.absolutePosition, x = _b.x, y = _b.y, sourceNote = _a.sourceNote;
                        var _c = note.graphicalNoteLength, numerator = _c.numerator, denominator = _c.denominator, wholeValue = _c.wholeValue, realValue = _c.realValue;
                        var data = {
                            x: x,
                            y: y,
                            ticks: measureIndex * ppq * 4 + realValue * ppq * 4,
                            noteNumber: sourceNote.halfTone + 12,
                            measureIndex: measureIndex,
                            staveIndex: staveIndex,
                            isRestFlag: sourceNote.isRestFlag,
                            noteLength: { numerator: numerator, denominator: denominator, wholeValue: wholeValue, realValue: realValue },
                        };
                        noteData.push(data);
                        // console.log(note);
                    });
                });
            });
        });
    });
    return noteData;
};
//# sourceMappingURL=getNoteEntriesPerStave.js.map
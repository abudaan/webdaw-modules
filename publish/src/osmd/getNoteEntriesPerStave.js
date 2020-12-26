"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoteEntriesPerStave = void 0;
exports.getNoteEntriesPerStave = function (osmd, ppq) {
    if (ppq === void 0) { ppq = 960; }
    console.log;
    osmd.GraphicSheet.MeasureList.forEach(function (staves, measureIndex) {
        staves.forEach(function (measure, staveIndex) {
            measure.staffEntries.forEach(function (staffEntry) {
                staffEntry.graphicalVoiceEntries.forEach(function (voiceEntry) {
                    voiceEntry.notes.forEach(function (note) {
                        var _a = note, _b = _a.boundingBox.absolutePosition, x = _b.x, y = _b.y, sourceNote = _a.sourceNote;
                        var relPosInMeasure = sourceNote.voiceEntry.timestamp.realValue;
                        var data = {
                            x: x,
                            y: y,
                            ticks: measureIndex * ppq * 4 + relPosInMeasure * ppq * 4,
                            noteNumber: sourceNote.halfTone + 12,
                            measureIndex: measureIndex,
                            staveIndex: staveIndex,
                        };
                        console.log(data, note);
                    });
                });
            });
        });
    });
};
//# sourceMappingURL=getNoteEntriesPerStave.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotesInStaff = void 0;
exports.getNotesInStaff = function (osmd, staffIndex, ppq, amount) {
    if (ppq === void 0) { ppq = 960; }
    if (amount === void 0) { amount = 100; }
    var measures = osmd.GraphicSheet.MeasureList.map(function (staves) {
        return staves[staffIndex];
    });
    var notes = [];
    var noteIndex = 0;
    var ticks = 0;
    for (var i = 0; i < measures.length; i++) {
        var measure = measures[i];
        for (var j = 0; j < measure.staffEntries.length; j++) {
            var staffEntry = measure.staffEntries[j];
            for (var k = 0; k < staffEntry.graphicalVoiceEntries.length; k++) {
                var voiceEntry = staffEntry.graphicalVoiceEntries[k];
                for (var l = 0; l < voiceEntry.notes.length; l++) {
                    var note = voiceEntry.notes[l];
                    // const relPosInMeasure = (note.sourceNote as any).voiceEntry.timestamp.realValue;
                    var 
                    // Numerator: numerator,
                    denominator = note.sourceNote.Length.Denominator;
                    // console.log(ticks, numerator, denominator, wholeValue, realValue, relPosInMeasure);
                    if (note.sourceNote.isRestFlag === false) {
                        notes.push({
                            ticks: ticks,
                            noteNumber: note.sourceNote.halfTone + 12,
                            measureIndex: i,
                        });
                        noteIndex++;
                        if (noteIndex === amount) {
                            // console.log(noteIndex, amount);
                            return notes;
                        }
                    }
                    ticks += ppq * (4 / denominator);
                }
            }
        }
    }
    return notes;
};
//# sourceMappingURL=getNotesInStaff.js.map
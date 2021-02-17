"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotesInStaff = void 0;
/**
 * @param {OpenSheetMusicDisplay} osmd
 * @param {number} staffIndex
 * @param {number} [ppq] - default 960
 * @param {number} [amount] - default 100
 *
 * The returned notes are objects that contain the ticks value, the MIDI note number and the measure index.
 * Passing a value for ppq affects the ticks values of the notes, this is handy if you need to match tick values
 * with a MIDI file that has a different ppq value then the score.
 */
exports.getNotesInStaff = function (osmd, staffIndex, ppq, amount) {
    if (ppq === void 0) { ppq = 960; }
    if (amount === void 0) { amount = 100; }
    var measures = osmd.GraphicSheet.MeasureList.map(function (staves) {
        return staves[staffIndex];
    });
    var notes = [];
    var noteIndex = 0;
    var ticks = 0;
    console.log(measures);
    for (var i = 0; i < measures.length; i++) {
        var measure = measures[i];
        if (measure) {
            for (var j = 0; j < measure.staffEntries.length; j++) {
                var staffEntry = measure.staffEntries[j];
                for (var k = 0; k < staffEntry.graphicalVoiceEntries.length; k++) {
                    var voiceEntry = staffEntry.graphicalVoiceEntries[k];
                    for (var l = 0; l < voiceEntry.notes.length; l++) {
                        var note = voiceEntry.notes[l];
                        // const relPosInMeasure = (note.sourceNote as any).voiceEntry.timestamp.realValue;
                        var _a = note.sourceNote.Length, numerator = _a.Numerator, denominator = _a.Denominator, wholeValue = _a.WholeValue, realValue = _a.RealValue;
                        console.log(ticks, numerator, denominator, wholeValue, realValue);
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
        else {
        }
    }
    return notes;
};
//# sourceMappingURL=getNotesInStaff.js.map
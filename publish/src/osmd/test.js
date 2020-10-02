"use strict";
// see this discussion: https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/pull/453
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotesUnderCursor = function (osmd, instrument) {
    var voiceEntries = osmd.cursor.VoicesUnderCursor(instrument);
    console.log(voiceEntries);
    var notes = [];
    voiceEntries.forEach(function (voiceEntry) {
        notes.push.apply(notes, voiceEntry.Notes);
    });
    return notes;
};
// document.addEventListener("mousedown", e => {
//   getNotesUnderCursor();
//   e.stopImmediatePropagation();
// });
// function getNotesUnderCursor(instrument?: Instrument) {
//   const voiceEntries: VoiceEntry[] = this.VoicesUnderCursor(instrument);
//   const notes: Note[] = [];
//   voiceEntries.forEach(voiceEntry => {
//     notes.push.apply(notes, voiceEntry.Notes);
//   });
//   return notes;
// }
//# sourceMappingURL=test.js.map
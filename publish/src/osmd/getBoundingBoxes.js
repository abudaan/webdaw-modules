"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceNotes = void 0;
// export const getBoundingBoxes = (osmd: OpenSheetMusicDisplay) => {
//   osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(container => {
//     container.StaffEntries.forEach((staffEntry: GraphicalStaffEntry) => {
//         const note = new Note()
//         staffEntry.findGraphicalNoteFromNote(note)
//     }
//   });
// };
exports.getSourceNotes = function (osmd) {
    var notes = [];
    osmd.Sheet.Staves.forEach(function (staff, staffIndex) {
        staff.Voices.forEach(function (voice) {
            voice.VoiceEntries.forEach(function (voiceEntry) {
                voiceEntry.Notes.forEach(function (note) {
                    notes.push({ note: note, staffIndex: staffIndex });
                });
            });
        });
    });
    var mappedNotes = [];
    osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(function (container) {
        container.StaffEntries.forEach(function (staffEntry) {
            for (var i = 0; i < notes.length; i++) {
                var note = notes[i].note;
                var graphicalNote = staffEntry.findGraphicalNoteFromNote(note);
                if (graphicalNote) {
                    mappedNotes.push({ note: note, graphicalNote: graphicalNote });
                    break;
                }
            }
        });
    });
    //   const { note } = notes[1];
    //   console.log(note);
    //   const staffEntry = note.ParentStaff.;
    //   const graphicalNote = staffEntry.findGraphicalNoteFromNote(note);
    //   console.log(graphicalNote);
    return mappedNotes;
};
//# sourceMappingURL=getBoundingBoxes.js.map
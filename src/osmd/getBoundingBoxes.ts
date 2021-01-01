import {
  GraphicalStaffEntry,
  GraphicalNote,
  Note,
  OpenSheetMusicDisplay,
  Staff,
  Voice,
  VoiceEntry,
} from "opensheetmusicdisplay";

// export const getBoundingBoxes = (osmd: OpenSheetMusicDisplay) => {
//   osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(container => {
//     container.StaffEntries.forEach((staffEntry: GraphicalStaffEntry) => {
//         const note = new Note()
//         staffEntry.findGraphicalNoteFromNote(note)
//     }
//   });
// };

export const getSourceNotes = (osmd: OpenSheetMusicDisplay) => {
  const notes: { note: Note; staffIndex: number }[] = [];
  osmd.Sheet.Staves.forEach((staff: Staff, staffIndex: number) => {
    staff.Voices.forEach((voice: Voice) => {
      voice.VoiceEntries.forEach((voiceEntry: VoiceEntry) => {
        voiceEntry.Notes.forEach((note: Note) => {
          notes.push({ note, staffIndex });
        });
      });
    });
  });

  const mappedNotes: { note: Note; graphicalNote: GraphicalNote }[] = [];
  osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(container => {
    container.StaffEntries.forEach((staffEntry: GraphicalStaffEntry) => {
      for (let i = 0; i < notes.length; i++) {
        const { note } = notes[i];
        const graphicalNote = staffEntry.findGraphicalNoteFromNote(note);
        if (graphicalNote) {
          mappedNotes.push({ note, graphicalNote });
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

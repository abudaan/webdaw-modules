// see this discussion: https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/pull/453

import { OpenSheetMusicDisplay, Instrument, VoiceEntry, Note } from "opensheetmusicdisplay";

export const getNotesUnderCursor = (osmd: OpenSheetMusicDisplay, instrument?: Instrument) => {
  const voiceEntries: VoiceEntry[] = osmd.cursor.VoicesUnderCursor(instrument);
  console.log(voiceEntries);
  const notes: Note[] = [];
  voiceEntries.forEach(voiceEntry => {
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

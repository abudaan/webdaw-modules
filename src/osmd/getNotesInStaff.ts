import {
  GraphicalStaffEntry,
  GraphicalVoiceEntry,
  OpenSheetMusicDisplay,
} from "opensheetmusicdisplay/build/dist/src";

export type NoteInfo = {
  ticks: number;
  noteNumber: number;
  measureIndex: number;
};

export const getNotesInStaff = (
  osmd: OpenSheetMusicDisplay,
  staffIndex: number,
  ppq: number = 960,
  amount: number = 100
) => {
  const measures = osmd.GraphicSheet.MeasureList.map(staves => {
    return staves[staffIndex];
  });
  const notes: NoteInfo[] = [];
  let noteIndex = 0;
  let ticks = 0;
  for (let i = 0; i < measures.length; i++) {
    const measure = measures[i];
    for (let j = 0; j < measure.staffEntries.length; j++) {
      const staffEntry = measure.staffEntries[j];
      for (let k = 0; k < staffEntry.graphicalVoiceEntries.length; k++) {
        const voiceEntry = staffEntry.graphicalVoiceEntries[k];
        for (let l = 0; l < voiceEntry.notes.length; l++) {
          const note = voiceEntry.notes[l];
          // const relPosInMeasure = (note.sourceNote as any).voiceEntry.timestamp.realValue;
          const {
            // Numerator: numerator,
            Denominator: denominator,
            // WholeValue: wholeValue,
            // RealValue: realValue,
          } = note.sourceNote.Length;
          // console.log(ticks, numerator, denominator, wholeValue, realValue, relPosInMeasure);
          if ((note.sourceNote as any).isRestFlag === false) {
            notes.push({
              ticks,
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

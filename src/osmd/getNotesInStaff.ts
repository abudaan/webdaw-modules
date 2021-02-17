import { OpenSheetMusicDisplay } from "opensheetmusicdisplay/build/dist/src";

export type NoteInfo = {
  ticks: number;
  noteNumber: number;
  measureIndex: number;
};

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
export const getNotesInStaff = (osmd: OpenSheetMusicDisplay, staffIndex: number, ppq: number = 960, amount: number = 100): NoteInfo[] => {
  const measures = osmd.GraphicSheet.MeasureList.map(staves => {
    return staves[staffIndex];
  });
  const notes: NoteInfo[] = [];
  let noteIndex = 0;
  let ticks = 0;
  // console.log(measures);
  for (let i = 0; i < measures.length; i++) {
    const measure = measures[i];
    if (measure) {
      const measureNumber = measure.MeasureNumber;
      const { Numerator, Denominator } = osmd.Sheet.SourceMeasures[measureNumber - 1].ActiveTimeSignature;
      const beatTicks = ppq / (Denominator / 4);

      for (let j = 0; j < measure.staffEntries.length; j++) {
        const staffEntry = measure.staffEntries[j];
        for (let k = 0; k < staffEntry.graphicalVoiceEntries.length; k++) {
          const voiceEntry = staffEntry.graphicalVoiceEntries[k];
          for (let l = 0; l < voiceEntry.notes.length; l++) {
            const note = voiceEntry.notes[l];
            const realValue = staffEntry.getAbsoluteTimestamp().RealValue;
            ticks = realValue * Numerator * beatTicks;
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
          }
        }
      }
    }
  }
  return notes;
};

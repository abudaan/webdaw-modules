import { OpenSheetMusicDisplay, SourceMeasure } from "opensheetmusicdisplay";
import { RepeatData } from "../musicxml/parser";

export type NoteInfo = {
  ticks: number;
  noteNumber: number;
  measureIndex: number;
};

export type NotesInStaffArgs = {
  osmd: OpenSheetMusicDisplay;
  staffIndex: number;
  repeats: RepeatData[];
  ppq?: number;
  amount?: number;
  start?: number;
};

/**
 * @param {NotesInStaffArgs} args
 *
 * The returned notes are objects that contain the ticks value, the MIDI note number and the measure index.
 * Passing a value for ppq affects the ticks values of the notes, this is handy if you need to match tick values
 * with a MIDI file that has a different ppq value then the score.
 */
export const getNotesInStaff = ({ osmd, staffIndex, repeats, ppq = 960, amount = 100, start = 0 }: NotesInStaffArgs): NoteInfo[] => {
  const measures = osmd.GraphicSheet.MeasureList.map(staves => {
    return staves[staffIndex];
  });
  const notes: NoteInfo[] = [];
  let ticks = 0;
  // console.log(measures);
  for (let i = 0; i < measures.length; i++) {
    const measure = measures[i];
    if (measure) {
      const measureNumber = measure.MeasureNumber;

      for (let j = 0; j < measure.staffEntries.length; j++) {
        const staffEntry = measure.staffEntries[j];
        for (let k = 0; k < staffEntry.graphicalVoiceEntries.length; k++) {
          const voiceEntry = staffEntry.graphicalVoiceEntries[k];
          for (let l = 0; l < voiceEntry.notes.length; l++) {
            const note = voiceEntry.notes[l];
            const realValue = staffEntry.getAbsoluteTimestamp().RealValue;
            // realValue is based on 4/4 so even when the time signature
            // changes the realValue calculates fractions based on 4/4
            ticks = realValue * 4 * ppq;
            if ((note.sourceNote as any).isRestFlag === false) {
              notes.push({
                ticks,
                noteNumber: note.sourceNote.halfTone + 12,
                measureIndex: i,
              });
            }
          }
        }
      }
    }
  }

  const measureStartTicks = osmd.Sheet.SourceMeasures.map((measure: SourceMeasure) => {
    return ppq * measure.AbsoluteTimestamp.RealValue * 4;
  });

  // copy note data for all repeats
  let diffTicks = 0;
  let diffBars = 0;
  const copies: NoteInfo[] = [];
  for (let i = 0; i < repeats.length; i++) {
    const { start, end } = repeats[i];
    // console.log(start, end);
    const minTicks = measureStartTicks[start - 1];
    const maxTicks = measureStartTicks[end];
    diffTicks += maxTicks - minTicks;
    diffBars += end - (start - 1);
    // console.log(diffTicks, diffBars);
    for (let j = 0; j < notes.length; j++) {
      const note = notes[j];
      const measureNumber = note.measureIndex + 1;

      if (measureNumber >= start && measureNumber <= end) {
        const clone = { ...note };
        clone.ticks += diffTicks;
        clone.measureIndex += diffBars;
        copies.push(clone);
        // console.log(measureNumber, clone.ticks);
      }
    }
  }

  // update the ticks and measure number of the bars that come after the repeats
  const result: NoteInfo[] = notes.map(d => {
    const { measureIndex, ticks } = d;
    const measureNumber = measureIndex + 1;
    const clone = { ...d };
    let diffTicks = 0;
    let diffBars = 0;
    for (let i = 0; i < repeats.length; i++) {
      const { start, end } = repeats[i];
      const minTicks = measureStartTicks[start - 1];
      const maxTicks = measureStartTicks[end];
      diffTicks += maxTicks - minTicks;
      diffBars += end - (start - 1);
      // console.log("diffBars", diffBars);
      if (measureNumber > end) {
        clone.ticks = ticks + diffTicks;
        clone.measureIndex = measureIndex + diffBars;
      }
    }
    return clone;
  });

  result.push(...copies);
  result.sort((a, b) => {
    if (a.ticks < b.ticks) {
      return -1;
    }
    if (a.ticks > b.ticks) {
      return 1;
    }
    return 0;
  });

  // console.log(result.slice(start, start + amount));
  return result.slice(start, start + amount);
};

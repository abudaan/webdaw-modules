import {
  OpenSheetMusicDisplay,
  GraphicalMeasure,
  GraphicalStaffEntry,
  GraphicalVoiceEntry,
  GraphicalNote,
} from "opensheetmusicdisplay";

export type OSMDNoteData = {
  x: number;
  y: number;
  ticks: number;
  noteNumber: number;
  measureIndex: number;
  staveIndex: number;
  isRestFlag: boolean;
  noteLength: { numerator: number; denominator: number; wholeValue: number; realValue: number };
};

export const getNoteEntriesPerStave = (
  osmd: OpenSheetMusicDisplay,
  ppq: number = 960
): OSMDNoteData[] => {
  const noteData: OSMDNoteData[] = [];
  osmd.GraphicSheet.MeasureList.forEach((staves: GraphicalMeasure[], measureIndex: number) => {
    staves.forEach((measure: GraphicalMeasure, staveIndex: number) => {
      measure.staffEntries.forEach((staffEntry: GraphicalStaffEntry) => {
        staffEntry.graphicalVoiceEntries.forEach((voiceEntry: GraphicalVoiceEntry) => {
          voiceEntry.notes.forEach((note: GraphicalNote) => {
            const {
              boundingBox: {
                absolutePosition: { x, y },
              },
              sourceNote,
            } = note as any;
            const {
              numerator,
              denominator,
              wholeValue,
              realValue,
            } = note.graphicalNoteLength as any;
            const data: OSMDNoteData = {
              x,
              y,
              ticks: measureIndex * ppq * 4 + realValue * ppq * 4,
              noteNumber: sourceNote.halfTone + 12,
              measureIndex,
              staveIndex,
              isRestFlag: sourceNote.isRestFlag,
              noteLength: { numerator, denominator, wholeValue, realValue },
            };
            noteData.push(data);
            // console.log(note);
          });
        });
      });
    });
  });
  return noteData;
};

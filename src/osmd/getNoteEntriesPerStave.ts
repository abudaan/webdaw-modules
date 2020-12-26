import {
  OpenSheetMusicDisplay,
  GraphicalMeasure,
  GraphicalStaffEntry,
  VerticalGraphicalStaffEntryContainer,
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
};

export const getNoteEntriesPerStave = (osmd: OpenSheetMusicDisplay, ppq: number = 960) => {
  console.log;
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
            const relPosInMeasure = sourceNote.voiceEntry.timestamp.realValue;
            const data: OSMDNoteData = {
              x,
              y,
              ticks: measureIndex * ppq * 4 + relPosInMeasure * ppq * 4,
              noteNumber: sourceNote.halfTone + 12,
              measureIndex,
              staveIndex,
            };
            console.log(data, note);
          });
        });
      });
    });
  });
};

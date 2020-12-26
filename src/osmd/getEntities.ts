import {
  OpenSheetMusicDisplay,
  GraphicalMeasure,
  GraphicalStaffEntry,
  GraphicalVoiceEntry,
  GraphicalNote,
  VerticalGraphicalStaffEntryContainer,
} from "opensheetmusicdisplay";

export type GenericData = {
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
};
export type MeasureData = GenericData;
export type StaveData = {
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  notes: NoteData[];
};
export type MusicSystemData = GenericData;
export type NoteData = {
  x: number;
  y: number;
  center: { x: number; y: number };
  ticks: number;
  noteNumber: number;
  isRestFlag: boolean;
  noteLength: { numerator: number; denominator: number; wholeValue: number; realValue: number };
};

export type OSMDEntityData = {
  containerIndex: number;
  notes: NoteData[];
  measures: MeasureData[];
  staves: StaveData[];
  musicSystem: MusicSystemData;
};

const ppq = 960;

const getMusicSystemData = (
  entryContainer: VerticalGraphicalStaffEntryContainer
): MusicSystemData => {
  // console.log(entryContainer);
  let staffEntry = (entryContainer as any).staffEntries[0];
  let i = 1;
  while (typeof staffEntry === "undefined" && i < (entryContainer as any).staffEntries.length) {
    staffEntry = (entryContainer as any).staffEntries[i];
    i++;
  }
  const {
    boundingBox: {
      absolutePosition: { x, y },
      size: { width, height },
      borderTop,
      borderBottom,
    },
    id,
  } = (staffEntry.parentMeasure as any).parentMusicSystem as any;

  return {
    index: id,
    x,
    y,
    width,
    height,
  };
};

const getMeasureData = (entryContainer: VerticalGraphicalStaffEntryContainer): MeasureData[] => {
  const measureData: MeasureData[] = [];
  (entryContainer as any).staffEntries.forEach((staffEntry: GraphicalStaffEntry) => {
    const {
      boundingBox: {
        absolutePosition: { x, y },
        size: { width, height },
        borderTop,
        borderBottom,
      },
      measureNumber,
    } = staffEntry.parentMeasure as any;

    measureData.push({
      index: measureNumber,
      x: x * 10,
      y: y * 10,
      width: width * 10,
      height: (y + borderBottom - (y - borderTop)) * 10,
    });
  });
  return measureData;
};

const getNoteData = (entryContainer: VerticalGraphicalStaffEntryContainer): NoteData[] => {
  const notes: NoteData[] = [];
  (entryContainer as any).staffEntries.forEach(
    (staffEntry: GraphicalStaffEntry, staffIndex: number) => {
      staffEntry.graphicalVoiceEntries.forEach(voiceEntry => {
        const measureIndex = (voiceEntry.parentStaffEntry.parentMeasure as any).measureNumber;
        voiceEntry.notes.forEach((note: GraphicalNote) => {
          const {
            boundingBox: {
              absolutePosition: { x, y },
              borderLeft,
            },
            sourceNote,
          } = note as any;
          const { numerator, denominator, wholeValue, realValue } = note.graphicalNoteLength as any;
          const relPosInMeasure = (note.sourceNote as any).voiceEntry.timestamp.realValue;

          const data: NoteData = {
            center: { x: x * 10, y: 0 },
            x: (x + borderLeft) * 10,
            y: y * 10,
            ticks: measureIndex * ppq * 4 + relPosInMeasure * ppq * 4,
            noteNumber: sourceNote.halfTone + 12,
            isRestFlag: sourceNote.isRestFlag,
            noteLength: { numerator, denominator, wholeValue, realValue },
          };
          notes.push(data);
        });
      });
    }
  );
  return notes;
};

const getStaveData = (entryContainer: VerticalGraphicalStaffEntryContainer): StaveData[] => {
  const staveData = (entryContainer as any).staffEntries.map(
    (staffEntry: GraphicalStaffEntry, staffIndex: number) => {
      const {
        boundingBox: {
          absolutePosition: { x, y },
          size: { width, height },
          borderTop,
          borderBottom,
        },
      } = staffEntry as any;
      const notes: NoteData[] = [];

      staffEntry.graphicalVoiceEntries.forEach(voiceEntry => {
        const measureIndex = (voiceEntry.parentStaffEntry.parentMeasure as any).measureNumber;
        voiceEntry.notes.forEach((note: GraphicalNote) => {
          const {
            boundingBox: {
              absolutePosition: { x, y },
              borderLeft,
            },
            sourceNote,
          } = note as any;
          const { numerator, denominator, wholeValue, realValue } = note.graphicalNoteLength as any;
          const relPosInMeasure = (note.sourceNote as any).voiceEntry.timestamp.realValue;

          const data: NoteData = {
            center: { x: x * 10, y: 0 },
            x: (x + borderLeft) * 10,
            y: y * 10,
            ticks: measureIndex * ppq * 4 + relPosInMeasure * ppq * 4,
            noteNumber: sourceNote.halfTone + 12,
            isRestFlag: sourceNote.isRestFlag,
            noteLength: { numerator, denominator, wholeValue, realValue },
          };
          notes.push(data);
        });
      });

      return {
        notes,
        index: staffIndex,
        x: x * 10,
        y: y * 10,
        width: width * 10,
        height: height * 10,
      };
    }
  );
  return staveData;
};

const getData = (entryContainer: VerticalGraphicalStaffEntryContainer, containerIndex: number) => {
  return {
    containerIndex,
    notes: getNoteData(entryContainer),
    measures: getMeasureData(entryContainer),
    staves: getStaveData(entryContainer),
    musicSystem: getMusicSystemData(entryContainer),
  };
};

export const getEntries = (osmd: OpenSheetMusicDisplay, ppq: number = 960): OSMDEntityData[] => {
  const entityData: OSMDEntityData[] = [];
  osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(
    (entryContainer: VerticalGraphicalStaffEntryContainer, containerIndex: number) => {
      entityData.push(getData(entryContainer, containerIndex));
    }
  );
  return entityData;
};

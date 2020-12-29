import {
  OpenSheetMusicDisplay,
  GraphicalMeasure,
  GraphicalStaffEntry,
  GraphicalVoiceEntry,
  GraphicalNote,
  VerticalGraphicalStaffEntryContainer,
} from "opensheetmusicdisplay";

export type MusicSystemData = {
  index: number;
  x: number;
  y: number;
};

export type NoteData = {
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  center: { x: number; y: number };
  ticks: number;
  noteNumber: number;
  isRestFlag: boolean;
  noteLength: { numerator: number; denominator: number; wholeValue: number; realValue: number };
  measureIndex: number;
  staffIndex: number;
  containerIndex: number;
};

export type StaveData = {
  index: number;
  timeStamp: {
    numerator: number;
    denominator: number;
    wholeValue: number;
    realValue: number;
  };
  ticks: number;
  x: number;
  y: number;
  width: number;
  height: number;
  notes: NoteData[];
};

export type OSMDEntityData = {
  measureIndex: number;
  containerIndex: number;
  startX: number; // smallest x-position of all notes in this container
  notes: NoteData[]; //
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

const getStaveData = (
  entryContainer: VerticalGraphicalStaffEntryContainer,
  containerIndex: number
): StaveData[] => {
  const staveData = (entryContainer as any).staffEntries.map(
    (staffEntry: GraphicalStaffEntry, staffIndex: number) => {
      const {
        boundingBox: {
          absolutePosition: { x, y },
          size: { width, height },
          borderTop,
          borderBottom,
          borderLeft,
        },
      } = staffEntry as any;
      const notes: NoteData[] = [];
      let measureIndex = -1;

      staffEntry.graphicalVoiceEntries.forEach(voiceEntry => {
        measureIndex = (voiceEntry.parentStaffEntry.parentMeasure as any).measureNumber;
        voiceEntry.notes.forEach((note: GraphicalNote, noteIndex: number) => {
          const {
            boundingBox: {
              absolutePosition: { x, y },
              size: { width, height },
              borderLeft,
            },
            sourceNote,
          } = note as any;
          const { numerator, denominator, wholeValue, realValue } = note.graphicalNoteLength as any;
          const relPosInMeasure = (note.sourceNote as any).voiceEntry.timestamp.realValue;

          const data: NoteData = {
            index: noteIndex,
            center: { x: x * 10, y: 0 },
            x: (x + borderLeft) * 10,
            y: y * 10,
            width: width * 10,
            height: height * 10,
            ticks: measureIndex * ppq * 4 + relPosInMeasure * ppq * 4,
            noteNumber: sourceNote.halfTone + 12,
            isRestFlag: sourceNote.isRestFlag,
            noteLength: { numerator, denominator, wholeValue, realValue },
            staffIndex,
            measureIndex,
            containerIndex,
          };
          notes.push(data);
        });
      });
      return {
        notes,
        index: staffIndex,
        measureIndex,
        containerIndex,
        x: (x + borderLeft) * 10,
        y: (y + borderTop) * 10,
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

export const firstTest = (osmd: OpenSheetMusicDisplay, ppq: number = 960): StaveData[][] => {
  const entries: StaveData[][] = [];
  osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(
    (entryContainer: VerticalGraphicalStaffEntryContainer, containerIndex: number) => {
      const s = getStaveData(entryContainer, containerIndex);
      entries.push(s);
    }
  );
  return entries;
};

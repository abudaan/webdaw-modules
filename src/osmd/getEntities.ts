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
export type StaveData = GenericData;
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
  measure: MeasureData;
  stave: StaveData;
  musicSystem: MusicSystemData;
};

const ppq = 960;

const getMusicSystemData = (staffEntry: GraphicalStaffEntry): MusicSystemData => {
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

const getMeasureData = (staffEntry: GraphicalStaffEntry): MeasureData => {
  const {
    boundingBox: {
      absolutePosition: { x, y },
      size: { width, height },
      borderTop,
      borderBottom,
    },
    measureNumber,
  } = staffEntry.parentMeasure as any;

  return {
    index: measureNumber,
    x: x * 10,
    y: y * 10,
    width: width * 10,
    height: (y + borderBottom - (y - borderTop)) * 10,
  };
};

const getNoteData = (voiceEntry: GraphicalVoiceEntry): NoteData[] => {
  const notes: NoteData[] = [];
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

  return notes;
};

const getData = (entryContainer: VerticalGraphicalStaffEntryContainer, containerIndex: number) => {
  let noteData: NoteData[];
  let measureData: MeasureData;
  let staveData: StaveData;
  let musicSystemData: MusicSystemData;

  (entryContainer as any).staffEntries.forEach(
    (staffEntry: GraphicalStaffEntry, staffIndex: number) => {
      measureData = getMeasureData(staffEntry);
      musicSystemData = getMusicSystemData(staffEntry);
      staffEntry.graphicalVoiceEntries.forEach((voiceEntry: GraphicalVoiceEntry) => {
        noteData = getNoteData(voiceEntry);
      });
      const {
        boundingBox: {
          absolutePosition: { x, y },
          size: { width, height },
          borderTop,
          borderBottom,
        },
      } = staffEntry as any;
      staveData = {
        index: staffIndex,
        x: x * 10,
        y: y * 10,
        width: width * 10,
        height: height * 10,
      };
    }
  );

  return {
    containerIndex,
    notes: noteData,
    measure: measureData,
    stave: staveData,
    musicSystem: musicSystemData,
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

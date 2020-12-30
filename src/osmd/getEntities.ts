import {
  OpenSheetMusicDisplay,
  GraphicalMeasure,
  GraphicalStaffEntry,
  GraphicalVoiceEntry,
  GraphicalNote,
  VerticalGraphicalStaffEntryContainer,
} from "opensheetmusicdisplay";
import uniqid from "uniqid";

export type MusicSystemData = {
  index: number;
  x: number;
  y: number;
  height: number;
  width: number;
};

export type MeasureData = {
  index: number;
  x: number;
  y: number;
  height: number;
  width: number;
};

export type NoteData = {
  id: string;
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  center: { x: number; y: number };
  ticks: number;
  noteNumber: number;
  isRestFlag: boolean;
  isGraceNote: boolean;
  noteLength: { numerator: number; denominator: number; wholeValue: number; realValue: number };
  measureIndex: number;
  staffIndex: number;
  containerIndex: number;
  multipleRestMeasures: number;
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
  containerIndex: number;
  measureIndex: number;
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

const getNoteData = ({
  note,
  noteIndex,
  staffIndex,
  containerIndex,
  measureIndex,
}: {
  note: GraphicalNote;
  noteIndex: number;
  staffIndex: number;
  containerIndex: number;
  measureIndex: number;
}): NoteData => {
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
  const {
    sourceMeasure: { multipleRestMeasures },
  } = sourceNote;

  const data: NoteData = {
    id: `note-${uniqid()}`,
    index: noteIndex,
    center: { x: x * 10, y: 0 },
    x: (x + borderLeft) * 10,
    y: y * 10,
    width: width * 10,
    height: height * 10,
    ticks: measureIndex * ppq * 4 + relPosInMeasure * ppq * 4,
    noteNumber: sourceNote.halfTone + 12,
    isRestFlag: sourceNote.isRestFlag === true,
    isGraceNote: sourceNote.IsGraceNote === true,
    noteLength: { numerator, denominator, wholeValue, realValue },
    staffIndex,
    measureIndex,
    multipleRestMeasures: multipleRestMeasures || 0,
    containerIndex,
  };

  return data;
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
          borderMarginTop,
          borderMarginLeft,
        },
      } = staffEntry as any;
      const notes: NoteData[] = [];
      let measureIndex = -1;

      staffEntry.graphicalVoiceEntries.forEach(voiceEntry => {
        measureIndex = (voiceEntry.parentStaffEntry.parentMeasure as any).measureNumber;
        voiceEntry.notes.forEach((note: GraphicalNote, noteIndex: number) => {
          const n = getNoteData({ note, noteIndex, staffIndex, containerIndex, measureIndex });
          notes.push(n);
        });
      });
      return {
        notes,
        index: staffIndex,
        measureIndex,
        containerIndex,
        // x: (x + borderLeft - borderMarginLeft) * 10,
        // y: (y + borderTop - borderMarginTop) * 10,
        x: (x + borderLeft) * 10,
        y: (y + borderTop) * 10,
        width: width * 10,
        height: height * 10,
      };
    }
  );
  return staveData;
};

export const firstTest = (osmd: OpenSheetMusicDisplay, ppq: number = 960): StaveData[][] => {
  const staveData: StaveData[][] = [];
  osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(
    (entryContainer: VerticalGraphicalStaffEntryContainer, containerIndex: number) => {
      const s = getStaveData(entryContainer, containerIndex);
      staveData.push(s);
    }
  );

  return staveData;
};

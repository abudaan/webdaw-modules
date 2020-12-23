import { OpenSheetMusicDisplay, Note, BoundingBox } from "opensheetmusicdisplay";
import { GraphicalMeasureShim, GraphicalNoteShim } from "./type_shims";

export type EntityData = {
  measureIndex: number;
  staveIndex: number;
  vfNote: Vex.Flow.Note;
  sourceNote: Note;
  boundingBox: BoundingBox;
  ticks: number;
  noteNumber: number;
  bar: number;
};

const ppq = 960;
export const mapEntityToNote = (osmd: OpenSheetMusicDisplay): EntityData[] => {
  const entities: EntityData[] = [];
  const boundingBoxMeasures: BoundingBox[] = [];
  osmd.GraphicSheet.MeasureList.forEach((measure, measureIndex) => {
    measure.forEach((stave, staveIndex) => {
      const {
        boundingBox, //: { childElements: boundingBoxes },
      } = stave as any;
      boundingBoxMeasures.push(boundingBox);
      const { staffEntries } = stave;
      staffEntries.forEach(staffEntry => {
        const { graphicalVoiceEntries } = staffEntry;
        graphicalVoiceEntries.forEach(graphicalVoiceEntry => {
          const { notes } = graphicalVoiceEntry;
          notes.forEach(graphicalNote => {
            const {
              vfnote: vfNote,
              sourceNote,
              boundingBox,
            } = (graphicalNote as unknown) as GraphicalNoteShim;
            const relPosInMeasure = sourceNote["voiceEntry"].timestamp.realValue;

            entities.push({
              measureIndex,
              staveIndex,
              vfNote,
              sourceNote,
              boundingBox,
              ticks: measureIndex * ppq * 4 + relPosInMeasure * ppq * 4,
              noteNumber: sourceNote.halfTone + 12, // heartbeat uses a different MIDI note number mapping
              bar: measureIndex + 1,
            });
            // console.log("VFNOTE", vfNote);
            // console.log("SOURCENOTE", sourceNote);
            // console.log("----");
          });
        });
      });
    });
  });
  return entities;
};

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
  center: { x: number; y: number };
  ticks: number;
  noteNumber: number;
  measure: {
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
  };
  stave: {
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
  };
  parentMusicSystem: {
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
  };
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
      const {
        boundingBox: {
          absolutePosition: { x: mx, y: my },
          size: { width: mwidth, height: mheight },
          borderLeft,
          borderBottom,
        },
        parentMusicSystem: {
          id: pid,
          boundingBox: { x: px, y: py, width: pwidth, height: pheight },
        },
      } = measure as any;
      const measureData: { index: number; x: number; y: number; width: number; height: number } = {
        index: measureIndex,
        x: mx,
        y: my,
        width: mwidth,
        height: mheight,
      };
      measure.staffEntries.forEach((staffEntry: GraphicalStaffEntry) => {
        let data: OSMDNoteData;
        const tmpDatas: OSMDNoteData[] = [];
        staffEntry.graphicalVoiceEntries.forEach((voiceEntry: GraphicalVoiceEntry) => {
          voiceEntry.notes.forEach((note: GraphicalNote) => {
            const {
              boundingBox: {
                absolutePosition: { x, y },
              },
              sourceNote,
            } = note as any;
            // sx.push(x * 10);
            // sy.push(y * 10);
            // console.log((note as any).boundingBox);
            const {
              numerator,
              denominator,
              wholeValue,
              realValue,
            } = note.graphicalNoteLength as any;
            data = {
              center: { x: x * 10, y: 0 },
              x: (x + borderLeft) * 10,
              y: y * 10,
              ticks: measureIndex * ppq * 4 + realValue * ppq * 4,
              noteNumber: sourceNote.halfTone + 12,
              isRestFlag: sourceNote.isRestFlag,
              noteLength: { numerator, denominator, wholeValue, realValue },
              measure: measureData,
              stave: {
                index: staveIndex,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
              },
              parentMusicSystem: {
                index: pid,
                x: px,
                y: py,
                width: pwidth,
                height: pheight,
              },
            };
            tmpDatas.push(data);
            // console.log(note);
          });
        });
        // console.log("SX", sx);
        // console.log("SY", sy);
        // const minX = Math.min(...sx);
        // const maxX = Math.max(...sx);
        // const minY = Math.min(...sy);
        // const maxY = Math.max(...sy);
        tmpDatas.forEach(data => {
          // data.stave.x = minX;
          // data.stave.y = minY;
          // data.stave.width = maxX - minX;
          // data.stave.height = maxY - minY;
          noteData.push(data);
        });
      });
    });
  });
  return noteData;
};

/*
  This method parses the SVG document as rendered by OSMD and stores the graphical representations of the notes
  in an array; notes are stored per measure (bar) in a sub-array so we end up with an array the size of the number
  of bars, containing an array that contain the notes in that bar.

  I use the following paths: 
  - openSheetMusicDisplay.GraphicSheet.MeasureList[0][0].staffEntries[0].graphicalVoiceEntries[0].notes[0];
  - openSheetMusicDisplay.GraphicSheet.MeasureList[0][0].parentMusicSystem

  More info: https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/549
*/

import { from } from "rxjs";
import { map, reduce, tap } from "rxjs/operators";
import {
  OpenSheetMusicDisplay,
  GraphicalStaffEntry,
  GraphicalNote,
  VexFlowGraphicalNote,
  MusicSystem,
} from "opensheetmusicdisplay";

type TypeStave = {
  staffEntries: GraphicalStaffEntry[];
};

type GraphicalNoteData = {
  // vfnote: Vex.Flow.Note;
  element: SVGElement;
  ticks: number;
  noteNumber: number;
  bar: number;
  parentMusicSystem: MusicSystem;
};

interface VexFlowStaveNote extends Vex.Flow.StaveNote {
  attrs: {
    el: SVGElement;
  };
}

export const getGraphicalNotesPerMeasurePerTrack = (
  osmd: OpenSheetMusicDisplay,
  ppq: number
): GraphicalNoteData[][] => {
  const tracks: any[] = [];
  // console.log(osmd.GraphicSheet.MeasureList);
  osmd.GraphicSheet.MeasureList.forEach((measure, measureNumber) => {
    // console.log(measure);
    // const [staves] = measure;
    measure.forEach((staff, staffNo) => {
      // console.log(staff);
      if (!staff) {
        return;
      }
      if (typeof tracks[staffNo] === "undefined") {
        tracks[staffNo] = [];
      }
      const parentMusicSystem = staff["parentMusicSystem"]; // private prop so we need to trick typescript
      // console.log(parentMusicSystem);
      const staffEntries = staff.staffEntries;
      staffEntries.forEach(entry => {
        // console.log(entry);
        entry.graphicalVoiceEntries.forEach(ve => {
          ve.notes.forEach(note => {
            // console.log(note);
            if (typeof (note as VexFlowGraphicalNote).vfnote !== "undefined") {
              const relPosInMeasure = note.sourceNote["voiceEntry"].timestamp.realValue;
              const vfnote = (note as VexFlowGraphicalNote).vfnote[0];
              // console.log(vfnote, relPosInMeasure);
              tracks[staffNo].push({
                element: (vfnote as VexFlowStaveNote).attrs.el,
                ticks: measureNumber * ppq * 4 + relPosInMeasure * ppq * 4,
                noteNumber: note.sourceNote.halfTone + 12, // heartbeat uses a different MIDI note number mapping
                bar: measureNumber + 1,
                parentMusicSystem, // necessary to get the y-position if the note in the score
              });
            }
          });
        });
      });
    });
  });
  // console.log(tracks);
  return tracks;
};

const getGraphicalNotesPerMeasure = (
  osmd: OpenSheetMusicDisplay,
  ppq: number
): Promise<GraphicalNoteData[][]> =>
  // from(osmd["graphic"].measureList)
  from(osmd.GraphicSheet.MeasureList)
    .pipe(
      // tap(m => { console.log(m); }),
      map((staves: any, i) => {
        return staves.map((s: TypeStave) => {
          const parentMusicSystem = staves[0].parentMusicSystem;
          return s.staffEntries.map(se => {
            return se.graphicalVoiceEntries.map(ve => {
              // return ve.notes;
              return ve.notes.map((n: GraphicalNote) => {
                const relPosInMeasure = n.sourceNote["voiceEntry"].timestamp.realValue;
                // const relPosInMeasure = n.sourceNote.voiceEntry.timestamp.realValue;
                const vfnote = (n as VexFlowGraphicalNote).vfnote[0];
                return {
                  element: (vfnote as VexFlowStaveNote).attrs.el,
                  ticks: i * ppq * 4 + relPosInMeasure * ppq * 4,
                  noteNumber: n.sourceNote.halfTone + 12, // heartbeat uses a different MIDI note number mapping
                  bar: i + 1,
                  parentMusicSystem, // necessary to get the y-position if the note in the score
                };
              });
            });
          });
        });
      }),
      // tap(console.log),
      reduce((acc: any[], val) => {
        const flat: GraphicalNoteData[] = val.flat(3);
        flat.sort((a, b) => {
          if (a.ticks < b.ticks) {
            return -1;
          } else if (a.ticks > b.ticks) {
            return 1;
          }
          return 0;
        });
        acc.push(flat);
        return acc;
      }, [])
    )
    .toPromise();

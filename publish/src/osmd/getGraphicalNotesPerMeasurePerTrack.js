"use strict";
/*
  This method parses the SVG document as rendered by OSMD and stores the graphical representations of the notes
  in an array; notes are stored per measure (bar) in a sub-array so we end up with an array the size of the number
  of bars, containing an array that contain the notes in that bar.

  I use the following paths:
  - openSheetMusicDisplay.GraphicSheet.MeasureList[0][0].staffEntries[0].graphicalVoiceEntries[0].notes[0];
  - openSheetMusicDisplay.GraphicSheet.MeasureList[0][0].parentMusicSystem

  More info: https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/549
*/
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
exports.getGraphicalNotesPerMeasurePerTrack = function (osmd, ppq) {
    var tracks = [];
    osmd.GraphicSheet.MeasureList.forEach(function (measure, measureNumber) {
        // console.log(measure);
        // const [staves] = measure;
        measure.forEach(function (staff, staffNo) {
            // console.log(staff);
            if (typeof tracks[staffNo] === "undefined") {
                tracks[staffNo] = [];
            }
            if (typeof tracks[staffNo][measureNumber] === "undefined") {
                tracks[staffNo][measureNumber] = [];
            }
            var parentMusicSystem = staff["parentMusicSystem"]; // private prop so we need to trick typescript
            var staffEntries = staff.staffEntries;
            staffEntries.forEach(function (entry) {
                // console.log(entry);
                entry.graphicalVoiceEntries.forEach(function (ve) {
                    ve.notes.forEach(function (note) {
                        // console.log(note);
                        if (note.sourceNote.halfTone > 0) {
                            var relPosInMeasure = note.sourceNote["voiceEntry"].timestamp.realValue;
                            var vfnote = note.vfnote[0];
                            // console.log(vfnote, relPosInMeasure);
                            tracks[staffNo][measureNumber].push({
                                element: vfnote.attrs.el,
                                ticks: measureNumber * ppq * 4 + relPosInMeasure * ppq * 4,
                                noteNumber: note.sourceNote.halfTone + 12,
                                bar: measureNumber + 1,
                                parentMusicSystem: parentMusicSystem,
                            });
                        }
                    });
                });
            });
        });
    });
    /*
    tracks.forEach(track => {
      track.forEach((measure: GraphicalNoteData[][]) => {
        // console.log(measure);
        // measure.sort((a, b) => {
        //   if (a.ticks < b.ticks) {
        //     return -1;
        //   } else if (a.ticks > b.ticks) {
        //     return 1;
        //   }
        //   return 0;
        // });
      });
    });
  */
    // console.log(tracks);
    return tracks;
};
var getGraphicalNotesPerMeasure = function (osmd, ppq) {
    // from(osmd["graphic"].measureList)
    return rxjs_1.from(osmd.GraphicSheet.MeasureList)
        .pipe(
    // tap(m => { console.log(m); }),
    operators_1.map(function (staves, i) {
        return staves.map(function (s) {
            var parentMusicSystem = staves[0].parentMusicSystem;
            return s.staffEntries.map(function (se) {
                return se.graphicalVoiceEntries.map(function (ve) {
                    // return ve.notes;
                    return ve.notes.map(function (n) {
                        var relPosInMeasure = n.sourceNote["voiceEntry"].timestamp.realValue;
                        // const relPosInMeasure = n.sourceNote.voiceEntry.timestamp.realValue;
                        var vfnote = n.vfnote[0];
                        return {
                            element: vfnote.attrs.el,
                            ticks: i * ppq * 4 + relPosInMeasure * ppq * 4,
                            noteNumber: n.sourceNote.halfTone + 12,
                            bar: i + 1,
                            parentMusicSystem: parentMusicSystem,
                        };
                    });
                });
            });
        });
    }), 
    // tap(console.log),
    operators_1.reduce(function (acc, val) {
        var flat = val.flat(3);
        flat.sort(function (a, b) {
            if (a.ticks < b.ticks) {
                return -1;
            }
            else if (a.ticks > b.ticks) {
                return 1;
            }
            return 0;
        });
        acc.push(flat);
        return acc;
    }, []))
        .toPromise();
};
//# sourceMappingURL=getGraphicalNotesPerMeasurePerTrack.js.map
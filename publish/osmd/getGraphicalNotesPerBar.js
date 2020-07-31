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
exports.getGraphicalNotesPerBar = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
exports.getGraphicalNotesPerBar = function (osmd, ppq) {
    return rxjs_1.from(osmd["graphic"].measureList)
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
//# sourceMappingURL=getGraphicalNotesPerBar.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMIDINoteIdToGraphicalNote = function (graphicalNotesPerBar, repeats, notes) {
    // console.log(graphicalNotesPerBar);
    var barIndex = -1;
    var barOffset = 1;
    var ticksOffset = 0; // not used, keep for reference
    var repeatIndex = 0;
    var hasRepeated = {};
    var numBars = notes[notes.length - 1].noteOff.bar;
    var mapping1 = {};
    var mapping2 = {};
    var _loop_1 = function () {
        barIndex++;
        // console.log(barIndex, repeatIndex, hasRepeated[repeatIndex], repeats[repeatIndex][1]);
        if (barIndex === repeats[repeatIndex][1]) {
            if (hasRepeated[repeatIndex] !== true) {
                barIndex = repeats[repeatIndex][0] - 1;
                // console.log('REPEAT START', barIndex)
                hasRepeated[repeatIndex] = true;
                barOffset += repeats[repeatIndex][1] - repeats[repeatIndex][0] + 1;
                // ticksOffset += (repeats[repeatIndex][1] - repeats[repeatIndex][0]) * song.numerator * ppq;
            }
            else {
                // console.log('REPEAT END', barIndex, repeatIndex);
                repeatIndex++;
                if (repeatIndex === repeats.length || barIndex === numBars) {
                    return "break";
                }
            }
        }
        else {
            // console.log("CONTINUE", barIndex, numBars, repeats);
            if (barIndex === numBars) {
                return "break";
            }
        }
        try {
            // get all sequencer MIDI events in this bar
            // const filtered = notes.filter(e => e.noteOn.bar === barIndex + 1 + barOffset);
            var filtered_1 = notes.filter(function (e) { return e.noteOn.bar === barIndex + barOffset; });
            // console.log(barIndex + 1 + barOffset, filtered.length);
            // console.log(barIndex, barOffset, filtered);
            graphicalNotesPerBar[barIndex]
                .sort(function (a, b) {
                if (a.ticks < b.ticks) {
                    return -1;
                }
                else if (a.ticks > b.ticks) {
                    return 1;
                }
                return 0;
            })
                .forEach(function (bd) {
                var element = bd.element, noteNumber = bd.noteNumber, bar = bd.bar, parentMusicSystem = bd.parentMusicSystem;
                for (var j = 0; j < filtered_1.length; j++) {
                    var note = filtered_1[j];
                    if (!mapping1[note.id] &&
                        note.noteOn.bar == bar + barOffset - 1 &&
                        note.noteOn.noteNumber == noteNumber) {
                        mapping1[note.id] = { element: element, musicSystem: parentMusicSystem };
                        mapping2[element.id] = note;
                        // filtered.splice(j, 1);
                        break;
                    }
                }
            });
        }
        catch (e) {
            return "break";
        }
    };
    // console.log(numBars, graphicalNotesPerBar.length);
    // if (numBars !== graphicalNotesPerBar.length) {
    //   return mapping;
    // }
    while (true) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    return { midiToGraphical: mapping1, graphicalToMidi: mapping2 };
};
//# sourceMappingURL=mapMIDINoteIdToGraphicalNote.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMIDINoteIdToGraphicalNotePerTrack = void 0;
exports.mapMIDINoteIdToGraphicalNotePerTrack = function (graphicalNotesPerBarPerTrack, repeats, notes) {
    var notesPerTrack = {};
    var trackIds = [];
    notes.forEach(function (note) {
        var trackId = note.noteOn.trackId;
        if (trackId !== undefined) {
            if (typeof notesPerTrack[trackId] === "undefined") {
                notesPerTrack[trackId] = [];
                trackIds.push(trackId);
            }
            notesPerTrack[trackId].push(note);
        }
    });
    var tmp = [];
    trackIds.forEach(function (id) {
        tmp.push(notesPerTrack[id]);
    });
    // console.log(tmp);
    // console.log(graphicalNotesPerBarPerTrack);
    var numMIDITracks = tmp.length;
    var numGraphicalTracks = graphicalNotesPerBarPerTrack.length;
    var mappings = [];
    // console.log(numMIDITracks, numGraphicalTracks);
    for (var i = 0; i < numGraphicalTracks; i++) {
        for (var j = 0; j < numMIDITracks; j++) {
            mappings.push(getMappingPerTrack(graphicalNotesPerBarPerTrack[i], tmp[j], repeats));
        }
    }
    mappings.sort(function (a, b) { return b.score - a.score; });
    // console.log(mappings);
    return mappings;
};
var getMappingPerTrack = function (graphicalNotes, midiNotes, repeats) {
    var barIndex = -1;
    var barOffset = 1;
    var repeatIndex = 0;
    var numMatch = 0;
    var hasRepeated = {};
    var numBars = graphicalNotes.length;
    // const numNotes = graphicalNotes.reduce((acc, val) => {
    //   acc += val.length;
    //   return acc;
    // }, 0);
    var numNotes = midiNotes.length;
    // console.log(numNotes);
    var midiToGraphical = {};
    var graphicalToMidi = {};
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
            var filteredMidi_1 = midiNotes.filter(function (e) { return e.noteOn.bar === barIndex + barOffset; });
            graphicalNotes[barIndex].forEach(function (bd) {
                var element = bd.element, noteNumber = bd.noteNumber, bar = bd.bar, parentMusicSystem = bd.parentMusicSystem;
                for (var j = 0; j < filteredMidi_1.length; j++) {
                    var note = filteredMidi_1[j];
                    if (!midiToGraphical[note.id] &&
                        note.noteOn.bar == bar + barOffset - 1 &&
                        note.noteOn.noteNumber == noteNumber) {
                        numMatch += 1;
                        midiToGraphical[note.id] = { element: element, musicSystem: parentMusicSystem };
                        graphicalToMidi[element.id] = note;
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
    // console.log(graphicalNotes);
    while (true) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    return {
        midiToGraphical: midiToGraphical,
        graphicalToMidi: graphicalToMidi,
        score: numMatch / numNotes,
    };
};
//# sourceMappingURL=mapMIDINoteIdToGraphicalNotePerTrack.js.map
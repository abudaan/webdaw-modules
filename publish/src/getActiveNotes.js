"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveNotes = void 0;
exports.getActiveNotes = function (_a) {
    var song = _a.song, index = _a.index, millis = _a.millis, activeNotes = _a.activeNotes;
    var notes = song.notes;
    // const current = [];
    // let i = index;
    // console.log("highlighter", index);
    // while (i < notes.length) {
    //   const note = notes[i];
    //   // console.log(index, millis, note.noteOn.millis, note.noteOff.millis);
    //   if (millis >= note.noteOn.millis && millis <= note.noteOff.millis) {
    //     i++;
    //     current.push(note);
    //   }
    //   if (millis < note.noteOn.millis || millis > note.noteOff.millis) {
    //     break;
    //   }
    // }
    var current = notes.filter(function (n) {
        if (n.noteOn.millis && n.noteOff.millis) {
            return millis >= n.noteOn.millis && millis <= n.noteOff.millis;
        }
        return false;
    });
    // console.log(millis, current);
    // console.log(activeNotes);
    var passiveNotes = activeNotes.filter(function (note) {
        var i = current.findIndex(function (n) {
            // console.log("C", n.id, "A", note.id);
            return n.id === note.id;
        });
        // console.log(i);
        if (i === -1) {
            return true;
        }
        return false;
    });
    // console.log("P", passiveNotes);
    // console.log("A", current);
    return {
        // index: i,
        index: index,
        activeNotes: current,
        passiveNotes: passiveNotes,
    };
};
//# sourceMappingURL=getActiveNotes.js.map
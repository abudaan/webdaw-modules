"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotePair = void 0;
var midi_utils_1 = require("./midi_utils");
exports.createNotePair = function (events) {
    var notes = {};
    var tmpNotes = {};
    events.forEach(function (e) {
        var event = e;
        // console.log(e.ticks, event.noteNumber, event.descr, event.channel);
        if (e.descr === midi_utils_1.NOTE_ON) {
            var event_1 = e;
            tmpNotes["" + e.noteNumber] = event_1;
        }
        else if (e.descr === midi_utils_1.NOTE_OFF) {
            var event_2 = e;
            if (tmpNotes["" + e.noteNumber]) {
                notes["" + e.noteNumber] = [tmpNotes["" + e.noteNumber], event_2];
            }
            else {
                console.warn("orphaned MIDI off event!");
            }
        }
    });
    return Object.values(notes);
};
//# sourceMappingURL=create_note_pair.js.map
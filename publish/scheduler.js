"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedule = exports.getCurrentEventIndex = void 0;
var midi_utils_1 = require("./midi_utils");
exports.getCurrentEventIndex = function (song, millis) {
    var events = song.events;
    var i = 0;
    for (; i < events.length; i++) {
        var event_1 = events[i];
        if (!event_1.millis || event_1.millis >= millis) {
            break;
        }
    }
    return i;
};
exports.schedule = function (_a) {
    var song = _a.song, index = _a.index, millis = _a.millis, outputs = _a.outputs;
    var ts = performance.now();
    var events = song.events;
    var scheduled = [];
    var _loop_1 = function () {
        var event_2 = events[index];
        if (!event_2.millis || !event_2.trackId) {
            // break;
            index++;
        }
        else if (event_2.millis < millis + song.bufferTime) {
            scheduled.push(event_2);
            // console.log(event.ticks, event.descr, (event as NoteOnEvent).noteNumber);
            var track_1 = song.tracksById[event_2.trackId];
            track_1.outputs.forEach(function (id) {
                var _a;
                if (event_2.descr === midi_utils_1.NOTE_ON || event_2.descr === midi_utils_1.NOTE_OFF) {
                    var e = event_2;
                    if (event_2.millis) {
                        // console.log(event.type, event.channel, event.noteNumber);
                        var time = ts + song.latency + track_1.latency + (event_2.millis - millis);
                        // console.log(event["noteNumber"], event.descr, event.millis, millis, time, ts, time - ts);
                        // console.log(e.noteNumber, lastNoteNumber, lastNoteType);
                        // if (e.noteNumber === lastNoteNumber && lastNoteType === 0x90) {
                        //   if (e.descr === NOTE_ON) {
                        //     console.log("repeating notes");
                        //     time += 1;
                        //   }
                        // }
                        // lastNoteNumber = e.noteNumber;
                        // lastNoteType = e.type;
                        // console.log(event.type + event.channel, event.noteNumber, event.velocity);
                        // quick fix for repeating notes
                        if (e.descr === midi_utils_1.NOTE_ON) {
                            time += 1;
                        }
                        (_a = outputs === null || outputs === void 0 ? void 0 : outputs.get(id)) === null || _a === void 0 ? void 0 : _a.send([event_2.type + event_2.channel, event_2.noteNumber, event_2.velocity], time);
                    }
                }
            });
            index++;
        }
        else {
            return "break";
        }
    };
    // let lastNoteNumber: number = -1;
    // let lastNoteType: number = -1;
    while (index < events.length) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    // console.log('[SCHEDULED]', scheduled.map(e => [e.ticks, e.millis]));
    return { millis: millis, index: index, scheduled: scheduled };
};
//# sourceMappingURL=scheduler.js.map
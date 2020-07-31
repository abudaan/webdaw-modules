"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMillis = void 0;
exports.calculateMillis = function (events, data) {
    var ppq = data.ppq, _a = data.bpm, bpm = _a === void 0 ? -1 : _a, _b = data.playbackSpeed, playbackSpeed = _b === void 0 ? 1 : _b;
    var millisPerTick = bpm === -1 ? 0 : (((1 / playbackSpeed) * 60) / bpm / ppq) * 1000;
    var ticks = 0;
    var millis = 0;
    // console.log("bpm", bpm, millis);
    return events.map(function (event) {
        if (event.bpm) {
            (bpm = event.bpm);
            // console.log("bpm", bpm, millis);
            millisPerTick = (((1 / playbackSpeed) * 60) / bpm / ppq) * 1000;
        }
        var diffTicks = event.ticks - ticks;
        millis += diffTicks * millisPerTick;
        event.millis = millis;
        ticks = event.ticks;
        return event;
    });
};
//# sourceMappingURL=calculateMillis.js.map
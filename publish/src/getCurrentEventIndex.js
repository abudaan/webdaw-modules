"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentEventIndex = void 0;
exports.getCurrentEventIndex = function (song, millis, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var events = song.events;
    var i = startIndex;
    for (; i < events.length; i++) {
        var event_1 = events[i];
        // console.log(event.millis, millis);
        if (typeof event_1.millis === "undefined" || event_1.millis >= millis) {
            break;
        }
    }
    return i;
};
//# sourceMappingURL=getCurrentEventIndex.js.map
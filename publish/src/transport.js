"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopMIDI = exports.playMIDI = exports.startMIDI = void 0;
var scheduler_1 = require("./scheduler");
var getCurrentEventIndex_1 = require("./getCurrentEventIndex");
var unschedule_1 = require("./unschedule");
var initAudioAndMIDI_1 = require("./initAudioAndMIDI");
exports.startMIDI = function (song, position) {
    var timestamp = performance.now();
    var positionMillis = position < 0 ? 0 : position;
    if (song.durationMillis && position > song.durationMillis) {
        positionMillis = song.durationMillis;
    }
    var index = getCurrentEventIndex_1.getCurrentEventIndex(song, position);
    return __assign(__assign({}, song), { positionMillis: positionMillis, scheduler: __assign(__assign({}, song.scheduler), { timestamp: timestamp,
            index: index }) });
};
exports.playMIDI = function (song) {
    var _a = scheduler_1.schedule({
        song: song,
        millis: song.positionMillis,
        index: song.scheduler.index,
        outputs: initAudioAndMIDI_1.midiAccess === null || initAudioAndMIDI_1.midiAccess === void 0 ? void 0 : initAudioAndMIDI_1.midiAccess.outputs,
    }), index = _a.index, scheduled = _a.scheduled;
    // console.log("scheduled", song.scheduler.scheduled.length);
    var ts = performance.now();
    var millis = song.positionMillis + ts - song.scheduler.timestamp;
    return __assign(__assign({}, song), { positionMillis: millis, scheduler: {
            index: index,
            scheduled: scheduled,
            timestamp: ts,
        } });
};
exports.stopMIDI = function (song) {
    unschedule_1.unschedule(song, initAudioAndMIDI_1.midiAccess === null || initAudioAndMIDI_1.midiAccess === void 0 ? void 0 : initAudioAndMIDI_1.midiAccess.outputs);
    return __assign(__assign({}, song), { positionMillis: 0, scheduler: {
            index: 0,
            scheduled: [],
            timestamp: 0,
        } });
};
//# sourceMappingURL=transport.js.map
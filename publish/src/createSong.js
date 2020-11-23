"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSong = void 0;
exports.createSong = function (name) { return ({
    name: name,
    ppq: 960,
    latency: 17,
    bufferTime: 100,
    tracks: [],
    tracksById: {},
    events: [],
    notes: [],
    initialTempo: 120,
    initialNumerator: 4,
    initialDenominator: 4,
    scheduler: {
        timestamp: 0,
        index: 0,
        scheduled: [],
    },
    positionMillis: 0,
}); };
//# sourceMappingURL=createSong.js.map
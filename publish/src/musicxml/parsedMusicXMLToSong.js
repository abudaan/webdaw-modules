"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var midi_1 = require("../util/midi");
var calculateMillis_1 = require("../calculateMillis");
var createNotes_1 = require("../createNotes");
exports.parsedMusicXMLToSong = function (data) {
    if (data === null) {
        return null;
    }
    var parts = data.parts, repeats = data.repeats, ppq = data.ppq, initialTempo = data.initialTempo, initialNumerator = data.initialNumerator, initialDenominator = data.initialDenominator;
    var _a = parts.reduce(function (acc, val, i) {
        var _a;
        var id = "T-" + i++;
        (_a = acc.events).push.apply(_a, __spread(val.events.map(function (e) {
            e.trackId = id;
            return e;
        })));
        var t = {
            id: id,
            name: val.name,
            instrument: val.instrument,
            volume: val.volume,
            latency: 0,
            inputs: [],
            outputs: [],
        };
        acc.tracks.push(t);
        return acc;
    }, { tracks: [], events: [] }), tracks = _a.tracks, events = _a.events;
    midi_1.sortMIDIEvents(events);
    return {
        ppq: ppq,
        latency: 17,
        bufferTime: 100,
        tracks: tracks,
        tracksById: tracks.reduce(function (acc, value) {
            acc[value.id] = value;
            return acc;
        }, {}),
        events: calculateMillis_1.calculateMillis(events, {
            ppq: ppq,
            bpm: initialTempo === -1 ? 120 : initialTempo,
        }),
        notes: createNotes_1.createNotes(events),
        initialTempo: initialTempo,
        initialNumerator: initialNumerator,
        initialDenominator: initialDenominator,
        repeats: repeats,
    };
};
//# sourceMappingURL=parsedMusicXMLToSong.js.map
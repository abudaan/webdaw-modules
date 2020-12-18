"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heartbeat_utils = void 0;
var _1 = __importDefault(require("./"));
var status = function (response) {
    if (response.ok) {
        return response;
    }
    throw new Error(response.statusText);
};
// generic json loader
var loadJSON = function (url) {
    return fetch(url)
        .then(status)
        .then(function (response) { return response.json(); })
        .catch(function (e) { return console.error(e); });
};
// generic ab loader
var loadArrayBuffer = function (url) {
    return fetch(url)
        .then(status)
        .then(function (response) { return response.arrayBuffer(); })
        .catch(function (e) { return console.error(e); });
};
// const initSequencer = () => sequencer.ready();
var initSequencer = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, _1.default.ready()];
            case 1:
                _a.sent();
                console.log(_1.default);
                return [2 /*return*/];
        }
    });
}); };
var getBrowser = function () { return _1.default.browser; };
var getLoadedMIDIFiles = function () {
    return _1.default.getMidiFiles().map(function (mf) { return mf.name; });
};
// const getLoadedInstruments = () =>
//   sequencer
//     .getInstruments()
//     .map((i: Heartbeat.Instrument, index: number) => [index, i.name])
//     .filter((t: [number, string]) => t[1] !== "metronome");
var addMIDIFile = function (url) {
    return new Promise(function (resolve) {
        _1.default.addMidiFile({ url: url }, function (json) {
            // console.log(url);
            // console.log(sequencer.getMidiFiles())
            resolve(json);
        });
    });
};
var addAssetPack = function (ap) {
    return new Promise(function (resolve) {
        _1.default.addAssetPack(ap, function () {
            resolve();
        });
    });
};
var addAssetPacks = function (aps) {
    return new Promise(function (resolve) {
        var max = aps.length;
        aps.forEach(function (ap) {
            _1.default.addAssetPack(ap, function () {
                max--;
                // console.log(max);
                if (max === 0) {
                    resolve();
                }
            });
        });
    });
};
// this version does not work on Android!
var addAssetPack2 = function (url) {
    return new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
        var ap;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadJSON(url)];
                case 1:
                    ap = _a.sent();
                    _1.default.addAssetPack(ap, function () {
                        resolve(ap);
                    });
                    return [2 /*return*/];
            }
        });
    }); });
};
// load binary MIDI file, add it to the assets and create a song from it
var createSongFromMIDIFile = function (url) {
    return new Promise(function (resolve) {
        _1.default.addMidiFile({ url: url }, function (json) {
            resolve(_1.default.createSong(json));
        });
    });
};
// load binary MIDI file and create song from it (MIDI file is not added to the assets)
var createSongFromMIDIFile2 = function (url) {
    return loadArrayBuffer(url)
        .then(function (ab) { return _1.default.createMidiFile({ arraybuffer: ab }); })
        .then(function (json) {
        return _1.default.createSong(json);
    })
        .catch(function (e) { return console.error(e); });
};
var parseConfig = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
                var aps, instrument;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!config.midiFiles) return [3 /*break*/, 2];
                            // console.log(config.midiFiles.map(async url => addMIDIFile(url)));
                            return [4 /*yield*/, Promise.all(config.midiFiles.map(function (url) { return addMIDIFile(url); }))];
                        case 1:
                            // console.log(config.midiFiles.map(async url => addMIDIFile(url)));
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (!config.assetPacks) return [3 /*break*/, 5];
                            return [4 /*yield*/, Promise.all(config.assetPacks.map(function (url) { return loadJSON(url); }))];
                        case 3:
                            aps = _a.sent();
                            return [4 /*yield*/, addAssetPacks(aps)];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5:
                            instrument = _1.default.getInstruments()[0];
                            resolve({
                                instrumentSamplesList: Object.entries(instrument.mapping),
                                midiInputs: _1.default.midiInputs,
                                midiOutputs: _1.default.midiOutputs,
                                loadedInstruments: _1.default.getInstruments(),
                            });
                            return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
var createMIDIFileList = function () {
    return _1.default.getMidiFiles().map(function (mf) {
        var result = {
            name: mf.url.substring(mf.url.lastIndexOf("/") + 1),
            tracks: [],
            timeEvents: __spread(mf.timeEvents),
            ppq: mf.ppq,
            bpm: mf.bpm,
            nominator: mf.nominator,
            denominator: mf.denominator,
        };
        mf.tracks.forEach(function (t) {
            var key = Object.keys(t.partsById)[0];
            var events = Object.values(t.partsById[key].eventsById);
            result.tracks.push({
                name: t.name,
                events: events,
            });
        });
        return result;
    });
};
var getNumUniqueNotes = function (part) {
    var uniq = {};
    part.events.forEach(function (e) {
        uniq[e.noteName] = true;
    });
    return Object.keys(uniq).length;
};
var sortOnNoteNumberAscending = function (a, b) {
    if (a.noteNumber < b.noteNumber) {
        return -1;
    }
    else if (a.noteNumber > b.noteNumber) {
        return 1;
    }
    else {
        return 0;
    }
};
var sortOnNoteNumberDescending = function (a, b) {
    if (a.noteNumber > b.noteNumber) {
        return -1;
    }
    else if (a.noteNumber < b.noteNumber) {
        return 1;
    }
    else {
        return 0;
    }
};
var getLowestNote = function (events) {
    var sorted = events.filter(function (e) { return e.command === 144; }).sort(sortOnNoteNumberAscending);
    return sorted[0];
};
var getHighestNote = function (events) {
    var sorted = events.filter(function (e) { return e.command === 144; }).sort(sortOnNoteNumberDescending);
    return sorted[0];
};
var getAverageNote = function (events) {
    var lowest = getLowestNote(events).noteNumber;
    var highest = getHighestNote(events).noteNumber;
    var average = lowest + (highest - lowest) / 2;
    return Math.round(average);
};
var loadMIDIFile = function (url) {
    return new Promise(function (resolve) {
        _1.default.addMidiFile({ url: url }, function () {
            resolve();
        });
    });
};
var getBarInfo = function (song, bar) {
    var startMillis = song.getPosition("barsandbeats", bar, 0, 0, 0).millis;
    var endMillis = song.getPosition("barsandbeats", bar + 1, 0, 0, 0).millis;
    return {
        durationMillis: endMillis - startMillis,
        startMillis: startMillis,
    };
};
exports.heartbeat_utils = {
    initSequencer: initSequencer,
    getBrowser: getBrowser,
    parseConfig: parseConfig,
    loadJSON: loadJSON,
    loadArrayBuffer: loadArrayBuffer,
    addAssetPack: addAssetPack,
    addAssetPack2: addAssetPack2,
    addMIDIFile: addMIDIFile,
    // getLoadedInstruments,
    createMIDIFileList: createMIDIFileList,
    createSongFromMIDIFile: createSongFromMIDIFile,
    getNumUniqueNotes: getNumUniqueNotes,
    getLowestNote: getLowestNote,
    getHighestNote: getHighestNote,
    getAverageNote: getAverageNote,
    loadMIDIFile: loadMIDIFile,
    getBarInfo: getBarInfo,
};
//# sourceMappingURL=utils.js.map
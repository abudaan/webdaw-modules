/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./musicxml/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/uniqid/index.js":
/*!***************************************!*\
  !*** ../node_modules/uniqid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* 
(The MIT License)
Copyright (c) 2014-2019 Halász Ádám <mail@adamhalasz.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = process && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, mac, networkInterfaces; } 

//  Exports
// ================================================
module.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../examples/node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "../src/bufferreader.ts":
/*!******************************!*\
  !*** ../src/bufferreader.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// from: https://github.com/pravdomil/jasmid.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BufferReader = void 0;
var BufferReader = /** @class */ (function () {
    function BufferReader(buffer) {
        this.position = 0;
        this.data = new DataView(buffer);
    }
    BufferReader.prototype.read = function (length) {
        var value = this.data.buffer.slice(this.position, this.position + length);
        this.position += length;
        return value;
    };
    BufferReader.prototype.int8 = function () {
        var value = this.data.getInt8(this.position);
        this.position += 1;
        return value;
    };
    BufferReader.prototype.uint8 = function () {
        var value = this.data.getUint8(this.position);
        this.position += 1;
        return value;
    };
    BufferReader.prototype.uint16 = function () {
        var value = this.data.getUint16(this.position);
        this.position += 2;
        return value;
    };
    BufferReader.prototype.uint32 = function () {
        var value = this.data.getUint32(this.position);
        this.position += 4;
        return value;
    };
    BufferReader.prototype.string = function (length) {
        return new TextDecoder("ascii").decode(this.read(length));
    };
    BufferReader.prototype.eof = function () {
        return this.position >= this.data.byteLength;
    };
    /**
     * Read a MIDI-style variable-length integer.
     * (big-endian value in groups of 7 bits, with top bit set to signify that another byte follows)
     */
    BufferReader.prototype.midiInt = function () {
        var result = 0;
        while (true) {
            var value = this.uint8();
            if (value & 128) {
                result += value & 127;
                result <<= 7;
            }
            else {
                return result + value;
            }
        }
    };
    BufferReader.prototype.midiChunk = function () {
        var id = this.string(4);
        var length = this.uint32();
        var data = this.read(length);
        return { id: id, length: length, data: data };
    };
    return BufferReader;
}());
exports.BufferReader = BufferReader;


/***/ }),

/***/ "../src/calculateMillis.ts":
/*!*********************************!*\
  !*** ../src/calculateMillis.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "../src/createNotes.ts":
/*!*****************************!*\
  !*** ../src/createNotes.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotes = void 0;
var index = 0;
exports.createNotes = function (events) {
    var filtered = events.reduce(function (acc, val) {
        // console.log(val.type);
        if (val.type === 0x80 || val.type === 0x90) {
            acc.push(val);
        }
        return acc;
    }, []);
    // filtered = sortMIDIEvents(filtered);
    var notes = [];
    var tmp = {};
    filtered.forEach(function (e) {
        var id = e.trackId + "-" + e.noteNumber;
        // console.log(e.ticks, e.type, id);
        if (e.type === 0x90) {
            if (tmp[id]) {
                // console.warn(`note existed already! ${id}`);
            }
            else {
                tmp[id] = e;
            }
        }
        else if (e.type === 0x80) {
            if (!tmp[id]) {
                // console.warn(`note doesn't exist! ${id}`);
            }
            else {
                var noteOn = tmp[id];
                var note = {
                    id: "note-" + new Date().getTime() + "-" + index++,
                    noteOn: noteOn,
                    noteOff: e,
                };
                notes.push(note);
                delete tmp[id];
            }
        }
    });
    // console.log(notes);
    return notes;
};


/***/ }),

/***/ "../src/createSongFromMIDIFile.ts":
/*!****************************************!*\
  !*** ../src/createSongFromMIDIFile.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSongFromMIDIFile = void 0;
var fetch_helpers_1 = __webpack_require__(/*! ./fetch_helpers */ "../src/fetch_helpers.ts");
var parseMIDIFile_1 = __webpack_require__(/*! ./parseMIDIFile */ "../src/parseMIDIFile.ts");
exports.createSongFromMIDIFile = function (arg) { return __awaiter(void 0, void 0, void 0, function () {
    var ab;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(typeof arg === "string")) return [3 /*break*/, 2];
                return [4 /*yield*/, fetch_helpers_1.fetchArraybuffer(arg)];
            case 1:
                ab = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                ab = arg;
                _a.label = 3;
            case 3: 
            // const { header, timeTrack, tracks } = parseMidiFile(ab);
            return [2 /*return*/, parseMIDIFile_1.parseMIDIFile(ab)];
        }
    });
}); };


/***/ }),

/***/ "../src/createTrack.ts":
/*!*****************************!*\
  !*** ../src/createTrack.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createTrack = void 0;
exports.createTrack = function (id) {
    return {
        id: id,
        latency: 0,
        inputs: [],
        outputs: [],
    };
};


/***/ }),

/***/ "../src/fetch_helpers.ts":
/*!*******************************!*\
  !*** ../src/fetch_helpers.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchArraybuffer = exports.fetchXML = exports.fetchJSON = void 0;
var status = function (response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
};
exports.fetchJSON = function (url) {
    // fetch(url, {
    //   mode: 'no-cors'
    // })
    return fetch(url)
        .then(status)
        .then(function (response) { return response.json(); });
};
exports.fetchXML = function (url) {
    return fetch(url)
        .then(status)
        .then(function (response) { return response.text(); })
        .then(function (str) { return new window.DOMParser().parseFromString(str, "text/xml"); });
};
exports.fetchArraybuffer = function (url) {
    return fetch(url)
        .then(status)
        .then(function (response) { return response.arrayBuffer(); });
};


/***/ }),

/***/ "../src/getMIDIAccess.ts":
/*!*******************************!*\
  !*** ../src/getMIDIAccess.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMIDIAccess = void 0;
var midiAccess;
exports.getMIDIAccess = function () { return __awaiter(void 0, void 0, void 0, function () {
    var ma, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (midiAccess !== null && typeof midiAccess !== "undefined") {
                    return [2 /*return*/, Promise.resolve(midiAccess)];
                }
                if (!navigator.requestMIDIAccess) {
                    midiAccess = null;
                    console.log("WebMIDI not supported");
                    return [2 /*return*/, Promise.resolve(null)];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, navigator.requestMIDIAccess()];
            case 2:
                ma = _a.sent();
                // midiAccess.onstatechange = (e: WebMidi.MIDIConnectionEvent) => {
                // };
                if (!ma.inputs || !ma.outputs) {
                    console.log("Firefox WebMIDI API support is still in progress");
                    return [2 /*return*/, null];
                }
                midiAccess = ma;
                return [2 /*return*/, ma];
            case 3:
                e_1 = _a.sent();
                console.log("MIDI could not be initialized:", e_1);
                return [2 /*return*/, null];
            case 4: return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "../src/getMIDIPorts.ts":
/*!******************************!*\
  !*** ../src/getMIDIPorts.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getMIDIPorts = void 0;
exports.getMIDIPorts = function (midiAccess) {
    // export const getMIDIDevices = (): { inputs: WebMidi.MIDIInput[], outputs: WebMidi.MIDIOutput[] } => {
    var inputs = [];
    var outputs = [];
    if (midiAccess) {
        midiAccess.inputs.forEach(function (i) {
            inputs.push(i);
        });
        midiAccess.outputs.forEach(function (o) {
            outputs.push(o);
        });
    }
    // console.log(inputs, outputs);
    return { inputs: inputs, outputs: outputs };
};


/***/ }),

/***/ "../src/parseMIDIFile.ts":
/*!*******************************!*\
  !*** ../src/parseMIDIFile.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// based on: https://github.com/pravdomil/jasmid.ts
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMIDIFile = void 0;
// import { BufferReader } from 'jasmid.ts';
var uniqid_1 = __importDefault(__webpack_require__(/*! uniqid */ "../node_modules/uniqid/index.js"));
var bufferreader_1 = __webpack_require__(/*! ./bufferreader */ "../src/bufferreader.ts");
var midi_1 = __webpack_require__(/*! ./util/midi */ "../src/util/midi.ts");
var calculateMillis_1 = __webpack_require__(/*! ./calculateMillis */ "../src/calculateMillis.ts");
var createTrack_1 = __webpack_require__(/*! ./createTrack */ "../src/createTrack.ts");
var createNotes_1 = __webpack_require__(/*! ./createNotes */ "../src/createNotes.ts");
function parseMIDIFile(buffer) {
    var reader = new bufferreader_1.BufferReader(buffer);
    var header = parseHeader(reader);
    // const { timeTrack, tracks } = parseTracks(reader, header.ticksPerBeat)
    var _a = parseTracks(reader, header.ticksPerBeat), tracks = _a.tracks, events = _a.events, initialTempo = _a.initialTempo, initialNumerator = _a.initialNumerator, initialDenominator = _a.initialDenominator;
    return {
        ppq: header.ticksPerBeat,
        latency: 17,
        bufferTime: 100,
        tracks: tracks,
        tracksById: tracks.reduce(function (acc, value) {
            acc[value.id] = value;
            return acc;
        }, {}),
        events: calculateMillis_1.calculateMillis(events, {
            ppq: header.ticksPerBeat,
            bpm: initialTempo,
        }),
        notes: createNotes_1.createNotes(events),
        initialTempo: initialTempo,
        initialNumerator: initialNumerator,
        initialDenominator: initialDenominator,
    };
}
exports.parseMIDIFile = parseMIDIFile;
function parseHeader(reader) {
    var headerChunk = reader.midiChunk();
    if (headerChunk.id !== "MThd" || headerChunk.length !== 6) {
        throw new Error("Bad .mid file, header not found");
    }
    var headerReader = new bufferreader_1.BufferReader(headerChunk.data);
    var formatType = headerReader.uint16();
    var trackCount = headerReader.uint16();
    var timeDivision = headerReader.uint16();
    if (timeDivision & 0x8000) {
        throw new Error("Expressing time division in SMTPE frames is not supported yet");
    }
    var ticksPerBeat = timeDivision;
    return { formatType: formatType, trackCount: trackCount, ticksPerBeat: ticksPerBeat };
}
function parseTracks(reader, ppq) {
    var initialTempo = -1;
    var initialNumerator = -1;
    var initialDenominator = -1;
    var tracks = [];
    var events = [];
    while (!reader.eof()) {
        var trackChunk = reader.midiChunk();
        if (trackChunk.id !== "MTrk") {
            throw new Error("Unexpected chunk, expected MTrk, got " + trackChunk.id);
        }
        var trackId = "T-" + uniqid_1.default();
        var track = createTrack_1.createTrack(trackId);
        var trackTrack = new bufferreader_1.BufferReader(trackChunk.data);
        var ticks = 0;
        var lastTypeByte = null;
        while (!trackTrack.eof()) {
            var data = parseEvent(trackTrack, lastTypeByte);
            // console.log(data);
            var event_1 = data.event, deltaTime = data.deltaTime, bpm = data.bpm, numerator = data.numerator, denominator = data.denominator, trackName = data.trackName;
            if (bpm && initialTempo === -1) {
                initialTempo = bpm;
            }
            if (numerator && initialNumerator === -1) {
                initialNumerator = numerator;
            }
            if (denominator && initialDenominator === -1) {
                initialDenominator = denominator;
            }
            if (trackName) {
                track.name = trackName;
            }
            ticks += deltaTime;
            // console.log('TICKS', ticks, bpm, numerator);
            lastTypeByte = event_1.type;
            events.push(__assign(__assign({}, event_1), { trackId: trackId,
                ticks: ticks }));
        }
        tracks.push(track);
    }
    return {
        events: midi_1.sortMIDIEvents(events),
        tracks: tracks,
        initialTempo: initialTempo,
        initialNumerator: initialNumerator,
        initialDenominator: initialDenominator,
    };
}
function parseEvent(reader, lastTypeByte) {
    var deltaTime = reader.midiInt();
    var typeByte = reader.uint8();
    // meta events: 0xff
    // system events: 0xf0, 0xf7
    // midi events: all other bytes
    if (typeByte === 0xff) {
        var subTypeByte = reader.uint8();
        var length_1 = reader.midiInt();
        switch (subTypeByte) {
            // sequence number
            case 0x00:
                if (length_1 !== 2) {
                    throw new Error("Expected length for sequenceNumber event is 2, got " + length_1);
                }
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.SEQUENCE_NUMBER,
                        number: reader.uint16(),
                    },
                    deltaTime: deltaTime,
                };
            // text
            case 0x01:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.TEXT,
                        text: reader.string(length_1),
                    },
                    deltaTime: deltaTime,
                };
            // copyright
            case 0x02:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.COPYRIGHT_NOTICE,
                        text: reader.string(length_1),
                    },
                    deltaTime: deltaTime,
                };
            // track name
            case 0x03:
                var trackName = reader.string(length_1);
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.TRACK_NAME,
                        text: trackName,
                    },
                    deltaTime: deltaTime,
                    trackName: trackName,
                };
            // instrument name
            case 0x04:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.INSTRUMENT_NAME,
                        text: reader.string(length_1),
                    },
                    deltaTime: deltaTime,
                };
            // lyrics
            case 0x05:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.LYRICS,
                        text: reader.string(length_1),
                    },
                    deltaTime: deltaTime,
                };
            // marker
            case 0x06:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.MARKER,
                        text: reader.string(length_1),
                    },
                    deltaTime: deltaTime,
                };
            // cue point
            case 0x07:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.CUE_POINT,
                        text: reader.string(length_1),
                    },
                    deltaTime: deltaTime,
                };
            // channel prefix
            case 0x20:
                if (length_1 !== 1) {
                    throw new Error("Expected length for midiChannelPrefix event is 1, got " + length_1);
                }
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.CHANNEL_PREFIX,
                        channel: reader.uint8(),
                    },
                    deltaTime: deltaTime,
                };
            // end of track
            case 0x2f:
                if (length_1 !== 0) {
                    throw new Error("Expected length for endOfTrack event is 0, got " + length_1);
                }
                return {
                    event: {
                        descr: midi_1.END_OF_TRACK,
                        type: typeByte,
                        subType: subTypeByte,
                    },
                    deltaTime: deltaTime,
                };
            // tempo
            case 0x51:
                if (length_1 !== 3) {
                    throw new Error("Expected length for setTempo event is 3, got " + length_1);
                }
                var microsecondsPerBeat = (reader.uint8() << 16) + (reader.uint8() << 8) + reader.uint8();
                var bpm = 60000000 / microsecondsPerBeat;
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.TEMPO,
                        bpm: bpm,
                    },
                    bpm: bpm,
                    deltaTime: deltaTime,
                };
            // smpte offset
            case 0x54:
                if (length_1 != 5) {
                    throw new Error("Expected length for smpteOffset event is 5, got " + length_1);
                }
                var hourByte = reader.uint8();
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.SMPTE_OFFSET,
                        frameRate: getFrameRate(hourByte),
                        hour: hourByte & 0x1f,
                        min: reader.uint8(),
                        sec: reader.uint8(),
                        frame: reader.uint8(),
                        subFrame: reader.uint8(),
                    },
                    deltaTime: deltaTime,
                };
            // time signature
            case 0x58:
                if (length_1 != 4) {
                    throw new Error("Expected length for timeSignature event is 4, got " + length_1);
                }
                var numerator = reader.uint8();
                var denominator = Math.pow(2, reader.uint8());
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.TIME_SIGNATURE,
                        numerator: numerator,
                        denominator: denominator,
                        metronome: reader.uint8(),
                        thirtySeconds: reader.uint8(),
                    },
                    numerator: numerator,
                    denominator: denominator,
                    deltaTime: deltaTime,
                };
            // key signature
            case 0x59:
                if (length_1 != 2) {
                    throw new Error("Expected length for keySignature event is 2, got " + length_1);
                }
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.KEY_SIGNATURE,
                        key: reader.int8(),
                        scale: reader.uint8(),
                    },
                    deltaTime: deltaTime,
                };
            // sequencer specific
            case 0x7f:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.SEQUENCER_SPECIFIC,
                        data: reader.read(length_1),
                    },
                    deltaTime: deltaTime,
                };
            // undefined
            default:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: "undefined",
                        data: reader.read(length_1),
                    },
                    deltaTime: deltaTime,
                };
        }
    }
    else if (typeByte === 0xf0) {
        // system exclusive
        var length_2 = reader.midiInt();
        return {
            event: {
                type: 0xf0,
                descr: midi_1.SYSTEM_EXCLUSIVE,
                data: reader.read(length_2),
            },
            deltaTime: deltaTime,
        };
    }
    else if (typeByte === 0xf7) {
        // divided system exclusive
        var length_3 = reader.midiInt();
        return {
            event: {
                type: 0xf0,
                descr: midi_1.DIVIDED_SYSTEM_EXCLUSIVE,
                data: reader.read(length_3),
            },
            deltaTime: deltaTime,
        };
    }
    else {
        /**
         * running status - reuse lastEventTypeByte as the event type
         * typeByte is actually the first parameter
         */
        var isRunningStatus = (typeByte & 128) === 0;
        var value = isRunningStatus ? typeByte : reader.uint8();
        typeByte = isRunningStatus ? (lastTypeByte === null ? 0 : lastTypeByte) : typeByte;
        // console.log(isRunningStatus, typeByte, value);
        var channel = typeByte & 0x0f;
        // channels[channel] = true;
        switch (typeByte >> 4) {
            // note off
            case 0x08:
                return {
                    event: {
                        type: 0x80,
                        descr: midi_1.NOTE_OFF,
                        channel: channel,
                        noteNumber: value,
                        velocity: reader.uint8(),
                    },
                    deltaTime: deltaTime,
                };
            // note on
            case 0x09:
                var velocity = reader.uint8();
                return {
                    event: {
                        type: velocity === 0 ? 0x80 : 0x90,
                        descr: velocity === 0 ? midi_1.NOTE_OFF : midi_1.NOTE_ON,
                        channel: channel,
                        noteNumber: value,
                        velocity: velocity,
                    },
                    deltaTime: deltaTime,
                };
            // note aftertouch
            case 0x0a:
                return {
                    event: {
                        type: 0xa0,
                        descr: midi_1.NOTE_AFTERTOUCH,
                        channel: channel,
                        noteNumber: value,
                        amount: reader.uint8(),
                    },
                    deltaTime: deltaTime,
                };
            // controller
            case 0x0b:
                return {
                    event: {
                        type: 0xb0,
                        descr: midi_1.CONTROLLER,
                        channel: channel,
                        controllerNumber: value,
                        value: reader.uint8(),
                    },
                    deltaTime: deltaTime,
                };
            // program change
            case 0x0c:
                return {
                    event: {
                        type: 0xc0,
                        descr: midi_1.PROGRAM_CHANGE,
                        channel: channel,
                        program: value,
                    },
                    deltaTime: deltaTime,
                };
            // channel aftertouch
            case 0x0d:
                return {
                    event: {
                        type: 0xd0,
                        descr: midi_1.CHANNEL_AFTERTOUCH,
                        channel: channel,
                        amount: value,
                    },
                    deltaTime: deltaTime,
                };
            // pitch bend
            case 0x0e:
                return {
                    event: {
                        type: 0xe0,
                        descr: midi_1.PITCH_BEND,
                        channel: channel,
                        value: value + (reader.uint8() << 7),
                    },
                    deltaTime: deltaTime,
                };
            // default:
            //   return {
            //     event: {
            //       type: typeByte >> 4,
            //       descr: "unrecognized",
            //       channel,
            //     },
            //     deltaTime,
            //   };
        }
    }
    console.log("Unrecognized MIDI event type byte: " + typeByte + " (fix this)");
    return {
        event: {
            type: typeByte === 255 ? 0 : typeByte,
        },
        deltaTime: deltaTime,
    };
    throw new Error("Unrecognized MIDI event type byte: " + typeByte);
}
function getFrameRate(hourByte) {
    switch (hourByte & 96) {
        case 0x00:
            return 24;
        case 0x20:
            return 25;
        case 0x40:
            return 29;
        case 0x60:
            return 30;
        default:
            return 0;
    }
}


/***/ }),

/***/ "../src/scheduler.ts":
/*!***************************!*\
  !*** ../src/scheduler.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.schedule = void 0;
var midi_1 = __webpack_require__(/*! ./util/midi */ "../src/util/midi.ts");
exports.schedule = function (_a) {
    var song = _a.song, index = _a.index, millis = _a.millis, outputs = _a.outputs;
    var ts = performance.now();
    var events = song.events;
    var scheduled = [];
    var _loop_1 = function () {
        var event_1 = events[index];
        if (!event_1.millis || !event_1.trackId) {
            // break;
            index++;
        }
        else if (event_1.millis < millis + song.bufferTime) {
            scheduled.push(event_1);
            // console.log(event.ticks, event.descr, (event as NoteOnEvent).noteNumber);
            var track_1 = song.tracksById[event_1.trackId];
            track_1.outputs.forEach(function (id) {
                var _a;
                if (event_1.descr === midi_1.NOTE_ON || event_1.descr === midi_1.NOTE_OFF) {
                    var e = event_1;
                    if (event_1.millis) {
                        // console.log(event.type, event.channel, event.noteNumber);
                        var time = ts + song.latency + track_1.latency + (event_1.millis - millis);
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
                        if (e.descr === midi_1.NOTE_ON) {
                            time += 1;
                        }
                        (_a = outputs === null || outputs === void 0 ? void 0 : outputs.get(id)) === null || _a === void 0 ? void 0 : _a.send([event_1.type + event_1.channel, event_1.noteNumber, event_1.velocity], time);
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


/***/ }),

/***/ "../src/util/midi.ts":
/*!***************************!*\
  !*** ../src/util/midi.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDoubleEvents = exports.sortMIDIEvents = exports.getNoteNumber = exports.getMidiMessageEvent = exports.getMidiEventDescription = exports.noteNames = exports.PITCH_BEND = exports.CHANNEL_AFTERTOUCH = exports.PROGRAM_CHANGE = exports.CONTROLLER = exports.NOTE_AFTERTOUCH = exports.NOTE_OFF = exports.NOTE_ON = exports.DIVIDED_SYSTEM_EXCLUSIVE = exports.SYSTEM_EXCLUSIVE = exports.SEQUENCER_SPECIFIC = exports.KEY_SIGNATURE = exports.TIME_SIGNATURE = exports.SMPTE_OFFSET = exports.TEMPO = exports.END_OF_TRACK = exports.CHANNEL_PREFIX = exports.CUE_POINT = exports.MARKER = exports.LYRICS = exports.INSTRUMENT_NAME = exports.TRACK_NAME = exports.COPYRIGHT_NOTICE = exports.TEXT = exports.SEQUENCE_NUMBER = void 0;
exports.SEQUENCE_NUMBER = "sequence number";
exports.TEXT = "text";
exports.COPYRIGHT_NOTICE = "copyright notice";
exports.TRACK_NAME = "track name";
exports.INSTRUMENT_NAME = "instrument name";
exports.LYRICS = "lyrics";
exports.MARKER = "marker";
exports.CUE_POINT = "cue point";
exports.CHANNEL_PREFIX = "channel prefix";
exports.END_OF_TRACK = "end of track";
exports.TEMPO = "tempo";
exports.SMPTE_OFFSET = "smpte offset";
exports.TIME_SIGNATURE = "time signature";
exports.KEY_SIGNATURE = "key signature";
exports.SEQUENCER_SPECIFIC = "sequencer specific";
exports.SYSTEM_EXCLUSIVE = "system exclusive";
exports.DIVIDED_SYSTEM_EXCLUSIVE = "divided system exclusive";
exports.NOTE_ON = "note on";
exports.NOTE_OFF = "note off";
exports.NOTE_AFTERTOUCH = "note aftertouch";
exports.CONTROLLER = "controller";
exports.PROGRAM_CHANGE = "program change";
exports.CHANNEL_AFTERTOUCH = "channel aftertouch";
exports.PITCH_BEND = "pitch bend";
var descriptions = {
    0xff: {
        0x00: "sequence number",
        0x01: "text",
        0x02: "copyright notice",
        0x03: "track name",
        0x04: "instrument name",
        0x05: "lyrics",
        0x06: "marker",
        0x07: "cue point",
        0x20: "channel prefix",
        0x2f: "end of track",
        0x51: "tempo",
        0x54: "smpte offset",
        0x58: "time signature",
        0x59: "key signature",
        0x7f: "sequencer specific",
    },
    0xf0: "system exclusive",
    0xf7: "divided sysex",
    0x80: "note on",
    0x90: "note off",
    0xa0: "note aftertouch",
    0xb0: "controller",
    0xc0: "program change",
    0xd0: "channel aftertouch",
    0xe0: "pitch bend",
};
exports.noteNames = {
    sharp: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
    flat: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
    "enharmonic-sharp": ["B#", "C#", "C##", "D#", "D##", "E#", "F#", "F##", "G#", "G##", "A#", "A##"],
    "enharmonic-flat": ["Dbb", "Db", "Ebb", "Eb", "Fb", "Gbb", "Gb", "Abb", "Ab", "Bbb", "Bb", "Cb"],
};
exports.getMidiEventDescription = function (type, subType) {
    if (typeof subType === "undefined") {
        return descriptions[type];
    }
    return descriptions[type][subType] || "undefined";
};
exports.getMidiMessageEvent = function (event) {
    switch (event.descr) {
        case exports.NOTE_ON:
            return [0x90 + event.channel, event.noteNumber, event.velocity];
        case exports.NOTE_OFF:
            return [0x80 + event.channel, event.noteNumber, event.velocity];
    }
    return [0];
};
exports.getNoteNumber = function (name, octave, mode) {
    if (mode === void 0) { mode = "sharp"; }
    // let index = -1;
    // const modes = Object.getOwnPropertyNames(noteNames);
    // for (let i = 0, maxi = modes.length; i < maxi; i++) {
    //   const names = modes[i];
    //   for (let j = 0, maxj = names.length; j < maxj; j++) {
    //     if (mode[j] === name) {
    //       index = i;
    //       break;
    //     }
    //   }
    // }
    var index = -1;
    var modes = Object.values(exports.noteNames);
    for (var i = 0; i < modes.length; i++) {
        var names = modes[i];
        for (var j = 0; j < names.length; j++) {
            // console.log(names[j], name);
            if (names[j] === name) {
                index = j;
                break;
            }
        }
    }
    // console.log(name, octave, index);
    if (index === -1) {
        return -1;
    }
    //number = (index + 12) + (octave * 12) + 12; // → in Cubase central C = C3 instead of C4
    return index + 12 + octave * 12; // → midi standard + scientific naming, see: http://en.wikipedia.org/wiki/Middle_C and http://en.wikipedia.org/wiki/Scientific_pitch_notation
};
exports.sortMIDIEvents = function (events) {
    return events.sort(function (a, b) {
        if (a.ticks < b.ticks) {
            return -1;
        }
        else if (a.ticks > b.ticks) {
            return 1;
            // } else if (a.type === 0x80 && b.type === 0x90) {
            //   // note off before note on
            //   return -1;
            // } else if (a.type === 0x51 || a.type === 0x58) {
            //   // tempo and time signature events first
            //   return -1;
        }
        return 0;
    });
};
exports.removeDoubleEvents = function (events) {
    // var i, maxi = events.length,
    //   event, eventId, lastId,
    //   result = [];
    // events.sort(function (a, b) {
    //   return a.eventNumber - b.eventNumber;
    // });
    // for (i = 0; i < maxi; i++) {
    //   event = events[i];
    //   eventId = event.id;
    //   if (eventId !== lastId) {
    //     result.push(event);
    //   }
    //   lastId = eventId;
    // }
    // return result;
    return [];
};


/***/ }),

/***/ "./musicxml/index.ts":
/*!***************************!*\
  !*** ./musicxml/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
// import "jzz";
var scheduler_1 = __webpack_require__(/*! ../../src/scheduler */ "../src/scheduler.ts");
var getMIDIAccess_1 = __webpack_require__(/*! ../../src/getMIDIAccess */ "../src/getMIDIAccess.ts");
var getMIDIPorts_1 = __webpack_require__(/*! ../../src/getMIDIPorts */ "../src/getMIDIPorts.ts");
var createSongFromMIDIFile_1 = __webpack_require__(/*! ../../src/createSongFromMIDIFile */ "../src/createSongFromMIDIFile.ts");
var url = "../../assets/minute_waltz.mid";
// const url = '../../assets/mozk545a.mid';
// const url = '../../assets/mozk545a_musescore.mid';
var init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var ma, song, _a, inputs, outputs, millis, index, start, play;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getMIDIAccess_1.getMIDIAccess()];
            case 1:
                ma = _b.sent();
                return [4 /*yield*/, createSongFromMIDIFile_1.createSongFromMIDIFile(url)];
            case 2:
                song = _b.sent();
                _a = getMIDIPorts_1.getMIDIPorts(ma), inputs = _a.inputs, outputs = _a.outputs;
                song.tracks.forEach(function (track) {
                    var _a;
                    (_a = track.outputs).push.apply(_a, __spread(outputs.map(function (o) { return o.id; })));
                });
                console.log(song);
                millis = 3000;
                index = scheduler_1.getCurrentEventIndex(song, millis);
                start = performance.now();
                play = function (a) {
                    var _a;
                    var ts = performance.now();
                    // console.log(ts, a);
                    // const progress = ts - a;
                    var progress = ts - start;
                    start = ts;
                    // const progress = a - start;
                    // start = a;
                    if (millis < 10000) {
                        (_a = scheduler_1.schedule({
                            song: song,
                            millis: millis,
                            index: index,
                            outputs: ma === null || ma === void 0 ? void 0 : ma.outputs,
                        }), index = _a.index, millis = _a.millis);
                        millis += progress;
                        // console.log(index, millis);
                        requestAnimationFrame(function (a) {
                            play(a);
                        });
                    }
                };
                play(start);
                return [2 /*return*/];
        }
    });
}); };
init();
// fetch(url)
//   .then(arrayBuffer)
//   .then(ab => {
//     const { header, tracks } = parseMidiFile(ab);
//     console.log(tracks);
//   });


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9idWZmZXJyZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jYWxjdWxhdGVNaWxsaXMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVOb3Rlcy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NyZWF0ZVNvbmdGcm9tTUlESUZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVUcmFjay50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ZldGNoX2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9nZXRNSURJQWNjZXNzLnRzIiwid2VicGFjazovLy8uLi9zcmMvZ2V0TUlESVBvcnRzLnRzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VNSURJRmlsZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3NjaGVkdWxlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWwvbWlkaS50cyIsIndlYnBhY2s6Ly8vLi9tdXNpY3htbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVIiwiZmlsZSI6Im11c2ljeG1sL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tdXNpY3htbC9pbmRleC50c1wiKTtcbiIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDE5IEhhbMOhc3ogw4Fkw6FtIDxtYWlsQGFkYW1oYWxhc3ouY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHByb2Nlc3MgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicpe1xuICAgIHZhciBtYWMgPSAnJywgbmV0d29ya0ludGVyZmFjZXMgPSByZXF1aXJlKCdvcycpLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsIi8vIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9wcmF2ZG9taWwvamFzbWlkLnRzXG5cbmV4cG9ydCBjbGFzcyBCdWZmZXJSZWFkZXIge1xuICBwcml2YXRlIHBvc2l0aW9uOiBudW1iZXI7XG4gIHByaXZhdGUgZGF0YTogRGF0YVZpZXc7XG5cbiAgY29uc3RydWN0b3IoYnVmZmVyOiBBcnJheUJ1ZmZlckxpa2UpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICB0aGlzLmRhdGEgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgfVxuXG4gIHJlYWQobGVuZ3RoOiBudW1iZXIpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5idWZmZXIuc2xpY2UodGhpcy5wb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiArIGxlbmd0aCk7XG4gICAgdGhpcy5wb3NpdGlvbiArPSBsZW5ndGg7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaW50OCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRJbnQ4KHRoaXMucG9zaXRpb24pO1xuICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICB1aW50OCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50OCh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDE2KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmdldFVpbnQxNih0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDI7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDMyKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmdldFVpbnQzMih0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDQ7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RyaW5nKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcihcImFzY2lpXCIpLmRlY29kZSh0aGlzLnJlYWQobGVuZ3RoKSk7XG4gIH1cblxuICBlb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPj0gdGhpcy5kYXRhLmJ5dGVMZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBhIE1JREktc3R5bGUgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuXG4gICAqIChiaWctZW5kaWFuIHZhbHVlIGluIGdyb3VwcyBvZiA3IGJpdHMsIHdpdGggdG9wIGJpdCBzZXQgdG8gc2lnbmlmeSB0aGF0IGFub3RoZXIgYnl0ZSBmb2xsb3dzKVxuICAgKi9cbiAgbWlkaUludCgpIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnVpbnQ4KCk7XG4gICAgICBpZiAodmFsdWUgJiAwYjEwMDAwMDAwKSB7XG4gICAgICAgIHJlc3VsdCArPSB2YWx1ZSAmIDBiMTExMTExMTtcbiAgICAgICAgcmVzdWx0IDw8PSA3O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1pZGlDaHVuaygpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuc3RyaW5nKDQpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMudWludDMyKCk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVhZChsZW5ndGgpO1xuICAgIHJldHVybiB7IGlkLCBsZW5ndGgsIGRhdGEgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTUlESUV2ZW50LCBUZW1wb0V2ZW50IH0gZnJvbSBcIi4vdHlwZXMvTUlESUV2ZW50XCI7XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVNaWxsaXMgPSAoXG4gIGV2ZW50czogTUlESUV2ZW50W10sXG4gIGRhdGE6IHtcbiAgICBwcHE6IG51bWJlcjtcbiAgICBicG0/OiBudW1iZXI7XG4gICAgcGxheWJhY2tTcGVlZD86IG51bWJlcjtcbiAgfVxuKTogTUlESUV2ZW50W10gPT4ge1xuICBsZXQgeyBwcHEsIGJwbSA9IC0xLCBwbGF5YmFja1NwZWVkID0gMSB9ID0gZGF0YTtcbiAgbGV0IG1pbGxpc1BlclRpY2sgPSBicG0gPT09IC0xID8gMCA6ICgoKDEgLyBwbGF5YmFja1NwZWVkKSAqIDYwKSAvIGJwbSAvIHBwcSkgKiAxMDAwO1xuICBsZXQgdGlja3MgPSAwO1xuICBsZXQgbWlsbGlzID0gMDtcbiAgLy8gY29uc29sZS5sb2coXCJicG1cIiwgYnBtLCBtaWxsaXMpO1xuICByZXR1cm4gZXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgaWYgKChldmVudCBhcyBUZW1wb0V2ZW50KS5icG0pIHtcbiAgICAgICh7IGJwbSB9ID0gZXZlbnQgYXMgVGVtcG9FdmVudCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImJwbVwiLCBicG0sIG1pbGxpcyk7XG4gICAgICBtaWxsaXNQZXJUaWNrID0gKCgoMSAvIHBsYXliYWNrU3BlZWQpICogNjApIC8gYnBtIC8gcHBxKSAqIDEwMDA7XG4gICAgfVxuICAgIGNvbnN0IGRpZmZUaWNrcyA9IGV2ZW50LnRpY2tzIC0gdGlja3M7XG4gICAgbWlsbGlzICs9IGRpZmZUaWNrcyAqIG1pbGxpc1BlclRpY2s7XG4gICAgZXZlbnQubWlsbGlzID0gbWlsbGlzO1xuICAgIHRpY2tzID0gZXZlbnQudGlja3M7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBNSURJRXZlbnQsIE5vdGVFdmVudCwgTm90ZU9uRXZlbnQsIE5vdGVPZmZFdmVudCB9IGZyb20gXCIuL3R5cGVzL01JRElFdmVudFwiO1xuXG5leHBvcnQgdHlwZSBNSURJTm90ZSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbm90ZU9uOiBOb3RlT25FdmVudDtcbiAgbm90ZU9mZjogTm90ZU9mZkV2ZW50O1xuICBkdXJhdGlvblRpY2tzPzogbnVtYmVyO1xuICBkdXJhdGlvbk1pbGxpcz86IG51bWJlcjtcbiAgc3RhcnRUaWNrcz86IG51bWJlcjtcbiAgZW5kVGlja3M/OiBudW1iZXI7XG4gIHN0YXJ0TWlsbGlzPzogbnVtYmVyO1xuICBlbmRNaWxsaXM/OiBudW1iZXI7XG59O1xuXG5sZXQgaW5kZXggPSAwO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTm90ZXMgPSAoZXZlbnRzOiBNSURJRXZlbnRbXSk6IE1JRElOb3RlW10gPT4ge1xuICBsZXQgZmlsdGVyZWQ6IE5vdGVFdmVudFtdID0gZXZlbnRzLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwudHlwZSk7XG4gICAgaWYgKHZhbC50eXBlID09PSAweDgwIHx8IHZhbC50eXBlID09PSAweDkwKSB7XG4gICAgICBhY2MucHVzaCh2YWwgYXMgTm90ZUV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10gYXMgTm90ZUV2ZW50W10pO1xuICAvLyBmaWx0ZXJlZCA9IHNvcnRNSURJRXZlbnRzKGZpbHRlcmVkKTtcbiAgY29uc3Qgbm90ZXM6IE1JRElOb3RlW10gPSBbXTtcbiAgY29uc3QgdG1wOiB7IFtpZDogc3RyaW5nXTogTm90ZUV2ZW50IH0gPSB7fTtcbiAgZmlsdGVyZWQuZm9yRWFjaChlID0+IHtcbiAgICBjb25zdCBpZCA9IGAke2UudHJhY2tJZH0tJHtlLm5vdGVOdW1iZXJ9YDtcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRpY2tzLCBlLnR5cGUsIGlkKTtcbiAgICBpZiAoZS50eXBlID09PSAweDkwKSB7XG4gICAgICBpZiAodG1wW2lkXSkge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oYG5vdGUgZXhpc3RlZCBhbHJlYWR5ISAke2lkfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG1wW2lkXSA9IGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnR5cGUgPT09IDB4ODApIHtcbiAgICAgIGlmICghdG1wW2lkXSkge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oYG5vdGUgZG9lc24ndCBleGlzdCEgJHtpZH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdGVPbiA9IHRtcFtpZF07XG4gICAgICAgIGNvbnN0IG5vdGU6IE1JRElOb3RlID0ge1xuICAgICAgICAgIGlkOiBgbm90ZS0ke25ldyBEYXRlKCkuZ2V0VGltZSgpfS0ke2luZGV4Kyt9YCxcbiAgICAgICAgICBub3RlT246IG5vdGVPbiBhcyBOb3RlT25FdmVudCxcbiAgICAgICAgICBub3RlT2ZmOiBlLFxuICAgICAgICAgIC8vIGR1cmF0aW9uVGlja3M6IGUudGlja3MgLSBub3RlT24udGlja3MsXG4gICAgICAgICAgLy8gZHVyYXRpb25NaWxsaXM6IGUubWlsbGlzIC0gbm90ZU9uLm1pbGxpcyxcbiAgICAgICAgICAvLyBzdGFydFRpY2tzOiBub3RlT24udGlja3MsXG4gICAgICAgICAgLy8gc3RhcnRNaWxsaXM6IG5vdGVPbi5taWxsaXMsXG4gICAgICAgICAgLy8gZW5kVGlja3M6IGUudGlja3MsXG4gICAgICAgICAgLy8gZW5kTWlsbGlzOiBlLm1pbGxpcyxcbiAgICAgICAgfTtcbiAgICAgICAgbm90ZXMucHVzaChub3RlKTtcbiAgICAgICAgZGVsZXRlIHRtcFtpZF07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLy8gY29uc29sZS5sb2cobm90ZXMpO1xuICByZXR1cm4gbm90ZXM7XG59O1xuIiwiaW1wb3J0IHsgZmV0Y2hBcnJheWJ1ZmZlciB9IGZyb20gXCIuL2ZldGNoX2hlbHBlcnNcIjtcbmltcG9ydCB7IHBhcnNlTUlESUZpbGUgfSBmcm9tIFwiLi9wYXJzZU1JRElGaWxlXCI7XG5pbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vdHlwZXMvU29uZ1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU29uZ0Zyb21NSURJRmlsZSA9IGFzeW5jIChhcmc6IHN0cmluZyB8IEFycmF5QnVmZmVyKTogUHJvbWlzZTxTb25nPiA9PiB7XG4gIGxldCBhYjogQXJyYXlCdWZmZXI7XG4gIGlmICh0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKSB7XG4gICAgYWIgPSBhd2FpdCBmZXRjaEFycmF5YnVmZmVyKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgYWIgPSBhcmc7XG4gIH1cbiAgLy8gY29uc3QgeyBoZWFkZXIsIHRpbWVUcmFjaywgdHJhY2tzIH0gPSBwYXJzZU1pZGlGaWxlKGFiKTtcbiAgcmV0dXJuIHBhcnNlTUlESUZpbGUoYWIpO1xufTtcbiIsImltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIi4vdHlwZXMvVHJhY2tcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYWNrID0gKGlkOiBzdHJpbmcpOiBUcmFjayA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgbGF0ZW5jeTogMCxcbiAgICBpbnB1dHM6IFtdLFxuICAgIG91dHB1dHM6IFtdLFxuICB9O1xufTtcbiIsImNvbnN0IHN0YXR1cyA9IChyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoSlNPTiA9ICh1cmw6IHN0cmluZyk6IFByb21pc2U8SlNPTj4gPT5cbiAgLy8gZmV0Y2godXJsLCB7XG4gIC8vICAgbW9kZTogJ25vLWNvcnMnXG4gIC8vIH0pXG4gIGZldGNoKHVybClcbiAgICAudGhlbihzdGF0dXMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoWE1MID0gKHVybDogc3RyaW5nKTogUHJvbWlzZTxYTUxEb2N1bWVudD4gPT5cbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHN0YXR1cylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgLnRoZW4oc3RyID0+IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0ciwgXCJ0ZXh0L3htbFwiKSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEFycmF5YnVmZmVyID0gKHVybDogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4gPT5cbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHN0YXR1cylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKTtcbiIsImxldCBtaWRpQWNjZXNzOiBXZWJNaWRpLk1JRElBY2Nlc3MgfCBudWxsO1xuXG5leHBvcnQgY29uc3QgZ2V0TUlESUFjY2VzcyA9IGFzeW5jICgpOiBQcm9taXNlPFdlYk1pZGkuTUlESUFjY2VzcyB8IG51bGw+ID0+IHtcbiAgaWYgKG1pZGlBY2Nlc3MgIT09IG51bGwgJiYgdHlwZW9mIG1pZGlBY2Nlc3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1pZGlBY2Nlc3MpO1xuICB9XG5cbiAgaWYgKCFuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3MpIHtcbiAgICBtaWRpQWNjZXNzID0gbnVsbDtcbiAgICBjb25zb2xlLmxvZyhcIldlYk1JREkgbm90IHN1cHBvcnRlZFwiKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtYSA9IGF3YWl0IG5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2VzcygpO1xuICAgIC8vIG1pZGlBY2Nlc3Mub25zdGF0ZWNoYW5nZSA9IChlOiBXZWJNaWRpLk1JRElDb25uZWN0aW9uRXZlbnQpID0+IHtcbiAgICAvLyB9O1xuICAgIGlmICghbWEuaW5wdXRzIHx8ICFtYS5vdXRwdXRzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZpcmVmb3ggV2ViTUlESSBBUEkgc3VwcG9ydCBpcyBzdGlsbCBpbiBwcm9ncmVzc1wiKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBtaWRpQWNjZXNzID0gbWE7XG4gICAgcmV0dXJuIG1hO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJNSURJIGNvdWxkIG5vdCBiZSBpbml0aWFsaXplZDpcIiwgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0TUlESVBvcnRzID0gKFxuICBtaWRpQWNjZXNzOiBXZWJNaWRpLk1JRElBY2Nlc3MgfCBudWxsXG4pOiB7XG4gIGlucHV0czogV2ViTWlkaS5NSURJSW5wdXRbXTtcbiAgb3V0cHV0czogV2ViTWlkaS5NSURJT3V0cHV0W107XG59ID0+IHtcbiAgLy8gZXhwb3J0IGNvbnN0IGdldE1JRElEZXZpY2VzID0gKCk6IHsgaW5wdXRzOiBXZWJNaWRpLk1JRElJbnB1dFtdLCBvdXRwdXRzOiBXZWJNaWRpLk1JRElPdXRwdXRbXSB9ID0+IHtcbiAgY29uc3QgaW5wdXRzOiBXZWJNaWRpLk1JRElJbnB1dFtdID0gW107XG4gIGNvbnN0IG91dHB1dHM6IFdlYk1pZGkuTUlESU91dHB1dFtdID0gW107XG4gIGlmIChtaWRpQWNjZXNzKSB7XG4gICAgbWlkaUFjY2Vzcy5pbnB1dHMuZm9yRWFjaChpID0+IHtcbiAgICAgIGlucHV0cy5wdXNoKGkpO1xuICAgIH0pO1xuICAgIG1pZGlBY2Nlc3Mub3V0cHV0cy5mb3JFYWNoKG8gPT4ge1xuICAgICAgb3V0cHV0cy5wdXNoKG8pO1xuICAgIH0pO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKGlucHV0cywgb3V0cHV0cyk7XG4gIHJldHVybiB7IGlucHV0cywgb3V0cHV0cyB9O1xufTtcbiIsIi8vIGJhc2VkIG9uOiBodHRwczovL2dpdGh1Yi5jb20vcHJhdmRvbWlsL2phc21pZC50c1xuXG4vLyBpbXBvcnQgeyBCdWZmZXJSZWFkZXIgfSBmcm9tICdqYXNtaWQudHMnO1xuaW1wb3J0IHVuaXF1aWQgZnJvbSBcInVuaXFpZFwiO1xuaW1wb3J0IHsgQnVmZmVyUmVhZGVyIH0gZnJvbSBcIi4vYnVmZmVycmVhZGVyXCI7XG5pbXBvcnQgeyBNSURJRXZlbnQgfSBmcm9tIFwiLi90eXBlcy9NSURJRXZlbnRcIjtcbmltcG9ydCB7XG4gIFNFUVVFTkNFX05VTUJFUixcbiAgVEVYVCxcbiAgQ09QWVJJR0hUX05PVElDRSxcbiAgVFJBQ0tfTkFNRSxcbiAgSU5TVFJVTUVOVF9OQU1FLFxuICBMWVJJQ1MsXG4gIE1BUktFUixcbiAgQ1VFX1BPSU5ULFxuICBDSEFOTkVMX1BSRUZJWCxcbiAgRU5EX09GX1RSQUNLLFxuICBURU1QTyxcbiAgU01QVEVfT0ZGU0VULFxuICBUSU1FX1NJR05BVFVSRSxcbiAgS0VZX1NJR05BVFVSRSxcbiAgU0VRVUVOQ0VSX1NQRUNJRklDLFxuICBTWVNURU1fRVhDTFVTSVZFLFxuICBESVZJREVEX1NZU1RFTV9FWENMVVNJVkUsXG4gIE5PVEVfT04sXG4gIE5PVEVfT0ZGLFxuICBOT1RFX0FGVEVSVE9VQ0gsXG4gIENPTlRST0xMRVIsXG4gIFBST0dSQU1fQ0hBTkdFLFxuICBDSEFOTkVMX0FGVEVSVE9VQ0gsXG4gIFBJVENIX0JFTkQsXG4gIHNvcnRNSURJRXZlbnRzLFxufSBmcm9tIFwiLi91dGlsL21pZGlcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pbGxpcyB9IGZyb20gXCIuL2NhbGN1bGF0ZU1pbGxpc1wiO1xuaW1wb3J0IHsgVHJhY2sgfSBmcm9tIFwiLi90eXBlcy9UcmFja1wiO1xuaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuL3R5cGVzL1NvbmdcIjtcbmltcG9ydCB7IGNyZWF0ZVRyYWNrIH0gZnJvbSBcIi4vY3JlYXRlVHJhY2tcIjtcbmltcG9ydCB7IGNyZWF0ZU5vdGVzIH0gZnJvbSBcIi4vY3JlYXRlTm90ZXNcIjtcblxudHlwZSBQYXJzZWREYXRhID0ge1xuICBldmVudDogYW55O1xuICBkZWx0YVRpbWU6IG51bWJlcjtcbiAgYnBtPzogbnVtYmVyO1xuICBudW1lcmF0b3I/OiBudW1iZXI7XG4gIGRlbm9taW5hdG9yPzogbnVtYmVyO1xuICB0cmFja05hbWU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNSURJRmlsZShidWZmZXI6IEFycmF5QnVmZmVyTGlrZSk6IFNvbmcge1xuICBjb25zdCByZWFkZXIgPSBuZXcgQnVmZmVyUmVhZGVyKGJ1ZmZlcik7XG5cbiAgY29uc3QgaGVhZGVyID0gcGFyc2VIZWFkZXIocmVhZGVyKTtcbiAgLy8gY29uc3QgeyB0aW1lVHJhY2ssIHRyYWNrcyB9ID0gcGFyc2VUcmFja3MocmVhZGVyLCBoZWFkZXIudGlja3NQZXJCZWF0KVxuICBjb25zdCB7IHRyYWNrcywgZXZlbnRzLCBpbml0aWFsVGVtcG8sIGluaXRpYWxOdW1lcmF0b3IsIGluaXRpYWxEZW5vbWluYXRvciB9ID0gcGFyc2VUcmFja3MoXG4gICAgcmVhZGVyLFxuICAgIGhlYWRlci50aWNrc1BlckJlYXRcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHBwcTogaGVhZGVyLnRpY2tzUGVyQmVhdCxcbiAgICBsYXRlbmN5OiAxNywgLy8gdmFsdWUgaW4gbWlsbGlzZWNvbmRzIC0+IHRoZSBsZW5ndGggb2YgYSBzaW5nbGUgZnJhbWUgQCA2MEh6IHJlZnJlc2ggcmF0ZVxuICAgIGJ1ZmZlclRpbWU6IDEwMCwgLy8gdmFsdWUgaW4gbWlsbGlzZWNvbmRzXG4gICAgdHJhY2tzLFxuICAgIHRyYWNrc0J5SWQ6IHRyYWNrcy5yZWR1Y2UoKGFjYzogeyBbaWQ6IHN0cmluZ106IFRyYWNrIH0sIHZhbHVlKSA9PiB7XG4gICAgICBhY2NbdmFsdWUuaWRdID0gdmFsdWU7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KSxcbiAgICBldmVudHM6IGNhbGN1bGF0ZU1pbGxpcyhldmVudHMsIHtcbiAgICAgIHBwcTogaGVhZGVyLnRpY2tzUGVyQmVhdCxcbiAgICAgIGJwbTogaW5pdGlhbFRlbXBvLFxuICAgIH0pLFxuICAgIG5vdGVzOiBjcmVhdGVOb3RlcyhldmVudHMpLFxuICAgIGluaXRpYWxUZW1wbyxcbiAgICBpbml0aWFsTnVtZXJhdG9yLFxuICAgIGluaXRpYWxEZW5vbWluYXRvcixcbiAgfSBhcyBTb25nO1xufVxuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcihyZWFkZXI6IEJ1ZmZlclJlYWRlcikge1xuICBjb25zdCBoZWFkZXJDaHVuayA9IHJlYWRlci5taWRpQ2h1bmsoKTtcbiAgaWYgKGhlYWRlckNodW5rLmlkICE9PSBcIk1UaGRcIiB8fCBoZWFkZXJDaHVuay5sZW5ndGggIT09IDYpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJCYWQgLm1pZCBmaWxlLCBoZWFkZXIgbm90IGZvdW5kXCIpO1xuICB9XG5cbiAgY29uc3QgaGVhZGVyUmVhZGVyID0gbmV3IEJ1ZmZlclJlYWRlcihoZWFkZXJDaHVuay5kYXRhKTtcbiAgY29uc3QgZm9ybWF0VHlwZSA9IGhlYWRlclJlYWRlci51aW50MTYoKTtcbiAgY29uc3QgdHJhY2tDb3VudCA9IGhlYWRlclJlYWRlci51aW50MTYoKTtcbiAgY29uc3QgdGltZURpdmlzaW9uID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICBpZiAodGltZURpdmlzaW9uICYgMHg4MDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwcmVzc2luZyB0aW1lIGRpdmlzaW9uIGluIFNNVFBFIGZyYW1lcyBpcyBub3Qgc3VwcG9ydGVkIHlldFwiKTtcbiAgfVxuICBjb25zdCB0aWNrc1BlckJlYXQgPSB0aW1lRGl2aXNpb247XG5cbiAgcmV0dXJuIHsgZm9ybWF0VHlwZSwgdHJhY2tDb3VudCwgdGlja3NQZXJCZWF0IH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHJhY2tzKFxuICByZWFkZXI6IEJ1ZmZlclJlYWRlcixcbiAgcHBxOiBudW1iZXJcbik6IHtcbiAgdHJhY2tzOiBUcmFja1tdO1xuICBldmVudHM6IE1JRElFdmVudFtdO1xuICBpbml0aWFsVGVtcG86IG51bWJlcjtcbiAgaW5pdGlhbE51bWVyYXRvcjogbnVtYmVyO1xuICBpbml0aWFsRGVub21pbmF0b3I6IG51bWJlcjtcbn0ge1xuICBsZXQgaW5pdGlhbFRlbXBvID0gLTE7XG4gIGxldCBpbml0aWFsTnVtZXJhdG9yID0gLTE7XG4gIGxldCBpbml0aWFsRGVub21pbmF0b3IgPSAtMTtcbiAgY29uc3QgdHJhY2tzOiBUcmFja1tdID0gW107XG4gIGNvbnN0IGV2ZW50czogTUlESUV2ZW50W10gPSBbXTtcbiAgd2hpbGUgKCFyZWFkZXIuZW9mKCkpIHtcbiAgICBjb25zdCB0cmFja0NodW5rID0gcmVhZGVyLm1pZGlDaHVuaygpO1xuXG4gICAgaWYgKHRyYWNrQ2h1bmsuaWQgIT09IFwiTVRya1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgY2h1bmssIGV4cGVjdGVkIE1UcmssIGdvdCAke3RyYWNrQ2h1bmsuaWR9YCk7XG4gICAgfVxuICAgIGNvbnN0IHRyYWNrSWQgPSBgVC0ke3VuaXF1aWQoKX1gO1xuICAgIGNvbnN0IHRyYWNrID0gY3JlYXRlVHJhY2sodHJhY2tJZCk7XG4gICAgY29uc3QgdHJhY2tUcmFjayA9IG5ldyBCdWZmZXJSZWFkZXIodHJhY2tDaHVuay5kYXRhKTtcbiAgICBsZXQgdGlja3MgPSAwO1xuICAgIGxldCBsYXN0VHlwZUJ5dGUgPSBudWxsO1xuICAgIHdoaWxlICghdHJhY2tUcmFjay5lb2YoKSkge1xuICAgICAgbGV0IGRhdGEgPSBwYXJzZUV2ZW50KHRyYWNrVHJhY2ssIGxhc3RUeXBlQnl0ZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGNvbnN0IHsgZXZlbnQsIGRlbHRhVGltZSwgYnBtLCBudW1lcmF0b3IsIGRlbm9taW5hdG9yLCB0cmFja05hbWUgfSA9IGRhdGE7XG4gICAgICBpZiAoYnBtICYmIGluaXRpYWxUZW1wbyA9PT0gLTEpIHtcbiAgICAgICAgaW5pdGlhbFRlbXBvID0gYnBtO1xuICAgICAgfVxuICAgICAgaWYgKG51bWVyYXRvciAmJiBpbml0aWFsTnVtZXJhdG9yID09PSAtMSkge1xuICAgICAgICBpbml0aWFsTnVtZXJhdG9yID0gbnVtZXJhdG9yO1xuICAgICAgfVxuICAgICAgaWYgKGRlbm9taW5hdG9yICYmIGluaXRpYWxEZW5vbWluYXRvciA9PT0gLTEpIHtcbiAgICAgICAgaW5pdGlhbERlbm9taW5hdG9yID0gZGVub21pbmF0b3I7XG4gICAgICB9XG4gICAgICBpZiAodHJhY2tOYW1lKSB7XG4gICAgICAgIHRyYWNrLm5hbWUgPSB0cmFja05hbWU7XG4gICAgICB9XG4gICAgICB0aWNrcyArPSBkZWx0YVRpbWU7XG4gICAgICAvLyBjb25zb2xlLmxvZygnVElDS1MnLCB0aWNrcywgYnBtLCBudW1lcmF0b3IpO1xuICAgICAgbGFzdFR5cGVCeXRlID0gZXZlbnQudHlwZTtcbiAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgIHRyYWNrSWQsXG4gICAgICAgIHRpY2tzLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRyYWNrcy5wdXNoKHRyYWNrKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXZlbnRzOiBzb3J0TUlESUV2ZW50cyhldmVudHMpLFxuICAgIHRyYWNrcyxcbiAgICBpbml0aWFsVGVtcG8sXG4gICAgaW5pdGlhbE51bWVyYXRvcixcbiAgICBpbml0aWFsRGVub21pbmF0b3IsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRXZlbnQocmVhZGVyOiBCdWZmZXJSZWFkZXIsIGxhc3RUeXBlQnl0ZTogbnVtYmVyIHwgbnVsbCk6IFBhcnNlZERhdGEge1xuICBjb25zdCBkZWx0YVRpbWUgPSByZWFkZXIubWlkaUludCgpO1xuICBsZXQgdHlwZUJ5dGUgPSByZWFkZXIudWludDgoKTtcblxuICAvLyBtZXRhIGV2ZW50czogMHhmZlxuICAvLyBzeXN0ZW0gZXZlbnRzOiAweGYwLCAweGY3XG4gIC8vIG1pZGkgZXZlbnRzOiBhbGwgb3RoZXIgYnl0ZXNcblxuICBpZiAodHlwZUJ5dGUgPT09IDB4ZmYpIHtcbiAgICBjb25zdCBzdWJUeXBlQnl0ZSA9IHJlYWRlci51aW50OCgpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHJlYWRlci5taWRpSW50KCk7XG5cbiAgICBzd2l0Y2ggKHN1YlR5cGVCeXRlKSB7XG4gICAgICAvLyBzZXF1ZW5jZSBudW1iZXJcbiAgICAgIGNhc2UgMHgwMDpcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBzZXF1ZW5jZU51bWJlciBldmVudCBpcyAyLCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBTRVFVRU5DRV9OVU1CRVIsXG4gICAgICAgICAgICBudW1iZXI6IHJlYWRlci51aW50MTYoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHRleHRcbiAgICAgIGNhc2UgMHgwMTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBURVhULFxuICAgICAgICAgICAgdGV4dDogcmVhZGVyLnN0cmluZyhsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gY29weXJpZ2h0XG4gICAgICBjYXNlIDB4MDI6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogQ09QWVJJR0hUX05PVElDRSxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHRyYWNrIG5hbWVcbiAgICAgIGNhc2UgMHgwMzpcbiAgICAgICAgY29uc3QgdHJhY2tOYW1lID0gcmVhZGVyLnN0cmluZyhsZW5ndGgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRSQUNLX05BTUUsXG4gICAgICAgICAgICB0ZXh0OiB0cmFja05hbWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgICAgdHJhY2tOYW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gaW5zdHJ1bWVudCBuYW1lXG4gICAgICBjYXNlIDB4MDQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogSU5TVFJVTUVOVF9OQU1FLFxuICAgICAgICAgICAgdGV4dDogcmVhZGVyLnN0cmluZyhsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gbHlyaWNzXG4gICAgICBjYXNlIDB4MDU6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogTFlSSUNTLFxuICAgICAgICAgICAgdGV4dDogcmVhZGVyLnN0cmluZyhsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gbWFya2VyXG4gICAgICBjYXNlIDB4MDY6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogTUFSS0VSLFxuICAgICAgICAgICAgdGV4dDogcmVhZGVyLnN0cmluZyhsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gY3VlIHBvaW50XG4gICAgICBjYXNlIDB4MDc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogQ1VFX1BPSU5ULFxuICAgICAgICAgICAgdGV4dDogcmVhZGVyLnN0cmluZyhsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gY2hhbm5lbCBwcmVmaXhcbiAgICAgIGNhc2UgMHgyMDpcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBtaWRpQ2hhbm5lbFByZWZpeCBldmVudCBpcyAxLCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBDSEFOTkVMX1BSRUZJWCxcbiAgICAgICAgICAgIGNoYW5uZWw6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gZW5kIG9mIHRyYWNrXG4gICAgICBjYXNlIDB4MmY6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3IgZW5kT2ZUcmFjayBldmVudCBpcyAwLCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgZGVzY3I6IEVORF9PRl9UUkFDSyxcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0ZW1wb1xuICAgICAgY2FzZSAweDUxOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHNldFRlbXBvIGV2ZW50IGlzIDMsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtaWNyb3NlY29uZHNQZXJCZWF0ID0gKHJlYWRlci51aW50OCgpIDw8IDE2KSArIChyZWFkZXIudWludDgoKSA8PCA4KSArIHJlYWRlci51aW50OCgpO1xuICAgICAgICBjb25zdCBicG0gPSA2MDAwMDAwMCAvIG1pY3Jvc2Vjb25kc1BlckJlYXQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogVEVNUE8sXG4gICAgICAgICAgICBicG0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBicG0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gc21wdGUgb2Zmc2V0XG4gICAgICBjYXNlIDB4NTQ6XG4gICAgICAgIGlmIChsZW5ndGggIT0gNSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBzbXB0ZU9mZnNldCBldmVudCBpcyA1LCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaG91ckJ5dGUgPSByZWFkZXIudWludDgoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBTTVBURV9PRkZTRVQsXG4gICAgICAgICAgICBmcmFtZVJhdGU6IGdldEZyYW1lUmF0ZShob3VyQnl0ZSksXG4gICAgICAgICAgICBob3VyOiBob3VyQnl0ZSAmIDB4MWYsXG4gICAgICAgICAgICBtaW46IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgc2VjOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICAgIGZyYW1lOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICAgIHN1YkZyYW1lOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHRpbWUgc2lnbmF0dXJlXG4gICAgICBjYXNlIDB4NTg6XG4gICAgICAgIGlmIChsZW5ndGggIT0gNCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciB0aW1lU2lnbmF0dXJlIGV2ZW50IGlzIDQsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBudW1lcmF0b3IgPSByZWFkZXIudWludDgoKTtcbiAgICAgICAgY29uc3QgZGVub21pbmF0b3IgPSBNYXRoLnBvdygyLCByZWFkZXIudWludDgoKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogVElNRV9TSUdOQVRVUkUsXG4gICAgICAgICAgICBudW1lcmF0b3IsXG4gICAgICAgICAgICBkZW5vbWluYXRvcixcbiAgICAgICAgICAgIG1ldHJvbm9tZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICB0aGlydHlTZWNvbmRzOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG51bWVyYXRvcixcbiAgICAgICAgICBkZW5vbWluYXRvcixcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBrZXkgc2lnbmF0dXJlXG4gICAgICBjYXNlIDB4NTk6XG4gICAgICAgIGlmIChsZW5ndGggIT0gMikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBrZXlTaWduYXR1cmUgZXZlbnQgaXMgMiwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogS0VZX1NJR05BVFVSRSxcbiAgICAgICAgICAgIGtleTogcmVhZGVyLmludDgoKSxcbiAgICAgICAgICAgIHNjYWxlOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHNlcXVlbmNlciBzcGVjaWZpY1xuICAgICAgY2FzZSAweDdmOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFNFUVVFTkNFUl9TUEVDSUZJQyxcbiAgICAgICAgICAgIGRhdGE6IHJlYWRlci5yZWFkKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB1bmRlZmluZWRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogXCJ1bmRlZmluZWRcIixcbiAgICAgICAgICAgIGRhdGE6IHJlYWRlci5yZWFkKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVCeXRlID09PSAweGYwKSB7XG4gICAgLy8gc3lzdGVtIGV4Y2x1c2l2ZVxuICAgIGNvbnN0IGxlbmd0aCA9IHJlYWRlci5taWRpSW50KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV2ZW50OiB7XG4gICAgICAgIHR5cGU6IDB4ZjAsXG4gICAgICAgIGRlc2NyOiBTWVNURU1fRVhDTFVTSVZFLFxuICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgfSxcbiAgICAgIGRlbHRhVGltZSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVCeXRlID09PSAweGY3KSB7XG4gICAgLy8gZGl2aWRlZCBzeXN0ZW0gZXhjbHVzaXZlXG4gICAgY29uc3QgbGVuZ3RoID0gcmVhZGVyLm1pZGlJbnQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQ6IHtcbiAgICAgICAgdHlwZTogMHhmMCxcbiAgICAgICAgZGVzY3I6IERJVklERURfU1lTVEVNX0VYQ0xVU0lWRSxcbiAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgIH0sXG4gICAgICBkZWx0YVRpbWUsXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvKipcbiAgICAgKiBydW5uaW5nIHN0YXR1cyAtIHJldXNlIGxhc3RFdmVudFR5cGVCeXRlIGFzIHRoZSBldmVudCB0eXBlXG4gICAgICogdHlwZUJ5dGUgaXMgYWN0dWFsbHkgdGhlIGZpcnN0IHBhcmFtZXRlclxuICAgICAqL1xuICAgIGNvbnN0IGlzUnVubmluZ1N0YXR1cyA9ICh0eXBlQnl0ZSAmIDBiMTAwMDAwMDApID09PSAwO1xuICAgIGNvbnN0IHZhbHVlID0gaXNSdW5uaW5nU3RhdHVzID8gdHlwZUJ5dGUgOiByZWFkZXIudWludDgoKTtcbiAgICB0eXBlQnl0ZSA9IGlzUnVubmluZ1N0YXR1cyA/IChsYXN0VHlwZUJ5dGUgPT09IG51bGwgPyAwIDogbGFzdFR5cGVCeXRlKSA6IHR5cGVCeXRlO1xuXG4gICAgLy8gY29uc29sZS5sb2coaXNSdW5uaW5nU3RhdHVzLCB0eXBlQnl0ZSwgdmFsdWUpO1xuXG4gICAgY29uc3QgY2hhbm5lbCA9IHR5cGVCeXRlICYgMHgwZjtcbiAgICAvLyBjaGFubmVsc1tjaGFubmVsXSA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKHR5cGVCeXRlID4+IDQpIHtcbiAgICAgIC8vIG5vdGUgb2ZmXG4gICAgICBjYXNlIDB4MDg6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4ODAsXG4gICAgICAgICAgICBkZXNjcjogTk9URV9PRkYsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgbm90ZU51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICB2ZWxvY2l0eTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBub3RlIG9uXG4gICAgICBjYXNlIDB4MDk6XG4gICAgICAgIGNvbnN0IHZlbG9jaXR5ID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHZlbG9jaXR5ID09PSAwID8gMHg4MCA6IDB4OTAsXG4gICAgICAgICAgICBkZXNjcjogdmVsb2NpdHkgPT09IDAgPyBOT1RFX09GRiA6IE5PVEVfT04sXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgbm90ZU51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICB2ZWxvY2l0eSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIG5vdGUgYWZ0ZXJ0b3VjaFxuICAgICAgY2FzZSAweDBhOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGEwLFxuICAgICAgICAgICAgZGVzY3I6IE5PVEVfQUZURVJUT1VDSCxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgIGFtb3VudDogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjb250cm9sbGVyXG4gICAgICBjYXNlIDB4MGI6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4YjAsXG4gICAgICAgICAgICBkZXNjcjogQ09OVFJPTExFUixcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBjb250cm9sbGVyTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHByb2dyYW0gY2hhbmdlXG4gICAgICBjYXNlIDB4MGM6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4YzAsXG4gICAgICAgICAgICBkZXNjcjogUFJPR1JBTV9DSEFOR0UsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgcHJvZ3JhbTogdmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjaGFubmVsIGFmdGVydG91Y2hcbiAgICAgIGNhc2UgMHgwZDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhkMCxcbiAgICAgICAgICAgIGRlc2NyOiBDSEFOTkVMX0FGVEVSVE9VQ0gsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgYW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHBpdGNoIGJlbmRcbiAgICAgIGNhc2UgMHgwZTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhlMCxcbiAgICAgICAgICAgIGRlc2NyOiBQSVRDSF9CRU5ELFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSArIChyZWFkZXIudWludDgoKSA8PCA3KSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcblxuICAgICAgLy8gZGVmYXVsdDpcbiAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgIC8vICAgICBldmVudDoge1xuICAgICAgLy8gICAgICAgdHlwZTogdHlwZUJ5dGUgPj4gNCxcbiAgICAgIC8vICAgICAgIGRlc2NyOiBcInVucmVjb2duaXplZFwiLFxuICAgICAgLy8gICAgICAgY2hhbm5lbCxcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICAgIGRlbHRhVGltZSxcbiAgICAgIC8vICAgfTtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coYFVucmVjb2duaXplZCBNSURJIGV2ZW50IHR5cGUgYnl0ZTogJHt0eXBlQnl0ZX0gKGZpeCB0aGlzKWApO1xuICByZXR1cm4ge1xuICAgIGV2ZW50OiB7XG4gICAgICB0eXBlOiB0eXBlQnl0ZSA9PT0gMjU1ID8gMCA6IHR5cGVCeXRlLFxuICAgIH0sXG4gICAgZGVsdGFUaW1lLFxuICB9O1xuICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCBNSURJIGV2ZW50IHR5cGUgYnl0ZTogJHt0eXBlQnl0ZX1gKTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJhbWVSYXRlKGhvdXJCeXRlOiBudW1iZXIpIHtcbiAgc3dpdGNoIChob3VyQnl0ZSAmIDBiMTEwMDAwMCkge1xuICAgIGNhc2UgMHgwMDpcbiAgICAgIHJldHVybiAyNDtcbiAgICBjYXNlIDB4MjA6XG4gICAgICByZXR1cm4gMjU7XG4gICAgY2FzZSAweDQwOlxuICAgICAgcmV0dXJuIDI5O1xuICAgIGNhc2UgMHg2MDpcbiAgICAgIHJldHVybiAzMDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDA7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNvbmcgfSBmcm9tIFwiLi90eXBlcy9Tb25nXCI7XG5pbXBvcnQgeyBNSURJRXZlbnQsIE5vdGVPbkV2ZW50IH0gZnJvbSBcIi4vdHlwZXMvTUlESUV2ZW50XCI7XG5pbXBvcnQgeyBOT1RFX09OLCBOT1RFX09GRiB9IGZyb20gXCIuL3V0aWwvbWlkaVwiO1xuXG50eXBlIEFyZ3MgPSB7XG4gIHNvbmc6IFNvbmc7XG4gIG1pbGxpczogbnVtYmVyO1xuICBpbmRleDogbnVtYmVyO1xuICBvdXRwdXRzPzogV2ViTWlkaS5NSURJT3V0cHV0TWFwO1xufTtcbmV4cG9ydCBjb25zdCBzY2hlZHVsZSA9ICh7XG4gIHNvbmcsXG4gIGluZGV4LFxuICBtaWxsaXMsXG4gIG91dHB1dHMsXG59OiBBcmdzKTogeyBtaWxsaXM6IG51bWJlcjsgaW5kZXg6IG51bWJlcjsgc2NoZWR1bGVkOiBNSURJRXZlbnRbXSB9ID0+IHtcbiAgY29uc3QgdHMgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgY29uc3QgeyBldmVudHMgfSA9IHNvbmc7XG4gIGNvbnN0IHNjaGVkdWxlZCA9IFtdO1xuICAvLyBsZXQgbGFzdE5vdGVOdW1iZXI6IG51bWJlciA9IC0xO1xuICAvLyBsZXQgbGFzdE5vdGVUeXBlOiBudW1iZXIgPSAtMTtcbiAgd2hpbGUgKGluZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2luZGV4XTtcbiAgICBpZiAoIWV2ZW50Lm1pbGxpcyB8fCAhZXZlbnQudHJhY2tJZCkge1xuICAgICAgLy8gYnJlYWs7XG4gICAgICBpbmRleCsrO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQubWlsbGlzIDwgbWlsbGlzICsgc29uZy5idWZmZXJUaW1lKSB7XG4gICAgICBzY2hlZHVsZWQucHVzaChldmVudCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50aWNrcywgZXZlbnQuZGVzY3IsIChldmVudCBhcyBOb3RlT25FdmVudCkubm90ZU51bWJlcik7XG4gICAgICBjb25zdCB0cmFjayA9IHNvbmcudHJhY2tzQnlJZFtldmVudC50cmFja0lkXTtcbiAgICAgIHRyYWNrLm91dHB1dHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgIGlmIChldmVudC5kZXNjciA9PT0gTk9URV9PTiB8fCBldmVudC5kZXNjciA9PT0gTk9URV9PRkYpIHtcbiAgICAgICAgICBjb25zdCBlID0gZXZlbnQgYXMgTm90ZU9uRXZlbnQ7XG4gICAgICAgICAgaWYgKGV2ZW50Lm1pbGxpcykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudHlwZSwgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlcik7XG4gICAgICAgICAgICBsZXQgdGltZSA9IHRzICsgc29uZy5sYXRlbmN5ICsgdHJhY2subGF0ZW5jeSArIChldmVudC5taWxsaXMgLSBtaWxsaXMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRbXCJub3RlTnVtYmVyXCJdLCBldmVudC5kZXNjciwgZXZlbnQubWlsbGlzLCBtaWxsaXMsIHRpbWUsIHRzLCB0aW1lIC0gdHMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5ub3RlTnVtYmVyLCBsYXN0Tm90ZU51bWJlciwgbGFzdE5vdGVUeXBlKTtcbiAgICAgICAgICAgIC8vIGlmIChlLm5vdGVOdW1iZXIgPT09IGxhc3ROb3RlTnVtYmVyICYmIGxhc3ROb3RlVHlwZSA9PT0gMHg5MCkge1xuICAgICAgICAgICAgLy8gICBpZiAoZS5kZXNjciA9PT0gTk9URV9PTikge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVwZWF0aW5nIG5vdGVzXCIpO1xuICAgICAgICAgICAgLy8gICAgIHRpbWUgKz0gMTtcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gbGFzdE5vdGVOdW1iZXIgPSBlLm5vdGVOdW1iZXI7XG4gICAgICAgICAgICAvLyBsYXN0Tm90ZVR5cGUgPSBlLnR5cGU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50eXBlICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHkpO1xuICAgICAgICAgICAgLy8gcXVpY2sgZml4IGZvciByZXBlYXRpbmcgbm90ZXNcbiAgICAgICAgICAgIGlmIChlLmRlc2NyID09PSBOT1RFX09OKSB7XG4gICAgICAgICAgICAgIHRpbWUgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dHNcbiAgICAgICAgICAgICAgPy5nZXQoaWQpXG4gICAgICAgICAgICAgID8uc2VuZChbZXZlbnQudHlwZSArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5XSwgdGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZygnW1NDSEVEVUxFRF0nLCBzY2hlZHVsZWQubWFwKGUgPT4gW2UudGlja3MsIGUubWlsbGlzXSkpO1xuICByZXR1cm4geyBtaWxsaXMsIGluZGV4LCBzY2hlZHVsZWQgfTtcbn07XG4iLCJpbXBvcnQgeyBNSURJRXZlbnQgfSBmcm9tIFwiLi4vdHlwZXMvTUlESUV2ZW50XCI7XG5cbmV4cG9ydCBjb25zdCBTRVFVRU5DRV9OVU1CRVIgPSBcInNlcXVlbmNlIG51bWJlclwiO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSBcInRleHRcIjtcbmV4cG9ydCBjb25zdCBDT1BZUklHSFRfTk9USUNFID0gXCJjb3B5cmlnaHQgbm90aWNlXCI7XG5leHBvcnQgY29uc3QgVFJBQ0tfTkFNRSA9IFwidHJhY2sgbmFtZVwiO1xuZXhwb3J0IGNvbnN0IElOU1RSVU1FTlRfTkFNRSA9IFwiaW5zdHJ1bWVudCBuYW1lXCI7XG5leHBvcnQgY29uc3QgTFlSSUNTID0gXCJseXJpY3NcIjtcbmV4cG9ydCBjb25zdCBNQVJLRVIgPSBcIm1hcmtlclwiO1xuZXhwb3J0IGNvbnN0IENVRV9QT0lOVCA9IFwiY3VlIHBvaW50XCI7XG5leHBvcnQgY29uc3QgQ0hBTk5FTF9QUkVGSVggPSBcImNoYW5uZWwgcHJlZml4XCI7XG5leHBvcnQgY29uc3QgRU5EX09GX1RSQUNLID0gXCJlbmQgb2YgdHJhY2tcIjtcbmV4cG9ydCBjb25zdCBURU1QTyA9IFwidGVtcG9cIjtcbmV4cG9ydCBjb25zdCBTTVBURV9PRkZTRVQgPSBcInNtcHRlIG9mZnNldFwiO1xuZXhwb3J0IGNvbnN0IFRJTUVfU0lHTkFUVVJFID0gXCJ0aW1lIHNpZ25hdHVyZVwiO1xuZXhwb3J0IGNvbnN0IEtFWV9TSUdOQVRVUkUgPSBcImtleSBzaWduYXR1cmVcIjtcbmV4cG9ydCBjb25zdCBTRVFVRU5DRVJfU1BFQ0lGSUMgPSBcInNlcXVlbmNlciBzcGVjaWZpY1wiO1xuZXhwb3J0IGNvbnN0IFNZU1RFTV9FWENMVVNJVkUgPSBcInN5c3RlbSBleGNsdXNpdmVcIjtcbmV4cG9ydCBjb25zdCBESVZJREVEX1NZU1RFTV9FWENMVVNJVkUgPSBcImRpdmlkZWQgc3lzdGVtIGV4Y2x1c2l2ZVwiO1xuZXhwb3J0IGNvbnN0IE5PVEVfT04gPSBcIm5vdGUgb25cIjtcbmV4cG9ydCBjb25zdCBOT1RFX09GRiA9IFwibm90ZSBvZmZcIjtcbmV4cG9ydCBjb25zdCBOT1RFX0FGVEVSVE9VQ0ggPSBcIm5vdGUgYWZ0ZXJ0b3VjaFwiO1xuZXhwb3J0IGNvbnN0IENPTlRST0xMRVIgPSBcImNvbnRyb2xsZXJcIjtcbmV4cG9ydCBjb25zdCBQUk9HUkFNX0NIQU5HRSA9IFwicHJvZ3JhbSBjaGFuZ2VcIjtcbmV4cG9ydCBjb25zdCBDSEFOTkVMX0FGVEVSVE9VQ0ggPSBcImNoYW5uZWwgYWZ0ZXJ0b3VjaFwiO1xuZXhwb3J0IGNvbnN0IFBJVENIX0JFTkQgPSBcInBpdGNoIGJlbmRcIjtcblxuY29uc3QgZGVzY3JpcHRpb25zOiB7IFtpbmRleDogbnVtYmVyXTogeyBbaW5kZXg6IG51bWJlcl06IHN0cmluZyB9IHwgc3RyaW5nIH0gPSB7XG4gIDB4ZmY6IHtcbiAgICAweDAwOiBcInNlcXVlbmNlIG51bWJlclwiLFxuICAgIDB4MDE6IFwidGV4dFwiLFxuICAgIDB4MDI6IFwiY29weXJpZ2h0IG5vdGljZVwiLFxuICAgIDB4MDM6IFwidHJhY2sgbmFtZVwiLFxuICAgIDB4MDQ6IFwiaW5zdHJ1bWVudCBuYW1lXCIsXG4gICAgMHgwNTogXCJseXJpY3NcIixcbiAgICAweDA2OiBcIm1hcmtlclwiLFxuICAgIDB4MDc6IFwiY3VlIHBvaW50XCIsXG4gICAgMHgyMDogXCJjaGFubmVsIHByZWZpeFwiLFxuICAgIDB4MmY6IFwiZW5kIG9mIHRyYWNrXCIsXG4gICAgMHg1MTogXCJ0ZW1wb1wiLFxuICAgIDB4NTQ6IFwic21wdGUgb2Zmc2V0XCIsXG4gICAgMHg1ODogXCJ0aW1lIHNpZ25hdHVyZVwiLFxuICAgIDB4NTk6IFwia2V5IHNpZ25hdHVyZVwiLFxuICAgIDB4N2Y6IFwic2VxdWVuY2VyIHNwZWNpZmljXCIsXG4gIH0sXG4gIDB4ZjA6IFwic3lzdGVtIGV4Y2x1c2l2ZVwiLFxuICAweGY3OiBcImRpdmlkZWQgc3lzZXhcIixcbiAgMHg4MDogXCJub3RlIG9uXCIsXG4gIDB4OTA6IFwibm90ZSBvZmZcIixcbiAgMHhhMDogXCJub3RlIGFmdGVydG91Y2hcIixcbiAgMHhiMDogXCJjb250cm9sbGVyXCIsXG4gIDB4YzA6IFwicHJvZ3JhbSBjaGFuZ2VcIixcbiAgMHhkMDogXCJjaGFubmVsIGFmdGVydG91Y2hcIixcbiAgMHhlMDogXCJwaXRjaCBiZW5kXCIsXG59O1xuXG5leHBvcnQgY29uc3Qgbm90ZU5hbWVzID0ge1xuICBzaGFycDogW1wiQ1wiLCBcIkMjXCIsIFwiRFwiLCBcIkQjXCIsIFwiRVwiLCBcIkZcIiwgXCJGI1wiLCBcIkdcIiwgXCJHI1wiLCBcIkFcIiwgXCJBI1wiLCBcIkJcIl0sXG4gIGZsYXQ6IFtcIkNcIiwgXCJEYlwiLCBcIkRcIiwgXCJFYlwiLCBcIkVcIiwgXCJGXCIsIFwiR2JcIiwgXCJHXCIsIFwiQWJcIiwgXCJBXCIsIFwiQmJcIiwgXCJCXCJdLFxuICBcImVuaGFybW9uaWMtc2hhcnBcIjogW1wiQiNcIiwgXCJDI1wiLCBcIkMjI1wiLCBcIkQjXCIsIFwiRCMjXCIsIFwiRSNcIiwgXCJGI1wiLCBcIkYjI1wiLCBcIkcjXCIsIFwiRyMjXCIsIFwiQSNcIiwgXCJBIyNcIl0sXG4gIFwiZW5oYXJtb25pYy1mbGF0XCI6IFtcIkRiYlwiLCBcIkRiXCIsIFwiRWJiXCIsIFwiRWJcIiwgXCJGYlwiLCBcIkdiYlwiLCBcIkdiXCIsIFwiQWJiXCIsIFwiQWJcIiwgXCJCYmJcIiwgXCJCYlwiLCBcIkNiXCJdLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldE1pZGlFdmVudERlc2NyaXB0aW9uID0gKHR5cGU6IG51bWJlciwgc3ViVHlwZT86IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGlmICh0eXBlb2Ygc3ViVHlwZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbnNbdHlwZV0gYXMgc3RyaW5nO1xuICB9XG4gIHJldHVybiBkZXNjcmlwdGlvbnNbdHlwZV1bc3ViVHlwZV0gfHwgXCJ1bmRlZmluZWRcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNaWRpTWVzc2FnZUV2ZW50ID0gKGV2ZW50OiBNSURJRXZlbnQpOiBudW1iZXJbXSA9PiB7XG4gIHN3aXRjaCAoZXZlbnQuZGVzY3IpIHtcbiAgICBjYXNlIE5PVEVfT046XG4gICAgICByZXR1cm4gWzB4OTAgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eV07XG4gICAgY2FzZSBOT1RFX09GRjpcbiAgICAgIHJldHVybiBbMHg4MCArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5XTtcbiAgfVxuICByZXR1cm4gWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5vdGVOdW1iZXIgPSAobmFtZTogc3RyaW5nLCBvY3RhdmU6IG51bWJlciwgbW9kZTogc3RyaW5nID0gXCJzaGFycFwiKTogbnVtYmVyID0+IHtcbiAgLy8gbGV0IGluZGV4ID0gLTE7XG4gIC8vIGNvbnN0IG1vZGVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobm90ZU5hbWVzKTtcbiAgLy8gZm9yIChsZXQgaSA9IDAsIG1heGkgPSBtb2Rlcy5sZW5ndGg7IGkgPCBtYXhpOyBpKyspIHtcbiAgLy8gICBjb25zdCBuYW1lcyA9IG1vZGVzW2ldO1xuICAvLyAgIGZvciAobGV0IGogPSAwLCBtYXhqID0gbmFtZXMubGVuZ3RoOyBqIDwgbWF4ajsgaisrKSB7XG4gIC8vICAgICBpZiAobW9kZVtqXSA9PT0gbmFtZSkge1xuICAvLyAgICAgICBpbmRleCA9IGk7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuICBsZXQgaW5kZXggPSAtMTtcbiAgY29uc3QgbW9kZXMgPSBPYmplY3QudmFsdWVzKG5vdGVOYW1lcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuYW1lcyA9IG1vZGVzW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWVzW2pdLCBuYW1lKTtcbiAgICAgIGlmIChuYW1lc1tqXSA9PT0gbmFtZSkge1xuICAgICAgICBpbmRleCA9IGo7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyhuYW1lLCBvY3RhdmUsIGluZGV4KTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8vbnVtYmVyID0gKGluZGV4ICsgMTIpICsgKG9jdGF2ZSAqIDEyKSArIDEyOyAvLyDihpIgaW4gQ3ViYXNlIGNlbnRyYWwgQyA9IEMzIGluc3RlYWQgb2YgQzRcbiAgcmV0dXJuIGluZGV4ICsgMTIgKyBvY3RhdmUgKiAxMjsgLy8g4oaSIG1pZGkgc3RhbmRhcmQgKyBzY2llbnRpZmljIG5hbWluZywgc2VlOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01pZGRsZV9DIGFuZCBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NjaWVudGlmaWNfcGl0Y2hfbm90YXRpb25cbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0TUlESUV2ZW50cyA9IChldmVudHM6IE1JRElFdmVudFtdKTogTUlESUV2ZW50W10gPT5cbiAgZXZlbnRzLnNvcnQoKGE6IE1JRElFdmVudCwgYjogTUlESUV2ZW50KSA9PiB7XG4gICAgaWYgKGEudGlja3MgPCBiLnRpY2tzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChhLnRpY2tzID4gYi50aWNrcykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgICAvLyB9IGVsc2UgaWYgKGEudHlwZSA9PT0gMHg4MCAmJiBiLnR5cGUgPT09IDB4OTApIHtcbiAgICAgIC8vICAgLy8gbm90ZSBvZmYgYmVmb3JlIG5vdGUgb25cbiAgICAgIC8vICAgcmV0dXJuIC0xO1xuICAgICAgLy8gfSBlbHNlIGlmIChhLnR5cGUgPT09IDB4NTEgfHwgYS50eXBlID09PSAweDU4KSB7XG4gICAgICAvLyAgIC8vIHRlbXBvIGFuZCB0aW1lIHNpZ25hdHVyZSBldmVudHMgZmlyc3RcbiAgICAgIC8vICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVEb3VibGVFdmVudHMgPSAoZXZlbnRzOiBNSURJRXZlbnRbXSk6IE1JRElFdmVudFtdID0+IHtcbiAgLy8gdmFyIGksIG1heGkgPSBldmVudHMubGVuZ3RoLFxuICAvLyAgIGV2ZW50LCBldmVudElkLCBsYXN0SWQsXG4gIC8vICAgcmVzdWx0ID0gW107XG5cbiAgLy8gZXZlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgLy8gICByZXR1cm4gYS5ldmVudE51bWJlciAtIGIuZXZlbnROdW1iZXI7XG4gIC8vIH0pO1xuXG4gIC8vIGZvciAoaSA9IDA7IGkgPCBtYXhpOyBpKyspIHtcbiAgLy8gICBldmVudCA9IGV2ZW50c1tpXTtcbiAgLy8gICBldmVudElkID0gZXZlbnQuaWQ7XG4gIC8vICAgaWYgKGV2ZW50SWQgIT09IGxhc3RJZCkge1xuICAvLyAgICAgcmVzdWx0LnB1c2goZXZlbnQpO1xuICAvLyAgIH1cbiAgLy8gICBsYXN0SWQgPSBldmVudElkO1xuICAvLyB9XG4gIC8vIHJldHVybiByZXN1bHQ7XG4gIHJldHVybiBbXTtcbn07XG4iLCIvLyBpbXBvcnQgXCJqenpcIjtcbmltcG9ydCB7IHNjaGVkdWxlLCBnZXRDdXJyZW50RXZlbnRJbmRleCB9IGZyb20gXCIuLi8uLi9zcmMvc2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBnZXRNSURJQWNjZXNzIH0gZnJvbSBcIi4uLy4uL3NyYy9nZXRNSURJQWNjZXNzXCI7XG5pbXBvcnQgeyBnZXRNSURJUG9ydHMgfSBmcm9tIFwiLi4vLi4vc3JjL2dldE1JRElQb3J0c1wiO1xuaW1wb3J0IHsgY3JlYXRlU29uZ0Zyb21NSURJRmlsZSB9IGZyb20gXCIuLi8uLi9zcmMvY3JlYXRlU29uZ0Zyb21NSURJRmlsZVwiO1xuXG5jb25zdCB1cmwgPSBcIi4uLy4uL2Fzc2V0cy9taW51dGVfd2FsdHoubWlkXCI7XG4vLyBjb25zdCB1cmwgPSAnLi4vLi4vYXNzZXRzL21vems1NDVhLm1pZCc7XG4vLyBjb25zdCB1cmwgPSAnLi4vLi4vYXNzZXRzL21vems1NDVhX211c2VzY29yZS5taWQnO1xuXG5jb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtYSA9IGF3YWl0IGdldE1JRElBY2Nlc3MoKTtcbiAgY29uc3Qgc29uZyA9IGF3YWl0IGNyZWF0ZVNvbmdGcm9tTUlESUZpbGUodXJsKTtcbiAgY29uc3QgeyBpbnB1dHMsIG91dHB1dHMgfSA9IGdldE1JRElQb3J0cyhtYSk7XG4gIHNvbmcudHJhY2tzLmZvckVhY2godHJhY2sgPT4ge1xuICAgIHRyYWNrLm91dHB1dHMucHVzaCguLi5vdXRwdXRzLm1hcChvID0+IG8uaWQpKTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHNvbmcpO1xuXG4gIGxldCBtaWxsaXMgPSAzMDAwO1xuICBsZXQgaW5kZXggPSBnZXRDdXJyZW50RXZlbnRJbmRleChzb25nLCBtaWxsaXMpO1xuICAvLyBjb25zb2xlLmxvZygnU1RBUlQgSU5ERVgnLCBpbmRleCk7XG4gIGxldCBzdGFydDogbnVtYmVyID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGNvbnN0IHBsYXkgPSAoYTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdHMgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0cywgYSk7XG4gICAgLy8gY29uc3QgcHJvZ3Jlc3MgPSB0cyAtIGE7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSB0cyAtIHN0YXJ0O1xuICAgIHN0YXJ0ID0gdHM7XG4gICAgLy8gY29uc3QgcHJvZ3Jlc3MgPSBhIC0gc3RhcnQ7XG4gICAgLy8gc3RhcnQgPSBhO1xuICAgIGlmIChtaWxsaXMgPCAxMDAwMCkge1xuICAgICAgKHsgaW5kZXgsIG1pbGxpcyB9ID0gc2NoZWR1bGUoe1xuICAgICAgICBzb25nLFxuICAgICAgICBtaWxsaXMsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBvdXRwdXRzOiBtYT8ub3V0cHV0cyxcbiAgICAgIH0pKTtcbiAgICAgIG1pbGxpcyArPSBwcm9ncmVzcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4LCBtaWxsaXMpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGEgPT4ge1xuICAgICAgICBwbGF5KGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBwbGF5KHN0YXJ0KTtcbn07XG5cbmluaXQoKTtcblxuLy8gZmV0Y2godXJsKVxuLy8gICAudGhlbihhcnJheUJ1ZmZlcilcbi8vICAgLnRoZW4oYWIgPT4ge1xuLy8gICAgIGNvbnN0IHsgaGVhZGVyLCB0cmFja3MgfSA9IHBhcnNlTWlkaUZpbGUoYWIpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRyYWNrcyk7XG4vLyAgIH0pO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
exports.schedule = exports.getCurrentEventIndex = void 0;
var midi_1 = __webpack_require__(/*! ./util/midi */ "../src/util/midi.ts");
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
                if (event_2.descr === midi_1.NOTE_ON || event_2.descr === midi_1.NOTE_OFF) {
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
                        if (e.descr === midi_1.NOTE_ON) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9idWZmZXJyZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jYWxjdWxhdGVNaWxsaXMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVOb3Rlcy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NyZWF0ZVNvbmdGcm9tTUlESUZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVUcmFjay50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ZldGNoX2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9nZXRNSURJQWNjZXNzLnRzIiwid2VicGFjazovLy8uLi9zcmMvZ2V0TUlESVBvcnRzLnRzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2VNSURJRmlsZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3NjaGVkdWxlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWwvbWlkaS50cyIsIndlYnBhY2s6Ly8vLi9tdXNpY3htbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJtdXNpY3htbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbXVzaWN4bWwvaW5kZXgudHNcIik7XG4iLCIvKiBcbihUaGUgTUlUIExpY2Vuc2UpXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAxOSBIYWzDoXN6IMOBZMOhbSA8bWFpbEBhZGFtaGFsYXN6LmNvbT5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gIFVuaXF1ZSBIZXhhdHJpZGVjaW1hbCBJRCBHZW5lcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBwaWQgPSBwcm9jZXNzICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nKXtcbiAgICB2YXIgbWFjID0gJycsIG5ldHdvcmtJbnRlcmZhY2VzID0gcmVxdWlyZSgnb3MnKS5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGZvcihsZXQgaW50ZXJmYWNlX2tleSBpbiBuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbmV0d29ya0ludGVyZmFjZS5sZW5ndGg7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAhPSAnMDA6MDA6MDA6MDA6MDA6MDAnKXtcbiAgICAgICAgICAgICAgICBtYWMgPSBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYzsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkcmVzcyA9IG1hYyA/IHBhcnNlSW50KG1hYy5yZXBsYWNlKC9cXDp8XFxEKy9naSwgJycpKS50b1N0cmluZygzNikgOiAnJyA7XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCIvLyBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcHJhdmRvbWlsL2phc21pZC50c1xuXG5leHBvcnQgY2xhc3MgQnVmZmVyUmVhZGVyIHtcbiAgcHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIGRhdGE6IERhdGFWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKGJ1ZmZlcjogQXJyYXlCdWZmZXJMaWtlKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5kYXRhID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gIH1cblxuICByZWFkKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuYnVmZmVyLnNsaWNlKHRoaXMucG9zaXRpb24sIHRoaXMucG9zaXRpb24gKyBsZW5ndGgpO1xuICAgIHRoaXMucG9zaXRpb24gKz0gbGVuZ3RoO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGludDgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0SW50OCh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0VWludDgodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHVpbnQxNigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50MTYodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSAyO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHVpbnQzMigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50MzIodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSA0O1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0cmluZyhsZW5ndGg6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoXCJhc2NpaVwiKS5kZWNvZGUodGhpcy5yZWFkKGxlbmd0aCkpO1xuICB9XG5cbiAgZW9mKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID49IHRoaXMuZGF0YS5ieXRlTGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgYSBNSURJLXN0eWxlIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyLlxuICAgKiAoYmlnLWVuZGlhbiB2YWx1ZSBpbiBncm91cHMgb2YgNyBiaXRzLCB3aXRoIHRvcCBiaXQgc2V0IHRvIHNpZ25pZnkgdGhhdCBhbm90aGVyIGJ5dGUgZm9sbG93cylcbiAgICovXG4gIG1pZGlJbnQoKSB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy51aW50OCgpO1xuICAgICAgaWYgKHZhbHVlICYgMGIxMDAwMDAwMCkge1xuICAgICAgICByZXN1bHQgKz0gdmFsdWUgJiAwYjExMTExMTE7XG4gICAgICAgIHJlc3VsdCA8PD0gNztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtaWRpQ2h1bmsoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnN0cmluZyg0KTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnVpbnQzMigpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlYWQobGVuZ3RoKTtcbiAgICByZXR1cm4geyBpZCwgbGVuZ3RoLCBkYXRhIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE1JRElFdmVudCwgVGVtcG9FdmVudCB9IGZyb20gXCIuL3R5cGVzL01JRElFdmVudFwiO1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlTWlsbGlzID0gKFxuICBldmVudHM6IE1JRElFdmVudFtdLFxuICBkYXRhOiB7XG4gICAgcHBxOiBudW1iZXI7XG4gICAgYnBtPzogbnVtYmVyO1xuICAgIHBsYXliYWNrU3BlZWQ/OiBudW1iZXI7XG4gIH1cbik6IE1JRElFdmVudFtdID0+IHtcbiAgbGV0IHsgcHBxLCBicG0gPSAtMSwgcGxheWJhY2tTcGVlZCA9IDEgfSA9IGRhdGE7XG4gIGxldCBtaWxsaXNQZXJUaWNrID0gYnBtID09PSAtMSA/IDAgOiAoKCgxIC8gcGxheWJhY2tTcGVlZCkgKiA2MCkgLyBicG0gLyBwcHEpICogMTAwMDtcbiAgbGV0IHRpY2tzID0gMDtcbiAgbGV0IG1pbGxpcyA9IDA7XG4gIC8vIGNvbnNvbGUubG9nKFwiYnBtXCIsIGJwbSwgbWlsbGlzKTtcbiAgcmV0dXJuIGV2ZW50cy5tYXAoZXZlbnQgPT4ge1xuICAgIGlmICgoZXZlbnQgYXMgVGVtcG9FdmVudCkuYnBtKSB7XG4gICAgICAoeyBicG0gfSA9IGV2ZW50IGFzIFRlbXBvRXZlbnQpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJicG1cIiwgYnBtLCBtaWxsaXMpO1xuICAgICAgbWlsbGlzUGVyVGljayA9ICgoKDEgLyBwbGF5YmFja1NwZWVkKSAqIDYwKSAvIGJwbSAvIHBwcSkgKiAxMDAwO1xuICAgIH1cbiAgICBjb25zdCBkaWZmVGlja3MgPSBldmVudC50aWNrcyAtIHRpY2tzO1xuICAgIG1pbGxpcyArPSBkaWZmVGlja3MgKiBtaWxsaXNQZXJUaWNrO1xuICAgIGV2ZW50Lm1pbGxpcyA9IG1pbGxpcztcbiAgICB0aWNrcyA9IGV2ZW50LnRpY2tzO1xuICAgIHJldHVybiBldmVudDtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgTUlESUV2ZW50LCBOb3RlRXZlbnQsIE5vdGVPbkV2ZW50LCBOb3RlT2ZmRXZlbnQgfSBmcm9tIFwiLi90eXBlcy9NSURJRXZlbnRcIjtcblxuZXhwb3J0IHR5cGUgTUlESU5vdGUgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5vdGVPbjogTm90ZU9uRXZlbnQ7XG4gIG5vdGVPZmY6IE5vdGVPZmZFdmVudDtcbiAgZHVyYXRpb25UaWNrcz86IG51bWJlcjtcbiAgZHVyYXRpb25NaWxsaXM/OiBudW1iZXI7XG4gIHN0YXJ0VGlja3M/OiBudW1iZXI7XG4gIGVuZFRpY2tzPzogbnVtYmVyO1xuICBzdGFydE1pbGxpcz86IG51bWJlcjtcbiAgZW5kTWlsbGlzPzogbnVtYmVyO1xufTtcblxubGV0IGluZGV4ID0gMDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vdGVzID0gKGV2ZW50czogTUlESUV2ZW50W10pOiBNSURJTm90ZVtdID0+IHtcbiAgbGV0IGZpbHRlcmVkOiBOb3RlRXZlbnRbXSA9IGV2ZW50cy5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2codmFsLnR5cGUpO1xuICAgIGlmICh2YWwudHlwZSA9PT0gMHg4MCB8fCB2YWwudHlwZSA9PT0gMHg5MCkge1xuICAgICAgYWNjLnB1c2godmFsIGFzIE5vdGVFdmVudCk7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdIGFzIE5vdGVFdmVudFtdKTtcbiAgLy8gZmlsdGVyZWQgPSBzb3J0TUlESUV2ZW50cyhmaWx0ZXJlZCk7XG4gIGNvbnN0IG5vdGVzOiBNSURJTm90ZVtdID0gW107XG4gIGNvbnN0IHRtcDogeyBbaWQ6IHN0cmluZ106IE5vdGVFdmVudCB9ID0ge307XG4gIGZpbHRlcmVkLmZvckVhY2goZSA9PiB7XG4gICAgY29uc3QgaWQgPSBgJHtlLnRyYWNrSWR9LSR7ZS5ub3RlTnVtYmVyfWA7XG4gICAgLy8gY29uc29sZS5sb2coZS50aWNrcywgZS50eXBlLCBpZCk7XG4gICAgaWYgKGUudHlwZSA9PT0gMHg5MCkge1xuICAgICAgaWYgKHRtcFtpZF0pIHtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKGBub3RlIGV4aXN0ZWQgYWxyZWFkeSEgJHtpZH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcFtpZF0gPSBlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSAweDgwKSB7XG4gICAgICBpZiAoIXRtcFtpZF0pIHtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKGBub3RlIGRvZXNuJ3QgZXhpc3QhICR7aWR9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub3RlT24gPSB0bXBbaWRdO1xuICAgICAgICBjb25zdCBub3RlOiBNSURJTm90ZSA9IHtcbiAgICAgICAgICBpZDogYG5vdGUtJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0tJHtpbmRleCsrfWAsXG4gICAgICAgICAgbm90ZU9uOiBub3RlT24gYXMgTm90ZU9uRXZlbnQsXG4gICAgICAgICAgbm90ZU9mZjogZSxcbiAgICAgICAgICAvLyBkdXJhdGlvblRpY2tzOiBlLnRpY2tzIC0gbm90ZU9uLnRpY2tzLFxuICAgICAgICAgIC8vIGR1cmF0aW9uTWlsbGlzOiBlLm1pbGxpcyAtIG5vdGVPbi5taWxsaXMsXG4gICAgICAgICAgLy8gc3RhcnRUaWNrczogbm90ZU9uLnRpY2tzLFxuICAgICAgICAgIC8vIHN0YXJ0TWlsbGlzOiBub3RlT24ubWlsbGlzLFxuICAgICAgICAgIC8vIGVuZFRpY2tzOiBlLnRpY2tzLFxuICAgICAgICAgIC8vIGVuZE1pbGxpczogZS5taWxsaXMsXG4gICAgICAgIH07XG4gICAgICAgIG5vdGVzLnB1c2gobm90ZSk7XG4gICAgICAgIGRlbGV0ZSB0bXBbaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIC8vIGNvbnNvbGUubG9nKG5vdGVzKTtcbiAgcmV0dXJuIG5vdGVzO1xufTtcbiIsImltcG9ydCB7IGZldGNoQXJyYXlidWZmZXIgfSBmcm9tIFwiLi9mZXRjaF9oZWxwZXJzXCI7XG5pbXBvcnQgeyBwYXJzZU1JRElGaWxlIH0gZnJvbSBcIi4vcGFyc2VNSURJRmlsZVwiO1xuaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuL3R5cGVzL1NvbmdcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNvbmdGcm9tTUlESUZpbGUgPSBhc3luYyAoYXJnOiBzdHJpbmcgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8U29uZz4gPT4ge1xuICBsZXQgYWI6IEFycmF5QnVmZmVyO1xuICBpZiAodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFiID0gYXdhaXQgZmV0Y2hBcnJheWJ1ZmZlcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIGFiID0gYXJnO1xuICB9XG4gIC8vIGNvbnN0IHsgaGVhZGVyLCB0aW1lVHJhY2ssIHRyYWNrcyB9ID0gcGFyc2VNaWRpRmlsZShhYik7XG4gIHJldHVybiBwYXJzZU1JRElGaWxlKGFiKTtcbn07XG4iLCJpbXBvcnQgeyBUcmFjayB9IGZyb20gXCIuL3R5cGVzL1RyYWNrXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFjayA9IChpZDogc3RyaW5nKTogVHJhY2sgPT4ge1xuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGxhdGVuY3k6IDAsXG4gICAgaW5wdXRzOiBbXSxcbiAgICBvdXRwdXRzOiBbXSxcbiAgfTtcbn07XG4iLCJjb25zdCBzdGF0dXMgPSAocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxSZXNwb25zZT4gPT4ge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEpTT04gPSAodXJsOiBzdHJpbmcpOiBQcm9taXNlPEpTT04+ID0+XG4gIC8vIGZldGNoKHVybCwge1xuICAvLyAgIG1vZGU6ICduby1jb3JzJ1xuICAvLyB9KVxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oc3RhdHVzKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFhNTCA9ICh1cmw6IHN0cmluZyk6IFByb21pc2U8WE1MRG9jdW1lbnQ+ID0+XG4gIGZldGNoKHVybClcbiAgICAudGhlbihzdGF0dXMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgIC50aGVuKHN0ciA9PiBuZXcgd2luZG93LkRPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHIsIFwidGV4dC94bWxcIikpO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBcnJheWJ1ZmZlciA9ICh1cmw6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+ID0+XG4gIGZldGNoKHVybClcbiAgICAudGhlbihzdGF0dXMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSk7XG4iLCJsZXQgbWlkaUFjY2VzczogV2ViTWlkaS5NSURJQWNjZXNzIHwgbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldE1JRElBY2Nlc3MgPSBhc3luYyAoKTogUHJvbWlzZTxXZWJNaWRpLk1JRElBY2Nlc3MgfCBudWxsPiA9PiB7XG4gIGlmIChtaWRpQWNjZXNzICE9PSBudWxsICYmIHR5cGVvZiBtaWRpQWNjZXNzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtaWRpQWNjZXNzKTtcbiAgfVxuXG4gIGlmICghbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzKSB7XG4gICAgbWlkaUFjY2VzcyA9IG51bGw7XG4gICAgY29uc29sZS5sb2coXCJXZWJNSURJIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgbWEgPSBhd2FpdCBuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3MoKTtcbiAgICAvLyBtaWRpQWNjZXNzLm9uc3RhdGVjaGFuZ2UgPSAoZTogV2ViTWlkaS5NSURJQ29ubmVjdGlvbkV2ZW50KSA9PiB7XG4gICAgLy8gfTtcbiAgICBpZiAoIW1hLmlucHV0cyB8fCAhbWEub3V0cHV0cykge1xuICAgICAgY29uc29sZS5sb2coXCJGaXJlZm94IFdlYk1JREkgQVBJIHN1cHBvcnQgaXMgc3RpbGwgaW4gcHJvZ3Jlc3NcIik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbWlkaUFjY2VzcyA9IG1hO1xuICAgIHJldHVybiBtYTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiTUlESSBjb3VsZCBub3QgYmUgaW5pdGlhbGl6ZWQ6XCIsIGUpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldE1JRElQb3J0cyA9IChcbiAgbWlkaUFjY2VzczogV2ViTWlkaS5NSURJQWNjZXNzIHwgbnVsbFxuKToge1xuICBpbnB1dHM6IFdlYk1pZGkuTUlESUlucHV0W107XG4gIG91dHB1dHM6IFdlYk1pZGkuTUlESU91dHB1dFtdO1xufSA9PiB7XG4gIC8vIGV4cG9ydCBjb25zdCBnZXRNSURJRGV2aWNlcyA9ICgpOiB7IGlucHV0czogV2ViTWlkaS5NSURJSW5wdXRbXSwgb3V0cHV0czogV2ViTWlkaS5NSURJT3V0cHV0W10gfSA9PiB7XG4gIGNvbnN0IGlucHV0czogV2ViTWlkaS5NSURJSW5wdXRbXSA9IFtdO1xuICBjb25zdCBvdXRwdXRzOiBXZWJNaWRpLk1JRElPdXRwdXRbXSA9IFtdO1xuICBpZiAobWlkaUFjY2Vzcykge1xuICAgIG1pZGlBY2Nlc3MuaW5wdXRzLmZvckVhY2goaSA9PiB7XG4gICAgICBpbnB1dHMucHVzaChpKTtcbiAgICB9KTtcbiAgICBtaWRpQWNjZXNzLm91dHB1dHMuZm9yRWFjaChvID0+IHtcbiAgICAgIG91dHB1dHMucHVzaChvKTtcbiAgICB9KTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZyhpbnB1dHMsIG91dHB1dHMpO1xuICByZXR1cm4geyBpbnB1dHMsIG91dHB1dHMgfTtcbn07XG4iLCIvLyBiYXNlZCBvbjogaHR0cHM6Ly9naXRodWIuY29tL3ByYXZkb21pbC9qYXNtaWQudHNcblxuLy8gaW1wb3J0IHsgQnVmZmVyUmVhZGVyIH0gZnJvbSAnamFzbWlkLnRzJztcbmltcG9ydCB1bmlxdWlkIGZyb20gXCJ1bmlxaWRcIjtcbmltcG9ydCB7IEJ1ZmZlclJlYWRlciB9IGZyb20gXCIuL2J1ZmZlcnJlYWRlclwiO1xuaW1wb3J0IHsgTUlESUV2ZW50IH0gZnJvbSBcIi4vdHlwZXMvTUlESUV2ZW50XCI7XG5pbXBvcnQge1xuICBTRVFVRU5DRV9OVU1CRVIsXG4gIFRFWFQsXG4gIENPUFlSSUdIVF9OT1RJQ0UsXG4gIFRSQUNLX05BTUUsXG4gIElOU1RSVU1FTlRfTkFNRSxcbiAgTFlSSUNTLFxuICBNQVJLRVIsXG4gIENVRV9QT0lOVCxcbiAgQ0hBTk5FTF9QUkVGSVgsXG4gIEVORF9PRl9UUkFDSyxcbiAgVEVNUE8sXG4gIFNNUFRFX09GRlNFVCxcbiAgVElNRV9TSUdOQVRVUkUsXG4gIEtFWV9TSUdOQVRVUkUsXG4gIFNFUVVFTkNFUl9TUEVDSUZJQyxcbiAgU1lTVEVNX0VYQ0xVU0lWRSxcbiAgRElWSURFRF9TWVNURU1fRVhDTFVTSVZFLFxuICBOT1RFX09OLFxuICBOT1RFX09GRixcbiAgTk9URV9BRlRFUlRPVUNILFxuICBDT05UUk9MTEVSLFxuICBQUk9HUkFNX0NIQU5HRSxcbiAgQ0hBTk5FTF9BRlRFUlRPVUNILFxuICBQSVRDSF9CRU5ELFxuICBzb3J0TUlESUV2ZW50cyxcbn0gZnJvbSBcIi4vdXRpbC9taWRpXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVNaWxsaXMgfSBmcm9tIFwiLi9jYWxjdWxhdGVNaWxsaXNcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIi4vdHlwZXMvVHJhY2tcIjtcbmltcG9ydCB7IFNvbmcgfSBmcm9tIFwiLi90eXBlcy9Tb25nXCI7XG5pbXBvcnQgeyBjcmVhdGVUcmFjayB9IGZyb20gXCIuL2NyZWF0ZVRyYWNrXCI7XG5pbXBvcnQgeyBjcmVhdGVOb3RlcyB9IGZyb20gXCIuL2NyZWF0ZU5vdGVzXCI7XG5cbnR5cGUgUGFyc2VkRGF0YSA9IHtcbiAgZXZlbnQ6IGFueTtcbiAgZGVsdGFUaW1lOiBudW1iZXI7XG4gIGJwbT86IG51bWJlcjtcbiAgbnVtZXJhdG9yPzogbnVtYmVyO1xuICBkZW5vbWluYXRvcj86IG51bWJlcjtcbiAgdHJhY2tOYW1lPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTUlESUZpbGUoYnVmZmVyOiBBcnJheUJ1ZmZlckxpa2UpOiBTb25nIHtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEJ1ZmZlclJlYWRlcihidWZmZXIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IHBhcnNlSGVhZGVyKHJlYWRlcik7XG4gIC8vIGNvbnN0IHsgdGltZVRyYWNrLCB0cmFja3MgfSA9IHBhcnNlVHJhY2tzKHJlYWRlciwgaGVhZGVyLnRpY2tzUGVyQmVhdClcbiAgY29uc3QgeyB0cmFja3MsIGV2ZW50cywgaW5pdGlhbFRlbXBvLCBpbml0aWFsTnVtZXJhdG9yLCBpbml0aWFsRGVub21pbmF0b3IgfSA9IHBhcnNlVHJhY2tzKFxuICAgIHJlYWRlcixcbiAgICBoZWFkZXIudGlja3NQZXJCZWF0XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcHE6IGhlYWRlci50aWNrc1BlckJlYXQsXG4gICAgbGF0ZW5jeTogMTcsIC8vIHZhbHVlIGluIG1pbGxpc2Vjb25kcyAtPiB0aGUgbGVuZ3RoIG9mIGEgc2luZ2xlIGZyYW1lIEAgNjBIeiByZWZyZXNoIHJhdGVcbiAgICBidWZmZXJUaW1lOiAxMDAsIC8vIHZhbHVlIGluIG1pbGxpc2Vjb25kc1xuICAgIHRyYWNrcyxcbiAgICB0cmFja3NCeUlkOiB0cmFja3MucmVkdWNlKChhY2M6IHsgW2lkOiBzdHJpbmddOiBUcmFjayB9LCB2YWx1ZSkgPT4ge1xuICAgICAgYWNjW3ZhbHVlLmlkXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSksXG4gICAgZXZlbnRzOiBjYWxjdWxhdGVNaWxsaXMoZXZlbnRzLCB7XG4gICAgICBwcHE6IGhlYWRlci50aWNrc1BlckJlYXQsXG4gICAgICBicG06IGluaXRpYWxUZW1wbyxcbiAgICB9KSxcbiAgICBub3RlczogY3JlYXRlTm90ZXMoZXZlbnRzKSxcbiAgICBpbml0aWFsVGVtcG8sXG4gICAgaW5pdGlhbE51bWVyYXRvcixcbiAgICBpbml0aWFsRGVub21pbmF0b3IsXG4gIH0gYXMgU29uZztcbn1cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIocmVhZGVyOiBCdWZmZXJSZWFkZXIpIHtcbiAgY29uc3QgaGVhZGVyQ2h1bmsgPSByZWFkZXIubWlkaUNodW5rKCk7XG4gIGlmIChoZWFkZXJDaHVuay5pZCAhPT0gXCJNVGhkXCIgfHwgaGVhZGVyQ2h1bmsubGVuZ3RoICE9PSA2KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQmFkIC5taWQgZmlsZSwgaGVhZGVyIG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRlclJlYWRlciA9IG5ldyBCdWZmZXJSZWFkZXIoaGVhZGVyQ2h1bmsuZGF0YSk7XG4gIGNvbnN0IGZvcm1hdFR5cGUgPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGNvbnN0IHRyYWNrQ291bnQgPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGNvbnN0IHRpbWVEaXZpc2lvbiA9IGhlYWRlclJlYWRlci51aW50MTYoKTtcbiAgaWYgKHRpbWVEaXZpc2lvbiAmIDB4ODAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkV4cHJlc3NpbmcgdGltZSBkaXZpc2lvbiBpbiBTTVRQRSBmcmFtZXMgaXMgbm90IHN1cHBvcnRlZCB5ZXRcIik7XG4gIH1cbiAgY29uc3QgdGlja3NQZXJCZWF0ID0gdGltZURpdmlzaW9uO1xuXG4gIHJldHVybiB7IGZvcm1hdFR5cGUsIHRyYWNrQ291bnQsIHRpY2tzUGVyQmVhdCB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVRyYWNrcyhcbiAgcmVhZGVyOiBCdWZmZXJSZWFkZXIsXG4gIHBwcTogbnVtYmVyXG4pOiB7XG4gIHRyYWNrczogVHJhY2tbXTtcbiAgZXZlbnRzOiBNSURJRXZlbnRbXTtcbiAgaW5pdGlhbFRlbXBvOiBudW1iZXI7XG4gIGluaXRpYWxOdW1lcmF0b3I6IG51bWJlcjtcbiAgaW5pdGlhbERlbm9taW5hdG9yOiBudW1iZXI7XG59IHtcbiAgbGV0IGluaXRpYWxUZW1wbyA9IC0xO1xuICBsZXQgaW5pdGlhbE51bWVyYXRvciA9IC0xO1xuICBsZXQgaW5pdGlhbERlbm9taW5hdG9yID0gLTE7XG4gIGNvbnN0IHRyYWNrczogVHJhY2tbXSA9IFtdO1xuICBjb25zdCBldmVudHM6IE1JRElFdmVudFtdID0gW107XG4gIHdoaWxlICghcmVhZGVyLmVvZigpKSB7XG4gICAgY29uc3QgdHJhY2tDaHVuayA9IHJlYWRlci5taWRpQ2h1bmsoKTtcblxuICAgIGlmICh0cmFja0NodW5rLmlkICE9PSBcIk1UcmtcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGNodW5rLCBleHBlY3RlZCBNVHJrLCBnb3QgJHt0cmFja0NodW5rLmlkfWApO1xuICAgIH1cbiAgICBjb25zdCB0cmFja0lkID0gYFQtJHt1bmlxdWlkKCl9YDtcbiAgICBjb25zdCB0cmFjayA9IGNyZWF0ZVRyYWNrKHRyYWNrSWQpO1xuICAgIGNvbnN0IHRyYWNrVHJhY2sgPSBuZXcgQnVmZmVyUmVhZGVyKHRyYWNrQ2h1bmsuZGF0YSk7XG4gICAgbGV0IHRpY2tzID0gMDtcbiAgICBsZXQgbGFzdFR5cGVCeXRlID0gbnVsbDtcbiAgICB3aGlsZSAoIXRyYWNrVHJhY2suZW9mKCkpIHtcbiAgICAgIGxldCBkYXRhID0gcGFyc2VFdmVudCh0cmFja1RyYWNrLCBsYXN0VHlwZUJ5dGUpO1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjb25zdCB7IGV2ZW50LCBkZWx0YVRpbWUsIGJwbSwgbnVtZXJhdG9yLCBkZW5vbWluYXRvciwgdHJhY2tOYW1lIH0gPSBkYXRhO1xuICAgICAgaWYgKGJwbSAmJiBpbml0aWFsVGVtcG8gPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxUZW1wbyA9IGJwbTtcbiAgICAgIH1cbiAgICAgIGlmIChudW1lcmF0b3IgJiYgaW5pdGlhbE51bWVyYXRvciA9PT0gLTEpIHtcbiAgICAgICAgaW5pdGlhbE51bWVyYXRvciA9IG51bWVyYXRvcjtcbiAgICAgIH1cbiAgICAgIGlmIChkZW5vbWluYXRvciAmJiBpbml0aWFsRGVub21pbmF0b3IgPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxEZW5vbWluYXRvciA9IGRlbm9taW5hdG9yO1xuICAgICAgfVxuICAgICAgaWYgKHRyYWNrTmFtZSkge1xuICAgICAgICB0cmFjay5uYW1lID0gdHJhY2tOYW1lO1xuICAgICAgfVxuICAgICAgdGlja3MgKz0gZGVsdGFUaW1lO1xuICAgICAgLy8gY29uc29sZS5sb2coJ1RJQ0tTJywgdGlja3MsIGJwbSwgbnVtZXJhdG9yKTtcbiAgICAgIGxhc3RUeXBlQnl0ZSA9IGV2ZW50LnR5cGU7XG4gICAgICBldmVudHMucHVzaCh7XG4gICAgICAgIC4uLmV2ZW50LFxuICAgICAgICB0cmFja0lkLFxuICAgICAgICB0aWNrcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0cmFja3MucHVzaCh0cmFjayk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV2ZW50czogc29ydE1JRElFdmVudHMoZXZlbnRzKSxcbiAgICB0cmFja3MsXG4gICAgaW5pdGlhbFRlbXBvLFxuICAgIGluaXRpYWxOdW1lcmF0b3IsXG4gICAgaW5pdGlhbERlbm9taW5hdG9yLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZUV2ZW50KHJlYWRlcjogQnVmZmVyUmVhZGVyLCBsYXN0VHlwZUJ5dGU6IG51bWJlciB8IG51bGwpOiBQYXJzZWREYXRhIHtcbiAgY29uc3QgZGVsdGFUaW1lID0gcmVhZGVyLm1pZGlJbnQoKTtcbiAgbGV0IHR5cGVCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG5cbiAgLy8gbWV0YSBldmVudHM6IDB4ZmZcbiAgLy8gc3lzdGVtIGV2ZW50czogMHhmMCwgMHhmN1xuICAvLyBtaWRpIGV2ZW50czogYWxsIG90aGVyIGJ5dGVzXG5cbiAgaWYgKHR5cGVCeXRlID09PSAweGZmKSB7XG4gICAgY29uc3Qgc3ViVHlwZUJ5dGUgPSByZWFkZXIudWludDgoKTtcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuXG4gICAgc3dpdGNoIChzdWJUeXBlQnl0ZSkge1xuICAgICAgLy8gc2VxdWVuY2UgbnVtYmVyXG4gICAgICBjYXNlIDB4MDA6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc2VxdWVuY2VOdW1iZXIgZXZlbnQgaXMgMiwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU0VRVUVOQ0VfTlVNQkVSLFxuICAgICAgICAgICAgbnVtYmVyOiByZWFkZXIudWludDE2KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0ZXh0XG4gICAgICBjYXNlIDB4MDE6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogVEVYVCxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNvcHlyaWdodFxuICAgICAgY2FzZSAweDAyOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENPUFlSSUdIVF9OT1RJQ0UsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0cmFjayBuYW1lXG4gICAgICBjYXNlIDB4MDM6XG4gICAgICAgIGNvbnN0IHRyYWNrTmFtZSA9IHJlYWRlci5zdHJpbmcobGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBUUkFDS19OQU1FLFxuICAgICAgICAgICAgdGV4dDogdHJhY2tOYW1lLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICAgIHRyYWNrTmFtZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGluc3RydW1lbnQgbmFtZVxuICAgICAgY2FzZSAweDA0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IElOU1RSVU1FTlRfTkFNRSxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGx5cmljc1xuICAgICAgY2FzZSAweDA1OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IExZUklDUyxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIG1hcmtlclxuICAgICAgY2FzZSAweDA2OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IE1BUktFUixcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGN1ZSBwb2ludFxuICAgICAgY2FzZSAweDA3OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENVRV9QT0lOVCxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNoYW5uZWwgcHJlZml4XG4gICAgICBjYXNlIDB4MjA6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3IgbWlkaUNoYW5uZWxQcmVmaXggZXZlbnQgaXMgMSwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogQ0hBTk5FTF9QUkVGSVgsXG4gICAgICAgICAgICBjaGFubmVsOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGVuZCBvZiB0cmFja1xuICAgICAgY2FzZSAweDJmOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIGVuZE9mVHJhY2sgZXZlbnQgaXMgMCwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIGRlc2NyOiBFTkRfT0ZfVFJBQ0ssXG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGVtcG9cbiAgICAgIGNhc2UgMHg1MTpcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBzZXRUZW1wbyBldmVudCBpcyAzLCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWljcm9zZWNvbmRzUGVyQmVhdCA9IChyZWFkZXIudWludDgoKSA8PCAxNikgKyAocmVhZGVyLnVpbnQ4KCkgPDwgOCkgKyByZWFkZXIudWludDgoKTtcbiAgICAgICAgY29uc3QgYnBtID0gNjAwMDAwMDAgLyBtaWNyb3NlY29uZHNQZXJCZWF0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRFTVBPLFxuICAgICAgICAgICAgYnBtLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYnBtLFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHNtcHRlIG9mZnNldFxuICAgICAgY2FzZSAweDU0OlxuICAgICAgICBpZiAobGVuZ3RoICE9IDUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc21wdGVPZmZzZXQgZXZlbnQgaXMgNSwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhvdXJCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU01QVEVfT0ZGU0VULFxuICAgICAgICAgICAgZnJhbWVSYXRlOiBnZXRGcmFtZVJhdGUoaG91ckJ5dGUpLFxuICAgICAgICAgICAgaG91cjogaG91ckJ5dGUgJiAweDFmLFxuICAgICAgICAgICAgbWluOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICAgIHNlYzogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBmcmFtZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBzdWJGcmFtZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0aW1lIHNpZ25hdHVyZVxuICAgICAgY2FzZSAweDU4OlxuICAgICAgICBpZiAobGVuZ3RoICE9IDQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3IgdGltZVNpZ25hdHVyZSBldmVudCBpcyA0LCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbnVtZXJhdG9yID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIGNvbnN0IGRlbm9taW5hdG9yID0gTWF0aC5wb3coMiwgcmVhZGVyLnVpbnQ4KCkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRJTUVfU0lHTkFUVVJFLFxuICAgICAgICAgICAgbnVtZXJhdG9yLFxuICAgICAgICAgICAgZGVub21pbmF0b3IsXG4gICAgICAgICAgICBtZXRyb25vbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgdGhpcnR5U2Vjb25kczogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBudW1lcmF0b3IsXG4gICAgICAgICAgZGVub21pbmF0b3IsXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8ga2V5IHNpZ25hdHVyZVxuICAgICAgY2FzZSAweDU5OlxuICAgICAgICBpZiAobGVuZ3RoICE9IDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Iga2V5U2lnbmF0dXJlIGV2ZW50IGlzIDIsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IEtFWV9TSUdOQVRVUkUsXG4gICAgICAgICAgICBrZXk6IHJlYWRlci5pbnQ4KCksXG4gICAgICAgICAgICBzY2FsZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBzZXF1ZW5jZXIgc3BlY2lmaWNcbiAgICAgIGNhc2UgMHg3ZjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBTRVFVRU5DRVJfU1BFQ0lGSUMsXG4gICAgICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdW5kZWZpbmVkXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFwidW5kZWZpbmVkXCIsXG4gICAgICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlQnl0ZSA9PT0gMHhmMCkge1xuICAgIC8vIHN5c3RlbSBleGNsdXNpdmVcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDoge1xuICAgICAgICB0eXBlOiAweGYwLFxuICAgICAgICBkZXNjcjogU1lTVEVNX0VYQ0xVU0lWRSxcbiAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgIH0sXG4gICAgICBkZWx0YVRpbWUsXG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlQnl0ZSA9PT0gMHhmNykge1xuICAgIC8vIGRpdmlkZWQgc3lzdGVtIGV4Y2x1c2l2ZVxuICAgIGNvbnN0IGxlbmd0aCA9IHJlYWRlci5taWRpSW50KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV2ZW50OiB7XG4gICAgICAgIHR5cGU6IDB4ZjAsXG4gICAgICAgIGRlc2NyOiBESVZJREVEX1NZU1RFTV9FWENMVVNJVkUsXG4gICAgICAgIGRhdGE6IHJlYWRlci5yZWFkKGxlbmd0aCksXG4gICAgICB9LFxuICAgICAgZGVsdGFUaW1lLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLyoqXG4gICAgICogcnVubmluZyBzdGF0dXMgLSByZXVzZSBsYXN0RXZlbnRUeXBlQnl0ZSBhcyB0aGUgZXZlbnQgdHlwZVxuICAgICAqIHR5cGVCeXRlIGlzIGFjdHVhbGx5IHRoZSBmaXJzdCBwYXJhbWV0ZXJcbiAgICAgKi9cbiAgICBjb25zdCBpc1J1bm5pbmdTdGF0dXMgPSAodHlwZUJ5dGUgJiAwYjEwMDAwMDAwKSA9PT0gMDtcbiAgICBjb25zdCB2YWx1ZSA9IGlzUnVubmluZ1N0YXR1cyA/IHR5cGVCeXRlIDogcmVhZGVyLnVpbnQ4KCk7XG4gICAgdHlwZUJ5dGUgPSBpc1J1bm5pbmdTdGF0dXMgPyAobGFzdFR5cGVCeXRlID09PSBudWxsID8gMCA6IGxhc3RUeXBlQnl0ZSkgOiB0eXBlQnl0ZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGlzUnVubmluZ1N0YXR1cywgdHlwZUJ5dGUsIHZhbHVlKTtcblxuICAgIGNvbnN0IGNoYW5uZWwgPSB0eXBlQnl0ZSAmIDB4MGY7XG4gICAgLy8gY2hhbm5lbHNbY2hhbm5lbF0gPSB0cnVlO1xuXG4gICAgc3dpdGNoICh0eXBlQnl0ZSA+PiA0KSB7XG4gICAgICAvLyBub3RlIG9mZlxuICAgICAgY2FzZSAweDA4OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweDgwLFxuICAgICAgICAgICAgZGVzY3I6IE5PVEVfT0ZGLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gbm90ZSBvblxuICAgICAgY2FzZSAweDA5OlxuICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB2ZWxvY2l0eSA9PT0gMCA/IDB4ODAgOiAweDkwLFxuICAgICAgICAgICAgZGVzY3I6IHZlbG9jaXR5ID09PSAwID8gTk9URV9PRkYgOiBOT1RFX09OLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmVsb2NpdHksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBub3RlIGFmdGVydG91Y2hcbiAgICAgIGNhc2UgMHgwYTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhhMCxcbiAgICAgICAgICAgIGRlc2NyOiBOT1RFX0FGVEVSVE9VQ0gsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgbm90ZU51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICBhbW91bnQ6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gY29udHJvbGxlclxuICAgICAgY2FzZSAweDBiOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGIwLFxuICAgICAgICAgICAgZGVzY3I6IENPTlRST0xMRVIsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgY29udHJvbGxlck51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICB2YWx1ZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBwcm9ncmFtIGNoYW5nZVxuICAgICAgY2FzZSAweDBjOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGMwLFxuICAgICAgICAgICAgZGVzY3I6IFBST0dSQU1fQ0hBTkdFLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIHByb2dyYW06IHZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gY2hhbm5lbCBhZnRlcnRvdWNoXG4gICAgICBjYXNlIDB4MGQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4ZDAsXG4gICAgICAgICAgICBkZXNjcjogQ0hBTk5FTF9BRlRFUlRPVUNILFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIGFtb3VudDogdmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBwaXRjaCBiZW5kXG4gICAgICBjYXNlIDB4MGU6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4ZTAsXG4gICAgICAgICAgICBkZXNjcjogUElUQ0hfQkVORCxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUgKyAocmVhZGVyLnVpbnQ4KCkgPDwgNyksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG5cbiAgICAgIC8vIGRlZmF1bHQ6XG4gICAgICAvLyAgIHJldHVybiB7XG4gICAgICAvLyAgICAgZXZlbnQ6IHtcbiAgICAgIC8vICAgICAgIHR5cGU6IHR5cGVCeXRlID4+IDQsXG4gICAgICAvLyAgICAgICBkZXNjcjogXCJ1bnJlY29nbml6ZWRcIixcbiAgICAgIC8vICAgICAgIGNoYW5uZWwsXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgICBkZWx0YVRpbWUsXG4gICAgICAvLyAgIH07XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGBVbnJlY29nbml6ZWQgTUlESSBldmVudCB0eXBlIGJ5dGU6ICR7dHlwZUJ5dGV9IChmaXggdGhpcylgKTtcbiAgcmV0dXJuIHtcbiAgICBldmVudDoge1xuICAgICAgdHlwZTogdHlwZUJ5dGUgPT09IDI1NSA/IDAgOiB0eXBlQnl0ZSxcbiAgICB9LFxuICAgIGRlbHRhVGltZSxcbiAgfTtcbiAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgTUlESSBldmVudCB0eXBlIGJ5dGU6ICR7dHlwZUJ5dGV9YCk7XG59XG5cbmZ1bmN0aW9uIGdldEZyYW1lUmF0ZShob3VyQnl0ZTogbnVtYmVyKSB7XG4gIHN3aXRjaCAoaG91ckJ5dGUgJiAwYjExMDAwMDApIHtcbiAgICBjYXNlIDB4MDA6XG4gICAgICByZXR1cm4gMjQ7XG4gICAgY2FzZSAweDIwOlxuICAgICAgcmV0dXJuIDI1O1xuICAgIGNhc2UgMHg0MDpcbiAgICAgIHJldHVybiAyOTtcbiAgICBjYXNlIDB4NjA6XG4gICAgICByZXR1cm4gMzA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vdHlwZXMvU29uZ1wiO1xuaW1wb3J0IHsgTUlESUV2ZW50LCBOb3RlT25FdmVudCB9IGZyb20gXCIuL3R5cGVzL01JRElFdmVudFwiO1xuaW1wb3J0IHsgTk9URV9PTiwgTk9URV9PRkYgfSBmcm9tIFwiLi91dGlsL21pZGlcIjtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRFdmVudEluZGV4ID0gKHNvbmc6IFNvbmcsIG1pbGxpczogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHNvbmc7XG4gIGxldCBpID0gMDtcbiAgZm9yICg7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1tpXTtcbiAgICBpZiAoIWV2ZW50Lm1pbGxpcyB8fCBldmVudC5taWxsaXMgPj0gbWlsbGlzKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGk7XG59O1xuXG50eXBlIEFyZ3MgPSB7XG4gIHNvbmc6IFNvbmc7XG4gIG1pbGxpczogbnVtYmVyO1xuICBpbmRleDogbnVtYmVyO1xuICBvdXRwdXRzPzogV2ViTWlkaS5NSURJT3V0cHV0TWFwO1xufTtcbmV4cG9ydCBjb25zdCBzY2hlZHVsZSA9ICh7XG4gIHNvbmcsXG4gIGluZGV4LFxuICBtaWxsaXMsXG4gIG91dHB1dHMsXG59OiBBcmdzKTogeyBtaWxsaXM6IG51bWJlcjsgaW5kZXg6IG51bWJlcjsgc2NoZWR1bGVkOiBNSURJRXZlbnRbXSB9ID0+IHtcbiAgY29uc3QgdHMgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgY29uc3QgeyBldmVudHMgfSA9IHNvbmc7XG4gIGNvbnN0IHNjaGVkdWxlZCA9IFtdO1xuICAvLyBsZXQgbGFzdE5vdGVOdW1iZXI6IG51bWJlciA9IC0xO1xuICAvLyBsZXQgbGFzdE5vdGVUeXBlOiBudW1iZXIgPSAtMTtcbiAgd2hpbGUgKGluZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2luZGV4XTtcbiAgICBpZiAoIWV2ZW50Lm1pbGxpcyB8fCAhZXZlbnQudHJhY2tJZCkge1xuICAgICAgLy8gYnJlYWs7XG4gICAgICBpbmRleCsrO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQubWlsbGlzIDwgbWlsbGlzICsgc29uZy5idWZmZXJUaW1lKSB7XG4gICAgICBzY2hlZHVsZWQucHVzaChldmVudCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50aWNrcywgZXZlbnQuZGVzY3IsIChldmVudCBhcyBOb3RlT25FdmVudCkubm90ZU51bWJlcik7XG4gICAgICBjb25zdCB0cmFjayA9IHNvbmcudHJhY2tzQnlJZFtldmVudC50cmFja0lkXTtcbiAgICAgIHRyYWNrLm91dHB1dHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgIGlmIChldmVudC5kZXNjciA9PT0gTk9URV9PTiB8fCBldmVudC5kZXNjciA9PT0gTk9URV9PRkYpIHtcbiAgICAgICAgICBjb25zdCBlID0gZXZlbnQgYXMgTm90ZU9uRXZlbnQ7XG4gICAgICAgICAgaWYgKGV2ZW50Lm1pbGxpcykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudHlwZSwgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlcik7XG4gICAgICAgICAgICBsZXQgdGltZSA9IHRzICsgc29uZy5sYXRlbmN5ICsgdHJhY2subGF0ZW5jeSArIChldmVudC5taWxsaXMgLSBtaWxsaXMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRbXCJub3RlTnVtYmVyXCJdLCBldmVudC5kZXNjciwgZXZlbnQubWlsbGlzLCBtaWxsaXMsIHRpbWUsIHRzLCB0aW1lIC0gdHMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5ub3RlTnVtYmVyLCBsYXN0Tm90ZU51bWJlciwgbGFzdE5vdGVUeXBlKTtcbiAgICAgICAgICAgIC8vIGlmIChlLm5vdGVOdW1iZXIgPT09IGxhc3ROb3RlTnVtYmVyICYmIGxhc3ROb3RlVHlwZSA9PT0gMHg5MCkge1xuICAgICAgICAgICAgLy8gICBpZiAoZS5kZXNjciA9PT0gTk9URV9PTikge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVwZWF0aW5nIG5vdGVzXCIpO1xuICAgICAgICAgICAgLy8gICAgIHRpbWUgKz0gMTtcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gbGFzdE5vdGVOdW1iZXIgPSBlLm5vdGVOdW1iZXI7XG4gICAgICAgICAgICAvLyBsYXN0Tm90ZVR5cGUgPSBlLnR5cGU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50eXBlICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHkpO1xuICAgICAgICAgICAgLy8gcXVpY2sgZml4IGZvciByZXBlYXRpbmcgbm90ZXNcbiAgICAgICAgICAgIGlmIChlLmRlc2NyID09PSBOT1RFX09OKSB7XG4gICAgICAgICAgICAgIHRpbWUgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dHNcbiAgICAgICAgICAgICAgPy5nZXQoaWQpXG4gICAgICAgICAgICAgID8uc2VuZChbZXZlbnQudHlwZSArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5XSwgdGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZygnW1NDSEVEVUxFRF0nLCBzY2hlZHVsZWQubWFwKGUgPT4gW2UudGlja3MsIGUubWlsbGlzXSkpO1xuICByZXR1cm4geyBtaWxsaXMsIGluZGV4LCBzY2hlZHVsZWQgfTtcbn07XG4iLCJpbXBvcnQgeyBNSURJRXZlbnQgfSBmcm9tIFwiLi4vdHlwZXMvTUlESUV2ZW50XCI7XG5cbmV4cG9ydCBjb25zdCBTRVFVRU5DRV9OVU1CRVIgPSBcInNlcXVlbmNlIG51bWJlclwiO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSBcInRleHRcIjtcbmV4cG9ydCBjb25zdCBDT1BZUklHSFRfTk9USUNFID0gXCJjb3B5cmlnaHQgbm90aWNlXCI7XG5leHBvcnQgY29uc3QgVFJBQ0tfTkFNRSA9IFwidHJhY2sgbmFtZVwiO1xuZXhwb3J0IGNvbnN0IElOU1RSVU1FTlRfTkFNRSA9IFwiaW5zdHJ1bWVudCBuYW1lXCI7XG5leHBvcnQgY29uc3QgTFlSSUNTID0gXCJseXJpY3NcIjtcbmV4cG9ydCBjb25zdCBNQVJLRVIgPSBcIm1hcmtlclwiO1xuZXhwb3J0IGNvbnN0IENVRV9QT0lOVCA9IFwiY3VlIHBvaW50XCI7XG5leHBvcnQgY29uc3QgQ0hBTk5FTF9QUkVGSVggPSBcImNoYW5uZWwgcHJlZml4XCI7XG5leHBvcnQgY29uc3QgRU5EX09GX1RSQUNLID0gXCJlbmQgb2YgdHJhY2tcIjtcbmV4cG9ydCBjb25zdCBURU1QTyA9IFwidGVtcG9cIjtcbmV4cG9ydCBjb25zdCBTTVBURV9PRkZTRVQgPSBcInNtcHRlIG9mZnNldFwiO1xuZXhwb3J0IGNvbnN0IFRJTUVfU0lHTkFUVVJFID0gXCJ0aW1lIHNpZ25hdHVyZVwiO1xuZXhwb3J0IGNvbnN0IEtFWV9TSUdOQVRVUkUgPSBcImtleSBzaWduYXR1cmVcIjtcbmV4cG9ydCBjb25zdCBTRVFVRU5DRVJfU1BFQ0lGSUMgPSBcInNlcXVlbmNlciBzcGVjaWZpY1wiO1xuZXhwb3J0IGNvbnN0IFNZU1RFTV9FWENMVVNJVkUgPSBcInN5c3RlbSBleGNsdXNpdmVcIjtcbmV4cG9ydCBjb25zdCBESVZJREVEX1NZU1RFTV9FWENMVVNJVkUgPSBcImRpdmlkZWQgc3lzdGVtIGV4Y2x1c2l2ZVwiO1xuZXhwb3J0IGNvbnN0IE5PVEVfT04gPSBcIm5vdGUgb25cIjtcbmV4cG9ydCBjb25zdCBOT1RFX09GRiA9IFwibm90ZSBvZmZcIjtcbmV4cG9ydCBjb25zdCBOT1RFX0FGVEVSVE9VQ0ggPSBcIm5vdGUgYWZ0ZXJ0b3VjaFwiO1xuZXhwb3J0IGNvbnN0IENPTlRST0xMRVIgPSBcImNvbnRyb2xsZXJcIjtcbmV4cG9ydCBjb25zdCBQUk9HUkFNX0NIQU5HRSA9IFwicHJvZ3JhbSBjaGFuZ2VcIjtcbmV4cG9ydCBjb25zdCBDSEFOTkVMX0FGVEVSVE9VQ0ggPSBcImNoYW5uZWwgYWZ0ZXJ0b3VjaFwiO1xuZXhwb3J0IGNvbnN0IFBJVENIX0JFTkQgPSBcInBpdGNoIGJlbmRcIjtcblxuY29uc3QgZGVzY3JpcHRpb25zOiB7IFtpbmRleDogbnVtYmVyXTogeyBbaW5kZXg6IG51bWJlcl06IHN0cmluZyB9IHwgc3RyaW5nIH0gPSB7XG4gIDB4ZmY6IHtcbiAgICAweDAwOiBcInNlcXVlbmNlIG51bWJlclwiLFxuICAgIDB4MDE6IFwidGV4dFwiLFxuICAgIDB4MDI6IFwiY29weXJpZ2h0IG5vdGljZVwiLFxuICAgIDB4MDM6IFwidHJhY2sgbmFtZVwiLFxuICAgIDB4MDQ6IFwiaW5zdHJ1bWVudCBuYW1lXCIsXG4gICAgMHgwNTogXCJseXJpY3NcIixcbiAgICAweDA2OiBcIm1hcmtlclwiLFxuICAgIDB4MDc6IFwiY3VlIHBvaW50XCIsXG4gICAgMHgyMDogXCJjaGFubmVsIHByZWZpeFwiLFxuICAgIDB4MmY6IFwiZW5kIG9mIHRyYWNrXCIsXG4gICAgMHg1MTogXCJ0ZW1wb1wiLFxuICAgIDB4NTQ6IFwic21wdGUgb2Zmc2V0XCIsXG4gICAgMHg1ODogXCJ0aW1lIHNpZ25hdHVyZVwiLFxuICAgIDB4NTk6IFwia2V5IHNpZ25hdHVyZVwiLFxuICAgIDB4N2Y6IFwic2VxdWVuY2VyIHNwZWNpZmljXCIsXG4gIH0sXG4gIDB4ZjA6IFwic3lzdGVtIGV4Y2x1c2l2ZVwiLFxuICAweGY3OiBcImRpdmlkZWQgc3lzZXhcIixcbiAgMHg4MDogXCJub3RlIG9uXCIsXG4gIDB4OTA6IFwibm90ZSBvZmZcIixcbiAgMHhhMDogXCJub3RlIGFmdGVydG91Y2hcIixcbiAgMHhiMDogXCJjb250cm9sbGVyXCIsXG4gIDB4YzA6IFwicHJvZ3JhbSBjaGFuZ2VcIixcbiAgMHhkMDogXCJjaGFubmVsIGFmdGVydG91Y2hcIixcbiAgMHhlMDogXCJwaXRjaCBiZW5kXCIsXG59O1xuXG5leHBvcnQgY29uc3Qgbm90ZU5hbWVzID0ge1xuICBzaGFycDogW1wiQ1wiLCBcIkMjXCIsIFwiRFwiLCBcIkQjXCIsIFwiRVwiLCBcIkZcIiwgXCJGI1wiLCBcIkdcIiwgXCJHI1wiLCBcIkFcIiwgXCJBI1wiLCBcIkJcIl0sXG4gIGZsYXQ6IFtcIkNcIiwgXCJEYlwiLCBcIkRcIiwgXCJFYlwiLCBcIkVcIiwgXCJGXCIsIFwiR2JcIiwgXCJHXCIsIFwiQWJcIiwgXCJBXCIsIFwiQmJcIiwgXCJCXCJdLFxuICBcImVuaGFybW9uaWMtc2hhcnBcIjogW1wiQiNcIiwgXCJDI1wiLCBcIkMjI1wiLCBcIkQjXCIsIFwiRCMjXCIsIFwiRSNcIiwgXCJGI1wiLCBcIkYjI1wiLCBcIkcjXCIsIFwiRyMjXCIsIFwiQSNcIiwgXCJBIyNcIl0sXG4gIFwiZW5oYXJtb25pYy1mbGF0XCI6IFtcIkRiYlwiLCBcIkRiXCIsIFwiRWJiXCIsIFwiRWJcIiwgXCJGYlwiLCBcIkdiYlwiLCBcIkdiXCIsIFwiQWJiXCIsIFwiQWJcIiwgXCJCYmJcIiwgXCJCYlwiLCBcIkNiXCJdLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldE1pZGlFdmVudERlc2NyaXB0aW9uID0gKHR5cGU6IG51bWJlciwgc3ViVHlwZT86IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGlmICh0eXBlb2Ygc3ViVHlwZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbnNbdHlwZV0gYXMgc3RyaW5nO1xuICB9XG4gIHJldHVybiBkZXNjcmlwdGlvbnNbdHlwZV1bc3ViVHlwZV0gfHwgXCJ1bmRlZmluZWRcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNaWRpTWVzc2FnZUV2ZW50ID0gKGV2ZW50OiBNSURJRXZlbnQpOiBudW1iZXJbXSA9PiB7XG4gIHN3aXRjaCAoZXZlbnQuZGVzY3IpIHtcbiAgICBjYXNlIE5PVEVfT046XG4gICAgICByZXR1cm4gWzB4OTAgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eV07XG4gICAgY2FzZSBOT1RFX09GRjpcbiAgICAgIHJldHVybiBbMHg4MCArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5XTtcbiAgfVxuICByZXR1cm4gWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5vdGVOdW1iZXIgPSAobmFtZTogc3RyaW5nLCBvY3RhdmU6IG51bWJlciwgbW9kZTogc3RyaW5nID0gXCJzaGFycFwiKTogbnVtYmVyID0+IHtcbiAgLy8gbGV0IGluZGV4ID0gLTE7XG4gIC8vIGNvbnN0IG1vZGVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobm90ZU5hbWVzKTtcbiAgLy8gZm9yIChsZXQgaSA9IDAsIG1heGkgPSBtb2Rlcy5sZW5ndGg7IGkgPCBtYXhpOyBpKyspIHtcbiAgLy8gICBjb25zdCBuYW1lcyA9IG1vZGVzW2ldO1xuICAvLyAgIGZvciAobGV0IGogPSAwLCBtYXhqID0gbmFtZXMubGVuZ3RoOyBqIDwgbWF4ajsgaisrKSB7XG4gIC8vICAgICBpZiAobW9kZVtqXSA9PT0gbmFtZSkge1xuICAvLyAgICAgICBpbmRleCA9IGk7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuICBsZXQgaW5kZXggPSAtMTtcbiAgY29uc3QgbW9kZXMgPSBPYmplY3QudmFsdWVzKG5vdGVOYW1lcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuYW1lcyA9IG1vZGVzW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWVzW2pdLCBuYW1lKTtcbiAgICAgIGlmIChuYW1lc1tqXSA9PT0gbmFtZSkge1xuICAgICAgICBpbmRleCA9IGo7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyhuYW1lLCBvY3RhdmUsIGluZGV4KTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8vbnVtYmVyID0gKGluZGV4ICsgMTIpICsgKG9jdGF2ZSAqIDEyKSArIDEyOyAvLyDihpIgaW4gQ3ViYXNlIGNlbnRyYWwgQyA9IEMzIGluc3RlYWQgb2YgQzRcbiAgcmV0dXJuIGluZGV4ICsgMTIgKyBvY3RhdmUgKiAxMjsgLy8g4oaSIG1pZGkgc3RhbmRhcmQgKyBzY2llbnRpZmljIG5hbWluZywgc2VlOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01pZGRsZV9DIGFuZCBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NjaWVudGlmaWNfcGl0Y2hfbm90YXRpb25cbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0TUlESUV2ZW50cyA9IChldmVudHM6IE1JRElFdmVudFtdKTogTUlESUV2ZW50W10gPT5cbiAgZXZlbnRzLnNvcnQoKGE6IE1JRElFdmVudCwgYjogTUlESUV2ZW50KSA9PiB7XG4gICAgaWYgKGEudGlja3MgPCBiLnRpY2tzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChhLnRpY2tzID4gYi50aWNrcykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgICAvLyB9IGVsc2UgaWYgKGEudHlwZSA9PT0gMHg4MCAmJiBiLnR5cGUgPT09IDB4OTApIHtcbiAgICAgIC8vICAgLy8gbm90ZSBvZmYgYmVmb3JlIG5vdGUgb25cbiAgICAgIC8vICAgcmV0dXJuIC0xO1xuICAgICAgLy8gfSBlbHNlIGlmIChhLnR5cGUgPT09IDB4NTEgfHwgYS50eXBlID09PSAweDU4KSB7XG4gICAgICAvLyAgIC8vIHRlbXBvIGFuZCB0aW1lIHNpZ25hdHVyZSBldmVudHMgZmlyc3RcbiAgICAgIC8vICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVEb3VibGVFdmVudHMgPSAoZXZlbnRzOiBNSURJRXZlbnRbXSk6IE1JRElFdmVudFtdID0+IHtcbiAgLy8gdmFyIGksIG1heGkgPSBldmVudHMubGVuZ3RoLFxuICAvLyAgIGV2ZW50LCBldmVudElkLCBsYXN0SWQsXG4gIC8vICAgcmVzdWx0ID0gW107XG5cbiAgLy8gZXZlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgLy8gICByZXR1cm4gYS5ldmVudE51bWJlciAtIGIuZXZlbnROdW1iZXI7XG4gIC8vIH0pO1xuXG4gIC8vIGZvciAoaSA9IDA7IGkgPCBtYXhpOyBpKyspIHtcbiAgLy8gICBldmVudCA9IGV2ZW50c1tpXTtcbiAgLy8gICBldmVudElkID0gZXZlbnQuaWQ7XG4gIC8vICAgaWYgKGV2ZW50SWQgIT09IGxhc3RJZCkge1xuICAvLyAgICAgcmVzdWx0LnB1c2goZXZlbnQpO1xuICAvLyAgIH1cbiAgLy8gICBsYXN0SWQgPSBldmVudElkO1xuICAvLyB9XG4gIC8vIHJldHVybiByZXN1bHQ7XG4gIHJldHVybiBbXTtcbn07XG4iLCIvLyBpbXBvcnQgXCJqenpcIjtcbmltcG9ydCB7IHNjaGVkdWxlLCBnZXRDdXJyZW50RXZlbnRJbmRleCB9IGZyb20gXCIuLi8uLi9zcmMvc2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBnZXRNSURJQWNjZXNzIH0gZnJvbSBcIi4uLy4uL3NyYy9nZXRNSURJQWNjZXNzXCI7XG5pbXBvcnQgeyBnZXRNSURJUG9ydHMgfSBmcm9tIFwiLi4vLi4vc3JjL2dldE1JRElQb3J0c1wiO1xuaW1wb3J0IHsgY3JlYXRlU29uZ0Zyb21NSURJRmlsZSB9IGZyb20gXCIuLi8uLi9zcmMvY3JlYXRlU29uZ0Zyb21NSURJRmlsZVwiO1xuXG5jb25zdCB1cmwgPSBcIi4uLy4uL2Fzc2V0cy9taW51dGVfd2FsdHoubWlkXCI7XG4vLyBjb25zdCB1cmwgPSAnLi4vLi4vYXNzZXRzL21vems1NDVhLm1pZCc7XG4vLyBjb25zdCB1cmwgPSAnLi4vLi4vYXNzZXRzL21vems1NDVhX211c2VzY29yZS5taWQnO1xuXG5jb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtYSA9IGF3YWl0IGdldE1JRElBY2Nlc3MoKTtcbiAgY29uc3Qgc29uZyA9IGF3YWl0IGNyZWF0ZVNvbmdGcm9tTUlESUZpbGUodXJsKTtcbiAgY29uc3QgeyBpbnB1dHMsIG91dHB1dHMgfSA9IGdldE1JRElQb3J0cyhtYSk7XG4gIHNvbmcudHJhY2tzLmZvckVhY2godHJhY2sgPT4ge1xuICAgIHRyYWNrLm91dHB1dHMucHVzaCguLi5vdXRwdXRzLm1hcChvID0+IG8uaWQpKTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHNvbmcpO1xuXG4gIGxldCBtaWxsaXMgPSAzMDAwO1xuICBsZXQgaW5kZXggPSBnZXRDdXJyZW50RXZlbnRJbmRleChzb25nLCBtaWxsaXMpO1xuICAvLyBjb25zb2xlLmxvZygnU1RBUlQgSU5ERVgnLCBpbmRleCk7XG4gIGxldCBzdGFydDogbnVtYmVyID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGNvbnN0IHBsYXkgPSAoYTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdHMgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0cywgYSk7XG4gICAgLy8gY29uc3QgcHJvZ3Jlc3MgPSB0cyAtIGE7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSB0cyAtIHN0YXJ0O1xuICAgIHN0YXJ0ID0gdHM7XG4gICAgLy8gY29uc3QgcHJvZ3Jlc3MgPSBhIC0gc3RhcnQ7XG4gICAgLy8gc3RhcnQgPSBhO1xuICAgIGlmIChtaWxsaXMgPCAxMDAwMCkge1xuICAgICAgKHsgaW5kZXgsIG1pbGxpcyB9ID0gc2NoZWR1bGUoe1xuICAgICAgICBzb25nLFxuICAgICAgICBtaWxsaXMsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBvdXRwdXRzOiBtYT8ub3V0cHV0cyxcbiAgICAgIH0pKTtcbiAgICAgIG1pbGxpcyArPSBwcm9ncmVzcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4LCBtaWxsaXMpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGEgPT4ge1xuICAgICAgICBwbGF5KGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBwbGF5KHN0YXJ0KTtcbn07XG5cbmluaXQoKTtcblxuLy8gZmV0Y2godXJsKVxuLy8gICAudGhlbihhcnJheUJ1ZmZlcilcbi8vICAgLnRoZW4oYWIgPT4ge1xuLy8gICAgIGNvbnN0IHsgaGVhZGVyLCB0cmFja3MgfSA9IHBhcnNlTWlkaUZpbGUoYWIpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRyYWNrcyk7XG4vLyAgIH0pO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
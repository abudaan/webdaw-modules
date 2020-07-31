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

/***/ "../src/getCurrentEventIndex.ts":
/*!**************************************!*\
  !*** ../src/getCurrentEventIndex.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var scheduler_1 = __webpack_require__(/*! ../../src/scheduler */ "../src/scheduler.ts");
var getCurrentEventIndex_1 = __webpack_require__(/*! ../../src/getCurrentEventIndex */ "../src/getCurrentEventIndex.ts");
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
                index = getCurrentEventIndex_1.getCurrentEventIndex(song, millis);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9idWZmZXJyZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jYWxjdWxhdGVNaWxsaXMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVOb3Rlcy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NyZWF0ZVNvbmdGcm9tTUlESUZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVUcmFjay50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ZldGNoX2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9nZXRDdXJyZW50RXZlbnRJbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2dldE1JRElBY2Nlc3MudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9nZXRNSURJUG9ydHMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZU1JRElGaWxlLnRzIiwid2VicGFjazovLy8uLi9zcmMvc2NoZWR1bGVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9taWRpLnRzIiwid2VicGFjazovLy8uL211c2ljeG1sL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFF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QUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJtdXNpY3htbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbXVzaWN4bWwvaW5kZXgudHNcIik7XG4iLCIvKiBcbihUaGUgTUlUIExpY2Vuc2UpXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAxOSBIYWzDoXN6IMOBZMOhbSA8bWFpbEBhZGFtaGFsYXN6LmNvbT5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gIFVuaXF1ZSBIZXhhdHJpZGVjaW1hbCBJRCBHZW5lcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBwaWQgPSBwcm9jZXNzICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nKXtcbiAgICB2YXIgbWFjID0gJycsIG5ldHdvcmtJbnRlcmZhY2VzID0gcmVxdWlyZSgnb3MnKS5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGZvcihsZXQgaW50ZXJmYWNlX2tleSBpbiBuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbmV0d29ya0ludGVyZmFjZS5sZW5ndGg7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAhPSAnMDA6MDA6MDA6MDA6MDA6MDAnKXtcbiAgICAgICAgICAgICAgICBtYWMgPSBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYzsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkcmVzcyA9IG1hYyA/IHBhcnNlSW50KG1hYy5yZXBsYWNlKC9cXDp8XFxEKy9naSwgJycpKS50b1N0cmluZygzNikgOiAnJyA7XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCIvLyBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcHJhdmRvbWlsL2phc21pZC50c1xuXG5leHBvcnQgY2xhc3MgQnVmZmVyUmVhZGVyIHtcbiAgcHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIGRhdGE6IERhdGFWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKGJ1ZmZlcjogQXJyYXlCdWZmZXJMaWtlKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5kYXRhID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gIH1cblxuICByZWFkKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuYnVmZmVyLnNsaWNlKHRoaXMucG9zaXRpb24sIHRoaXMucG9zaXRpb24gKyBsZW5ndGgpO1xuICAgIHRoaXMucG9zaXRpb24gKz0gbGVuZ3RoO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGludDgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0SW50OCh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0VWludDgodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHVpbnQxNigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50MTYodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSAyO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHVpbnQzMigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50MzIodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSA0O1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0cmluZyhsZW5ndGg6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoXCJhc2NpaVwiKS5kZWNvZGUodGhpcy5yZWFkKGxlbmd0aCkpO1xuICB9XG5cbiAgZW9mKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID49IHRoaXMuZGF0YS5ieXRlTGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgYSBNSURJLXN0eWxlIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyLlxuICAgKiAoYmlnLWVuZGlhbiB2YWx1ZSBpbiBncm91cHMgb2YgNyBiaXRzLCB3aXRoIHRvcCBiaXQgc2V0IHRvIHNpZ25pZnkgdGhhdCBhbm90aGVyIGJ5dGUgZm9sbG93cylcbiAgICovXG4gIG1pZGlJbnQoKSB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy51aW50OCgpO1xuICAgICAgaWYgKHZhbHVlICYgMGIxMDAwMDAwMCkge1xuICAgICAgICByZXN1bHQgKz0gdmFsdWUgJiAwYjExMTExMTE7XG4gICAgICAgIHJlc3VsdCA8PD0gNztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtaWRpQ2h1bmsoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnN0cmluZyg0KTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnVpbnQzMigpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlYWQobGVuZ3RoKTtcbiAgICByZXR1cm4geyBpZCwgbGVuZ3RoLCBkYXRhIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE1JRElFdmVudCwgVGVtcG9FdmVudCB9IGZyb20gXCIuL3R5cGVzL01JRElFdmVudFwiO1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlTWlsbGlzID0gKFxuICBldmVudHM6IE1JRElFdmVudFtdLFxuICBkYXRhOiB7XG4gICAgcHBxOiBudW1iZXI7XG4gICAgYnBtPzogbnVtYmVyO1xuICAgIHBsYXliYWNrU3BlZWQ/OiBudW1iZXI7XG4gIH1cbik6IE1JRElFdmVudFtdID0+IHtcbiAgbGV0IHsgcHBxLCBicG0gPSAtMSwgcGxheWJhY2tTcGVlZCA9IDEgfSA9IGRhdGE7XG4gIGxldCBtaWxsaXNQZXJUaWNrID0gYnBtID09PSAtMSA/IDAgOiAoKCgxIC8gcGxheWJhY2tTcGVlZCkgKiA2MCkgLyBicG0gLyBwcHEpICogMTAwMDtcbiAgbGV0IHRpY2tzID0gMDtcbiAgbGV0IG1pbGxpcyA9IDA7XG4gIC8vIGNvbnNvbGUubG9nKFwiYnBtXCIsIGJwbSwgbWlsbGlzKTtcbiAgcmV0dXJuIGV2ZW50cy5tYXAoZXZlbnQgPT4ge1xuICAgIGlmICgoZXZlbnQgYXMgVGVtcG9FdmVudCkuYnBtKSB7XG4gICAgICAoeyBicG0gfSA9IGV2ZW50IGFzIFRlbXBvRXZlbnQpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJicG1cIiwgYnBtLCBtaWxsaXMpO1xuICAgICAgbWlsbGlzUGVyVGljayA9ICgoKDEgLyBwbGF5YmFja1NwZWVkKSAqIDYwKSAvIGJwbSAvIHBwcSkgKiAxMDAwO1xuICAgIH1cbiAgICBjb25zdCBkaWZmVGlja3MgPSBldmVudC50aWNrcyAtIHRpY2tzO1xuICAgIG1pbGxpcyArPSBkaWZmVGlja3MgKiBtaWxsaXNQZXJUaWNrO1xuICAgIGV2ZW50Lm1pbGxpcyA9IG1pbGxpcztcbiAgICB0aWNrcyA9IGV2ZW50LnRpY2tzO1xuICAgIHJldHVybiBldmVudDtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgTUlESUV2ZW50LCBOb3RlRXZlbnQsIE5vdGVPbkV2ZW50LCBOb3RlT2ZmRXZlbnQgfSBmcm9tIFwiLi90eXBlcy9NSURJRXZlbnRcIjtcblxuZXhwb3J0IHR5cGUgTUlESU5vdGUgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5vdGVPbjogTm90ZU9uRXZlbnQ7XG4gIG5vdGVPZmY6IE5vdGVPZmZFdmVudDtcbiAgZHVyYXRpb25UaWNrcz86IG51bWJlcjtcbiAgZHVyYXRpb25NaWxsaXM/OiBudW1iZXI7XG4gIHN0YXJ0VGlja3M/OiBudW1iZXI7XG4gIGVuZFRpY2tzPzogbnVtYmVyO1xuICBzdGFydE1pbGxpcz86IG51bWJlcjtcbiAgZW5kTWlsbGlzPzogbnVtYmVyO1xufTtcblxubGV0IGluZGV4ID0gMDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vdGVzID0gKGV2ZW50czogTUlESUV2ZW50W10pOiBNSURJTm90ZVtdID0+IHtcbiAgbGV0IGZpbHRlcmVkOiBOb3RlRXZlbnRbXSA9IGV2ZW50cy5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2codmFsLnR5cGUpO1xuICAgIGlmICh2YWwudHlwZSA9PT0gMHg4MCB8fCB2YWwudHlwZSA9PT0gMHg5MCkge1xuICAgICAgYWNjLnB1c2godmFsIGFzIE5vdGVFdmVudCk7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdIGFzIE5vdGVFdmVudFtdKTtcbiAgLy8gZmlsdGVyZWQgPSBzb3J0TUlESUV2ZW50cyhmaWx0ZXJlZCk7XG4gIGNvbnN0IG5vdGVzOiBNSURJTm90ZVtdID0gW107XG4gIGNvbnN0IHRtcDogeyBbaWQ6IHN0cmluZ106IE5vdGVFdmVudCB9ID0ge307XG4gIGZpbHRlcmVkLmZvckVhY2goZSA9PiB7XG4gICAgY29uc3QgaWQgPSBgJHtlLnRyYWNrSWR9LSR7ZS5ub3RlTnVtYmVyfWA7XG4gICAgLy8gY29uc29sZS5sb2coZS50aWNrcywgZS50eXBlLCBpZCk7XG4gICAgaWYgKGUudHlwZSA9PT0gMHg5MCkge1xuICAgICAgaWYgKHRtcFtpZF0pIHtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKGBub3RlIGV4aXN0ZWQgYWxyZWFkeSEgJHtpZH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcFtpZF0gPSBlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSAweDgwKSB7XG4gICAgICBpZiAoIXRtcFtpZF0pIHtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKGBub3RlIGRvZXNuJ3QgZXhpc3QhICR7aWR9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub3RlT24gPSB0bXBbaWRdO1xuICAgICAgICBjb25zdCBub3RlOiBNSURJTm90ZSA9IHtcbiAgICAgICAgICBpZDogYG5vdGUtJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0tJHtpbmRleCsrfWAsXG4gICAgICAgICAgbm90ZU9uOiBub3RlT24gYXMgTm90ZU9uRXZlbnQsXG4gICAgICAgICAgbm90ZU9mZjogZSxcbiAgICAgICAgICAvLyBkdXJhdGlvblRpY2tzOiBlLnRpY2tzIC0gbm90ZU9uLnRpY2tzLFxuICAgICAgICAgIC8vIGR1cmF0aW9uTWlsbGlzOiBlLm1pbGxpcyAtIG5vdGVPbi5taWxsaXMsXG4gICAgICAgICAgLy8gc3RhcnRUaWNrczogbm90ZU9uLnRpY2tzLFxuICAgICAgICAgIC8vIHN0YXJ0TWlsbGlzOiBub3RlT24ubWlsbGlzLFxuICAgICAgICAgIC8vIGVuZFRpY2tzOiBlLnRpY2tzLFxuICAgICAgICAgIC8vIGVuZE1pbGxpczogZS5taWxsaXMsXG4gICAgICAgIH07XG4gICAgICAgIG5vdGVzLnB1c2gobm90ZSk7XG4gICAgICAgIGRlbGV0ZSB0bXBbaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIC8vIGNvbnNvbGUubG9nKG5vdGVzKTtcbiAgcmV0dXJuIG5vdGVzO1xufTtcbiIsImltcG9ydCB7IGZldGNoQXJyYXlidWZmZXIgfSBmcm9tIFwiLi9mZXRjaF9oZWxwZXJzXCI7XG5pbXBvcnQgeyBwYXJzZU1JRElGaWxlIH0gZnJvbSBcIi4vcGFyc2VNSURJRmlsZVwiO1xuaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuL3R5cGVzL1NvbmdcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNvbmdGcm9tTUlESUZpbGUgPSBhc3luYyAoYXJnOiBzdHJpbmcgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8U29uZz4gPT4ge1xuICBsZXQgYWI6IEFycmF5QnVmZmVyO1xuICBpZiAodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFiID0gYXdhaXQgZmV0Y2hBcnJheWJ1ZmZlcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIGFiID0gYXJnO1xuICB9XG4gIC8vIGNvbnN0IHsgaGVhZGVyLCB0aW1lVHJhY2ssIHRyYWNrcyB9ID0gcGFyc2VNaWRpRmlsZShhYik7XG4gIHJldHVybiBwYXJzZU1JRElGaWxlKGFiKTtcbn07XG4iLCJpbXBvcnQgeyBUcmFjayB9IGZyb20gXCIuL3R5cGVzL1RyYWNrXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFjayA9IChpZDogc3RyaW5nKTogVHJhY2sgPT4ge1xuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGxhdGVuY3k6IDAsXG4gICAgaW5wdXRzOiBbXSxcbiAgICBvdXRwdXRzOiBbXSxcbiAgfTtcbn07XG4iLCJjb25zdCBzdGF0dXMgPSAocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxSZXNwb25zZT4gPT4ge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEpTT04gPSAodXJsOiBzdHJpbmcpOiBQcm9taXNlPEpTT04+ID0+XG4gIC8vIGZldGNoKHVybCwge1xuICAvLyAgIG1vZGU6ICduby1jb3JzJ1xuICAvLyB9KVxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oc3RhdHVzKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFhNTCA9ICh1cmw6IHN0cmluZyk6IFByb21pc2U8WE1MRG9jdW1lbnQ+ID0+XG4gIGZldGNoKHVybClcbiAgICAudGhlbihzdGF0dXMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgIC50aGVuKHN0ciA9PiBuZXcgd2luZG93LkRPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHIsIFwidGV4dC94bWxcIikpO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBcnJheWJ1ZmZlciA9ICh1cmw6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+ID0+XG4gIGZldGNoKHVybClcbiAgICAudGhlbihzdGF0dXMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSk7XG4iLCJpbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vdHlwZXMvU29uZ1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudEV2ZW50SW5kZXggPSAoXG4gIHNvbmc6IFNvbmcsXG4gIG1pbGxpczogbnVtYmVyLFxuICBzdGFydEluZGV4OiBudW1iZXIgPSAwXG4pOiBudW1iZXIgPT4ge1xuICBjb25zdCB7IGV2ZW50cyB9ID0gc29uZztcbiAgbGV0IGkgPSBzdGFydEluZGV4O1xuICBmb3IgKDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2ldO1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50Lm1pbGxpcywgbWlsbGlzKTtcbiAgICBpZiAodHlwZW9mIGV2ZW50Lm1pbGxpcyA9PT0gXCJ1bmRlZmluZWRcIiB8fCBldmVudC5taWxsaXMgPj0gbWlsbGlzKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGk7XG59O1xuIiwibGV0IG1pZGlBY2Nlc3M6IFdlYk1pZGkuTUlESUFjY2VzcyB8IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRNSURJQWNjZXNzID0gYXN5bmMgKCk6IFByb21pc2U8V2ViTWlkaS5NSURJQWNjZXNzIHwgbnVsbD4gPT4ge1xuICBpZiAobWlkaUFjY2VzcyAhPT0gbnVsbCAmJiB0eXBlb2YgbWlkaUFjY2VzcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobWlkaUFjY2Vzcyk7XG4gIH1cblxuICBpZiAoIW5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2Vzcykge1xuICAgIG1pZGlBY2Nlc3MgPSBudWxsO1xuICAgIGNvbnNvbGUubG9nKFwiV2ViTUlESSBub3Qgc3VwcG9ydGVkXCIpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IG1hID0gYXdhaXQgbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzKCk7XG4gICAgLy8gbWlkaUFjY2Vzcy5vbnN0YXRlY2hhbmdlID0gKGU6IFdlYk1pZGkuTUlESUNvbm5lY3Rpb25FdmVudCkgPT4ge1xuICAgIC8vIH07XG4gICAgaWYgKCFtYS5pbnB1dHMgfHwgIW1hLm91dHB1dHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWZveCBXZWJNSURJIEFQSSBzdXBwb3J0IGlzIHN0aWxsIGluIHByb2dyZXNzXCIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIG1pZGlBY2Nlc3MgPSBtYTtcbiAgICByZXR1cm4gbWE7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIk1JREkgY291bGQgbm90IGJlIGluaXRpYWxpemVkOlwiLCBlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBnZXRNSURJUG9ydHMgPSAoXG4gIG1pZGlBY2Nlc3M6IFdlYk1pZGkuTUlESUFjY2VzcyB8IG51bGxcbik6IHtcbiAgaW5wdXRzOiBXZWJNaWRpLk1JRElJbnB1dFtdO1xuICBvdXRwdXRzOiBXZWJNaWRpLk1JRElPdXRwdXRbXTtcbn0gPT4ge1xuICAvLyBleHBvcnQgY29uc3QgZ2V0TUlESURldmljZXMgPSAoKTogeyBpbnB1dHM6IFdlYk1pZGkuTUlESUlucHV0W10sIG91dHB1dHM6IFdlYk1pZGkuTUlESU91dHB1dFtdIH0gPT4ge1xuICBjb25zdCBpbnB1dHM6IFdlYk1pZGkuTUlESUlucHV0W10gPSBbXTtcbiAgY29uc3Qgb3V0cHV0czogV2ViTWlkaS5NSURJT3V0cHV0W10gPSBbXTtcbiAgaWYgKG1pZGlBY2Nlc3MpIHtcbiAgICBtaWRpQWNjZXNzLmlucHV0cy5mb3JFYWNoKGkgPT4ge1xuICAgICAgaW5wdXRzLnB1c2goaSk7XG4gICAgfSk7XG4gICAgbWlkaUFjY2Vzcy5vdXRwdXRzLmZvckVhY2gobyA9PiB7XG4gICAgICBvdXRwdXRzLnB1c2gobyk7XG4gICAgfSk7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coaW5wdXRzLCBvdXRwdXRzKTtcbiAgcmV0dXJuIHsgaW5wdXRzLCBvdXRwdXRzIH07XG59O1xuIiwiLy8gYmFzZWQgb246IGh0dHBzOi8vZ2l0aHViLmNvbS9wcmF2ZG9taWwvamFzbWlkLnRzXG5cbi8vIGltcG9ydCB7IEJ1ZmZlclJlYWRlciB9IGZyb20gJ2phc21pZC50cyc7XG5pbXBvcnQgdW5pcXVpZCBmcm9tIFwidW5pcWlkXCI7XG5pbXBvcnQgeyBCdWZmZXJSZWFkZXIgfSBmcm9tIFwiLi9idWZmZXJyZWFkZXJcIjtcbmltcG9ydCB7IE1JRElFdmVudCB9IGZyb20gXCIuL3R5cGVzL01JRElFdmVudFwiO1xuaW1wb3J0IHtcbiAgU0VRVUVOQ0VfTlVNQkVSLFxuICBURVhULFxuICBDT1BZUklHSFRfTk9USUNFLFxuICBUUkFDS19OQU1FLFxuICBJTlNUUlVNRU5UX05BTUUsXG4gIExZUklDUyxcbiAgTUFSS0VSLFxuICBDVUVfUE9JTlQsXG4gIENIQU5ORUxfUFJFRklYLFxuICBFTkRfT0ZfVFJBQ0ssXG4gIFRFTVBPLFxuICBTTVBURV9PRkZTRVQsXG4gIFRJTUVfU0lHTkFUVVJFLFxuICBLRVlfU0lHTkFUVVJFLFxuICBTRVFVRU5DRVJfU1BFQ0lGSUMsXG4gIFNZU1RFTV9FWENMVVNJVkUsXG4gIERJVklERURfU1lTVEVNX0VYQ0xVU0lWRSxcbiAgTk9URV9PTixcbiAgTk9URV9PRkYsXG4gIE5PVEVfQUZURVJUT1VDSCxcbiAgQ09OVFJPTExFUixcbiAgUFJPR1JBTV9DSEFOR0UsXG4gIENIQU5ORUxfQUZURVJUT1VDSCxcbiAgUElUQ0hfQkVORCxcbiAgc29ydE1JRElFdmVudHMsXG59IGZyb20gXCIuL3V0aWwvbWlkaVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTWlsbGlzIH0gZnJvbSBcIi4vY2FsY3VsYXRlTWlsbGlzXCI7XG5pbXBvcnQgeyBUcmFjayB9IGZyb20gXCIuL3R5cGVzL1RyYWNrXCI7XG5pbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vdHlwZXMvU29uZ1wiO1xuaW1wb3J0IHsgY3JlYXRlVHJhY2sgfSBmcm9tIFwiLi9jcmVhdGVUcmFja1wiO1xuaW1wb3J0IHsgY3JlYXRlTm90ZXMgfSBmcm9tIFwiLi9jcmVhdGVOb3Rlc1wiO1xuXG50eXBlIFBhcnNlZERhdGEgPSB7XG4gIGV2ZW50OiBhbnk7XG4gIGRlbHRhVGltZTogbnVtYmVyO1xuICBicG0/OiBudW1iZXI7XG4gIG51bWVyYXRvcj86IG51bWJlcjtcbiAgZGVub21pbmF0b3I/OiBudW1iZXI7XG4gIHRyYWNrTmFtZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1JRElGaWxlKGJ1ZmZlcjogQXJyYXlCdWZmZXJMaWtlKTogU29uZyB7XG4gIGNvbnN0IHJlYWRlciA9IG5ldyBCdWZmZXJSZWFkZXIoYnVmZmVyKTtcblxuICBjb25zdCBoZWFkZXIgPSBwYXJzZUhlYWRlcihyZWFkZXIpO1xuICAvLyBjb25zdCB7IHRpbWVUcmFjaywgdHJhY2tzIH0gPSBwYXJzZVRyYWNrcyhyZWFkZXIsIGhlYWRlci50aWNrc1BlckJlYXQpXG4gIGNvbnN0IHsgdHJhY2tzLCBldmVudHMsIGluaXRpYWxUZW1wbywgaW5pdGlhbE51bWVyYXRvciwgaW5pdGlhbERlbm9taW5hdG9yIH0gPSBwYXJzZVRyYWNrcyhcbiAgICByZWFkZXIsXG4gICAgaGVhZGVyLnRpY2tzUGVyQmVhdFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHBxOiBoZWFkZXIudGlja3NQZXJCZWF0LFxuICAgIGxhdGVuY3k6IDE3LCAvLyB2YWx1ZSBpbiBtaWxsaXNlY29uZHMgLT4gdGhlIGxlbmd0aCBvZiBhIHNpbmdsZSBmcmFtZSBAIDYwSHogcmVmcmVzaCByYXRlXG4gICAgYnVmZmVyVGltZTogMTAwLCAvLyB2YWx1ZSBpbiBtaWxsaXNlY29uZHNcbiAgICB0cmFja3MsXG4gICAgdHJhY2tzQnlJZDogdHJhY2tzLnJlZHVjZSgoYWNjOiB7IFtpZDogc3RyaW5nXTogVHJhY2sgfSwgdmFsdWUpID0+IHtcbiAgICAgIGFjY1t2YWx1ZS5pZF0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pLFxuICAgIGV2ZW50czogY2FsY3VsYXRlTWlsbGlzKGV2ZW50cywge1xuICAgICAgcHBxOiBoZWFkZXIudGlja3NQZXJCZWF0LFxuICAgICAgYnBtOiBpbml0aWFsVGVtcG8sXG4gICAgfSksXG4gICAgbm90ZXM6IGNyZWF0ZU5vdGVzKGV2ZW50cyksXG4gICAgaW5pdGlhbFRlbXBvLFxuICAgIGluaXRpYWxOdW1lcmF0b3IsXG4gICAgaW5pdGlhbERlbm9taW5hdG9yLFxuICB9IGFzIFNvbmc7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHJlYWRlcjogQnVmZmVyUmVhZGVyKSB7XG4gIGNvbnN0IGhlYWRlckNodW5rID0gcmVhZGVyLm1pZGlDaHVuaygpO1xuICBpZiAoaGVhZGVyQ2h1bmsuaWQgIT09IFwiTVRoZFwiIHx8IGhlYWRlckNodW5rLmxlbmd0aCAhPT0gNikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkJhZCAubWlkIGZpbGUsIGhlYWRlciBub3QgZm91bmRcIik7XG4gIH1cblxuICBjb25zdCBoZWFkZXJSZWFkZXIgPSBuZXcgQnVmZmVyUmVhZGVyKGhlYWRlckNodW5rLmRhdGEpO1xuICBjb25zdCBmb3JtYXRUeXBlID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICBjb25zdCB0cmFja0NvdW50ID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICBjb25zdCB0aW1lRGl2aXNpb24gPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGlmICh0aW1lRGl2aXNpb24gJiAweDgwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHByZXNzaW5nIHRpbWUgZGl2aXNpb24gaW4gU01UUEUgZnJhbWVzIGlzIG5vdCBzdXBwb3J0ZWQgeWV0XCIpO1xuICB9XG4gIGNvbnN0IHRpY2tzUGVyQmVhdCA9IHRpbWVEaXZpc2lvbjtcblxuICByZXR1cm4geyBmb3JtYXRUeXBlLCB0cmFja0NvdW50LCB0aWNrc1BlckJlYXQgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUcmFja3MoXG4gIHJlYWRlcjogQnVmZmVyUmVhZGVyLFxuICBwcHE6IG51bWJlclxuKToge1xuICB0cmFja3M6IFRyYWNrW107XG4gIGV2ZW50czogTUlESUV2ZW50W107XG4gIGluaXRpYWxUZW1wbzogbnVtYmVyO1xuICBpbml0aWFsTnVtZXJhdG9yOiBudW1iZXI7XG4gIGluaXRpYWxEZW5vbWluYXRvcjogbnVtYmVyO1xufSB7XG4gIGxldCBpbml0aWFsVGVtcG8gPSAtMTtcbiAgbGV0IGluaXRpYWxOdW1lcmF0b3IgPSAtMTtcbiAgbGV0IGluaXRpYWxEZW5vbWluYXRvciA9IC0xO1xuICBjb25zdCB0cmFja3M6IFRyYWNrW10gPSBbXTtcbiAgY29uc3QgZXZlbnRzOiBNSURJRXZlbnRbXSA9IFtdO1xuICB3aGlsZSAoIXJlYWRlci5lb2YoKSkge1xuICAgIGNvbnN0IHRyYWNrQ2h1bmsgPSByZWFkZXIubWlkaUNodW5rKCk7XG5cbiAgICBpZiAodHJhY2tDaHVuay5pZCAhPT0gXCJNVHJrXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBjaHVuaywgZXhwZWN0ZWQgTVRyaywgZ290ICR7dHJhY2tDaHVuay5pZH1gKTtcbiAgICB9XG4gICAgY29uc3QgdHJhY2tJZCA9IGBULSR7dW5pcXVpZCgpfWA7XG4gICAgY29uc3QgdHJhY2sgPSBjcmVhdGVUcmFjayh0cmFja0lkKTtcbiAgICBjb25zdCB0cmFja1RyYWNrID0gbmV3IEJ1ZmZlclJlYWRlcih0cmFja0NodW5rLmRhdGEpO1xuICAgIGxldCB0aWNrcyA9IDA7XG4gICAgbGV0IGxhc3RUeXBlQnl0ZSA9IG51bGw7XG4gICAgd2hpbGUgKCF0cmFja1RyYWNrLmVvZigpKSB7XG4gICAgICBsZXQgZGF0YSA9IHBhcnNlRXZlbnQodHJhY2tUcmFjaywgbGFzdFR5cGVCeXRlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgY29uc3QgeyBldmVudCwgZGVsdGFUaW1lLCBicG0sIG51bWVyYXRvciwgZGVub21pbmF0b3IsIHRyYWNrTmFtZSB9ID0gZGF0YTtcbiAgICAgIGlmIChicG0gJiYgaW5pdGlhbFRlbXBvID09PSAtMSkge1xuICAgICAgICBpbml0aWFsVGVtcG8gPSBicG07XG4gICAgICB9XG4gICAgICBpZiAobnVtZXJhdG9yICYmIGluaXRpYWxOdW1lcmF0b3IgPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxOdW1lcmF0b3IgPSBudW1lcmF0b3I7XG4gICAgICB9XG4gICAgICBpZiAoZGVub21pbmF0b3IgJiYgaW5pdGlhbERlbm9taW5hdG9yID09PSAtMSkge1xuICAgICAgICBpbml0aWFsRGVub21pbmF0b3IgPSBkZW5vbWluYXRvcjtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFja05hbWUpIHtcbiAgICAgICAgdHJhY2submFtZSA9IHRyYWNrTmFtZTtcbiAgICAgIH1cbiAgICAgIHRpY2tzICs9IGRlbHRhVGltZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdUSUNLUycsIHRpY2tzLCBicG0sIG51bWVyYXRvcik7XG4gICAgICBsYXN0VHlwZUJ5dGUgPSBldmVudC50eXBlO1xuICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgdHJhY2tJZCxcbiAgICAgICAgdGlja3MsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdHJhY2tzLnB1c2godHJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBldmVudHM6IHNvcnRNSURJRXZlbnRzKGV2ZW50cyksXG4gICAgdHJhY2tzLFxuICAgIGluaXRpYWxUZW1wbyxcbiAgICBpbml0aWFsTnVtZXJhdG9yLFxuICAgIGluaXRpYWxEZW5vbWluYXRvcixcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFdmVudChyZWFkZXI6IEJ1ZmZlclJlYWRlciwgbGFzdFR5cGVCeXRlOiBudW1iZXIgfCBudWxsKTogUGFyc2VkRGF0YSB7XG4gIGNvbnN0IGRlbHRhVGltZSA9IHJlYWRlci5taWRpSW50KCk7XG4gIGxldCB0eXBlQnl0ZSA9IHJlYWRlci51aW50OCgpO1xuXG4gIC8vIG1ldGEgZXZlbnRzOiAweGZmXG4gIC8vIHN5c3RlbSBldmVudHM6IDB4ZjAsIDB4ZjdcbiAgLy8gbWlkaSBldmVudHM6IGFsbCBvdGhlciBieXRlc1xuXG4gIGlmICh0eXBlQnl0ZSA9PT0gMHhmZikge1xuICAgIGNvbnN0IHN1YlR5cGVCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgY29uc3QgbGVuZ3RoID0gcmVhZGVyLm1pZGlJbnQoKTtcblxuICAgIHN3aXRjaCAoc3ViVHlwZUJ5dGUpIHtcbiAgICAgIC8vIHNlcXVlbmNlIG51bWJlclxuICAgICAgY2FzZSAweDAwOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHNlcXVlbmNlTnVtYmVyIGV2ZW50IGlzIDIsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFNFUVVFTkNFX05VTUJFUixcbiAgICAgICAgICAgIG51bWJlcjogcmVhZGVyLnVpbnQxNigpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGV4dFxuICAgICAgY2FzZSAweDAxOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRFWFQsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjb3B5cmlnaHRcbiAgICAgIGNhc2UgMHgwMjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBDT1BZUklHSFRfTk9USUNFLFxuICAgICAgICAgICAgdGV4dDogcmVhZGVyLnN0cmluZyhsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdHJhY2sgbmFtZVxuICAgICAgY2FzZSAweDAzOlxuICAgICAgICBjb25zdCB0cmFja05hbWUgPSByZWFkZXIuc3RyaW5nKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogVFJBQ0tfTkFNRSxcbiAgICAgICAgICAgIHRleHQ6IHRyYWNrTmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgICB0cmFja05hbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBpbnN0cnVtZW50IG5hbWVcbiAgICAgIGNhc2UgMHgwNDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBJTlNUUlVNRU5UX05BTUUsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBseXJpY3NcbiAgICAgIGNhc2UgMHgwNTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBMWVJJQ1MsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBtYXJrZXJcbiAgICAgIGNhc2UgMHgwNjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBNQVJLRVIsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjdWUgcG9pbnRcbiAgICAgIGNhc2UgMHgwNzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBDVUVfUE9JTlQsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjaGFubmVsIHByZWZpeFxuICAgICAgY2FzZSAweDIwOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIG1pZGlDaGFubmVsUHJlZml4IGV2ZW50IGlzIDEsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENIQU5ORUxfUFJFRklYLFxuICAgICAgICAgICAgY2hhbm5lbDogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBlbmQgb2YgdHJhY2tcbiAgICAgIGNhc2UgMHgyZjpcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBlbmRPZlRyYWNrIGV2ZW50IGlzIDAsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICBkZXNjcjogRU5EX09GX1RSQUNLLFxuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHRlbXBvXG4gICAgICBjYXNlIDB4NTE6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc2V0VGVtcG8gZXZlbnQgaXMgMywgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1pY3Jvc2Vjb25kc1BlckJlYXQgPSAocmVhZGVyLnVpbnQ4KCkgPDwgMTYpICsgKHJlYWRlci51aW50OCgpIDw8IDgpICsgcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIGNvbnN0IGJwbSA9IDYwMDAwMDAwIC8gbWljcm9zZWNvbmRzUGVyQmVhdDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBURU1QTyxcbiAgICAgICAgICAgIGJwbSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJwbSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBzbXB0ZSBvZmZzZXRcbiAgICAgIGNhc2UgMHg1NDpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSA1KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHNtcHRlT2Zmc2V0IGV2ZW50IGlzIDUsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBob3VyQnl0ZSA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFNNUFRFX09GRlNFVCxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogZ2V0RnJhbWVSYXRlKGhvdXJCeXRlKSxcbiAgICAgICAgICAgIGhvdXI6IGhvdXJCeXRlICYgMHgxZixcbiAgICAgICAgICAgIG1pbjogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBzZWM6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgZnJhbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgc3ViRnJhbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGltZSBzaWduYXR1cmVcbiAgICAgIGNhc2UgMHg1ODpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSA0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHRpbWVTaWduYXR1cmUgZXZlbnQgaXMgNCwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG51bWVyYXRvciA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICBjb25zdCBkZW5vbWluYXRvciA9IE1hdGgucG93KDIsIHJlYWRlci51aW50OCgpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBUSU1FX1NJR05BVFVSRSxcbiAgICAgICAgICAgIG51bWVyYXRvcixcbiAgICAgICAgICAgIGRlbm9taW5hdG9yLFxuICAgICAgICAgICAgbWV0cm9ub21lOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICAgIHRoaXJ0eVNlY29uZHM6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbnVtZXJhdG9yLFxuICAgICAgICAgIGRlbm9taW5hdG9yLFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGtleSBzaWduYXR1cmVcbiAgICAgIGNhc2UgMHg1OTpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIGtleVNpZ25hdHVyZSBldmVudCBpcyAyLCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBLRVlfU0lHTkFUVVJFLFxuICAgICAgICAgICAga2V5OiByZWFkZXIuaW50OCgpLFxuICAgICAgICAgICAgc2NhbGU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gc2VxdWVuY2VyIHNwZWNpZmljXG4gICAgICBjYXNlIDB4N2Y6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU0VRVUVOQ0VSX1NQRUNJRklDLFxuICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHVuZGVmaW5lZFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBcInVuZGVmaW5lZFwiLFxuICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZUJ5dGUgPT09IDB4ZjApIHtcbiAgICAvLyBzeXN0ZW0gZXhjbHVzaXZlXG4gICAgY29uc3QgbGVuZ3RoID0gcmVhZGVyLm1pZGlJbnQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQ6IHtcbiAgICAgICAgdHlwZTogMHhmMCxcbiAgICAgICAgZGVzY3I6IFNZU1RFTV9FWENMVVNJVkUsXG4gICAgICAgIGRhdGE6IHJlYWRlci5yZWFkKGxlbmd0aCksXG4gICAgICB9LFxuICAgICAgZGVsdGFUaW1lLFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZUJ5dGUgPT09IDB4ZjcpIHtcbiAgICAvLyBkaXZpZGVkIHN5c3RlbSBleGNsdXNpdmVcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDoge1xuICAgICAgICB0eXBlOiAweGYwLFxuICAgICAgICBkZXNjcjogRElWSURFRF9TWVNURU1fRVhDTFVTSVZFLFxuICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgfSxcbiAgICAgIGRlbHRhVGltZSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8qKlxuICAgICAqIHJ1bm5pbmcgc3RhdHVzIC0gcmV1c2UgbGFzdEV2ZW50VHlwZUJ5dGUgYXMgdGhlIGV2ZW50IHR5cGVcbiAgICAgKiB0eXBlQnl0ZSBpcyBhY3R1YWxseSB0aGUgZmlyc3QgcGFyYW1ldGVyXG4gICAgICovXG4gICAgY29uc3QgaXNSdW5uaW5nU3RhdHVzID0gKHR5cGVCeXRlICYgMGIxMDAwMDAwMCkgPT09IDA7XG4gICAgY29uc3QgdmFsdWUgPSBpc1J1bm5pbmdTdGF0dXMgPyB0eXBlQnl0ZSA6IHJlYWRlci51aW50OCgpO1xuICAgIHR5cGVCeXRlID0gaXNSdW5uaW5nU3RhdHVzID8gKGxhc3RUeXBlQnl0ZSA9PT0gbnVsbCA/IDAgOiBsYXN0VHlwZUJ5dGUpIDogdHlwZUJ5dGU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhpc1J1bm5pbmdTdGF0dXMsIHR5cGVCeXRlLCB2YWx1ZSk7XG5cbiAgICBjb25zdCBjaGFubmVsID0gdHlwZUJ5dGUgJiAweDBmO1xuICAgIC8vIGNoYW5uZWxzW2NoYW5uZWxdID0gdHJ1ZTtcblxuICAgIHN3aXRjaCAodHlwZUJ5dGUgPj4gNCkge1xuICAgICAgLy8gbm90ZSBvZmZcbiAgICAgIGNhc2UgMHgwODpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHg4MCxcbiAgICAgICAgICAgIGRlc2NyOiBOT1RFX09GRixcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIG5vdGUgb25cbiAgICAgIGNhc2UgMHgwOTpcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSByZWFkZXIudWludDgoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdmVsb2NpdHkgPT09IDAgPyAweDgwIDogMHg5MCxcbiAgICAgICAgICAgIGRlc2NyOiB2ZWxvY2l0eSA9PT0gMCA/IE5PVEVfT0ZGIDogTk9URV9PTixcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgIHZlbG9jaXR5LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gbm90ZSBhZnRlcnRvdWNoXG4gICAgICBjYXNlIDB4MGE6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4YTAsXG4gICAgICAgICAgICBkZXNjcjogTk9URV9BRlRFUlRPVUNILFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgYW1vdW50OiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNvbnRyb2xsZXJcbiAgICAgIGNhc2UgMHgwYjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhiMCxcbiAgICAgICAgICAgIGRlc2NyOiBDT05UUk9MTEVSLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gcHJvZ3JhbSBjaGFuZ2VcbiAgICAgIGNhc2UgMHgwYzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhjMCxcbiAgICAgICAgICAgIGRlc2NyOiBQUk9HUkFNX0NIQU5HRSxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBwcm9ncmFtOiB2YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNoYW5uZWwgYWZ0ZXJ0b3VjaFxuICAgICAgY2FzZSAweDBkOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGQwLFxuICAgICAgICAgICAgZGVzY3I6IENIQU5ORUxfQUZURVJUT1VDSCxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBhbW91bnQ6IHZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gcGl0Y2ggYmVuZFxuICAgICAgY2FzZSAweDBlOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGUwLFxuICAgICAgICAgICAgZGVzY3I6IFBJVENIX0JFTkQsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlICsgKHJlYWRlci51aW50OCgpIDw8IDcpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuXG4gICAgICAvLyBkZWZhdWx0OlxuICAgICAgLy8gICByZXR1cm4ge1xuICAgICAgLy8gICAgIGV2ZW50OiB7XG4gICAgICAvLyAgICAgICB0eXBlOiB0eXBlQnl0ZSA+PiA0LFxuICAgICAgLy8gICAgICAgZGVzY3I6IFwidW5yZWNvZ25pemVkXCIsXG4gICAgICAvLyAgICAgICBjaGFubmVsLFxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAgZGVsdGFUaW1lLFxuICAgICAgLy8gICB9O1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhgVW5yZWNvZ25pemVkIE1JREkgZXZlbnQgdHlwZSBieXRlOiAke3R5cGVCeXRlfSAoZml4IHRoaXMpYCk7XG4gIHJldHVybiB7XG4gICAgZXZlbnQ6IHtcbiAgICAgIHR5cGU6IHR5cGVCeXRlID09PSAyNTUgPyAwIDogdHlwZUJ5dGUsXG4gICAgfSxcbiAgICBkZWx0YVRpbWUsXG4gIH07XG4gIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIE1JREkgZXZlbnQgdHlwZSBieXRlOiAke3R5cGVCeXRlfWApO1xufVxuXG5mdW5jdGlvbiBnZXRGcmFtZVJhdGUoaG91ckJ5dGU6IG51bWJlcikge1xuICBzd2l0Y2ggKGhvdXJCeXRlICYgMGIxMTAwMDAwKSB7XG4gICAgY2FzZSAweDAwOlxuICAgICAgcmV0dXJuIDI0O1xuICAgIGNhc2UgMHgyMDpcbiAgICAgIHJldHVybiAyNTtcbiAgICBjYXNlIDB4NDA6XG4gICAgICByZXR1cm4gMjk7XG4gICAgY2FzZSAweDYwOlxuICAgICAgcmV0dXJuIDMwO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuL3R5cGVzL1NvbmdcIjtcbmltcG9ydCB7IE1JRElFdmVudCwgTm90ZU9uRXZlbnQgfSBmcm9tIFwiLi90eXBlcy9NSURJRXZlbnRcIjtcbmltcG9ydCB7IE5PVEVfT04sIE5PVEVfT0ZGIH0gZnJvbSBcIi4vdXRpbC9taWRpXCI7XG5cbnR5cGUgQXJncyA9IHtcbiAgc29uZzogU29uZztcbiAgbWlsbGlzOiBudW1iZXI7XG4gIGluZGV4OiBudW1iZXI7XG4gIG91dHB1dHM/OiBXZWJNaWRpLk1JRElPdXRwdXRNYXA7XG59O1xuZXhwb3J0IGNvbnN0IHNjaGVkdWxlID0gKHtcbiAgc29uZyxcbiAgaW5kZXgsXG4gIG1pbGxpcyxcbiAgb3V0cHV0cyxcbn06IEFyZ3MpOiB7IG1pbGxpczogbnVtYmVyOyBpbmRleDogbnVtYmVyOyBzY2hlZHVsZWQ6IE1JRElFdmVudFtdIH0gPT4ge1xuICBjb25zdCB0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBjb25zdCB7IGV2ZW50cyB9ID0gc29uZztcbiAgY29uc3Qgc2NoZWR1bGVkID0gW107XG4gIC8vIGxldCBsYXN0Tm90ZU51bWJlcjogbnVtYmVyID0gLTE7XG4gIC8vIGxldCBsYXN0Tm90ZVR5cGU6IG51bWJlciA9IC0xO1xuICB3aGlsZSAoaW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaW5kZXhdO1xuICAgIGlmICghZXZlbnQubWlsbGlzIHx8ICFldmVudC50cmFja0lkKSB7XG4gICAgICAvLyBicmVhaztcbiAgICAgIGluZGV4Kys7XG4gICAgfSBlbHNlIGlmIChldmVudC5taWxsaXMgPCBtaWxsaXMgKyBzb25nLmJ1ZmZlclRpbWUpIHtcbiAgICAgIHNjaGVkdWxlZC5wdXNoKGV2ZW50KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRpY2tzLCBldmVudC5kZXNjciwgKGV2ZW50IGFzIE5vdGVPbkV2ZW50KS5ub3RlTnVtYmVyKTtcbiAgICAgIGNvbnN0IHRyYWNrID0gc29uZy50cmFja3NCeUlkW2V2ZW50LnRyYWNrSWRdO1xuICAgICAgdHJhY2sub3V0cHV0cy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRlc2NyID09PSBOT1RFX09OIHx8IGV2ZW50LmRlc2NyID09PSBOT1RFX09GRikge1xuICAgICAgICAgIGNvbnN0IGUgPSBldmVudCBhcyBOb3RlT25FdmVudDtcbiAgICAgICAgICBpZiAoZXZlbnQubWlsbGlzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50eXBlLCBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyKTtcbiAgICAgICAgICAgIGxldCB0aW1lID0gdHMgKyBzb25nLmxhdGVuY3kgKyB0cmFjay5sYXRlbmN5ICsgKGV2ZW50Lm1pbGxpcyAtIG1pbGxpcyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFtcIm5vdGVOdW1iZXJcIl0sIGV2ZW50LmRlc2NyLCBldmVudC5taWxsaXMsIG1pbGxpcywgdGltZSwgdHMsIHRpbWUgLSB0cyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLm5vdGVOdW1iZXIsIGxhc3ROb3RlTnVtYmVyLCBsYXN0Tm90ZVR5cGUpO1xuICAgICAgICAgICAgLy8gaWYgKGUubm90ZU51bWJlciA9PT0gbGFzdE5vdGVOdW1iZXIgJiYgbGFzdE5vdGVUeXBlID09PSAweDkwKSB7XG4gICAgICAgICAgICAvLyAgIGlmIChlLmRlc2NyID09PSBOT1RFX09OKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZXBlYXRpbmcgbm90ZXNcIik7XG4gICAgICAgICAgICAvLyAgICAgdGltZSArPSAxO1xuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBsYXN0Tm90ZU51bWJlciA9IGUubm90ZU51bWJlcjtcbiAgICAgICAgICAgIC8vIGxhc3ROb3RlVHlwZSA9IGUudHlwZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnR5cGUgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eSk7XG4gICAgICAgICAgICAvLyBxdWljayBmaXggZm9yIHJlcGVhdGluZyBub3Rlc1xuICAgICAgICAgICAgaWYgKGUuZGVzY3IgPT09IE5PVEVfT04pIHtcbiAgICAgICAgICAgICAgdGltZSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0c1xuICAgICAgICAgICAgICA/LmdldChpZClcbiAgICAgICAgICAgICAgPy5zZW5kKFtldmVudC50eXBlICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHldLCB0aW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKCdbU0NIRURVTEVEXScsIHNjaGVkdWxlZC5tYXAoZSA9PiBbZS50aWNrcywgZS5taWxsaXNdKSk7XG4gIHJldHVybiB7IG1pbGxpcywgaW5kZXgsIHNjaGVkdWxlZCB9O1xufTtcbiIsImltcG9ydCB7IE1JRElFdmVudCB9IGZyb20gXCIuLi90eXBlcy9NSURJRXZlbnRcIjtcblxuZXhwb3J0IGNvbnN0IFNFUVVFTkNFX05VTUJFUiA9IFwic2VxdWVuY2UgbnVtYmVyXCI7XG5leHBvcnQgY29uc3QgVEVYVCA9IFwidGV4dFwiO1xuZXhwb3J0IGNvbnN0IENPUFlSSUdIVF9OT1RJQ0UgPSBcImNvcHlyaWdodCBub3RpY2VcIjtcbmV4cG9ydCBjb25zdCBUUkFDS19OQU1FID0gXCJ0cmFjayBuYW1lXCI7XG5leHBvcnQgY29uc3QgSU5TVFJVTUVOVF9OQU1FID0gXCJpbnN0cnVtZW50IG5hbWVcIjtcbmV4cG9ydCBjb25zdCBMWVJJQ1MgPSBcImx5cmljc1wiO1xuZXhwb3J0IGNvbnN0IE1BUktFUiA9IFwibWFya2VyXCI7XG5leHBvcnQgY29uc3QgQ1VFX1BPSU5UID0gXCJjdWUgcG9pbnRcIjtcbmV4cG9ydCBjb25zdCBDSEFOTkVMX1BSRUZJWCA9IFwiY2hhbm5lbCBwcmVmaXhcIjtcbmV4cG9ydCBjb25zdCBFTkRfT0ZfVFJBQ0sgPSBcImVuZCBvZiB0cmFja1wiO1xuZXhwb3J0IGNvbnN0IFRFTVBPID0gXCJ0ZW1wb1wiO1xuZXhwb3J0IGNvbnN0IFNNUFRFX09GRlNFVCA9IFwic21wdGUgb2Zmc2V0XCI7XG5leHBvcnQgY29uc3QgVElNRV9TSUdOQVRVUkUgPSBcInRpbWUgc2lnbmF0dXJlXCI7XG5leHBvcnQgY29uc3QgS0VZX1NJR05BVFVSRSA9IFwia2V5IHNpZ25hdHVyZVwiO1xuZXhwb3J0IGNvbnN0IFNFUVVFTkNFUl9TUEVDSUZJQyA9IFwic2VxdWVuY2VyIHNwZWNpZmljXCI7XG5leHBvcnQgY29uc3QgU1lTVEVNX0VYQ0xVU0lWRSA9IFwic3lzdGVtIGV4Y2x1c2l2ZVwiO1xuZXhwb3J0IGNvbnN0IERJVklERURfU1lTVEVNX0VYQ0xVU0lWRSA9IFwiZGl2aWRlZCBzeXN0ZW0gZXhjbHVzaXZlXCI7XG5leHBvcnQgY29uc3QgTk9URV9PTiA9IFwibm90ZSBvblwiO1xuZXhwb3J0IGNvbnN0IE5PVEVfT0ZGID0gXCJub3RlIG9mZlwiO1xuZXhwb3J0IGNvbnN0IE5PVEVfQUZURVJUT1VDSCA9IFwibm90ZSBhZnRlcnRvdWNoXCI7XG5leHBvcnQgY29uc3QgQ09OVFJPTExFUiA9IFwiY29udHJvbGxlclwiO1xuZXhwb3J0IGNvbnN0IFBST0dSQU1fQ0hBTkdFID0gXCJwcm9ncmFtIGNoYW5nZVwiO1xuZXhwb3J0IGNvbnN0IENIQU5ORUxfQUZURVJUT1VDSCA9IFwiY2hhbm5lbCBhZnRlcnRvdWNoXCI7XG5leHBvcnQgY29uc3QgUElUQ0hfQkVORCA9IFwicGl0Y2ggYmVuZFwiO1xuXG5jb25zdCBkZXNjcmlwdGlvbnM6IHsgW2luZGV4OiBudW1iZXJdOiB7IFtpbmRleDogbnVtYmVyXTogc3RyaW5nIH0gfCBzdHJpbmcgfSA9IHtcbiAgMHhmZjoge1xuICAgIDB4MDA6IFwic2VxdWVuY2UgbnVtYmVyXCIsXG4gICAgMHgwMTogXCJ0ZXh0XCIsXG4gICAgMHgwMjogXCJjb3B5cmlnaHQgbm90aWNlXCIsXG4gICAgMHgwMzogXCJ0cmFjayBuYW1lXCIsXG4gICAgMHgwNDogXCJpbnN0cnVtZW50IG5hbWVcIixcbiAgICAweDA1OiBcImx5cmljc1wiLFxuICAgIDB4MDY6IFwibWFya2VyXCIsXG4gICAgMHgwNzogXCJjdWUgcG9pbnRcIixcbiAgICAweDIwOiBcImNoYW5uZWwgcHJlZml4XCIsXG4gICAgMHgyZjogXCJlbmQgb2YgdHJhY2tcIixcbiAgICAweDUxOiBcInRlbXBvXCIsXG4gICAgMHg1NDogXCJzbXB0ZSBvZmZzZXRcIixcbiAgICAweDU4OiBcInRpbWUgc2lnbmF0dXJlXCIsXG4gICAgMHg1OTogXCJrZXkgc2lnbmF0dXJlXCIsXG4gICAgMHg3ZjogXCJzZXF1ZW5jZXIgc3BlY2lmaWNcIixcbiAgfSxcbiAgMHhmMDogXCJzeXN0ZW0gZXhjbHVzaXZlXCIsXG4gIDB4Zjc6IFwiZGl2aWRlZCBzeXNleFwiLFxuICAweDgwOiBcIm5vdGUgb25cIixcbiAgMHg5MDogXCJub3RlIG9mZlwiLFxuICAweGEwOiBcIm5vdGUgYWZ0ZXJ0b3VjaFwiLFxuICAweGIwOiBcImNvbnRyb2xsZXJcIixcbiAgMHhjMDogXCJwcm9ncmFtIGNoYW5nZVwiLFxuICAweGQwOiBcImNoYW5uZWwgYWZ0ZXJ0b3VjaFwiLFxuICAweGUwOiBcInBpdGNoIGJlbmRcIixcbn07XG5cbmV4cG9ydCBjb25zdCBub3RlTmFtZXMgPSB7XG4gIHNoYXJwOiBbXCJDXCIsIFwiQyNcIiwgXCJEXCIsIFwiRCNcIiwgXCJFXCIsIFwiRlwiLCBcIkYjXCIsIFwiR1wiLCBcIkcjXCIsIFwiQVwiLCBcIkEjXCIsIFwiQlwiXSxcbiAgZmxhdDogW1wiQ1wiLCBcIkRiXCIsIFwiRFwiLCBcIkViXCIsIFwiRVwiLCBcIkZcIiwgXCJHYlwiLCBcIkdcIiwgXCJBYlwiLCBcIkFcIiwgXCJCYlwiLCBcIkJcIl0sXG4gIFwiZW5oYXJtb25pYy1zaGFycFwiOiBbXCJCI1wiLCBcIkMjXCIsIFwiQyMjXCIsIFwiRCNcIiwgXCJEIyNcIiwgXCJFI1wiLCBcIkYjXCIsIFwiRiMjXCIsIFwiRyNcIiwgXCJHIyNcIiwgXCJBI1wiLCBcIkEjI1wiXSxcbiAgXCJlbmhhcm1vbmljLWZsYXRcIjogW1wiRGJiXCIsIFwiRGJcIiwgXCJFYmJcIiwgXCJFYlwiLCBcIkZiXCIsIFwiR2JiXCIsIFwiR2JcIiwgXCJBYmJcIiwgXCJBYlwiLCBcIkJiYlwiLCBcIkJiXCIsIFwiQ2JcIl0sXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWlkaUV2ZW50RGVzY3JpcHRpb24gPSAodHlwZTogbnVtYmVyLCBzdWJUeXBlPzogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgaWYgKHR5cGVvZiBzdWJUeXBlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uc1t0eXBlXSBhcyBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIGRlc2NyaXB0aW9uc1t0eXBlXVtzdWJUeXBlXSB8fCBcInVuZGVmaW5lZFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE1pZGlNZXNzYWdlRXZlbnQgPSAoZXZlbnQ6IE1JRElFdmVudCk6IG51bWJlcltdID0+IHtcbiAgc3dpdGNoIChldmVudC5kZXNjcikge1xuICAgIGNhc2UgTk9URV9PTjpcbiAgICAgIHJldHVybiBbMHg5MCArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5XTtcbiAgICBjYXNlIE5PVEVfT0ZGOlxuICAgICAgcmV0dXJuIFsweDgwICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHldO1xuICB9XG4gIHJldHVybiBbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Tm90ZU51bWJlciA9IChuYW1lOiBzdHJpbmcsIG9jdGF2ZTogbnVtYmVyLCBtb2RlOiBzdHJpbmcgPSBcInNoYXJwXCIpOiBudW1iZXIgPT4ge1xuICAvLyBsZXQgaW5kZXggPSAtMTtcbiAgLy8gY29uc3QgbW9kZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhub3RlTmFtZXMpO1xuICAvLyBmb3IgKGxldCBpID0gMCwgbWF4aSA9IG1vZGVzLmxlbmd0aDsgaSA8IG1heGk7IGkrKykge1xuICAvLyAgIGNvbnN0IG5hbWVzID0gbW9kZXNbaV07XG4gIC8vICAgZm9yIChsZXQgaiA9IDAsIG1heGogPSBuYW1lcy5sZW5ndGg7IGogPCBtYXhqOyBqKyspIHtcbiAgLy8gICAgIGlmIChtb2RlW2pdID09PSBuYW1lKSB7XG4gIC8vICAgICAgIGluZGV4ID0gaTtcbiAgLy8gICAgICAgYnJlYWs7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIGxldCBpbmRleCA9IC0xO1xuICBjb25zdCBtb2RlcyA9IE9iamVjdC52YWx1ZXMobm90ZU5hbWVzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hbWVzID0gbW9kZXNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuYW1lcy5sZW5ndGg7IGorKykge1xuICAgICAgLy8gY29uc29sZS5sb2cobmFtZXNbal0sIG5hbWUpO1xuICAgICAgaWYgKG5hbWVzW2pdID09PSBuYW1lKSB7XG4gICAgICAgIGluZGV4ID0gajtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKG5hbWUsIG9jdGF2ZSwgaW5kZXgpO1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLy9udW1iZXIgPSAoaW5kZXggKyAxMikgKyAob2N0YXZlICogMTIpICsgMTI7IC8vIOKGkiBpbiBDdWJhc2UgY2VudHJhbCBDID0gQzMgaW5zdGVhZCBvZiBDNFxuICByZXR1cm4gaW5kZXggKyAxMiArIG9jdGF2ZSAqIDEyOyAvLyDihpIgbWlkaSBzdGFuZGFyZCArIHNjaWVudGlmaWMgbmFtaW5nLCBzZWU6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWlkZGxlX0MgYW5kIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2NpZW50aWZpY19waXRjaF9ub3RhdGlvblxufTtcblxuZXhwb3J0IGNvbnN0IHNvcnRNSURJRXZlbnRzID0gKGV2ZW50czogTUlESUV2ZW50W10pOiBNSURJRXZlbnRbXSA9PlxuICBldmVudHMuc29ydCgoYTogTUlESUV2ZW50LCBiOiBNSURJRXZlbnQpID0+IHtcbiAgICBpZiAoYS50aWNrcyA8IGIudGlja3MpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYgKGEudGlja3MgPiBiLnRpY2tzKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICAgIC8vIH0gZWxzZSBpZiAoYS50eXBlID09PSAweDgwICYmIGIudHlwZSA9PT0gMHg5MCkge1xuICAgICAgLy8gICAvLyBub3RlIG9mZiBiZWZvcmUgbm90ZSBvblxuICAgICAgLy8gICByZXR1cm4gLTE7XG4gICAgICAvLyB9IGVsc2UgaWYgKGEudHlwZSA9PT0gMHg1MSB8fCBhLnR5cGUgPT09IDB4NTgpIHtcbiAgICAgIC8vICAgLy8gdGVtcG8gYW5kIHRpbWUgc2lnbmF0dXJlIGV2ZW50cyBmaXJzdFxuICAgICAgLy8gICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZURvdWJsZUV2ZW50cyA9IChldmVudHM6IE1JRElFdmVudFtdKTogTUlESUV2ZW50W10gPT4ge1xuICAvLyB2YXIgaSwgbWF4aSA9IGV2ZW50cy5sZW5ndGgsXG4gIC8vICAgZXZlbnQsIGV2ZW50SWQsIGxhc3RJZCxcbiAgLy8gICByZXN1bHQgPSBbXTtcblxuICAvLyBldmVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAvLyAgIHJldHVybiBhLmV2ZW50TnVtYmVyIC0gYi5ldmVudE51bWJlcjtcbiAgLy8gfSk7XG5cbiAgLy8gZm9yIChpID0gMDsgaSA8IG1heGk7IGkrKykge1xuICAvLyAgIGV2ZW50ID0gZXZlbnRzW2ldO1xuICAvLyAgIGV2ZW50SWQgPSBldmVudC5pZDtcbiAgLy8gICBpZiAoZXZlbnRJZCAhPT0gbGFzdElkKSB7XG4gIC8vICAgICByZXN1bHQucHVzaChldmVudCk7XG4gIC8vICAgfVxuICAvLyAgIGxhc3RJZCA9IGV2ZW50SWQ7XG4gIC8vIH1cbiAgLy8gcmV0dXJuIHJlc3VsdDtcbiAgcmV0dXJuIFtdO1xufTtcbiIsImltcG9ydCB7IHNjaGVkdWxlIH0gZnJvbSBcIi4uLy4uL3NyYy9zY2hlZHVsZXJcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRFdmVudEluZGV4IH0gZnJvbSBcIi4uLy4uL3NyYy9nZXRDdXJyZW50RXZlbnRJbmRleFwiO1xuaW1wb3J0IHsgZ2V0TUlESUFjY2VzcyB9IGZyb20gXCIuLi8uLi9zcmMvZ2V0TUlESUFjY2Vzc1wiO1xuaW1wb3J0IHsgZ2V0TUlESVBvcnRzIH0gZnJvbSBcIi4uLy4uL3NyYy9nZXRNSURJUG9ydHNcIjtcbmltcG9ydCB7IGNyZWF0ZVNvbmdGcm9tTUlESUZpbGUgfSBmcm9tIFwiLi4vLi4vc3JjL2NyZWF0ZVNvbmdGcm9tTUlESUZpbGVcIjtcblxuY29uc3QgdXJsID0gXCIuLi8uLi9hc3NldHMvbWludXRlX3dhbHR6Lm1pZFwiO1xuLy8gY29uc3QgdXJsID0gJy4uLy4uL2Fzc2V0cy9tb3prNTQ1YS5taWQnO1xuLy8gY29uc3QgdXJsID0gJy4uLy4uL2Fzc2V0cy9tb3prNTQ1YV9tdXNlc2NvcmUubWlkJztcblxuY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbWEgPSBhd2FpdCBnZXRNSURJQWNjZXNzKCk7XG4gIGNvbnN0IHNvbmcgPSBhd2FpdCBjcmVhdGVTb25nRnJvbU1JRElGaWxlKHVybCk7XG4gIGNvbnN0IHsgaW5wdXRzLCBvdXRwdXRzIH0gPSBnZXRNSURJUG9ydHMobWEpO1xuICBzb25nLnRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICB0cmFjay5vdXRwdXRzLnB1c2goLi4ub3V0cHV0cy5tYXAobyA9PiBvLmlkKSk7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhzb25nKTtcblxuICBsZXQgbWlsbGlzID0gMzAwMDtcbiAgbGV0IGluZGV4ID0gZ2V0Q3VycmVudEV2ZW50SW5kZXgoc29uZywgbWlsbGlzKTtcbiAgLy8gY29uc29sZS5sb2coJ1NUQVJUIElOREVYJywgaW5kZXgpO1xuICBsZXQgc3RhcnQ6IG51bWJlciA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBjb25zdCBwbGF5ID0gKGE6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRzID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgLy8gY29uc29sZS5sb2codHMsIGEpO1xuICAgIC8vIGNvbnN0IHByb2dyZXNzID0gdHMgLSBhO1xuICAgIGNvbnN0IHByb2dyZXNzID0gdHMgLSBzdGFydDtcbiAgICBzdGFydCA9IHRzO1xuICAgIC8vIGNvbnN0IHByb2dyZXNzID0gYSAtIHN0YXJ0O1xuICAgIC8vIHN0YXJ0ID0gYTtcbiAgICBpZiAobWlsbGlzIDwgMTAwMDApIHtcbiAgICAgICh7IGluZGV4LCBtaWxsaXMgfSA9IHNjaGVkdWxlKHtcbiAgICAgICAgc29uZyxcbiAgICAgICAgbWlsbGlzLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgb3V0cHV0czogbWE/Lm91dHB1dHMsXG4gICAgICB9KSk7XG4gICAgICBtaWxsaXMgKz0gcHJvZ3Jlc3M7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCwgbWlsbGlzKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhID0+IHtcbiAgICAgICAgcGxheShhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgcGxheShzdGFydCk7XG59O1xuXG5pbml0KCk7XG5cbi8vIGZldGNoKHVybClcbi8vICAgLnRoZW4oYXJyYXlCdWZmZXIpXG4vLyAgIC50aGVuKGFiID0+IHtcbi8vICAgICBjb25zdCB7IGhlYWRlciwgdHJhY2tzIH0gPSBwYXJzZU1pZGlGaWxlKGFiKTtcbi8vICAgICBjb25zb2xlLmxvZyh0cmFja3MpO1xuLy8gICB9KTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXSwic291cmNlUm9vdCI6IiJ9
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./basic/index.ts");
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

/***/ "../src/resetMIDIOutputs.ts":
/*!**********************************!*\
  !*** ../src/resetMIDIOutputs.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resetMIDIOutputs = void 0;
// import { midiAccess } from "./initAudioAndMIDI";
var getMIDIPorts_1 = __webpack_require__(/*! ./getMIDIPorts */ "../src/getMIDIPorts.ts");
exports.resetMIDIOutputs = function (midiAccess, offset) {
    if (offset === void 0) { offset = 100; }
    if (midiAccess) {
        var outputs = getMIDIPorts_1.getMIDIPorts(midiAccess).outputs;
        var time_1 = performance.now() + offset;
        outputs.forEach(function (output) {
            for (var channel = 0; channel < 16; channel++) {
                output.send([0xb0 + channel, 0x7b, 0x00], time_1); // stop all notes
                output.send([0xb0 + channel, 0x79, 0x00], time_1); // reset all controllers
            }
        });
    }
};


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

/***/ "./basic/index.ts":
/*!************************!*\
  !*** ./basic/index.ts ***!
  \************************/
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
var getCurrentEventIndex_1 = __webpack_require__(/*! ../../src/getCurrentEventIndex */ "../src/getCurrentEventIndex.ts");
var getMIDIAccess_1 = __webpack_require__(/*! ../../src/getMIDIAccess */ "../src/getMIDIAccess.ts");
var getMIDIPorts_1 = __webpack_require__(/*! ../../src/getMIDIPorts */ "../src/getMIDIPorts.ts");
var createSongFromMIDIFile_1 = __webpack_require__(/*! ../../src/createSongFromMIDIFile */ "../src/createSongFromMIDIFile.ts");
var resetMIDIOutputs_1 = __webpack_require__(/*! ../../src/resetMIDIOutputs */ "../src/resetMIDIOutputs.ts");
var url = "../../assets/minute_waltz.mid";
// const url = '/assets/mozk545a.mid';
// const url = '/assets/mozk545a_musescore.mid';
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
                song.positionMillis = millis;
                index = getCurrentEventIndex_1.getCurrentEventIndex(song, millis);
                start = performance.now();
                play = function (a) {
                    var _a;
                    var ts = performance.now();
                    // console.log(ts, ts - start, a, a - start);
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
                    else {
                        resetMIDIOutputs_1.resetMIDIOutputs(ma);
                    }
                };
                play(start);
                return [2 /*return*/];
        }
    });
}); };
init();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9idWZmZXJyZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jYWxjdWxhdGVNaWxsaXMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVOb3Rlcy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NyZWF0ZVNvbmdGcm9tTUlESUZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVUcmFjay50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ZldGNoX2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9nZXRDdXJyZW50RXZlbnRJbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2dldE1JRElBY2Nlc3MudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9nZXRNSURJUG9ydHMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZU1JRElGaWxlLnRzIiwid2VicGFjazovLy8uLi9zcmMvcmVzZXRNSURJT3V0cHV0cy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3NjaGVkdWxlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWwvbWlkaS50cyIsIndlYnBhY2s6Ly8vLi9iYXNpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVIiwiZmlsZSI6ImJhc2ljL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iYXNpYy9pbmRleC50c1wiKTtcbiIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDE5IEhhbMOhc3ogw4Fkw6FtIDxtYWlsQGFkYW1oYWxhc3ouY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHByb2Nlc3MgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicpe1xuICAgIHZhciBtYWMgPSAnJywgbmV0d29ya0ludGVyZmFjZXMgPSByZXF1aXJlKCdvcycpLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsIi8vIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9wcmF2ZG9taWwvamFzbWlkLnRzXG5cbmV4cG9ydCBjbGFzcyBCdWZmZXJSZWFkZXIge1xuICBwcml2YXRlIHBvc2l0aW9uOiBudW1iZXI7XG4gIHByaXZhdGUgZGF0YTogRGF0YVZpZXc7XG5cbiAgY29uc3RydWN0b3IoYnVmZmVyOiBBcnJheUJ1ZmZlckxpa2UpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICB0aGlzLmRhdGEgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgfVxuXG4gIHJlYWQobGVuZ3RoOiBudW1iZXIpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5idWZmZXIuc2xpY2UodGhpcy5wb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiArIGxlbmd0aCk7XG4gICAgdGhpcy5wb3NpdGlvbiArPSBsZW5ndGg7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaW50OCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRJbnQ4KHRoaXMucG9zaXRpb24pO1xuICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICB1aW50OCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50OCh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDE2KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmdldFVpbnQxNih0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDI7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDMyKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmdldFVpbnQzMih0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDQ7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RyaW5nKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcihcImFzY2lpXCIpLmRlY29kZSh0aGlzLnJlYWQobGVuZ3RoKSk7XG4gIH1cblxuICBlb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPj0gdGhpcy5kYXRhLmJ5dGVMZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBhIE1JREktc3R5bGUgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuXG4gICAqIChiaWctZW5kaWFuIHZhbHVlIGluIGdyb3VwcyBvZiA3IGJpdHMsIHdpdGggdG9wIGJpdCBzZXQgdG8gc2lnbmlmeSB0aGF0IGFub3RoZXIgYnl0ZSBmb2xsb3dzKVxuICAgKi9cbiAgbWlkaUludCgpIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnVpbnQ4KCk7XG4gICAgICBpZiAodmFsdWUgJiAwYjEwMDAwMDAwKSB7XG4gICAgICAgIHJlc3VsdCArPSB2YWx1ZSAmIDBiMTExMTExMTtcbiAgICAgICAgcmVzdWx0IDw8PSA3O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1pZGlDaHVuaygpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuc3RyaW5nKDQpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMudWludDMyKCk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVhZChsZW5ndGgpO1xuICAgIHJldHVybiB7IGlkLCBsZW5ndGgsIGRhdGEgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTUlESUV2ZW50LCBUZW1wb0V2ZW50IH0gZnJvbSBcIi4vdHlwZXMvTUlESUV2ZW50XCI7XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVNaWxsaXMgPSAoXG4gIGV2ZW50czogTUlESUV2ZW50W10sXG4gIGRhdGE6IHtcbiAgICBwcHE6IG51bWJlcjtcbiAgICBicG0/OiBudW1iZXI7XG4gICAgcGxheWJhY2tTcGVlZD86IG51bWJlcjtcbiAgfVxuKTogTUlESUV2ZW50W10gPT4ge1xuICBsZXQgeyBwcHEsIGJwbSA9IC0xLCBwbGF5YmFja1NwZWVkID0gMSB9ID0gZGF0YTtcbiAgbGV0IG1pbGxpc1BlclRpY2sgPSBicG0gPT09IC0xID8gMCA6ICgoKDEgLyBwbGF5YmFja1NwZWVkKSAqIDYwKSAvIGJwbSAvIHBwcSkgKiAxMDAwO1xuICBsZXQgdGlja3MgPSAwO1xuICBsZXQgbWlsbGlzID0gMDtcbiAgLy8gY29uc29sZS5sb2coXCJicG1cIiwgYnBtLCBtaWxsaXMpO1xuICByZXR1cm4gZXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgaWYgKChldmVudCBhcyBUZW1wb0V2ZW50KS5icG0pIHtcbiAgICAgICh7IGJwbSB9ID0gZXZlbnQgYXMgVGVtcG9FdmVudCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImJwbVwiLCBicG0sIG1pbGxpcyk7XG4gICAgICBtaWxsaXNQZXJUaWNrID0gKCgoMSAvIHBsYXliYWNrU3BlZWQpICogNjApIC8gYnBtIC8gcHBxKSAqIDEwMDA7XG4gICAgfVxuICAgIGNvbnN0IGRpZmZUaWNrcyA9IGV2ZW50LnRpY2tzIC0gdGlja3M7XG4gICAgbWlsbGlzICs9IGRpZmZUaWNrcyAqIG1pbGxpc1BlclRpY2s7XG4gICAgZXZlbnQubWlsbGlzID0gbWlsbGlzO1xuICAgIHRpY2tzID0gZXZlbnQudGlja3M7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBNSURJRXZlbnQsIE5vdGVFdmVudCwgTm90ZU9uRXZlbnQsIE5vdGVPZmZFdmVudCB9IGZyb20gXCIuL3R5cGVzL01JRElFdmVudFwiO1xuXG5leHBvcnQgdHlwZSBNSURJTm90ZSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbm90ZU9uOiBOb3RlT25FdmVudDtcbiAgbm90ZU9mZjogTm90ZU9mZkV2ZW50O1xuICBkdXJhdGlvblRpY2tzPzogbnVtYmVyO1xuICBkdXJhdGlvbk1pbGxpcz86IG51bWJlcjtcbiAgc3RhcnRUaWNrcz86IG51bWJlcjtcbiAgZW5kVGlja3M/OiBudW1iZXI7XG4gIHN0YXJ0TWlsbGlzPzogbnVtYmVyO1xuICBlbmRNaWxsaXM/OiBudW1iZXI7XG59O1xuXG5sZXQgaW5kZXggPSAwO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTm90ZXMgPSAoZXZlbnRzOiBNSURJRXZlbnRbXSk6IE1JRElOb3RlW10gPT4ge1xuICBsZXQgZmlsdGVyZWQ6IE5vdGVFdmVudFtdID0gZXZlbnRzLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwudHlwZSk7XG4gICAgaWYgKHZhbC50eXBlID09PSAweDgwIHx8IHZhbC50eXBlID09PSAweDkwKSB7XG4gICAgICBhY2MucHVzaCh2YWwgYXMgTm90ZUV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10gYXMgTm90ZUV2ZW50W10pO1xuICAvLyBmaWx0ZXJlZCA9IHNvcnRNSURJRXZlbnRzKGZpbHRlcmVkKTtcbiAgY29uc3Qgbm90ZXM6IE1JRElOb3RlW10gPSBbXTtcbiAgY29uc3QgdG1wOiB7IFtpZDogc3RyaW5nXTogTm90ZUV2ZW50IH0gPSB7fTtcbiAgZmlsdGVyZWQuZm9yRWFjaChlID0+IHtcbiAgICBjb25zdCBpZCA9IGAke2UudHJhY2tJZH0tJHtlLm5vdGVOdW1iZXJ9YDtcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRpY2tzLCBlLnR5cGUsIGlkKTtcbiAgICBpZiAoZS50eXBlID09PSAweDkwKSB7XG4gICAgICBpZiAodG1wW2lkXSkge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oYG5vdGUgZXhpc3RlZCBhbHJlYWR5ISAke2lkfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG1wW2lkXSA9IGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnR5cGUgPT09IDB4ODApIHtcbiAgICAgIGlmICghdG1wW2lkXSkge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oYG5vdGUgZG9lc24ndCBleGlzdCEgJHtpZH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdGVPbiA9IHRtcFtpZF07XG4gICAgICAgIGNvbnN0IG5vdGU6IE1JRElOb3RlID0ge1xuICAgICAgICAgIGlkOiBgbm90ZS0ke25ldyBEYXRlKCkuZ2V0VGltZSgpfS0ke2luZGV4Kyt9YCxcbiAgICAgICAgICBub3RlT246IG5vdGVPbiBhcyBOb3RlT25FdmVudCxcbiAgICAgICAgICBub3RlT2ZmOiBlLFxuICAgICAgICAgIC8vIGR1cmF0aW9uVGlja3M6IGUudGlja3MgLSBub3RlT24udGlja3MsXG4gICAgICAgICAgLy8gZHVyYXRpb25NaWxsaXM6IGUubWlsbGlzIC0gbm90ZU9uLm1pbGxpcyxcbiAgICAgICAgICAvLyBzdGFydFRpY2tzOiBub3RlT24udGlja3MsXG4gICAgICAgICAgLy8gc3RhcnRNaWxsaXM6IG5vdGVPbi5taWxsaXMsXG4gICAgICAgICAgLy8gZW5kVGlja3M6IGUudGlja3MsXG4gICAgICAgICAgLy8gZW5kTWlsbGlzOiBlLm1pbGxpcyxcbiAgICAgICAgfTtcbiAgICAgICAgbm90ZXMucHVzaChub3RlKTtcbiAgICAgICAgZGVsZXRlIHRtcFtpZF07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLy8gY29uc29sZS5sb2cobm90ZXMpO1xuICByZXR1cm4gbm90ZXM7XG59O1xuIiwiaW1wb3J0IHsgZmV0Y2hBcnJheWJ1ZmZlciB9IGZyb20gXCIuL2ZldGNoX2hlbHBlcnNcIjtcbmltcG9ydCB7IHBhcnNlTUlESUZpbGUgfSBmcm9tIFwiLi9wYXJzZU1JRElGaWxlXCI7XG5pbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vdHlwZXMvU29uZ1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU29uZ0Zyb21NSURJRmlsZSA9IGFzeW5jIChhcmc6IHN0cmluZyB8IEFycmF5QnVmZmVyKTogUHJvbWlzZTxTb25nPiA9PiB7XG4gIGxldCBhYjogQXJyYXlCdWZmZXI7XG4gIGlmICh0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKSB7XG4gICAgYWIgPSBhd2FpdCBmZXRjaEFycmF5YnVmZmVyKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgYWIgPSBhcmc7XG4gIH1cbiAgLy8gY29uc3QgeyBoZWFkZXIsIHRpbWVUcmFjaywgdHJhY2tzIH0gPSBwYXJzZU1pZGlGaWxlKGFiKTtcbiAgcmV0dXJuIHBhcnNlTUlESUZpbGUoYWIpO1xufTtcbiIsImltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIi4vdHlwZXMvVHJhY2tcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYWNrID0gKGlkOiBzdHJpbmcpOiBUcmFjayA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgbGF0ZW5jeTogMCxcbiAgICBpbnB1dHM6IFtdLFxuICAgIG91dHB1dHM6IFtdLFxuICB9O1xufTtcbiIsImNvbnN0IHN0YXR1cyA9IChyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoSlNPTiA9ICh1cmw6IHN0cmluZyk6IFByb21pc2U8SlNPTj4gPT5cbiAgLy8gZmV0Y2godXJsLCB7XG4gIC8vICAgbW9kZTogJ25vLWNvcnMnXG4gIC8vIH0pXG4gIGZldGNoKHVybClcbiAgICAudGhlbihzdGF0dXMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoWE1MID0gKHVybDogc3RyaW5nKTogUHJvbWlzZTxYTUxEb2N1bWVudD4gPT5cbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHN0YXR1cylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgLnRoZW4oc3RyID0+IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0ciwgXCJ0ZXh0L3htbFwiKSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEFycmF5YnVmZmVyID0gKHVybDogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4gPT5cbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHN0YXR1cylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKTtcbiIsImltcG9ydCB7IFNvbmcgfSBmcm9tIFwiLi90eXBlcy9Tb25nXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50RXZlbnRJbmRleCA9IChcbiAgc29uZzogU29uZyxcbiAgbWlsbGlzOiBudW1iZXIsXG4gIHN0YXJ0SW5kZXg6IG51bWJlciA9IDBcbik6IG51bWJlciA9PiB7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSBzb25nO1xuICBsZXQgaSA9IHN0YXJ0SW5kZXg7XG4gIGZvciAoOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaV07XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQubWlsbGlzLCBtaWxsaXMpO1xuICAgIGlmICh0eXBlb2YgZXZlbnQubWlsbGlzID09PSBcInVuZGVmaW5lZFwiIHx8IGV2ZW50Lm1pbGxpcyA+PSBtaWxsaXMpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaTtcbn07XG4iLCJsZXQgbWlkaUFjY2VzczogV2ViTWlkaS5NSURJQWNjZXNzIHwgbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldE1JRElBY2Nlc3MgPSBhc3luYyAoKTogUHJvbWlzZTxXZWJNaWRpLk1JRElBY2Nlc3MgfCBudWxsPiA9PiB7XG4gIGlmIChtaWRpQWNjZXNzICE9PSBudWxsICYmIHR5cGVvZiBtaWRpQWNjZXNzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtaWRpQWNjZXNzKTtcbiAgfVxuXG4gIGlmICghbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzKSB7XG4gICAgbWlkaUFjY2VzcyA9IG51bGw7XG4gICAgY29uc29sZS5sb2coXCJXZWJNSURJIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgbWEgPSBhd2FpdCBuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3MoKTtcbiAgICAvLyBtaWRpQWNjZXNzLm9uc3RhdGVjaGFuZ2UgPSAoZTogV2ViTWlkaS5NSURJQ29ubmVjdGlvbkV2ZW50KSA9PiB7XG4gICAgLy8gfTtcbiAgICBpZiAoIW1hLmlucHV0cyB8fCAhbWEub3V0cHV0cykge1xuICAgICAgY29uc29sZS5sb2coXCJGaXJlZm94IFdlYk1JREkgQVBJIHN1cHBvcnQgaXMgc3RpbGwgaW4gcHJvZ3Jlc3NcIik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbWlkaUFjY2VzcyA9IG1hO1xuICAgIHJldHVybiBtYTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiTUlESSBjb3VsZCBub3QgYmUgaW5pdGlhbGl6ZWQ6XCIsIGUpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldE1JRElQb3J0cyA9IChcbiAgbWlkaUFjY2VzczogV2ViTWlkaS5NSURJQWNjZXNzIHwgbnVsbFxuKToge1xuICBpbnB1dHM6IFdlYk1pZGkuTUlESUlucHV0W107XG4gIG91dHB1dHM6IFdlYk1pZGkuTUlESU91dHB1dFtdO1xufSA9PiB7XG4gIC8vIGV4cG9ydCBjb25zdCBnZXRNSURJRGV2aWNlcyA9ICgpOiB7IGlucHV0czogV2ViTWlkaS5NSURJSW5wdXRbXSwgb3V0cHV0czogV2ViTWlkaS5NSURJT3V0cHV0W10gfSA9PiB7XG4gIGNvbnN0IGlucHV0czogV2ViTWlkaS5NSURJSW5wdXRbXSA9IFtdO1xuICBjb25zdCBvdXRwdXRzOiBXZWJNaWRpLk1JRElPdXRwdXRbXSA9IFtdO1xuICBpZiAobWlkaUFjY2Vzcykge1xuICAgIG1pZGlBY2Nlc3MuaW5wdXRzLmZvckVhY2goaSA9PiB7XG4gICAgICBpbnB1dHMucHVzaChpKTtcbiAgICB9KTtcbiAgICBtaWRpQWNjZXNzLm91dHB1dHMuZm9yRWFjaChvID0+IHtcbiAgICAgIG91dHB1dHMucHVzaChvKTtcbiAgICB9KTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZyhpbnB1dHMsIG91dHB1dHMpO1xuICByZXR1cm4geyBpbnB1dHMsIG91dHB1dHMgfTtcbn07XG4iLCIvLyBiYXNlZCBvbjogaHR0cHM6Ly9naXRodWIuY29tL3ByYXZkb21pbC9qYXNtaWQudHNcblxuLy8gaW1wb3J0IHsgQnVmZmVyUmVhZGVyIH0gZnJvbSAnamFzbWlkLnRzJztcbmltcG9ydCB1bmlxdWlkIGZyb20gXCJ1bmlxaWRcIjtcbmltcG9ydCB7IEJ1ZmZlclJlYWRlciB9IGZyb20gXCIuL2J1ZmZlcnJlYWRlclwiO1xuaW1wb3J0IHsgTUlESUV2ZW50IH0gZnJvbSBcIi4vdHlwZXMvTUlESUV2ZW50XCI7XG5pbXBvcnQge1xuICBTRVFVRU5DRV9OVU1CRVIsXG4gIFRFWFQsXG4gIENPUFlSSUdIVF9OT1RJQ0UsXG4gIFRSQUNLX05BTUUsXG4gIElOU1RSVU1FTlRfTkFNRSxcbiAgTFlSSUNTLFxuICBNQVJLRVIsXG4gIENVRV9QT0lOVCxcbiAgQ0hBTk5FTF9QUkVGSVgsXG4gIEVORF9PRl9UUkFDSyxcbiAgVEVNUE8sXG4gIFNNUFRFX09GRlNFVCxcbiAgVElNRV9TSUdOQVRVUkUsXG4gIEtFWV9TSUdOQVRVUkUsXG4gIFNFUVVFTkNFUl9TUEVDSUZJQyxcbiAgU1lTVEVNX0VYQ0xVU0lWRSxcbiAgRElWSURFRF9TWVNURU1fRVhDTFVTSVZFLFxuICBOT1RFX09OLFxuICBOT1RFX09GRixcbiAgTk9URV9BRlRFUlRPVUNILFxuICBDT05UUk9MTEVSLFxuICBQUk9HUkFNX0NIQU5HRSxcbiAgQ0hBTk5FTF9BRlRFUlRPVUNILFxuICBQSVRDSF9CRU5ELFxuICBzb3J0TUlESUV2ZW50cyxcbn0gZnJvbSBcIi4vdXRpbC9taWRpXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVNaWxsaXMgfSBmcm9tIFwiLi9jYWxjdWxhdGVNaWxsaXNcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIi4vdHlwZXMvVHJhY2tcIjtcbmltcG9ydCB7IFNvbmcgfSBmcm9tIFwiLi90eXBlcy9Tb25nXCI7XG5pbXBvcnQgeyBjcmVhdGVUcmFjayB9IGZyb20gXCIuL2NyZWF0ZVRyYWNrXCI7XG5pbXBvcnQgeyBjcmVhdGVOb3RlcyB9IGZyb20gXCIuL2NyZWF0ZU5vdGVzXCI7XG5cbnR5cGUgUGFyc2VkRGF0YSA9IHtcbiAgZXZlbnQ6IGFueTtcbiAgZGVsdGFUaW1lOiBudW1iZXI7XG4gIGJwbT86IG51bWJlcjtcbiAgbnVtZXJhdG9yPzogbnVtYmVyO1xuICBkZW5vbWluYXRvcj86IG51bWJlcjtcbiAgdHJhY2tOYW1lPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTUlESUZpbGUoYnVmZmVyOiBBcnJheUJ1ZmZlckxpa2UpOiBTb25nIHtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEJ1ZmZlclJlYWRlcihidWZmZXIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IHBhcnNlSGVhZGVyKHJlYWRlcik7XG4gIC8vIGNvbnN0IHsgdGltZVRyYWNrLCB0cmFja3MgfSA9IHBhcnNlVHJhY2tzKHJlYWRlciwgaGVhZGVyLnRpY2tzUGVyQmVhdClcbiAgY29uc3QgeyB0cmFja3MsIGV2ZW50cywgaW5pdGlhbFRlbXBvLCBpbml0aWFsTnVtZXJhdG9yLCBpbml0aWFsRGVub21pbmF0b3IgfSA9IHBhcnNlVHJhY2tzKFxuICAgIHJlYWRlcixcbiAgICBoZWFkZXIudGlja3NQZXJCZWF0XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcHE6IGhlYWRlci50aWNrc1BlckJlYXQsXG4gICAgbGF0ZW5jeTogMTcsIC8vIHZhbHVlIGluIG1pbGxpc2Vjb25kcyAtPiB0aGUgbGVuZ3RoIG9mIGEgc2luZ2xlIGZyYW1lIEAgNjBIeiByZWZyZXNoIHJhdGVcbiAgICBidWZmZXJUaW1lOiAxMDAsIC8vIHZhbHVlIGluIG1pbGxpc2Vjb25kc1xuICAgIHRyYWNrcyxcbiAgICB0cmFja3NCeUlkOiB0cmFja3MucmVkdWNlKChhY2M6IHsgW2lkOiBzdHJpbmddOiBUcmFjayB9LCB2YWx1ZSkgPT4ge1xuICAgICAgYWNjW3ZhbHVlLmlkXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSksXG4gICAgZXZlbnRzOiBjYWxjdWxhdGVNaWxsaXMoZXZlbnRzLCB7XG4gICAgICBwcHE6IGhlYWRlci50aWNrc1BlckJlYXQsXG4gICAgICBicG06IGluaXRpYWxUZW1wbyxcbiAgICB9KSxcbiAgICBub3RlczogY3JlYXRlTm90ZXMoZXZlbnRzKSxcbiAgICBpbml0aWFsVGVtcG8sXG4gICAgaW5pdGlhbE51bWVyYXRvcixcbiAgICBpbml0aWFsRGVub21pbmF0b3IsXG4gIH0gYXMgU29uZztcbn1cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIocmVhZGVyOiBCdWZmZXJSZWFkZXIpIHtcbiAgY29uc3QgaGVhZGVyQ2h1bmsgPSByZWFkZXIubWlkaUNodW5rKCk7XG4gIGlmIChoZWFkZXJDaHVuay5pZCAhPT0gXCJNVGhkXCIgfHwgaGVhZGVyQ2h1bmsubGVuZ3RoICE9PSA2KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQmFkIC5taWQgZmlsZSwgaGVhZGVyIG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRlclJlYWRlciA9IG5ldyBCdWZmZXJSZWFkZXIoaGVhZGVyQ2h1bmsuZGF0YSk7XG4gIGNvbnN0IGZvcm1hdFR5cGUgPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGNvbnN0IHRyYWNrQ291bnQgPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGNvbnN0IHRpbWVEaXZpc2lvbiA9IGhlYWRlclJlYWRlci51aW50MTYoKTtcbiAgaWYgKHRpbWVEaXZpc2lvbiAmIDB4ODAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkV4cHJlc3NpbmcgdGltZSBkaXZpc2lvbiBpbiBTTVRQRSBmcmFtZXMgaXMgbm90IHN1cHBvcnRlZCB5ZXRcIik7XG4gIH1cbiAgY29uc3QgdGlja3NQZXJCZWF0ID0gdGltZURpdmlzaW9uO1xuXG4gIHJldHVybiB7IGZvcm1hdFR5cGUsIHRyYWNrQ291bnQsIHRpY2tzUGVyQmVhdCB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVRyYWNrcyhcbiAgcmVhZGVyOiBCdWZmZXJSZWFkZXIsXG4gIHBwcTogbnVtYmVyXG4pOiB7XG4gIHRyYWNrczogVHJhY2tbXTtcbiAgZXZlbnRzOiBNSURJRXZlbnRbXTtcbiAgaW5pdGlhbFRlbXBvOiBudW1iZXI7XG4gIGluaXRpYWxOdW1lcmF0b3I6IG51bWJlcjtcbiAgaW5pdGlhbERlbm9taW5hdG9yOiBudW1iZXI7XG59IHtcbiAgbGV0IGluaXRpYWxUZW1wbyA9IC0xO1xuICBsZXQgaW5pdGlhbE51bWVyYXRvciA9IC0xO1xuICBsZXQgaW5pdGlhbERlbm9taW5hdG9yID0gLTE7XG4gIGNvbnN0IHRyYWNrczogVHJhY2tbXSA9IFtdO1xuICBjb25zdCBldmVudHM6IE1JRElFdmVudFtdID0gW107XG4gIHdoaWxlICghcmVhZGVyLmVvZigpKSB7XG4gICAgY29uc3QgdHJhY2tDaHVuayA9IHJlYWRlci5taWRpQ2h1bmsoKTtcblxuICAgIGlmICh0cmFja0NodW5rLmlkICE9PSBcIk1UcmtcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGNodW5rLCBleHBlY3RlZCBNVHJrLCBnb3QgJHt0cmFja0NodW5rLmlkfWApO1xuICAgIH1cbiAgICBjb25zdCB0cmFja0lkID0gYFQtJHt1bmlxdWlkKCl9YDtcbiAgICBjb25zdCB0cmFjayA9IGNyZWF0ZVRyYWNrKHRyYWNrSWQpO1xuICAgIGNvbnN0IHRyYWNrVHJhY2sgPSBuZXcgQnVmZmVyUmVhZGVyKHRyYWNrQ2h1bmsuZGF0YSk7XG4gICAgbGV0IHRpY2tzID0gMDtcbiAgICBsZXQgbGFzdFR5cGVCeXRlID0gbnVsbDtcbiAgICB3aGlsZSAoIXRyYWNrVHJhY2suZW9mKCkpIHtcbiAgICAgIGxldCBkYXRhID0gcGFyc2VFdmVudCh0cmFja1RyYWNrLCBsYXN0VHlwZUJ5dGUpO1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjb25zdCB7IGV2ZW50LCBkZWx0YVRpbWUsIGJwbSwgbnVtZXJhdG9yLCBkZW5vbWluYXRvciwgdHJhY2tOYW1lIH0gPSBkYXRhO1xuICAgICAgaWYgKGJwbSAmJiBpbml0aWFsVGVtcG8gPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxUZW1wbyA9IGJwbTtcbiAgICAgIH1cbiAgICAgIGlmIChudW1lcmF0b3IgJiYgaW5pdGlhbE51bWVyYXRvciA9PT0gLTEpIHtcbiAgICAgICAgaW5pdGlhbE51bWVyYXRvciA9IG51bWVyYXRvcjtcbiAgICAgIH1cbiAgICAgIGlmIChkZW5vbWluYXRvciAmJiBpbml0aWFsRGVub21pbmF0b3IgPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxEZW5vbWluYXRvciA9IGRlbm9taW5hdG9yO1xuICAgICAgfVxuICAgICAgaWYgKHRyYWNrTmFtZSkge1xuICAgICAgICB0cmFjay5uYW1lID0gdHJhY2tOYW1lO1xuICAgICAgfVxuICAgICAgdGlja3MgKz0gZGVsdGFUaW1lO1xuICAgICAgLy8gY29uc29sZS5sb2coJ1RJQ0tTJywgdGlja3MsIGJwbSwgbnVtZXJhdG9yKTtcbiAgICAgIGxhc3RUeXBlQnl0ZSA9IGV2ZW50LnR5cGU7XG4gICAgICBldmVudHMucHVzaCh7XG4gICAgICAgIC4uLmV2ZW50LFxuICAgICAgICB0cmFja0lkLFxuICAgICAgICB0aWNrcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0cmFja3MucHVzaCh0cmFjayk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV2ZW50czogc29ydE1JRElFdmVudHMoZXZlbnRzKSxcbiAgICB0cmFja3MsXG4gICAgaW5pdGlhbFRlbXBvLFxuICAgIGluaXRpYWxOdW1lcmF0b3IsXG4gICAgaW5pdGlhbERlbm9taW5hdG9yLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZUV2ZW50KHJlYWRlcjogQnVmZmVyUmVhZGVyLCBsYXN0VHlwZUJ5dGU6IG51bWJlciB8IG51bGwpOiBQYXJzZWREYXRhIHtcbiAgY29uc3QgZGVsdGFUaW1lID0gcmVhZGVyLm1pZGlJbnQoKTtcbiAgbGV0IHR5cGVCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG5cbiAgLy8gbWV0YSBldmVudHM6IDB4ZmZcbiAgLy8gc3lzdGVtIGV2ZW50czogMHhmMCwgMHhmN1xuICAvLyBtaWRpIGV2ZW50czogYWxsIG90aGVyIGJ5dGVzXG5cbiAgaWYgKHR5cGVCeXRlID09PSAweGZmKSB7XG4gICAgY29uc3Qgc3ViVHlwZUJ5dGUgPSByZWFkZXIudWludDgoKTtcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuXG4gICAgc3dpdGNoIChzdWJUeXBlQnl0ZSkge1xuICAgICAgLy8gc2VxdWVuY2UgbnVtYmVyXG4gICAgICBjYXNlIDB4MDA6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc2VxdWVuY2VOdW1iZXIgZXZlbnQgaXMgMiwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU0VRVUVOQ0VfTlVNQkVSLFxuICAgICAgICAgICAgbnVtYmVyOiByZWFkZXIudWludDE2KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0ZXh0XG4gICAgICBjYXNlIDB4MDE6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogVEVYVCxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNvcHlyaWdodFxuICAgICAgY2FzZSAweDAyOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENPUFlSSUdIVF9OT1RJQ0UsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0cmFjayBuYW1lXG4gICAgICBjYXNlIDB4MDM6XG4gICAgICAgIGNvbnN0IHRyYWNrTmFtZSA9IHJlYWRlci5zdHJpbmcobGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBUUkFDS19OQU1FLFxuICAgICAgICAgICAgdGV4dDogdHJhY2tOYW1lLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICAgIHRyYWNrTmFtZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGluc3RydW1lbnQgbmFtZVxuICAgICAgY2FzZSAweDA0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IElOU1RSVU1FTlRfTkFNRSxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGx5cmljc1xuICAgICAgY2FzZSAweDA1OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IExZUklDUyxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIG1hcmtlclxuICAgICAgY2FzZSAweDA2OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IE1BUktFUixcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGN1ZSBwb2ludFxuICAgICAgY2FzZSAweDA3OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENVRV9QT0lOVCxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNoYW5uZWwgcHJlZml4XG4gICAgICBjYXNlIDB4MjA6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3IgbWlkaUNoYW5uZWxQcmVmaXggZXZlbnQgaXMgMSwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogQ0hBTk5FTF9QUkVGSVgsXG4gICAgICAgICAgICBjaGFubmVsOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGVuZCBvZiB0cmFja1xuICAgICAgY2FzZSAweDJmOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIGVuZE9mVHJhY2sgZXZlbnQgaXMgMCwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIGRlc2NyOiBFTkRfT0ZfVFJBQ0ssXG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGVtcG9cbiAgICAgIGNhc2UgMHg1MTpcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBzZXRUZW1wbyBldmVudCBpcyAzLCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWljcm9zZWNvbmRzUGVyQmVhdCA9IChyZWFkZXIudWludDgoKSA8PCAxNikgKyAocmVhZGVyLnVpbnQ4KCkgPDwgOCkgKyByZWFkZXIudWludDgoKTtcbiAgICAgICAgY29uc3QgYnBtID0gNjAwMDAwMDAgLyBtaWNyb3NlY29uZHNQZXJCZWF0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRFTVBPLFxuICAgICAgICAgICAgYnBtLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYnBtLFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHNtcHRlIG9mZnNldFxuICAgICAgY2FzZSAweDU0OlxuICAgICAgICBpZiAobGVuZ3RoICE9IDUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc21wdGVPZmZzZXQgZXZlbnQgaXMgNSwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhvdXJCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU01QVEVfT0ZGU0VULFxuICAgICAgICAgICAgZnJhbWVSYXRlOiBnZXRGcmFtZVJhdGUoaG91ckJ5dGUpLFxuICAgICAgICAgICAgaG91cjogaG91ckJ5dGUgJiAweDFmLFxuICAgICAgICAgICAgbWluOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICAgIHNlYzogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBmcmFtZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBzdWJGcmFtZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0aW1lIHNpZ25hdHVyZVxuICAgICAgY2FzZSAweDU4OlxuICAgICAgICBpZiAobGVuZ3RoICE9IDQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3IgdGltZVNpZ25hdHVyZSBldmVudCBpcyA0LCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbnVtZXJhdG9yID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIGNvbnN0IGRlbm9taW5hdG9yID0gTWF0aC5wb3coMiwgcmVhZGVyLnVpbnQ4KCkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRJTUVfU0lHTkFUVVJFLFxuICAgICAgICAgICAgbnVtZXJhdG9yLFxuICAgICAgICAgICAgZGVub21pbmF0b3IsXG4gICAgICAgICAgICBtZXRyb25vbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgdGhpcnR5U2Vjb25kczogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBudW1lcmF0b3IsXG4gICAgICAgICAgZGVub21pbmF0b3IsXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8ga2V5IHNpZ25hdHVyZVxuICAgICAgY2FzZSAweDU5OlxuICAgICAgICBpZiAobGVuZ3RoICE9IDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Iga2V5U2lnbmF0dXJlIGV2ZW50IGlzIDIsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IEtFWV9TSUdOQVRVUkUsXG4gICAgICAgICAgICBrZXk6IHJlYWRlci5pbnQ4KCksXG4gICAgICAgICAgICBzY2FsZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBzZXF1ZW5jZXIgc3BlY2lmaWNcbiAgICAgIGNhc2UgMHg3ZjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBTRVFVRU5DRVJfU1BFQ0lGSUMsXG4gICAgICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdW5kZWZpbmVkXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFwidW5kZWZpbmVkXCIsXG4gICAgICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlQnl0ZSA9PT0gMHhmMCkge1xuICAgIC8vIHN5c3RlbSBleGNsdXNpdmVcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDoge1xuICAgICAgICB0eXBlOiAweGYwLFxuICAgICAgICBkZXNjcjogU1lTVEVNX0VYQ0xVU0lWRSxcbiAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgIH0sXG4gICAgICBkZWx0YVRpbWUsXG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlQnl0ZSA9PT0gMHhmNykge1xuICAgIC8vIGRpdmlkZWQgc3lzdGVtIGV4Y2x1c2l2ZVxuICAgIGNvbnN0IGxlbmd0aCA9IHJlYWRlci5taWRpSW50KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV2ZW50OiB7XG4gICAgICAgIHR5cGU6IDB4ZjAsXG4gICAgICAgIGRlc2NyOiBESVZJREVEX1NZU1RFTV9FWENMVVNJVkUsXG4gICAgICAgIGRhdGE6IHJlYWRlci5yZWFkKGxlbmd0aCksXG4gICAgICB9LFxuICAgICAgZGVsdGFUaW1lLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLyoqXG4gICAgICogcnVubmluZyBzdGF0dXMgLSByZXVzZSBsYXN0RXZlbnRUeXBlQnl0ZSBhcyB0aGUgZXZlbnQgdHlwZVxuICAgICAqIHR5cGVCeXRlIGlzIGFjdHVhbGx5IHRoZSBmaXJzdCBwYXJhbWV0ZXJcbiAgICAgKi9cbiAgICBjb25zdCBpc1J1bm5pbmdTdGF0dXMgPSAodHlwZUJ5dGUgJiAwYjEwMDAwMDAwKSA9PT0gMDtcbiAgICBjb25zdCB2YWx1ZSA9IGlzUnVubmluZ1N0YXR1cyA/IHR5cGVCeXRlIDogcmVhZGVyLnVpbnQ4KCk7XG4gICAgdHlwZUJ5dGUgPSBpc1J1bm5pbmdTdGF0dXMgPyAobGFzdFR5cGVCeXRlID09PSBudWxsID8gMCA6IGxhc3RUeXBlQnl0ZSkgOiB0eXBlQnl0ZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGlzUnVubmluZ1N0YXR1cywgdHlwZUJ5dGUsIHZhbHVlKTtcblxuICAgIGNvbnN0IGNoYW5uZWwgPSB0eXBlQnl0ZSAmIDB4MGY7XG4gICAgLy8gY2hhbm5lbHNbY2hhbm5lbF0gPSB0cnVlO1xuXG4gICAgc3dpdGNoICh0eXBlQnl0ZSA+PiA0KSB7XG4gICAgICAvLyBub3RlIG9mZlxuICAgICAgY2FzZSAweDA4OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweDgwLFxuICAgICAgICAgICAgZGVzY3I6IE5PVEVfT0ZGLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gbm90ZSBvblxuICAgICAgY2FzZSAweDA5OlxuICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB2ZWxvY2l0eSA9PT0gMCA/IDB4ODAgOiAweDkwLFxuICAgICAgICAgICAgZGVzY3I6IHZlbG9jaXR5ID09PSAwID8gTk9URV9PRkYgOiBOT1RFX09OLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmVsb2NpdHksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBub3RlIGFmdGVydG91Y2hcbiAgICAgIGNhc2UgMHgwYTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhhMCxcbiAgICAgICAgICAgIGRlc2NyOiBOT1RFX0FGVEVSVE9VQ0gsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgbm90ZU51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICBhbW91bnQ6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gY29udHJvbGxlclxuICAgICAgY2FzZSAweDBiOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGIwLFxuICAgICAgICAgICAgZGVzY3I6IENPTlRST0xMRVIsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgY29udHJvbGxlck51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICB2YWx1ZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBwcm9ncmFtIGNoYW5nZVxuICAgICAgY2FzZSAweDBjOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGMwLFxuICAgICAgICAgICAgZGVzY3I6IFBST0dSQU1fQ0hBTkdFLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIHByb2dyYW06IHZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gY2hhbm5lbCBhZnRlcnRvdWNoXG4gICAgICBjYXNlIDB4MGQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4ZDAsXG4gICAgICAgICAgICBkZXNjcjogQ0hBTk5FTF9BRlRFUlRPVUNILFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIGFtb3VudDogdmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBwaXRjaCBiZW5kXG4gICAgICBjYXNlIDB4MGU6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4ZTAsXG4gICAgICAgICAgICBkZXNjcjogUElUQ0hfQkVORCxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUgKyAocmVhZGVyLnVpbnQ4KCkgPDwgNyksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG5cbiAgICAgIC8vIGRlZmF1bHQ6XG4gICAgICAvLyAgIHJldHVybiB7XG4gICAgICAvLyAgICAgZXZlbnQ6IHtcbiAgICAgIC8vICAgICAgIHR5cGU6IHR5cGVCeXRlID4+IDQsXG4gICAgICAvLyAgICAgICBkZXNjcjogXCJ1bnJlY29nbml6ZWRcIixcbiAgICAgIC8vICAgICAgIGNoYW5uZWwsXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgICBkZWx0YVRpbWUsXG4gICAgICAvLyAgIH07XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGBVbnJlY29nbml6ZWQgTUlESSBldmVudCB0eXBlIGJ5dGU6ICR7dHlwZUJ5dGV9IChmaXggdGhpcylgKTtcbiAgcmV0dXJuIHtcbiAgICBldmVudDoge1xuICAgICAgdHlwZTogdHlwZUJ5dGUgPT09IDI1NSA/IDAgOiB0eXBlQnl0ZSxcbiAgICB9LFxuICAgIGRlbHRhVGltZSxcbiAgfTtcbiAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgTUlESSBldmVudCB0eXBlIGJ5dGU6ICR7dHlwZUJ5dGV9YCk7XG59XG5cbmZ1bmN0aW9uIGdldEZyYW1lUmF0ZShob3VyQnl0ZTogbnVtYmVyKSB7XG4gIHN3aXRjaCAoaG91ckJ5dGUgJiAwYjExMDAwMDApIHtcbiAgICBjYXNlIDB4MDA6XG4gICAgICByZXR1cm4gMjQ7XG4gICAgY2FzZSAweDIwOlxuICAgICAgcmV0dXJuIDI1O1xuICAgIGNhc2UgMHg0MDpcbiAgICAgIHJldHVybiAyOTtcbiAgICBjYXNlIDB4NjA6XG4gICAgICByZXR1cm4gMzA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59XG4iLCIvLyBpbXBvcnQgeyBtaWRpQWNjZXNzIH0gZnJvbSBcIi4vaW5pdEF1ZGlvQW5kTUlESVwiO1xuaW1wb3J0IHsgZ2V0TUlESVBvcnRzIH0gZnJvbSBcIi4vZ2V0TUlESVBvcnRzXCI7XG5cbmV4cG9ydCBjb25zdCByZXNldE1JRElPdXRwdXRzID0gKG1pZGlBY2Nlc3M6IFdlYk1pZGkuTUlESUFjY2VzcyB8IG51bGwsIG9mZnNldDogbnVtYmVyID0gMTAwKSA9PiB7XG4gIGlmIChtaWRpQWNjZXNzKSB7XG4gICAgY29uc3QgeyBvdXRwdXRzIH0gPSBnZXRNSURJUG9ydHMobWlkaUFjY2Vzcyk7XG4gICAgY29uc3QgdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpICsgb2Zmc2V0O1xuICAgIG91dHB1dHMuZm9yRWFjaChvdXRwdXQgPT4ge1xuICAgICAgZm9yIChsZXQgY2hhbm5lbCA9IDA7IGNoYW5uZWwgPCAxNjsgY2hhbm5lbCsrKSB7XG4gICAgICAgIG91dHB1dC5zZW5kKFsweGIwICsgY2hhbm5lbCwgMHg3YiwgMHgwMF0sIHRpbWUpOyAvLyBzdG9wIGFsbCBub3Rlc1xuICAgICAgICBvdXRwdXQuc2VuZChbMHhiMCArIGNoYW5uZWwsIDB4NzksIDB4MDBdLCB0aW1lKTsgLy8gcmVzZXQgYWxsIGNvbnRyb2xsZXJzXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vdHlwZXMvU29uZ1wiO1xuaW1wb3J0IHsgTUlESUV2ZW50LCBOb3RlT25FdmVudCB9IGZyb20gXCIuL3R5cGVzL01JRElFdmVudFwiO1xuaW1wb3J0IHsgTk9URV9PTiwgTk9URV9PRkYgfSBmcm9tIFwiLi91dGlsL21pZGlcIjtcblxudHlwZSBBcmdzID0ge1xuICBzb25nOiBTb25nO1xuICBtaWxsaXM6IG51bWJlcjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgb3V0cHV0cz86IFdlYk1pZGkuTUlESU91dHB1dE1hcDtcbn07XG5leHBvcnQgY29uc3Qgc2NoZWR1bGUgPSAoe1xuICBzb25nLFxuICBpbmRleCxcbiAgbWlsbGlzLFxuICBvdXRwdXRzLFxufTogQXJncyk6IHsgbWlsbGlzOiBudW1iZXI7IGluZGV4OiBudW1iZXI7IHNjaGVkdWxlZDogTUlESUV2ZW50W10gfSA9PiB7XG4gIGNvbnN0IHRzID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSBzb25nO1xuICBjb25zdCBzY2hlZHVsZWQgPSBbXTtcbiAgLy8gbGV0IGxhc3ROb3RlTnVtYmVyOiBudW1iZXIgPSAtMTtcbiAgLy8gbGV0IGxhc3ROb3RlVHlwZTogbnVtYmVyID0gLTE7XG4gIHdoaWxlIChpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1tpbmRleF07XG4gICAgaWYgKCFldmVudC5taWxsaXMgfHwgIWV2ZW50LnRyYWNrSWQpIHtcbiAgICAgIC8vIGJyZWFrO1xuICAgICAgaW5kZXgrKztcbiAgICB9IGVsc2UgaWYgKGV2ZW50Lm1pbGxpcyA8IG1pbGxpcyArIHNvbmcuYnVmZmVyVGltZSkge1xuICAgICAgc2NoZWR1bGVkLnB1c2goZXZlbnQpO1xuICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGlja3MsIGV2ZW50LmRlc2NyLCAoZXZlbnQgYXMgTm90ZU9uRXZlbnQpLm5vdGVOdW1iZXIpO1xuICAgICAgY29uc3QgdHJhY2sgPSBzb25nLnRyYWNrc0J5SWRbZXZlbnQudHJhY2tJZF07XG4gICAgICB0cmFjay5vdXRwdXRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuZGVzY3IgPT09IE5PVEVfT04gfHwgZXZlbnQuZGVzY3IgPT09IE5PVEVfT0ZGKSB7XG4gICAgICAgICAgY29uc3QgZSA9IGV2ZW50IGFzIE5vdGVPbkV2ZW50O1xuICAgICAgICAgIGlmIChldmVudC5taWxsaXMpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnR5cGUsIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIpO1xuICAgICAgICAgICAgbGV0IHRpbWUgPSB0cyArIHNvbmcubGF0ZW5jeSArIHRyYWNrLmxhdGVuY3kgKyAoZXZlbnQubWlsbGlzIC0gbWlsbGlzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50W1wibm90ZU51bWJlclwiXSwgZXZlbnQuZGVzY3IsIGV2ZW50Lm1pbGxpcywgbWlsbGlzLCB0aW1lLCB0cywgdGltZSAtIHRzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUubm90ZU51bWJlciwgbGFzdE5vdGVOdW1iZXIsIGxhc3ROb3RlVHlwZSk7XG4gICAgICAgICAgICAvLyBpZiAoZS5ub3RlTnVtYmVyID09PSBsYXN0Tm90ZU51bWJlciAmJiBsYXN0Tm90ZVR5cGUgPT09IDB4OTApIHtcbiAgICAgICAgICAgIC8vICAgaWYgKGUuZGVzY3IgPT09IE5PVEVfT04pIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlcGVhdGluZyBub3Rlc1wiKTtcbiAgICAgICAgICAgIC8vICAgICB0aW1lICs9IDE7XG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGxhc3ROb3RlTnVtYmVyID0gZS5ub3RlTnVtYmVyO1xuICAgICAgICAgICAgLy8gbGFzdE5vdGVUeXBlID0gZS50eXBlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudHlwZSArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5KTtcbiAgICAgICAgICAgIC8vIHF1aWNrIGZpeCBmb3IgcmVwZWF0aW5nIG5vdGVzXG4gICAgICAgICAgICBpZiAoZS5kZXNjciA9PT0gTk9URV9PTikge1xuICAgICAgICAgICAgICB0aW1lICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXRzXG4gICAgICAgICAgICAgID8uZ2V0KGlkKVxuICAgICAgICAgICAgICA/LnNlbmQoW2V2ZW50LnR5cGUgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eV0sIHRpbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgLy8gY29uc29sZS5sb2coJ1tTQ0hFRFVMRURdJywgc2NoZWR1bGVkLm1hcChlID0+IFtlLnRpY2tzLCBlLm1pbGxpc10pKTtcbiAgcmV0dXJuIHsgbWlsbGlzLCBpbmRleCwgc2NoZWR1bGVkIH07XG59O1xuIiwiaW1wb3J0IHsgTUlESUV2ZW50IH0gZnJvbSBcIi4uL3R5cGVzL01JRElFdmVudFwiO1xuXG5leHBvcnQgY29uc3QgU0VRVUVOQ0VfTlVNQkVSID0gXCJzZXF1ZW5jZSBudW1iZXJcIjtcbmV4cG9ydCBjb25zdCBURVhUID0gXCJ0ZXh0XCI7XG5leHBvcnQgY29uc3QgQ09QWVJJR0hUX05PVElDRSA9IFwiY29weXJpZ2h0IG5vdGljZVwiO1xuZXhwb3J0IGNvbnN0IFRSQUNLX05BTUUgPSBcInRyYWNrIG5hbWVcIjtcbmV4cG9ydCBjb25zdCBJTlNUUlVNRU5UX05BTUUgPSBcImluc3RydW1lbnQgbmFtZVwiO1xuZXhwb3J0IGNvbnN0IExZUklDUyA9IFwibHlyaWNzXCI7XG5leHBvcnQgY29uc3QgTUFSS0VSID0gXCJtYXJrZXJcIjtcbmV4cG9ydCBjb25zdCBDVUVfUE9JTlQgPSBcImN1ZSBwb2ludFwiO1xuZXhwb3J0IGNvbnN0IENIQU5ORUxfUFJFRklYID0gXCJjaGFubmVsIHByZWZpeFwiO1xuZXhwb3J0IGNvbnN0IEVORF9PRl9UUkFDSyA9IFwiZW5kIG9mIHRyYWNrXCI7XG5leHBvcnQgY29uc3QgVEVNUE8gPSBcInRlbXBvXCI7XG5leHBvcnQgY29uc3QgU01QVEVfT0ZGU0VUID0gXCJzbXB0ZSBvZmZzZXRcIjtcbmV4cG9ydCBjb25zdCBUSU1FX1NJR05BVFVSRSA9IFwidGltZSBzaWduYXR1cmVcIjtcbmV4cG9ydCBjb25zdCBLRVlfU0lHTkFUVVJFID0gXCJrZXkgc2lnbmF0dXJlXCI7XG5leHBvcnQgY29uc3QgU0VRVUVOQ0VSX1NQRUNJRklDID0gXCJzZXF1ZW5jZXIgc3BlY2lmaWNcIjtcbmV4cG9ydCBjb25zdCBTWVNURU1fRVhDTFVTSVZFID0gXCJzeXN0ZW0gZXhjbHVzaXZlXCI7XG5leHBvcnQgY29uc3QgRElWSURFRF9TWVNURU1fRVhDTFVTSVZFID0gXCJkaXZpZGVkIHN5c3RlbSBleGNsdXNpdmVcIjtcbmV4cG9ydCBjb25zdCBOT1RFX09OID0gXCJub3RlIG9uXCI7XG5leHBvcnQgY29uc3QgTk9URV9PRkYgPSBcIm5vdGUgb2ZmXCI7XG5leHBvcnQgY29uc3QgTk9URV9BRlRFUlRPVUNIID0gXCJub3RlIGFmdGVydG91Y2hcIjtcbmV4cG9ydCBjb25zdCBDT05UUk9MTEVSID0gXCJjb250cm9sbGVyXCI7XG5leHBvcnQgY29uc3QgUFJPR1JBTV9DSEFOR0UgPSBcInByb2dyYW0gY2hhbmdlXCI7XG5leHBvcnQgY29uc3QgQ0hBTk5FTF9BRlRFUlRPVUNIID0gXCJjaGFubmVsIGFmdGVydG91Y2hcIjtcbmV4cG9ydCBjb25zdCBQSVRDSF9CRU5EID0gXCJwaXRjaCBiZW5kXCI7XG5cbmNvbnN0IGRlc2NyaXB0aW9uczogeyBbaW5kZXg6IG51bWJlcl06IHsgW2luZGV4OiBudW1iZXJdOiBzdHJpbmcgfSB8IHN0cmluZyB9ID0ge1xuICAweGZmOiB7XG4gICAgMHgwMDogXCJzZXF1ZW5jZSBudW1iZXJcIixcbiAgICAweDAxOiBcInRleHRcIixcbiAgICAweDAyOiBcImNvcHlyaWdodCBub3RpY2VcIixcbiAgICAweDAzOiBcInRyYWNrIG5hbWVcIixcbiAgICAweDA0OiBcImluc3RydW1lbnQgbmFtZVwiLFxuICAgIDB4MDU6IFwibHlyaWNzXCIsXG4gICAgMHgwNjogXCJtYXJrZXJcIixcbiAgICAweDA3OiBcImN1ZSBwb2ludFwiLFxuICAgIDB4MjA6IFwiY2hhbm5lbCBwcmVmaXhcIixcbiAgICAweDJmOiBcImVuZCBvZiB0cmFja1wiLFxuICAgIDB4NTE6IFwidGVtcG9cIixcbiAgICAweDU0OiBcInNtcHRlIG9mZnNldFwiLFxuICAgIDB4NTg6IFwidGltZSBzaWduYXR1cmVcIixcbiAgICAweDU5OiBcImtleSBzaWduYXR1cmVcIixcbiAgICAweDdmOiBcInNlcXVlbmNlciBzcGVjaWZpY1wiLFxuICB9LFxuICAweGYwOiBcInN5c3RlbSBleGNsdXNpdmVcIixcbiAgMHhmNzogXCJkaXZpZGVkIHN5c2V4XCIsXG4gIDB4ODA6IFwibm90ZSBvblwiLFxuICAweDkwOiBcIm5vdGUgb2ZmXCIsXG4gIDB4YTA6IFwibm90ZSBhZnRlcnRvdWNoXCIsXG4gIDB4YjA6IFwiY29udHJvbGxlclwiLFxuICAweGMwOiBcInByb2dyYW0gY2hhbmdlXCIsXG4gIDB4ZDA6IFwiY2hhbm5lbCBhZnRlcnRvdWNoXCIsXG4gIDB4ZTA6IFwicGl0Y2ggYmVuZFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IG5vdGVOYW1lcyA9IHtcbiAgc2hhcnA6IFtcIkNcIiwgXCJDI1wiLCBcIkRcIiwgXCJEI1wiLCBcIkVcIiwgXCJGXCIsIFwiRiNcIiwgXCJHXCIsIFwiRyNcIiwgXCJBXCIsIFwiQSNcIiwgXCJCXCJdLFxuICBmbGF0OiBbXCJDXCIsIFwiRGJcIiwgXCJEXCIsIFwiRWJcIiwgXCJFXCIsIFwiRlwiLCBcIkdiXCIsIFwiR1wiLCBcIkFiXCIsIFwiQVwiLCBcIkJiXCIsIFwiQlwiXSxcbiAgXCJlbmhhcm1vbmljLXNoYXJwXCI6IFtcIkIjXCIsIFwiQyNcIiwgXCJDIyNcIiwgXCJEI1wiLCBcIkQjI1wiLCBcIkUjXCIsIFwiRiNcIiwgXCJGIyNcIiwgXCJHI1wiLCBcIkcjI1wiLCBcIkEjXCIsIFwiQSMjXCJdLFxuICBcImVuaGFybW9uaWMtZmxhdFwiOiBbXCJEYmJcIiwgXCJEYlwiLCBcIkViYlwiLCBcIkViXCIsIFwiRmJcIiwgXCJHYmJcIiwgXCJHYlwiLCBcIkFiYlwiLCBcIkFiXCIsIFwiQmJiXCIsIFwiQmJcIiwgXCJDYlwiXSxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNaWRpRXZlbnREZXNjcmlwdGlvbiA9ICh0eXBlOiBudW1iZXIsIHN1YlR5cGU/OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBpZiAodHlwZW9mIHN1YlR5cGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRpb25zW3R5cGVdIGFzIHN0cmluZztcbiAgfVxuICByZXR1cm4gZGVzY3JpcHRpb25zW3R5cGVdW3N1YlR5cGVdIHx8IFwidW5kZWZpbmVkXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWlkaU1lc3NhZ2VFdmVudCA9IChldmVudDogTUlESUV2ZW50KTogbnVtYmVyW10gPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmRlc2NyKSB7XG4gICAgY2FzZSBOT1RFX09OOlxuICAgICAgcmV0dXJuIFsweDkwICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHldO1xuICAgIGNhc2UgTk9URV9PRkY6XG4gICAgICByZXR1cm4gWzB4ODAgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eV07XG4gIH1cbiAgcmV0dXJuIFswXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXROb3RlTnVtYmVyID0gKG5hbWU6IHN0cmluZywgb2N0YXZlOiBudW1iZXIsIG1vZGU6IHN0cmluZyA9IFwic2hhcnBcIik6IG51bWJlciA9PiB7XG4gIC8vIGxldCBpbmRleCA9IC0xO1xuICAvLyBjb25zdCBtb2RlcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG5vdGVOYW1lcyk7XG4gIC8vIGZvciAobGV0IGkgPSAwLCBtYXhpID0gbW9kZXMubGVuZ3RoOyBpIDwgbWF4aTsgaSsrKSB7XG4gIC8vICAgY29uc3QgbmFtZXMgPSBtb2Rlc1tpXTtcbiAgLy8gICBmb3IgKGxldCBqID0gMCwgbWF4aiA9IG5hbWVzLmxlbmd0aDsgaiA8IG1heGo7IGorKykge1xuICAvLyAgICAgaWYgKG1vZGVbal0gPT09IG5hbWUpIHtcbiAgLy8gICAgICAgaW5kZXggPSBpO1xuICAvLyAgICAgICBicmVhaztcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cbiAgbGV0IGluZGV4ID0gLTE7XG4gIGNvbnN0IG1vZGVzID0gT2JqZWN0LnZhbHVlcyhub3RlTmFtZXMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZXMgPSBtb2Rlc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhuYW1lc1tqXSwgbmFtZSk7XG4gICAgICBpZiAobmFtZXNbal0gPT09IG5hbWUpIHtcbiAgICAgICAgaW5kZXggPSBqO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gY29uc29sZS5sb2cobmFtZSwgb2N0YXZlLCBpbmRleCk7XG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvL251bWJlciA9IChpbmRleCArIDEyKSArIChvY3RhdmUgKiAxMikgKyAxMjsgLy8g4oaSIGluIEN1YmFzZSBjZW50cmFsIEMgPSBDMyBpbnN0ZWFkIG9mIEM0XG4gIHJldHVybiBpbmRleCArIDEyICsgb2N0YXZlICogMTI7IC8vIOKGkiBtaWRpIHN0YW5kYXJkICsgc2NpZW50aWZpYyBuYW1pbmcsIHNlZTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NaWRkbGVfQyBhbmQgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TY2llbnRpZmljX3BpdGNoX25vdGF0aW9uXG59O1xuXG5leHBvcnQgY29uc3Qgc29ydE1JRElFdmVudHMgPSAoZXZlbnRzOiBNSURJRXZlbnRbXSk6IE1JRElFdmVudFtdID0+XG4gIGV2ZW50cy5zb3J0KChhOiBNSURJRXZlbnQsIGI6IE1JRElFdmVudCkgPT4ge1xuICAgIGlmIChhLnRpY2tzIDwgYi50aWNrcykge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZiAoYS50aWNrcyA+IGIudGlja3MpIHtcbiAgICAgIHJldHVybiAxO1xuICAgICAgLy8gfSBlbHNlIGlmIChhLnR5cGUgPT09IDB4ODAgJiYgYi50eXBlID09PSAweDkwKSB7XG4gICAgICAvLyAgIC8vIG5vdGUgb2ZmIGJlZm9yZSBub3RlIG9uXG4gICAgICAvLyAgIHJldHVybiAtMTtcbiAgICAgIC8vIH0gZWxzZSBpZiAoYS50eXBlID09PSAweDUxIHx8IGEudHlwZSA9PT0gMHg1OCkge1xuICAgICAgLy8gICAvLyB0ZW1wbyBhbmQgdGltZSBzaWduYXR1cmUgZXZlbnRzIGZpcnN0XG4gICAgICAvLyAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRG91YmxlRXZlbnRzID0gKGV2ZW50czogTUlESUV2ZW50W10pOiBNSURJRXZlbnRbXSA9PiB7XG4gIC8vIHZhciBpLCBtYXhpID0gZXZlbnRzLmxlbmd0aCxcbiAgLy8gICBldmVudCwgZXZlbnRJZCwgbGFzdElkLFxuICAvLyAgIHJlc3VsdCA9IFtdO1xuXG4gIC8vIGV2ZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gIC8vICAgcmV0dXJuIGEuZXZlbnROdW1iZXIgLSBiLmV2ZW50TnVtYmVyO1xuICAvLyB9KTtcblxuICAvLyBmb3IgKGkgPSAwOyBpIDwgbWF4aTsgaSsrKSB7XG4gIC8vICAgZXZlbnQgPSBldmVudHNbaV07XG4gIC8vICAgZXZlbnRJZCA9IGV2ZW50LmlkO1xuICAvLyAgIGlmIChldmVudElkICE9PSBsYXN0SWQpIHtcbiAgLy8gICAgIHJlc3VsdC5wdXNoKGV2ZW50KTtcbiAgLy8gICB9XG4gIC8vICAgbGFzdElkID0gZXZlbnRJZDtcbiAgLy8gfVxuICAvLyByZXR1cm4gcmVzdWx0O1xuICByZXR1cm4gW107XG59O1xuIiwiLy8gaW1wb3J0IFwianp6XCI7XG5pbXBvcnQgeyBzY2hlZHVsZSB9IGZyb20gXCIuLi8uLi9zcmMvc2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50RXZlbnRJbmRleCB9IGZyb20gXCIuLi8uLi9zcmMvZ2V0Q3VycmVudEV2ZW50SW5kZXhcIjtcbmltcG9ydCB7IGdldE1JRElBY2Nlc3MgfSBmcm9tIFwiLi4vLi4vc3JjL2dldE1JRElBY2Nlc3NcIjtcbmltcG9ydCB7IGdldE1JRElQb3J0cyB9IGZyb20gXCIuLi8uLi9zcmMvZ2V0TUlESVBvcnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVTb25nRnJvbU1JRElGaWxlIH0gZnJvbSBcIi4uLy4uL3NyYy9jcmVhdGVTb25nRnJvbU1JRElGaWxlXCI7XG5pbXBvcnQgeyByZXNldE1JRElPdXRwdXRzIH0gZnJvbSBcIi4uLy4uL3NyYy9yZXNldE1JRElPdXRwdXRzXCI7XG5cbmNvbnN0IHVybCA9IFwiLi4vLi4vYXNzZXRzL21pbnV0ZV93YWx0ei5taWRcIjtcbi8vIGNvbnN0IHVybCA9ICcvYXNzZXRzL21vems1NDVhLm1pZCc7XG4vLyBjb25zdCB1cmwgPSAnL2Fzc2V0cy9tb3prNTQ1YV9tdXNlc2NvcmUubWlkJztcblxuY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbWEgPSBhd2FpdCBnZXRNSURJQWNjZXNzKCk7XG4gIGNvbnN0IHNvbmcgPSBhd2FpdCBjcmVhdGVTb25nRnJvbU1JRElGaWxlKHVybCk7XG4gIGNvbnN0IHsgaW5wdXRzLCBvdXRwdXRzIH0gPSBnZXRNSURJUG9ydHMobWEpO1xuICBzb25nLnRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICB0cmFjay5vdXRwdXRzLnB1c2goLi4ub3V0cHV0cy5tYXAobyA9PiBvLmlkKSk7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhzb25nKTtcblxuICBsZXQgbWlsbGlzID0gMzAwMDtcbiAgc29uZy5wb3NpdGlvbk1pbGxpcyA9IG1pbGxpcztcbiAgbGV0IGluZGV4ID0gZ2V0Q3VycmVudEV2ZW50SW5kZXgoc29uZywgbWlsbGlzKTtcbiAgLy8gY29uc29sZS5sb2coXCJTVEFSVCBJTkRFWFwiLCBpbmRleCk7XG4gIGxldCBzdGFydDogbnVtYmVyID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGNvbnN0IHBsYXkgPSAoYTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdHMgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0cywgdHMgLSBzdGFydCwgYSwgYSAtIHN0YXJ0KTtcbiAgICAvLyBjb25zdCBwcm9ncmVzcyA9IHRzIC0gYTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IHRzIC0gc3RhcnQ7XG4gICAgc3RhcnQgPSB0cztcbiAgICAvLyBjb25zdCBwcm9ncmVzcyA9IGEgLSBzdGFydDtcbiAgICAvLyBzdGFydCA9IGE7XG4gICAgaWYgKG1pbGxpcyA8IDEwMDAwKSB7XG4gICAgICAoeyBpbmRleCwgbWlsbGlzIH0gPSBzY2hlZHVsZSh7XG4gICAgICAgIHNvbmcsXG4gICAgICAgIG1pbGxpcyxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIG91dHB1dHM6IG1hPy5vdXRwdXRzLFxuICAgICAgfSkpO1xuICAgICAgbWlsbGlzICs9IHByb2dyZXNzO1xuICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgsIG1pbGxpcyk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYSA9PiB7XG4gICAgICAgIHBsYXkoYSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzZXRNSURJT3V0cHV0cyhtYSk7XG4gICAgfVxuICB9O1xuICBwbGF5KHN0YXJ0KTtcbn07XG5cbmluaXQoKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXSwic291cmNlUm9vdCI6IiJ9
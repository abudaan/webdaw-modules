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
            console.log("bpm", bpm, millis);
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

/***/ "../src/create_notes.ts":
/*!******************************!*\
  !*** ../src/create_notes.ts ***!
  \******************************/
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

/***/ "../src/fetch_helpers.ts":
/*!*******************************!*\
  !*** ../src/fetch_helpers.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// fetch helpers
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
exports.fetchArraybuffer = exports.fetchJSON = exports.arrayBuffer = exports.json = exports.status = void 0;
function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
}
exports.status = status;
function json(response) {
    return response.json();
}
exports.json = json;
function arrayBuffer(response) {
    return response.arrayBuffer();
}
exports.arrayBuffer = arrayBuffer;
function fetchJSON(url) {
    return new Promise(function (resolve, reject) {
        // fetch(url, {
        //   mode: 'no-cors'
        // })
        fetch(url)
            .then(status)
            .then(json)
            .then(function (data) {
            resolve(data);
        })
            .catch(function (e) {
            reject(e);
        });
    });
}
exports.fetchJSON = fetchJSON;
function fetchArraybuffer(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, response_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, status(response)];
                case 2:
                    response_1 = _a.sent();
                    return [2 /*return*/, arrayBuffer(response_1)];
            }
        });
    });
}
exports.fetchArraybuffer = fetchArraybuffer;


/***/ }),

/***/ "../src/init-midi.ts":
/*!***************************!*\
  !*** ../src/init-midi.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMIDIDevices = exports.getMIDIAccess = void 0;
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
exports.getMIDIDevices = function () { return __awaiter(void 0, void 0, void 0, function () {
    var inputs, outputs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                inputs = [];
                outputs = [];
                if (!(typeof midiAccess === "undefined")) return [3 /*break*/, 2];
                return [4 /*yield*/, exports.getMIDIAccess()];
            case 1:
                midiAccess = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                if (midiAccess !== null) {
                    midiAccess.inputs.forEach(function (i) {
                        inputs.push(i);
                    });
                    midiAccess.outputs.forEach(function (o) {
                        outputs.push(o);
                    });
                }
                _a.label = 3;
            case 3:
                console.log(inputs, outputs);
                return [2 /*return*/, { inputs: inputs, outputs: outputs }];
        }
    });
}); };


/***/ }),

/***/ "../src/midi_utils.ts":
/*!****************************!*\
  !*** ../src/midi_utils.ts ***!
  \****************************/
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

/***/ "../src/parse_midi_binary.ts":
/*!***********************************!*\
  !*** ../src/parse_midi_binary.ts ***!
  \***********************************/
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
exports.parseMidiFile = void 0;
// import { BufferReader } from 'jasmid.ts';
var uniqid_1 = __importDefault(__webpack_require__(/*! uniqid */ "../node_modules/uniqid/index.js"));
var bufferreader_1 = __webpack_require__(/*! ./bufferreader */ "../src/bufferreader.ts");
var midi_utils_1 = __webpack_require__(/*! ./midi_utils */ "../src/midi_utils.ts");
var calculateMillis_1 = __webpack_require__(/*! ./calculateMillis */ "../src/calculateMillis.ts");
var sugar_coating_1 = __webpack_require__(/*! ./sugar_coating */ "../src/sugar_coating.ts");
var playbackSpeed = 1;
function parseMidiFile(buffer) {
    var reader = new bufferreader_1.BufferReader(buffer);
    var header = parseHeader(reader);
    // const { timeTrack, tracks } = parseTracks(reader, header.ticksPerBeat)
    var _a = parseTracks(reader, header.ticksPerBeat), tracks = _a.tracks, events = _a.events, initialTempo = _a.initialTempo, initialNumerator = _a.initialNumerator, initialDenominator = _a.initialDenominator;
    // return { header, timeTrack, tracks }
    return {
        ppq: header.ticksPerBeat,
        tracks: tracks,
        initialTempo: initialTempo,
        initialNumerator: initialNumerator,
        initialDenominator: initialDenominator,
        events: calculateMillis_1.calculateMillis(events, {
            ppq: header.ticksPerBeat,
            bpm: initialTempo,
        }),
    };
}
exports.parseMidiFile = parseMidiFile;
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
        var track = sugar_coating_1.createTrack(trackId);
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
        events: midi_utils_1.sortMIDIEvents(events),
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
                        descr: midi_utils_1.SEQUENCE_NUMBER,
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
                        descr: midi_utils_1.TEXT,
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
                        descr: midi_utils_1.COPYRIGHT_NOTICE,
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
                        descr: midi_utils_1.TRACK_NAME,
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
                        descr: midi_utils_1.INSTRUMENT_NAME,
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
                        descr: midi_utils_1.LYRICS,
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
                        descr: midi_utils_1.MARKER,
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
                        descr: midi_utils_1.CUE_POINT,
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
                        descr: midi_utils_1.CHANNEL_PREFIX,
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
                        descr: midi_utils_1.END_OF_TRACK,
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
                        descr: midi_utils_1.TEMPO,
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
                        descr: midi_utils_1.SMPTE_OFFSET,
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
                        descr: midi_utils_1.TIME_SIGNATURE,
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
                        descr: midi_utils_1.KEY_SIGNATURE,
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
                        descr: midi_utils_1.SEQUENCER_SPECIFIC,
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
                descr: midi_utils_1.SYSTEM_EXCLUSIVE,
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
                descr: midi_utils_1.DIVIDED_SYSTEM_EXCLUSIVE,
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
                        descr: midi_utils_1.NOTE_OFF,
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
                        descr: velocity === 0 ? midi_utils_1.NOTE_OFF : midi_utils_1.NOTE_ON,
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
                        descr: midi_utils_1.NOTE_AFTERTOUCH,
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
                        descr: midi_utils_1.CONTROLLER,
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
                        descr: midi_utils_1.PROGRAM_CHANGE,
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
                        descr: midi_utils_1.CHANNEL_AFTERTOUCH,
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
                        descr: midi_utils_1.PITCH_BEND,
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
var midi_utils_1 = __webpack_require__(/*! ./midi_utils */ "../src/midi_utils.ts");
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
                if (event_2.descr === midi_utils_1.NOTE_ON || event_2.descr === midi_utils_1.NOTE_OFF) {
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
                        if (e.descr === midi_utils_1.NOTE_ON) {
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

/***/ "../src/sugar_coating.ts":
/*!*******************************!*\
  !*** ../src/sugar_coating.ts ***!
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
exports.createTrack = exports.setTrackOutput = exports.createSongFromMIDIFile = void 0;
var fetch_helpers_1 = __webpack_require__(/*! ./fetch_helpers */ "../src/fetch_helpers.ts");
var parse_midi_binary_1 = __webpack_require__(/*! ./parse_midi_binary */ "../src/parse_midi_binary.ts");
var create_notes_1 = __webpack_require__(/*! ./create_notes */ "../src/create_notes.ts");
exports.createSongFromMIDIFile = function (arg) { return __awaiter(void 0, void 0, void 0, function () {
    var ab, _a, ppq, initialTempo, initialNumerator, initialDenominator, events, tracks, song;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(typeof arg === "string")) return [3 /*break*/, 2];
                return [4 /*yield*/, fetch_helpers_1.fetchArraybuffer(arg)];
            case 1:
                ab = _b.sent();
                return [3 /*break*/, 3];
            case 2:
                ab = arg;
                _b.label = 3;
            case 3:
                _a = parse_midi_binary_1.parseMidiFile(ab), ppq = _a.ppq, initialTempo = _a.initialTempo, initialNumerator = _a.initialNumerator, initialDenominator = _a.initialDenominator, events = _a.events, tracks = _a.tracks;
                song = {
                    ppq: ppq,
                    latency: 17,
                    bufferTime: 100,
                    tracks: tracks,
                    tracksById: tracks.reduce(function (acc, value) {
                        acc[value.id] = value;
                        return acc;
                    }, {}),
                    events: events,
                    notes: create_notes_1.createNotes(events),
                    initialTempo: initialTempo,
                    numerator: initialNumerator,
                    denominator: initialDenominator,
                };
                return [2 /*return*/, song];
        }
    });
}); };
exports.setTrackOutput = function (_a) {
    var track = _a.track, output = _a.output;
    track.outputs.push(output);
};
exports.createTrack = function (id) {
    return {
        id: id,
        latency: 0,
        inputs: [],
        outputs: [],
    };
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
var init_midi_1 = __webpack_require__(/*! ../../src/init-midi */ "../src/init-midi.ts");
var sugar_coating_1 = __webpack_require__(/*! ../../src/sugar_coating */ "../src/sugar_coating.ts");
var url = "./assets/minute_waltz.mid";
// const url = './assets/mozk545a.mid';
// const url = './assets/mozk545a_musescore.mid';
var init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var ma, song, _a, inputs, outputs, millis, index, start, play;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, init_midi_1.getMIDIAccess()];
            case 1:
                ma = _b.sent();
                return [4 /*yield*/, sugar_coating_1.createSongFromMIDIFile("./assets/minute_waltz.mid")];
            case 2:
                song = _b.sent();
                return [4 /*yield*/, init_midi_1.getMIDIDevices()];
            case 3:
                _a = _b.sent(), inputs = _a.inputs, outputs = _a.outputs;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9idWZmZXJyZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jYWxjdWxhdGVNaWxsaXMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVfbm90ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9mZXRjaF9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uLi9zcmMvaW5pdC1taWRpLnRzIiwid2VicGFjazovLy8uLi9zcmMvbWlkaV91dGlscy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlX21pZGlfYmluYXJ5LnRzIiwid2VicGFjazovLy8uLi9zcmMvc2NoZWR1bGVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvc3VnYXJfY29hdGluZy50cyIsIndlYnBhY2s6Ly8vLi9iYXNpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUiLCJmaWxlIjoiYmFzaWMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jhc2ljL2luZGV4LnRzXCIpO1xuIiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMTkgSGFsw6FzeiDDgWTDoW0gPG1haWxAYWRhbWhhbGFzei5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gcHJvY2VzcyAmJiBwcm9jZXNzLnBpZCA/IHByb2Nlc3MucGlkLnRvU3RyaW5nKDM2KSA6ICcnIDtcbnZhciBhZGRyZXNzID0gJyc7XG5pZih0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBuZXR3b3JrSW50ZXJmYWNlcyA9IHJlcXVpcmUoJ29zJykubmV0d29ya0ludGVyZmFjZXMoKTtcbiAgICBmb3IobGV0IGludGVyZmFjZV9rZXkgaW4gbmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gbmV0d29ya0ludGVyZmFjZXNbaW50ZXJmYWNlX2tleV07XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYobmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgbWFjID0gbmV0d29ya0ludGVyZmFjZVtpXS5tYWM7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZHJlc3MgPSBtYWMgPyBwYXJzZUludChtYWMucmVwbGFjZSgvXFw6fFxcRCsvZ2ksICcnKSkudG9TdHJpbmcoMzYpIDogJycgO1xufSBcblxuLy8gIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIGFkZHJlc3MgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy5wcm9jZXNzID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnRpbWUgICAgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxuXG4vLyAgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBub3coKXtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGxhc3QgPSBub3cubGFzdCB8fCB0aW1lO1xuICAgIHJldHVybiBub3cubGFzdCA9IHRpbWUgPiBsYXN0ID8gdGltZSA6IGxhc3QgKyAxO1xufVxuIiwiLy8gZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL3ByYXZkb21pbC9qYXNtaWQudHNcblxuZXhwb3J0IGNsYXNzIEJ1ZmZlclJlYWRlciB7XG4gIHByaXZhdGUgcG9zaXRpb246IG51bWJlcjtcbiAgcHJpdmF0ZSBkYXRhOiBEYXRhVmlldztcblxuICBjb25zdHJ1Y3RvcihidWZmZXI6IEFycmF5QnVmZmVyTGlrZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICAgIHRoaXMuZGF0YSA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICB9XG5cbiAgcmVhZChsZW5ndGg6IG51bWJlcikge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmJ1ZmZlci5zbGljZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uICsgbGVuZ3RoKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IGxlbmd0aDtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpbnQ4KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmdldEludDgodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHVpbnQ4KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmdldFVpbnQ4KHRoaXMucG9zaXRpb24pO1xuICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICB1aW50MTYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0VWludDE2KHRoaXMucG9zaXRpb24pO1xuICAgIHRoaXMucG9zaXRpb24gKz0gMjtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICB1aW50MzIoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0VWludDMyKHRoaXMucG9zaXRpb24pO1xuICAgIHRoaXMucG9zaXRpb24gKz0gNDtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdHJpbmcobGVuZ3RoOiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKFwiYXNjaWlcIikuZGVjb2RlKHRoaXMucmVhZChsZW5ndGgpKTtcbiAgfVxuXG4gIGVvZigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA+PSB0aGlzLmRhdGEuYnl0ZUxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGEgTUlESS1zdHlsZSB2YXJpYWJsZS1sZW5ndGggaW50ZWdlci5cbiAgICogKGJpZy1lbmRpYW4gdmFsdWUgaW4gZ3JvdXBzIG9mIDcgYml0cywgd2l0aCB0b3AgYml0IHNldCB0byBzaWduaWZ5IHRoYXQgYW5vdGhlciBieXRlIGZvbGxvd3MpXG4gICAqL1xuICBtaWRpSW50KCkge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudWludDgoKTtcbiAgICAgIGlmICh2YWx1ZSAmIDBiMTAwMDAwMDApIHtcbiAgICAgICAgcmVzdWx0ICs9IHZhbHVlICYgMGIxMTExMTExO1xuICAgICAgICByZXN1bHQgPDw9IDc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWlkaUNodW5rKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5zdHJpbmcoNCk7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy51aW50MzIoKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZWFkKGxlbmd0aCk7XG4gICAgcmV0dXJuIHsgaWQsIGxlbmd0aCwgZGF0YSB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBNSURJRXZlbnQsIFRlbXBvRXZlbnQgfSBmcm9tIFwiLi9taWRpX2V2ZW50c1wiO1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlTWlsbGlzID0gKFxuICBldmVudHM6IE1JRElFdmVudFtdLFxuICBkYXRhOiB7XG4gICAgcHBxOiBudW1iZXI7XG4gICAgYnBtPzogbnVtYmVyO1xuICAgIHBsYXliYWNrU3BlZWQ/OiBudW1iZXI7XG4gIH1cbik6IE1JRElFdmVudFtdID0+IHtcbiAgbGV0IHsgcHBxLCBicG0gPSAtMSwgcGxheWJhY2tTcGVlZCA9IDEgfSA9IGRhdGE7XG4gIGxldCBtaWxsaXNQZXJUaWNrID0gYnBtID09PSAtMSA/IDAgOiAoKCgxIC8gcGxheWJhY2tTcGVlZCkgKiA2MCkgLyBicG0gLyBwcHEpICogMTAwMDtcbiAgbGV0IHRpY2tzID0gMDtcbiAgbGV0IG1pbGxpcyA9IDA7XG4gIC8vIGNvbnNvbGUubG9nKFwiYnBtXCIsIGJwbSwgbWlsbGlzKTtcbiAgcmV0dXJuIGV2ZW50cy5tYXAoZXZlbnQgPT4ge1xuICAgIGlmICgoZXZlbnQgYXMgVGVtcG9FdmVudCkuYnBtKSB7XG4gICAgICAoeyBicG0gfSA9IGV2ZW50IGFzIFRlbXBvRXZlbnQpO1xuICAgICAgY29uc29sZS5sb2coXCJicG1cIiwgYnBtLCBtaWxsaXMpO1xuICAgICAgbWlsbGlzUGVyVGljayA9ICgoKDEgLyBwbGF5YmFja1NwZWVkKSAqIDYwKSAvIGJwbSAvIHBwcSkgKiAxMDAwO1xuICAgIH1cbiAgICBjb25zdCBkaWZmVGlja3MgPSBldmVudC50aWNrcyAtIHRpY2tzO1xuICAgIG1pbGxpcyArPSBkaWZmVGlja3MgKiBtaWxsaXNQZXJUaWNrO1xuICAgIGV2ZW50Lm1pbGxpcyA9IG1pbGxpcztcbiAgICB0aWNrcyA9IGV2ZW50LnRpY2tzO1xuICAgIHJldHVybiBldmVudDtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgTUlESUV2ZW50LCBOb3RlRXZlbnQsIE5vdGVPbkV2ZW50IH0gZnJvbSBcIi4vbWlkaV9ldmVudHNcIjtcbmltcG9ydCB7IE1JRElOb3RlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IHNvcnRNSURJRXZlbnRzIH0gZnJvbSBcIi4vbWlkaV91dGlsc1wiO1xuXG5sZXQgaW5kZXggPSAwO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTm90ZXMgPSAoZXZlbnRzOiBNSURJRXZlbnRbXSk6IE1JRElOb3RlW10gPT4ge1xuICBsZXQgZmlsdGVyZWQ6IE5vdGVFdmVudFtdID0gZXZlbnRzLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwudHlwZSk7XG4gICAgaWYgKHZhbC50eXBlID09PSAweDgwIHx8IHZhbC50eXBlID09PSAweDkwKSB7XG4gICAgICBhY2MucHVzaCh2YWwgYXMgTm90ZUV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10gYXMgTm90ZUV2ZW50W10pO1xuICAvLyBmaWx0ZXJlZCA9IHNvcnRNSURJRXZlbnRzKGZpbHRlcmVkKTtcbiAgY29uc3Qgbm90ZXM6IE1JRElOb3RlW10gPSBbXTtcbiAgY29uc3QgdG1wOiB7IFtpZDogc3RyaW5nXTogTm90ZUV2ZW50IH0gPSB7fTtcbiAgZmlsdGVyZWQuZm9yRWFjaChlID0+IHtcbiAgICBjb25zdCBpZCA9IGAke2UudHJhY2tJZH0tJHtlLm5vdGVOdW1iZXJ9YDtcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRpY2tzLCBlLnR5cGUsIGlkKTtcbiAgICBpZiAoZS50eXBlID09PSAweDkwKSB7XG4gICAgICBpZiAodG1wW2lkXSkge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oYG5vdGUgZXhpc3RlZCBhbHJlYWR5ISAke2lkfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG1wW2lkXSA9IGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnR5cGUgPT09IDB4ODApIHtcbiAgICAgIGlmICghdG1wW2lkXSkge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oYG5vdGUgZG9lc24ndCBleGlzdCEgJHtpZH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdGVPbiA9IHRtcFtpZF07XG4gICAgICAgIGNvbnN0IG5vdGU6IE1JRElOb3RlID0ge1xuICAgICAgICAgIGlkOiBgbm90ZS0ke25ldyBEYXRlKCkuZ2V0VGltZSgpfS0ke2luZGV4Kyt9YCxcbiAgICAgICAgICBub3RlT246IG5vdGVPbiBhcyBOb3RlT25FdmVudCxcbiAgICAgICAgICBub3RlT2ZmOiBlLFxuICAgICAgICAgIC8vIGR1cmF0aW9uVGlja3M6IGUudGlja3MgLSBub3RlT24udGlja3MsXG4gICAgICAgICAgLy8gZHVyYXRpb25NaWxsaXM6IGUubWlsbGlzIC0gbm90ZU9uLm1pbGxpcyxcbiAgICAgICAgICAvLyBzdGFydFRpY2tzOiBub3RlT24udGlja3MsXG4gICAgICAgICAgLy8gc3RhcnRNaWxsaXM6IG5vdGVPbi5taWxsaXMsXG4gICAgICAgICAgLy8gZW5kVGlja3M6IGUudGlja3MsXG4gICAgICAgICAgLy8gZW5kTWlsbGlzOiBlLm1pbGxpcyxcbiAgICAgICAgfTtcbiAgICAgICAgbm90ZXMucHVzaChub3RlKTtcbiAgICAgICAgZGVsZXRlIHRtcFtpZF07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLy8gY29uc29sZS5sb2cobm90ZXMpO1xuICByZXR1cm4gbm90ZXM7XG59O1xuIiwiLy8gZmV0Y2ggaGVscGVyc1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhdHVzKHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqc29uKHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8SlNPTj4ge1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlCdWZmZXIocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoSlNPTih1cmw6IHN0cmluZyk6IFByb21pc2U8SlNPTj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIGZldGNoKHVybCwge1xuICAgIC8vICAgbW9kZTogJ25vLWNvcnMnXG4gICAgLy8gfSlcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbihzdGF0dXMpXG4gICAgICAudGhlbihqc29uKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFycmF5YnVmZmVyKHVybDogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICAvLyBjb25zb2xlLmxvZygnZmVjdGNoIGFiJywgdXJsKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCByZXNwb25zZV8xID0gYXdhaXQgc3RhdHVzKHJlc3BvbnNlKTtcbiAgcmV0dXJuIGFycmF5QnVmZmVyKHJlc3BvbnNlXzEpO1xufVxuIiwibGV0IG1pZGlBY2Nlc3M6IFdlYk1pZGkuTUlESUFjY2VzcyB8IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRNSURJQWNjZXNzID0gYXN5bmMgKCk6IFByb21pc2U8V2ViTWlkaS5NSURJQWNjZXNzIHwgbnVsbD4gPT4ge1xuICBpZiAobWlkaUFjY2VzcyAhPT0gbnVsbCAmJiB0eXBlb2YgbWlkaUFjY2VzcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobWlkaUFjY2Vzcyk7XG4gIH1cblxuICBpZiAoIW5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2Vzcykge1xuICAgIG1pZGlBY2Nlc3MgPSBudWxsO1xuICAgIGNvbnNvbGUubG9nKFwiV2ViTUlESSBub3Qgc3VwcG9ydGVkXCIpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IG1hID0gYXdhaXQgbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzKCk7XG4gICAgLy8gbWlkaUFjY2Vzcy5vbnN0YXRlY2hhbmdlID0gKGU6IFdlYk1pZGkuTUlESUNvbm5lY3Rpb25FdmVudCkgPT4ge1xuICAgIC8vIH07XG4gICAgaWYgKCFtYS5pbnB1dHMgfHwgIW1hLm91dHB1dHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWZveCBXZWJNSURJIEFQSSBzdXBwb3J0IGlzIHN0aWxsIGluIHByb2dyZXNzXCIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIG1pZGlBY2Nlc3MgPSBtYTtcbiAgICByZXR1cm4gbWE7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIk1JREkgY291bGQgbm90IGJlIGluaXRpYWxpemVkOlwiLCBlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldE1JRElEZXZpY2VzID0gYXN5bmMgKCk6IFByb21pc2U8e1xuICBpbnB1dHM6IFdlYk1pZGkuTUlESUlucHV0W107XG4gIG91dHB1dHM6IFdlYk1pZGkuTUlESU91dHB1dFtdO1xufT4gPT4ge1xuICAvLyBleHBvcnQgY29uc3QgZ2V0TUlESURldmljZXMgPSAoKTogeyBpbnB1dHM6IFdlYk1pZGkuTUlESUlucHV0W10sIG91dHB1dHM6IFdlYk1pZGkuTUlESU91dHB1dFtdIH0gPT4ge1xuICBjb25zdCBpbnB1dHM6IFdlYk1pZGkuTUlESUlucHV0W10gPSBbXTtcbiAgY29uc3Qgb3V0cHV0czogV2ViTWlkaS5NSURJT3V0cHV0W10gPSBbXTtcbiAgaWYgKHR5cGVvZiBtaWRpQWNjZXNzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbWlkaUFjY2VzcyA9IGF3YWl0IGdldE1JRElBY2Nlc3MoKTtcbiAgICAvLyBjb25zb2xlLndhcm4oJ01JRElBY2Nlc3Mgbm90IHlldCBpbml0aWFsaXplZCwgcGxlYXNlIGNhbGwgaW5pdE1JREkgZmlyc3QnKTtcbiAgfSBlbHNlIGlmIChtaWRpQWNjZXNzICE9PSBudWxsKSB7XG4gICAgbWlkaUFjY2Vzcy5pbnB1dHMuZm9yRWFjaChpID0+IHtcbiAgICAgIGlucHV0cy5wdXNoKGkpO1xuICAgIH0pO1xuICAgIG1pZGlBY2Nlc3Mub3V0cHV0cy5mb3JFYWNoKG8gPT4ge1xuICAgICAgb3V0cHV0cy5wdXNoKG8pO1xuICAgIH0pO1xuICB9XG4gIGNvbnNvbGUubG9nKGlucHV0cywgb3V0cHV0cyk7XG4gIHJldHVybiB7IGlucHV0cywgb3V0cHV0cyB9O1xufTtcbiIsImltcG9ydCB7IE1JRElFdmVudCwgVGVtcG9FdmVudCwgVGltZVNpZ25hdHVyZUV2ZW50IH0gZnJvbSBcIi4vbWlkaV9ldmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFNFUVVFTkNFX05VTUJFUiA9IFwic2VxdWVuY2UgbnVtYmVyXCI7XG5leHBvcnQgY29uc3QgVEVYVCA9IFwidGV4dFwiO1xuZXhwb3J0IGNvbnN0IENPUFlSSUdIVF9OT1RJQ0UgPSBcImNvcHlyaWdodCBub3RpY2VcIjtcbmV4cG9ydCBjb25zdCBUUkFDS19OQU1FID0gXCJ0cmFjayBuYW1lXCI7XG5leHBvcnQgY29uc3QgSU5TVFJVTUVOVF9OQU1FID0gXCJpbnN0cnVtZW50IG5hbWVcIjtcbmV4cG9ydCBjb25zdCBMWVJJQ1MgPSBcImx5cmljc1wiO1xuZXhwb3J0IGNvbnN0IE1BUktFUiA9IFwibWFya2VyXCI7XG5leHBvcnQgY29uc3QgQ1VFX1BPSU5UID0gXCJjdWUgcG9pbnRcIjtcbmV4cG9ydCBjb25zdCBDSEFOTkVMX1BSRUZJWCA9IFwiY2hhbm5lbCBwcmVmaXhcIjtcbmV4cG9ydCBjb25zdCBFTkRfT0ZfVFJBQ0sgPSBcImVuZCBvZiB0cmFja1wiO1xuZXhwb3J0IGNvbnN0IFRFTVBPID0gXCJ0ZW1wb1wiO1xuZXhwb3J0IGNvbnN0IFNNUFRFX09GRlNFVCA9IFwic21wdGUgb2Zmc2V0XCI7XG5leHBvcnQgY29uc3QgVElNRV9TSUdOQVRVUkUgPSBcInRpbWUgc2lnbmF0dXJlXCI7XG5leHBvcnQgY29uc3QgS0VZX1NJR05BVFVSRSA9IFwia2V5IHNpZ25hdHVyZVwiO1xuZXhwb3J0IGNvbnN0IFNFUVVFTkNFUl9TUEVDSUZJQyA9IFwic2VxdWVuY2VyIHNwZWNpZmljXCI7XG5leHBvcnQgY29uc3QgU1lTVEVNX0VYQ0xVU0lWRSA9IFwic3lzdGVtIGV4Y2x1c2l2ZVwiO1xuZXhwb3J0IGNvbnN0IERJVklERURfU1lTVEVNX0VYQ0xVU0lWRSA9IFwiZGl2aWRlZCBzeXN0ZW0gZXhjbHVzaXZlXCI7XG5leHBvcnQgY29uc3QgTk9URV9PTiA9IFwibm90ZSBvblwiO1xuZXhwb3J0IGNvbnN0IE5PVEVfT0ZGID0gXCJub3RlIG9mZlwiO1xuZXhwb3J0IGNvbnN0IE5PVEVfQUZURVJUT1VDSCA9IFwibm90ZSBhZnRlcnRvdWNoXCI7XG5leHBvcnQgY29uc3QgQ09OVFJPTExFUiA9IFwiY29udHJvbGxlclwiO1xuZXhwb3J0IGNvbnN0IFBST0dSQU1fQ0hBTkdFID0gXCJwcm9ncmFtIGNoYW5nZVwiO1xuZXhwb3J0IGNvbnN0IENIQU5ORUxfQUZURVJUT1VDSCA9IFwiY2hhbm5lbCBhZnRlcnRvdWNoXCI7XG5leHBvcnQgY29uc3QgUElUQ0hfQkVORCA9IFwicGl0Y2ggYmVuZFwiO1xuXG5jb25zdCBkZXNjcmlwdGlvbnM6IHsgW2luZGV4OiBudW1iZXJdOiB7IFtpbmRleDogbnVtYmVyXTogc3RyaW5nIH0gfCBzdHJpbmcgfSA9IHtcbiAgMHhmZjoge1xuICAgIDB4MDA6IFwic2VxdWVuY2UgbnVtYmVyXCIsXG4gICAgMHgwMTogXCJ0ZXh0XCIsXG4gICAgMHgwMjogXCJjb3B5cmlnaHQgbm90aWNlXCIsXG4gICAgMHgwMzogXCJ0cmFjayBuYW1lXCIsXG4gICAgMHgwNDogXCJpbnN0cnVtZW50IG5hbWVcIixcbiAgICAweDA1OiBcImx5cmljc1wiLFxuICAgIDB4MDY6IFwibWFya2VyXCIsXG4gICAgMHgwNzogXCJjdWUgcG9pbnRcIixcbiAgICAweDIwOiBcImNoYW5uZWwgcHJlZml4XCIsXG4gICAgMHgyZjogXCJlbmQgb2YgdHJhY2tcIixcbiAgICAweDUxOiBcInRlbXBvXCIsXG4gICAgMHg1NDogXCJzbXB0ZSBvZmZzZXRcIixcbiAgICAweDU4OiBcInRpbWUgc2lnbmF0dXJlXCIsXG4gICAgMHg1OTogXCJrZXkgc2lnbmF0dXJlXCIsXG4gICAgMHg3ZjogXCJzZXF1ZW5jZXIgc3BlY2lmaWNcIixcbiAgfSxcbiAgMHhmMDogXCJzeXN0ZW0gZXhjbHVzaXZlXCIsXG4gIDB4Zjc6IFwiZGl2aWRlZCBzeXNleFwiLFxuICAweDgwOiBcIm5vdGUgb25cIixcbiAgMHg5MDogXCJub3RlIG9mZlwiLFxuICAweGEwOiBcIm5vdGUgYWZ0ZXJ0b3VjaFwiLFxuICAweGIwOiBcImNvbnRyb2xsZXJcIixcbiAgMHhjMDogXCJwcm9ncmFtIGNoYW5nZVwiLFxuICAweGQwOiBcImNoYW5uZWwgYWZ0ZXJ0b3VjaFwiLFxuICAweGUwOiBcInBpdGNoIGJlbmRcIixcbn07XG5cbmV4cG9ydCBjb25zdCBub3RlTmFtZXMgPSB7XG4gIHNoYXJwOiBbXCJDXCIsIFwiQyNcIiwgXCJEXCIsIFwiRCNcIiwgXCJFXCIsIFwiRlwiLCBcIkYjXCIsIFwiR1wiLCBcIkcjXCIsIFwiQVwiLCBcIkEjXCIsIFwiQlwiXSxcbiAgZmxhdDogW1wiQ1wiLCBcIkRiXCIsIFwiRFwiLCBcIkViXCIsIFwiRVwiLCBcIkZcIiwgXCJHYlwiLCBcIkdcIiwgXCJBYlwiLCBcIkFcIiwgXCJCYlwiLCBcIkJcIl0sXG4gIFwiZW5oYXJtb25pYy1zaGFycFwiOiBbXCJCI1wiLCBcIkMjXCIsIFwiQyMjXCIsIFwiRCNcIiwgXCJEIyNcIiwgXCJFI1wiLCBcIkYjXCIsIFwiRiMjXCIsIFwiRyNcIiwgXCJHIyNcIiwgXCJBI1wiLCBcIkEjI1wiXSxcbiAgXCJlbmhhcm1vbmljLWZsYXRcIjogW1wiRGJiXCIsIFwiRGJcIiwgXCJFYmJcIiwgXCJFYlwiLCBcIkZiXCIsIFwiR2JiXCIsIFwiR2JcIiwgXCJBYmJcIiwgXCJBYlwiLCBcIkJiYlwiLCBcIkJiXCIsIFwiQ2JcIl0sXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWlkaUV2ZW50RGVzY3JpcHRpb24gPSAodHlwZTogbnVtYmVyLCBzdWJUeXBlPzogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgaWYgKHR5cGVvZiBzdWJUeXBlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uc1t0eXBlXSBhcyBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIGRlc2NyaXB0aW9uc1t0eXBlXVtzdWJUeXBlXSB8fCBcInVuZGVmaW5lZFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE1pZGlNZXNzYWdlRXZlbnQgPSAoZXZlbnQ6IE1JRElFdmVudCk6IG51bWJlcltdID0+IHtcbiAgc3dpdGNoIChldmVudC5kZXNjcikge1xuICAgIGNhc2UgTk9URV9PTjpcbiAgICAgIHJldHVybiBbMHg5MCArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5XTtcbiAgICBjYXNlIE5PVEVfT0ZGOlxuICAgICAgcmV0dXJuIFsweDgwICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHldO1xuICB9XG4gIHJldHVybiBbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Tm90ZU51bWJlciA9IChuYW1lOiBzdHJpbmcsIG9jdGF2ZTogbnVtYmVyLCBtb2RlOiBzdHJpbmcgPSBcInNoYXJwXCIpOiBudW1iZXIgPT4ge1xuICAvLyBsZXQgaW5kZXggPSAtMTtcbiAgLy8gY29uc3QgbW9kZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhub3RlTmFtZXMpO1xuICAvLyBmb3IgKGxldCBpID0gMCwgbWF4aSA9IG1vZGVzLmxlbmd0aDsgaSA8IG1heGk7IGkrKykge1xuICAvLyAgIGNvbnN0IG5hbWVzID0gbW9kZXNbaV07XG4gIC8vICAgZm9yIChsZXQgaiA9IDAsIG1heGogPSBuYW1lcy5sZW5ndGg7IGogPCBtYXhqOyBqKyspIHtcbiAgLy8gICAgIGlmIChtb2RlW2pdID09PSBuYW1lKSB7XG4gIC8vICAgICAgIGluZGV4ID0gaTtcbiAgLy8gICAgICAgYnJlYWs7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIGxldCBpbmRleCA9IC0xO1xuICBjb25zdCBtb2RlcyA9IE9iamVjdC52YWx1ZXMobm90ZU5hbWVzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hbWVzID0gbW9kZXNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuYW1lcy5sZW5ndGg7IGorKykge1xuICAgICAgLy8gY29uc29sZS5sb2cobmFtZXNbal0sIG5hbWUpO1xuICAgICAgaWYgKG5hbWVzW2pdID09PSBuYW1lKSB7XG4gICAgICAgIGluZGV4ID0gajtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKG5hbWUsIG9jdGF2ZSwgaW5kZXgpO1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLy9udW1iZXIgPSAoaW5kZXggKyAxMikgKyAob2N0YXZlICogMTIpICsgMTI7IC8vIOKGkiBpbiBDdWJhc2UgY2VudHJhbCBDID0gQzMgaW5zdGVhZCBvZiBDNFxuICByZXR1cm4gaW5kZXggKyAxMiArIG9jdGF2ZSAqIDEyOyAvLyDihpIgbWlkaSBzdGFuZGFyZCArIHNjaWVudGlmaWMgbmFtaW5nLCBzZWU6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWlkZGxlX0MgYW5kIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2NpZW50aWZpY19waXRjaF9ub3RhdGlvblxufTtcblxuZXhwb3J0IGNvbnN0IHNvcnRNSURJRXZlbnRzID0gKGV2ZW50czogTUlESUV2ZW50W10pOiBNSURJRXZlbnRbXSA9PlxuICBldmVudHMuc29ydCgoYTogTUlESUV2ZW50LCBiOiBNSURJRXZlbnQpID0+IHtcbiAgICBpZiAoYS50aWNrcyA8IGIudGlja3MpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYgKGEudGlja3MgPiBiLnRpY2tzKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICAgIC8vIH0gZWxzZSBpZiAoYS50eXBlID09PSAweDgwICYmIGIudHlwZSA9PT0gMHg5MCkge1xuICAgICAgLy8gICAvLyBub3RlIG9mZiBiZWZvcmUgbm90ZSBvblxuICAgICAgLy8gICByZXR1cm4gLTE7XG4gICAgICAvLyB9IGVsc2UgaWYgKGEudHlwZSA9PT0gMHg1MSB8fCBhLnR5cGUgPT09IDB4NTgpIHtcbiAgICAgIC8vICAgLy8gdGVtcG8gYW5kIHRpbWUgc2lnbmF0dXJlIGV2ZW50cyBmaXJzdFxuICAgICAgLy8gICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZURvdWJsZUV2ZW50cyA9IChldmVudHM6IE1JRElFdmVudFtdKTogTUlESUV2ZW50W10gPT4ge1xuICAvLyB2YXIgaSwgbWF4aSA9IGV2ZW50cy5sZW5ndGgsXG4gIC8vICAgZXZlbnQsIGV2ZW50SWQsIGxhc3RJZCxcbiAgLy8gICByZXN1bHQgPSBbXTtcblxuICAvLyBldmVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAvLyAgIHJldHVybiBhLmV2ZW50TnVtYmVyIC0gYi5ldmVudE51bWJlcjtcbiAgLy8gfSk7XG5cbiAgLy8gZm9yIChpID0gMDsgaSA8IG1heGk7IGkrKykge1xuICAvLyAgIGV2ZW50ID0gZXZlbnRzW2ldO1xuICAvLyAgIGV2ZW50SWQgPSBldmVudC5pZDtcbiAgLy8gICBpZiAoZXZlbnRJZCAhPT0gbGFzdElkKSB7XG4gIC8vICAgICByZXN1bHQucHVzaChldmVudCk7XG4gIC8vICAgfVxuICAvLyAgIGxhc3RJZCA9IGV2ZW50SWQ7XG4gIC8vIH1cbiAgLy8gcmV0dXJuIHJlc3VsdDtcbiAgcmV0dXJuIFtdO1xufTtcbiIsIi8vIGJhc2VkIG9uOiBodHRwczovL2dpdGh1Yi5jb20vcHJhdmRvbWlsL2phc21pZC50c1xuXG4vLyBpbXBvcnQgeyBCdWZmZXJSZWFkZXIgfSBmcm9tICdqYXNtaWQudHMnO1xuaW1wb3J0IHVuaXF1aWQgZnJvbSBcInVuaXFpZFwiO1xuaW1wb3J0IHsgQnVmZmVyUmVhZGVyIH0gZnJvbSBcIi4vYnVmZmVycmVhZGVyXCI7XG5pbXBvcnQgeyBNSURJRXZlbnQgfSBmcm9tIFwiLi9taWRpX2V2ZW50c1wiO1xuaW1wb3J0IHtcbiAgU0VRVUVOQ0VfTlVNQkVSLFxuICBURVhULFxuICBDT1BZUklHSFRfTk9USUNFLFxuICBUUkFDS19OQU1FLFxuICBJTlNUUlVNRU5UX05BTUUsXG4gIExZUklDUyxcbiAgTUFSS0VSLFxuICBDVUVfUE9JTlQsXG4gIENIQU5ORUxfUFJFRklYLFxuICBFTkRfT0ZfVFJBQ0ssXG4gIFRFTVBPLFxuICBTTVBURV9PRkZTRVQsXG4gIFRJTUVfU0lHTkFUVVJFLFxuICBLRVlfU0lHTkFUVVJFLFxuICBTRVFVRU5DRVJfU1BFQ0lGSUMsXG4gIFNZU1RFTV9FWENMVVNJVkUsXG4gIERJVklERURfU1lTVEVNX0VYQ0xVU0lWRSxcbiAgTk9URV9PTixcbiAgTk9URV9PRkYsXG4gIE5PVEVfQUZURVJUT1VDSCxcbiAgQ09OVFJPTExFUixcbiAgUFJPR1JBTV9DSEFOR0UsXG4gIENIQU5ORUxfQUZURVJUT1VDSCxcbiAgUElUQ0hfQkVORCxcbiAgc29ydE1JRElFdmVudHMsXG59IGZyb20gXCIuL21pZGlfdXRpbHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pbGxpcyB9IGZyb20gXCIuL2NhbGN1bGF0ZU1pbGxpc1wiO1xuaW1wb3J0IHsgVHJhY2sgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlVHJhY2sgfSBmcm9tIFwiLi9zdWdhcl9jb2F0aW5nXCI7XG5cbmNvbnN0IHBsYXliYWNrU3BlZWQgPSAxO1xuXG5leHBvcnQgdHlwZSBQYXJzZWREYXRhID0ge1xuICBldmVudDogYW55O1xuICBkZWx0YVRpbWU6IG51bWJlcjtcbiAgYnBtPzogbnVtYmVyO1xuICBudW1lcmF0b3I/OiBudW1iZXI7XG4gIGRlbm9taW5hdG9yPzogbnVtYmVyO1xuICB0cmFja05hbWU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBQYXJzZWRNSURJRmlsZSA9IHtcbiAgLy8gaGVhZGVyOiB7XG4gIC8vICAgZm9ybWF0VHlwZTogbnVtYmVyO1xuICAvLyAgIHRyYWNrQ291bnQ6IG51bWJlcjtcbiAgLy8gICB0aWNrc1BlckJlYXQ6IG51bWJlcjtcbiAgLy8gfTtcbiAgcHBxOiBudW1iZXI7XG4gIGluaXRpYWxUZW1wbzogbnVtYmVyO1xuICBpbml0aWFsTnVtZXJhdG9yOiBudW1iZXI7XG4gIGluaXRpYWxEZW5vbWluYXRvcjogbnVtYmVyO1xuICB0cmFja3M6IFRyYWNrW107XG4gIGV2ZW50czogTUlESUV2ZW50W107XG4gIC8vIHRyYWNrczogTUlESUV2ZW50W11bXVxuICAvLyB0aW1lVHJhY2s6IE1JRElFdmVudFtdXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNaWRpRmlsZShidWZmZXI6IEFycmF5QnVmZmVyTGlrZSk6IFBhcnNlZE1JRElGaWxlIHtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEJ1ZmZlclJlYWRlcihidWZmZXIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IHBhcnNlSGVhZGVyKHJlYWRlcik7XG4gIC8vIGNvbnN0IHsgdGltZVRyYWNrLCB0cmFja3MgfSA9IHBhcnNlVHJhY2tzKHJlYWRlciwgaGVhZGVyLnRpY2tzUGVyQmVhdClcbiAgY29uc3QgeyB0cmFja3MsIGV2ZW50cywgaW5pdGlhbFRlbXBvLCBpbml0aWFsTnVtZXJhdG9yLCBpbml0aWFsRGVub21pbmF0b3IgfSA9IHBhcnNlVHJhY2tzKFxuICAgIHJlYWRlcixcbiAgICBoZWFkZXIudGlja3NQZXJCZWF0XG4gICk7XG5cbiAgLy8gcmV0dXJuIHsgaGVhZGVyLCB0aW1lVHJhY2ssIHRyYWNrcyB9XG4gIHJldHVybiB7XG4gICAgcHBxOiBoZWFkZXIudGlja3NQZXJCZWF0LFxuICAgIHRyYWNrcyxcbiAgICBpbml0aWFsVGVtcG8sXG4gICAgaW5pdGlhbE51bWVyYXRvcixcbiAgICBpbml0aWFsRGVub21pbmF0b3IsXG4gICAgZXZlbnRzOiBjYWxjdWxhdGVNaWxsaXMoZXZlbnRzLCB7XG4gICAgICBwcHE6IGhlYWRlci50aWNrc1BlckJlYXQsXG4gICAgICBicG06IGluaXRpYWxUZW1wbyxcbiAgICB9KSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIocmVhZGVyOiBCdWZmZXJSZWFkZXIpIHtcbiAgY29uc3QgaGVhZGVyQ2h1bmsgPSByZWFkZXIubWlkaUNodW5rKCk7XG4gIGlmIChoZWFkZXJDaHVuay5pZCAhPT0gXCJNVGhkXCIgfHwgaGVhZGVyQ2h1bmsubGVuZ3RoICE9PSA2KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQmFkIC5taWQgZmlsZSwgaGVhZGVyIG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRlclJlYWRlciA9IG5ldyBCdWZmZXJSZWFkZXIoaGVhZGVyQ2h1bmsuZGF0YSk7XG4gIGNvbnN0IGZvcm1hdFR5cGUgPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGNvbnN0IHRyYWNrQ291bnQgPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGNvbnN0IHRpbWVEaXZpc2lvbiA9IGhlYWRlclJlYWRlci51aW50MTYoKTtcbiAgaWYgKHRpbWVEaXZpc2lvbiAmIDB4ODAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkV4cHJlc3NpbmcgdGltZSBkaXZpc2lvbiBpbiBTTVRQRSBmcmFtZXMgaXMgbm90IHN1cHBvcnRlZCB5ZXRcIik7XG4gIH1cbiAgY29uc3QgdGlja3NQZXJCZWF0ID0gdGltZURpdmlzaW9uO1xuXG4gIHJldHVybiB7IGZvcm1hdFR5cGUsIHRyYWNrQ291bnQsIHRpY2tzUGVyQmVhdCB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVRyYWNrcyhcbiAgcmVhZGVyOiBCdWZmZXJSZWFkZXIsXG4gIHBwcTogbnVtYmVyXG4pOiB7XG4gIHRyYWNrczogVHJhY2tbXTtcbiAgZXZlbnRzOiBNSURJRXZlbnRbXTtcbiAgaW5pdGlhbFRlbXBvOiBudW1iZXI7XG4gIGluaXRpYWxOdW1lcmF0b3I6IG51bWJlcjtcbiAgaW5pdGlhbERlbm9taW5hdG9yOiBudW1iZXI7XG59IHtcbiAgbGV0IGluaXRpYWxUZW1wbyA9IC0xO1xuICBsZXQgaW5pdGlhbE51bWVyYXRvciA9IC0xO1xuICBsZXQgaW5pdGlhbERlbm9taW5hdG9yID0gLTE7XG4gIGNvbnN0IHRyYWNrczogVHJhY2tbXSA9IFtdO1xuICBjb25zdCBldmVudHM6IE1JRElFdmVudFtdID0gW107XG4gIHdoaWxlICghcmVhZGVyLmVvZigpKSB7XG4gICAgY29uc3QgdHJhY2tDaHVuayA9IHJlYWRlci5taWRpQ2h1bmsoKTtcblxuICAgIGlmICh0cmFja0NodW5rLmlkICE9PSBcIk1UcmtcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGNodW5rLCBleHBlY3RlZCBNVHJrLCBnb3QgJHt0cmFja0NodW5rLmlkfWApO1xuICAgIH1cbiAgICBjb25zdCB0cmFja0lkID0gYFQtJHt1bmlxdWlkKCl9YDtcbiAgICBjb25zdCB0cmFjayA9IGNyZWF0ZVRyYWNrKHRyYWNrSWQpO1xuICAgIGNvbnN0IHRyYWNrVHJhY2sgPSBuZXcgQnVmZmVyUmVhZGVyKHRyYWNrQ2h1bmsuZGF0YSk7XG4gICAgbGV0IHRpY2tzID0gMDtcbiAgICBsZXQgbGFzdFR5cGVCeXRlID0gbnVsbDtcbiAgICB3aGlsZSAoIXRyYWNrVHJhY2suZW9mKCkpIHtcbiAgICAgIGxldCBkYXRhID0gcGFyc2VFdmVudCh0cmFja1RyYWNrLCBsYXN0VHlwZUJ5dGUpO1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjb25zdCB7IGV2ZW50LCBkZWx0YVRpbWUsIGJwbSwgbnVtZXJhdG9yLCBkZW5vbWluYXRvciwgdHJhY2tOYW1lIH0gPSBkYXRhO1xuICAgICAgaWYgKGJwbSAmJiBpbml0aWFsVGVtcG8gPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxUZW1wbyA9IGJwbTtcbiAgICAgIH1cbiAgICAgIGlmIChudW1lcmF0b3IgJiYgaW5pdGlhbE51bWVyYXRvciA9PT0gLTEpIHtcbiAgICAgICAgaW5pdGlhbE51bWVyYXRvciA9IG51bWVyYXRvcjtcbiAgICAgIH1cbiAgICAgIGlmIChkZW5vbWluYXRvciAmJiBpbml0aWFsRGVub21pbmF0b3IgPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxEZW5vbWluYXRvciA9IGRlbm9taW5hdG9yO1xuICAgICAgfVxuICAgICAgaWYgKHRyYWNrTmFtZSkge1xuICAgICAgICB0cmFjay5uYW1lID0gdHJhY2tOYW1lO1xuICAgICAgfVxuICAgICAgdGlja3MgKz0gZGVsdGFUaW1lO1xuICAgICAgLy8gY29uc29sZS5sb2coJ1RJQ0tTJywgdGlja3MsIGJwbSwgbnVtZXJhdG9yKTtcbiAgICAgIGxhc3RUeXBlQnl0ZSA9IGV2ZW50LnR5cGU7XG4gICAgICBldmVudHMucHVzaCh7XG4gICAgICAgIC4uLmV2ZW50LFxuICAgICAgICB0cmFja0lkLFxuICAgICAgICB0aWNrcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0cmFja3MucHVzaCh0cmFjayk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV2ZW50czogc29ydE1JRElFdmVudHMoZXZlbnRzKSxcbiAgICB0cmFja3MsXG4gICAgaW5pdGlhbFRlbXBvLFxuICAgIGluaXRpYWxOdW1lcmF0b3IsXG4gICAgaW5pdGlhbERlbm9taW5hdG9yLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZUV2ZW50KHJlYWRlcjogQnVmZmVyUmVhZGVyLCBsYXN0VHlwZUJ5dGU6IG51bWJlciB8IG51bGwpOiBQYXJzZWREYXRhIHtcbiAgY29uc3QgZGVsdGFUaW1lID0gcmVhZGVyLm1pZGlJbnQoKTtcbiAgbGV0IHR5cGVCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG5cbiAgLy8gbWV0YSBldmVudHM6IDB4ZmZcbiAgLy8gc3lzdGVtIGV2ZW50czogMHhmMCwgMHhmN1xuICAvLyBtaWRpIGV2ZW50czogYWxsIG90aGVyIGJ5dGVzXG5cbiAgaWYgKHR5cGVCeXRlID09PSAweGZmKSB7XG4gICAgY29uc3Qgc3ViVHlwZUJ5dGUgPSByZWFkZXIudWludDgoKTtcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuXG4gICAgc3dpdGNoIChzdWJUeXBlQnl0ZSkge1xuICAgICAgLy8gc2VxdWVuY2UgbnVtYmVyXG4gICAgICBjYXNlIDB4MDA6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc2VxdWVuY2VOdW1iZXIgZXZlbnQgaXMgMiwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU0VRVUVOQ0VfTlVNQkVSLFxuICAgICAgICAgICAgbnVtYmVyOiByZWFkZXIudWludDE2KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0ZXh0XG4gICAgICBjYXNlIDB4MDE6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogVEVYVCxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNvcHlyaWdodFxuICAgICAgY2FzZSAweDAyOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENPUFlSSUdIVF9OT1RJQ0UsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0cmFjayBuYW1lXG4gICAgICBjYXNlIDB4MDM6XG4gICAgICAgIGNvbnN0IHRyYWNrTmFtZSA9IHJlYWRlci5zdHJpbmcobGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBUUkFDS19OQU1FLFxuICAgICAgICAgICAgdGV4dDogdHJhY2tOYW1lLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICAgIHRyYWNrTmFtZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGluc3RydW1lbnQgbmFtZVxuICAgICAgY2FzZSAweDA0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IElOU1RSVU1FTlRfTkFNRSxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGx5cmljc1xuICAgICAgY2FzZSAweDA1OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IExZUklDUyxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIG1hcmtlclxuICAgICAgY2FzZSAweDA2OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IE1BUktFUixcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGN1ZSBwb2ludFxuICAgICAgY2FzZSAweDA3OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENVRV9QT0lOVCxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNoYW5uZWwgcHJlZml4XG4gICAgICBjYXNlIDB4MjA6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3IgbWlkaUNoYW5uZWxQcmVmaXggZXZlbnQgaXMgMSwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogQ0hBTk5FTF9QUkVGSVgsXG4gICAgICAgICAgICBjaGFubmVsOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGVuZCBvZiB0cmFja1xuICAgICAgY2FzZSAweDJmOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIGVuZE9mVHJhY2sgZXZlbnQgaXMgMCwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIGRlc2NyOiBFTkRfT0ZfVFJBQ0ssXG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGVtcG9cbiAgICAgIGNhc2UgMHg1MTpcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBzZXRUZW1wbyBldmVudCBpcyAzLCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWljcm9zZWNvbmRzUGVyQmVhdCA9IChyZWFkZXIudWludDgoKSA8PCAxNikgKyAocmVhZGVyLnVpbnQ4KCkgPDwgOCkgKyByZWFkZXIudWludDgoKTtcbiAgICAgICAgY29uc3QgYnBtID0gNjAwMDAwMDAgLyBtaWNyb3NlY29uZHNQZXJCZWF0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRFTVBPLFxuICAgICAgICAgICAgYnBtLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYnBtLFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHNtcHRlIG9mZnNldFxuICAgICAgY2FzZSAweDU0OlxuICAgICAgICBpZiAobGVuZ3RoICE9IDUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc21wdGVPZmZzZXQgZXZlbnQgaXMgNSwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhvdXJCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU01QVEVfT0ZGU0VULFxuICAgICAgICAgICAgZnJhbWVSYXRlOiBnZXRGcmFtZVJhdGUoaG91ckJ5dGUpLFxuICAgICAgICAgICAgaG91cjogaG91ckJ5dGUgJiAweDFmLFxuICAgICAgICAgICAgbWluOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICAgIHNlYzogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBmcmFtZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBzdWJGcmFtZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0aW1lIHNpZ25hdHVyZVxuICAgICAgY2FzZSAweDU4OlxuICAgICAgICBpZiAobGVuZ3RoICE9IDQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3IgdGltZVNpZ25hdHVyZSBldmVudCBpcyA0LCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbnVtZXJhdG9yID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIGNvbnN0IGRlbm9taW5hdG9yID0gTWF0aC5wb3coMiwgcmVhZGVyLnVpbnQ4KCkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRJTUVfU0lHTkFUVVJFLFxuICAgICAgICAgICAgbnVtZXJhdG9yLFxuICAgICAgICAgICAgZGVub21pbmF0b3IsXG4gICAgICAgICAgICBtZXRyb25vbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgdGhpcnR5U2Vjb25kczogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBudW1lcmF0b3IsXG4gICAgICAgICAgZGVub21pbmF0b3IsXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8ga2V5IHNpZ25hdHVyZVxuICAgICAgY2FzZSAweDU5OlxuICAgICAgICBpZiAobGVuZ3RoICE9IDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Iga2V5U2lnbmF0dXJlIGV2ZW50IGlzIDIsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IEtFWV9TSUdOQVRVUkUsXG4gICAgICAgICAgICBrZXk6IHJlYWRlci5pbnQ4KCksXG4gICAgICAgICAgICBzY2FsZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBzZXF1ZW5jZXIgc3BlY2lmaWNcbiAgICAgIGNhc2UgMHg3ZjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBTRVFVRU5DRVJfU1BFQ0lGSUMsXG4gICAgICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdW5kZWZpbmVkXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFwidW5kZWZpbmVkXCIsXG4gICAgICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlQnl0ZSA9PT0gMHhmMCkge1xuICAgIC8vIHN5c3RlbSBleGNsdXNpdmVcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDoge1xuICAgICAgICB0eXBlOiAweGYwLFxuICAgICAgICBkZXNjcjogU1lTVEVNX0VYQ0xVU0lWRSxcbiAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgIH0sXG4gICAgICBkZWx0YVRpbWUsXG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlQnl0ZSA9PT0gMHhmNykge1xuICAgIC8vIGRpdmlkZWQgc3lzdGVtIGV4Y2x1c2l2ZVxuICAgIGNvbnN0IGxlbmd0aCA9IHJlYWRlci5taWRpSW50KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV2ZW50OiB7XG4gICAgICAgIHR5cGU6IDB4ZjAsXG4gICAgICAgIGRlc2NyOiBESVZJREVEX1NZU1RFTV9FWENMVVNJVkUsXG4gICAgICAgIGRhdGE6IHJlYWRlci5yZWFkKGxlbmd0aCksXG4gICAgICB9LFxuICAgICAgZGVsdGFUaW1lLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLyoqXG4gICAgICogcnVubmluZyBzdGF0dXMgLSByZXVzZSBsYXN0RXZlbnRUeXBlQnl0ZSBhcyB0aGUgZXZlbnQgdHlwZVxuICAgICAqIHR5cGVCeXRlIGlzIGFjdHVhbGx5IHRoZSBmaXJzdCBwYXJhbWV0ZXJcbiAgICAgKi9cbiAgICBjb25zdCBpc1J1bm5pbmdTdGF0dXMgPSAodHlwZUJ5dGUgJiAwYjEwMDAwMDAwKSA9PT0gMDtcbiAgICBjb25zdCB2YWx1ZSA9IGlzUnVubmluZ1N0YXR1cyA/IHR5cGVCeXRlIDogcmVhZGVyLnVpbnQ4KCk7XG4gICAgdHlwZUJ5dGUgPSBpc1J1bm5pbmdTdGF0dXMgPyAobGFzdFR5cGVCeXRlID09PSBudWxsID8gMCA6IGxhc3RUeXBlQnl0ZSkgOiB0eXBlQnl0ZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGlzUnVubmluZ1N0YXR1cywgdHlwZUJ5dGUsIHZhbHVlKTtcblxuICAgIGNvbnN0IGNoYW5uZWwgPSB0eXBlQnl0ZSAmIDB4MGY7XG4gICAgLy8gY2hhbm5lbHNbY2hhbm5lbF0gPSB0cnVlO1xuXG4gICAgc3dpdGNoICh0eXBlQnl0ZSA+PiA0KSB7XG4gICAgICAvLyBub3RlIG9mZlxuICAgICAgY2FzZSAweDA4OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweDgwLFxuICAgICAgICAgICAgZGVzY3I6IE5PVEVfT0ZGLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gbm90ZSBvblxuICAgICAgY2FzZSAweDA5OlxuICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB2ZWxvY2l0eSA9PT0gMCA/IDB4ODAgOiAweDkwLFxuICAgICAgICAgICAgZGVzY3I6IHZlbG9jaXR5ID09PSAwID8gTk9URV9PRkYgOiBOT1RFX09OLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmVsb2NpdHksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBub3RlIGFmdGVydG91Y2hcbiAgICAgIGNhc2UgMHgwYTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhhMCxcbiAgICAgICAgICAgIGRlc2NyOiBOT1RFX0FGVEVSVE9VQ0gsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgbm90ZU51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICBhbW91bnQ6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gY29udHJvbGxlclxuICAgICAgY2FzZSAweDBiOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGIwLFxuICAgICAgICAgICAgZGVzY3I6IENPTlRST0xMRVIsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgY29udHJvbGxlck51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICB2YWx1ZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBwcm9ncmFtIGNoYW5nZVxuICAgICAgY2FzZSAweDBjOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGMwLFxuICAgICAgICAgICAgZGVzY3I6IFBST0dSQU1fQ0hBTkdFLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIHByb2dyYW06IHZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gY2hhbm5lbCBhZnRlcnRvdWNoXG4gICAgICBjYXNlIDB4MGQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4ZDAsXG4gICAgICAgICAgICBkZXNjcjogQ0hBTk5FTF9BRlRFUlRPVUNILFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIGFtb3VudDogdmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBwaXRjaCBiZW5kXG4gICAgICBjYXNlIDB4MGU6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4ZTAsXG4gICAgICAgICAgICBkZXNjcjogUElUQ0hfQkVORCxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUgKyAocmVhZGVyLnVpbnQ4KCkgPDwgNyksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG5cbiAgICAgIC8vIGRlZmF1bHQ6XG4gICAgICAvLyAgIHJldHVybiB7XG4gICAgICAvLyAgICAgZXZlbnQ6IHtcbiAgICAgIC8vICAgICAgIHR5cGU6IHR5cGVCeXRlID4+IDQsXG4gICAgICAvLyAgICAgICBkZXNjcjogXCJ1bnJlY29nbml6ZWRcIixcbiAgICAgIC8vICAgICAgIGNoYW5uZWwsXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgICBkZWx0YVRpbWUsXG4gICAgICAvLyAgIH07XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGBVbnJlY29nbml6ZWQgTUlESSBldmVudCB0eXBlIGJ5dGU6ICR7dHlwZUJ5dGV9IChmaXggdGhpcylgKTtcbiAgcmV0dXJuIHtcbiAgICBldmVudDoge1xuICAgICAgdHlwZTogdHlwZUJ5dGUgPT09IDI1NSA/IDAgOiB0eXBlQnl0ZSxcbiAgICB9LFxuICAgIGRlbHRhVGltZSxcbiAgfTtcbiAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgTUlESSBldmVudCB0eXBlIGJ5dGU6ICR7dHlwZUJ5dGV9YCk7XG59XG5cbmZ1bmN0aW9uIGdldEZyYW1lUmF0ZShob3VyQnl0ZTogbnVtYmVyKSB7XG4gIHN3aXRjaCAoaG91ckJ5dGUgJiAwYjExMDAwMDApIHtcbiAgICBjYXNlIDB4MDA6XG4gICAgICByZXR1cm4gMjQ7XG4gICAgY2FzZSAweDIwOlxuICAgICAgcmV0dXJuIDI1O1xuICAgIGNhc2UgMHg0MDpcbiAgICAgIHJldHVybiAyOTtcbiAgICBjYXNlIDB4NjA6XG4gICAgICByZXR1cm4gMzA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IE1JRElFdmVudCwgTm90ZU9uRXZlbnQgfSBmcm9tIFwiLi9taWRpX2V2ZW50c1wiO1xuaW1wb3J0IHsgTk9URV9PTiwgTk9URV9PRkYgfSBmcm9tIFwiLi9taWRpX3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50RXZlbnRJbmRleCA9IChzb25nOiBTb25nLCBtaWxsaXM6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSBzb25nO1xuICBsZXQgaSA9IDA7XG4gIGZvciAoOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaV07XG4gICAgaWYgKCFldmVudC5taWxsaXMgfHwgZXZlbnQubWlsbGlzID49IG1pbGxpcykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBpO1xufTtcblxudHlwZSBBcmdzID0ge1xuICBzb25nOiBTb25nO1xuICBtaWxsaXM6IG51bWJlcjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgb3V0cHV0cz86IFdlYk1pZGkuTUlESU91dHB1dE1hcDtcbn07XG5leHBvcnQgY29uc3Qgc2NoZWR1bGUgPSAoe1xuICBzb25nLFxuICBpbmRleCxcbiAgbWlsbGlzLFxuICBvdXRwdXRzLFxufTogQXJncyk6IHsgbWlsbGlzOiBudW1iZXI7IGluZGV4OiBudW1iZXI7IHNjaGVkdWxlZDogTUlESUV2ZW50W10gfSA9PiB7XG4gIGNvbnN0IHRzID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSBzb25nO1xuICBjb25zdCBzY2hlZHVsZWQgPSBbXTtcbiAgLy8gbGV0IGxhc3ROb3RlTnVtYmVyOiBudW1iZXIgPSAtMTtcbiAgLy8gbGV0IGxhc3ROb3RlVHlwZTogbnVtYmVyID0gLTE7XG4gIHdoaWxlIChpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1tpbmRleF07XG4gICAgaWYgKCFldmVudC5taWxsaXMgfHwgIWV2ZW50LnRyYWNrSWQpIHtcbiAgICAgIC8vIGJyZWFrO1xuICAgICAgaW5kZXgrKztcbiAgICB9IGVsc2UgaWYgKGV2ZW50Lm1pbGxpcyA8IG1pbGxpcyArIHNvbmcuYnVmZmVyVGltZSkge1xuICAgICAgc2NoZWR1bGVkLnB1c2goZXZlbnQpO1xuICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGlja3MsIGV2ZW50LmRlc2NyLCAoZXZlbnQgYXMgTm90ZU9uRXZlbnQpLm5vdGVOdW1iZXIpO1xuICAgICAgY29uc3QgdHJhY2sgPSBzb25nLnRyYWNrc0J5SWRbZXZlbnQudHJhY2tJZF07XG4gICAgICB0cmFjay5vdXRwdXRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuZGVzY3IgPT09IE5PVEVfT04gfHwgZXZlbnQuZGVzY3IgPT09IE5PVEVfT0ZGKSB7XG4gICAgICAgICAgY29uc3QgZSA9IGV2ZW50IGFzIE5vdGVPbkV2ZW50O1xuICAgICAgICAgIGlmIChldmVudC5taWxsaXMpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnR5cGUsIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIpO1xuICAgICAgICAgICAgbGV0IHRpbWUgPSB0cyArIHNvbmcubGF0ZW5jeSArIHRyYWNrLmxhdGVuY3kgKyAoZXZlbnQubWlsbGlzIC0gbWlsbGlzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50W1wibm90ZU51bWJlclwiXSwgZXZlbnQuZGVzY3IsIGV2ZW50Lm1pbGxpcywgbWlsbGlzLCB0aW1lLCB0cywgdGltZSAtIHRzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUubm90ZU51bWJlciwgbGFzdE5vdGVOdW1iZXIsIGxhc3ROb3RlVHlwZSk7XG4gICAgICAgICAgICAvLyBpZiAoZS5ub3RlTnVtYmVyID09PSBsYXN0Tm90ZU51bWJlciAmJiBsYXN0Tm90ZVR5cGUgPT09IDB4OTApIHtcbiAgICAgICAgICAgIC8vICAgaWYgKGUuZGVzY3IgPT09IE5PVEVfT04pIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlcGVhdGluZyBub3Rlc1wiKTtcbiAgICAgICAgICAgIC8vICAgICB0aW1lICs9IDE7XG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGxhc3ROb3RlTnVtYmVyID0gZS5ub3RlTnVtYmVyO1xuICAgICAgICAgICAgLy8gbGFzdE5vdGVUeXBlID0gZS50eXBlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudHlwZSArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5KTtcbiAgICAgICAgICAgIC8vIHF1aWNrIGZpeCBmb3IgcmVwZWF0aW5nIG5vdGVzXG4gICAgICAgICAgICBpZiAoZS5kZXNjciA9PT0gTk9URV9PTikge1xuICAgICAgICAgICAgICB0aW1lICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXRzXG4gICAgICAgICAgICAgID8uZ2V0KGlkKVxuICAgICAgICAgICAgICA/LnNlbmQoW2V2ZW50LnR5cGUgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eV0sIHRpbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgLy8gY29uc29sZS5sb2coJ1tTQ0hFRFVMRURdJywgc2NoZWR1bGVkLm1hcChlID0+IFtlLnRpY2tzLCBlLm1pbGxpc10pKTtcbiAgcmV0dXJuIHsgbWlsbGlzLCBpbmRleCwgc2NoZWR1bGVkIH07XG59O1xuIiwiaW1wb3J0IHsgZmV0Y2hBcnJheWJ1ZmZlciB9IGZyb20gXCIuL2ZldGNoX2hlbHBlcnNcIjtcbmltcG9ydCB7IHBhcnNlTWlkaUZpbGUgfSBmcm9tIFwiLi9wYXJzZV9taWRpX2JpbmFyeVwiO1xuaW1wb3J0IHsgU29uZywgVHJhY2sgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlTm90ZXMgfSBmcm9tIFwiLi9jcmVhdGVfbm90ZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNvbmdGcm9tTUlESUZpbGUgPSBhc3luYyAoYXJnOiBzdHJpbmcgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8U29uZz4gPT4ge1xuICBsZXQgYWI6IEFycmF5QnVmZmVyO1xuICBpZiAodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFiID0gYXdhaXQgZmV0Y2hBcnJheWJ1ZmZlcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIGFiID0gYXJnO1xuICB9XG4gIC8vIGNvbnN0IHsgaGVhZGVyLCB0aW1lVHJhY2ssIHRyYWNrcyB9ID0gcGFyc2VNaWRpRmlsZShhYik7XG4gIGNvbnN0IHsgcHBxLCBpbml0aWFsVGVtcG8sIGluaXRpYWxOdW1lcmF0b3IsIGluaXRpYWxEZW5vbWluYXRvciwgZXZlbnRzLCB0cmFja3MgfSA9IHBhcnNlTWlkaUZpbGUoXG4gICAgYWJcbiAgKTtcblxuICBjb25zdCBzb25nOiBTb25nID0ge1xuICAgIHBwcSxcbiAgICBsYXRlbmN5OiAxNywgLy8gdmFsdWUgaW4gbWlsbGlzZWNvbmRzIC0+IHRoZSBsZW5ndGggb2YgYSBzaW5nbGUgZnJhbWUgQCA2MEh6IHJlZnJlc2ggcmF0ZVxuICAgIGJ1ZmZlclRpbWU6IDEwMCwgLy8gdmFsdWUgaW4gbWlsbGlzZWNvbmRzXG4gICAgdHJhY2tzLFxuICAgIHRyYWNrc0J5SWQ6IHRyYWNrcy5yZWR1Y2UoKGFjYzogeyBbaWQ6IHN0cmluZ106IFRyYWNrIH0sIHZhbHVlKSA9PiB7XG4gICAgICBhY2NbdmFsdWUuaWRdID0gdmFsdWU7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KSxcbiAgICBldmVudHMsXG4gICAgbm90ZXM6IGNyZWF0ZU5vdGVzKGV2ZW50cyksXG4gICAgaW5pdGlhbFRlbXBvLFxuICAgIG51bWVyYXRvcjogaW5pdGlhbE51bWVyYXRvcixcbiAgICBkZW5vbWluYXRvcjogaW5pdGlhbERlbm9taW5hdG9yLFxuICAgIC8vIHRpbWVUcmFjayxcbiAgICAvLyB0cmFja3M6IHRyYWNrcy5tYXAodHJhY2sgPT4gKHsgZXZlbnRzOiBbLi4udHJhY2tdIH0pKSxcbiAgfTtcbiAgcmV0dXJuIHNvbmc7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0VHJhY2tPdXRwdXQgPSAoeyB0cmFjaywgb3V0cHV0IH06IHsgdHJhY2s6IFRyYWNrOyBvdXRwdXQ6IHN0cmluZyB9KSA9PiB7XG4gIHRyYWNrLm91dHB1dHMucHVzaChvdXRwdXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYWNrID0gKGlkOiBzdHJpbmcpOiBUcmFjayA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgbGF0ZW5jeTogMCxcbiAgICBpbnB1dHM6IFtdLFxuICAgIG91dHB1dHM6IFtdLFxuICB9O1xufTtcbiIsIi8vIGltcG9ydCBcImp6elwiO1xuaW1wb3J0IHsgc2NoZWR1bGUsIGdldEN1cnJlbnRFdmVudEluZGV4IH0gZnJvbSBcIi4uLy4uL3NyYy9zY2hlZHVsZXJcIjtcbmltcG9ydCB7IGdldE1JRElBY2Nlc3MsIGdldE1JRElEZXZpY2VzIH0gZnJvbSBcIi4uLy4uL3NyYy9pbml0LW1pZGlcIjtcbmltcG9ydCB7IFNvbmcgfSBmcm9tIFwiLi4vLi4vc3JjL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVTb25nRnJvbU1JRElGaWxlIH0gZnJvbSBcIi4uLy4uL3NyYy9zdWdhcl9jb2F0aW5nXCI7XG5cbmNvbnN0IHVybCA9IFwiLi9hc3NldHMvbWludXRlX3dhbHR6Lm1pZFwiO1xuLy8gY29uc3QgdXJsID0gJy4vYXNzZXRzL21vems1NDVhLm1pZCc7XG4vLyBjb25zdCB1cmwgPSAnLi9hc3NldHMvbW96azU0NWFfbXVzZXNjb3JlLm1pZCc7XG5cbmNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1hID0gYXdhaXQgZ2V0TUlESUFjY2VzcygpO1xuICBjb25zdCBzb25nID0gYXdhaXQgY3JlYXRlU29uZ0Zyb21NSURJRmlsZShcIi4vYXNzZXRzL21pbnV0ZV93YWx0ei5taWRcIik7XG4gIGNvbnN0IHsgaW5wdXRzLCBvdXRwdXRzIH0gPSBhd2FpdCBnZXRNSURJRGV2aWNlcygpO1xuICBzb25nLnRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICB0cmFjay5vdXRwdXRzLnB1c2goLi4ub3V0cHV0cy5tYXAobyA9PiBvLmlkKSk7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhzb25nKTtcblxuICBsZXQgbWlsbGlzID0gMzAwMDtcbiAgbGV0IGluZGV4ID0gZ2V0Q3VycmVudEV2ZW50SW5kZXgoc29uZywgbWlsbGlzKTtcbiAgLy8gY29uc29sZS5sb2coJ1NUQVJUIElOREVYJywgaW5kZXgpO1xuICBsZXQgc3RhcnQ6IG51bWJlciA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBjb25zdCBwbGF5ID0gKGE6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRzID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgLy8gY29uc29sZS5sb2codHMsIGEpO1xuICAgIC8vIGNvbnN0IHByb2dyZXNzID0gdHMgLSBhO1xuICAgIGNvbnN0IHByb2dyZXNzID0gdHMgLSBzdGFydDtcbiAgICBzdGFydCA9IHRzO1xuICAgIC8vIGNvbnN0IHByb2dyZXNzID0gYSAtIHN0YXJ0O1xuICAgIC8vIHN0YXJ0ID0gYTtcbiAgICBpZiAobWlsbGlzIDwgMTAwMDApIHtcbiAgICAgICh7IGluZGV4LCBtaWxsaXMgfSA9IHNjaGVkdWxlKHtcbiAgICAgICAgc29uZyxcbiAgICAgICAgbWlsbGlzLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgb3V0cHV0czogbWE/Lm91dHB1dHMsXG4gICAgICB9KSk7XG4gICAgICBtaWxsaXMgKz0gcHJvZ3Jlc3M7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCwgbWlsbGlzKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhID0+IHtcbiAgICAgICAgcGxheShhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgcGxheShzdGFydCk7XG59O1xuXG5pbml0KCk7XG5cbi8vIGZldGNoKHVybClcbi8vICAgLnRoZW4oYXJyYXlCdWZmZXIpXG4vLyAgIC50aGVuKGFiID0+IHtcbi8vICAgICBjb25zdCB7IGhlYWRlciwgdHJhY2tzIH0gPSBwYXJzZU1pZGlGaWxlKGFiKTtcbi8vICAgICBjb25zb2xlLmxvZyh0cmFja3MpO1xuLy8gICB9KTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXSwic291cmNlUm9vdCI6IiJ9
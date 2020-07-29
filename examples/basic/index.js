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
var url = "../../assets/minute_waltz.mid";
// const url = '/assets/mozk545a.mid';
// const url = '/assets/mozk545a_musescore.mid';
var init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var ma, song, _a, inputs, outputs, millis, index, start, play;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, init_midi_1.getMIDIAccess()];
            case 1:
                ma = _b.sent();
                return [4 /*yield*/, sugar_coating_1.createSongFromMIDIFile(url)];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9idWZmZXJyZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jYWxjdWxhdGVNaWxsaXMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVfbm90ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9mZXRjaF9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uLi9zcmMvaW5pdC1taWRpLnRzIiwid2VicGFjazovLy8uLi9zcmMvbWlkaV91dGlscy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlX21pZGlfYmluYXJ5LnRzIiwid2VicGFjazovLy8uLi9zcmMvc2NoZWR1bGVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvc3VnYXJfY29hdGluZy50cyIsIndlYnBhY2s6Ly8vLi9iYXNpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVIiwiZmlsZSI6ImJhc2ljL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iYXNpYy9pbmRleC50c1wiKTtcbiIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDE5IEhhbMOhc3ogw4Fkw6FtIDxtYWlsQGFkYW1oYWxhc3ouY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHByb2Nlc3MgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicpe1xuICAgIHZhciBtYWMgPSAnJywgbmV0d29ya0ludGVyZmFjZXMgPSByZXF1aXJlKCdvcycpLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsIi8vIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9wcmF2ZG9taWwvamFzbWlkLnRzXG5cbmV4cG9ydCBjbGFzcyBCdWZmZXJSZWFkZXIge1xuICBwcml2YXRlIHBvc2l0aW9uOiBudW1iZXI7XG4gIHByaXZhdGUgZGF0YTogRGF0YVZpZXc7XG5cbiAgY29uc3RydWN0b3IoYnVmZmVyOiBBcnJheUJ1ZmZlckxpa2UpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICB0aGlzLmRhdGEgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgfVxuXG4gIHJlYWQobGVuZ3RoOiBudW1iZXIpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5idWZmZXIuc2xpY2UodGhpcy5wb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiArIGxlbmd0aCk7XG4gICAgdGhpcy5wb3NpdGlvbiArPSBsZW5ndGg7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaW50OCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRJbnQ4KHRoaXMucG9zaXRpb24pO1xuICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICB1aW50OCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50OCh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDE2KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmdldFVpbnQxNih0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDI7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDMyKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmdldFVpbnQzMih0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDQ7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RyaW5nKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcihcImFzY2lpXCIpLmRlY29kZSh0aGlzLnJlYWQobGVuZ3RoKSk7XG4gIH1cblxuICBlb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPj0gdGhpcy5kYXRhLmJ5dGVMZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBhIE1JREktc3R5bGUgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuXG4gICAqIChiaWctZW5kaWFuIHZhbHVlIGluIGdyb3VwcyBvZiA3IGJpdHMsIHdpdGggdG9wIGJpdCBzZXQgdG8gc2lnbmlmeSB0aGF0IGFub3RoZXIgYnl0ZSBmb2xsb3dzKVxuICAgKi9cbiAgbWlkaUludCgpIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnVpbnQ4KCk7XG4gICAgICBpZiAodmFsdWUgJiAwYjEwMDAwMDAwKSB7XG4gICAgICAgIHJlc3VsdCArPSB2YWx1ZSAmIDBiMTExMTExMTtcbiAgICAgICAgcmVzdWx0IDw8PSA3O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1pZGlDaHVuaygpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuc3RyaW5nKDQpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMudWludDMyKCk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVhZChsZW5ndGgpO1xuICAgIHJldHVybiB7IGlkLCBsZW5ndGgsIGRhdGEgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTUlESUV2ZW50LCBUZW1wb0V2ZW50IH0gZnJvbSBcIi4vbWlkaV9ldmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZU1pbGxpcyA9IChcbiAgZXZlbnRzOiBNSURJRXZlbnRbXSxcbiAgZGF0YToge1xuICAgIHBwcTogbnVtYmVyO1xuICAgIGJwbT86IG51bWJlcjtcbiAgICBwbGF5YmFja1NwZWVkPzogbnVtYmVyO1xuICB9XG4pOiBNSURJRXZlbnRbXSA9PiB7XG4gIGxldCB7IHBwcSwgYnBtID0gLTEsIHBsYXliYWNrU3BlZWQgPSAxIH0gPSBkYXRhO1xuICBsZXQgbWlsbGlzUGVyVGljayA9IGJwbSA9PT0gLTEgPyAwIDogKCgoMSAvIHBsYXliYWNrU3BlZWQpICogNjApIC8gYnBtIC8gcHBxKSAqIDEwMDA7XG4gIGxldCB0aWNrcyA9IDA7XG4gIGxldCBtaWxsaXMgPSAwO1xuICAvLyBjb25zb2xlLmxvZyhcImJwbVwiLCBicG0sIG1pbGxpcyk7XG4gIHJldHVybiBldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICBpZiAoKGV2ZW50IGFzIFRlbXBvRXZlbnQpLmJwbSkge1xuICAgICAgKHsgYnBtIH0gPSBldmVudCBhcyBUZW1wb0V2ZW50KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYnBtXCIsIGJwbSwgbWlsbGlzKTtcbiAgICAgIG1pbGxpc1BlclRpY2sgPSAoKCgxIC8gcGxheWJhY2tTcGVlZCkgKiA2MCkgLyBicG0gLyBwcHEpICogMTAwMDtcbiAgICB9XG4gICAgY29uc3QgZGlmZlRpY2tzID0gZXZlbnQudGlja3MgLSB0aWNrcztcbiAgICBtaWxsaXMgKz0gZGlmZlRpY2tzICogbWlsbGlzUGVyVGljaztcbiAgICBldmVudC5taWxsaXMgPSBtaWxsaXM7XG4gICAgdGlja3MgPSBldmVudC50aWNrcztcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IE1JRElFdmVudCwgTm90ZUV2ZW50LCBOb3RlT25FdmVudCB9IGZyb20gXCIuL21pZGlfZXZlbnRzXCI7XG5pbXBvcnQgeyBNSURJTm90ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBzb3J0TUlESUV2ZW50cyB9IGZyb20gXCIuL21pZGlfdXRpbHNcIjtcblxubGV0IGluZGV4ID0gMDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vdGVzID0gKGV2ZW50czogTUlESUV2ZW50W10pOiBNSURJTm90ZVtdID0+IHtcbiAgbGV0IGZpbHRlcmVkOiBOb3RlRXZlbnRbXSA9IGV2ZW50cy5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2codmFsLnR5cGUpO1xuICAgIGlmICh2YWwudHlwZSA9PT0gMHg4MCB8fCB2YWwudHlwZSA9PT0gMHg5MCkge1xuICAgICAgYWNjLnB1c2godmFsIGFzIE5vdGVFdmVudCk7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdIGFzIE5vdGVFdmVudFtdKTtcbiAgLy8gZmlsdGVyZWQgPSBzb3J0TUlESUV2ZW50cyhmaWx0ZXJlZCk7XG4gIGNvbnN0IG5vdGVzOiBNSURJTm90ZVtdID0gW107XG4gIGNvbnN0IHRtcDogeyBbaWQ6IHN0cmluZ106IE5vdGVFdmVudCB9ID0ge307XG4gIGZpbHRlcmVkLmZvckVhY2goZSA9PiB7XG4gICAgY29uc3QgaWQgPSBgJHtlLnRyYWNrSWR9LSR7ZS5ub3RlTnVtYmVyfWA7XG4gICAgLy8gY29uc29sZS5sb2coZS50aWNrcywgZS50eXBlLCBpZCk7XG4gICAgaWYgKGUudHlwZSA9PT0gMHg5MCkge1xuICAgICAgaWYgKHRtcFtpZF0pIHtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKGBub3RlIGV4aXN0ZWQgYWxyZWFkeSEgJHtpZH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcFtpZF0gPSBlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSAweDgwKSB7XG4gICAgICBpZiAoIXRtcFtpZF0pIHtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKGBub3RlIGRvZXNuJ3QgZXhpc3QhICR7aWR9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub3RlT24gPSB0bXBbaWRdO1xuICAgICAgICBjb25zdCBub3RlOiBNSURJTm90ZSA9IHtcbiAgICAgICAgICBpZDogYG5vdGUtJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0tJHtpbmRleCsrfWAsXG4gICAgICAgICAgbm90ZU9uOiBub3RlT24gYXMgTm90ZU9uRXZlbnQsXG4gICAgICAgICAgbm90ZU9mZjogZSxcbiAgICAgICAgICAvLyBkdXJhdGlvblRpY2tzOiBlLnRpY2tzIC0gbm90ZU9uLnRpY2tzLFxuICAgICAgICAgIC8vIGR1cmF0aW9uTWlsbGlzOiBlLm1pbGxpcyAtIG5vdGVPbi5taWxsaXMsXG4gICAgICAgICAgLy8gc3RhcnRUaWNrczogbm90ZU9uLnRpY2tzLFxuICAgICAgICAgIC8vIHN0YXJ0TWlsbGlzOiBub3RlT24ubWlsbGlzLFxuICAgICAgICAgIC8vIGVuZFRpY2tzOiBlLnRpY2tzLFxuICAgICAgICAgIC8vIGVuZE1pbGxpczogZS5taWxsaXMsXG4gICAgICAgIH07XG4gICAgICAgIG5vdGVzLnB1c2gobm90ZSk7XG4gICAgICAgIGRlbGV0ZSB0bXBbaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIC8vIGNvbnNvbGUubG9nKG5vdGVzKTtcbiAgcmV0dXJuIG5vdGVzO1xufTtcbiIsIi8vIGZldGNoIGhlbHBlcnNcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXR1cyhyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganNvbihyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPEpTT04+IHtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QnVmZmVyKHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEpTT04odXJsOiBzdHJpbmcpOiBQcm9taXNlPEpTT04+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBmZXRjaCh1cmwsIHtcbiAgICAvLyAgIG1vZGU6ICduby1jb3JzJ1xuICAgIC8vIH0pXG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4oc3RhdHVzKVxuICAgICAgLnRoZW4oanNvbilcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcnJheWJ1ZmZlcih1cmw6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgLy8gY29uc29sZS5sb2coJ2ZlY3RjaCBhYicsIHVybCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgcmVzcG9uc2VfMSA9IGF3YWl0IHN0YXR1cyhyZXNwb25zZSk7XG4gIHJldHVybiBhcnJheUJ1ZmZlcihyZXNwb25zZV8xKTtcbn1cbiIsImxldCBtaWRpQWNjZXNzOiBXZWJNaWRpLk1JRElBY2Nlc3MgfCBudWxsO1xuXG5leHBvcnQgY29uc3QgZ2V0TUlESUFjY2VzcyA9IGFzeW5jICgpOiBQcm9taXNlPFdlYk1pZGkuTUlESUFjY2VzcyB8IG51bGw+ID0+IHtcbiAgaWYgKG1pZGlBY2Nlc3MgIT09IG51bGwgJiYgdHlwZW9mIG1pZGlBY2Nlc3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1pZGlBY2Nlc3MpO1xuICB9XG5cbiAgaWYgKCFuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3MpIHtcbiAgICBtaWRpQWNjZXNzID0gbnVsbDtcbiAgICBjb25zb2xlLmxvZyhcIldlYk1JREkgbm90IHN1cHBvcnRlZFwiKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtYSA9IGF3YWl0IG5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2VzcygpO1xuICAgIC8vIG1pZGlBY2Nlc3Mub25zdGF0ZWNoYW5nZSA9IChlOiBXZWJNaWRpLk1JRElDb25uZWN0aW9uRXZlbnQpID0+IHtcbiAgICAvLyB9O1xuICAgIGlmICghbWEuaW5wdXRzIHx8ICFtYS5vdXRwdXRzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZpcmVmb3ggV2ViTUlESSBBUEkgc3VwcG9ydCBpcyBzdGlsbCBpbiBwcm9ncmVzc1wiKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBtaWRpQWNjZXNzID0gbWE7XG4gICAgcmV0dXJuIG1hO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJNSURJIGNvdWxkIG5vdCBiZSBpbml0aWFsaXplZDpcIiwgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNSURJRGV2aWNlcyA9IGFzeW5jICgpOiBQcm9taXNlPHtcbiAgaW5wdXRzOiBXZWJNaWRpLk1JRElJbnB1dFtdO1xuICBvdXRwdXRzOiBXZWJNaWRpLk1JRElPdXRwdXRbXTtcbn0+ID0+IHtcbiAgLy8gZXhwb3J0IGNvbnN0IGdldE1JRElEZXZpY2VzID0gKCk6IHsgaW5wdXRzOiBXZWJNaWRpLk1JRElJbnB1dFtdLCBvdXRwdXRzOiBXZWJNaWRpLk1JRElPdXRwdXRbXSB9ID0+IHtcbiAgY29uc3QgaW5wdXRzOiBXZWJNaWRpLk1JRElJbnB1dFtdID0gW107XG4gIGNvbnN0IG91dHB1dHM6IFdlYk1pZGkuTUlESU91dHB1dFtdID0gW107XG4gIGlmICh0eXBlb2YgbWlkaUFjY2VzcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1pZGlBY2Nlc3MgPSBhd2FpdCBnZXRNSURJQWNjZXNzKCk7XG4gICAgLy8gY29uc29sZS53YXJuKCdNSURJQWNjZXNzIG5vdCB5ZXQgaW5pdGlhbGl6ZWQsIHBsZWFzZSBjYWxsIGluaXRNSURJIGZpcnN0Jyk7XG4gIH0gZWxzZSBpZiAobWlkaUFjY2VzcyAhPT0gbnVsbCkge1xuICAgIG1pZGlBY2Nlc3MuaW5wdXRzLmZvckVhY2goaSA9PiB7XG4gICAgICBpbnB1dHMucHVzaChpKTtcbiAgICB9KTtcbiAgICBtaWRpQWNjZXNzLm91dHB1dHMuZm9yRWFjaChvID0+IHtcbiAgICAgIG91dHB1dHMucHVzaChvKTtcbiAgICB9KTtcbiAgfVxuICBjb25zb2xlLmxvZyhpbnB1dHMsIG91dHB1dHMpO1xuICByZXR1cm4geyBpbnB1dHMsIG91dHB1dHMgfTtcbn07XG4iLCJpbXBvcnQgeyBNSURJRXZlbnQsIFRlbXBvRXZlbnQsIFRpbWVTaWduYXR1cmVFdmVudCB9IGZyb20gXCIuL21pZGlfZXZlbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBTRVFVRU5DRV9OVU1CRVIgPSBcInNlcXVlbmNlIG51bWJlclwiO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSBcInRleHRcIjtcbmV4cG9ydCBjb25zdCBDT1BZUklHSFRfTk9USUNFID0gXCJjb3B5cmlnaHQgbm90aWNlXCI7XG5leHBvcnQgY29uc3QgVFJBQ0tfTkFNRSA9IFwidHJhY2sgbmFtZVwiO1xuZXhwb3J0IGNvbnN0IElOU1RSVU1FTlRfTkFNRSA9IFwiaW5zdHJ1bWVudCBuYW1lXCI7XG5leHBvcnQgY29uc3QgTFlSSUNTID0gXCJseXJpY3NcIjtcbmV4cG9ydCBjb25zdCBNQVJLRVIgPSBcIm1hcmtlclwiO1xuZXhwb3J0IGNvbnN0IENVRV9QT0lOVCA9IFwiY3VlIHBvaW50XCI7XG5leHBvcnQgY29uc3QgQ0hBTk5FTF9QUkVGSVggPSBcImNoYW5uZWwgcHJlZml4XCI7XG5leHBvcnQgY29uc3QgRU5EX09GX1RSQUNLID0gXCJlbmQgb2YgdHJhY2tcIjtcbmV4cG9ydCBjb25zdCBURU1QTyA9IFwidGVtcG9cIjtcbmV4cG9ydCBjb25zdCBTTVBURV9PRkZTRVQgPSBcInNtcHRlIG9mZnNldFwiO1xuZXhwb3J0IGNvbnN0IFRJTUVfU0lHTkFUVVJFID0gXCJ0aW1lIHNpZ25hdHVyZVwiO1xuZXhwb3J0IGNvbnN0IEtFWV9TSUdOQVRVUkUgPSBcImtleSBzaWduYXR1cmVcIjtcbmV4cG9ydCBjb25zdCBTRVFVRU5DRVJfU1BFQ0lGSUMgPSBcInNlcXVlbmNlciBzcGVjaWZpY1wiO1xuZXhwb3J0IGNvbnN0IFNZU1RFTV9FWENMVVNJVkUgPSBcInN5c3RlbSBleGNsdXNpdmVcIjtcbmV4cG9ydCBjb25zdCBESVZJREVEX1NZU1RFTV9FWENMVVNJVkUgPSBcImRpdmlkZWQgc3lzdGVtIGV4Y2x1c2l2ZVwiO1xuZXhwb3J0IGNvbnN0IE5PVEVfT04gPSBcIm5vdGUgb25cIjtcbmV4cG9ydCBjb25zdCBOT1RFX09GRiA9IFwibm90ZSBvZmZcIjtcbmV4cG9ydCBjb25zdCBOT1RFX0FGVEVSVE9VQ0ggPSBcIm5vdGUgYWZ0ZXJ0b3VjaFwiO1xuZXhwb3J0IGNvbnN0IENPTlRST0xMRVIgPSBcImNvbnRyb2xsZXJcIjtcbmV4cG9ydCBjb25zdCBQUk9HUkFNX0NIQU5HRSA9IFwicHJvZ3JhbSBjaGFuZ2VcIjtcbmV4cG9ydCBjb25zdCBDSEFOTkVMX0FGVEVSVE9VQ0ggPSBcImNoYW5uZWwgYWZ0ZXJ0b3VjaFwiO1xuZXhwb3J0IGNvbnN0IFBJVENIX0JFTkQgPSBcInBpdGNoIGJlbmRcIjtcblxuY29uc3QgZGVzY3JpcHRpb25zOiB7IFtpbmRleDogbnVtYmVyXTogeyBbaW5kZXg6IG51bWJlcl06IHN0cmluZyB9IHwgc3RyaW5nIH0gPSB7XG4gIDB4ZmY6IHtcbiAgICAweDAwOiBcInNlcXVlbmNlIG51bWJlclwiLFxuICAgIDB4MDE6IFwidGV4dFwiLFxuICAgIDB4MDI6IFwiY29weXJpZ2h0IG5vdGljZVwiLFxuICAgIDB4MDM6IFwidHJhY2sgbmFtZVwiLFxuICAgIDB4MDQ6IFwiaW5zdHJ1bWVudCBuYW1lXCIsXG4gICAgMHgwNTogXCJseXJpY3NcIixcbiAgICAweDA2OiBcIm1hcmtlclwiLFxuICAgIDB4MDc6IFwiY3VlIHBvaW50XCIsXG4gICAgMHgyMDogXCJjaGFubmVsIHByZWZpeFwiLFxuICAgIDB4MmY6IFwiZW5kIG9mIHRyYWNrXCIsXG4gICAgMHg1MTogXCJ0ZW1wb1wiLFxuICAgIDB4NTQ6IFwic21wdGUgb2Zmc2V0XCIsXG4gICAgMHg1ODogXCJ0aW1lIHNpZ25hdHVyZVwiLFxuICAgIDB4NTk6IFwia2V5IHNpZ25hdHVyZVwiLFxuICAgIDB4N2Y6IFwic2VxdWVuY2VyIHNwZWNpZmljXCIsXG4gIH0sXG4gIDB4ZjA6IFwic3lzdGVtIGV4Y2x1c2l2ZVwiLFxuICAweGY3OiBcImRpdmlkZWQgc3lzZXhcIixcbiAgMHg4MDogXCJub3RlIG9uXCIsXG4gIDB4OTA6IFwibm90ZSBvZmZcIixcbiAgMHhhMDogXCJub3RlIGFmdGVydG91Y2hcIixcbiAgMHhiMDogXCJjb250cm9sbGVyXCIsXG4gIDB4YzA6IFwicHJvZ3JhbSBjaGFuZ2VcIixcbiAgMHhkMDogXCJjaGFubmVsIGFmdGVydG91Y2hcIixcbiAgMHhlMDogXCJwaXRjaCBiZW5kXCIsXG59O1xuXG5leHBvcnQgY29uc3Qgbm90ZU5hbWVzID0ge1xuICBzaGFycDogW1wiQ1wiLCBcIkMjXCIsIFwiRFwiLCBcIkQjXCIsIFwiRVwiLCBcIkZcIiwgXCJGI1wiLCBcIkdcIiwgXCJHI1wiLCBcIkFcIiwgXCJBI1wiLCBcIkJcIl0sXG4gIGZsYXQ6IFtcIkNcIiwgXCJEYlwiLCBcIkRcIiwgXCJFYlwiLCBcIkVcIiwgXCJGXCIsIFwiR2JcIiwgXCJHXCIsIFwiQWJcIiwgXCJBXCIsIFwiQmJcIiwgXCJCXCJdLFxuICBcImVuaGFybW9uaWMtc2hhcnBcIjogW1wiQiNcIiwgXCJDI1wiLCBcIkMjI1wiLCBcIkQjXCIsIFwiRCMjXCIsIFwiRSNcIiwgXCJGI1wiLCBcIkYjI1wiLCBcIkcjXCIsIFwiRyMjXCIsIFwiQSNcIiwgXCJBIyNcIl0sXG4gIFwiZW5oYXJtb25pYy1mbGF0XCI6IFtcIkRiYlwiLCBcIkRiXCIsIFwiRWJiXCIsIFwiRWJcIiwgXCJGYlwiLCBcIkdiYlwiLCBcIkdiXCIsIFwiQWJiXCIsIFwiQWJcIiwgXCJCYmJcIiwgXCJCYlwiLCBcIkNiXCJdLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldE1pZGlFdmVudERlc2NyaXB0aW9uID0gKHR5cGU6IG51bWJlciwgc3ViVHlwZT86IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGlmICh0eXBlb2Ygc3ViVHlwZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbnNbdHlwZV0gYXMgc3RyaW5nO1xuICB9XG4gIHJldHVybiBkZXNjcmlwdGlvbnNbdHlwZV1bc3ViVHlwZV0gfHwgXCJ1bmRlZmluZWRcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNaWRpTWVzc2FnZUV2ZW50ID0gKGV2ZW50OiBNSURJRXZlbnQpOiBudW1iZXJbXSA9PiB7XG4gIHN3aXRjaCAoZXZlbnQuZGVzY3IpIHtcbiAgICBjYXNlIE5PVEVfT046XG4gICAgICByZXR1cm4gWzB4OTAgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eV07XG4gICAgY2FzZSBOT1RFX09GRjpcbiAgICAgIHJldHVybiBbMHg4MCArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5XTtcbiAgfVxuICByZXR1cm4gWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5vdGVOdW1iZXIgPSAobmFtZTogc3RyaW5nLCBvY3RhdmU6IG51bWJlciwgbW9kZTogc3RyaW5nID0gXCJzaGFycFwiKTogbnVtYmVyID0+IHtcbiAgLy8gbGV0IGluZGV4ID0gLTE7XG4gIC8vIGNvbnN0IG1vZGVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobm90ZU5hbWVzKTtcbiAgLy8gZm9yIChsZXQgaSA9IDAsIG1heGkgPSBtb2Rlcy5sZW5ndGg7IGkgPCBtYXhpOyBpKyspIHtcbiAgLy8gICBjb25zdCBuYW1lcyA9IG1vZGVzW2ldO1xuICAvLyAgIGZvciAobGV0IGogPSAwLCBtYXhqID0gbmFtZXMubGVuZ3RoOyBqIDwgbWF4ajsgaisrKSB7XG4gIC8vICAgICBpZiAobW9kZVtqXSA9PT0gbmFtZSkge1xuICAvLyAgICAgICBpbmRleCA9IGk7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuICBsZXQgaW5kZXggPSAtMTtcbiAgY29uc3QgbW9kZXMgPSBPYmplY3QudmFsdWVzKG5vdGVOYW1lcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuYW1lcyA9IG1vZGVzW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWVzW2pdLCBuYW1lKTtcbiAgICAgIGlmIChuYW1lc1tqXSA9PT0gbmFtZSkge1xuICAgICAgICBpbmRleCA9IGo7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyhuYW1lLCBvY3RhdmUsIGluZGV4KTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8vbnVtYmVyID0gKGluZGV4ICsgMTIpICsgKG9jdGF2ZSAqIDEyKSArIDEyOyAvLyDihpIgaW4gQ3ViYXNlIGNlbnRyYWwgQyA9IEMzIGluc3RlYWQgb2YgQzRcbiAgcmV0dXJuIGluZGV4ICsgMTIgKyBvY3RhdmUgKiAxMjsgLy8g4oaSIG1pZGkgc3RhbmRhcmQgKyBzY2llbnRpZmljIG5hbWluZywgc2VlOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01pZGRsZV9DIGFuZCBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NjaWVudGlmaWNfcGl0Y2hfbm90YXRpb25cbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0TUlESUV2ZW50cyA9IChldmVudHM6IE1JRElFdmVudFtdKTogTUlESUV2ZW50W10gPT5cbiAgZXZlbnRzLnNvcnQoKGE6IE1JRElFdmVudCwgYjogTUlESUV2ZW50KSA9PiB7XG4gICAgaWYgKGEudGlja3MgPCBiLnRpY2tzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChhLnRpY2tzID4gYi50aWNrcykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgICAvLyB9IGVsc2UgaWYgKGEudHlwZSA9PT0gMHg4MCAmJiBiLnR5cGUgPT09IDB4OTApIHtcbiAgICAgIC8vICAgLy8gbm90ZSBvZmYgYmVmb3JlIG5vdGUgb25cbiAgICAgIC8vICAgcmV0dXJuIC0xO1xuICAgICAgLy8gfSBlbHNlIGlmIChhLnR5cGUgPT09IDB4NTEgfHwgYS50eXBlID09PSAweDU4KSB7XG4gICAgICAvLyAgIC8vIHRlbXBvIGFuZCB0aW1lIHNpZ25hdHVyZSBldmVudHMgZmlyc3RcbiAgICAgIC8vICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVEb3VibGVFdmVudHMgPSAoZXZlbnRzOiBNSURJRXZlbnRbXSk6IE1JRElFdmVudFtdID0+IHtcbiAgLy8gdmFyIGksIG1heGkgPSBldmVudHMubGVuZ3RoLFxuICAvLyAgIGV2ZW50LCBldmVudElkLCBsYXN0SWQsXG4gIC8vICAgcmVzdWx0ID0gW107XG5cbiAgLy8gZXZlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgLy8gICByZXR1cm4gYS5ldmVudE51bWJlciAtIGIuZXZlbnROdW1iZXI7XG4gIC8vIH0pO1xuXG4gIC8vIGZvciAoaSA9IDA7IGkgPCBtYXhpOyBpKyspIHtcbiAgLy8gICBldmVudCA9IGV2ZW50c1tpXTtcbiAgLy8gICBldmVudElkID0gZXZlbnQuaWQ7XG4gIC8vICAgaWYgKGV2ZW50SWQgIT09IGxhc3RJZCkge1xuICAvLyAgICAgcmVzdWx0LnB1c2goZXZlbnQpO1xuICAvLyAgIH1cbiAgLy8gICBsYXN0SWQgPSBldmVudElkO1xuICAvLyB9XG4gIC8vIHJldHVybiByZXN1bHQ7XG4gIHJldHVybiBbXTtcbn07XG4iLCIvLyBiYXNlZCBvbjogaHR0cHM6Ly9naXRodWIuY29tL3ByYXZkb21pbC9qYXNtaWQudHNcblxuLy8gaW1wb3J0IHsgQnVmZmVyUmVhZGVyIH0gZnJvbSAnamFzbWlkLnRzJztcbmltcG9ydCB1bmlxdWlkIGZyb20gXCJ1bmlxaWRcIjtcbmltcG9ydCB7IEJ1ZmZlclJlYWRlciB9IGZyb20gXCIuL2J1ZmZlcnJlYWRlclwiO1xuaW1wb3J0IHsgTUlESUV2ZW50IH0gZnJvbSBcIi4vbWlkaV9ldmVudHNcIjtcbmltcG9ydCB7XG4gIFNFUVVFTkNFX05VTUJFUixcbiAgVEVYVCxcbiAgQ09QWVJJR0hUX05PVElDRSxcbiAgVFJBQ0tfTkFNRSxcbiAgSU5TVFJVTUVOVF9OQU1FLFxuICBMWVJJQ1MsXG4gIE1BUktFUixcbiAgQ1VFX1BPSU5ULFxuICBDSEFOTkVMX1BSRUZJWCxcbiAgRU5EX09GX1RSQUNLLFxuICBURU1QTyxcbiAgU01QVEVfT0ZGU0VULFxuICBUSU1FX1NJR05BVFVSRSxcbiAgS0VZX1NJR05BVFVSRSxcbiAgU0VRVUVOQ0VSX1NQRUNJRklDLFxuICBTWVNURU1fRVhDTFVTSVZFLFxuICBESVZJREVEX1NZU1RFTV9FWENMVVNJVkUsXG4gIE5PVEVfT04sXG4gIE5PVEVfT0ZGLFxuICBOT1RFX0FGVEVSVE9VQ0gsXG4gIENPTlRST0xMRVIsXG4gIFBST0dSQU1fQ0hBTkdFLFxuICBDSEFOTkVMX0FGVEVSVE9VQ0gsXG4gIFBJVENIX0JFTkQsXG4gIHNvcnRNSURJRXZlbnRzLFxufSBmcm9tIFwiLi9taWRpX3V0aWxzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVNaWxsaXMgfSBmcm9tIFwiLi9jYWxjdWxhdGVNaWxsaXNcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZVRyYWNrIH0gZnJvbSBcIi4vc3VnYXJfY29hdGluZ1wiO1xuXG5jb25zdCBwbGF5YmFja1NwZWVkID0gMTtcblxuZXhwb3J0IHR5cGUgUGFyc2VkRGF0YSA9IHtcbiAgZXZlbnQ6IGFueTtcbiAgZGVsdGFUaW1lOiBudW1iZXI7XG4gIGJwbT86IG51bWJlcjtcbiAgbnVtZXJhdG9yPzogbnVtYmVyO1xuICBkZW5vbWluYXRvcj86IG51bWJlcjtcbiAgdHJhY2tOYW1lPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgUGFyc2VkTUlESUZpbGUgPSB7XG4gIC8vIGhlYWRlcjoge1xuICAvLyAgIGZvcm1hdFR5cGU6IG51bWJlcjtcbiAgLy8gICB0cmFja0NvdW50OiBudW1iZXI7XG4gIC8vICAgdGlja3NQZXJCZWF0OiBudW1iZXI7XG4gIC8vIH07XG4gIHBwcTogbnVtYmVyO1xuICBpbml0aWFsVGVtcG86IG51bWJlcjtcbiAgaW5pdGlhbE51bWVyYXRvcjogbnVtYmVyO1xuICBpbml0aWFsRGVub21pbmF0b3I6IG51bWJlcjtcbiAgdHJhY2tzOiBUcmFja1tdO1xuICBldmVudHM6IE1JRElFdmVudFtdO1xuICAvLyB0cmFja3M6IE1JRElFdmVudFtdW11cbiAgLy8gdGltZVRyYWNrOiBNSURJRXZlbnRbXVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWlkaUZpbGUoYnVmZmVyOiBBcnJheUJ1ZmZlckxpa2UpOiBQYXJzZWRNSURJRmlsZSB7XG4gIGNvbnN0IHJlYWRlciA9IG5ldyBCdWZmZXJSZWFkZXIoYnVmZmVyKTtcblxuICBjb25zdCBoZWFkZXIgPSBwYXJzZUhlYWRlcihyZWFkZXIpO1xuICAvLyBjb25zdCB7IHRpbWVUcmFjaywgdHJhY2tzIH0gPSBwYXJzZVRyYWNrcyhyZWFkZXIsIGhlYWRlci50aWNrc1BlckJlYXQpXG4gIGNvbnN0IHsgdHJhY2tzLCBldmVudHMsIGluaXRpYWxUZW1wbywgaW5pdGlhbE51bWVyYXRvciwgaW5pdGlhbERlbm9taW5hdG9yIH0gPSBwYXJzZVRyYWNrcyhcbiAgICByZWFkZXIsXG4gICAgaGVhZGVyLnRpY2tzUGVyQmVhdFxuICApO1xuXG4gIC8vIHJldHVybiB7IGhlYWRlciwgdGltZVRyYWNrLCB0cmFja3MgfVxuICByZXR1cm4ge1xuICAgIHBwcTogaGVhZGVyLnRpY2tzUGVyQmVhdCxcbiAgICB0cmFja3MsXG4gICAgaW5pdGlhbFRlbXBvLFxuICAgIGluaXRpYWxOdW1lcmF0b3IsXG4gICAgaW5pdGlhbERlbm9taW5hdG9yLFxuICAgIGV2ZW50czogY2FsY3VsYXRlTWlsbGlzKGV2ZW50cywge1xuICAgICAgcHBxOiBoZWFkZXIudGlja3NQZXJCZWF0LFxuICAgICAgYnBtOiBpbml0aWFsVGVtcG8sXG4gICAgfSksXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHJlYWRlcjogQnVmZmVyUmVhZGVyKSB7XG4gIGNvbnN0IGhlYWRlckNodW5rID0gcmVhZGVyLm1pZGlDaHVuaygpO1xuICBpZiAoaGVhZGVyQ2h1bmsuaWQgIT09IFwiTVRoZFwiIHx8IGhlYWRlckNodW5rLmxlbmd0aCAhPT0gNikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkJhZCAubWlkIGZpbGUsIGhlYWRlciBub3QgZm91bmRcIik7XG4gIH1cblxuICBjb25zdCBoZWFkZXJSZWFkZXIgPSBuZXcgQnVmZmVyUmVhZGVyKGhlYWRlckNodW5rLmRhdGEpO1xuICBjb25zdCBmb3JtYXRUeXBlID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICBjb25zdCB0cmFja0NvdW50ID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICBjb25zdCB0aW1lRGl2aXNpb24gPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGlmICh0aW1lRGl2aXNpb24gJiAweDgwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHByZXNzaW5nIHRpbWUgZGl2aXNpb24gaW4gU01UUEUgZnJhbWVzIGlzIG5vdCBzdXBwb3J0ZWQgeWV0XCIpO1xuICB9XG4gIGNvbnN0IHRpY2tzUGVyQmVhdCA9IHRpbWVEaXZpc2lvbjtcblxuICByZXR1cm4geyBmb3JtYXRUeXBlLCB0cmFja0NvdW50LCB0aWNrc1BlckJlYXQgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUcmFja3MoXG4gIHJlYWRlcjogQnVmZmVyUmVhZGVyLFxuICBwcHE6IG51bWJlclxuKToge1xuICB0cmFja3M6IFRyYWNrW107XG4gIGV2ZW50czogTUlESUV2ZW50W107XG4gIGluaXRpYWxUZW1wbzogbnVtYmVyO1xuICBpbml0aWFsTnVtZXJhdG9yOiBudW1iZXI7XG4gIGluaXRpYWxEZW5vbWluYXRvcjogbnVtYmVyO1xufSB7XG4gIGxldCBpbml0aWFsVGVtcG8gPSAtMTtcbiAgbGV0IGluaXRpYWxOdW1lcmF0b3IgPSAtMTtcbiAgbGV0IGluaXRpYWxEZW5vbWluYXRvciA9IC0xO1xuICBjb25zdCB0cmFja3M6IFRyYWNrW10gPSBbXTtcbiAgY29uc3QgZXZlbnRzOiBNSURJRXZlbnRbXSA9IFtdO1xuICB3aGlsZSAoIXJlYWRlci5lb2YoKSkge1xuICAgIGNvbnN0IHRyYWNrQ2h1bmsgPSByZWFkZXIubWlkaUNodW5rKCk7XG5cbiAgICBpZiAodHJhY2tDaHVuay5pZCAhPT0gXCJNVHJrXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBjaHVuaywgZXhwZWN0ZWQgTVRyaywgZ290ICR7dHJhY2tDaHVuay5pZH1gKTtcbiAgICB9XG4gICAgY29uc3QgdHJhY2tJZCA9IGBULSR7dW5pcXVpZCgpfWA7XG4gICAgY29uc3QgdHJhY2sgPSBjcmVhdGVUcmFjayh0cmFja0lkKTtcbiAgICBjb25zdCB0cmFja1RyYWNrID0gbmV3IEJ1ZmZlclJlYWRlcih0cmFja0NodW5rLmRhdGEpO1xuICAgIGxldCB0aWNrcyA9IDA7XG4gICAgbGV0IGxhc3RUeXBlQnl0ZSA9IG51bGw7XG4gICAgd2hpbGUgKCF0cmFja1RyYWNrLmVvZigpKSB7XG4gICAgICBsZXQgZGF0YSA9IHBhcnNlRXZlbnQodHJhY2tUcmFjaywgbGFzdFR5cGVCeXRlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgY29uc3QgeyBldmVudCwgZGVsdGFUaW1lLCBicG0sIG51bWVyYXRvciwgZGVub21pbmF0b3IsIHRyYWNrTmFtZSB9ID0gZGF0YTtcbiAgICAgIGlmIChicG0gJiYgaW5pdGlhbFRlbXBvID09PSAtMSkge1xuICAgICAgICBpbml0aWFsVGVtcG8gPSBicG07XG4gICAgICB9XG4gICAgICBpZiAobnVtZXJhdG9yICYmIGluaXRpYWxOdW1lcmF0b3IgPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxOdW1lcmF0b3IgPSBudW1lcmF0b3I7XG4gICAgICB9XG4gICAgICBpZiAoZGVub21pbmF0b3IgJiYgaW5pdGlhbERlbm9taW5hdG9yID09PSAtMSkge1xuICAgICAgICBpbml0aWFsRGVub21pbmF0b3IgPSBkZW5vbWluYXRvcjtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFja05hbWUpIHtcbiAgICAgICAgdHJhY2submFtZSA9IHRyYWNrTmFtZTtcbiAgICAgIH1cbiAgICAgIHRpY2tzICs9IGRlbHRhVGltZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdUSUNLUycsIHRpY2tzLCBicG0sIG51bWVyYXRvcik7XG4gICAgICBsYXN0VHlwZUJ5dGUgPSBldmVudC50eXBlO1xuICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgdHJhY2tJZCxcbiAgICAgICAgdGlja3MsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdHJhY2tzLnB1c2godHJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBldmVudHM6IHNvcnRNSURJRXZlbnRzKGV2ZW50cyksXG4gICAgdHJhY2tzLFxuICAgIGluaXRpYWxUZW1wbyxcbiAgICBpbml0aWFsTnVtZXJhdG9yLFxuICAgIGluaXRpYWxEZW5vbWluYXRvcixcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFdmVudChyZWFkZXI6IEJ1ZmZlclJlYWRlciwgbGFzdFR5cGVCeXRlOiBudW1iZXIgfCBudWxsKTogUGFyc2VkRGF0YSB7XG4gIGNvbnN0IGRlbHRhVGltZSA9IHJlYWRlci5taWRpSW50KCk7XG4gIGxldCB0eXBlQnl0ZSA9IHJlYWRlci51aW50OCgpO1xuXG4gIC8vIG1ldGEgZXZlbnRzOiAweGZmXG4gIC8vIHN5c3RlbSBldmVudHM6IDB4ZjAsIDB4ZjdcbiAgLy8gbWlkaSBldmVudHM6IGFsbCBvdGhlciBieXRlc1xuXG4gIGlmICh0eXBlQnl0ZSA9PT0gMHhmZikge1xuICAgIGNvbnN0IHN1YlR5cGVCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgY29uc3QgbGVuZ3RoID0gcmVhZGVyLm1pZGlJbnQoKTtcblxuICAgIHN3aXRjaCAoc3ViVHlwZUJ5dGUpIHtcbiAgICAgIC8vIHNlcXVlbmNlIG51bWJlclxuICAgICAgY2FzZSAweDAwOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHNlcXVlbmNlTnVtYmVyIGV2ZW50IGlzIDIsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFNFUVVFTkNFX05VTUJFUixcbiAgICAgICAgICAgIG51bWJlcjogcmVhZGVyLnVpbnQxNigpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGV4dFxuICAgICAgY2FzZSAweDAxOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRFWFQsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjb3B5cmlnaHRcbiAgICAgIGNhc2UgMHgwMjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBDT1BZUklHSFRfTk9USUNFLFxuICAgICAgICAgICAgdGV4dDogcmVhZGVyLnN0cmluZyhsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdHJhY2sgbmFtZVxuICAgICAgY2FzZSAweDAzOlxuICAgICAgICBjb25zdCB0cmFja05hbWUgPSByZWFkZXIuc3RyaW5nKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogVFJBQ0tfTkFNRSxcbiAgICAgICAgICAgIHRleHQ6IHRyYWNrTmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgICB0cmFja05hbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBpbnN0cnVtZW50IG5hbWVcbiAgICAgIGNhc2UgMHgwNDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBJTlNUUlVNRU5UX05BTUUsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBseXJpY3NcbiAgICAgIGNhc2UgMHgwNTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBMWVJJQ1MsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBtYXJrZXJcbiAgICAgIGNhc2UgMHgwNjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBNQVJLRVIsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjdWUgcG9pbnRcbiAgICAgIGNhc2UgMHgwNzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBDVUVfUE9JTlQsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjaGFubmVsIHByZWZpeFxuICAgICAgY2FzZSAweDIwOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIG1pZGlDaGFubmVsUHJlZml4IGV2ZW50IGlzIDEsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENIQU5ORUxfUFJFRklYLFxuICAgICAgICAgICAgY2hhbm5lbDogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBlbmQgb2YgdHJhY2tcbiAgICAgIGNhc2UgMHgyZjpcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBlbmRPZlRyYWNrIGV2ZW50IGlzIDAsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICBkZXNjcjogRU5EX09GX1RSQUNLLFxuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHRlbXBvXG4gICAgICBjYXNlIDB4NTE6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc2V0VGVtcG8gZXZlbnQgaXMgMywgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1pY3Jvc2Vjb25kc1BlckJlYXQgPSAocmVhZGVyLnVpbnQ4KCkgPDwgMTYpICsgKHJlYWRlci51aW50OCgpIDw8IDgpICsgcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIGNvbnN0IGJwbSA9IDYwMDAwMDAwIC8gbWljcm9zZWNvbmRzUGVyQmVhdDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBURU1QTyxcbiAgICAgICAgICAgIGJwbSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJwbSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBzbXB0ZSBvZmZzZXRcbiAgICAgIGNhc2UgMHg1NDpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSA1KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHNtcHRlT2Zmc2V0IGV2ZW50IGlzIDUsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBob3VyQnl0ZSA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFNNUFRFX09GRlNFVCxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogZ2V0RnJhbWVSYXRlKGhvdXJCeXRlKSxcbiAgICAgICAgICAgIGhvdXI6IGhvdXJCeXRlICYgMHgxZixcbiAgICAgICAgICAgIG1pbjogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBzZWM6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgZnJhbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgc3ViRnJhbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGltZSBzaWduYXR1cmVcbiAgICAgIGNhc2UgMHg1ODpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSA0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHRpbWVTaWduYXR1cmUgZXZlbnQgaXMgNCwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG51bWVyYXRvciA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICBjb25zdCBkZW5vbWluYXRvciA9IE1hdGgucG93KDIsIHJlYWRlci51aW50OCgpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBUSU1FX1NJR05BVFVSRSxcbiAgICAgICAgICAgIG51bWVyYXRvcixcbiAgICAgICAgICAgIGRlbm9taW5hdG9yLFxuICAgICAgICAgICAgbWV0cm9ub21lOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICAgIHRoaXJ0eVNlY29uZHM6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbnVtZXJhdG9yLFxuICAgICAgICAgIGRlbm9taW5hdG9yLFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGtleSBzaWduYXR1cmVcbiAgICAgIGNhc2UgMHg1OTpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIGtleVNpZ25hdHVyZSBldmVudCBpcyAyLCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBLRVlfU0lHTkFUVVJFLFxuICAgICAgICAgICAga2V5OiByZWFkZXIuaW50OCgpLFxuICAgICAgICAgICAgc2NhbGU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gc2VxdWVuY2VyIHNwZWNpZmljXG4gICAgICBjYXNlIDB4N2Y6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU0VRVUVOQ0VSX1NQRUNJRklDLFxuICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHVuZGVmaW5lZFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBcInVuZGVmaW5lZFwiLFxuICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZUJ5dGUgPT09IDB4ZjApIHtcbiAgICAvLyBzeXN0ZW0gZXhjbHVzaXZlXG4gICAgY29uc3QgbGVuZ3RoID0gcmVhZGVyLm1pZGlJbnQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQ6IHtcbiAgICAgICAgdHlwZTogMHhmMCxcbiAgICAgICAgZGVzY3I6IFNZU1RFTV9FWENMVVNJVkUsXG4gICAgICAgIGRhdGE6IHJlYWRlci5yZWFkKGxlbmd0aCksXG4gICAgICB9LFxuICAgICAgZGVsdGFUaW1lLFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZUJ5dGUgPT09IDB4ZjcpIHtcbiAgICAvLyBkaXZpZGVkIHN5c3RlbSBleGNsdXNpdmVcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDoge1xuICAgICAgICB0eXBlOiAweGYwLFxuICAgICAgICBkZXNjcjogRElWSURFRF9TWVNURU1fRVhDTFVTSVZFLFxuICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgfSxcbiAgICAgIGRlbHRhVGltZSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8qKlxuICAgICAqIHJ1bm5pbmcgc3RhdHVzIC0gcmV1c2UgbGFzdEV2ZW50VHlwZUJ5dGUgYXMgdGhlIGV2ZW50IHR5cGVcbiAgICAgKiB0eXBlQnl0ZSBpcyBhY3R1YWxseSB0aGUgZmlyc3QgcGFyYW1ldGVyXG4gICAgICovXG4gICAgY29uc3QgaXNSdW5uaW5nU3RhdHVzID0gKHR5cGVCeXRlICYgMGIxMDAwMDAwMCkgPT09IDA7XG4gICAgY29uc3QgdmFsdWUgPSBpc1J1bm5pbmdTdGF0dXMgPyB0eXBlQnl0ZSA6IHJlYWRlci51aW50OCgpO1xuICAgIHR5cGVCeXRlID0gaXNSdW5uaW5nU3RhdHVzID8gKGxhc3RUeXBlQnl0ZSA9PT0gbnVsbCA/IDAgOiBsYXN0VHlwZUJ5dGUpIDogdHlwZUJ5dGU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhpc1J1bm5pbmdTdGF0dXMsIHR5cGVCeXRlLCB2YWx1ZSk7XG5cbiAgICBjb25zdCBjaGFubmVsID0gdHlwZUJ5dGUgJiAweDBmO1xuICAgIC8vIGNoYW5uZWxzW2NoYW5uZWxdID0gdHJ1ZTtcblxuICAgIHN3aXRjaCAodHlwZUJ5dGUgPj4gNCkge1xuICAgICAgLy8gbm90ZSBvZmZcbiAgICAgIGNhc2UgMHgwODpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHg4MCxcbiAgICAgICAgICAgIGRlc2NyOiBOT1RFX09GRixcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIG5vdGUgb25cbiAgICAgIGNhc2UgMHgwOTpcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSByZWFkZXIudWludDgoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdmVsb2NpdHkgPT09IDAgPyAweDgwIDogMHg5MCxcbiAgICAgICAgICAgIGRlc2NyOiB2ZWxvY2l0eSA9PT0gMCA/IE5PVEVfT0ZGIDogTk9URV9PTixcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgIHZlbG9jaXR5LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gbm90ZSBhZnRlcnRvdWNoXG4gICAgICBjYXNlIDB4MGE6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4YTAsXG4gICAgICAgICAgICBkZXNjcjogTk9URV9BRlRFUlRPVUNILFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgYW1vdW50OiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNvbnRyb2xsZXJcbiAgICAgIGNhc2UgMHgwYjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhiMCxcbiAgICAgICAgICAgIGRlc2NyOiBDT05UUk9MTEVSLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gcHJvZ3JhbSBjaGFuZ2VcbiAgICAgIGNhc2UgMHgwYzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhjMCxcbiAgICAgICAgICAgIGRlc2NyOiBQUk9HUkFNX0NIQU5HRSxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBwcm9ncmFtOiB2YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNoYW5uZWwgYWZ0ZXJ0b3VjaFxuICAgICAgY2FzZSAweDBkOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGQwLFxuICAgICAgICAgICAgZGVzY3I6IENIQU5ORUxfQUZURVJUT1VDSCxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBhbW91bnQ6IHZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gcGl0Y2ggYmVuZFxuICAgICAgY2FzZSAweDBlOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGUwLFxuICAgICAgICAgICAgZGVzY3I6IFBJVENIX0JFTkQsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlICsgKHJlYWRlci51aW50OCgpIDw8IDcpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuXG4gICAgICAvLyBkZWZhdWx0OlxuICAgICAgLy8gICByZXR1cm4ge1xuICAgICAgLy8gICAgIGV2ZW50OiB7XG4gICAgICAvLyAgICAgICB0eXBlOiB0eXBlQnl0ZSA+PiA0LFxuICAgICAgLy8gICAgICAgZGVzY3I6IFwidW5yZWNvZ25pemVkXCIsXG4gICAgICAvLyAgICAgICBjaGFubmVsLFxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAgZGVsdGFUaW1lLFxuICAgICAgLy8gICB9O1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhgVW5yZWNvZ25pemVkIE1JREkgZXZlbnQgdHlwZSBieXRlOiAke3R5cGVCeXRlfSAoZml4IHRoaXMpYCk7XG4gIHJldHVybiB7XG4gICAgZXZlbnQ6IHtcbiAgICAgIHR5cGU6IHR5cGVCeXRlID09PSAyNTUgPyAwIDogdHlwZUJ5dGUsXG4gICAgfSxcbiAgICBkZWx0YVRpbWUsXG4gIH07XG4gIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIE1JREkgZXZlbnQgdHlwZSBieXRlOiAke3R5cGVCeXRlfWApO1xufVxuXG5mdW5jdGlvbiBnZXRGcmFtZVJhdGUoaG91ckJ5dGU6IG51bWJlcikge1xuICBzd2l0Y2ggKGhvdXJCeXRlICYgMGIxMTAwMDAwKSB7XG4gICAgY2FzZSAweDAwOlxuICAgICAgcmV0dXJuIDI0O1xuICAgIGNhc2UgMHgyMDpcbiAgICAgIHJldHVybiAyNTtcbiAgICBjYXNlIDB4NDA6XG4gICAgICByZXR1cm4gMjk7XG4gICAgY2FzZSAweDYwOlxuICAgICAgcmV0dXJuIDMwO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBNSURJRXZlbnQsIE5vdGVPbkV2ZW50IH0gZnJvbSBcIi4vbWlkaV9ldmVudHNcIjtcbmltcG9ydCB7IE5PVEVfT04sIE5PVEVfT0ZGIH0gZnJvbSBcIi4vbWlkaV91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudEV2ZW50SW5kZXggPSAoc29uZzogU29uZywgbWlsbGlzOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICBjb25zdCB7IGV2ZW50cyB9ID0gc29uZztcbiAgbGV0IGkgPSAwO1xuICBmb3IgKDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2ldO1xuICAgIGlmICghZXZlbnQubWlsbGlzIHx8IGV2ZW50Lm1pbGxpcyA+PSBtaWxsaXMpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaTtcbn07XG5cbnR5cGUgQXJncyA9IHtcbiAgc29uZzogU29uZztcbiAgbWlsbGlzOiBudW1iZXI7XG4gIGluZGV4OiBudW1iZXI7XG4gIG91dHB1dHM/OiBXZWJNaWRpLk1JRElPdXRwdXRNYXA7XG59O1xuZXhwb3J0IGNvbnN0IHNjaGVkdWxlID0gKHtcbiAgc29uZyxcbiAgaW5kZXgsXG4gIG1pbGxpcyxcbiAgb3V0cHV0cyxcbn06IEFyZ3MpOiB7IG1pbGxpczogbnVtYmVyOyBpbmRleDogbnVtYmVyOyBzY2hlZHVsZWQ6IE1JRElFdmVudFtdIH0gPT4ge1xuICBjb25zdCB0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBjb25zdCB7IGV2ZW50cyB9ID0gc29uZztcbiAgY29uc3Qgc2NoZWR1bGVkID0gW107XG4gIC8vIGxldCBsYXN0Tm90ZU51bWJlcjogbnVtYmVyID0gLTE7XG4gIC8vIGxldCBsYXN0Tm90ZVR5cGU6IG51bWJlciA9IC0xO1xuICB3aGlsZSAoaW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaW5kZXhdO1xuICAgIGlmICghZXZlbnQubWlsbGlzIHx8ICFldmVudC50cmFja0lkKSB7XG4gICAgICAvLyBicmVhaztcbiAgICAgIGluZGV4Kys7XG4gICAgfSBlbHNlIGlmIChldmVudC5taWxsaXMgPCBtaWxsaXMgKyBzb25nLmJ1ZmZlclRpbWUpIHtcbiAgICAgIHNjaGVkdWxlZC5wdXNoKGV2ZW50KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRpY2tzLCBldmVudC5kZXNjciwgKGV2ZW50IGFzIE5vdGVPbkV2ZW50KS5ub3RlTnVtYmVyKTtcbiAgICAgIGNvbnN0IHRyYWNrID0gc29uZy50cmFja3NCeUlkW2V2ZW50LnRyYWNrSWRdO1xuICAgICAgdHJhY2sub3V0cHV0cy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRlc2NyID09PSBOT1RFX09OIHx8IGV2ZW50LmRlc2NyID09PSBOT1RFX09GRikge1xuICAgICAgICAgIGNvbnN0IGUgPSBldmVudCBhcyBOb3RlT25FdmVudDtcbiAgICAgICAgICBpZiAoZXZlbnQubWlsbGlzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50eXBlLCBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyKTtcbiAgICAgICAgICAgIGxldCB0aW1lID0gdHMgKyBzb25nLmxhdGVuY3kgKyB0cmFjay5sYXRlbmN5ICsgKGV2ZW50Lm1pbGxpcyAtIG1pbGxpcyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFtcIm5vdGVOdW1iZXJcIl0sIGV2ZW50LmRlc2NyLCBldmVudC5taWxsaXMsIG1pbGxpcywgdGltZSwgdHMsIHRpbWUgLSB0cyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLm5vdGVOdW1iZXIsIGxhc3ROb3RlTnVtYmVyLCBsYXN0Tm90ZVR5cGUpO1xuICAgICAgICAgICAgLy8gaWYgKGUubm90ZU51bWJlciA9PT0gbGFzdE5vdGVOdW1iZXIgJiYgbGFzdE5vdGVUeXBlID09PSAweDkwKSB7XG4gICAgICAgICAgICAvLyAgIGlmIChlLmRlc2NyID09PSBOT1RFX09OKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZXBlYXRpbmcgbm90ZXNcIik7XG4gICAgICAgICAgICAvLyAgICAgdGltZSArPSAxO1xuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBsYXN0Tm90ZU51bWJlciA9IGUubm90ZU51bWJlcjtcbiAgICAgICAgICAgIC8vIGxhc3ROb3RlVHlwZSA9IGUudHlwZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnR5cGUgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eSk7XG4gICAgICAgICAgICAvLyBxdWljayBmaXggZm9yIHJlcGVhdGluZyBub3Rlc1xuICAgICAgICAgICAgaWYgKGUuZGVzY3IgPT09IE5PVEVfT04pIHtcbiAgICAgICAgICAgICAgdGltZSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0c1xuICAgICAgICAgICAgICA/LmdldChpZClcbiAgICAgICAgICAgICAgPy5zZW5kKFtldmVudC50eXBlICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHldLCB0aW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKCdbU0NIRURVTEVEXScsIHNjaGVkdWxlZC5tYXAoZSA9PiBbZS50aWNrcywgZS5taWxsaXNdKSk7XG4gIHJldHVybiB7IG1pbGxpcywgaW5kZXgsIHNjaGVkdWxlZCB9O1xufTtcbiIsImltcG9ydCB7IGZldGNoQXJyYXlidWZmZXIgfSBmcm9tIFwiLi9mZXRjaF9oZWxwZXJzXCI7XG5pbXBvcnQgeyBwYXJzZU1pZGlGaWxlIH0gZnJvbSBcIi4vcGFyc2VfbWlkaV9iaW5hcnlcIjtcbmltcG9ydCB7IFNvbmcsIFRyYWNrIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZU5vdGVzIH0gZnJvbSBcIi4vY3JlYXRlX25vdGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTb25nRnJvbU1JRElGaWxlID0gYXN5bmMgKGFyZzogc3RyaW5nIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPFNvbmc+ID0+IHtcbiAgbGV0IGFiOiBBcnJheUJ1ZmZlcjtcbiAgaWYgKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhYiA9IGF3YWl0IGZldGNoQXJyYXlidWZmZXIoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICBhYiA9IGFyZztcbiAgfVxuICAvLyBjb25zdCB7IGhlYWRlciwgdGltZVRyYWNrLCB0cmFja3MgfSA9IHBhcnNlTWlkaUZpbGUoYWIpO1xuICBjb25zdCB7IHBwcSwgaW5pdGlhbFRlbXBvLCBpbml0aWFsTnVtZXJhdG9yLCBpbml0aWFsRGVub21pbmF0b3IsIGV2ZW50cywgdHJhY2tzIH0gPSBwYXJzZU1pZGlGaWxlKFxuICAgIGFiXG4gICk7XG5cbiAgY29uc3Qgc29uZzogU29uZyA9IHtcbiAgICBwcHEsXG4gICAgbGF0ZW5jeTogMTcsIC8vIHZhbHVlIGluIG1pbGxpc2Vjb25kcyAtPiB0aGUgbGVuZ3RoIG9mIGEgc2luZ2xlIGZyYW1lIEAgNjBIeiByZWZyZXNoIHJhdGVcbiAgICBidWZmZXJUaW1lOiAxMDAsIC8vIHZhbHVlIGluIG1pbGxpc2Vjb25kc1xuICAgIHRyYWNrcyxcbiAgICB0cmFja3NCeUlkOiB0cmFja3MucmVkdWNlKChhY2M6IHsgW2lkOiBzdHJpbmddOiBUcmFjayB9LCB2YWx1ZSkgPT4ge1xuICAgICAgYWNjW3ZhbHVlLmlkXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSksXG4gICAgZXZlbnRzLFxuICAgIG5vdGVzOiBjcmVhdGVOb3RlcyhldmVudHMpLFxuICAgIGluaXRpYWxUZW1wbyxcbiAgICBudW1lcmF0b3I6IGluaXRpYWxOdW1lcmF0b3IsXG4gICAgZGVub21pbmF0b3I6IGluaXRpYWxEZW5vbWluYXRvcixcbiAgICAvLyB0aW1lVHJhY2ssXG4gICAgLy8gdHJhY2tzOiB0cmFja3MubWFwKHRyYWNrID0+ICh7IGV2ZW50czogWy4uLnRyYWNrXSB9KSksXG4gIH07XG4gIHJldHVybiBzb25nO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFRyYWNrT3V0cHV0ID0gKHsgdHJhY2ssIG91dHB1dCB9OiB7IHRyYWNrOiBUcmFjazsgb3V0cHV0OiBzdHJpbmcgfSkgPT4ge1xuICB0cmFjay5vdXRwdXRzLnB1c2gob3V0cHV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFjayA9IChpZDogc3RyaW5nKTogVHJhY2sgPT4ge1xuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGxhdGVuY3k6IDAsXG4gICAgaW5wdXRzOiBbXSxcbiAgICBvdXRwdXRzOiBbXSxcbiAgfTtcbn07XG4iLCIvLyBpbXBvcnQgXCJqenpcIjtcbmltcG9ydCB7IHNjaGVkdWxlLCBnZXRDdXJyZW50RXZlbnRJbmRleCB9IGZyb20gXCIuLi8uLi9zcmMvc2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBnZXRNSURJQWNjZXNzLCBnZXRNSURJRGV2aWNlcyB9IGZyb20gXCIuLi8uLi9zcmMvaW5pdC1taWRpXCI7XG5pbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4uLy4uL3NyYy90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlU29uZ0Zyb21NSURJRmlsZSB9IGZyb20gXCIuLi8uLi9zcmMvc3VnYXJfY29hdGluZ1wiO1xuXG5jb25zdCB1cmwgPSBcIi4uLy4uL2Fzc2V0cy9taW51dGVfd2FsdHoubWlkXCI7XG4vLyBjb25zdCB1cmwgPSAnL2Fzc2V0cy9tb3prNTQ1YS5taWQnO1xuLy8gY29uc3QgdXJsID0gJy9hc3NldHMvbW96azU0NWFfbXVzZXNjb3JlLm1pZCc7XG5cbmNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1hID0gYXdhaXQgZ2V0TUlESUFjY2VzcygpO1xuICBjb25zdCBzb25nID0gYXdhaXQgY3JlYXRlU29uZ0Zyb21NSURJRmlsZSh1cmwpO1xuICBjb25zdCB7IGlucHV0cywgb3V0cHV0cyB9ID0gYXdhaXQgZ2V0TUlESURldmljZXMoKTtcbiAgc29uZy50cmFja3MuZm9yRWFjaCh0cmFjayA9PiB7XG4gICAgdHJhY2sub3V0cHV0cy5wdXNoKC4uLm91dHB1dHMubWFwKG8gPT4gby5pZCkpO1xuICB9KTtcbiAgY29uc29sZS5sb2coc29uZyk7XG5cbiAgbGV0IG1pbGxpcyA9IDMwMDA7XG4gIGxldCBpbmRleCA9IGdldEN1cnJlbnRFdmVudEluZGV4KHNvbmcsIG1pbGxpcyk7XG4gIC8vIGNvbnNvbGUubG9nKCdTVEFSVCBJTkRFWCcsIGluZGV4KTtcbiAgbGV0IHN0YXJ0OiBudW1iZXIgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgY29uc3QgcGxheSA9IChhOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRzLCBhKTtcbiAgICAvLyBjb25zdCBwcm9ncmVzcyA9IHRzIC0gYTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IHRzIC0gc3RhcnQ7XG4gICAgc3RhcnQgPSB0cztcbiAgICAvLyBjb25zdCBwcm9ncmVzcyA9IGEgLSBzdGFydDtcbiAgICAvLyBzdGFydCA9IGE7XG4gICAgaWYgKG1pbGxpcyA8IDEwMDAwKSB7XG4gICAgICAoeyBpbmRleCwgbWlsbGlzIH0gPSBzY2hlZHVsZSh7XG4gICAgICAgIHNvbmcsXG4gICAgICAgIG1pbGxpcyxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIG91dHB1dHM6IG1hPy5vdXRwdXRzLFxuICAgICAgfSkpO1xuICAgICAgbWlsbGlzICs9IHByb2dyZXNzO1xuICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgsIG1pbGxpcyk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYSA9PiB7XG4gICAgICAgIHBsYXkoYSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHBsYXkoc3RhcnQpO1xufTtcblxuaW5pdCgpO1xuXG4vLyBmZXRjaCh1cmwpXG4vLyAgIC50aGVuKGFycmF5QnVmZmVyKVxuLy8gICAudGhlbihhYiA9PiB7XG4vLyAgICAgY29uc3QgeyBoZWFkZXIsIHRyYWNrcyB9ID0gcGFyc2VNaWRpRmlsZShhYik7XG4vLyAgICAgY29uc29sZS5sb2codHJhY2tzKTtcbi8vICAgfSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
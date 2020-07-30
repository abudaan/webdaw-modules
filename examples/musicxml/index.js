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
exports.fetchArraybuffer = exports.fetchXML = exports.fetchJSON = exports.arrayBuffer = exports.json = exports.status = void 0;
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
exports.fetchXML = function (url) {
    return fetch(url)
        .then(function (response) { return response.text(); })
        .then(function (str) { return new window.DOMParser().parseFromString(str, "text/xml"); });
};
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
var track_1 = __webpack_require__(/*! ./sugarcoating/track */ "../src/sugarcoating/track.ts");
var create_notes_1 = __webpack_require__(/*! ./create_notes */ "../src/create_notes.ts");
function parseMidiFile(buffer) {
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
        notes: create_notes_1.createNotes(events),
        initialTempo: initialTempo,
        initialNumerator: initialNumerator,
        initialDenominator: initialDenominator,
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
        var track = track_1.createTrack(trackId);
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

/***/ "../src/sugarcoating/createSongFromMIDIFile.ts":
/*!*****************************************************!*\
  !*** ../src/sugarcoating/createSongFromMIDIFile.ts ***!
  \*****************************************************/
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
var fetch_helpers_1 = __webpack_require__(/*! ../fetch_helpers */ "../src/fetch_helpers.ts");
var parse_midi_binary_1 = __webpack_require__(/*! ../parse_midi_binary */ "../src/parse_midi_binary.ts");
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
            return [2 /*return*/, parse_midi_binary_1.parseMidiFile(ab)];
        }
    });
}); };


/***/ }),

/***/ "../src/sugarcoating/track.ts":
/*!************************************!*\
  !*** ../src/sugarcoating/track.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createTrack = exports.setTrackOutput = void 0;
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
var init_midi_1 = __webpack_require__(/*! ../../src/init-midi */ "../src/init-midi.ts");
var createSongFromMIDIFile_1 = __webpack_require__(/*! ../../src/sugarcoating/createSongFromMIDIFile */ "../src/sugarcoating/createSongFromMIDIFile.ts");
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
                return [4 /*yield*/, createSongFromMIDIFile_1.createSongFromMIDIFile(url)];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9idWZmZXJyZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jYWxjdWxhdGVNaWxsaXMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVfbm90ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9mZXRjaF9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uLi9zcmMvaW5pdC1taWRpLnRzIiwid2VicGFjazovLy8uLi9zcmMvbWlkaV91dGlscy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlX21pZGlfYmluYXJ5LnRzIiwid2VicGFjazovLy8uLi9zcmMvc2NoZWR1bGVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvc3VnYXJjb2F0aW5nL2NyZWF0ZVNvbmdGcm9tTUlESUZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zdWdhcmNvYXRpbmcvdHJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4vbXVzaWN4bWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJtdXNpY3htbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbXVzaWN4bWwvaW5kZXgudHNcIik7XG4iLCIvKiBcbihUaGUgTUlUIExpY2Vuc2UpXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAxOSBIYWzDoXN6IMOBZMOhbSA8bWFpbEBhZGFtaGFsYXN6LmNvbT5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gIFVuaXF1ZSBIZXhhdHJpZGVjaW1hbCBJRCBHZW5lcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBwaWQgPSBwcm9jZXNzICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nKXtcbiAgICB2YXIgbWFjID0gJycsIG5ldHdvcmtJbnRlcmZhY2VzID0gcmVxdWlyZSgnb3MnKS5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGZvcihsZXQgaW50ZXJmYWNlX2tleSBpbiBuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbmV0d29ya0ludGVyZmFjZS5sZW5ndGg7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAhPSAnMDA6MDA6MDA6MDA6MDA6MDAnKXtcbiAgICAgICAgICAgICAgICBtYWMgPSBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYzsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkcmVzcyA9IG1hYyA/IHBhcnNlSW50KG1hYy5yZXBsYWNlKC9cXDp8XFxEKy9naSwgJycpKS50b1N0cmluZygzNikgOiAnJyA7XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCIvLyBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcHJhdmRvbWlsL2phc21pZC50c1xuXG5leHBvcnQgY2xhc3MgQnVmZmVyUmVhZGVyIHtcbiAgcHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIGRhdGE6IERhdGFWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKGJ1ZmZlcjogQXJyYXlCdWZmZXJMaWtlKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5kYXRhID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gIH1cblxuICByZWFkKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuYnVmZmVyLnNsaWNlKHRoaXMucG9zaXRpb24sIHRoaXMucG9zaXRpb24gKyBsZW5ndGgpO1xuICAgIHRoaXMucG9zaXRpb24gKz0gbGVuZ3RoO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGludDgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0SW50OCh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0VWludDgodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHVpbnQxNigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50MTYodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSAyO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHVpbnQzMigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50MzIodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSA0O1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0cmluZyhsZW5ndGg6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoXCJhc2NpaVwiKS5kZWNvZGUodGhpcy5yZWFkKGxlbmd0aCkpO1xuICB9XG5cbiAgZW9mKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID49IHRoaXMuZGF0YS5ieXRlTGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgYSBNSURJLXN0eWxlIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyLlxuICAgKiAoYmlnLWVuZGlhbiB2YWx1ZSBpbiBncm91cHMgb2YgNyBiaXRzLCB3aXRoIHRvcCBiaXQgc2V0IHRvIHNpZ25pZnkgdGhhdCBhbm90aGVyIGJ5dGUgZm9sbG93cylcbiAgICovXG4gIG1pZGlJbnQoKSB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy51aW50OCgpO1xuICAgICAgaWYgKHZhbHVlICYgMGIxMDAwMDAwMCkge1xuICAgICAgICByZXN1bHQgKz0gdmFsdWUgJiAwYjExMTExMTE7XG4gICAgICAgIHJlc3VsdCA8PD0gNztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtaWRpQ2h1bmsoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnN0cmluZyg0KTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnVpbnQzMigpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlYWQobGVuZ3RoKTtcbiAgICByZXR1cm4geyBpZCwgbGVuZ3RoLCBkYXRhIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE1JRElFdmVudCwgVGVtcG9FdmVudCB9IGZyb20gXCIuL21pZGlfZXZlbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVNaWxsaXMgPSAoXG4gIGV2ZW50czogTUlESUV2ZW50W10sXG4gIGRhdGE6IHtcbiAgICBwcHE6IG51bWJlcjtcbiAgICBicG0/OiBudW1iZXI7XG4gICAgcGxheWJhY2tTcGVlZD86IG51bWJlcjtcbiAgfVxuKTogTUlESUV2ZW50W10gPT4ge1xuICBsZXQgeyBwcHEsIGJwbSA9IC0xLCBwbGF5YmFja1NwZWVkID0gMSB9ID0gZGF0YTtcbiAgbGV0IG1pbGxpc1BlclRpY2sgPSBicG0gPT09IC0xID8gMCA6ICgoKDEgLyBwbGF5YmFja1NwZWVkKSAqIDYwKSAvIGJwbSAvIHBwcSkgKiAxMDAwO1xuICBsZXQgdGlja3MgPSAwO1xuICBsZXQgbWlsbGlzID0gMDtcbiAgLy8gY29uc29sZS5sb2coXCJicG1cIiwgYnBtLCBtaWxsaXMpO1xuICByZXR1cm4gZXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgaWYgKChldmVudCBhcyBUZW1wb0V2ZW50KS5icG0pIHtcbiAgICAgICh7IGJwbSB9ID0gZXZlbnQgYXMgVGVtcG9FdmVudCk7XG4gICAgICBjb25zb2xlLmxvZyhcImJwbVwiLCBicG0sIG1pbGxpcyk7XG4gICAgICBtaWxsaXNQZXJUaWNrID0gKCgoMSAvIHBsYXliYWNrU3BlZWQpICogNjApIC8gYnBtIC8gcHBxKSAqIDEwMDA7XG4gICAgfVxuICAgIGNvbnN0IGRpZmZUaWNrcyA9IGV2ZW50LnRpY2tzIC0gdGlja3M7XG4gICAgbWlsbGlzICs9IGRpZmZUaWNrcyAqIG1pbGxpc1BlclRpY2s7XG4gICAgZXZlbnQubWlsbGlzID0gbWlsbGlzO1xuICAgIHRpY2tzID0gZXZlbnQudGlja3M7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBNSURJRXZlbnQsIE5vdGVFdmVudCwgTm90ZU9uRXZlbnQgfSBmcm9tIFwiLi9taWRpX2V2ZW50c1wiO1xuaW1wb3J0IHsgTUlESU5vdGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgc29ydE1JRElFdmVudHMgfSBmcm9tIFwiLi9taWRpX3V0aWxzXCI7XG5cbmxldCBpbmRleCA9IDA7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOb3RlcyA9IChldmVudHM6IE1JRElFdmVudFtdKTogTUlESU5vdGVbXSA9PiB7XG4gIGxldCBmaWx0ZXJlZDogTm90ZUV2ZW50W10gPSBldmVudHMucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbC50eXBlKTtcbiAgICBpZiAodmFsLnR5cGUgPT09IDB4ODAgfHwgdmFsLnR5cGUgPT09IDB4OTApIHtcbiAgICAgIGFjYy5wdXNoKHZhbCBhcyBOb3RlRXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSBhcyBOb3RlRXZlbnRbXSk7XG4gIC8vIGZpbHRlcmVkID0gc29ydE1JRElFdmVudHMoZmlsdGVyZWQpO1xuICBjb25zdCBub3RlczogTUlESU5vdGVbXSA9IFtdO1xuICBjb25zdCB0bXA6IHsgW2lkOiBzdHJpbmddOiBOb3RlRXZlbnQgfSA9IHt9O1xuICBmaWx0ZXJlZC5mb3JFYWNoKGUgPT4ge1xuICAgIGNvbnN0IGlkID0gYCR7ZS50cmFja0lkfS0ke2Uubm90ZU51bWJlcn1gO1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGlja3MsIGUudHlwZSwgaWQpO1xuICAgIGlmIChlLnR5cGUgPT09IDB4OTApIHtcbiAgICAgIGlmICh0bXBbaWRdKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2Fybihgbm90ZSBleGlzdGVkIGFscmVhZHkhICR7aWR9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0bXBbaWRdID0gZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gMHg4MCkge1xuICAgICAgaWYgKCF0bXBbaWRdKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2Fybihgbm90ZSBkb2Vzbid0IGV4aXN0ISAke2lkfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm90ZU9uID0gdG1wW2lkXTtcbiAgICAgICAgY29uc3Qgbm90ZTogTUlESU5vdGUgPSB7XG4gICAgICAgICAgaWQ6IGBub3RlLSR7bmV3IERhdGUoKS5nZXRUaW1lKCl9LSR7aW5kZXgrK31gLFxuICAgICAgICAgIG5vdGVPbjogbm90ZU9uIGFzIE5vdGVPbkV2ZW50LFxuICAgICAgICAgIG5vdGVPZmY6IGUsXG4gICAgICAgICAgLy8gZHVyYXRpb25UaWNrczogZS50aWNrcyAtIG5vdGVPbi50aWNrcyxcbiAgICAgICAgICAvLyBkdXJhdGlvbk1pbGxpczogZS5taWxsaXMgLSBub3RlT24ubWlsbGlzLFxuICAgICAgICAgIC8vIHN0YXJ0VGlja3M6IG5vdGVPbi50aWNrcyxcbiAgICAgICAgICAvLyBzdGFydE1pbGxpczogbm90ZU9uLm1pbGxpcyxcbiAgICAgICAgICAvLyBlbmRUaWNrczogZS50aWNrcyxcbiAgICAgICAgICAvLyBlbmRNaWxsaXM6IGUubWlsbGlzLFxuICAgICAgICB9O1xuICAgICAgICBub3Rlcy5wdXNoKG5vdGUpO1xuICAgICAgICBkZWxldGUgdG1wW2lkXTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAvLyBjb25zb2xlLmxvZyhub3Rlcyk7XG4gIHJldHVybiBub3Rlcztcbn07XG4iLCIvLyBmZXRjaCBoZWxwZXJzXG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0dXMocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpzb24ocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxKU09OPiB7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUJ1ZmZlcihyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hKU09OKHVybDogc3RyaW5nKTogUHJvbWlzZTxKU09OPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gZmV0Y2godXJsLCB7XG4gICAgLy8gICBtb2RlOiAnbm8tY29ycydcbiAgICAvLyB9KVxuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKHN0YXR1cylcbiAgICAgIC50aGVuKGpzb24pXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoWE1MID0gKHVybDogc3RyaW5nKSA9PlxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgIC50aGVuKHN0ciA9PiBuZXcgd2luZG93LkRPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHIsIFwidGV4dC94bWxcIikpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcnJheWJ1ZmZlcih1cmw6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgLy8gY29uc29sZS5sb2coJ2ZlY3RjaCBhYicsIHVybCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgcmVzcG9uc2VfMSA9IGF3YWl0IHN0YXR1cyhyZXNwb25zZSk7XG4gIHJldHVybiBhcnJheUJ1ZmZlcihyZXNwb25zZV8xKTtcbn1cbiIsImxldCBtaWRpQWNjZXNzOiBXZWJNaWRpLk1JRElBY2Nlc3MgfCBudWxsO1xuXG5leHBvcnQgY29uc3QgZ2V0TUlESUFjY2VzcyA9IGFzeW5jICgpOiBQcm9taXNlPFdlYk1pZGkuTUlESUFjY2VzcyB8IG51bGw+ID0+IHtcbiAgaWYgKG1pZGlBY2Nlc3MgIT09IG51bGwgJiYgdHlwZW9mIG1pZGlBY2Nlc3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1pZGlBY2Nlc3MpO1xuICB9XG5cbiAgaWYgKCFuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3MpIHtcbiAgICBtaWRpQWNjZXNzID0gbnVsbDtcbiAgICBjb25zb2xlLmxvZyhcIldlYk1JREkgbm90IHN1cHBvcnRlZFwiKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtYSA9IGF3YWl0IG5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2VzcygpO1xuICAgIC8vIG1pZGlBY2Nlc3Mub25zdGF0ZWNoYW5nZSA9IChlOiBXZWJNaWRpLk1JRElDb25uZWN0aW9uRXZlbnQpID0+IHtcbiAgICAvLyB9O1xuICAgIGlmICghbWEuaW5wdXRzIHx8ICFtYS5vdXRwdXRzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZpcmVmb3ggV2ViTUlESSBBUEkgc3VwcG9ydCBpcyBzdGlsbCBpbiBwcm9ncmVzc1wiKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBtaWRpQWNjZXNzID0gbWE7XG4gICAgcmV0dXJuIG1hO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJNSURJIGNvdWxkIG5vdCBiZSBpbml0aWFsaXplZDpcIiwgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNSURJRGV2aWNlcyA9IGFzeW5jICgpOiBQcm9taXNlPHtcbiAgaW5wdXRzOiBXZWJNaWRpLk1JRElJbnB1dFtdO1xuICBvdXRwdXRzOiBXZWJNaWRpLk1JRElPdXRwdXRbXTtcbn0+ID0+IHtcbiAgLy8gZXhwb3J0IGNvbnN0IGdldE1JRElEZXZpY2VzID0gKCk6IHsgaW5wdXRzOiBXZWJNaWRpLk1JRElJbnB1dFtdLCBvdXRwdXRzOiBXZWJNaWRpLk1JRElPdXRwdXRbXSB9ID0+IHtcbiAgY29uc3QgaW5wdXRzOiBXZWJNaWRpLk1JRElJbnB1dFtdID0gW107XG4gIGNvbnN0IG91dHB1dHM6IFdlYk1pZGkuTUlESU91dHB1dFtdID0gW107XG4gIGlmICh0eXBlb2YgbWlkaUFjY2VzcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1pZGlBY2Nlc3MgPSBhd2FpdCBnZXRNSURJQWNjZXNzKCk7XG4gICAgLy8gY29uc29sZS53YXJuKCdNSURJQWNjZXNzIG5vdCB5ZXQgaW5pdGlhbGl6ZWQsIHBsZWFzZSBjYWxsIGluaXRNSURJIGZpcnN0Jyk7XG4gIH0gZWxzZSBpZiAobWlkaUFjY2VzcyAhPT0gbnVsbCkge1xuICAgIG1pZGlBY2Nlc3MuaW5wdXRzLmZvckVhY2goaSA9PiB7XG4gICAgICBpbnB1dHMucHVzaChpKTtcbiAgICB9KTtcbiAgICBtaWRpQWNjZXNzLm91dHB1dHMuZm9yRWFjaChvID0+IHtcbiAgICAgIG91dHB1dHMucHVzaChvKTtcbiAgICB9KTtcbiAgfVxuICBjb25zb2xlLmxvZyhpbnB1dHMsIG91dHB1dHMpO1xuICByZXR1cm4geyBpbnB1dHMsIG91dHB1dHMgfTtcbn07XG4iLCJpbXBvcnQgeyBNSURJRXZlbnQsIFRlbXBvRXZlbnQsIFRpbWVTaWduYXR1cmVFdmVudCB9IGZyb20gXCIuL21pZGlfZXZlbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBTRVFVRU5DRV9OVU1CRVIgPSBcInNlcXVlbmNlIG51bWJlclwiO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSBcInRleHRcIjtcbmV4cG9ydCBjb25zdCBDT1BZUklHSFRfTk9USUNFID0gXCJjb3B5cmlnaHQgbm90aWNlXCI7XG5leHBvcnQgY29uc3QgVFJBQ0tfTkFNRSA9IFwidHJhY2sgbmFtZVwiO1xuZXhwb3J0IGNvbnN0IElOU1RSVU1FTlRfTkFNRSA9IFwiaW5zdHJ1bWVudCBuYW1lXCI7XG5leHBvcnQgY29uc3QgTFlSSUNTID0gXCJseXJpY3NcIjtcbmV4cG9ydCBjb25zdCBNQVJLRVIgPSBcIm1hcmtlclwiO1xuZXhwb3J0IGNvbnN0IENVRV9QT0lOVCA9IFwiY3VlIHBvaW50XCI7XG5leHBvcnQgY29uc3QgQ0hBTk5FTF9QUkVGSVggPSBcImNoYW5uZWwgcHJlZml4XCI7XG5leHBvcnQgY29uc3QgRU5EX09GX1RSQUNLID0gXCJlbmQgb2YgdHJhY2tcIjtcbmV4cG9ydCBjb25zdCBURU1QTyA9IFwidGVtcG9cIjtcbmV4cG9ydCBjb25zdCBTTVBURV9PRkZTRVQgPSBcInNtcHRlIG9mZnNldFwiO1xuZXhwb3J0IGNvbnN0IFRJTUVfU0lHTkFUVVJFID0gXCJ0aW1lIHNpZ25hdHVyZVwiO1xuZXhwb3J0IGNvbnN0IEtFWV9TSUdOQVRVUkUgPSBcImtleSBzaWduYXR1cmVcIjtcbmV4cG9ydCBjb25zdCBTRVFVRU5DRVJfU1BFQ0lGSUMgPSBcInNlcXVlbmNlciBzcGVjaWZpY1wiO1xuZXhwb3J0IGNvbnN0IFNZU1RFTV9FWENMVVNJVkUgPSBcInN5c3RlbSBleGNsdXNpdmVcIjtcbmV4cG9ydCBjb25zdCBESVZJREVEX1NZU1RFTV9FWENMVVNJVkUgPSBcImRpdmlkZWQgc3lzdGVtIGV4Y2x1c2l2ZVwiO1xuZXhwb3J0IGNvbnN0IE5PVEVfT04gPSBcIm5vdGUgb25cIjtcbmV4cG9ydCBjb25zdCBOT1RFX09GRiA9IFwibm90ZSBvZmZcIjtcbmV4cG9ydCBjb25zdCBOT1RFX0FGVEVSVE9VQ0ggPSBcIm5vdGUgYWZ0ZXJ0b3VjaFwiO1xuZXhwb3J0IGNvbnN0IENPTlRST0xMRVIgPSBcImNvbnRyb2xsZXJcIjtcbmV4cG9ydCBjb25zdCBQUk9HUkFNX0NIQU5HRSA9IFwicHJvZ3JhbSBjaGFuZ2VcIjtcbmV4cG9ydCBjb25zdCBDSEFOTkVMX0FGVEVSVE9VQ0ggPSBcImNoYW5uZWwgYWZ0ZXJ0b3VjaFwiO1xuZXhwb3J0IGNvbnN0IFBJVENIX0JFTkQgPSBcInBpdGNoIGJlbmRcIjtcblxuY29uc3QgZGVzY3JpcHRpb25zOiB7IFtpbmRleDogbnVtYmVyXTogeyBbaW5kZXg6IG51bWJlcl06IHN0cmluZyB9IHwgc3RyaW5nIH0gPSB7XG4gIDB4ZmY6IHtcbiAgICAweDAwOiBcInNlcXVlbmNlIG51bWJlclwiLFxuICAgIDB4MDE6IFwidGV4dFwiLFxuICAgIDB4MDI6IFwiY29weXJpZ2h0IG5vdGljZVwiLFxuICAgIDB4MDM6IFwidHJhY2sgbmFtZVwiLFxuICAgIDB4MDQ6IFwiaW5zdHJ1bWVudCBuYW1lXCIsXG4gICAgMHgwNTogXCJseXJpY3NcIixcbiAgICAweDA2OiBcIm1hcmtlclwiLFxuICAgIDB4MDc6IFwiY3VlIHBvaW50XCIsXG4gICAgMHgyMDogXCJjaGFubmVsIHByZWZpeFwiLFxuICAgIDB4MmY6IFwiZW5kIG9mIHRyYWNrXCIsXG4gICAgMHg1MTogXCJ0ZW1wb1wiLFxuICAgIDB4NTQ6IFwic21wdGUgb2Zmc2V0XCIsXG4gICAgMHg1ODogXCJ0aW1lIHNpZ25hdHVyZVwiLFxuICAgIDB4NTk6IFwia2V5IHNpZ25hdHVyZVwiLFxuICAgIDB4N2Y6IFwic2VxdWVuY2VyIHNwZWNpZmljXCIsXG4gIH0sXG4gIDB4ZjA6IFwic3lzdGVtIGV4Y2x1c2l2ZVwiLFxuICAweGY3OiBcImRpdmlkZWQgc3lzZXhcIixcbiAgMHg4MDogXCJub3RlIG9uXCIsXG4gIDB4OTA6IFwibm90ZSBvZmZcIixcbiAgMHhhMDogXCJub3RlIGFmdGVydG91Y2hcIixcbiAgMHhiMDogXCJjb250cm9sbGVyXCIsXG4gIDB4YzA6IFwicHJvZ3JhbSBjaGFuZ2VcIixcbiAgMHhkMDogXCJjaGFubmVsIGFmdGVydG91Y2hcIixcbiAgMHhlMDogXCJwaXRjaCBiZW5kXCIsXG59O1xuXG5leHBvcnQgY29uc3Qgbm90ZU5hbWVzID0ge1xuICBzaGFycDogW1wiQ1wiLCBcIkMjXCIsIFwiRFwiLCBcIkQjXCIsIFwiRVwiLCBcIkZcIiwgXCJGI1wiLCBcIkdcIiwgXCJHI1wiLCBcIkFcIiwgXCJBI1wiLCBcIkJcIl0sXG4gIGZsYXQ6IFtcIkNcIiwgXCJEYlwiLCBcIkRcIiwgXCJFYlwiLCBcIkVcIiwgXCJGXCIsIFwiR2JcIiwgXCJHXCIsIFwiQWJcIiwgXCJBXCIsIFwiQmJcIiwgXCJCXCJdLFxuICBcImVuaGFybW9uaWMtc2hhcnBcIjogW1wiQiNcIiwgXCJDI1wiLCBcIkMjI1wiLCBcIkQjXCIsIFwiRCMjXCIsIFwiRSNcIiwgXCJGI1wiLCBcIkYjI1wiLCBcIkcjXCIsIFwiRyMjXCIsIFwiQSNcIiwgXCJBIyNcIl0sXG4gIFwiZW5oYXJtb25pYy1mbGF0XCI6IFtcIkRiYlwiLCBcIkRiXCIsIFwiRWJiXCIsIFwiRWJcIiwgXCJGYlwiLCBcIkdiYlwiLCBcIkdiXCIsIFwiQWJiXCIsIFwiQWJcIiwgXCJCYmJcIiwgXCJCYlwiLCBcIkNiXCJdLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldE1pZGlFdmVudERlc2NyaXB0aW9uID0gKHR5cGU6IG51bWJlciwgc3ViVHlwZT86IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGlmICh0eXBlb2Ygc3ViVHlwZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbnNbdHlwZV0gYXMgc3RyaW5nO1xuICB9XG4gIHJldHVybiBkZXNjcmlwdGlvbnNbdHlwZV1bc3ViVHlwZV0gfHwgXCJ1bmRlZmluZWRcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNaWRpTWVzc2FnZUV2ZW50ID0gKGV2ZW50OiBNSURJRXZlbnQpOiBudW1iZXJbXSA9PiB7XG4gIHN3aXRjaCAoZXZlbnQuZGVzY3IpIHtcbiAgICBjYXNlIE5PVEVfT046XG4gICAgICByZXR1cm4gWzB4OTAgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eV07XG4gICAgY2FzZSBOT1RFX09GRjpcbiAgICAgIHJldHVybiBbMHg4MCArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5XTtcbiAgfVxuICByZXR1cm4gWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5vdGVOdW1iZXIgPSAobmFtZTogc3RyaW5nLCBvY3RhdmU6IG51bWJlciwgbW9kZTogc3RyaW5nID0gXCJzaGFycFwiKTogbnVtYmVyID0+IHtcbiAgLy8gbGV0IGluZGV4ID0gLTE7XG4gIC8vIGNvbnN0IG1vZGVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobm90ZU5hbWVzKTtcbiAgLy8gZm9yIChsZXQgaSA9IDAsIG1heGkgPSBtb2Rlcy5sZW5ndGg7IGkgPCBtYXhpOyBpKyspIHtcbiAgLy8gICBjb25zdCBuYW1lcyA9IG1vZGVzW2ldO1xuICAvLyAgIGZvciAobGV0IGogPSAwLCBtYXhqID0gbmFtZXMubGVuZ3RoOyBqIDwgbWF4ajsgaisrKSB7XG4gIC8vICAgICBpZiAobW9kZVtqXSA9PT0gbmFtZSkge1xuICAvLyAgICAgICBpbmRleCA9IGk7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuICBsZXQgaW5kZXggPSAtMTtcbiAgY29uc3QgbW9kZXMgPSBPYmplY3QudmFsdWVzKG5vdGVOYW1lcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuYW1lcyA9IG1vZGVzW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWVzW2pdLCBuYW1lKTtcbiAgICAgIGlmIChuYW1lc1tqXSA9PT0gbmFtZSkge1xuICAgICAgICBpbmRleCA9IGo7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyhuYW1lLCBvY3RhdmUsIGluZGV4KTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8vbnVtYmVyID0gKGluZGV4ICsgMTIpICsgKG9jdGF2ZSAqIDEyKSArIDEyOyAvLyDihpIgaW4gQ3ViYXNlIGNlbnRyYWwgQyA9IEMzIGluc3RlYWQgb2YgQzRcbiAgcmV0dXJuIGluZGV4ICsgMTIgKyBvY3RhdmUgKiAxMjsgLy8g4oaSIG1pZGkgc3RhbmRhcmQgKyBzY2llbnRpZmljIG5hbWluZywgc2VlOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01pZGRsZV9DIGFuZCBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NjaWVudGlmaWNfcGl0Y2hfbm90YXRpb25cbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0TUlESUV2ZW50cyA9IChldmVudHM6IE1JRElFdmVudFtdKTogTUlESUV2ZW50W10gPT5cbiAgZXZlbnRzLnNvcnQoKGE6IE1JRElFdmVudCwgYjogTUlESUV2ZW50KSA9PiB7XG4gICAgaWYgKGEudGlja3MgPCBiLnRpY2tzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChhLnRpY2tzID4gYi50aWNrcykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgICAvLyB9IGVsc2UgaWYgKGEudHlwZSA9PT0gMHg4MCAmJiBiLnR5cGUgPT09IDB4OTApIHtcbiAgICAgIC8vICAgLy8gbm90ZSBvZmYgYmVmb3JlIG5vdGUgb25cbiAgICAgIC8vICAgcmV0dXJuIC0xO1xuICAgICAgLy8gfSBlbHNlIGlmIChhLnR5cGUgPT09IDB4NTEgfHwgYS50eXBlID09PSAweDU4KSB7XG4gICAgICAvLyAgIC8vIHRlbXBvIGFuZCB0aW1lIHNpZ25hdHVyZSBldmVudHMgZmlyc3RcbiAgICAgIC8vICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVEb3VibGVFdmVudHMgPSAoZXZlbnRzOiBNSURJRXZlbnRbXSk6IE1JRElFdmVudFtdID0+IHtcbiAgLy8gdmFyIGksIG1heGkgPSBldmVudHMubGVuZ3RoLFxuICAvLyAgIGV2ZW50LCBldmVudElkLCBsYXN0SWQsXG4gIC8vICAgcmVzdWx0ID0gW107XG5cbiAgLy8gZXZlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgLy8gICByZXR1cm4gYS5ldmVudE51bWJlciAtIGIuZXZlbnROdW1iZXI7XG4gIC8vIH0pO1xuXG4gIC8vIGZvciAoaSA9IDA7IGkgPCBtYXhpOyBpKyspIHtcbiAgLy8gICBldmVudCA9IGV2ZW50c1tpXTtcbiAgLy8gICBldmVudElkID0gZXZlbnQuaWQ7XG4gIC8vICAgaWYgKGV2ZW50SWQgIT09IGxhc3RJZCkge1xuICAvLyAgICAgcmVzdWx0LnB1c2goZXZlbnQpO1xuICAvLyAgIH1cbiAgLy8gICBsYXN0SWQgPSBldmVudElkO1xuICAvLyB9XG4gIC8vIHJldHVybiByZXN1bHQ7XG4gIHJldHVybiBbXTtcbn07XG4iLCIvLyBiYXNlZCBvbjogaHR0cHM6Ly9naXRodWIuY29tL3ByYXZkb21pbC9qYXNtaWQudHNcblxuLy8gaW1wb3J0IHsgQnVmZmVyUmVhZGVyIH0gZnJvbSAnamFzbWlkLnRzJztcbmltcG9ydCB1bmlxdWlkIGZyb20gXCJ1bmlxaWRcIjtcbmltcG9ydCB7IEJ1ZmZlclJlYWRlciB9IGZyb20gXCIuL2J1ZmZlcnJlYWRlclwiO1xuaW1wb3J0IHsgTUlESUV2ZW50IH0gZnJvbSBcIi4vbWlkaV9ldmVudHNcIjtcbmltcG9ydCB7XG4gIFNFUVVFTkNFX05VTUJFUixcbiAgVEVYVCxcbiAgQ09QWVJJR0hUX05PVElDRSxcbiAgVFJBQ0tfTkFNRSxcbiAgSU5TVFJVTUVOVF9OQU1FLFxuICBMWVJJQ1MsXG4gIE1BUktFUixcbiAgQ1VFX1BPSU5ULFxuICBDSEFOTkVMX1BSRUZJWCxcbiAgRU5EX09GX1RSQUNLLFxuICBURU1QTyxcbiAgU01QVEVfT0ZGU0VULFxuICBUSU1FX1NJR05BVFVSRSxcbiAgS0VZX1NJR05BVFVSRSxcbiAgU0VRVUVOQ0VSX1NQRUNJRklDLFxuICBTWVNURU1fRVhDTFVTSVZFLFxuICBESVZJREVEX1NZU1RFTV9FWENMVVNJVkUsXG4gIE5PVEVfT04sXG4gIE5PVEVfT0ZGLFxuICBOT1RFX0FGVEVSVE9VQ0gsXG4gIENPTlRST0xMRVIsXG4gIFBST0dSQU1fQ0hBTkdFLFxuICBDSEFOTkVMX0FGVEVSVE9VQ0gsXG4gIFBJVENIX0JFTkQsXG4gIHNvcnRNSURJRXZlbnRzLFxufSBmcm9tIFwiLi9taWRpX3V0aWxzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVNaWxsaXMgfSBmcm9tIFwiLi9jYWxjdWxhdGVNaWxsaXNcIjtcbmltcG9ydCB7IFRyYWNrLCBTb25nIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZVRyYWNrIH0gZnJvbSBcIi4vc3VnYXJjb2F0aW5nL3RyYWNrXCI7XG5pbXBvcnQgeyBjcmVhdGVOb3RlcyB9IGZyb20gXCIuL2NyZWF0ZV9ub3Rlc1wiO1xuXG50eXBlIFBhcnNlZERhdGEgPSB7XG4gIGV2ZW50OiBhbnk7XG4gIGRlbHRhVGltZTogbnVtYmVyO1xuICBicG0/OiBudW1iZXI7XG4gIG51bWVyYXRvcj86IG51bWJlcjtcbiAgZGVub21pbmF0b3I/OiBudW1iZXI7XG4gIHRyYWNrTmFtZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1pZGlGaWxlKGJ1ZmZlcjogQXJyYXlCdWZmZXJMaWtlKTogU29uZyB7XG4gIGNvbnN0IHJlYWRlciA9IG5ldyBCdWZmZXJSZWFkZXIoYnVmZmVyKTtcblxuICBjb25zdCBoZWFkZXIgPSBwYXJzZUhlYWRlcihyZWFkZXIpO1xuICAvLyBjb25zdCB7IHRpbWVUcmFjaywgdHJhY2tzIH0gPSBwYXJzZVRyYWNrcyhyZWFkZXIsIGhlYWRlci50aWNrc1BlckJlYXQpXG4gIGNvbnN0IHsgdHJhY2tzLCBldmVudHMsIGluaXRpYWxUZW1wbywgaW5pdGlhbE51bWVyYXRvciwgaW5pdGlhbERlbm9taW5hdG9yIH0gPSBwYXJzZVRyYWNrcyhcbiAgICByZWFkZXIsXG4gICAgaGVhZGVyLnRpY2tzUGVyQmVhdFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHBxOiBoZWFkZXIudGlja3NQZXJCZWF0LFxuICAgIGxhdGVuY3k6IDE3LCAvLyB2YWx1ZSBpbiBtaWxsaXNlY29uZHMgLT4gdGhlIGxlbmd0aCBvZiBhIHNpbmdsZSBmcmFtZSBAIDYwSHogcmVmcmVzaCByYXRlXG4gICAgYnVmZmVyVGltZTogMTAwLCAvLyB2YWx1ZSBpbiBtaWxsaXNlY29uZHNcbiAgICB0cmFja3MsXG4gICAgdHJhY2tzQnlJZDogdHJhY2tzLnJlZHVjZSgoYWNjOiB7IFtpZDogc3RyaW5nXTogVHJhY2sgfSwgdmFsdWUpID0+IHtcbiAgICAgIGFjY1t2YWx1ZS5pZF0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pLFxuICAgIGV2ZW50czogY2FsY3VsYXRlTWlsbGlzKGV2ZW50cywge1xuICAgICAgcHBxOiBoZWFkZXIudGlja3NQZXJCZWF0LFxuICAgICAgYnBtOiBpbml0aWFsVGVtcG8sXG4gICAgfSksXG4gICAgbm90ZXM6IGNyZWF0ZU5vdGVzKGV2ZW50cyksXG4gICAgaW5pdGlhbFRlbXBvLFxuICAgIGluaXRpYWxOdW1lcmF0b3IsXG4gICAgaW5pdGlhbERlbm9taW5hdG9yLFxuICB9IGFzIFNvbmc7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHJlYWRlcjogQnVmZmVyUmVhZGVyKSB7XG4gIGNvbnN0IGhlYWRlckNodW5rID0gcmVhZGVyLm1pZGlDaHVuaygpO1xuICBpZiAoaGVhZGVyQ2h1bmsuaWQgIT09IFwiTVRoZFwiIHx8IGhlYWRlckNodW5rLmxlbmd0aCAhPT0gNikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkJhZCAubWlkIGZpbGUsIGhlYWRlciBub3QgZm91bmRcIik7XG4gIH1cblxuICBjb25zdCBoZWFkZXJSZWFkZXIgPSBuZXcgQnVmZmVyUmVhZGVyKGhlYWRlckNodW5rLmRhdGEpO1xuICBjb25zdCBmb3JtYXRUeXBlID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICBjb25zdCB0cmFja0NvdW50ID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICBjb25zdCB0aW1lRGl2aXNpb24gPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGlmICh0aW1lRGl2aXNpb24gJiAweDgwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHByZXNzaW5nIHRpbWUgZGl2aXNpb24gaW4gU01UUEUgZnJhbWVzIGlzIG5vdCBzdXBwb3J0ZWQgeWV0XCIpO1xuICB9XG4gIGNvbnN0IHRpY2tzUGVyQmVhdCA9IHRpbWVEaXZpc2lvbjtcblxuICByZXR1cm4geyBmb3JtYXRUeXBlLCB0cmFja0NvdW50LCB0aWNrc1BlckJlYXQgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUcmFja3MoXG4gIHJlYWRlcjogQnVmZmVyUmVhZGVyLFxuICBwcHE6IG51bWJlclxuKToge1xuICB0cmFja3M6IFRyYWNrW107XG4gIGV2ZW50czogTUlESUV2ZW50W107XG4gIGluaXRpYWxUZW1wbzogbnVtYmVyO1xuICBpbml0aWFsTnVtZXJhdG9yOiBudW1iZXI7XG4gIGluaXRpYWxEZW5vbWluYXRvcjogbnVtYmVyO1xufSB7XG4gIGxldCBpbml0aWFsVGVtcG8gPSAtMTtcbiAgbGV0IGluaXRpYWxOdW1lcmF0b3IgPSAtMTtcbiAgbGV0IGluaXRpYWxEZW5vbWluYXRvciA9IC0xO1xuICBjb25zdCB0cmFja3M6IFRyYWNrW10gPSBbXTtcbiAgY29uc3QgZXZlbnRzOiBNSURJRXZlbnRbXSA9IFtdO1xuICB3aGlsZSAoIXJlYWRlci5lb2YoKSkge1xuICAgIGNvbnN0IHRyYWNrQ2h1bmsgPSByZWFkZXIubWlkaUNodW5rKCk7XG5cbiAgICBpZiAodHJhY2tDaHVuay5pZCAhPT0gXCJNVHJrXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBjaHVuaywgZXhwZWN0ZWQgTVRyaywgZ290ICR7dHJhY2tDaHVuay5pZH1gKTtcbiAgICB9XG4gICAgY29uc3QgdHJhY2tJZCA9IGBULSR7dW5pcXVpZCgpfWA7XG4gICAgY29uc3QgdHJhY2sgPSBjcmVhdGVUcmFjayh0cmFja0lkKTtcbiAgICBjb25zdCB0cmFja1RyYWNrID0gbmV3IEJ1ZmZlclJlYWRlcih0cmFja0NodW5rLmRhdGEpO1xuICAgIGxldCB0aWNrcyA9IDA7XG4gICAgbGV0IGxhc3RUeXBlQnl0ZSA9IG51bGw7XG4gICAgd2hpbGUgKCF0cmFja1RyYWNrLmVvZigpKSB7XG4gICAgICBsZXQgZGF0YSA9IHBhcnNlRXZlbnQodHJhY2tUcmFjaywgbGFzdFR5cGVCeXRlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgY29uc3QgeyBldmVudCwgZGVsdGFUaW1lLCBicG0sIG51bWVyYXRvciwgZGVub21pbmF0b3IsIHRyYWNrTmFtZSB9ID0gZGF0YTtcbiAgICAgIGlmIChicG0gJiYgaW5pdGlhbFRlbXBvID09PSAtMSkge1xuICAgICAgICBpbml0aWFsVGVtcG8gPSBicG07XG4gICAgICB9XG4gICAgICBpZiAobnVtZXJhdG9yICYmIGluaXRpYWxOdW1lcmF0b3IgPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxOdW1lcmF0b3IgPSBudW1lcmF0b3I7XG4gICAgICB9XG4gICAgICBpZiAoZGVub21pbmF0b3IgJiYgaW5pdGlhbERlbm9taW5hdG9yID09PSAtMSkge1xuICAgICAgICBpbml0aWFsRGVub21pbmF0b3IgPSBkZW5vbWluYXRvcjtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFja05hbWUpIHtcbiAgICAgICAgdHJhY2submFtZSA9IHRyYWNrTmFtZTtcbiAgICAgIH1cbiAgICAgIHRpY2tzICs9IGRlbHRhVGltZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdUSUNLUycsIHRpY2tzLCBicG0sIG51bWVyYXRvcik7XG4gICAgICBsYXN0VHlwZUJ5dGUgPSBldmVudC50eXBlO1xuICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgdHJhY2tJZCxcbiAgICAgICAgdGlja3MsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdHJhY2tzLnB1c2godHJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBldmVudHM6IHNvcnRNSURJRXZlbnRzKGV2ZW50cyksXG4gICAgdHJhY2tzLFxuICAgIGluaXRpYWxUZW1wbyxcbiAgICBpbml0aWFsTnVtZXJhdG9yLFxuICAgIGluaXRpYWxEZW5vbWluYXRvcixcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFdmVudChyZWFkZXI6IEJ1ZmZlclJlYWRlciwgbGFzdFR5cGVCeXRlOiBudW1iZXIgfCBudWxsKTogUGFyc2VkRGF0YSB7XG4gIGNvbnN0IGRlbHRhVGltZSA9IHJlYWRlci5taWRpSW50KCk7XG4gIGxldCB0eXBlQnl0ZSA9IHJlYWRlci51aW50OCgpO1xuXG4gIC8vIG1ldGEgZXZlbnRzOiAweGZmXG4gIC8vIHN5c3RlbSBldmVudHM6IDB4ZjAsIDB4ZjdcbiAgLy8gbWlkaSBldmVudHM6IGFsbCBvdGhlciBieXRlc1xuXG4gIGlmICh0eXBlQnl0ZSA9PT0gMHhmZikge1xuICAgIGNvbnN0IHN1YlR5cGVCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgY29uc3QgbGVuZ3RoID0gcmVhZGVyLm1pZGlJbnQoKTtcblxuICAgIHN3aXRjaCAoc3ViVHlwZUJ5dGUpIHtcbiAgICAgIC8vIHNlcXVlbmNlIG51bWJlclxuICAgICAgY2FzZSAweDAwOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHNlcXVlbmNlTnVtYmVyIGV2ZW50IGlzIDIsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFNFUVVFTkNFX05VTUJFUixcbiAgICAgICAgICAgIG51bWJlcjogcmVhZGVyLnVpbnQxNigpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGV4dFxuICAgICAgY2FzZSAweDAxOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRFWFQsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjb3B5cmlnaHRcbiAgICAgIGNhc2UgMHgwMjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBDT1BZUklHSFRfTk9USUNFLFxuICAgICAgICAgICAgdGV4dDogcmVhZGVyLnN0cmluZyhsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdHJhY2sgbmFtZVxuICAgICAgY2FzZSAweDAzOlxuICAgICAgICBjb25zdCB0cmFja05hbWUgPSByZWFkZXIuc3RyaW5nKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogVFJBQ0tfTkFNRSxcbiAgICAgICAgICAgIHRleHQ6IHRyYWNrTmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgICB0cmFja05hbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBpbnN0cnVtZW50IG5hbWVcbiAgICAgIGNhc2UgMHgwNDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBJTlNUUlVNRU5UX05BTUUsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBseXJpY3NcbiAgICAgIGNhc2UgMHgwNTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBMWVJJQ1MsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBtYXJrZXJcbiAgICAgIGNhc2UgMHgwNjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBNQVJLRVIsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjdWUgcG9pbnRcbiAgICAgIGNhc2UgMHgwNzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBDVUVfUE9JTlQsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjaGFubmVsIHByZWZpeFxuICAgICAgY2FzZSAweDIwOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIG1pZGlDaGFubmVsUHJlZml4IGV2ZW50IGlzIDEsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENIQU5ORUxfUFJFRklYLFxuICAgICAgICAgICAgY2hhbm5lbDogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBlbmQgb2YgdHJhY2tcbiAgICAgIGNhc2UgMHgyZjpcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBlbmRPZlRyYWNrIGV2ZW50IGlzIDAsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICBkZXNjcjogRU5EX09GX1RSQUNLLFxuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHRlbXBvXG4gICAgICBjYXNlIDB4NTE6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc2V0VGVtcG8gZXZlbnQgaXMgMywgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1pY3Jvc2Vjb25kc1BlckJlYXQgPSAocmVhZGVyLnVpbnQ4KCkgPDwgMTYpICsgKHJlYWRlci51aW50OCgpIDw8IDgpICsgcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIGNvbnN0IGJwbSA9IDYwMDAwMDAwIC8gbWljcm9zZWNvbmRzUGVyQmVhdDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBURU1QTyxcbiAgICAgICAgICAgIGJwbSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJwbSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBzbXB0ZSBvZmZzZXRcbiAgICAgIGNhc2UgMHg1NDpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSA1KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHNtcHRlT2Zmc2V0IGV2ZW50IGlzIDUsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBob3VyQnl0ZSA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFNNUFRFX09GRlNFVCxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogZ2V0RnJhbWVSYXRlKGhvdXJCeXRlKSxcbiAgICAgICAgICAgIGhvdXI6IGhvdXJCeXRlICYgMHgxZixcbiAgICAgICAgICAgIG1pbjogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBzZWM6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgZnJhbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgc3ViRnJhbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGltZSBzaWduYXR1cmVcbiAgICAgIGNhc2UgMHg1ODpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSA0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHRpbWVTaWduYXR1cmUgZXZlbnQgaXMgNCwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG51bWVyYXRvciA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICBjb25zdCBkZW5vbWluYXRvciA9IE1hdGgucG93KDIsIHJlYWRlci51aW50OCgpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBUSU1FX1NJR05BVFVSRSxcbiAgICAgICAgICAgIG51bWVyYXRvcixcbiAgICAgICAgICAgIGRlbm9taW5hdG9yLFxuICAgICAgICAgICAgbWV0cm9ub21lOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICAgIHRoaXJ0eVNlY29uZHM6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbnVtZXJhdG9yLFxuICAgICAgICAgIGRlbm9taW5hdG9yLFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGtleSBzaWduYXR1cmVcbiAgICAgIGNhc2UgMHg1OTpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIGtleVNpZ25hdHVyZSBldmVudCBpcyAyLCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBLRVlfU0lHTkFUVVJFLFxuICAgICAgICAgICAga2V5OiByZWFkZXIuaW50OCgpLFxuICAgICAgICAgICAgc2NhbGU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gc2VxdWVuY2VyIHNwZWNpZmljXG4gICAgICBjYXNlIDB4N2Y6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU0VRVUVOQ0VSX1NQRUNJRklDLFxuICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHVuZGVmaW5lZFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBcInVuZGVmaW5lZFwiLFxuICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZUJ5dGUgPT09IDB4ZjApIHtcbiAgICAvLyBzeXN0ZW0gZXhjbHVzaXZlXG4gICAgY29uc3QgbGVuZ3RoID0gcmVhZGVyLm1pZGlJbnQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQ6IHtcbiAgICAgICAgdHlwZTogMHhmMCxcbiAgICAgICAgZGVzY3I6IFNZU1RFTV9FWENMVVNJVkUsXG4gICAgICAgIGRhdGE6IHJlYWRlci5yZWFkKGxlbmd0aCksXG4gICAgICB9LFxuICAgICAgZGVsdGFUaW1lLFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZUJ5dGUgPT09IDB4ZjcpIHtcbiAgICAvLyBkaXZpZGVkIHN5c3RlbSBleGNsdXNpdmVcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDoge1xuICAgICAgICB0eXBlOiAweGYwLFxuICAgICAgICBkZXNjcjogRElWSURFRF9TWVNURU1fRVhDTFVTSVZFLFxuICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgfSxcbiAgICAgIGRlbHRhVGltZSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8qKlxuICAgICAqIHJ1bm5pbmcgc3RhdHVzIC0gcmV1c2UgbGFzdEV2ZW50VHlwZUJ5dGUgYXMgdGhlIGV2ZW50IHR5cGVcbiAgICAgKiB0eXBlQnl0ZSBpcyBhY3R1YWxseSB0aGUgZmlyc3QgcGFyYW1ldGVyXG4gICAgICovXG4gICAgY29uc3QgaXNSdW5uaW5nU3RhdHVzID0gKHR5cGVCeXRlICYgMGIxMDAwMDAwMCkgPT09IDA7XG4gICAgY29uc3QgdmFsdWUgPSBpc1J1bm5pbmdTdGF0dXMgPyB0eXBlQnl0ZSA6IHJlYWRlci51aW50OCgpO1xuICAgIHR5cGVCeXRlID0gaXNSdW5uaW5nU3RhdHVzID8gKGxhc3RUeXBlQnl0ZSA9PT0gbnVsbCA/IDAgOiBsYXN0VHlwZUJ5dGUpIDogdHlwZUJ5dGU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhpc1J1bm5pbmdTdGF0dXMsIHR5cGVCeXRlLCB2YWx1ZSk7XG5cbiAgICBjb25zdCBjaGFubmVsID0gdHlwZUJ5dGUgJiAweDBmO1xuICAgIC8vIGNoYW5uZWxzW2NoYW5uZWxdID0gdHJ1ZTtcblxuICAgIHN3aXRjaCAodHlwZUJ5dGUgPj4gNCkge1xuICAgICAgLy8gbm90ZSBvZmZcbiAgICAgIGNhc2UgMHgwODpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHg4MCxcbiAgICAgICAgICAgIGRlc2NyOiBOT1RFX09GRixcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIG5vdGUgb25cbiAgICAgIGNhc2UgMHgwOTpcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSByZWFkZXIudWludDgoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdmVsb2NpdHkgPT09IDAgPyAweDgwIDogMHg5MCxcbiAgICAgICAgICAgIGRlc2NyOiB2ZWxvY2l0eSA9PT0gMCA/IE5PVEVfT0ZGIDogTk9URV9PTixcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgIHZlbG9jaXR5LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gbm90ZSBhZnRlcnRvdWNoXG4gICAgICBjYXNlIDB4MGE6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4YTAsXG4gICAgICAgICAgICBkZXNjcjogTk9URV9BRlRFUlRPVUNILFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgYW1vdW50OiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNvbnRyb2xsZXJcbiAgICAgIGNhc2UgMHgwYjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhiMCxcbiAgICAgICAgICAgIGRlc2NyOiBDT05UUk9MTEVSLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gcHJvZ3JhbSBjaGFuZ2VcbiAgICAgIGNhc2UgMHgwYzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhjMCxcbiAgICAgICAgICAgIGRlc2NyOiBQUk9HUkFNX0NIQU5HRSxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBwcm9ncmFtOiB2YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNoYW5uZWwgYWZ0ZXJ0b3VjaFxuICAgICAgY2FzZSAweDBkOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGQwLFxuICAgICAgICAgICAgZGVzY3I6IENIQU5ORUxfQUZURVJUT1VDSCxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBhbW91bnQ6IHZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gcGl0Y2ggYmVuZFxuICAgICAgY2FzZSAweDBlOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGUwLFxuICAgICAgICAgICAgZGVzY3I6IFBJVENIX0JFTkQsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlICsgKHJlYWRlci51aW50OCgpIDw8IDcpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuXG4gICAgICAvLyBkZWZhdWx0OlxuICAgICAgLy8gICByZXR1cm4ge1xuICAgICAgLy8gICAgIGV2ZW50OiB7XG4gICAgICAvLyAgICAgICB0eXBlOiB0eXBlQnl0ZSA+PiA0LFxuICAgICAgLy8gICAgICAgZGVzY3I6IFwidW5yZWNvZ25pemVkXCIsXG4gICAgICAvLyAgICAgICBjaGFubmVsLFxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAgZGVsdGFUaW1lLFxuICAgICAgLy8gICB9O1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhgVW5yZWNvZ25pemVkIE1JREkgZXZlbnQgdHlwZSBieXRlOiAke3R5cGVCeXRlfSAoZml4IHRoaXMpYCk7XG4gIHJldHVybiB7XG4gICAgZXZlbnQ6IHtcbiAgICAgIHR5cGU6IHR5cGVCeXRlID09PSAyNTUgPyAwIDogdHlwZUJ5dGUsXG4gICAgfSxcbiAgICBkZWx0YVRpbWUsXG4gIH07XG4gIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIE1JREkgZXZlbnQgdHlwZSBieXRlOiAke3R5cGVCeXRlfWApO1xufVxuXG5mdW5jdGlvbiBnZXRGcmFtZVJhdGUoaG91ckJ5dGU6IG51bWJlcikge1xuICBzd2l0Y2ggKGhvdXJCeXRlICYgMGIxMTAwMDAwKSB7XG4gICAgY2FzZSAweDAwOlxuICAgICAgcmV0dXJuIDI0O1xuICAgIGNhc2UgMHgyMDpcbiAgICAgIHJldHVybiAyNTtcbiAgICBjYXNlIDB4NDA6XG4gICAgICByZXR1cm4gMjk7XG4gICAgY2FzZSAweDYwOlxuICAgICAgcmV0dXJuIDMwO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBNSURJRXZlbnQsIE5vdGVPbkV2ZW50IH0gZnJvbSBcIi4vbWlkaV9ldmVudHNcIjtcbmltcG9ydCB7IE5PVEVfT04sIE5PVEVfT0ZGIH0gZnJvbSBcIi4vbWlkaV91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudEV2ZW50SW5kZXggPSAoc29uZzogU29uZywgbWlsbGlzOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICBjb25zdCB7IGV2ZW50cyB9ID0gc29uZztcbiAgbGV0IGkgPSAwO1xuICBmb3IgKDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2ldO1xuICAgIGlmICghZXZlbnQubWlsbGlzIHx8IGV2ZW50Lm1pbGxpcyA+PSBtaWxsaXMpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaTtcbn07XG5cbnR5cGUgQXJncyA9IHtcbiAgc29uZzogU29uZztcbiAgbWlsbGlzOiBudW1iZXI7XG4gIGluZGV4OiBudW1iZXI7XG4gIG91dHB1dHM/OiBXZWJNaWRpLk1JRElPdXRwdXRNYXA7XG59O1xuZXhwb3J0IGNvbnN0IHNjaGVkdWxlID0gKHtcbiAgc29uZyxcbiAgaW5kZXgsXG4gIG1pbGxpcyxcbiAgb3V0cHV0cyxcbn06IEFyZ3MpOiB7IG1pbGxpczogbnVtYmVyOyBpbmRleDogbnVtYmVyOyBzY2hlZHVsZWQ6IE1JRElFdmVudFtdIH0gPT4ge1xuICBjb25zdCB0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBjb25zdCB7IGV2ZW50cyB9ID0gc29uZztcbiAgY29uc3Qgc2NoZWR1bGVkID0gW107XG4gIC8vIGxldCBsYXN0Tm90ZU51bWJlcjogbnVtYmVyID0gLTE7XG4gIC8vIGxldCBsYXN0Tm90ZVR5cGU6IG51bWJlciA9IC0xO1xuICB3aGlsZSAoaW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaW5kZXhdO1xuICAgIGlmICghZXZlbnQubWlsbGlzIHx8ICFldmVudC50cmFja0lkKSB7XG4gICAgICAvLyBicmVhaztcbiAgICAgIGluZGV4Kys7XG4gICAgfSBlbHNlIGlmIChldmVudC5taWxsaXMgPCBtaWxsaXMgKyBzb25nLmJ1ZmZlclRpbWUpIHtcbiAgICAgIHNjaGVkdWxlZC5wdXNoKGV2ZW50KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRpY2tzLCBldmVudC5kZXNjciwgKGV2ZW50IGFzIE5vdGVPbkV2ZW50KS5ub3RlTnVtYmVyKTtcbiAgICAgIGNvbnN0IHRyYWNrID0gc29uZy50cmFja3NCeUlkW2V2ZW50LnRyYWNrSWRdO1xuICAgICAgdHJhY2sub3V0cHV0cy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRlc2NyID09PSBOT1RFX09OIHx8IGV2ZW50LmRlc2NyID09PSBOT1RFX09GRikge1xuICAgICAgICAgIGNvbnN0IGUgPSBldmVudCBhcyBOb3RlT25FdmVudDtcbiAgICAgICAgICBpZiAoZXZlbnQubWlsbGlzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50eXBlLCBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyKTtcbiAgICAgICAgICAgIGxldCB0aW1lID0gdHMgKyBzb25nLmxhdGVuY3kgKyB0cmFjay5sYXRlbmN5ICsgKGV2ZW50Lm1pbGxpcyAtIG1pbGxpcyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFtcIm5vdGVOdW1iZXJcIl0sIGV2ZW50LmRlc2NyLCBldmVudC5taWxsaXMsIG1pbGxpcywgdGltZSwgdHMsIHRpbWUgLSB0cyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLm5vdGVOdW1iZXIsIGxhc3ROb3RlTnVtYmVyLCBsYXN0Tm90ZVR5cGUpO1xuICAgICAgICAgICAgLy8gaWYgKGUubm90ZU51bWJlciA9PT0gbGFzdE5vdGVOdW1iZXIgJiYgbGFzdE5vdGVUeXBlID09PSAweDkwKSB7XG4gICAgICAgICAgICAvLyAgIGlmIChlLmRlc2NyID09PSBOT1RFX09OKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZXBlYXRpbmcgbm90ZXNcIik7XG4gICAgICAgICAgICAvLyAgICAgdGltZSArPSAxO1xuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBsYXN0Tm90ZU51bWJlciA9IGUubm90ZU51bWJlcjtcbiAgICAgICAgICAgIC8vIGxhc3ROb3RlVHlwZSA9IGUudHlwZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnR5cGUgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eSk7XG4gICAgICAgICAgICAvLyBxdWljayBmaXggZm9yIHJlcGVhdGluZyBub3Rlc1xuICAgICAgICAgICAgaWYgKGUuZGVzY3IgPT09IE5PVEVfT04pIHtcbiAgICAgICAgICAgICAgdGltZSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0c1xuICAgICAgICAgICAgICA/LmdldChpZClcbiAgICAgICAgICAgICAgPy5zZW5kKFtldmVudC50eXBlICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHldLCB0aW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKCdbU0NIRURVTEVEXScsIHNjaGVkdWxlZC5tYXAoZSA9PiBbZS50aWNrcywgZS5taWxsaXNdKSk7XG4gIHJldHVybiB7IG1pbGxpcywgaW5kZXgsIHNjaGVkdWxlZCB9O1xufTtcbiIsImltcG9ydCB7IGZldGNoQXJyYXlidWZmZXIgfSBmcm9tIFwiLi4vZmV0Y2hfaGVscGVyc1wiO1xuaW1wb3J0IHsgcGFyc2VNaWRpRmlsZSB9IGZyb20gXCIuLi9wYXJzZV9taWRpX2JpbmFyeVwiO1xuaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU29uZ0Zyb21NSURJRmlsZSA9IGFzeW5jIChhcmc6IHN0cmluZyB8IEFycmF5QnVmZmVyKTogUHJvbWlzZTxTb25nPiA9PiB7XG4gIGxldCBhYjogQXJyYXlCdWZmZXI7XG4gIGlmICh0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKSB7XG4gICAgYWIgPSBhd2FpdCBmZXRjaEFycmF5YnVmZmVyKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgYWIgPSBhcmc7XG4gIH1cbiAgLy8gY29uc3QgeyBoZWFkZXIsIHRpbWVUcmFjaywgdHJhY2tzIH0gPSBwYXJzZU1pZGlGaWxlKGFiKTtcbiAgcmV0dXJuIHBhcnNlTWlkaUZpbGUoYWIpO1xufTtcbiIsImltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRUcmFja091dHB1dCA9ICh7IHRyYWNrLCBvdXRwdXQgfTogeyB0cmFjazogVHJhY2s7IG91dHB1dDogc3RyaW5nIH0pID0+IHtcbiAgdHJhY2sub3V0cHV0cy5wdXNoKG91dHB1dCk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhY2sgPSAoaWQ6IHN0cmluZyk6IFRyYWNrID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBsYXRlbmN5OiAwLFxuICAgIGlucHV0czogW10sXG4gICAgb3V0cHV0czogW10sXG4gIH07XG59O1xuIiwiLy8gaW1wb3J0IFwianp6XCI7XG5pbXBvcnQgeyBzY2hlZHVsZSwgZ2V0Q3VycmVudEV2ZW50SW5kZXggfSBmcm9tIFwiLi4vLi4vc3JjL3NjaGVkdWxlclwiO1xuaW1wb3J0IHsgZ2V0TUlESUFjY2VzcywgZ2V0TUlESURldmljZXMgfSBmcm9tIFwiLi4vLi4vc3JjL2luaXQtbWlkaVwiO1xuaW1wb3J0IHsgY3JlYXRlU29uZ0Zyb21NSURJRmlsZSB9IGZyb20gXCIuLi8uLi9zcmMvc3VnYXJjb2F0aW5nL2NyZWF0ZVNvbmdGcm9tTUlESUZpbGVcIjtcblxuY29uc3QgdXJsID0gXCIuLi8uLi9hc3NldHMvbWludXRlX3dhbHR6Lm1pZFwiO1xuLy8gY29uc3QgdXJsID0gJy9hc3NldHMvbW96azU0NWEubWlkJztcbi8vIGNvbnN0IHVybCA9ICcvYXNzZXRzL21vems1NDVhX211c2VzY29yZS5taWQnO1xuXG5jb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtYSA9IGF3YWl0IGdldE1JRElBY2Nlc3MoKTtcbiAgY29uc3Qgc29uZyA9IGF3YWl0IGNyZWF0ZVNvbmdGcm9tTUlESUZpbGUodXJsKTtcbiAgY29uc3QgeyBpbnB1dHMsIG91dHB1dHMgfSA9IGF3YWl0IGdldE1JRElEZXZpY2VzKCk7XG4gIHNvbmcudHJhY2tzLmZvckVhY2godHJhY2sgPT4ge1xuICAgIHRyYWNrLm91dHB1dHMucHVzaCguLi5vdXRwdXRzLm1hcChvID0+IG8uaWQpKTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHNvbmcpO1xuXG4gIGxldCBtaWxsaXMgPSAzMDAwO1xuICBsZXQgaW5kZXggPSBnZXRDdXJyZW50RXZlbnRJbmRleChzb25nLCBtaWxsaXMpO1xuICAvLyBjb25zb2xlLmxvZygnU1RBUlQgSU5ERVgnLCBpbmRleCk7XG4gIGxldCBzdGFydDogbnVtYmVyID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGNvbnN0IHBsYXkgPSAoYTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdHMgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0cywgYSk7XG4gICAgLy8gY29uc3QgcHJvZ3Jlc3MgPSB0cyAtIGE7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSB0cyAtIHN0YXJ0O1xuICAgIHN0YXJ0ID0gdHM7XG4gICAgLy8gY29uc3QgcHJvZ3Jlc3MgPSBhIC0gc3RhcnQ7XG4gICAgLy8gc3RhcnQgPSBhO1xuICAgIGlmIChtaWxsaXMgPCAxMDAwMCkge1xuICAgICAgKHsgaW5kZXgsIG1pbGxpcyB9ID0gc2NoZWR1bGUoe1xuICAgICAgICBzb25nLFxuICAgICAgICBtaWxsaXMsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBvdXRwdXRzOiBtYT8ub3V0cHV0cyxcbiAgICAgIH0pKTtcbiAgICAgIG1pbGxpcyArPSBwcm9ncmVzcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4LCBtaWxsaXMpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGEgPT4ge1xuICAgICAgICBwbGF5KGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBwbGF5KHN0YXJ0KTtcbn07XG5cbmluaXQoKTtcblxuLy8gZmV0Y2godXJsKVxuLy8gICAudGhlbihhcnJheUJ1ZmZlcilcbi8vICAgLnRoZW4oYWIgPT4ge1xuLy8gICAgIGNvbnN0IHsgaGVhZGVyLCB0cmFja3MgfSA9IHBhcnNlTWlkaUZpbGUoYWIpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRyYWNrcyk7XG4vLyAgIH0pO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./tests/basic/index.ts");
/******/ })
/************************************************************************/
/******/ ({

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


/***/ }),

/***/ "./src/bufferreader.ts":
/*!*****************************!*\
  !*** ./src/bufferreader.ts ***!
  \*****************************/
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

/***/ "./src/calculateMillis.ts":
/*!********************************!*\
  !*** ./src/calculateMillis.ts ***!
  \********************************/
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

/***/ "./src/create_notes.ts":
/*!*****************************!*\
  !*** ./src/create_notes.ts ***!
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

/***/ "./src/fetch_helpers.ts":
/*!******************************!*\
  !*** ./src/fetch_helpers.ts ***!
  \******************************/
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

/***/ "./src/init-midi.ts":
/*!**************************!*\
  !*** ./src/init-midi.ts ***!
  \**************************/
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
                if (midiAccess !== null && typeof midiAccess !== 'undefined') {
                    return [2 /*return*/, Promise.resolve(midiAccess)];
                }
                if (!navigator.requestMIDIAccess) {
                    midiAccess = null;
                    console.log('WebMIDI not supported');
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
                    console.log('Firefox WebMIDI API support is still in progress');
                    return [2 /*return*/, null];
                }
                midiAccess = ma;
                return [2 /*return*/, ma];
            case 3:
                e_1 = _a.sent();
                console.log('MIDI could not be initialized:', e_1);
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
                if (!(typeof midiAccess === 'undefined')) return [3 /*break*/, 2];
                return [4 /*yield*/, exports.getMIDIAccess()];
            case 1:
                midiAccess = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                if (midiAccess !== null) {
                    midiAccess.inputs.forEach(function (i) { inputs.push(i); });
                    midiAccess.outputs.forEach(function (o) { outputs.push(o); });
                }
                _a.label = 3;
            case 3:
                console.log(inputs, outputs);
                return [2 /*return*/, { inputs: inputs, outputs: outputs }];
        }
    });
}); };


/***/ }),

/***/ "./src/midi_utils.ts":
/*!***************************!*\
  !*** ./src/midi_utils.ts ***!
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

/***/ "./src/node_modules/uniqid/index.js":
/*!******************************************!*\
  !*** ./src/node_modules/uniqid/index.js ***!
  \******************************************/
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/parse_midi_binary.ts":
/*!**********************************!*\
  !*** ./src/parse_midi_binary.ts ***!
  \**********************************/
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
var uniqid_1 = __importDefault(__webpack_require__(/*! uniqid */ "./src/node_modules/uniqid/index.js"));
var bufferreader_1 = __webpack_require__(/*! ./bufferreader */ "./src/bufferreader.ts");
var midi_utils_1 = __webpack_require__(/*! ./midi_utils */ "./src/midi_utils.ts");
var calculateMillis_1 = __webpack_require__(/*! ./calculateMillis */ "./src/calculateMillis.ts");
var sugar_coating_1 = __webpack_require__(/*! ./sugar_coating */ "./src/sugar_coating.ts");
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

/***/ "./src/scheduler.ts":
/*!**************************!*\
  !*** ./src/scheduler.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.schedule = exports.getCurrentEventIndex = void 0;
var midi_utils_1 = __webpack_require__(/*! ./midi_utils */ "./src/midi_utils.ts");
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

/***/ "./src/sugar_coating.ts":
/*!******************************!*\
  !*** ./src/sugar_coating.ts ***!
  \******************************/
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
var fetch_helpers_1 = __webpack_require__(/*! ./fetch_helpers */ "./src/fetch_helpers.ts");
var parse_midi_binary_1 = __webpack_require__(/*! ./parse_midi_binary */ "./src/parse_midi_binary.ts");
var create_notes_1 = __webpack_require__(/*! ./create_notes */ "./src/create_notes.ts");
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

/***/ "./tests/basic/index.ts":
/*!******************************!*\
  !*** ./tests/basic/index.ts ***!
  \******************************/
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
var scheduler_1 = __webpack_require__(/*! ../../src/scheduler */ "./src/scheduler.ts");
var init_midi_1 = __webpack_require__(/*! ../../src/init-midi */ "./src/init-midi.ts");
var sugar_coating_1 = __webpack_require__(/*! ../../src/sugar_coating */ "./src/sugar_coating.ts");
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnVmZmVycmVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jYWxjdWxhdGVNaWxsaXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZV9ub3Rlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmV0Y2hfaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdC1taWRpLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRpX3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvdW5pcWlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJzZV9taWRpX2JpbmFyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZWR1bGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdWdhcl9jb2F0aW5nLnRzIiwid2VicGFjazovLy8uL3Rlc3RzL2Jhc2ljL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxhQUFhO0FBQ3pELDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFC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Q0EsbUJBQW1CLE1BQU0sZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsK0NBQXFCO0FBQy9DLGtCQUFrQixtQkFBTyxDQUFDLCtDQUFxQjtBQUMvQyxzQkFBc0IsbUJBQU8sQ0FBQyx1REFBeUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsYUFBYSxFQUFFO0FBQzFHLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQSxNQUFNIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90ZXN0cy9iYXNpYy9pbmRleC50c1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9wcmF2ZG9taWwvamFzbWlkLnRzXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJ1ZmZlclJlYWRlciA9IHZvaWQgMDtcbnZhciBCdWZmZXJSZWFkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnVmZmVyUmVhZGVyKGJ1ZmZlcikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gICAgfVxuICAgIEJ1ZmZlclJlYWRlci5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5kYXRhLmJ1ZmZlci5zbGljZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uICsgbGVuZ3RoKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiArPSBsZW5ndGg7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIEJ1ZmZlclJlYWRlci5wcm90b3R5cGUuaW50OCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5kYXRhLmdldEludDgodGhpcy5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgQnVmZmVyUmVhZGVyLnByb3RvdHlwZS51aW50OCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5kYXRhLmdldFVpbnQ4KHRoaXMucG9zaXRpb24pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIEJ1ZmZlclJlYWRlci5wcm90b3R5cGUudWludDE2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0VWludDE2KHRoaXMucG9zaXRpb24pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uICs9IDI7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIEJ1ZmZlclJlYWRlci5wcm90b3R5cGUudWludDMyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0VWludDMyKHRoaXMucG9zaXRpb24pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uICs9IDQ7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIEJ1ZmZlclJlYWRlci5wcm90b3R5cGUuc3RyaW5nID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKFwiYXNjaWlcIikuZGVjb2RlKHRoaXMucmVhZChsZW5ndGgpKTtcbiAgICB9O1xuICAgIEJ1ZmZlclJlYWRlci5wcm90b3R5cGUuZW9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA+PSB0aGlzLmRhdGEuYnl0ZUxlbmd0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlYWQgYSBNSURJLXN0eWxlIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyLlxuICAgICAqIChiaWctZW5kaWFuIHZhbHVlIGluIGdyb3VwcyBvZiA3IGJpdHMsIHdpdGggdG9wIGJpdCBzZXQgdG8gc2lnbmlmeSB0aGF0IGFub3RoZXIgYnl0ZSBmb2xsb3dzKVxuICAgICAqL1xuICAgIEJ1ZmZlclJlYWRlci5wcm90b3R5cGUubWlkaUludCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnVpbnQ4KCk7XG4gICAgICAgICAgICBpZiAodmFsdWUgJiAxMjgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gdmFsdWUgJiAxMjc7XG4gICAgICAgICAgICAgICAgcmVzdWx0IDw8PSA3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBCdWZmZXJSZWFkZXIucHJvdG90eXBlLm1pZGlDaHVuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5zdHJpbmcoNCk7XG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLnVpbnQzMigpO1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucmVhZChsZW5ndGgpO1xuICAgICAgICByZXR1cm4geyBpZDogaWQsIGxlbmd0aDogbGVuZ3RoLCBkYXRhOiBkYXRhIH07XG4gICAgfTtcbiAgICByZXR1cm4gQnVmZmVyUmVhZGVyO1xufSgpKTtcbmV4cG9ydHMuQnVmZmVyUmVhZGVyID0gQnVmZmVyUmVhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNhbGN1bGF0ZU1pbGxpcyA9IHZvaWQgMDtcbmV4cG9ydHMuY2FsY3VsYXRlTWlsbGlzID0gZnVuY3Rpb24gKGV2ZW50cywgZGF0YSkge1xuICAgIHZhciBwcHEgPSBkYXRhLnBwcSwgX2EgPSBkYXRhLmJwbSwgYnBtID0gX2EgPT09IHZvaWQgMCA/IC0xIDogX2EsIF9iID0gZGF0YS5wbGF5YmFja1NwZWVkLCBwbGF5YmFja1NwZWVkID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYjtcbiAgICB2YXIgbWlsbGlzUGVyVGljayA9IGJwbSA9PT0gLTEgPyAwIDogKCgoMSAvIHBsYXliYWNrU3BlZWQpICogNjApIC8gYnBtIC8gcHBxKSAqIDEwMDA7XG4gICAgdmFyIHRpY2tzID0gMDtcbiAgICB2YXIgbWlsbGlzID0gMDtcbiAgICAvLyBjb25zb2xlLmxvZyhcImJwbVwiLCBicG0sIG1pbGxpcyk7XG4gICAgcmV0dXJuIGV2ZW50cy5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5icG0pIHtcbiAgICAgICAgICAgIChicG0gPSBldmVudC5icG0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJicG1cIiwgYnBtLCBtaWxsaXMpO1xuICAgICAgICAgICAgbWlsbGlzUGVyVGljayA9ICgoKDEgLyBwbGF5YmFja1NwZWVkKSAqIDYwKSAvIGJwbSAvIHBwcSkgKiAxMDAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaWZmVGlja3MgPSBldmVudC50aWNrcyAtIHRpY2tzO1xuICAgICAgICBtaWxsaXMgKz0gZGlmZlRpY2tzICogbWlsbGlzUGVyVGljaztcbiAgICAgICAgZXZlbnQubWlsbGlzID0gbWlsbGlzO1xuICAgICAgICB0aWNrcyA9IGV2ZW50LnRpY2tzO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZU5vdGVzID0gdm9pZCAwO1xudmFyIGluZGV4ID0gMDtcbmV4cG9ydHMuY3JlYXRlTm90ZXMgPSBmdW5jdGlvbiAoZXZlbnRzKSB7XG4gICAgdmFyIGZpbHRlcmVkID0gZXZlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2YWwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsLnR5cGUpO1xuICAgICAgICBpZiAodmFsLnR5cGUgPT09IDB4ODAgfHwgdmFsLnR5cGUgPT09IDB4OTApIHtcbiAgICAgICAgICAgIGFjYy5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgLy8gZmlsdGVyZWQgPSBzb3J0TUlESUV2ZW50cyhmaWx0ZXJlZCk7XG4gICAgdmFyIG5vdGVzID0gW107XG4gICAgdmFyIHRtcCA9IHt9O1xuICAgIGZpbHRlcmVkLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGlkID0gZS50cmFja0lkICsgXCItXCIgKyBlLm5vdGVOdW1iZXI7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGlja3MsIGUudHlwZSwgaWQpO1xuICAgICAgICBpZiAoZS50eXBlID09PSAweDkwKSB7XG4gICAgICAgICAgICBpZiAodG1wW2lkXSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2Fybihgbm90ZSBleGlzdGVkIGFscmVhZHkhICR7aWR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXBbaWRdID0gZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLnR5cGUgPT09IDB4ODApIHtcbiAgICAgICAgICAgIGlmICghdG1wW2lkXSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2Fybihgbm90ZSBkb2Vzbid0IGV4aXN0ISAke2lkfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vdGVPbiA9IHRtcFtpZF07XG4gICAgICAgICAgICAgICAgdmFyIG5vdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIm5vdGUtXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIFwiLVwiICsgaW5kZXgrKyxcbiAgICAgICAgICAgICAgICAgICAgbm90ZU9uOiBub3RlT24sXG4gICAgICAgICAgICAgICAgICAgIG5vdGVPZmY6IGUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBub3Rlcy5wdXNoKG5vdGUpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0bXBbaWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2cobm90ZXMpO1xuICAgIHJldHVybiBub3Rlcztcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIGZldGNoIGhlbHBlcnNcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZldGNoQXJyYXlidWZmZXIgPSBleHBvcnRzLmZldGNoSlNPTiA9IGV4cG9ydHMuYXJyYXlCdWZmZXIgPSBleHBvcnRzLmpzb24gPSBleHBvcnRzLnN0YXR1cyA9IHZvaWQgMDtcbmZ1bmN0aW9uIHN0YXR1cyhyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG59XG5leHBvcnRzLnN0YXR1cyA9IHN0YXR1cztcbmZ1bmN0aW9uIGpzb24ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuZXhwb3J0cy5qc29uID0ganNvbjtcbmZ1bmN0aW9uIGFycmF5QnVmZmVyKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG59XG5leHBvcnRzLmFycmF5QnVmZmVyID0gYXJyYXlCdWZmZXI7XG5mdW5jdGlvbiBmZXRjaEpTT04odXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vICAgbW9kZTogJ25vLWNvcnMnXG4gICAgICAgIC8vIH0pXG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHN0YXR1cylcbiAgICAgICAgICAgIC50aGVuKGpzb24pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hKU09OID0gZmV0Y2hKU09OO1xuZnVuY3Rpb24gZmV0Y2hBcnJheWJ1ZmZlcih1cmwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXNwb25zZSwgcmVzcG9uc2VfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2godXJsKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc3RhdHVzKHJlc3BvbnNlKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYXJyYXlCdWZmZXIocmVzcG9uc2VfMSldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hBcnJheWJ1ZmZlciA9IGZldGNoQXJyYXlidWZmZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldE1JRElEZXZpY2VzID0gZXhwb3J0cy5nZXRNSURJQWNjZXNzID0gdm9pZCAwO1xudmFyIG1pZGlBY2Nlc3M7XG5leHBvcnRzLmdldE1JRElBY2Nlc3MgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBtYSwgZV8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmIChtaWRpQWNjZXNzICE9PSBudWxsICYmIHR5cGVvZiBtaWRpQWNjZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgUHJvbWlzZS5yZXNvbHZlKG1pZGlBY2Nlc3MpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbWlkaUFjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXZWJNSURJIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVzb2x2ZShudWxsKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2VzcygpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBtYSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyBtaWRpQWNjZXNzLm9uc3RhdGVjaGFuZ2UgPSAoZTogV2ViTWlkaS5NSURJQ29ubmVjdGlvbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICBpZiAoIW1hLmlucHV0cyB8fCAhbWEub3V0cHV0cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmlyZWZveCBXZWJNSURJIEFQSSBzdXBwb3J0IGlzIHN0aWxsIGluIHByb2dyZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWlkaUFjY2VzcyA9IG1hO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBtYV07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNSURJIGNvdWxkIG5vdCBiZSBpbml0aWFsaXplZDonLCBlXzEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydHMuZ2V0TUlESURldmljZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dHMsIG91dHB1dHM7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaW5wdXRzID0gW107XG4gICAgICAgICAgICAgICAgb3V0cHV0cyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiBtaWRpQWNjZXNzID09PSAndW5kZWZpbmVkJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGV4cG9ydHMuZ2V0TUlESUFjY2VzcygpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBtaWRpQWNjZXNzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmIChtaWRpQWNjZXNzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pZGlBY2Nlc3MuaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGkpIHsgaW5wdXRzLnB1c2goaSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICBtaWRpQWNjZXNzLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbiAobykgeyBvdXRwdXRzLnB1c2gobyk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5wdXRzLCBvdXRwdXRzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgeyBpbnB1dHM6IGlucHV0cywgb3V0cHV0czogb3V0cHV0cyB9XTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVtb3ZlRG91YmxlRXZlbnRzID0gZXhwb3J0cy5zb3J0TUlESUV2ZW50cyA9IGV4cG9ydHMuZ2V0Tm90ZU51bWJlciA9IGV4cG9ydHMuZ2V0TWlkaU1lc3NhZ2VFdmVudCA9IGV4cG9ydHMuZ2V0TWlkaUV2ZW50RGVzY3JpcHRpb24gPSBleHBvcnRzLm5vdGVOYW1lcyA9IGV4cG9ydHMuUElUQ0hfQkVORCA9IGV4cG9ydHMuQ0hBTk5FTF9BRlRFUlRPVUNIID0gZXhwb3J0cy5QUk9HUkFNX0NIQU5HRSA9IGV4cG9ydHMuQ09OVFJPTExFUiA9IGV4cG9ydHMuTk9URV9BRlRFUlRPVUNIID0gZXhwb3J0cy5OT1RFX09GRiA9IGV4cG9ydHMuTk9URV9PTiA9IGV4cG9ydHMuRElWSURFRF9TWVNURU1fRVhDTFVTSVZFID0gZXhwb3J0cy5TWVNURU1fRVhDTFVTSVZFID0gZXhwb3J0cy5TRVFVRU5DRVJfU1BFQ0lGSUMgPSBleHBvcnRzLktFWV9TSUdOQVRVUkUgPSBleHBvcnRzLlRJTUVfU0lHTkFUVVJFID0gZXhwb3J0cy5TTVBURV9PRkZTRVQgPSBleHBvcnRzLlRFTVBPID0gZXhwb3J0cy5FTkRfT0ZfVFJBQ0sgPSBleHBvcnRzLkNIQU5ORUxfUFJFRklYID0gZXhwb3J0cy5DVUVfUE9JTlQgPSBleHBvcnRzLk1BUktFUiA9IGV4cG9ydHMuTFlSSUNTID0gZXhwb3J0cy5JTlNUUlVNRU5UX05BTUUgPSBleHBvcnRzLlRSQUNLX05BTUUgPSBleHBvcnRzLkNPUFlSSUdIVF9OT1RJQ0UgPSBleHBvcnRzLlRFWFQgPSBleHBvcnRzLlNFUVVFTkNFX05VTUJFUiA9IHZvaWQgMDtcbmV4cG9ydHMuU0VRVUVOQ0VfTlVNQkVSID0gXCJzZXF1ZW5jZSBudW1iZXJcIjtcbmV4cG9ydHMuVEVYVCA9IFwidGV4dFwiO1xuZXhwb3J0cy5DT1BZUklHSFRfTk9USUNFID0gXCJjb3B5cmlnaHQgbm90aWNlXCI7XG5leHBvcnRzLlRSQUNLX05BTUUgPSBcInRyYWNrIG5hbWVcIjtcbmV4cG9ydHMuSU5TVFJVTUVOVF9OQU1FID0gXCJpbnN0cnVtZW50IG5hbWVcIjtcbmV4cG9ydHMuTFlSSUNTID0gXCJseXJpY3NcIjtcbmV4cG9ydHMuTUFSS0VSID0gXCJtYXJrZXJcIjtcbmV4cG9ydHMuQ1VFX1BPSU5UID0gXCJjdWUgcG9pbnRcIjtcbmV4cG9ydHMuQ0hBTk5FTF9QUkVGSVggPSBcImNoYW5uZWwgcHJlZml4XCI7XG5leHBvcnRzLkVORF9PRl9UUkFDSyA9IFwiZW5kIG9mIHRyYWNrXCI7XG5leHBvcnRzLlRFTVBPID0gXCJ0ZW1wb1wiO1xuZXhwb3J0cy5TTVBURV9PRkZTRVQgPSBcInNtcHRlIG9mZnNldFwiO1xuZXhwb3J0cy5USU1FX1NJR05BVFVSRSA9IFwidGltZSBzaWduYXR1cmVcIjtcbmV4cG9ydHMuS0VZX1NJR05BVFVSRSA9IFwia2V5IHNpZ25hdHVyZVwiO1xuZXhwb3J0cy5TRVFVRU5DRVJfU1BFQ0lGSUMgPSBcInNlcXVlbmNlciBzcGVjaWZpY1wiO1xuZXhwb3J0cy5TWVNURU1fRVhDTFVTSVZFID0gXCJzeXN0ZW0gZXhjbHVzaXZlXCI7XG5leHBvcnRzLkRJVklERURfU1lTVEVNX0VYQ0xVU0lWRSA9IFwiZGl2aWRlZCBzeXN0ZW0gZXhjbHVzaXZlXCI7XG5leHBvcnRzLk5PVEVfT04gPSBcIm5vdGUgb25cIjtcbmV4cG9ydHMuTk9URV9PRkYgPSBcIm5vdGUgb2ZmXCI7XG5leHBvcnRzLk5PVEVfQUZURVJUT1VDSCA9IFwibm90ZSBhZnRlcnRvdWNoXCI7XG5leHBvcnRzLkNPTlRST0xMRVIgPSBcImNvbnRyb2xsZXJcIjtcbmV4cG9ydHMuUFJPR1JBTV9DSEFOR0UgPSBcInByb2dyYW0gY2hhbmdlXCI7XG5leHBvcnRzLkNIQU5ORUxfQUZURVJUT1VDSCA9IFwiY2hhbm5lbCBhZnRlcnRvdWNoXCI7XG5leHBvcnRzLlBJVENIX0JFTkQgPSBcInBpdGNoIGJlbmRcIjtcbnZhciBkZXNjcmlwdGlvbnMgPSB7XG4gICAgMHhmZjoge1xuICAgICAgICAweDAwOiBcInNlcXVlbmNlIG51bWJlclwiLFxuICAgICAgICAweDAxOiBcInRleHRcIixcbiAgICAgICAgMHgwMjogXCJjb3B5cmlnaHQgbm90aWNlXCIsXG4gICAgICAgIDB4MDM6IFwidHJhY2sgbmFtZVwiLFxuICAgICAgICAweDA0OiBcImluc3RydW1lbnQgbmFtZVwiLFxuICAgICAgICAweDA1OiBcImx5cmljc1wiLFxuICAgICAgICAweDA2OiBcIm1hcmtlclwiLFxuICAgICAgICAweDA3OiBcImN1ZSBwb2ludFwiLFxuICAgICAgICAweDIwOiBcImNoYW5uZWwgcHJlZml4XCIsXG4gICAgICAgIDB4MmY6IFwiZW5kIG9mIHRyYWNrXCIsXG4gICAgICAgIDB4NTE6IFwidGVtcG9cIixcbiAgICAgICAgMHg1NDogXCJzbXB0ZSBvZmZzZXRcIixcbiAgICAgICAgMHg1ODogXCJ0aW1lIHNpZ25hdHVyZVwiLFxuICAgICAgICAweDU5OiBcImtleSBzaWduYXR1cmVcIixcbiAgICAgICAgMHg3ZjogXCJzZXF1ZW5jZXIgc3BlY2lmaWNcIixcbiAgICB9LFxuICAgIDB4ZjA6IFwic3lzdGVtIGV4Y2x1c2l2ZVwiLFxuICAgIDB4Zjc6IFwiZGl2aWRlZCBzeXNleFwiLFxuICAgIDB4ODA6IFwibm90ZSBvblwiLFxuICAgIDB4OTA6IFwibm90ZSBvZmZcIixcbiAgICAweGEwOiBcIm5vdGUgYWZ0ZXJ0b3VjaFwiLFxuICAgIDB4YjA6IFwiY29udHJvbGxlclwiLFxuICAgIDB4YzA6IFwicHJvZ3JhbSBjaGFuZ2VcIixcbiAgICAweGQwOiBcImNoYW5uZWwgYWZ0ZXJ0b3VjaFwiLFxuICAgIDB4ZTA6IFwicGl0Y2ggYmVuZFwiLFxufTtcbmV4cG9ydHMubm90ZU5hbWVzID0ge1xuICAgIHNoYXJwOiBbXCJDXCIsIFwiQyNcIiwgXCJEXCIsIFwiRCNcIiwgXCJFXCIsIFwiRlwiLCBcIkYjXCIsIFwiR1wiLCBcIkcjXCIsIFwiQVwiLCBcIkEjXCIsIFwiQlwiXSxcbiAgICBmbGF0OiBbXCJDXCIsIFwiRGJcIiwgXCJEXCIsIFwiRWJcIiwgXCJFXCIsIFwiRlwiLCBcIkdiXCIsIFwiR1wiLCBcIkFiXCIsIFwiQVwiLCBcIkJiXCIsIFwiQlwiXSxcbiAgICBcImVuaGFybW9uaWMtc2hhcnBcIjogW1wiQiNcIiwgXCJDI1wiLCBcIkMjI1wiLCBcIkQjXCIsIFwiRCMjXCIsIFwiRSNcIiwgXCJGI1wiLCBcIkYjI1wiLCBcIkcjXCIsIFwiRyMjXCIsIFwiQSNcIiwgXCJBIyNcIl0sXG4gICAgXCJlbmhhcm1vbmljLWZsYXRcIjogW1wiRGJiXCIsIFwiRGJcIiwgXCJFYmJcIiwgXCJFYlwiLCBcIkZiXCIsIFwiR2JiXCIsIFwiR2JcIiwgXCJBYmJcIiwgXCJBYlwiLCBcIkJiYlwiLCBcIkJiXCIsIFwiQ2JcIl0sXG59O1xuZXhwb3J0cy5nZXRNaWRpRXZlbnREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICh0eXBlLCBzdWJUeXBlKSB7XG4gICAgaWYgKHR5cGVvZiBzdWJUeXBlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbnNbdHlwZV07XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdGlvbnNbdHlwZV1bc3ViVHlwZV0gfHwgXCJ1bmRlZmluZWRcIjtcbn07XG5leHBvcnRzLmdldE1pZGlNZXNzYWdlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmRlc2NyKSB7XG4gICAgICAgIGNhc2UgZXhwb3J0cy5OT1RFX09OOlxuICAgICAgICAgICAgcmV0dXJuIFsweDkwICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHldO1xuICAgICAgICBjYXNlIGV4cG9ydHMuTk9URV9PRkY6XG4gICAgICAgICAgICByZXR1cm4gWzB4ODAgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eV07XG4gICAgfVxuICAgIHJldHVybiBbMF07XG59O1xuZXhwb3J0cy5nZXROb3RlTnVtYmVyID0gZnVuY3Rpb24gKG5hbWUsIG9jdGF2ZSwgbW9kZSkge1xuICAgIGlmIChtb2RlID09PSB2b2lkIDApIHsgbW9kZSA9IFwic2hhcnBcIjsgfVxuICAgIC8vIGxldCBpbmRleCA9IC0xO1xuICAgIC8vIGNvbnN0IG1vZGVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobm90ZU5hbWVzKTtcbiAgICAvLyBmb3IgKGxldCBpID0gMCwgbWF4aSA9IG1vZGVzLmxlbmd0aDsgaSA8IG1heGk7IGkrKykge1xuICAgIC8vICAgY29uc3QgbmFtZXMgPSBtb2Rlc1tpXTtcbiAgICAvLyAgIGZvciAobGV0IGogPSAwLCBtYXhqID0gbmFtZXMubGVuZ3RoOyBqIDwgbWF4ajsgaisrKSB7XG4gICAgLy8gICAgIGlmIChtb2RlW2pdID09PSBuYW1lKSB7XG4gICAgLy8gICAgICAgaW5kZXggPSBpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIHZhciBpbmRleCA9IC0xO1xuICAgIHZhciBtb2RlcyA9IE9iamVjdC52YWx1ZXMoZXhwb3J0cy5ub3RlTmFtZXMpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5hbWVzID0gbW9kZXNbaV07XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWVzW2pdLCBuYW1lKTtcbiAgICAgICAgICAgIGlmIChuYW1lc1tqXSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gajtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhuYW1lLCBvY3RhdmUsIGluZGV4KTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgLy9udW1iZXIgPSAoaW5kZXggKyAxMikgKyAob2N0YXZlICogMTIpICsgMTI7IC8vIOKGkiBpbiBDdWJhc2UgY2VudHJhbCBDID0gQzMgaW5zdGVhZCBvZiBDNFxuICAgIHJldHVybiBpbmRleCArIDEyICsgb2N0YXZlICogMTI7IC8vIOKGkiBtaWRpIHN0YW5kYXJkICsgc2NpZW50aWZpYyBuYW1pbmcsIHNlZTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NaWRkbGVfQyBhbmQgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TY2llbnRpZmljX3BpdGNoX25vdGF0aW9uXG59O1xuZXhwb3J0cy5zb3J0TUlESUV2ZW50cyA9IGZ1bmN0aW9uIChldmVudHMpIHtcbiAgICByZXR1cm4gZXZlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGEudGlja3MgPCBiLnRpY2tzKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYS50aWNrcyA+IGIudGlja3MpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChhLnR5cGUgPT09IDB4ODAgJiYgYi50eXBlID09PSAweDkwKSB7XG4gICAgICAgICAgICAvLyAgIC8vIG5vdGUgb2ZmIGJlZm9yZSBub3RlIG9uXG4gICAgICAgICAgICAvLyAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoYS50eXBlID09PSAweDUxIHx8IGEudHlwZSA9PT0gMHg1OCkge1xuICAgICAgICAgICAgLy8gICAvLyB0ZW1wbyBhbmQgdGltZSBzaWduYXR1cmUgZXZlbnRzIGZpcnN0XG4gICAgICAgICAgICAvLyAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn07XG5leHBvcnRzLnJlbW92ZURvdWJsZUV2ZW50cyA9IGZ1bmN0aW9uIChldmVudHMpIHtcbiAgICAvLyB2YXIgaSwgbWF4aSA9IGV2ZW50cy5sZW5ndGgsXG4gICAgLy8gICBldmVudCwgZXZlbnRJZCwgbGFzdElkLFxuICAgIC8vICAgcmVzdWx0ID0gW107XG4gICAgLy8gZXZlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAvLyAgIHJldHVybiBhLmV2ZW50TnVtYmVyIC0gYi5ldmVudE51bWJlcjtcbiAgICAvLyB9KTtcbiAgICAvLyBmb3IgKGkgPSAwOyBpIDwgbWF4aTsgaSsrKSB7XG4gICAgLy8gICBldmVudCA9IGV2ZW50c1tpXTtcbiAgICAvLyAgIGV2ZW50SWQgPSBldmVudC5pZDtcbiAgICAvLyAgIGlmIChldmVudElkICE9PSBsYXN0SWQpIHtcbiAgICAvLyAgICAgcmVzdWx0LnB1c2goZXZlbnQpO1xuICAgIC8vICAgfVxuICAgIC8vICAgbGFzdElkID0gZXZlbnRJZDtcbiAgICAvLyB9XG4gICAgLy8gcmV0dXJuIHJlc3VsdDtcbiAgICByZXR1cm4gW107XG59O1xuIiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMTkgSGFsw6FzeiDDgWTDoW0gPG1haWxAYWRhbWhhbGFzei5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gcHJvY2VzcyAmJiBwcm9jZXNzLnBpZCA/IHByb2Nlc3MucGlkLnRvU3RyaW5nKDM2KSA6ICcnIDtcbnZhciBhZGRyZXNzID0gJyc7XG5pZih0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBuZXR3b3JrSW50ZXJmYWNlcyA9IHJlcXVpcmUoJ29zJykubmV0d29ya0ludGVyZmFjZXMoKTtcbiAgICBmb3IobGV0IGludGVyZmFjZV9rZXkgaW4gbmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gbmV0d29ya0ludGVyZmFjZXNbaW50ZXJmYWNlX2tleV07XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYobmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgbWFjID0gbmV0d29ya0ludGVyZmFjZVtpXS5tYWM7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZHJlc3MgPSBtYWMgPyBwYXJzZUludChtYWMucmVwbGFjZSgvXFw6fFxcRCsvZ2ksICcnKSkudG9TdHJpbmcoMzYpIDogJycgO1xufSBcblxuLy8gIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIGFkZHJlc3MgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy5wcm9jZXNzID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnRpbWUgICAgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxuXG4vLyAgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBub3coKXtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGxhc3QgPSBub3cubGFzdCB8fCB0aW1lO1xuICAgIHJldHVybiBub3cubGFzdCA9IHRpbWUgPiBsYXN0ID8gdGltZSA6IGxhc3QgKyAxO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBiYXNlZCBvbjogaHR0cHM6Ly9naXRodWIuY29tL3ByYXZkb21pbC9qYXNtaWQudHNcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlTWlkaUZpbGUgPSB2b2lkIDA7XG4vLyBpbXBvcnQgeyBCdWZmZXJSZWFkZXIgfSBmcm9tICdqYXNtaWQudHMnO1xudmFyIHVuaXFpZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ1bmlxaWRcIikpO1xudmFyIGJ1ZmZlcnJlYWRlcl8xID0gcmVxdWlyZShcIi4vYnVmZmVycmVhZGVyXCIpO1xudmFyIG1pZGlfdXRpbHNfMSA9IHJlcXVpcmUoXCIuL21pZGlfdXRpbHNcIik7XG52YXIgY2FsY3VsYXRlTWlsbGlzXzEgPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVNaWxsaXNcIik7XG52YXIgc3VnYXJfY29hdGluZ18xID0gcmVxdWlyZShcIi4vc3VnYXJfY29hdGluZ1wiKTtcbnZhciBwbGF5YmFja1NwZWVkID0gMTtcbmZ1bmN0aW9uIHBhcnNlTWlkaUZpbGUoYnVmZmVyKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBidWZmZXJyZWFkZXJfMS5CdWZmZXJSZWFkZXIoYnVmZmVyKTtcbiAgICB2YXIgaGVhZGVyID0gcGFyc2VIZWFkZXIocmVhZGVyKTtcbiAgICAvLyBjb25zdCB7IHRpbWVUcmFjaywgdHJhY2tzIH0gPSBwYXJzZVRyYWNrcyhyZWFkZXIsIGhlYWRlci50aWNrc1BlckJlYXQpXG4gICAgdmFyIF9hID0gcGFyc2VUcmFja3MocmVhZGVyLCBoZWFkZXIudGlja3NQZXJCZWF0KSwgdHJhY2tzID0gX2EudHJhY2tzLCBldmVudHMgPSBfYS5ldmVudHMsIGluaXRpYWxUZW1wbyA9IF9hLmluaXRpYWxUZW1wbywgaW5pdGlhbE51bWVyYXRvciA9IF9hLmluaXRpYWxOdW1lcmF0b3IsIGluaXRpYWxEZW5vbWluYXRvciA9IF9hLmluaXRpYWxEZW5vbWluYXRvcjtcbiAgICAvLyByZXR1cm4geyBoZWFkZXIsIHRpbWVUcmFjaywgdHJhY2tzIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwcHE6IGhlYWRlci50aWNrc1BlckJlYXQsXG4gICAgICAgIHRyYWNrczogdHJhY2tzLFxuICAgICAgICBpbml0aWFsVGVtcG86IGluaXRpYWxUZW1wbyxcbiAgICAgICAgaW5pdGlhbE51bWVyYXRvcjogaW5pdGlhbE51bWVyYXRvcixcbiAgICAgICAgaW5pdGlhbERlbm9taW5hdG9yOiBpbml0aWFsRGVub21pbmF0b3IsXG4gICAgICAgIGV2ZW50czogY2FsY3VsYXRlTWlsbGlzXzEuY2FsY3VsYXRlTWlsbGlzKGV2ZW50cywge1xuICAgICAgICAgICAgcHBxOiBoZWFkZXIudGlja3NQZXJCZWF0LFxuICAgICAgICAgICAgYnBtOiBpbml0aWFsVGVtcG8sXG4gICAgICAgIH0pLFxuICAgIH07XG59XG5leHBvcnRzLnBhcnNlTWlkaUZpbGUgPSBwYXJzZU1pZGlGaWxlO1xuZnVuY3Rpb24gcGFyc2VIZWFkZXIocmVhZGVyKSB7XG4gICAgdmFyIGhlYWRlckNodW5rID0gcmVhZGVyLm1pZGlDaHVuaygpO1xuICAgIGlmIChoZWFkZXJDaHVuay5pZCAhPT0gXCJNVGhkXCIgfHwgaGVhZGVyQ2h1bmsubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhZCAubWlkIGZpbGUsIGhlYWRlciBub3QgZm91bmRcIik7XG4gICAgfVxuICAgIHZhciBoZWFkZXJSZWFkZXIgPSBuZXcgYnVmZmVycmVhZGVyXzEuQnVmZmVyUmVhZGVyKGhlYWRlckNodW5rLmRhdGEpO1xuICAgIHZhciBmb3JtYXRUeXBlID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICAgIHZhciB0cmFja0NvdW50ID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICAgIHZhciB0aW1lRGl2aXNpb24gPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gICAgaWYgKHRpbWVEaXZpc2lvbiAmIDB4ODAwMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHByZXNzaW5nIHRpbWUgZGl2aXNpb24gaW4gU01UUEUgZnJhbWVzIGlzIG5vdCBzdXBwb3J0ZWQgeWV0XCIpO1xuICAgIH1cbiAgICB2YXIgdGlja3NQZXJCZWF0ID0gdGltZURpdmlzaW9uO1xuICAgIHJldHVybiB7IGZvcm1hdFR5cGU6IGZvcm1hdFR5cGUsIHRyYWNrQ291bnQ6IHRyYWNrQ291bnQsIHRpY2tzUGVyQmVhdDogdGlja3NQZXJCZWF0IH07XG59XG5mdW5jdGlvbiBwYXJzZVRyYWNrcyhyZWFkZXIsIHBwcSkge1xuICAgIHZhciBpbml0aWFsVGVtcG8gPSAtMTtcbiAgICB2YXIgaW5pdGlhbE51bWVyYXRvciA9IC0xO1xuICAgIHZhciBpbml0aWFsRGVub21pbmF0b3IgPSAtMTtcbiAgICB2YXIgdHJhY2tzID0gW107XG4gICAgdmFyIGV2ZW50cyA9IFtdO1xuICAgIHdoaWxlICghcmVhZGVyLmVvZigpKSB7XG4gICAgICAgIHZhciB0cmFja0NodW5rID0gcmVhZGVyLm1pZGlDaHVuaygpO1xuICAgICAgICBpZiAodHJhY2tDaHVuay5pZCAhPT0gXCJNVHJrXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgY2h1bmssIGV4cGVjdGVkIE1UcmssIGdvdCBcIiArIHRyYWNrQ2h1bmsuaWQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0cmFja0lkID0gXCJULVwiICsgdW5pcWlkXzEuZGVmYXVsdCgpO1xuICAgICAgICB2YXIgdHJhY2sgPSBzdWdhcl9jb2F0aW5nXzEuY3JlYXRlVHJhY2sodHJhY2tJZCk7XG4gICAgICAgIHZhciB0cmFja1RyYWNrID0gbmV3IGJ1ZmZlcnJlYWRlcl8xLkJ1ZmZlclJlYWRlcih0cmFja0NodW5rLmRhdGEpO1xuICAgICAgICB2YXIgdGlja3MgPSAwO1xuICAgICAgICB2YXIgbGFzdFR5cGVCeXRlID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKCF0cmFja1RyYWNrLmVvZigpKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHBhcnNlRXZlbnQodHJhY2tUcmFjaywgbGFzdFR5cGVCeXRlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgdmFyIGV2ZW50XzEgPSBkYXRhLmV2ZW50LCBkZWx0YVRpbWUgPSBkYXRhLmRlbHRhVGltZSwgYnBtID0gZGF0YS5icG0sIG51bWVyYXRvciA9IGRhdGEubnVtZXJhdG9yLCBkZW5vbWluYXRvciA9IGRhdGEuZGVub21pbmF0b3IsIHRyYWNrTmFtZSA9IGRhdGEudHJhY2tOYW1lO1xuICAgICAgICAgICAgaWYgKGJwbSAmJiBpbml0aWFsVGVtcG8gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFRlbXBvID0gYnBtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG51bWVyYXRvciAmJiBpbml0aWFsTnVtZXJhdG9yID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGluaXRpYWxOdW1lcmF0b3IgPSBudW1lcmF0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVub21pbmF0b3IgJiYgaW5pdGlhbERlbm9taW5hdG9yID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGluaXRpYWxEZW5vbWluYXRvciA9IGRlbm9taW5hdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRyYWNrTmFtZSkge1xuICAgICAgICAgICAgICAgIHRyYWNrLm5hbWUgPSB0cmFja05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aWNrcyArPSBkZWx0YVRpbWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVElDS1MnLCB0aWNrcywgYnBtLCBudW1lcmF0b3IpO1xuICAgICAgICAgICAgbGFzdFR5cGVCeXRlID0gZXZlbnRfMS50eXBlO1xuICAgICAgICAgICAgZXZlbnRzLnB1c2goX19hc3NpZ24oX19hc3NpZ24oe30sIGV2ZW50XzEpLCB7IHRyYWNrSWQ6IHRyYWNrSWQsXG4gICAgICAgICAgICAgICAgdGlja3M6IHRpY2tzIH0pKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFja3MucHVzaCh0cmFjayk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGV2ZW50czogbWlkaV91dGlsc18xLnNvcnRNSURJRXZlbnRzKGV2ZW50cyksXG4gICAgICAgIHRyYWNrczogdHJhY2tzLFxuICAgICAgICBpbml0aWFsVGVtcG86IGluaXRpYWxUZW1wbyxcbiAgICAgICAgaW5pdGlhbE51bWVyYXRvcjogaW5pdGlhbE51bWVyYXRvcixcbiAgICAgICAgaW5pdGlhbERlbm9taW5hdG9yOiBpbml0aWFsRGVub21pbmF0b3IsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlRXZlbnQocmVhZGVyLCBsYXN0VHlwZUJ5dGUpIHtcbiAgICB2YXIgZGVsdGFUaW1lID0gcmVhZGVyLm1pZGlJbnQoKTtcbiAgICB2YXIgdHlwZUJ5dGUgPSByZWFkZXIudWludDgoKTtcbiAgICAvLyBtZXRhIGV2ZW50czogMHhmZlxuICAgIC8vIHN5c3RlbSBldmVudHM6IDB4ZjAsIDB4ZjdcbiAgICAvLyBtaWRpIGV2ZW50czogYWxsIG90aGVyIGJ5dGVzXG4gICAgaWYgKHR5cGVCeXRlID09PSAweGZmKSB7XG4gICAgICAgIHZhciBzdWJUeXBlQnl0ZSA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICB2YXIgbGVuZ3RoXzEgPSByZWFkZXIubWlkaUludCgpO1xuICAgICAgICBzd2l0Y2ggKHN1YlR5cGVCeXRlKSB7XG4gICAgICAgICAgICAvLyBzZXF1ZW5jZSBudW1iZXJcbiAgICAgICAgICAgIGNhc2UgMHgwMDpcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoXzEgIT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgbGVuZ3RoIGZvciBzZXF1ZW5jZU51bWJlciBldmVudCBpcyAyLCBnb3QgXCIgKyBsZW5ndGhfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3I6IG1pZGlfdXRpbHNfMS5TRVFVRU5DRV9OVU1CRVIsXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHJlYWRlci51aW50MTYoKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFUaW1lOiBkZWx0YVRpbWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRleHRcbiAgICAgICAgICAgIGNhc2UgMHgwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyOiBtaWRpX3V0aWxzXzEuVEVYVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoXzEpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY29weXJpZ2h0XG4gICAgICAgICAgICBjYXNlIDB4MDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcjogbWlkaV91dGlsc18xLkNPUFlSSUdIVF9OT1RJQ0UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aF8xKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFUaW1lOiBkZWx0YVRpbWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRyYWNrIG5hbWVcbiAgICAgICAgICAgIGNhc2UgMHgwMzpcbiAgICAgICAgICAgICAgICB2YXIgdHJhY2tOYW1lID0gcmVhZGVyLnN0cmluZyhsZW5ndGhfMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcjogbWlkaV91dGlsc18xLlRSQUNLX05BTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0cmFja05hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhVGltZTogZGVsdGFUaW1lLFxuICAgICAgICAgICAgICAgICAgICB0cmFja05hbWU6IHRyYWNrTmFtZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gaW5zdHJ1bWVudCBuYW1lXG4gICAgICAgICAgICBjYXNlIDB4MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcjogbWlkaV91dGlsc18xLklOU1RSVU1FTlRfTkFNRSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoXzEpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gbHlyaWNzXG4gICAgICAgICAgICBjYXNlIDB4MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcjogbWlkaV91dGlsc18xLkxZUklDUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoXzEpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gbWFya2VyXG4gICAgICAgICAgICBjYXNlIDB4MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcjogbWlkaV91dGlsc18xLk1BUktFUixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoXzEpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY3VlIHBvaW50XG4gICAgICAgICAgICBjYXNlIDB4MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcjogbWlkaV91dGlsc18xLkNVRV9QT0lOVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoXzEpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY2hhbm5lbCBwcmVmaXhcbiAgICAgICAgICAgIGNhc2UgMHgyMDpcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoXzEgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgbGVuZ3RoIGZvciBtaWRpQ2hhbm5lbFByZWZpeCBldmVudCBpcyAxLCBnb3QgXCIgKyBsZW5ndGhfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3I6IG1pZGlfdXRpbHNfMS5DSEFOTkVMX1BSRUZJWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gZW5kIG9mIHRyYWNrXG4gICAgICAgICAgICBjYXNlIDB4MmY6XG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aF8xICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGxlbmd0aCBmb3IgZW5kT2ZUcmFjayBldmVudCBpcyAwLCBnb3QgXCIgKyBsZW5ndGhfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcjogbWlkaV91dGlsc18xLkVORF9PRl9UUkFDSyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhVGltZTogZGVsdGFUaW1lLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0ZW1wb1xuICAgICAgICAgICAgY2FzZSAweDUxOlxuICAgICAgICAgICAgICAgIGlmIChsZW5ndGhfMSAhPT0gMykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBsZW5ndGggZm9yIHNldFRlbXBvIGV2ZW50IGlzIDMsIGdvdCBcIiArIGxlbmd0aF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG1pY3Jvc2Vjb25kc1BlckJlYXQgPSAocmVhZGVyLnVpbnQ4KCkgPDwgMTYpICsgKHJlYWRlci51aW50OCgpIDw8IDgpICsgcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgICAgICAgICAgdmFyIGJwbSA9IDYwMDAwMDAwIC8gbWljcm9zZWNvbmRzUGVyQmVhdDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyOiBtaWRpX3V0aWxzXzEuVEVNUE8sXG4gICAgICAgICAgICAgICAgICAgICAgICBicG06IGJwbSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYnBtOiBicG0sXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhVGltZTogZGVsdGFUaW1lLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBzbXB0ZSBvZmZzZXRcbiAgICAgICAgICAgIGNhc2UgMHg1NDpcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoXzEgIT0gNSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBsZW5ndGggZm9yIHNtcHRlT2Zmc2V0IGV2ZW50IGlzIDUsIGdvdCBcIiArIGxlbmd0aF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGhvdXJCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcjogbWlkaV91dGlsc18xLlNNUFRFX09GRlNFVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lUmF0ZTogZ2V0RnJhbWVSYXRlKGhvdXJCeXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXI6IGhvdXJCeXRlICYgMHgxZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWM6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViRnJhbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdGltZSBzaWduYXR1cmVcbiAgICAgICAgICAgIGNhc2UgMHg1ODpcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoXzEgIT0gNCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBsZW5ndGggZm9yIHRpbWVTaWduYXR1cmUgZXZlbnQgaXMgNCwgZ290IFwiICsgbGVuZ3RoXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbnVtZXJhdG9yID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgICAgICAgICAgdmFyIGRlbm9taW5hdG9yID0gTWF0aC5wb3coMiwgcmVhZGVyLnVpbnQ4KCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3I6IG1pZGlfdXRpbHNfMS5USU1FX1NJR05BVFVSRSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWVyYXRvcjogbnVtZXJhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0cm9ub21lOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXJ0eVNlY29uZHM6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBudW1lcmF0b3I6IG51bWVyYXRvcixcbiAgICAgICAgICAgICAgICAgICAgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yLFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8ga2V5IHNpZ25hdHVyZVxuICAgICAgICAgICAgY2FzZSAweDU5OlxuICAgICAgICAgICAgICAgIGlmIChsZW5ndGhfMSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGxlbmd0aCBmb3Iga2V5U2lnbmF0dXJlIGV2ZW50IGlzIDIsIGdvdCBcIiArIGxlbmd0aF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcjogbWlkaV91dGlsc18xLktFWV9TSUdOQVRVUkUsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHJlYWRlci5pbnQ4KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhVGltZTogZGVsdGFUaW1lLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBzZXF1ZW5jZXIgc3BlY2lmaWNcbiAgICAgICAgICAgIGNhc2UgMHg3ZjpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyOiBtaWRpX3V0aWxzXzEuU0VRVUVOQ0VSX1NQRUNJRklDLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoXzEpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdW5kZWZpbmVkXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3I6IFwidW5kZWZpbmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGhfMSksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhVGltZTogZGVsdGFUaW1lLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZUJ5dGUgPT09IDB4ZjApIHtcbiAgICAgICAgLy8gc3lzdGVtIGV4Y2x1c2l2ZVxuICAgICAgICB2YXIgbGVuZ3RoXzIgPSByZWFkZXIubWlkaUludCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAweGYwLFxuICAgICAgICAgICAgICAgIGRlc2NyOiBtaWRpX3V0aWxzXzEuU1lTVEVNX0VYQ0xVU0lWRSxcbiAgICAgICAgICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGhfMiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsdGFUaW1lOiBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVCeXRlID09PSAweGY3KSB7XG4gICAgICAgIC8vIGRpdmlkZWQgc3lzdGVtIGV4Y2x1c2l2ZVxuICAgICAgICB2YXIgbGVuZ3RoXzMgPSByZWFkZXIubWlkaUludCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAweGYwLFxuICAgICAgICAgICAgICAgIGRlc2NyOiBtaWRpX3V0aWxzXzEuRElWSURFRF9TWVNURU1fRVhDTFVTSVZFLFxuICAgICAgICAgICAgICAgIGRhdGE6IHJlYWRlci5yZWFkKGxlbmd0aF8zKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBydW5uaW5nIHN0YXR1cyAtIHJldXNlIGxhc3RFdmVudFR5cGVCeXRlIGFzIHRoZSBldmVudCB0eXBlXG4gICAgICAgICAqIHR5cGVCeXRlIGlzIGFjdHVhbGx5IHRoZSBmaXJzdCBwYXJhbWV0ZXJcbiAgICAgICAgICovXG4gICAgICAgIHZhciBpc1J1bm5pbmdTdGF0dXMgPSAodHlwZUJ5dGUgJiAxMjgpID09PSAwO1xuICAgICAgICB2YXIgdmFsdWUgPSBpc1J1bm5pbmdTdGF0dXMgPyB0eXBlQnl0ZSA6IHJlYWRlci51aW50OCgpO1xuICAgICAgICB0eXBlQnl0ZSA9IGlzUnVubmluZ1N0YXR1cyA/IChsYXN0VHlwZUJ5dGUgPT09IG51bGwgPyAwIDogbGFzdFR5cGVCeXRlKSA6IHR5cGVCeXRlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc1J1bm5pbmdTdGF0dXMsIHR5cGVCeXRlLCB2YWx1ZSk7XG4gICAgICAgIHZhciBjaGFubmVsID0gdHlwZUJ5dGUgJiAweDBmO1xuICAgICAgICAvLyBjaGFubmVsc1tjaGFubmVsXSA9IHRydWU7XG4gICAgICAgIHN3aXRjaCAodHlwZUJ5dGUgPj4gNCkge1xuICAgICAgICAgICAgLy8gbm90ZSBvZmZcbiAgICAgICAgICAgIGNhc2UgMHgwODpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMHg4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyOiBtaWRpX3V0aWxzXzEuTk9URV9PRkYsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZU51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhVGltZTogZGVsdGFUaW1lLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBub3RlIG9uXG4gICAgICAgICAgICBjYXNlIDB4MDk6XG4gICAgICAgICAgICAgICAgdmFyIHZlbG9jaXR5ID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHZlbG9jaXR5ID09PSAwID8gMHg4MCA6IDB4OTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcjogdmVsb2NpdHkgPT09IDAgPyBtaWRpX3V0aWxzXzEuTk9URV9PRkYgOiBtaWRpX3V0aWxzXzEuTk9URV9PTixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RlTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFUaW1lOiBkZWx0YVRpbWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIG5vdGUgYWZ0ZXJ0b3VjaFxuICAgICAgICAgICAgY2FzZSAweDBhOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAweGEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3I6IG1pZGlfdXRpbHNfMS5OT1RFX0FGVEVSVE9VQ0gsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZU51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY29udHJvbGxlclxuICAgICAgICAgICAgY2FzZSAweDBiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAweGIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3I6IG1pZGlfdXRpbHNfMS5DT05UUk9MTEVSLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gcHJvZ3JhbSBjaGFuZ2VcbiAgICAgICAgICAgIGNhc2UgMHgwYzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMHhjMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyOiBtaWRpX3V0aWxzXzEuUFJPR1JBTV9DSEFOR0UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhVGltZTogZGVsdGFUaW1lLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBjaGFubmVsIGFmdGVydG91Y2hcbiAgICAgICAgICAgIGNhc2UgMHgwZDpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMHhkMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyOiBtaWRpX3V0aWxzXzEuQ0hBTk5FTF9BRlRFUlRPVUNILFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhVGltZTogZGVsdGFUaW1lLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBwaXRjaCBiZW5kXG4gICAgICAgICAgICBjYXNlIDB4MGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDB4ZTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcjogbWlkaV91dGlsc18xLlBJVENIX0JFTkQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlICsgKHJlYWRlci51aW50OCgpIDw8IDcpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gZGVmYXVsdDpcbiAgICAgICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vICAgICBldmVudDoge1xuICAgICAgICAgICAgLy8gICAgICAgdHlwZTogdHlwZUJ5dGUgPj4gNCxcbiAgICAgICAgICAgIC8vICAgICAgIGRlc2NyOiBcInVucmVjb2duaXplZFwiLFxuICAgICAgICAgICAgLy8gICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gICAgIGRlbHRhVGltZSxcbiAgICAgICAgICAgIC8vICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIlVucmVjb2duaXplZCBNSURJIGV2ZW50IHR5cGUgYnl0ZTogXCIgKyB0eXBlQnl0ZSArIFwiIChmaXggdGhpcylcIik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlID09PSAyNTUgPyAwIDogdHlwZUJ5dGUsXG4gICAgICAgIH0sXG4gICAgICAgIGRlbHRhVGltZTogZGVsdGFUaW1lLFxuICAgIH07XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5yZWNvZ25pemVkIE1JREkgZXZlbnQgdHlwZSBieXRlOiBcIiArIHR5cGVCeXRlKTtcbn1cbmZ1bmN0aW9uIGdldEZyYW1lUmF0ZShob3VyQnl0ZSkge1xuICAgIHN3aXRjaCAoaG91ckJ5dGUgJiA5Nikge1xuICAgICAgICBjYXNlIDB4MDA6XG4gICAgICAgICAgICByZXR1cm4gMjQ7XG4gICAgICAgIGNhc2UgMHgyMDpcbiAgICAgICAgICAgIHJldHVybiAyNTtcbiAgICAgICAgY2FzZSAweDQwOlxuICAgICAgICAgICAgcmV0dXJuIDI5O1xuICAgICAgICBjYXNlIDB4NjA6XG4gICAgICAgICAgICByZXR1cm4gMzA7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2NoZWR1bGUgPSBleHBvcnRzLmdldEN1cnJlbnRFdmVudEluZGV4ID0gdm9pZCAwO1xudmFyIG1pZGlfdXRpbHNfMSA9IHJlcXVpcmUoXCIuL21pZGlfdXRpbHNcIik7XG5leHBvcnRzLmdldEN1cnJlbnRFdmVudEluZGV4ID0gZnVuY3Rpb24gKHNvbmcsIG1pbGxpcykge1xuICAgIHZhciBldmVudHMgPSBzb25nLmV2ZW50cztcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yICg7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGV2ZW50XzEgPSBldmVudHNbaV07XG4gICAgICAgIGlmICghZXZlbnRfMS5taWxsaXMgfHwgZXZlbnRfMS5taWxsaXMgPj0gbWlsbGlzKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaTtcbn07XG5leHBvcnRzLnNjaGVkdWxlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHNvbmcgPSBfYS5zb25nLCBpbmRleCA9IF9hLmluZGV4LCBtaWxsaXMgPSBfYS5taWxsaXMsIG91dHB1dHMgPSBfYS5vdXRwdXRzO1xuICAgIHZhciB0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHZhciBldmVudHMgPSBzb25nLmV2ZW50cztcbiAgICB2YXIgc2NoZWR1bGVkID0gW107XG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBldmVudF8yID0gZXZlbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKCFldmVudF8yLm1pbGxpcyB8fCAhZXZlbnRfMi50cmFja0lkKSB7XG4gICAgICAgICAgICAvLyBicmVhaztcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnRfMi5taWxsaXMgPCBtaWxsaXMgKyBzb25nLmJ1ZmZlclRpbWUpIHtcbiAgICAgICAgICAgIHNjaGVkdWxlZC5wdXNoKGV2ZW50XzIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGlja3MsIGV2ZW50LmRlc2NyLCAoZXZlbnQgYXMgTm90ZU9uRXZlbnQpLm5vdGVOdW1iZXIpO1xuICAgICAgICAgICAgdmFyIHRyYWNrXzEgPSBzb25nLnRyYWNrc0J5SWRbZXZlbnRfMi50cmFja0lkXTtcbiAgICAgICAgICAgIHRyYWNrXzEub3V0cHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRfMi5kZXNjciA9PT0gbWlkaV91dGlsc18xLk5PVEVfT04gfHwgZXZlbnRfMi5kZXNjciA9PT0gbWlkaV91dGlsc18xLk5PVEVfT0ZGKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gZXZlbnRfMjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50XzIubWlsbGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50eXBlLCBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lID0gdHMgKyBzb25nLmxhdGVuY3kgKyB0cmFja18xLmxhdGVuY3kgKyAoZXZlbnRfMi5taWxsaXMgLSBtaWxsaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRbXCJub3RlTnVtYmVyXCJdLCBldmVudC5kZXNjciwgZXZlbnQubWlsbGlzLCBtaWxsaXMsIHRpbWUsIHRzLCB0aW1lIC0gdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5ub3RlTnVtYmVyLCBsYXN0Tm90ZU51bWJlciwgbGFzdE5vdGVUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChlLm5vdGVOdW1iZXIgPT09IGxhc3ROb3RlTnVtYmVyICYmIGxhc3ROb3RlVHlwZSA9PT0gMHg5MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAoZS5kZXNjciA9PT0gTk9URV9PTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVwZWF0aW5nIG5vdGVzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRpbWUgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFzdE5vdGVOdW1iZXIgPSBlLm5vdGVOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXN0Tm90ZVR5cGUgPSBlLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50eXBlICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcXVpY2sgZml4IGZvciByZXBlYXRpbmcgbm90ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmRlc2NyID09PSBtaWRpX3V0aWxzXzEuTk9URV9PTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IG91dHB1dHMgPT09IG51bGwgfHwgb3V0cHV0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3V0cHV0cy5nZXQoaWQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2VuZChbZXZlbnRfMi50eXBlICsgZXZlbnRfMi5jaGFubmVsLCBldmVudF8yLm5vdGVOdW1iZXIsIGV2ZW50XzIudmVsb2NpdHldLCB0aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIGxldCBsYXN0Tm90ZU51bWJlcjogbnVtYmVyID0gLTE7XG4gICAgLy8gbGV0IGxhc3ROb3RlVHlwZTogbnVtYmVyID0gLTE7XG4gICAgd2hpbGUgKGluZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEoKTtcbiAgICAgICAgaWYgKHN0YXRlXzEgPT09IFwiYnJlYWtcIilcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnW1NDSEVEVUxFRF0nLCBzY2hlZHVsZWQubWFwKGUgPT4gW2UudGlja3MsIGUubWlsbGlzXSkpO1xuICAgIHJldHVybiB7IG1pbGxpczogbWlsbGlzLCBpbmRleDogaW5kZXgsIHNjaGVkdWxlZDogc2NoZWR1bGVkIH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVUcmFjayA9IGV4cG9ydHMuc2V0VHJhY2tPdXRwdXQgPSBleHBvcnRzLmNyZWF0ZVNvbmdGcm9tTUlESUZpbGUgPSB2b2lkIDA7XG52YXIgZmV0Y2hfaGVscGVyc18xID0gcmVxdWlyZShcIi4vZmV0Y2hfaGVscGVyc1wiKTtcbnZhciBwYXJzZV9taWRpX2JpbmFyeV8xID0gcmVxdWlyZShcIi4vcGFyc2VfbWlkaV9iaW5hcnlcIik7XG52YXIgY3JlYXRlX25vdGVzXzEgPSByZXF1aXJlKFwiLi9jcmVhdGVfbm90ZXNcIik7XG5leHBvcnRzLmNyZWF0ZVNvbmdGcm9tTUlESUZpbGUgPSBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBhYiwgX2EsIHBwcSwgaW5pdGlhbFRlbXBvLCBpbml0aWFsTnVtZXJhdG9yLCBpbml0aWFsRGVub21pbmF0b3IsIGV2ZW50cywgdHJhY2tzLCBzb25nO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaF9oZWxwZXJzXzEuZmV0Y2hBcnJheWJ1ZmZlcihhcmcpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBhYiA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBhYiA9IGFyZztcbiAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgX2EgPSBwYXJzZV9taWRpX2JpbmFyeV8xLnBhcnNlTWlkaUZpbGUoYWIpLCBwcHEgPSBfYS5wcHEsIGluaXRpYWxUZW1wbyA9IF9hLmluaXRpYWxUZW1wbywgaW5pdGlhbE51bWVyYXRvciA9IF9hLmluaXRpYWxOdW1lcmF0b3IsIGluaXRpYWxEZW5vbWluYXRvciA9IF9hLmluaXRpYWxEZW5vbWluYXRvciwgZXZlbnRzID0gX2EuZXZlbnRzLCB0cmFja3MgPSBfYS50cmFja3M7XG4gICAgICAgICAgICAgICAgc29uZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHBxOiBwcHEsXG4gICAgICAgICAgICAgICAgICAgIGxhdGVuY3k6IDE3LFxuICAgICAgICAgICAgICAgICAgICBidWZmZXJUaW1lOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrczogdHJhY2tzLFxuICAgICAgICAgICAgICAgICAgICB0cmFja3NCeUlkOiB0cmFja3MucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NbdmFsdWUuaWRdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50czogZXZlbnRzLFxuICAgICAgICAgICAgICAgICAgICBub3RlczogY3JlYXRlX25vdGVzXzEuY3JlYXRlTm90ZXMoZXZlbnRzKSxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFRlbXBvOiBpbml0aWFsVGVtcG8sXG4gICAgICAgICAgICAgICAgICAgIG51bWVyYXRvcjogaW5pdGlhbE51bWVyYXRvcixcbiAgICAgICAgICAgICAgICAgICAgZGVub21pbmF0b3I6IGluaXRpYWxEZW5vbWluYXRvcixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBzb25nXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5leHBvcnRzLnNldFRyYWNrT3V0cHV0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRyYWNrID0gX2EudHJhY2ssIG91dHB1dCA9IF9hLm91dHB1dDtcbiAgICB0cmFjay5vdXRwdXRzLnB1c2gob3V0cHV0KTtcbn07XG5leHBvcnRzLmNyZWF0ZVRyYWNrID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBsYXRlbmN5OiAwLFxuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBvdXRwdXRzOiBbXSxcbiAgICB9O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3NwcmVhZCA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWQpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICAgIHJldHVybiBhcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBpbXBvcnQgXCJqenpcIjtcbnZhciBzY2hlZHVsZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9zcmMvc2NoZWR1bGVyXCIpO1xudmFyIGluaXRfbWlkaV8xID0gcmVxdWlyZShcIi4uLy4uL3NyYy9pbml0LW1pZGlcIik7XG52YXIgc3VnYXJfY29hdGluZ18xID0gcmVxdWlyZShcIi4uLy4uL3NyYy9zdWdhcl9jb2F0aW5nXCIpO1xudmFyIHVybCA9IFwiLi9hc3NldHMvbWludXRlX3dhbHR6Lm1pZFwiO1xuLy8gY29uc3QgdXJsID0gJy4vYXNzZXRzL21vems1NDVhLm1pZCc7XG4vLyBjb25zdCB1cmwgPSAnLi9hc3NldHMvbW96azU0NWFfbXVzZXNjb3JlLm1pZCc7XG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1hLCBzb25nLCBfYSwgaW5wdXRzLCBvdXRwdXRzLCBtaWxsaXMsIGluZGV4LCBzdGFydCwgcGxheTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdF9taWRpXzEuZ2V0TUlESUFjY2VzcygpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBtYSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzdWdhcl9jb2F0aW5nXzEuY3JlYXRlU29uZ0Zyb21NSURJRmlsZShcIi4vYXNzZXRzL21pbnV0ZV93YWx0ei5taWRcIildO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHNvbmcgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdF9taWRpXzEuZ2V0TUlESURldmljZXMoKV07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCksIGlucHV0cyA9IF9hLmlucHV0cywgb3V0cHV0cyA9IF9hLm91dHB1dHM7XG4gICAgICAgICAgICAgICAgc29uZy50cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSB0cmFjay5vdXRwdXRzKS5wdXNoLmFwcGx5KF9hLCBfX3NwcmVhZChvdXRwdXRzLm1hcChmdW5jdGlvbiAobykgeyByZXR1cm4gby5pZDsgfSkpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzb25nKTtcbiAgICAgICAgICAgICAgICBtaWxsaXMgPSAzMDAwO1xuICAgICAgICAgICAgICAgIGluZGV4ID0gc2NoZWR1bGVyXzEuZ2V0Q3VycmVudEV2ZW50SW5kZXgoc29uZywgbWlsbGlzKTtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgICAgIHBsYXkgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cywgYSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2dyZXNzID0gdHMgLSBhO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB0cyAtIHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IHRzO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9ncmVzcyA9IGEgLSBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnQgPSBhO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlsbGlzIDwgMTAwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IHNjaGVkdWxlcl8xLnNjaGVkdWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb25nOiBzb25nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbGxpczogbWlsbGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRzOiBtYSA9PT0gbnVsbCB8fCBtYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWEub3V0cHV0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBpbmRleCA9IF9hLmluZGV4LCBtaWxsaXMgPSBfYS5taWxsaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlsbGlzICs9IHByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgsIG1pbGxpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5KGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHBsYXkoc3RhcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5pbml0KCk7XG4vLyBmZXRjaCh1cmwpXG4vLyAgIC50aGVuKGFycmF5QnVmZmVyKVxuLy8gICAudGhlbihhYiA9PiB7XG4vLyAgICAgY29uc3QgeyBoZWFkZXIsIHRyYWNrcyB9ID0gcGFyc2VNaWRpRmlsZShhYik7XG4vLyAgICAgY29uc29sZS5sb2codHJhY2tzKTtcbi8vICAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
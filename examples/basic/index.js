/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

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

/***/ "./basic/index.ts":
/*!************************!*\
  !*** ./basic/index.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
// import "jzz";
const scheduler_1 = __webpack_require__(/*! ../../src/scheduler */ "../src/scheduler.ts");
const getCurrentEventIndex_1 = __webpack_require__(/*! ../../src/getCurrentEventIndex */ "../src/getCurrentEventIndex.ts");
const getMIDIAccess_1 = __webpack_require__(/*! ../../src/getMIDIAccess */ "../src/getMIDIAccess.ts");
const getMIDIPorts_1 = __webpack_require__(/*! ../../src/getMIDIPorts */ "../src/getMIDIPorts.ts");
const createSongFromMIDIFile_1 = __webpack_require__(/*! ../../src/createSongFromMIDIFile */ "../src/createSongFromMIDIFile.ts");
const resetMIDIOutputs_1 = __webpack_require__(/*! ../../src/resetMIDIOutputs */ "../src/resetMIDIOutputs.ts");
const url = "../assets/minute_waltz.mid";
// console.log("URL", url);
// const url = '/assets/mozk545a.mid';
// const url = '/assets/mozk545a_musescore.mid';
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const ma = yield getMIDIAccess_1.getMIDIAccess();
    const song = yield createSongFromMIDIFile_1.createSongFromMIDIFile(url);
    const { inputs, outputs } = getMIDIPorts_1.getMIDIPorts(ma);
    song.tracks.forEach((track) => {
        track.outputs.push(...outputs.map((o) => o.id));
    });
    console.log(song);
    let millis = 3000;
    song.positionMillis = millis;
    let index = getCurrentEventIndex_1.getCurrentEventIndex(song, millis);
    // console.log("START INDEX", index);
    let start = performance.now();
    const play = (a) => {
        const ts = performance.now();
        // console.log(ts, ts - start, a, a - start);
        // const progress = ts - a;
        const progress = ts - start;
        start = ts;
        // const progress = a - start;
        // start = a;
        if (millis < 10000) {
            ({ index, millis } = scheduler_1.schedule({
                song,
                millis,
                index,
                outputs: ma === null || ma === void 0 ? void 0 : ma.outputs,
            }));
            millis += progress;
            // console.log(index, millis);
            requestAnimationFrame((a) => {
                play(a);
            });
        }
        else {
            resetMIDIOutputs_1.resetMIDIOutputs(ma);
        }
    };
    play(start);
});
init();


/***/ }),

/***/ "../src/bufferreader.ts":
/*!******************************!*\
  !*** ../src/bufferreader.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// from: https://github.com/pravdomil/jasmid.ts
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BufferReader = void 0;
class BufferReader {
    constructor(buffer) {
        this.position = 0;
        this.data = new DataView(buffer);
    }
    read(length) {
        const value = this.data.buffer.slice(this.position, this.position + length);
        this.position += length;
        return value;
    }
    int8() {
        const value = this.data.getInt8(this.position);
        this.position += 1;
        return value;
    }
    uint8() {
        const value = this.data.getUint8(this.position);
        this.position += 1;
        return value;
    }
    uint16() {
        const value = this.data.getUint16(this.position);
        this.position += 2;
        return value;
    }
    uint32() {
        const value = this.data.getUint32(this.position);
        this.position += 4;
        return value;
    }
    string(length) {
        return new TextDecoder("ascii").decode(this.read(length));
    }
    eof() {
        return this.position >= this.data.byteLength;
    }
    /**
     * Read a MIDI-style variable-length integer.
     * (big-endian value in groups of 7 bits, with top bit set to signify that another byte follows)
     */
    midiInt() {
        let result = 0;
        while (true) {
            const value = this.uint8();
            if (value & 0b10000000) {
                result += value & 0b1111111;
                result <<= 7;
            }
            else {
                return result + value;
            }
        }
    }
    midiChunk() {
        const id = this.string(4);
        const length = this.uint32();
        const data = this.read(length);
        return { id, length, data };
    }
}
exports.BufferReader = BufferReader;


/***/ }),

/***/ "../src/calculateMillis.ts":
/*!*********************************!*\
  !*** ../src/calculateMillis.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateMillis = void 0;
const calculateMillis = (events, data) => {
    let { ppq, bpm = -1, playbackSpeed = 1 } = data;
    let millisPerTick = bpm === -1 ? 0 : (((1 / playbackSpeed) * 60) / bpm / ppq) * 1000;
    let ticks = 0;
    let millis = 0;
    // console.log("bpm", bpm, millis);
    return events.map(event => {
        if (event.bpm) {
            ({ bpm } = event);
            // console.log("bpm", bpm, millis);
            millisPerTick = (((1 / playbackSpeed) * 60) / bpm / ppq) * 1000;
        }
        const diffTicks = event.ticks - ticks;
        millis += diffTicks * millisPerTick;
        event.millis = millis;
        ticks = event.ticks;
        return event;
    });
};
exports.calculateMillis = calculateMillis;


/***/ }),

/***/ "../src/createNotes.ts":
/*!*****************************!*\
  !*** ../src/createNotes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createNotes = void 0;
let index = 0;
const createNotes = (events) => {
    let filtered = events.reduce((acc, val) => {
        // console.log(val.type);
        if (val.type === 0x80 || val.type === 0x90) {
            acc.push(val);
        }
        return acc;
    }, []);
    // filtered = sortMIDIEvents(filtered);
    const notes = [];
    const tmp = {};
    filtered.forEach(e => {
        const id = `${e.trackId}-${e.noteNumber}`;
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
                const noteOn = tmp[id];
                const note = {
                    id: `note-${new Date().getTime()}-${index++}`,
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
exports.createNotes = createNotes;


/***/ }),

/***/ "../src/createSongFromMIDIFile.ts":
/*!****************************************!*\
  !*** ../src/createSongFromMIDIFile.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSongFromMIDIFile = void 0;
const fetch_1 = __webpack_require__(/*! ./util/fetch */ "../src/util/fetch.ts");
const parseMIDIFile_1 = __webpack_require__(/*! ./parseMIDIFile */ "../src/parseMIDIFile.ts");
const createSongFromMIDIFile = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    let ab;
    if (typeof arg === "string") {
        ab = yield fetch_1.fetchArraybuffer(arg);
    }
    else {
        ab = arg;
    }
    // const { header, timeTrack, tracks } = parseMidiFile(ab);
    return parseMIDIFile_1.parseMIDIFile(ab);
});
exports.createSongFromMIDIFile = createSongFromMIDIFile;


/***/ }),

/***/ "../src/createTrack.ts":
/*!*****************************!*\
  !*** ../src/createTrack.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/// <reference types="webmidi" />
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createTrack = void 0;
const createTrack = (id) => {
    return {
        id,
        latency: 0,
        inputs: [],
        outputs: [],
    };
};
exports.createTrack = createTrack;


/***/ }),

/***/ "../src/getCurrentEventIndex.ts":
/*!**************************************!*\
  !*** ../src/getCurrentEventIndex.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCurrentEventIndex = void 0;
const getCurrentEventIndex = (song, millis, startIndex = 0) => {
    const { events } = song;
    let i = startIndex;
    for (; i < events.length; i++) {
        const event = events[i];
        // console.log(event.millis, millis);
        if (typeof event.millis === "undefined" || event.millis >= millis) {
            break;
        }
    }
    return i;
};
exports.getCurrentEventIndex = getCurrentEventIndex;


/***/ }),

/***/ "../src/getMIDIAccess.ts":
/*!*******************************!*\
  !*** ../src/getMIDIAccess.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMIDIAccess = void 0;
let midiAccess;
const getMIDIAccess = () => __awaiter(void 0, void 0, void 0, function* () {
    if (midiAccess !== null && typeof midiAccess !== "undefined") {
        return Promise.resolve(midiAccess);
    }
    if (!navigator.requestMIDIAccess) {
        midiAccess = null;
        console.log("WebMIDI not supported");
        return Promise.resolve(null);
    }
    try {
        const ma = yield navigator.requestMIDIAccess();
        // midiAccess.onstatechange = (e: WebMidi.MIDIConnectionEvent) => {
        // };
        if (!ma.inputs || !ma.outputs) {
            console.log("Firefox WebMIDI API support is still in progress");
            return null;
        }
        midiAccess = ma;
        return ma;
    }
    catch (e) {
        console.log("MIDI could not be initialized:", e);
        return null;
    }
});
exports.getMIDIAccess = getMIDIAccess;


/***/ }),

/***/ "../src/getMIDIPorts.ts":
/*!******************************!*\
  !*** ../src/getMIDIPorts.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMIDIPorts = void 0;
const getMIDIPorts = (midiAccess) => {
    // export const getMIDIDevices = (): { inputs: WebMidi.MIDIInput[], outputs: WebMidi.MIDIOutput[] } => {
    const inputs = [];
    const outputs = [];
    if (midiAccess) {
        midiAccess.inputs.forEach(i => {
            inputs.push(i);
        });
        midiAccess.outputs.forEach(o => {
            outputs.push(o);
        });
    }
    // console.log(inputs, outputs);
    return { inputs, outputs };
};
exports.getMIDIPorts = getMIDIPorts;


/***/ }),

/***/ "../src/parseMIDIFile.ts":
/*!*******************************!*\
  !*** ../src/parseMIDIFile.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// based on: https://github.com/pravdomil/jasmid.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseMIDIFile = void 0;
// import { BufferReader } from 'jasmid.ts';
const uniqid_1 = __importDefault(__webpack_require__(/*! uniqid */ "../node_modules/uniqid/index.js"));
const bufferreader_1 = __webpack_require__(/*! ./bufferreader */ "../src/bufferreader.ts");
const midi_1 = __webpack_require__(/*! ./util/midi */ "../src/util/midi.ts");
const calculateMillis_1 = __webpack_require__(/*! ./calculateMillis */ "../src/calculateMillis.ts");
const createTrack_1 = __webpack_require__(/*! ./createTrack */ "../src/createTrack.ts");
const createNotes_1 = __webpack_require__(/*! ./createNotes */ "../src/createNotes.ts");
function parseMIDIFile(buffer) {
    const reader = new bufferreader_1.BufferReader(buffer);
    const header = parseHeader(reader);
    // const { timeTrack, tracks } = parseTracks(reader, header.ticksPerBeat)
    const { tracks, events, initialTempo, initialNumerator, initialDenominator } = parseTracks(reader, header.ticksPerBeat);
    return {
        ppq: header.ticksPerBeat,
        latency: 17,
        bufferTime: 100,
        tracks,
        tracksById: tracks.reduce((acc, value) => {
            acc[value.id] = value;
            return acc;
        }, {}),
        events: calculateMillis_1.calculateMillis(events, {
            ppq: header.ticksPerBeat,
            bpm: initialTempo,
        }),
        notes: createNotes_1.createNotes(events),
        initialTempo,
        initialNumerator,
        initialDenominator,
    };
}
exports.parseMIDIFile = parseMIDIFile;
function parseHeader(reader) {
    const headerChunk = reader.midiChunk();
    if (headerChunk.id !== "MThd" || headerChunk.length !== 6) {
        throw new Error("Bad .mid file, header not found");
    }
    const headerReader = new bufferreader_1.BufferReader(headerChunk.data);
    const formatType = headerReader.uint16();
    const trackCount = headerReader.uint16();
    const timeDivision = headerReader.uint16();
    if (timeDivision & 0x8000) {
        throw new Error("Expressing time division in SMTPE frames is not supported yet");
    }
    const ticksPerBeat = timeDivision;
    return { formatType, trackCount, ticksPerBeat };
}
function parseTracks(reader, ppq) {
    let initialTempo = -1;
    let initialNumerator = -1;
    let initialDenominator = -1;
    const tracks = [];
    const events = [];
    while (!reader.eof()) {
        const trackChunk = reader.midiChunk();
        if (trackChunk.id !== "MTrk") {
            throw new Error(`Unexpected chunk, expected MTrk, got ${trackChunk.id}`);
        }
        const trackId = `T-${uniqid_1.default()}`;
        const track = createTrack_1.createTrack(trackId);
        const trackTrack = new bufferreader_1.BufferReader(trackChunk.data);
        let ticks = 0;
        let lastTypeByte = null;
        while (!trackTrack.eof()) {
            let data = parseEvent(trackTrack, lastTypeByte);
            // console.log(data);
            const { event, deltaTime, bpm, numerator, denominator, trackName } = data;
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
            lastTypeByte = event.type;
            events.push(Object.assign(Object.assign({}, event), { trackId,
                ticks }));
        }
        tracks.push(track);
    }
    return {
        events: midi_1.sortMIDIEvents(events),
        tracks,
        initialTempo,
        initialNumerator,
        initialDenominator,
    };
}
function parseEvent(reader, lastTypeByte) {
    const deltaTime = reader.midiInt();
    let typeByte = reader.uint8();
    // meta events: 0xff
    // system events: 0xf0, 0xf7
    // midi events: all other bytes
    if (typeByte === 0xff) {
        const subTypeByte = reader.uint8();
        const length = reader.midiInt();
        switch (subTypeByte) {
            // sequence number
            case 0x00:
                if (length !== 2) {
                    throw new Error(`Expected length for sequenceNumber event is 2, got ${length}`);
                }
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.SEQUENCE_NUMBER,
                        number: reader.uint16(),
                    },
                    deltaTime,
                };
            // text
            case 0x01:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.TEXT,
                        text: reader.string(length),
                    },
                    deltaTime,
                };
            // copyright
            case 0x02:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.COPYRIGHT_NOTICE,
                        text: reader.string(length),
                    },
                    deltaTime,
                };
            // track name
            case 0x03:
                const trackName = reader.string(length);
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.TRACK_NAME,
                        text: trackName,
                    },
                    deltaTime,
                    trackName,
                };
            // instrument name
            case 0x04:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.INSTRUMENT_NAME,
                        text: reader.string(length),
                    },
                    deltaTime,
                };
            // lyrics
            case 0x05:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.LYRICS,
                        text: reader.string(length),
                    },
                    deltaTime,
                };
            // marker
            case 0x06:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.MARKER,
                        text: reader.string(length),
                    },
                    deltaTime,
                };
            // cue point
            case 0x07:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.CUE_POINT,
                        text: reader.string(length),
                    },
                    deltaTime,
                };
            // channel prefix
            case 0x20:
                if (length !== 1) {
                    throw new Error(`Expected length for midiChannelPrefix event is 1, got ${length}`);
                }
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.CHANNEL_PREFIX,
                        channel: reader.uint8(),
                    },
                    deltaTime,
                };
            // end of track
            case 0x2f:
                if (length !== 0) {
                    throw new Error(`Expected length for endOfTrack event is 0, got ${length}`);
                }
                return {
                    event: {
                        descr: midi_1.END_OF_TRACK,
                        type: typeByte,
                        subType: subTypeByte,
                    },
                    deltaTime,
                };
            // tempo
            case 0x51:
                if (length !== 3) {
                    throw new Error(`Expected length for setTempo event is 3, got ${length}`);
                }
                const microsecondsPerBeat = (reader.uint8() << 16) + (reader.uint8() << 8) + reader.uint8();
                const bpm = 60000000 / microsecondsPerBeat;
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.TEMPO,
                        bpm,
                    },
                    bpm,
                    deltaTime,
                };
            // smpte offset
            case 0x54:
                if (length != 5) {
                    throw new Error(`Expected length for smpteOffset event is 5, got ${length}`);
                }
                const hourByte = reader.uint8();
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
                    deltaTime,
                };
            // time signature
            case 0x58:
                if (length != 4) {
                    throw new Error(`Expected length for timeSignature event is 4, got ${length}`);
                }
                const numerator = reader.uint8();
                const denominator = Math.pow(2, reader.uint8());
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.TIME_SIGNATURE,
                        numerator,
                        denominator,
                        metronome: reader.uint8(),
                        thirtySeconds: reader.uint8(),
                    },
                    numerator,
                    denominator,
                    deltaTime,
                };
            // key signature
            case 0x59:
                if (length != 2) {
                    throw new Error(`Expected length for keySignature event is 2, got ${length}`);
                }
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.KEY_SIGNATURE,
                        key: reader.int8(),
                        scale: reader.uint8(),
                    },
                    deltaTime,
                };
            // sequencer specific
            case 0x7f:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.SEQUENCER_SPECIFIC,
                        data: reader.read(length),
                    },
                    deltaTime,
                };
            // undefined
            default:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: "undefined",
                        data: reader.read(length),
                    },
                    deltaTime,
                };
        }
    }
    else if (typeByte === 0xf0) {
        // system exclusive
        const length = reader.midiInt();
        return {
            event: {
                type: 0xf0,
                descr: midi_1.SYSTEM_EXCLUSIVE,
                data: reader.read(length),
            },
            deltaTime,
        };
    }
    else if (typeByte === 0xf7) {
        // divided system exclusive
        const length = reader.midiInt();
        return {
            event: {
                type: 0xf0,
                descr: midi_1.DIVIDED_SYSTEM_EXCLUSIVE,
                data: reader.read(length),
            },
            deltaTime,
        };
    }
    else {
        /**
         * running status - reuse lastEventTypeByte as the event type
         * typeByte is actually the first parameter
         */
        const isRunningStatus = (typeByte & 0b10000000) === 0;
        const value = isRunningStatus ? typeByte : reader.uint8();
        typeByte = isRunningStatus ? (lastTypeByte === null ? 0 : lastTypeByte) : typeByte;
        // console.log(isRunningStatus, typeByte, value);
        const channel = typeByte & 0x0f;
        // channels[channel] = true;
        switch (typeByte >> 4) {
            // note off
            case 0x08:
                return {
                    event: {
                        type: 0x80,
                        descr: midi_1.NOTE_OFF,
                        channel,
                        noteNumber: value,
                        velocity: reader.uint8(),
                    },
                    deltaTime,
                };
            // note on
            case 0x09:
                const velocity = reader.uint8();
                return {
                    event: {
                        type: velocity === 0 ? 0x80 : 0x90,
                        descr: velocity === 0 ? midi_1.NOTE_OFF : midi_1.NOTE_ON,
                        channel,
                        noteNumber: value,
                        velocity,
                    },
                    deltaTime,
                };
            // note aftertouch
            case 0x0a:
                return {
                    event: {
                        type: 0xa0,
                        descr: midi_1.NOTE_AFTERTOUCH,
                        channel,
                        noteNumber: value,
                        amount: reader.uint8(),
                    },
                    deltaTime,
                };
            // controller
            case 0x0b:
                return {
                    event: {
                        type: 0xb0,
                        descr: midi_1.CONTROLLER,
                        channel,
                        controllerNumber: value,
                        value: reader.uint8(),
                    },
                    deltaTime,
                };
            // program change
            case 0x0c:
                return {
                    event: {
                        type: 0xc0,
                        descr: midi_1.PROGRAM_CHANGE,
                        channel,
                        program: value,
                    },
                    deltaTime,
                };
            // channel aftertouch
            case 0x0d:
                return {
                    event: {
                        type: 0xd0,
                        descr: midi_1.CHANNEL_AFTERTOUCH,
                        channel,
                        amount: value,
                    },
                    deltaTime,
                };
            // pitch bend
            case 0x0e:
                return {
                    event: {
                        type: 0xe0,
                        descr: midi_1.PITCH_BEND,
                        channel,
                        value: value + (reader.uint8() << 7),
                    },
                    deltaTime,
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
    console.log(`Unrecognized MIDI event type byte: ${typeByte} (fix this)`);
    return {
        event: {
            type: typeByte === 255 ? 0 : typeByte,
        },
        deltaTime,
    };
    throw new Error(`Unrecognized MIDI event type byte: ${typeByte}`);
}
function getFrameRate(hourByte) {
    switch (hourByte & 0b1100000) {
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetMIDIOutputs = void 0;
// import { midiAccess } from "./initAudioAndMIDI";
const getMIDIPorts_1 = __webpack_require__(/*! ./getMIDIPorts */ "../src/getMIDIPorts.ts");
// you can use this for a panic button that is common in DAWs
const resetMIDIOutputs = (midiAccess, offset = 100) => {
    if (midiAccess) {
        const { outputs } = getMIDIPorts_1.getMIDIPorts(midiAccess);
        const time = performance.now() + offset;
        outputs.forEach(output => {
            for (let channel = 0; channel < 16; channel++) {
                output.send([0xb0 + channel, 0x7b, 0x00], time); // stop all notes
                output.send([0xb0 + channel, 0x79, 0x00], time); // reset all controllers
            }
        });
    }
};
exports.resetMIDIOutputs = resetMIDIOutputs;


/***/ }),

/***/ "../src/scheduler.ts":
/*!***************************!*\
  !*** ../src/scheduler.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.schedule = void 0;
const midi_1 = __webpack_require__(/*! ./util/midi */ "../src/util/midi.ts");
const schedule = ({ song, index, millis, outputs, }) => {
    const ts = performance.now();
    const { events } = song;
    const scheduled = [];
    // let lastNoteNumber: number = -1;
    // let lastNoteType: number = -1;
    while (index < events.length) {
        const event = events[index];
        if (!event.millis || !event.trackId) {
            // break;
            index++;
        }
        else if (event.millis < millis + song.bufferTime) {
            scheduled.push(event);
            // console.log(event.ticks, event.descr, (event as NoteOnEvent).noteNumber);
            const track = song.tracksById[event.trackId];
            track.outputs.forEach(id => {
                var _a;
                if (event.descr === midi_1.NOTE_ON || event.descr === midi_1.NOTE_OFF) {
                    const e = event;
                    if (event.millis) {
                        // console.log(event.type, event.channel, event.noteNumber);
                        let time = ts + song.latency + track.latency + (event.millis - millis);
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
                        (_a = outputs === null || outputs === void 0 ? void 0 : outputs.get(id)) === null || _a === void 0 ? void 0 : _a.send([event.type + event.channel, event.noteNumber, event.velocity], time);
                    }
                }
            });
            index++;
        }
        else {
            break;
        }
    }
    // console.log('[SCHEDULED]', scheduled.map(e => [e.ticks, e.millis]));
    return { millis, index, scheduled };
};
exports.schedule = schedule;


/***/ }),

/***/ "../src/util/fetch.ts":
/*!****************************!*\
  !*** ../src/util/fetch.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fetchArraybuffer = exports.fetchXML = exports.fetchJSON = void 0;
const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
};
const fetchJSON = (url) => 
// fetch(url, {
//   mode: 'no-cors'
// })
fetch(url)
    .then(status)
    .then(response => response.json());
exports.fetchJSON = fetchJSON;
const fetchXML = (url) => fetch(url)
    .then(status)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"));
exports.fetchXML = fetchXML;
const fetchArraybuffer = (url) => fetch(url)
    .then(status)
    .then(response => response.arrayBuffer());
exports.fetchArraybuffer = fetchArraybuffer;


/***/ }),

/***/ "../src/util/midi.ts":
/*!***************************!*\
  !*** ../src/util/midi.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
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
const descriptions = {
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
const getMidiEventDescription = (type, subType) => {
    if (typeof subType === "undefined") {
        return descriptions[type];
    }
    return descriptions[type][subType] || "undefined";
};
exports.getMidiEventDescription = getMidiEventDescription;
const getMidiMessageEvent = (event) => {
    switch (event.descr) {
        case exports.NOTE_ON:
            return [0x90 + event.channel, event.noteNumber, event.velocity];
        case exports.NOTE_OFF:
            return [0x80 + event.channel, event.noteNumber, event.velocity];
    }
    return [0];
};
exports.getMidiMessageEvent = getMidiMessageEvent;
const getNoteNumber = (name, octave, mode = "sharp") => {
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
    let index = -1;
    const modes = Object.values(exports.noteNames);
    for (let i = 0; i < modes.length; i++) {
        const names = modes[i];
        for (let j = 0; j < names.length; j++) {
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
exports.getNoteNumber = getNoteNumber;
const sortMIDIEvents = (events) => events.sort((a, b) => {
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
exports.sortMIDIEvents = sortMIDIEvents;
const removeDoubleEvents = (events) => {
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
exports.removeDoubleEvents = removeDoubleEvents;


/***/ }),

/***/ "../node_modules/uniqid/index.js":
/*!***************************************!*\
  !*** ../node_modules/uniqid/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* 
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./basic/index.ts");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uL2Jhc2ljL2luZGV4LnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvYnVmZmVycmVhZGVyLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvY2FsY3VsYXRlTWlsbGlzLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvY3JlYXRlTm90ZXMudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy9jcmVhdGVTb25nRnJvbU1JRElGaWxlLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvY3JlYXRlVHJhY2sudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy9nZXRDdXJyZW50RXZlbnRJbmRleC50cyIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi4vc3JjL2dldE1JRElBY2Nlc3MudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy9nZXRNSURJUG9ydHMudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy9wYXJzZU1JRElGaWxlLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvcmVzZXRNSURJT3V0cHV0cy50cyIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi4vc3JjL3NjaGVkdWxlci50cyIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi4vc3JjL3V0aWwvZmV0Y2gudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy91dGlsL21pZGkudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO1VBQ0EiLCJmaWxlIjoiYmFzaWMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLy8gaW1wb3J0IFwianp6XCI7XG5pbXBvcnQgeyBzY2hlZHVsZSB9IGZyb20gXCIuLi8uLi9zcmMvc2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50RXZlbnRJbmRleCB9IGZyb20gXCIuLi8uLi9zcmMvZ2V0Q3VycmVudEV2ZW50SW5kZXhcIjtcbmltcG9ydCB7IGdldE1JRElBY2Nlc3MgfSBmcm9tIFwiLi4vLi4vc3JjL2dldE1JRElBY2Nlc3NcIjtcbmltcG9ydCB7IGdldE1JRElQb3J0cyB9IGZyb20gXCIuLi8uLi9zcmMvZ2V0TUlESVBvcnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVTb25nRnJvbU1JRElGaWxlIH0gZnJvbSBcIi4uLy4uL3NyYy9jcmVhdGVTb25nRnJvbU1JRElGaWxlXCI7XG5pbXBvcnQgeyByZXNldE1JRElPdXRwdXRzIH0gZnJvbSBcIi4uLy4uL3NyYy9yZXNldE1JRElPdXRwdXRzXCI7XG5cbmNvbnN0IHVybCA9IFwiLi4vYXNzZXRzL21pbnV0ZV93YWx0ei5taWRcIjtcbi8vIGNvbnNvbGUubG9nKFwiVVJMXCIsIHVybCk7XG4vLyBjb25zdCB1cmwgPSAnL2Fzc2V0cy9tb3prNTQ1YS5taWQnO1xuLy8gY29uc3QgdXJsID0gJy9hc3NldHMvbW96azU0NWFfbXVzZXNjb3JlLm1pZCc7XG5cbmNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1hID0gYXdhaXQgZ2V0TUlESUFjY2VzcygpO1xuICBjb25zdCBzb25nID0gYXdhaXQgY3JlYXRlU29uZ0Zyb21NSURJRmlsZSh1cmwpO1xuICBjb25zdCB7IGlucHV0cywgb3V0cHV0cyB9ID0gZ2V0TUlESVBvcnRzKG1hKTtcbiAgc29uZy50cmFja3MuZm9yRWFjaCgodHJhY2spID0+IHtcbiAgICB0cmFjay5vdXRwdXRzLnB1c2goLi4ub3V0cHV0cy5tYXAoKG8pID0+IG8uaWQpKTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHNvbmcpO1xuXG4gIGxldCBtaWxsaXMgPSAzMDAwO1xuICBzb25nLnBvc2l0aW9uTWlsbGlzID0gbWlsbGlzO1xuICBsZXQgaW5kZXggPSBnZXRDdXJyZW50RXZlbnRJbmRleChzb25nLCBtaWxsaXMpO1xuICAvLyBjb25zb2xlLmxvZyhcIlNUQVJUIElOREVYXCIsIGluZGV4KTtcbiAgbGV0IHN0YXJ0OiBudW1iZXIgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgY29uc3QgcGxheSA9IChhOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRzLCB0cyAtIHN0YXJ0LCBhLCBhIC0gc3RhcnQpO1xuICAgIC8vIGNvbnN0IHByb2dyZXNzID0gdHMgLSBhO1xuICAgIGNvbnN0IHByb2dyZXNzID0gdHMgLSBzdGFydDtcbiAgICBzdGFydCA9IHRzO1xuICAgIC8vIGNvbnN0IHByb2dyZXNzID0gYSAtIHN0YXJ0O1xuICAgIC8vIHN0YXJ0ID0gYTtcbiAgICBpZiAobWlsbGlzIDwgMTAwMDApIHtcbiAgICAgICh7IGluZGV4LCBtaWxsaXMgfSA9IHNjaGVkdWxlKHtcbiAgICAgICAgc29uZyxcbiAgICAgICAgbWlsbGlzLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgb3V0cHV0czogbWE/Lm91dHB1dHMsXG4gICAgICB9KSk7XG4gICAgICBtaWxsaXMgKz0gcHJvZ3Jlc3M7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCwgbWlsbGlzKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoYSkgPT4ge1xuICAgICAgICBwbGF5KGEpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc2V0TUlESU91dHB1dHMobWEpO1xuICAgIH1cbiAgfTtcbiAgcGxheShzdGFydCk7XG59O1xuXG5pbml0KCk7XG4iLCIvLyBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcHJhdmRvbWlsL2phc21pZC50c1xuXG5leHBvcnQgY2xhc3MgQnVmZmVyUmVhZGVyIHtcbiAgcHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIGRhdGE6IERhdGFWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKGJ1ZmZlcjogQXJyYXlCdWZmZXJMaWtlKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5kYXRhID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gIH1cblxuICByZWFkKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuYnVmZmVyLnNsaWNlKHRoaXMucG9zaXRpb24sIHRoaXMucG9zaXRpb24gKyBsZW5ndGgpO1xuICAgIHRoaXMucG9zaXRpb24gKz0gbGVuZ3RoO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGludDgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0SW50OCh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0VWludDgodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHVpbnQxNigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50MTYodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSAyO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHVpbnQzMigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50MzIodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSA0O1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0cmluZyhsZW5ndGg6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoXCJhc2NpaVwiKS5kZWNvZGUodGhpcy5yZWFkKGxlbmd0aCkpO1xuICB9XG5cbiAgZW9mKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID49IHRoaXMuZGF0YS5ieXRlTGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgYSBNSURJLXN0eWxlIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyLlxuICAgKiAoYmlnLWVuZGlhbiB2YWx1ZSBpbiBncm91cHMgb2YgNyBiaXRzLCB3aXRoIHRvcCBiaXQgc2V0IHRvIHNpZ25pZnkgdGhhdCBhbm90aGVyIGJ5dGUgZm9sbG93cylcbiAgICovXG4gIG1pZGlJbnQoKSB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy51aW50OCgpO1xuICAgICAgaWYgKHZhbHVlICYgMGIxMDAwMDAwMCkge1xuICAgICAgICByZXN1bHQgKz0gdmFsdWUgJiAwYjExMTExMTE7XG4gICAgICAgIHJlc3VsdCA8PD0gNztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtaWRpQ2h1bmsoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnN0cmluZyg0KTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnVpbnQzMigpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlYWQobGVuZ3RoKTtcbiAgICByZXR1cm4geyBpZCwgbGVuZ3RoLCBkYXRhIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE1JRElFdmVudCwgVGVtcG9FdmVudCB9IGZyb20gXCIuL01JRElFdmVudFwiO1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlTWlsbGlzID0gKFxuICBldmVudHM6IE1JRElFdmVudFtdLFxuICBkYXRhOiB7XG4gICAgcHBxOiBudW1iZXI7XG4gICAgYnBtPzogbnVtYmVyO1xuICAgIHBsYXliYWNrU3BlZWQ/OiBudW1iZXI7XG4gIH1cbik6IE1JRElFdmVudFtdID0+IHtcbiAgbGV0IHsgcHBxLCBicG0gPSAtMSwgcGxheWJhY2tTcGVlZCA9IDEgfSA9IGRhdGE7XG4gIGxldCBtaWxsaXNQZXJUaWNrID0gYnBtID09PSAtMSA/IDAgOiAoKCgxIC8gcGxheWJhY2tTcGVlZCkgKiA2MCkgLyBicG0gLyBwcHEpICogMTAwMDtcbiAgbGV0IHRpY2tzID0gMDtcbiAgbGV0IG1pbGxpcyA9IDA7XG4gIC8vIGNvbnNvbGUubG9nKFwiYnBtXCIsIGJwbSwgbWlsbGlzKTtcbiAgcmV0dXJuIGV2ZW50cy5tYXAoZXZlbnQgPT4ge1xuICAgIGlmICgoZXZlbnQgYXMgVGVtcG9FdmVudCkuYnBtKSB7XG4gICAgICAoeyBicG0gfSA9IGV2ZW50IGFzIFRlbXBvRXZlbnQpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJicG1cIiwgYnBtLCBtaWxsaXMpO1xuICAgICAgbWlsbGlzUGVyVGljayA9ICgoKDEgLyBwbGF5YmFja1NwZWVkKSAqIDYwKSAvIGJwbSAvIHBwcSkgKiAxMDAwO1xuICAgIH1cbiAgICBjb25zdCBkaWZmVGlja3MgPSBldmVudC50aWNrcyAtIHRpY2tzO1xuICAgIG1pbGxpcyArPSBkaWZmVGlja3MgKiBtaWxsaXNQZXJUaWNrO1xuICAgIGV2ZW50Lm1pbGxpcyA9IG1pbGxpcztcbiAgICB0aWNrcyA9IGV2ZW50LnRpY2tzO1xuICAgIHJldHVybiBldmVudDtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgTUlESUV2ZW50LCBOb3RlRXZlbnQsIE5vdGVPbkV2ZW50LCBOb3RlT2ZmRXZlbnQgfSBmcm9tIFwiLi9NSURJRXZlbnRcIjtcblxuLy8gTUlESUV2ZW50R2VuZXJpYyBhbmQgTUlESU5vdGVHZW5lcmljIGFyZSBkZWNsYXJlZCB0byBzdXBwb3J0IG90aGVyIE1JREkgcGxheWJhY2sgbGlicmFyaWVzIHN1Y2ggYXMgaGVhcnRiZWF0XG5leHBvcnQgaW50ZXJmYWNlIE1JRElFdmVudEdlbmVyaWMge1xuICBpZD86IHN0cmluZztcbiAgYmFyPzogbnVtYmVyO1xuICB0aWNrczogbnVtYmVyO1xuICBub3RlTnVtYmVyOiBudW1iZXI7XG4gIHRyYWNrSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUlESU5vdGVHZW5lcmljIHtcbiAgaWQ6IHN0cmluZztcbiAgbm90ZU9uOiBNSURJRXZlbnRHZW5lcmljO1xuICBub3RlT2ZmOiBNSURJRXZlbnRHZW5lcmljO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1JRElOb3RlIGV4dGVuZHMgTUlESU5vdGVHZW5lcmljIHtcbiAgbm90ZU9uOiBOb3RlT25FdmVudDtcbiAgbm90ZU9mZjogTm90ZU9mZkV2ZW50O1xuICBkdXJhdGlvblRpY2tzPzogbnVtYmVyO1xuICBkdXJhdGlvbk1pbGxpcz86IG51bWJlcjtcbiAgc3RhcnRUaWNrcz86IG51bWJlcjtcbiAgZW5kVGlja3M/OiBudW1iZXI7XG4gIHN0YXJ0TWlsbGlzPzogbnVtYmVyO1xuICBlbmRNaWxsaXM/OiBudW1iZXI7XG59XG5cbmxldCBpbmRleCA9IDA7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOb3RlcyA9IChldmVudHM6IE1JRElFdmVudFtdKTogTUlESU5vdGVbXSA9PiB7XG4gIGxldCBmaWx0ZXJlZDogTm90ZUV2ZW50W10gPSBldmVudHMucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbC50eXBlKTtcbiAgICBpZiAodmFsLnR5cGUgPT09IDB4ODAgfHwgdmFsLnR5cGUgPT09IDB4OTApIHtcbiAgICAgIGFjYy5wdXNoKHZhbCBhcyBOb3RlRXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSBhcyBOb3RlRXZlbnRbXSk7XG4gIC8vIGZpbHRlcmVkID0gc29ydE1JRElFdmVudHMoZmlsdGVyZWQpO1xuICBjb25zdCBub3RlczogTUlESU5vdGVbXSA9IFtdO1xuICBjb25zdCB0bXA6IHsgW2lkOiBzdHJpbmddOiBOb3RlRXZlbnQgfSA9IHt9O1xuICBmaWx0ZXJlZC5mb3JFYWNoKGUgPT4ge1xuICAgIGNvbnN0IGlkID0gYCR7ZS50cmFja0lkfS0ke2Uubm90ZU51bWJlcn1gO1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGlja3MsIGUudHlwZSwgaWQpO1xuICAgIGlmIChlLnR5cGUgPT09IDB4OTApIHtcbiAgICAgIGlmICh0bXBbaWRdKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2Fybihgbm90ZSBleGlzdGVkIGFscmVhZHkhICR7aWR9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0bXBbaWRdID0gZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gMHg4MCkge1xuICAgICAgaWYgKCF0bXBbaWRdKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2Fybihgbm90ZSBkb2Vzbid0IGV4aXN0ISAke2lkfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm90ZU9uID0gdG1wW2lkXTtcbiAgICAgICAgY29uc3Qgbm90ZTogTUlESU5vdGUgPSB7XG4gICAgICAgICAgaWQ6IGBub3RlLSR7bmV3IERhdGUoKS5nZXRUaW1lKCl9LSR7aW5kZXgrK31gLFxuICAgICAgICAgIG5vdGVPbjogbm90ZU9uIGFzIE5vdGVPbkV2ZW50LFxuICAgICAgICAgIG5vdGVPZmY6IGUsXG4gICAgICAgICAgLy8gZHVyYXRpb25UaWNrczogZS50aWNrcyAtIG5vdGVPbi50aWNrcyxcbiAgICAgICAgICAvLyBkdXJhdGlvbk1pbGxpczogZS5taWxsaXMgLSBub3RlT24ubWlsbGlzLFxuICAgICAgICAgIC8vIHN0YXJ0VGlja3M6IG5vdGVPbi50aWNrcyxcbiAgICAgICAgICAvLyBzdGFydE1pbGxpczogbm90ZU9uLm1pbGxpcyxcbiAgICAgICAgICAvLyBlbmRUaWNrczogZS50aWNrcyxcbiAgICAgICAgICAvLyBlbmRNaWxsaXM6IGUubWlsbGlzLFxuICAgICAgICB9O1xuICAgICAgICBub3Rlcy5wdXNoKG5vdGUpO1xuICAgICAgICBkZWxldGUgdG1wW2lkXTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAvLyBjb25zb2xlLmxvZyhub3Rlcyk7XG4gIHJldHVybiBub3Rlcztcbn07XG4iLCJpbXBvcnQgeyBmZXRjaEFycmF5YnVmZmVyIH0gZnJvbSBcIi4vdXRpbC9mZXRjaFwiO1xuaW1wb3J0IHsgcGFyc2VNSURJRmlsZSB9IGZyb20gXCIuL3BhcnNlTUlESUZpbGVcIjtcbmltcG9ydCB7IFNvbmcgfSBmcm9tIFwiLi9jcmVhdGVTb25nXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTb25nRnJvbU1JRElGaWxlID0gYXN5bmMgKGFyZzogc3RyaW5nIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPFNvbmc+ID0+IHtcbiAgbGV0IGFiOiBBcnJheUJ1ZmZlcjtcbiAgaWYgKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhYiA9IGF3YWl0IGZldGNoQXJyYXlidWZmZXIoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICBhYiA9IGFyZztcbiAgfVxuICAvLyBjb25zdCB7IGhlYWRlciwgdGltZVRyYWNrLCB0cmFja3MgfSA9IHBhcnNlTWlkaUZpbGUoYWIpO1xuICByZXR1cm4gcGFyc2VNSURJRmlsZShhYik7XG59O1xuIiwiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ3ZWJtaWRpXCIgLz5cblxuaW1wb3J0IHsgTUlESUV2ZW50IH0gZnJvbSBcIi4vTUlESUV2ZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2sge1xuICBpZDogc3RyaW5nO1xuICBsYXRlbmN5OiBudW1iZXI7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZvbHVtZT86IG51bWJlcjtcbiAgaW5wdXRzOiBzdHJpbmdbXTsgLy8gaWRzIG9mIE1JREkgaW5wdXRzXG4gIG91dHB1dHM6IHN0cmluZ1tdOyAvLyBpZHMgb2YgTUlESSBvdXRwdXRzXG4gIGluc3RydW1lbnQ/OiBzdHJpbmc7XG4gIHByb2Nlc3Nvcj86IChldmVudDogTUlESUV2ZW50IHwgV2ViTWlkaS5NSURJTWVzc2FnZUV2ZW50KSA9PiB2b2lkOyAvLyBhIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIGFuIGV2ZW50IGludG8gc291bmQgb3Igc29tZXRoaW5nIGVsc2Vcbn1cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFjayA9IChpZDogc3RyaW5nKTogVHJhY2sgPT4ge1xuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGxhdGVuY3k6IDAsXG4gICAgaW5wdXRzOiBbXSxcbiAgICBvdXRwdXRzOiBbXSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vY3JlYXRlU29uZ1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudEV2ZW50SW5kZXggPSAoXG4gIHNvbmc6IFNvbmcsXG4gIG1pbGxpczogbnVtYmVyLFxuICBzdGFydEluZGV4OiBudW1iZXIgPSAwXG4pOiBudW1iZXIgPT4ge1xuICBjb25zdCB7IGV2ZW50cyB9ID0gc29uZztcbiAgbGV0IGkgPSBzdGFydEluZGV4O1xuICBmb3IgKDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2ldO1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50Lm1pbGxpcywgbWlsbGlzKTtcbiAgICBpZiAodHlwZW9mIGV2ZW50Lm1pbGxpcyA9PT0gXCJ1bmRlZmluZWRcIiB8fCBldmVudC5taWxsaXMgPj0gbWlsbGlzKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGk7XG59O1xuIiwibGV0IG1pZGlBY2Nlc3M6IFdlYk1pZGkuTUlESUFjY2VzcyB8IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRNSURJQWNjZXNzID0gYXN5bmMgKCk6IFByb21pc2U8V2ViTWlkaS5NSURJQWNjZXNzIHwgbnVsbD4gPT4ge1xuICBpZiAobWlkaUFjY2VzcyAhPT0gbnVsbCAmJiB0eXBlb2YgbWlkaUFjY2VzcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobWlkaUFjY2Vzcyk7XG4gIH1cblxuICBpZiAoIW5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2Vzcykge1xuICAgIG1pZGlBY2Nlc3MgPSBudWxsO1xuICAgIGNvbnNvbGUubG9nKFwiV2ViTUlESSBub3Qgc3VwcG9ydGVkXCIpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IG1hID0gYXdhaXQgbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzKCk7XG4gICAgLy8gbWlkaUFjY2Vzcy5vbnN0YXRlY2hhbmdlID0gKGU6IFdlYk1pZGkuTUlESUNvbm5lY3Rpb25FdmVudCkgPT4ge1xuICAgIC8vIH07XG4gICAgaWYgKCFtYS5pbnB1dHMgfHwgIW1hLm91dHB1dHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWZveCBXZWJNSURJIEFQSSBzdXBwb3J0IGlzIHN0aWxsIGluIHByb2dyZXNzXCIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIG1pZGlBY2Nlc3MgPSBtYTtcbiAgICByZXR1cm4gbWE7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIk1JREkgY291bGQgbm90IGJlIGluaXRpYWxpemVkOlwiLCBlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBnZXRNSURJUG9ydHMgPSAoXG4gIG1pZGlBY2Nlc3M6IFdlYk1pZGkuTUlESUFjY2VzcyB8IG51bGxcbik6IHtcbiAgaW5wdXRzOiBXZWJNaWRpLk1JRElJbnB1dFtdO1xuICBvdXRwdXRzOiBXZWJNaWRpLk1JRElPdXRwdXRbXTtcbn0gPT4ge1xuICAvLyBleHBvcnQgY29uc3QgZ2V0TUlESURldmljZXMgPSAoKTogeyBpbnB1dHM6IFdlYk1pZGkuTUlESUlucHV0W10sIG91dHB1dHM6IFdlYk1pZGkuTUlESU91dHB1dFtdIH0gPT4ge1xuICBjb25zdCBpbnB1dHM6IFdlYk1pZGkuTUlESUlucHV0W10gPSBbXTtcbiAgY29uc3Qgb3V0cHV0czogV2ViTWlkaS5NSURJT3V0cHV0W10gPSBbXTtcbiAgaWYgKG1pZGlBY2Nlc3MpIHtcbiAgICBtaWRpQWNjZXNzLmlucHV0cy5mb3JFYWNoKGkgPT4ge1xuICAgICAgaW5wdXRzLnB1c2goaSk7XG4gICAgfSk7XG4gICAgbWlkaUFjY2Vzcy5vdXRwdXRzLmZvckVhY2gobyA9PiB7XG4gICAgICBvdXRwdXRzLnB1c2gobyk7XG4gICAgfSk7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coaW5wdXRzLCBvdXRwdXRzKTtcbiAgcmV0dXJuIHsgaW5wdXRzLCBvdXRwdXRzIH07XG59O1xuIiwiLy8gYmFzZWQgb246IGh0dHBzOi8vZ2l0aHViLmNvbS9wcmF2ZG9taWwvamFzbWlkLnRzXG5cbi8vIGltcG9ydCB7IEJ1ZmZlclJlYWRlciB9IGZyb20gJ2phc21pZC50cyc7XG5pbXBvcnQgdW5pcXVpZCBmcm9tIFwidW5pcWlkXCI7XG5pbXBvcnQgeyBCdWZmZXJSZWFkZXIgfSBmcm9tIFwiLi9idWZmZXJyZWFkZXJcIjtcbmltcG9ydCB7IE1JRElFdmVudCB9IGZyb20gXCIuL01JRElFdmVudFwiO1xuaW1wb3J0IHtcbiAgU0VRVUVOQ0VfTlVNQkVSLFxuICBURVhULFxuICBDT1BZUklHSFRfTk9USUNFLFxuICBUUkFDS19OQU1FLFxuICBJTlNUUlVNRU5UX05BTUUsXG4gIExZUklDUyxcbiAgTUFSS0VSLFxuICBDVUVfUE9JTlQsXG4gIENIQU5ORUxfUFJFRklYLFxuICBFTkRfT0ZfVFJBQ0ssXG4gIFRFTVBPLFxuICBTTVBURV9PRkZTRVQsXG4gIFRJTUVfU0lHTkFUVVJFLFxuICBLRVlfU0lHTkFUVVJFLFxuICBTRVFVRU5DRVJfU1BFQ0lGSUMsXG4gIFNZU1RFTV9FWENMVVNJVkUsXG4gIERJVklERURfU1lTVEVNX0VYQ0xVU0lWRSxcbiAgTk9URV9PTixcbiAgTk9URV9PRkYsXG4gIE5PVEVfQUZURVJUT1VDSCxcbiAgQ09OVFJPTExFUixcbiAgUFJPR1JBTV9DSEFOR0UsXG4gIENIQU5ORUxfQUZURVJUT1VDSCxcbiAgUElUQ0hfQkVORCxcbiAgc29ydE1JRElFdmVudHMsXG59IGZyb20gXCIuL3V0aWwvbWlkaVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTWlsbGlzIH0gZnJvbSBcIi4vY2FsY3VsYXRlTWlsbGlzXCI7XG5pbXBvcnQgeyBUcmFjayB9IGZyb20gXCIuL2NyZWF0ZVRyYWNrXCI7XG5pbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vY3JlYXRlU29uZ1wiO1xuaW1wb3J0IHsgY3JlYXRlVHJhY2sgfSBmcm9tIFwiLi9jcmVhdGVUcmFja1wiO1xuaW1wb3J0IHsgY3JlYXRlTm90ZXMgfSBmcm9tIFwiLi9jcmVhdGVOb3Rlc1wiO1xuXG50eXBlIFBhcnNlZERhdGEgPSB7XG4gIGV2ZW50OiBhbnk7XG4gIGRlbHRhVGltZTogbnVtYmVyO1xuICBicG0/OiBudW1iZXI7XG4gIG51bWVyYXRvcj86IG51bWJlcjtcbiAgZGVub21pbmF0b3I/OiBudW1iZXI7XG4gIHRyYWNrTmFtZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1JRElGaWxlKGJ1ZmZlcjogQXJyYXlCdWZmZXJMaWtlKTogU29uZyB7XG4gIGNvbnN0IHJlYWRlciA9IG5ldyBCdWZmZXJSZWFkZXIoYnVmZmVyKTtcblxuICBjb25zdCBoZWFkZXIgPSBwYXJzZUhlYWRlcihyZWFkZXIpO1xuICAvLyBjb25zdCB7IHRpbWVUcmFjaywgdHJhY2tzIH0gPSBwYXJzZVRyYWNrcyhyZWFkZXIsIGhlYWRlci50aWNrc1BlckJlYXQpXG4gIGNvbnN0IHsgdHJhY2tzLCBldmVudHMsIGluaXRpYWxUZW1wbywgaW5pdGlhbE51bWVyYXRvciwgaW5pdGlhbERlbm9taW5hdG9yIH0gPSBwYXJzZVRyYWNrcyhcbiAgICByZWFkZXIsXG4gICAgaGVhZGVyLnRpY2tzUGVyQmVhdFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHBxOiBoZWFkZXIudGlja3NQZXJCZWF0LFxuICAgIGxhdGVuY3k6IDE3LCAvLyB2YWx1ZSBpbiBtaWxsaXNlY29uZHMgLT4gdGhlIGxlbmd0aCBvZiBhIHNpbmdsZSBmcmFtZSBAIDYwSHogcmVmcmVzaCByYXRlXG4gICAgYnVmZmVyVGltZTogMTAwLCAvLyB2YWx1ZSBpbiBtaWxsaXNlY29uZHNcbiAgICB0cmFja3MsXG4gICAgdHJhY2tzQnlJZDogdHJhY2tzLnJlZHVjZSgoYWNjOiB7IFtpZDogc3RyaW5nXTogVHJhY2sgfSwgdmFsdWUpID0+IHtcbiAgICAgIGFjY1t2YWx1ZS5pZF0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pLFxuICAgIGV2ZW50czogY2FsY3VsYXRlTWlsbGlzKGV2ZW50cywge1xuICAgICAgcHBxOiBoZWFkZXIudGlja3NQZXJCZWF0LFxuICAgICAgYnBtOiBpbml0aWFsVGVtcG8sXG4gICAgfSksXG4gICAgbm90ZXM6IGNyZWF0ZU5vdGVzKGV2ZW50cyksXG4gICAgaW5pdGlhbFRlbXBvLFxuICAgIGluaXRpYWxOdW1lcmF0b3IsXG4gICAgaW5pdGlhbERlbm9taW5hdG9yLFxuICB9IGFzIFNvbmc7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHJlYWRlcjogQnVmZmVyUmVhZGVyKSB7XG4gIGNvbnN0IGhlYWRlckNodW5rID0gcmVhZGVyLm1pZGlDaHVuaygpO1xuICBpZiAoaGVhZGVyQ2h1bmsuaWQgIT09IFwiTVRoZFwiIHx8IGhlYWRlckNodW5rLmxlbmd0aCAhPT0gNikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkJhZCAubWlkIGZpbGUsIGhlYWRlciBub3QgZm91bmRcIik7XG4gIH1cblxuICBjb25zdCBoZWFkZXJSZWFkZXIgPSBuZXcgQnVmZmVyUmVhZGVyKGhlYWRlckNodW5rLmRhdGEpO1xuICBjb25zdCBmb3JtYXRUeXBlID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICBjb25zdCB0cmFja0NvdW50ID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICBjb25zdCB0aW1lRGl2aXNpb24gPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGlmICh0aW1lRGl2aXNpb24gJiAweDgwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHByZXNzaW5nIHRpbWUgZGl2aXNpb24gaW4gU01UUEUgZnJhbWVzIGlzIG5vdCBzdXBwb3J0ZWQgeWV0XCIpO1xuICB9XG4gIGNvbnN0IHRpY2tzUGVyQmVhdCA9IHRpbWVEaXZpc2lvbjtcblxuICByZXR1cm4geyBmb3JtYXRUeXBlLCB0cmFja0NvdW50LCB0aWNrc1BlckJlYXQgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUcmFja3MoXG4gIHJlYWRlcjogQnVmZmVyUmVhZGVyLFxuICBwcHE6IG51bWJlclxuKToge1xuICB0cmFja3M6IFRyYWNrW107XG4gIGV2ZW50czogTUlESUV2ZW50W107XG4gIGluaXRpYWxUZW1wbzogbnVtYmVyO1xuICBpbml0aWFsTnVtZXJhdG9yOiBudW1iZXI7XG4gIGluaXRpYWxEZW5vbWluYXRvcjogbnVtYmVyO1xufSB7XG4gIGxldCBpbml0aWFsVGVtcG8gPSAtMTtcbiAgbGV0IGluaXRpYWxOdW1lcmF0b3IgPSAtMTtcbiAgbGV0IGluaXRpYWxEZW5vbWluYXRvciA9IC0xO1xuICBjb25zdCB0cmFja3M6IFRyYWNrW10gPSBbXTtcbiAgY29uc3QgZXZlbnRzOiBNSURJRXZlbnRbXSA9IFtdO1xuICB3aGlsZSAoIXJlYWRlci5lb2YoKSkge1xuICAgIGNvbnN0IHRyYWNrQ2h1bmsgPSByZWFkZXIubWlkaUNodW5rKCk7XG5cbiAgICBpZiAodHJhY2tDaHVuay5pZCAhPT0gXCJNVHJrXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBjaHVuaywgZXhwZWN0ZWQgTVRyaywgZ290ICR7dHJhY2tDaHVuay5pZH1gKTtcbiAgICB9XG4gICAgY29uc3QgdHJhY2tJZCA9IGBULSR7dW5pcXVpZCgpfWA7XG4gICAgY29uc3QgdHJhY2sgPSBjcmVhdGVUcmFjayh0cmFja0lkKTtcbiAgICBjb25zdCB0cmFja1RyYWNrID0gbmV3IEJ1ZmZlclJlYWRlcih0cmFja0NodW5rLmRhdGEpO1xuICAgIGxldCB0aWNrcyA9IDA7XG4gICAgbGV0IGxhc3RUeXBlQnl0ZSA9IG51bGw7XG4gICAgd2hpbGUgKCF0cmFja1RyYWNrLmVvZigpKSB7XG4gICAgICBsZXQgZGF0YSA9IHBhcnNlRXZlbnQodHJhY2tUcmFjaywgbGFzdFR5cGVCeXRlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgY29uc3QgeyBldmVudCwgZGVsdGFUaW1lLCBicG0sIG51bWVyYXRvciwgZGVub21pbmF0b3IsIHRyYWNrTmFtZSB9ID0gZGF0YTtcbiAgICAgIGlmIChicG0gJiYgaW5pdGlhbFRlbXBvID09PSAtMSkge1xuICAgICAgICBpbml0aWFsVGVtcG8gPSBicG07XG4gICAgICB9XG4gICAgICBpZiAobnVtZXJhdG9yICYmIGluaXRpYWxOdW1lcmF0b3IgPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxOdW1lcmF0b3IgPSBudW1lcmF0b3I7XG4gICAgICB9XG4gICAgICBpZiAoZGVub21pbmF0b3IgJiYgaW5pdGlhbERlbm9taW5hdG9yID09PSAtMSkge1xuICAgICAgICBpbml0aWFsRGVub21pbmF0b3IgPSBkZW5vbWluYXRvcjtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFja05hbWUpIHtcbiAgICAgICAgdHJhY2submFtZSA9IHRyYWNrTmFtZTtcbiAgICAgIH1cbiAgICAgIHRpY2tzICs9IGRlbHRhVGltZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdUSUNLUycsIHRpY2tzLCBicG0sIG51bWVyYXRvcik7XG4gICAgICBsYXN0VHlwZUJ5dGUgPSBldmVudC50eXBlO1xuICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgdHJhY2tJZCxcbiAgICAgICAgdGlja3MsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdHJhY2tzLnB1c2godHJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBldmVudHM6IHNvcnRNSURJRXZlbnRzKGV2ZW50cyksXG4gICAgdHJhY2tzLFxuICAgIGluaXRpYWxUZW1wbyxcbiAgICBpbml0aWFsTnVtZXJhdG9yLFxuICAgIGluaXRpYWxEZW5vbWluYXRvcixcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFdmVudChyZWFkZXI6IEJ1ZmZlclJlYWRlciwgbGFzdFR5cGVCeXRlOiBudW1iZXIgfCBudWxsKTogUGFyc2VkRGF0YSB7XG4gIGNvbnN0IGRlbHRhVGltZSA9IHJlYWRlci5taWRpSW50KCk7XG4gIGxldCB0eXBlQnl0ZSA9IHJlYWRlci51aW50OCgpO1xuXG4gIC8vIG1ldGEgZXZlbnRzOiAweGZmXG4gIC8vIHN5c3RlbSBldmVudHM6IDB4ZjAsIDB4ZjdcbiAgLy8gbWlkaSBldmVudHM6IGFsbCBvdGhlciBieXRlc1xuXG4gIGlmICh0eXBlQnl0ZSA9PT0gMHhmZikge1xuICAgIGNvbnN0IHN1YlR5cGVCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgY29uc3QgbGVuZ3RoID0gcmVhZGVyLm1pZGlJbnQoKTtcblxuICAgIHN3aXRjaCAoc3ViVHlwZUJ5dGUpIHtcbiAgICAgIC8vIHNlcXVlbmNlIG51bWJlclxuICAgICAgY2FzZSAweDAwOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHNlcXVlbmNlTnVtYmVyIGV2ZW50IGlzIDIsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFNFUVVFTkNFX05VTUJFUixcbiAgICAgICAgICAgIG51bWJlcjogcmVhZGVyLnVpbnQxNigpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGV4dFxuICAgICAgY2FzZSAweDAxOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRFWFQsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjb3B5cmlnaHRcbiAgICAgIGNhc2UgMHgwMjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBDT1BZUklHSFRfTk9USUNFLFxuICAgICAgICAgICAgdGV4dDogcmVhZGVyLnN0cmluZyhsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdHJhY2sgbmFtZVxuICAgICAgY2FzZSAweDAzOlxuICAgICAgICBjb25zdCB0cmFja05hbWUgPSByZWFkZXIuc3RyaW5nKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogVFJBQ0tfTkFNRSxcbiAgICAgICAgICAgIHRleHQ6IHRyYWNrTmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgICB0cmFja05hbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBpbnN0cnVtZW50IG5hbWVcbiAgICAgIGNhc2UgMHgwNDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBJTlNUUlVNRU5UX05BTUUsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBseXJpY3NcbiAgICAgIGNhc2UgMHgwNTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBMWVJJQ1MsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBtYXJrZXJcbiAgICAgIGNhc2UgMHgwNjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBNQVJLRVIsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjdWUgcG9pbnRcbiAgICAgIGNhc2UgMHgwNzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBDVUVfUE9JTlQsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjaGFubmVsIHByZWZpeFxuICAgICAgY2FzZSAweDIwOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIG1pZGlDaGFubmVsUHJlZml4IGV2ZW50IGlzIDEsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENIQU5ORUxfUFJFRklYLFxuICAgICAgICAgICAgY2hhbm5lbDogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBlbmQgb2YgdHJhY2tcbiAgICAgIGNhc2UgMHgyZjpcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBlbmRPZlRyYWNrIGV2ZW50IGlzIDAsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICBkZXNjcjogRU5EX09GX1RSQUNLLFxuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHRlbXBvXG4gICAgICBjYXNlIDB4NTE6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc2V0VGVtcG8gZXZlbnQgaXMgMywgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1pY3Jvc2Vjb25kc1BlckJlYXQgPSAocmVhZGVyLnVpbnQ4KCkgPDwgMTYpICsgKHJlYWRlci51aW50OCgpIDw8IDgpICsgcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIGNvbnN0IGJwbSA9IDYwMDAwMDAwIC8gbWljcm9zZWNvbmRzUGVyQmVhdDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBURU1QTyxcbiAgICAgICAgICAgIGJwbSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJwbSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBzbXB0ZSBvZmZzZXRcbiAgICAgIGNhc2UgMHg1NDpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSA1KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHNtcHRlT2Zmc2V0IGV2ZW50IGlzIDUsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBob3VyQnl0ZSA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFNNUFRFX09GRlNFVCxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogZ2V0RnJhbWVSYXRlKGhvdXJCeXRlKSxcbiAgICAgICAgICAgIGhvdXI6IGhvdXJCeXRlICYgMHgxZixcbiAgICAgICAgICAgIG1pbjogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBzZWM6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgZnJhbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgc3ViRnJhbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGltZSBzaWduYXR1cmVcbiAgICAgIGNhc2UgMHg1ODpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSA0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHRpbWVTaWduYXR1cmUgZXZlbnQgaXMgNCwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG51bWVyYXRvciA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICBjb25zdCBkZW5vbWluYXRvciA9IE1hdGgucG93KDIsIHJlYWRlci51aW50OCgpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBUSU1FX1NJR05BVFVSRSxcbiAgICAgICAgICAgIG51bWVyYXRvcixcbiAgICAgICAgICAgIGRlbm9taW5hdG9yLFxuICAgICAgICAgICAgbWV0cm9ub21lOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICAgIHRoaXJ0eVNlY29uZHM6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbnVtZXJhdG9yLFxuICAgICAgICAgIGRlbm9taW5hdG9yLFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGtleSBzaWduYXR1cmVcbiAgICAgIGNhc2UgMHg1OTpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIGtleVNpZ25hdHVyZSBldmVudCBpcyAyLCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBLRVlfU0lHTkFUVVJFLFxuICAgICAgICAgICAga2V5OiByZWFkZXIuaW50OCgpLFxuICAgICAgICAgICAgc2NhbGU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gc2VxdWVuY2VyIHNwZWNpZmljXG4gICAgICBjYXNlIDB4N2Y6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU0VRVUVOQ0VSX1NQRUNJRklDLFxuICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHVuZGVmaW5lZFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBcInVuZGVmaW5lZFwiLFxuICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZUJ5dGUgPT09IDB4ZjApIHtcbiAgICAvLyBzeXN0ZW0gZXhjbHVzaXZlXG4gICAgY29uc3QgbGVuZ3RoID0gcmVhZGVyLm1pZGlJbnQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQ6IHtcbiAgICAgICAgdHlwZTogMHhmMCxcbiAgICAgICAgZGVzY3I6IFNZU1RFTV9FWENMVVNJVkUsXG4gICAgICAgIGRhdGE6IHJlYWRlci5yZWFkKGxlbmd0aCksXG4gICAgICB9LFxuICAgICAgZGVsdGFUaW1lLFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZUJ5dGUgPT09IDB4ZjcpIHtcbiAgICAvLyBkaXZpZGVkIHN5c3RlbSBleGNsdXNpdmVcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDoge1xuICAgICAgICB0eXBlOiAweGYwLFxuICAgICAgICBkZXNjcjogRElWSURFRF9TWVNURU1fRVhDTFVTSVZFLFxuICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgfSxcbiAgICAgIGRlbHRhVGltZSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8qKlxuICAgICAqIHJ1bm5pbmcgc3RhdHVzIC0gcmV1c2UgbGFzdEV2ZW50VHlwZUJ5dGUgYXMgdGhlIGV2ZW50IHR5cGVcbiAgICAgKiB0eXBlQnl0ZSBpcyBhY3R1YWxseSB0aGUgZmlyc3QgcGFyYW1ldGVyXG4gICAgICovXG4gICAgY29uc3QgaXNSdW5uaW5nU3RhdHVzID0gKHR5cGVCeXRlICYgMGIxMDAwMDAwMCkgPT09IDA7XG4gICAgY29uc3QgdmFsdWUgPSBpc1J1bm5pbmdTdGF0dXMgPyB0eXBlQnl0ZSA6IHJlYWRlci51aW50OCgpO1xuICAgIHR5cGVCeXRlID0gaXNSdW5uaW5nU3RhdHVzID8gKGxhc3RUeXBlQnl0ZSA9PT0gbnVsbCA/IDAgOiBsYXN0VHlwZUJ5dGUpIDogdHlwZUJ5dGU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhpc1J1bm5pbmdTdGF0dXMsIHR5cGVCeXRlLCB2YWx1ZSk7XG5cbiAgICBjb25zdCBjaGFubmVsID0gdHlwZUJ5dGUgJiAweDBmO1xuICAgIC8vIGNoYW5uZWxzW2NoYW5uZWxdID0gdHJ1ZTtcblxuICAgIHN3aXRjaCAodHlwZUJ5dGUgPj4gNCkge1xuICAgICAgLy8gbm90ZSBvZmZcbiAgICAgIGNhc2UgMHgwODpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHg4MCxcbiAgICAgICAgICAgIGRlc2NyOiBOT1RFX09GRixcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIG5vdGUgb25cbiAgICAgIGNhc2UgMHgwOTpcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSByZWFkZXIudWludDgoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdmVsb2NpdHkgPT09IDAgPyAweDgwIDogMHg5MCxcbiAgICAgICAgICAgIGRlc2NyOiB2ZWxvY2l0eSA9PT0gMCA/IE5PVEVfT0ZGIDogTk9URV9PTixcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgIHZlbG9jaXR5LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gbm90ZSBhZnRlcnRvdWNoXG4gICAgICBjYXNlIDB4MGE6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4YTAsXG4gICAgICAgICAgICBkZXNjcjogTk9URV9BRlRFUlRPVUNILFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgYW1vdW50OiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNvbnRyb2xsZXJcbiAgICAgIGNhc2UgMHgwYjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhiMCxcbiAgICAgICAgICAgIGRlc2NyOiBDT05UUk9MTEVSLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gcHJvZ3JhbSBjaGFuZ2VcbiAgICAgIGNhc2UgMHgwYzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhjMCxcbiAgICAgICAgICAgIGRlc2NyOiBQUk9HUkFNX0NIQU5HRSxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBwcm9ncmFtOiB2YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNoYW5uZWwgYWZ0ZXJ0b3VjaFxuICAgICAgY2FzZSAweDBkOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGQwLFxuICAgICAgICAgICAgZGVzY3I6IENIQU5ORUxfQUZURVJUT1VDSCxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBhbW91bnQ6IHZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gcGl0Y2ggYmVuZFxuICAgICAgY2FzZSAweDBlOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGUwLFxuICAgICAgICAgICAgZGVzY3I6IFBJVENIX0JFTkQsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlICsgKHJlYWRlci51aW50OCgpIDw8IDcpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuXG4gICAgICAvLyBkZWZhdWx0OlxuICAgICAgLy8gICByZXR1cm4ge1xuICAgICAgLy8gICAgIGV2ZW50OiB7XG4gICAgICAvLyAgICAgICB0eXBlOiB0eXBlQnl0ZSA+PiA0LFxuICAgICAgLy8gICAgICAgZGVzY3I6IFwidW5yZWNvZ25pemVkXCIsXG4gICAgICAvLyAgICAgICBjaGFubmVsLFxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAgZGVsdGFUaW1lLFxuICAgICAgLy8gICB9O1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhgVW5yZWNvZ25pemVkIE1JREkgZXZlbnQgdHlwZSBieXRlOiAke3R5cGVCeXRlfSAoZml4IHRoaXMpYCk7XG4gIHJldHVybiB7XG4gICAgZXZlbnQ6IHtcbiAgICAgIHR5cGU6IHR5cGVCeXRlID09PSAyNTUgPyAwIDogdHlwZUJ5dGUsXG4gICAgfSxcbiAgICBkZWx0YVRpbWUsXG4gIH07XG4gIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIE1JREkgZXZlbnQgdHlwZSBieXRlOiAke3R5cGVCeXRlfWApO1xufVxuXG5mdW5jdGlvbiBnZXRGcmFtZVJhdGUoaG91ckJ5dGU6IG51bWJlcikge1xuICBzd2l0Y2ggKGhvdXJCeXRlICYgMGIxMTAwMDAwKSB7XG4gICAgY2FzZSAweDAwOlxuICAgICAgcmV0dXJuIDI0O1xuICAgIGNhc2UgMHgyMDpcbiAgICAgIHJldHVybiAyNTtcbiAgICBjYXNlIDB4NDA6XG4gICAgICByZXR1cm4gMjk7XG4gICAgY2FzZSAweDYwOlxuICAgICAgcmV0dXJuIDMwO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgbWlkaUFjY2VzcyB9IGZyb20gXCIuL2luaXRBdWRpb0FuZE1JRElcIjtcbmltcG9ydCB7IGdldE1JRElQb3J0cyB9IGZyb20gXCIuL2dldE1JRElQb3J0c1wiO1xuXG4vLyB5b3UgY2FuIHVzZSB0aGlzIGZvciBhIHBhbmljIGJ1dHRvbiB0aGF0IGlzIGNvbW1vbiBpbiBEQVdzXG5leHBvcnQgY29uc3QgcmVzZXRNSURJT3V0cHV0cyA9IChtaWRpQWNjZXNzOiBXZWJNaWRpLk1JRElBY2Nlc3MgfCBudWxsLCBvZmZzZXQ6IG51bWJlciA9IDEwMCkgPT4ge1xuICBpZiAobWlkaUFjY2Vzcykge1xuICAgIGNvbnN0IHsgb3V0cHV0cyB9ID0gZ2V0TUlESVBvcnRzKG1pZGlBY2Nlc3MpO1xuICAgIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSArIG9mZnNldDtcbiAgICBvdXRwdXRzLmZvckVhY2gob3V0cHV0ID0+IHtcbiAgICAgIGZvciAobGV0IGNoYW5uZWwgPSAwOyBjaGFubmVsIDwgMTY7IGNoYW5uZWwrKykge1xuICAgICAgICBvdXRwdXQuc2VuZChbMHhiMCArIGNoYW5uZWwsIDB4N2IsIDB4MDBdLCB0aW1lKTsgLy8gc3RvcCBhbGwgbm90ZXNcbiAgICAgICAgb3V0cHV0LnNlbmQoWzB4YjAgKyBjaGFubmVsLCAweDc5LCAweDAwXSwgdGltZSk7IC8vIHJlc2V0IGFsbCBjb250cm9sbGVyc1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuL2NyZWF0ZVNvbmdcIjtcbmltcG9ydCB7IE1JRElFdmVudCwgTm90ZU9uRXZlbnQgfSBmcm9tIFwiLi9NSURJRXZlbnRcIjtcbmltcG9ydCB7IE5PVEVfT04sIE5PVEVfT0ZGIH0gZnJvbSBcIi4vdXRpbC9taWRpXCI7XG5cbnR5cGUgQXJncyA9IHtcbiAgc29uZzogU29uZztcbiAgbWlsbGlzOiBudW1iZXI7XG4gIGluZGV4OiBudW1iZXI7XG4gIG91dHB1dHM/OiBXZWJNaWRpLk1JRElPdXRwdXRNYXA7XG59O1xuZXhwb3J0IGNvbnN0IHNjaGVkdWxlID0gKHtcbiAgc29uZyxcbiAgaW5kZXgsXG4gIG1pbGxpcyxcbiAgb3V0cHV0cyxcbn06IEFyZ3MpOiB7IG1pbGxpczogbnVtYmVyOyBpbmRleDogbnVtYmVyOyBzY2hlZHVsZWQ6IE1JRElFdmVudFtdIH0gPT4ge1xuICBjb25zdCB0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBjb25zdCB7IGV2ZW50cyB9ID0gc29uZztcbiAgY29uc3Qgc2NoZWR1bGVkID0gW107XG4gIC8vIGxldCBsYXN0Tm90ZU51bWJlcjogbnVtYmVyID0gLTE7XG4gIC8vIGxldCBsYXN0Tm90ZVR5cGU6IG51bWJlciA9IC0xO1xuICB3aGlsZSAoaW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaW5kZXhdO1xuICAgIGlmICghZXZlbnQubWlsbGlzIHx8ICFldmVudC50cmFja0lkKSB7XG4gICAgICAvLyBicmVhaztcbiAgICAgIGluZGV4Kys7XG4gICAgfSBlbHNlIGlmIChldmVudC5taWxsaXMgPCBtaWxsaXMgKyBzb25nLmJ1ZmZlclRpbWUpIHtcbiAgICAgIHNjaGVkdWxlZC5wdXNoKGV2ZW50KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRpY2tzLCBldmVudC5kZXNjciwgKGV2ZW50IGFzIE5vdGVPbkV2ZW50KS5ub3RlTnVtYmVyKTtcbiAgICAgIGNvbnN0IHRyYWNrID0gc29uZy50cmFja3NCeUlkW2V2ZW50LnRyYWNrSWRdO1xuICAgICAgdHJhY2sub3V0cHV0cy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRlc2NyID09PSBOT1RFX09OIHx8IGV2ZW50LmRlc2NyID09PSBOT1RFX09GRikge1xuICAgICAgICAgIGNvbnN0IGUgPSBldmVudCBhcyBOb3RlT25FdmVudDtcbiAgICAgICAgICBpZiAoZXZlbnQubWlsbGlzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50eXBlLCBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyKTtcbiAgICAgICAgICAgIGxldCB0aW1lID0gdHMgKyBzb25nLmxhdGVuY3kgKyB0cmFjay5sYXRlbmN5ICsgKGV2ZW50Lm1pbGxpcyAtIG1pbGxpcyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFtcIm5vdGVOdW1iZXJcIl0sIGV2ZW50LmRlc2NyLCBldmVudC5taWxsaXMsIG1pbGxpcywgdGltZSwgdHMsIHRpbWUgLSB0cyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLm5vdGVOdW1iZXIsIGxhc3ROb3RlTnVtYmVyLCBsYXN0Tm90ZVR5cGUpO1xuICAgICAgICAgICAgLy8gaWYgKGUubm90ZU51bWJlciA9PT0gbGFzdE5vdGVOdW1iZXIgJiYgbGFzdE5vdGVUeXBlID09PSAweDkwKSB7XG4gICAgICAgICAgICAvLyAgIGlmIChlLmRlc2NyID09PSBOT1RFX09OKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZXBlYXRpbmcgbm90ZXNcIik7XG4gICAgICAgICAgICAvLyAgICAgdGltZSArPSAxO1xuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBsYXN0Tm90ZU51bWJlciA9IGUubm90ZU51bWJlcjtcbiAgICAgICAgICAgIC8vIGxhc3ROb3RlVHlwZSA9IGUudHlwZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnR5cGUgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eSk7XG4gICAgICAgICAgICAvLyBxdWljayBmaXggZm9yIHJlcGVhdGluZyBub3Rlc1xuICAgICAgICAgICAgaWYgKGUuZGVzY3IgPT09IE5PVEVfT04pIHtcbiAgICAgICAgICAgICAgdGltZSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0c1xuICAgICAgICAgICAgICA/LmdldChpZClcbiAgICAgICAgICAgICAgPy5zZW5kKFtldmVudC50eXBlICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHldLCB0aW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKCdbU0NIRURVTEVEXScsIHNjaGVkdWxlZC5tYXAoZSA9PiBbZS50aWNrcywgZS5taWxsaXNdKSk7XG4gIHJldHVybiB7IG1pbGxpcywgaW5kZXgsIHNjaGVkdWxlZCB9O1xufTtcbiIsImNvbnN0IHN0YXR1cyA9IChyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoSlNPTiA9ICh1cmw6IHN0cmluZyk6IFByb21pc2U8SlNPTj4gPT5cbiAgLy8gZmV0Y2godXJsLCB7XG4gIC8vICAgbW9kZTogJ25vLWNvcnMnXG4gIC8vIH0pXG4gIGZldGNoKHVybClcbiAgICAudGhlbihzdGF0dXMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoWE1MID0gKHVybDogc3RyaW5nKTogUHJvbWlzZTxYTUxEb2N1bWVudD4gPT5cbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHN0YXR1cylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgLnRoZW4oc3RyID0+IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0ciwgXCJ0ZXh0L3htbFwiKSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEFycmF5YnVmZmVyID0gKHVybDogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4gPT5cbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHN0YXR1cylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKTtcbiIsImltcG9ydCB7IE1JRElFdmVudCB9IGZyb20gXCIuLi9NSURJRXZlbnRcIjtcblxuZXhwb3J0IGNvbnN0IFNFUVVFTkNFX05VTUJFUiA9IFwic2VxdWVuY2UgbnVtYmVyXCI7XG5leHBvcnQgY29uc3QgVEVYVCA9IFwidGV4dFwiO1xuZXhwb3J0IGNvbnN0IENPUFlSSUdIVF9OT1RJQ0UgPSBcImNvcHlyaWdodCBub3RpY2VcIjtcbmV4cG9ydCBjb25zdCBUUkFDS19OQU1FID0gXCJ0cmFjayBuYW1lXCI7XG5leHBvcnQgY29uc3QgSU5TVFJVTUVOVF9OQU1FID0gXCJpbnN0cnVtZW50IG5hbWVcIjtcbmV4cG9ydCBjb25zdCBMWVJJQ1MgPSBcImx5cmljc1wiO1xuZXhwb3J0IGNvbnN0IE1BUktFUiA9IFwibWFya2VyXCI7XG5leHBvcnQgY29uc3QgQ1VFX1BPSU5UID0gXCJjdWUgcG9pbnRcIjtcbmV4cG9ydCBjb25zdCBDSEFOTkVMX1BSRUZJWCA9IFwiY2hhbm5lbCBwcmVmaXhcIjtcbmV4cG9ydCBjb25zdCBFTkRfT0ZfVFJBQ0sgPSBcImVuZCBvZiB0cmFja1wiO1xuZXhwb3J0IGNvbnN0IFRFTVBPID0gXCJ0ZW1wb1wiO1xuZXhwb3J0IGNvbnN0IFNNUFRFX09GRlNFVCA9IFwic21wdGUgb2Zmc2V0XCI7XG5leHBvcnQgY29uc3QgVElNRV9TSUdOQVRVUkUgPSBcInRpbWUgc2lnbmF0dXJlXCI7XG5leHBvcnQgY29uc3QgS0VZX1NJR05BVFVSRSA9IFwia2V5IHNpZ25hdHVyZVwiO1xuZXhwb3J0IGNvbnN0IFNFUVVFTkNFUl9TUEVDSUZJQyA9IFwic2VxdWVuY2VyIHNwZWNpZmljXCI7XG5leHBvcnQgY29uc3QgU1lTVEVNX0VYQ0xVU0lWRSA9IFwic3lzdGVtIGV4Y2x1c2l2ZVwiO1xuZXhwb3J0IGNvbnN0IERJVklERURfU1lTVEVNX0VYQ0xVU0lWRSA9IFwiZGl2aWRlZCBzeXN0ZW0gZXhjbHVzaXZlXCI7XG5leHBvcnQgY29uc3QgTk9URV9PTiA9IFwibm90ZSBvblwiO1xuZXhwb3J0IGNvbnN0IE5PVEVfT0ZGID0gXCJub3RlIG9mZlwiO1xuZXhwb3J0IGNvbnN0IE5PVEVfQUZURVJUT1VDSCA9IFwibm90ZSBhZnRlcnRvdWNoXCI7XG5leHBvcnQgY29uc3QgQ09OVFJPTExFUiA9IFwiY29udHJvbGxlclwiO1xuZXhwb3J0IGNvbnN0IFBST0dSQU1fQ0hBTkdFID0gXCJwcm9ncmFtIGNoYW5nZVwiO1xuZXhwb3J0IGNvbnN0IENIQU5ORUxfQUZURVJUT1VDSCA9IFwiY2hhbm5lbCBhZnRlcnRvdWNoXCI7XG5leHBvcnQgY29uc3QgUElUQ0hfQkVORCA9IFwicGl0Y2ggYmVuZFwiO1xuXG5jb25zdCBkZXNjcmlwdGlvbnM6IHsgW2luZGV4OiBudW1iZXJdOiB7IFtpbmRleDogbnVtYmVyXTogc3RyaW5nIH0gfCBzdHJpbmcgfSA9IHtcbiAgMHhmZjoge1xuICAgIDB4MDA6IFwic2VxdWVuY2UgbnVtYmVyXCIsXG4gICAgMHgwMTogXCJ0ZXh0XCIsXG4gICAgMHgwMjogXCJjb3B5cmlnaHQgbm90aWNlXCIsXG4gICAgMHgwMzogXCJ0cmFjayBuYW1lXCIsXG4gICAgMHgwNDogXCJpbnN0cnVtZW50IG5hbWVcIixcbiAgICAweDA1OiBcImx5cmljc1wiLFxuICAgIDB4MDY6IFwibWFya2VyXCIsXG4gICAgMHgwNzogXCJjdWUgcG9pbnRcIixcbiAgICAweDIwOiBcImNoYW5uZWwgcHJlZml4XCIsXG4gICAgMHgyZjogXCJlbmQgb2YgdHJhY2tcIixcbiAgICAweDUxOiBcInRlbXBvXCIsXG4gICAgMHg1NDogXCJzbXB0ZSBvZmZzZXRcIixcbiAgICAweDU4OiBcInRpbWUgc2lnbmF0dXJlXCIsXG4gICAgMHg1OTogXCJrZXkgc2lnbmF0dXJlXCIsXG4gICAgMHg3ZjogXCJzZXF1ZW5jZXIgc3BlY2lmaWNcIixcbiAgfSxcbiAgMHhmMDogXCJzeXN0ZW0gZXhjbHVzaXZlXCIsXG4gIDB4Zjc6IFwiZGl2aWRlZCBzeXNleFwiLFxuICAweDgwOiBcIm5vdGUgb25cIixcbiAgMHg5MDogXCJub3RlIG9mZlwiLFxuICAweGEwOiBcIm5vdGUgYWZ0ZXJ0b3VjaFwiLFxuICAweGIwOiBcImNvbnRyb2xsZXJcIixcbiAgMHhjMDogXCJwcm9ncmFtIGNoYW5nZVwiLFxuICAweGQwOiBcImNoYW5uZWwgYWZ0ZXJ0b3VjaFwiLFxuICAweGUwOiBcInBpdGNoIGJlbmRcIixcbn07XG5cbmV4cG9ydCBjb25zdCBub3RlTmFtZXMgPSB7XG4gIHNoYXJwOiBbXCJDXCIsIFwiQyNcIiwgXCJEXCIsIFwiRCNcIiwgXCJFXCIsIFwiRlwiLCBcIkYjXCIsIFwiR1wiLCBcIkcjXCIsIFwiQVwiLCBcIkEjXCIsIFwiQlwiXSxcbiAgZmxhdDogW1wiQ1wiLCBcIkRiXCIsIFwiRFwiLCBcIkViXCIsIFwiRVwiLCBcIkZcIiwgXCJHYlwiLCBcIkdcIiwgXCJBYlwiLCBcIkFcIiwgXCJCYlwiLCBcIkJcIl0sXG4gIFwiZW5oYXJtb25pYy1zaGFycFwiOiBbXCJCI1wiLCBcIkMjXCIsIFwiQyMjXCIsIFwiRCNcIiwgXCJEIyNcIiwgXCJFI1wiLCBcIkYjXCIsIFwiRiMjXCIsIFwiRyNcIiwgXCJHIyNcIiwgXCJBI1wiLCBcIkEjI1wiXSxcbiAgXCJlbmhhcm1vbmljLWZsYXRcIjogW1wiRGJiXCIsIFwiRGJcIiwgXCJFYmJcIiwgXCJFYlwiLCBcIkZiXCIsIFwiR2JiXCIsIFwiR2JcIiwgXCJBYmJcIiwgXCJBYlwiLCBcIkJiYlwiLCBcIkJiXCIsIFwiQ2JcIl0sXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWlkaUV2ZW50RGVzY3JpcHRpb24gPSAodHlwZTogbnVtYmVyLCBzdWJUeXBlPzogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgaWYgKHR5cGVvZiBzdWJUeXBlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uc1t0eXBlXSBhcyBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIGRlc2NyaXB0aW9uc1t0eXBlXVtzdWJUeXBlXSB8fCBcInVuZGVmaW5lZFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE1pZGlNZXNzYWdlRXZlbnQgPSAoZXZlbnQ6IE1JRElFdmVudCk6IG51bWJlcltdID0+IHtcbiAgc3dpdGNoIChldmVudC5kZXNjcikge1xuICAgIGNhc2UgTk9URV9PTjpcbiAgICAgIHJldHVybiBbMHg5MCArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5XTtcbiAgICBjYXNlIE5PVEVfT0ZGOlxuICAgICAgcmV0dXJuIFsweDgwICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHldO1xuICB9XG4gIHJldHVybiBbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Tm90ZU51bWJlciA9IChuYW1lOiBzdHJpbmcsIG9jdGF2ZTogbnVtYmVyLCBtb2RlOiBzdHJpbmcgPSBcInNoYXJwXCIpOiBudW1iZXIgPT4ge1xuICAvLyBsZXQgaW5kZXggPSAtMTtcbiAgLy8gY29uc3QgbW9kZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhub3RlTmFtZXMpO1xuICAvLyBmb3IgKGxldCBpID0gMCwgbWF4aSA9IG1vZGVzLmxlbmd0aDsgaSA8IG1heGk7IGkrKykge1xuICAvLyAgIGNvbnN0IG5hbWVzID0gbW9kZXNbaV07XG4gIC8vICAgZm9yIChsZXQgaiA9IDAsIG1heGogPSBuYW1lcy5sZW5ndGg7IGogPCBtYXhqOyBqKyspIHtcbiAgLy8gICAgIGlmIChtb2RlW2pdID09PSBuYW1lKSB7XG4gIC8vICAgICAgIGluZGV4ID0gaTtcbiAgLy8gICAgICAgYnJlYWs7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIGxldCBpbmRleCA9IC0xO1xuICBjb25zdCBtb2RlcyA9IE9iamVjdC52YWx1ZXMobm90ZU5hbWVzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hbWVzID0gbW9kZXNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuYW1lcy5sZW5ndGg7IGorKykge1xuICAgICAgLy8gY29uc29sZS5sb2cobmFtZXNbal0sIG5hbWUpO1xuICAgICAgaWYgKG5hbWVzW2pdID09PSBuYW1lKSB7XG4gICAgICAgIGluZGV4ID0gajtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKG5hbWUsIG9jdGF2ZSwgaW5kZXgpO1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLy9udW1iZXIgPSAoaW5kZXggKyAxMikgKyAob2N0YXZlICogMTIpICsgMTI7IC8vIOKGkiBpbiBDdWJhc2UgY2VudHJhbCBDID0gQzMgaW5zdGVhZCBvZiBDNFxuICByZXR1cm4gaW5kZXggKyAxMiArIG9jdGF2ZSAqIDEyOyAvLyDihpIgbWlkaSBzdGFuZGFyZCArIHNjaWVudGlmaWMgbmFtaW5nLCBzZWU6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWlkZGxlX0MgYW5kIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2NpZW50aWZpY19waXRjaF9ub3RhdGlvblxufTtcblxuZXhwb3J0IGNvbnN0IHNvcnRNSURJRXZlbnRzID0gKGV2ZW50czogTUlESUV2ZW50W10pOiBNSURJRXZlbnRbXSA9PlxuICBldmVudHMuc29ydCgoYTogTUlESUV2ZW50LCBiOiBNSURJRXZlbnQpID0+IHtcbiAgICBpZiAoYS50aWNrcyA8IGIudGlja3MpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYgKGEudGlja3MgPiBiLnRpY2tzKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICAgIC8vIH0gZWxzZSBpZiAoYS50eXBlID09PSAweDgwICYmIGIudHlwZSA9PT0gMHg5MCkge1xuICAgICAgLy8gICAvLyBub3RlIG9mZiBiZWZvcmUgbm90ZSBvblxuICAgICAgLy8gICByZXR1cm4gLTE7XG4gICAgICAvLyB9IGVsc2UgaWYgKGEudHlwZSA9PT0gMHg1MSB8fCBhLnR5cGUgPT09IDB4NTgpIHtcbiAgICAgIC8vICAgLy8gdGVtcG8gYW5kIHRpbWUgc2lnbmF0dXJlIGV2ZW50cyBmaXJzdFxuICAgICAgLy8gICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZURvdWJsZUV2ZW50cyA9IChldmVudHM6IE1JRElFdmVudFtdKTogTUlESUV2ZW50W10gPT4ge1xuICAvLyB2YXIgaSwgbWF4aSA9IGV2ZW50cy5sZW5ndGgsXG4gIC8vICAgZXZlbnQsIGV2ZW50SWQsIGxhc3RJZCxcbiAgLy8gICByZXN1bHQgPSBbXTtcblxuICAvLyBldmVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAvLyAgIHJldHVybiBhLmV2ZW50TnVtYmVyIC0gYi5ldmVudE51bWJlcjtcbiAgLy8gfSk7XG5cbiAgLy8gZm9yIChpID0gMDsgaSA8IG1heGk7IGkrKykge1xuICAvLyAgIGV2ZW50ID0gZXZlbnRzW2ldO1xuICAvLyAgIGV2ZW50SWQgPSBldmVudC5pZDtcbiAgLy8gICBpZiAoZXZlbnRJZCAhPT0gbGFzdElkKSB7XG4gIC8vICAgICByZXN1bHQucHVzaChldmVudCk7XG4gIC8vICAgfVxuICAvLyAgIGxhc3RJZCA9IGV2ZW50SWQ7XG4gIC8vIH1cbiAgLy8gcmV0dXJuIHJlc3VsdDtcbiAgcmV0dXJuIFtdO1xufTtcbiIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDE5IEhhbMOhc3ogw4Fkw6FtIDxtYWlsQGFkYW1oYWxhc3ouY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHByb2Nlc3MgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicpe1xuICAgIHZhciBtYWMgPSAnJywgbmV0d29ya0ludGVyZmFjZXMgPSByZXF1aXJlKCdvcycpLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9iYXNpYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
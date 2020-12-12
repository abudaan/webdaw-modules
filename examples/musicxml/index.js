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

/***/ "./musicxml/index.ts":
/*!***************************!*\
  !*** ./musicxml/index.ts ***!
  \***************************/
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
const scheduler_1 = __webpack_require__(/*! ../../src/scheduler */ "../src/scheduler.ts");
const getCurrentEventIndex_1 = __webpack_require__(/*! ../../src/getCurrentEventIndex */ "../src/getCurrentEventIndex.ts");
const getMIDIAccess_1 = __webpack_require__(/*! ../../src/getMIDIAccess */ "../src/getMIDIAccess.ts");
const getMIDIPorts_1 = __webpack_require__(/*! ../../src/getMIDIPorts */ "../src/getMIDIPorts.ts");
const createSongFromMIDIFile_1 = __webpack_require__(/*! ../../src/createSongFromMIDIFile */ "../src/createSongFromMIDIFile.ts");
const url = "../assets/minute_waltz.mid";
// const url = '../assets/mozk545a.mid';
// const url = '../assets/mozk545a_musescore.mid';
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const ma = yield getMIDIAccess_1.getMIDIAccess();
    const song = yield createSongFromMIDIFile_1.createSongFromMIDIFile(url);
    const { inputs, outputs } = getMIDIPorts_1.getMIDIPorts(ma);
    song.tracks.forEach((track) => {
        track.outputs.push(...outputs.map((o) => o.id));
    });
    console.log(song);
    let millis = 3000;
    let index = getCurrentEventIndex_1.getCurrentEventIndex(song, millis);
    // console.log('START INDEX', index);
    let start = performance.now();
    const play = (a) => {
        const ts = performance.now();
        // console.log(ts, a);
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
    };
    play(start);
});
init();
// fetch(url)
//   .then(arrayBuffer)
//   .then(ab => {
//     const { header, tracks } = parseMidiFile(ab);
//     console.log(tracks);
//   });


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
/******/ 	__webpack_require__("./musicxml/index.ts");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uL211c2ljeG1sL2luZGV4LnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvYnVmZmVycmVhZGVyLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvY2FsY3VsYXRlTWlsbGlzLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvY3JlYXRlTm90ZXMudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy9jcmVhdGVTb25nRnJvbU1JRElGaWxlLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvY3JlYXRlVHJhY2sudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy9nZXRDdXJyZW50RXZlbnRJbmRleC50cyIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi4vc3JjL2dldE1JRElBY2Nlc3MudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy9nZXRNSURJUG9ydHMudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy9wYXJzZU1JRElGaWxlLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvc2NoZWR1bGVyLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvdXRpbC9mZXRjaC50cyIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi4vc3JjL3V0aWwvbWlkaS50cyIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzL3dlYnBhY2sv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QiwrQkFBK0IsNkVBQTZFOztBQUUvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im11c2ljeG1sL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IHNjaGVkdWxlIH0gZnJvbSBcIi4uLy4uL3NyYy9zY2hlZHVsZXJcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRFdmVudEluZGV4IH0gZnJvbSBcIi4uLy4uL3NyYy9nZXRDdXJyZW50RXZlbnRJbmRleFwiO1xuaW1wb3J0IHsgZ2V0TUlESUFjY2VzcyB9IGZyb20gXCIuLi8uLi9zcmMvZ2V0TUlESUFjY2Vzc1wiO1xuaW1wb3J0IHsgZ2V0TUlESVBvcnRzIH0gZnJvbSBcIi4uLy4uL3NyYy9nZXRNSURJUG9ydHNcIjtcbmltcG9ydCB7IGNyZWF0ZVNvbmdGcm9tTUlESUZpbGUgfSBmcm9tIFwiLi4vLi4vc3JjL2NyZWF0ZVNvbmdGcm9tTUlESUZpbGVcIjtcblxuY29uc3QgdXJsID0gXCIuLi9hc3NldHMvbWludXRlX3dhbHR6Lm1pZFwiO1xuLy8gY29uc3QgdXJsID0gJy4uL2Fzc2V0cy9tb3prNTQ1YS5taWQnO1xuLy8gY29uc3QgdXJsID0gJy4uL2Fzc2V0cy9tb3prNTQ1YV9tdXNlc2NvcmUubWlkJztcblxuY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbWEgPSBhd2FpdCBnZXRNSURJQWNjZXNzKCk7XG4gIGNvbnN0IHNvbmcgPSBhd2FpdCBjcmVhdGVTb25nRnJvbU1JRElGaWxlKHVybCk7XG4gIGNvbnN0IHsgaW5wdXRzLCBvdXRwdXRzIH0gPSBnZXRNSURJUG9ydHMobWEpO1xuICBzb25nLnRyYWNrcy5mb3JFYWNoKCh0cmFjaykgPT4ge1xuICAgIHRyYWNrLm91dHB1dHMucHVzaCguLi5vdXRwdXRzLm1hcCgobykgPT4gby5pZCkpO1xuICB9KTtcbiAgY29uc29sZS5sb2coc29uZyk7XG5cbiAgbGV0IG1pbGxpcyA9IDMwMDA7XG4gIGxldCBpbmRleCA9IGdldEN1cnJlbnRFdmVudEluZGV4KHNvbmcsIG1pbGxpcyk7XG4gIC8vIGNvbnNvbGUubG9nKCdTVEFSVCBJTkRFWCcsIGluZGV4KTtcbiAgbGV0IHN0YXJ0OiBudW1iZXIgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgY29uc3QgcGxheSA9IChhOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRzLCBhKTtcbiAgICAvLyBjb25zdCBwcm9ncmVzcyA9IHRzIC0gYTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IHRzIC0gc3RhcnQ7XG4gICAgc3RhcnQgPSB0cztcbiAgICAvLyBjb25zdCBwcm9ncmVzcyA9IGEgLSBzdGFydDtcbiAgICAvLyBzdGFydCA9IGE7XG4gICAgaWYgKG1pbGxpcyA8IDEwMDAwKSB7XG4gICAgICAoeyBpbmRleCwgbWlsbGlzIH0gPSBzY2hlZHVsZSh7XG4gICAgICAgIHNvbmcsXG4gICAgICAgIG1pbGxpcyxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIG91dHB1dHM6IG1hPy5vdXRwdXRzLFxuICAgICAgfSkpO1xuICAgICAgbWlsbGlzICs9IHByb2dyZXNzO1xuICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgsIG1pbGxpcyk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGEpID0+IHtcbiAgICAgICAgcGxheShhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgcGxheShzdGFydCk7XG59O1xuXG5pbml0KCk7XG5cbi8vIGZldGNoKHVybClcbi8vICAgLnRoZW4oYXJyYXlCdWZmZXIpXG4vLyAgIC50aGVuKGFiID0+IHtcbi8vICAgICBjb25zdCB7IGhlYWRlciwgdHJhY2tzIH0gPSBwYXJzZU1pZGlGaWxlKGFiKTtcbi8vICAgICBjb25zb2xlLmxvZyh0cmFja3MpO1xuLy8gICB9KTtcbiIsIi8vIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9wcmF2ZG9taWwvamFzbWlkLnRzXG5cbmV4cG9ydCBjbGFzcyBCdWZmZXJSZWFkZXIge1xuICBwcml2YXRlIHBvc2l0aW9uOiBudW1iZXI7XG4gIHByaXZhdGUgZGF0YTogRGF0YVZpZXc7XG5cbiAgY29uc3RydWN0b3IoYnVmZmVyOiBBcnJheUJ1ZmZlckxpa2UpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICB0aGlzLmRhdGEgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgfVxuXG4gIHJlYWQobGVuZ3RoOiBudW1iZXIpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5idWZmZXIuc2xpY2UodGhpcy5wb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiArIGxlbmd0aCk7XG4gICAgdGhpcy5wb3NpdGlvbiArPSBsZW5ndGg7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaW50OCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRJbnQ4KHRoaXMucG9zaXRpb24pO1xuICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICB1aW50OCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50OCh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDE2KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmdldFVpbnQxNih0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDI7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDMyKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmdldFVpbnQzMih0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDQ7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RyaW5nKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcihcImFzY2lpXCIpLmRlY29kZSh0aGlzLnJlYWQobGVuZ3RoKSk7XG4gIH1cblxuICBlb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPj0gdGhpcy5kYXRhLmJ5dGVMZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBhIE1JREktc3R5bGUgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuXG4gICAqIChiaWctZW5kaWFuIHZhbHVlIGluIGdyb3VwcyBvZiA3IGJpdHMsIHdpdGggdG9wIGJpdCBzZXQgdG8gc2lnbmlmeSB0aGF0IGFub3RoZXIgYnl0ZSBmb2xsb3dzKVxuICAgKi9cbiAgbWlkaUludCgpIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnVpbnQ4KCk7XG4gICAgICBpZiAodmFsdWUgJiAwYjEwMDAwMDAwKSB7XG4gICAgICAgIHJlc3VsdCArPSB2YWx1ZSAmIDBiMTExMTExMTtcbiAgICAgICAgcmVzdWx0IDw8PSA3O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1pZGlDaHVuaygpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuc3RyaW5nKDQpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMudWludDMyKCk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVhZChsZW5ndGgpO1xuICAgIHJldHVybiB7IGlkLCBsZW5ndGgsIGRhdGEgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTUlESUV2ZW50LCBUZW1wb0V2ZW50IH0gZnJvbSBcIi4vTUlESUV2ZW50XCI7XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVNaWxsaXMgPSAoXG4gIGV2ZW50czogTUlESUV2ZW50W10sXG4gIGRhdGE6IHtcbiAgICBwcHE6IG51bWJlcjtcbiAgICBicG0/OiBudW1iZXI7XG4gICAgcGxheWJhY2tTcGVlZD86IG51bWJlcjtcbiAgfVxuKTogTUlESUV2ZW50W10gPT4ge1xuICBsZXQgeyBwcHEsIGJwbSA9IC0xLCBwbGF5YmFja1NwZWVkID0gMSB9ID0gZGF0YTtcbiAgbGV0IG1pbGxpc1BlclRpY2sgPSBicG0gPT09IC0xID8gMCA6ICgoKDEgLyBwbGF5YmFja1NwZWVkKSAqIDYwKSAvIGJwbSAvIHBwcSkgKiAxMDAwO1xuICBsZXQgdGlja3MgPSAwO1xuICBsZXQgbWlsbGlzID0gMDtcbiAgLy8gY29uc29sZS5sb2coXCJicG1cIiwgYnBtLCBtaWxsaXMpO1xuICByZXR1cm4gZXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgaWYgKChldmVudCBhcyBUZW1wb0V2ZW50KS5icG0pIHtcbiAgICAgICh7IGJwbSB9ID0gZXZlbnQgYXMgVGVtcG9FdmVudCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImJwbVwiLCBicG0sIG1pbGxpcyk7XG4gICAgICBtaWxsaXNQZXJUaWNrID0gKCgoMSAvIHBsYXliYWNrU3BlZWQpICogNjApIC8gYnBtIC8gcHBxKSAqIDEwMDA7XG4gICAgfVxuICAgIGNvbnN0IGRpZmZUaWNrcyA9IGV2ZW50LnRpY2tzIC0gdGlja3M7XG4gICAgbWlsbGlzICs9IGRpZmZUaWNrcyAqIG1pbGxpc1BlclRpY2s7XG4gICAgZXZlbnQubWlsbGlzID0gbWlsbGlzO1xuICAgIHRpY2tzID0gZXZlbnQudGlja3M7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBNSURJRXZlbnQsIE5vdGVFdmVudCwgTm90ZU9uRXZlbnQsIE5vdGVPZmZFdmVudCB9IGZyb20gXCIuL01JRElFdmVudFwiO1xuXG4vLyBNSURJRXZlbnRHZW5lcmljIGFuZCBNSURJTm90ZUdlbmVyaWMgYXJlIGRlY2xhcmVkIHRvIHN1cHBvcnQgb3RoZXIgTUlESSBwbGF5YmFjayBsaWJyYXJpZXMgc3VjaCBhcyBoZWFydGJlYXRcbmV4cG9ydCBpbnRlcmZhY2UgTUlESUV2ZW50R2VuZXJpYyB7XG4gIGlkPzogc3RyaW5nO1xuICBiYXI/OiBudW1iZXI7XG4gIHRpY2tzOiBudW1iZXI7XG4gIG5vdGVOdW1iZXI6IG51bWJlcjtcbiAgdHJhY2tJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNSURJTm90ZUdlbmVyaWMge1xuICBpZDogc3RyaW5nO1xuICBub3RlT246IE1JRElFdmVudEdlbmVyaWM7XG4gIG5vdGVPZmY6IE1JRElFdmVudEdlbmVyaWM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUlESU5vdGUgZXh0ZW5kcyBNSURJTm90ZUdlbmVyaWMge1xuICBub3RlT246IE5vdGVPbkV2ZW50O1xuICBub3RlT2ZmOiBOb3RlT2ZmRXZlbnQ7XG4gIGR1cmF0aW9uVGlja3M/OiBudW1iZXI7XG4gIGR1cmF0aW9uTWlsbGlzPzogbnVtYmVyO1xuICBzdGFydFRpY2tzPzogbnVtYmVyO1xuICBlbmRUaWNrcz86IG51bWJlcjtcbiAgc3RhcnRNaWxsaXM/OiBudW1iZXI7XG4gIGVuZE1pbGxpcz86IG51bWJlcjtcbn1cblxubGV0IGluZGV4ID0gMDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vdGVzID0gKGV2ZW50czogTUlESUV2ZW50W10pOiBNSURJTm90ZVtdID0+IHtcbiAgbGV0IGZpbHRlcmVkOiBOb3RlRXZlbnRbXSA9IGV2ZW50cy5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2codmFsLnR5cGUpO1xuICAgIGlmICh2YWwudHlwZSA9PT0gMHg4MCB8fCB2YWwudHlwZSA9PT0gMHg5MCkge1xuICAgICAgYWNjLnB1c2godmFsIGFzIE5vdGVFdmVudCk7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdIGFzIE5vdGVFdmVudFtdKTtcbiAgLy8gZmlsdGVyZWQgPSBzb3J0TUlESUV2ZW50cyhmaWx0ZXJlZCk7XG4gIGNvbnN0IG5vdGVzOiBNSURJTm90ZVtdID0gW107XG4gIGNvbnN0IHRtcDogeyBbaWQ6IHN0cmluZ106IE5vdGVFdmVudCB9ID0ge307XG4gIGZpbHRlcmVkLmZvckVhY2goZSA9PiB7XG4gICAgY29uc3QgaWQgPSBgJHtlLnRyYWNrSWR9LSR7ZS5ub3RlTnVtYmVyfWA7XG4gICAgLy8gY29uc29sZS5sb2coZS50aWNrcywgZS50eXBlLCBpZCk7XG4gICAgaWYgKGUudHlwZSA9PT0gMHg5MCkge1xuICAgICAgaWYgKHRtcFtpZF0pIHtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKGBub3RlIGV4aXN0ZWQgYWxyZWFkeSEgJHtpZH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcFtpZF0gPSBlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSAweDgwKSB7XG4gICAgICBpZiAoIXRtcFtpZF0pIHtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKGBub3RlIGRvZXNuJ3QgZXhpc3QhICR7aWR9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub3RlT24gPSB0bXBbaWRdO1xuICAgICAgICBjb25zdCBub3RlOiBNSURJTm90ZSA9IHtcbiAgICAgICAgICBpZDogYG5vdGUtJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0tJHtpbmRleCsrfWAsXG4gICAgICAgICAgbm90ZU9uOiBub3RlT24gYXMgTm90ZU9uRXZlbnQsXG4gICAgICAgICAgbm90ZU9mZjogZSxcbiAgICAgICAgICAvLyBkdXJhdGlvblRpY2tzOiBlLnRpY2tzIC0gbm90ZU9uLnRpY2tzLFxuICAgICAgICAgIC8vIGR1cmF0aW9uTWlsbGlzOiBlLm1pbGxpcyAtIG5vdGVPbi5taWxsaXMsXG4gICAgICAgICAgLy8gc3RhcnRUaWNrczogbm90ZU9uLnRpY2tzLFxuICAgICAgICAgIC8vIHN0YXJ0TWlsbGlzOiBub3RlT24ubWlsbGlzLFxuICAgICAgICAgIC8vIGVuZFRpY2tzOiBlLnRpY2tzLFxuICAgICAgICAgIC8vIGVuZE1pbGxpczogZS5taWxsaXMsXG4gICAgICAgIH07XG4gICAgICAgIG5vdGVzLnB1c2gobm90ZSk7XG4gICAgICAgIGRlbGV0ZSB0bXBbaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIC8vIGNvbnNvbGUubG9nKG5vdGVzKTtcbiAgcmV0dXJuIG5vdGVzO1xufTtcbiIsImltcG9ydCB7IGZldGNoQXJyYXlidWZmZXIgfSBmcm9tIFwiLi91dGlsL2ZldGNoXCI7XG5pbXBvcnQgeyBwYXJzZU1JRElGaWxlIH0gZnJvbSBcIi4vcGFyc2VNSURJRmlsZVwiO1xuaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuL2NyZWF0ZVNvbmdcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNvbmdGcm9tTUlESUZpbGUgPSBhc3luYyAoYXJnOiBzdHJpbmcgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8U29uZz4gPT4ge1xuICBsZXQgYWI6IEFycmF5QnVmZmVyO1xuICBpZiAodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFiID0gYXdhaXQgZmV0Y2hBcnJheWJ1ZmZlcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIGFiID0gYXJnO1xuICB9XG4gIC8vIGNvbnN0IHsgaGVhZGVyLCB0aW1lVHJhY2ssIHRyYWNrcyB9ID0gcGFyc2VNaWRpRmlsZShhYik7XG4gIHJldHVybiBwYXJzZU1JRElGaWxlKGFiKTtcbn07XG4iLCIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIndlYm1pZGlcIiAvPlxuXG5pbXBvcnQgeyBNSURJRXZlbnQgfSBmcm9tIFwiLi9NSURJRXZlbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFjayB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhdGVuY3k6IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgdm9sdW1lPzogbnVtYmVyO1xuICBpbnB1dHM6IHN0cmluZ1tdOyAvLyBpZHMgb2YgTUlESSBpbnB1dHNcbiAgb3V0cHV0czogc3RyaW5nW107IC8vIGlkcyBvZiBNSURJIG91dHB1dHNcbiAgaW5zdHJ1bWVudD86IHN0cmluZztcbiAgcHJvY2Vzc29yPzogKGV2ZW50OiBNSURJRXZlbnQgfCBXZWJNaWRpLk1JRElNZXNzYWdlRXZlbnQpID0+IHZvaWQ7IC8vIGEgZnVuY3Rpb24gdGhhdCBwcm9jZXNzZXMgYW4gZXZlbnQgaW50byBzb3VuZCBvciBzb21ldGhpbmcgZWxzZVxufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYWNrID0gKGlkOiBzdHJpbmcpOiBUcmFjayA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgbGF0ZW5jeTogMCxcbiAgICBpbnB1dHM6IFtdLFxuICAgIG91dHB1dHM6IFtdLFxuICB9O1xufTtcbiIsImltcG9ydCB7IFNvbmcgfSBmcm9tIFwiLi9jcmVhdGVTb25nXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50RXZlbnRJbmRleCA9IChcbiAgc29uZzogU29uZyxcbiAgbWlsbGlzOiBudW1iZXIsXG4gIHN0YXJ0SW5kZXg6IG51bWJlciA9IDBcbik6IG51bWJlciA9PiB7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSBzb25nO1xuICBsZXQgaSA9IHN0YXJ0SW5kZXg7XG4gIGZvciAoOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaV07XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQubWlsbGlzLCBtaWxsaXMpO1xuICAgIGlmICh0eXBlb2YgZXZlbnQubWlsbGlzID09PSBcInVuZGVmaW5lZFwiIHx8IGV2ZW50Lm1pbGxpcyA+PSBtaWxsaXMpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaTtcbn07XG4iLCJsZXQgbWlkaUFjY2VzczogV2ViTWlkaS5NSURJQWNjZXNzIHwgbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldE1JRElBY2Nlc3MgPSBhc3luYyAoKTogUHJvbWlzZTxXZWJNaWRpLk1JRElBY2Nlc3MgfCBudWxsPiA9PiB7XG4gIGlmIChtaWRpQWNjZXNzICE9PSBudWxsICYmIHR5cGVvZiBtaWRpQWNjZXNzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtaWRpQWNjZXNzKTtcbiAgfVxuXG4gIGlmICghbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzKSB7XG4gICAgbWlkaUFjY2VzcyA9IG51bGw7XG4gICAgY29uc29sZS5sb2coXCJXZWJNSURJIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgbWEgPSBhd2FpdCBuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3MoKTtcbiAgICAvLyBtaWRpQWNjZXNzLm9uc3RhdGVjaGFuZ2UgPSAoZTogV2ViTWlkaS5NSURJQ29ubmVjdGlvbkV2ZW50KSA9PiB7XG4gICAgLy8gfTtcbiAgICBpZiAoIW1hLmlucHV0cyB8fCAhbWEub3V0cHV0cykge1xuICAgICAgY29uc29sZS5sb2coXCJGaXJlZm94IFdlYk1JREkgQVBJIHN1cHBvcnQgaXMgc3RpbGwgaW4gcHJvZ3Jlc3NcIik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbWlkaUFjY2VzcyA9IG1hO1xuICAgIHJldHVybiBtYTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiTUlESSBjb3VsZCBub3QgYmUgaW5pdGlhbGl6ZWQ6XCIsIGUpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldE1JRElQb3J0cyA9IChcbiAgbWlkaUFjY2VzczogV2ViTWlkaS5NSURJQWNjZXNzIHwgbnVsbFxuKToge1xuICBpbnB1dHM6IFdlYk1pZGkuTUlESUlucHV0W107XG4gIG91dHB1dHM6IFdlYk1pZGkuTUlESU91dHB1dFtdO1xufSA9PiB7XG4gIC8vIGV4cG9ydCBjb25zdCBnZXRNSURJRGV2aWNlcyA9ICgpOiB7IGlucHV0czogV2ViTWlkaS5NSURJSW5wdXRbXSwgb3V0cHV0czogV2ViTWlkaS5NSURJT3V0cHV0W10gfSA9PiB7XG4gIGNvbnN0IGlucHV0czogV2ViTWlkaS5NSURJSW5wdXRbXSA9IFtdO1xuICBjb25zdCBvdXRwdXRzOiBXZWJNaWRpLk1JRElPdXRwdXRbXSA9IFtdO1xuICBpZiAobWlkaUFjY2Vzcykge1xuICAgIG1pZGlBY2Nlc3MuaW5wdXRzLmZvckVhY2goaSA9PiB7XG4gICAgICBpbnB1dHMucHVzaChpKTtcbiAgICB9KTtcbiAgICBtaWRpQWNjZXNzLm91dHB1dHMuZm9yRWFjaChvID0+IHtcbiAgICAgIG91dHB1dHMucHVzaChvKTtcbiAgICB9KTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZyhpbnB1dHMsIG91dHB1dHMpO1xuICByZXR1cm4geyBpbnB1dHMsIG91dHB1dHMgfTtcbn07XG4iLCIvLyBiYXNlZCBvbjogaHR0cHM6Ly9naXRodWIuY29tL3ByYXZkb21pbC9qYXNtaWQudHNcblxuLy8gaW1wb3J0IHsgQnVmZmVyUmVhZGVyIH0gZnJvbSAnamFzbWlkLnRzJztcbmltcG9ydCB1bmlxdWlkIGZyb20gXCJ1bmlxaWRcIjtcbmltcG9ydCB7IEJ1ZmZlclJlYWRlciB9IGZyb20gXCIuL2J1ZmZlcnJlYWRlclwiO1xuaW1wb3J0IHsgTUlESUV2ZW50IH0gZnJvbSBcIi4vTUlESUV2ZW50XCI7XG5pbXBvcnQge1xuICBTRVFVRU5DRV9OVU1CRVIsXG4gIFRFWFQsXG4gIENPUFlSSUdIVF9OT1RJQ0UsXG4gIFRSQUNLX05BTUUsXG4gIElOU1RSVU1FTlRfTkFNRSxcbiAgTFlSSUNTLFxuICBNQVJLRVIsXG4gIENVRV9QT0lOVCxcbiAgQ0hBTk5FTF9QUkVGSVgsXG4gIEVORF9PRl9UUkFDSyxcbiAgVEVNUE8sXG4gIFNNUFRFX09GRlNFVCxcbiAgVElNRV9TSUdOQVRVUkUsXG4gIEtFWV9TSUdOQVRVUkUsXG4gIFNFUVVFTkNFUl9TUEVDSUZJQyxcbiAgU1lTVEVNX0VYQ0xVU0lWRSxcbiAgRElWSURFRF9TWVNURU1fRVhDTFVTSVZFLFxuICBOT1RFX09OLFxuICBOT1RFX09GRixcbiAgTk9URV9BRlRFUlRPVUNILFxuICBDT05UUk9MTEVSLFxuICBQUk9HUkFNX0NIQU5HRSxcbiAgQ0hBTk5FTF9BRlRFUlRPVUNILFxuICBQSVRDSF9CRU5ELFxuICBzb3J0TUlESUV2ZW50cyxcbn0gZnJvbSBcIi4vdXRpbC9taWRpXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVNaWxsaXMgfSBmcm9tIFwiLi9jYWxjdWxhdGVNaWxsaXNcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIi4vY3JlYXRlVHJhY2tcIjtcbmltcG9ydCB7IFNvbmcgfSBmcm9tIFwiLi9jcmVhdGVTb25nXCI7XG5pbXBvcnQgeyBjcmVhdGVUcmFjayB9IGZyb20gXCIuL2NyZWF0ZVRyYWNrXCI7XG5pbXBvcnQgeyBjcmVhdGVOb3RlcyB9IGZyb20gXCIuL2NyZWF0ZU5vdGVzXCI7XG5cbnR5cGUgUGFyc2VkRGF0YSA9IHtcbiAgZXZlbnQ6IGFueTtcbiAgZGVsdGFUaW1lOiBudW1iZXI7XG4gIGJwbT86IG51bWJlcjtcbiAgbnVtZXJhdG9yPzogbnVtYmVyO1xuICBkZW5vbWluYXRvcj86IG51bWJlcjtcbiAgdHJhY2tOYW1lPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTUlESUZpbGUoYnVmZmVyOiBBcnJheUJ1ZmZlckxpa2UpOiBTb25nIHtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEJ1ZmZlclJlYWRlcihidWZmZXIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IHBhcnNlSGVhZGVyKHJlYWRlcik7XG4gIC8vIGNvbnN0IHsgdGltZVRyYWNrLCB0cmFja3MgfSA9IHBhcnNlVHJhY2tzKHJlYWRlciwgaGVhZGVyLnRpY2tzUGVyQmVhdClcbiAgY29uc3QgeyB0cmFja3MsIGV2ZW50cywgaW5pdGlhbFRlbXBvLCBpbml0aWFsTnVtZXJhdG9yLCBpbml0aWFsRGVub21pbmF0b3IgfSA9IHBhcnNlVHJhY2tzKFxuICAgIHJlYWRlcixcbiAgICBoZWFkZXIudGlja3NQZXJCZWF0XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcHE6IGhlYWRlci50aWNrc1BlckJlYXQsXG4gICAgbGF0ZW5jeTogMTcsIC8vIHZhbHVlIGluIG1pbGxpc2Vjb25kcyAtPiB0aGUgbGVuZ3RoIG9mIGEgc2luZ2xlIGZyYW1lIEAgNjBIeiByZWZyZXNoIHJhdGVcbiAgICBidWZmZXJUaW1lOiAxMDAsIC8vIHZhbHVlIGluIG1pbGxpc2Vjb25kc1xuICAgIHRyYWNrcyxcbiAgICB0cmFja3NCeUlkOiB0cmFja3MucmVkdWNlKChhY2M6IHsgW2lkOiBzdHJpbmddOiBUcmFjayB9LCB2YWx1ZSkgPT4ge1xuICAgICAgYWNjW3ZhbHVlLmlkXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSksXG4gICAgZXZlbnRzOiBjYWxjdWxhdGVNaWxsaXMoZXZlbnRzLCB7XG4gICAgICBwcHE6IGhlYWRlci50aWNrc1BlckJlYXQsXG4gICAgICBicG06IGluaXRpYWxUZW1wbyxcbiAgICB9KSxcbiAgICBub3RlczogY3JlYXRlTm90ZXMoZXZlbnRzKSxcbiAgICBpbml0aWFsVGVtcG8sXG4gICAgaW5pdGlhbE51bWVyYXRvcixcbiAgICBpbml0aWFsRGVub21pbmF0b3IsXG4gIH0gYXMgU29uZztcbn1cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIocmVhZGVyOiBCdWZmZXJSZWFkZXIpIHtcbiAgY29uc3QgaGVhZGVyQ2h1bmsgPSByZWFkZXIubWlkaUNodW5rKCk7XG4gIGlmIChoZWFkZXJDaHVuay5pZCAhPT0gXCJNVGhkXCIgfHwgaGVhZGVyQ2h1bmsubGVuZ3RoICE9PSA2KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQmFkIC5taWQgZmlsZSwgaGVhZGVyIG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRlclJlYWRlciA9IG5ldyBCdWZmZXJSZWFkZXIoaGVhZGVyQ2h1bmsuZGF0YSk7XG4gIGNvbnN0IGZvcm1hdFR5cGUgPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGNvbnN0IHRyYWNrQ291bnQgPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGNvbnN0IHRpbWVEaXZpc2lvbiA9IGhlYWRlclJlYWRlci51aW50MTYoKTtcbiAgaWYgKHRpbWVEaXZpc2lvbiAmIDB4ODAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkV4cHJlc3NpbmcgdGltZSBkaXZpc2lvbiBpbiBTTVRQRSBmcmFtZXMgaXMgbm90IHN1cHBvcnRlZCB5ZXRcIik7XG4gIH1cbiAgY29uc3QgdGlja3NQZXJCZWF0ID0gdGltZURpdmlzaW9uO1xuXG4gIHJldHVybiB7IGZvcm1hdFR5cGUsIHRyYWNrQ291bnQsIHRpY2tzUGVyQmVhdCB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVRyYWNrcyhcbiAgcmVhZGVyOiBCdWZmZXJSZWFkZXIsXG4gIHBwcTogbnVtYmVyXG4pOiB7XG4gIHRyYWNrczogVHJhY2tbXTtcbiAgZXZlbnRzOiBNSURJRXZlbnRbXTtcbiAgaW5pdGlhbFRlbXBvOiBudW1iZXI7XG4gIGluaXRpYWxOdW1lcmF0b3I6IG51bWJlcjtcbiAgaW5pdGlhbERlbm9taW5hdG9yOiBudW1iZXI7XG59IHtcbiAgbGV0IGluaXRpYWxUZW1wbyA9IC0xO1xuICBsZXQgaW5pdGlhbE51bWVyYXRvciA9IC0xO1xuICBsZXQgaW5pdGlhbERlbm9taW5hdG9yID0gLTE7XG4gIGNvbnN0IHRyYWNrczogVHJhY2tbXSA9IFtdO1xuICBjb25zdCBldmVudHM6IE1JRElFdmVudFtdID0gW107XG4gIHdoaWxlICghcmVhZGVyLmVvZigpKSB7XG4gICAgY29uc3QgdHJhY2tDaHVuayA9IHJlYWRlci5taWRpQ2h1bmsoKTtcblxuICAgIGlmICh0cmFja0NodW5rLmlkICE9PSBcIk1UcmtcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGNodW5rLCBleHBlY3RlZCBNVHJrLCBnb3QgJHt0cmFja0NodW5rLmlkfWApO1xuICAgIH1cbiAgICBjb25zdCB0cmFja0lkID0gYFQtJHt1bmlxdWlkKCl9YDtcbiAgICBjb25zdCB0cmFjayA9IGNyZWF0ZVRyYWNrKHRyYWNrSWQpO1xuICAgIGNvbnN0IHRyYWNrVHJhY2sgPSBuZXcgQnVmZmVyUmVhZGVyKHRyYWNrQ2h1bmsuZGF0YSk7XG4gICAgbGV0IHRpY2tzID0gMDtcbiAgICBsZXQgbGFzdFR5cGVCeXRlID0gbnVsbDtcbiAgICB3aGlsZSAoIXRyYWNrVHJhY2suZW9mKCkpIHtcbiAgICAgIGxldCBkYXRhID0gcGFyc2VFdmVudCh0cmFja1RyYWNrLCBsYXN0VHlwZUJ5dGUpO1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjb25zdCB7IGV2ZW50LCBkZWx0YVRpbWUsIGJwbSwgbnVtZXJhdG9yLCBkZW5vbWluYXRvciwgdHJhY2tOYW1lIH0gPSBkYXRhO1xuICAgICAgaWYgKGJwbSAmJiBpbml0aWFsVGVtcG8gPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxUZW1wbyA9IGJwbTtcbiAgICAgIH1cbiAgICAgIGlmIChudW1lcmF0b3IgJiYgaW5pdGlhbE51bWVyYXRvciA9PT0gLTEpIHtcbiAgICAgICAgaW5pdGlhbE51bWVyYXRvciA9IG51bWVyYXRvcjtcbiAgICAgIH1cbiAgICAgIGlmIChkZW5vbWluYXRvciAmJiBpbml0aWFsRGVub21pbmF0b3IgPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxEZW5vbWluYXRvciA9IGRlbm9taW5hdG9yO1xuICAgICAgfVxuICAgICAgaWYgKHRyYWNrTmFtZSkge1xuICAgICAgICB0cmFjay5uYW1lID0gdHJhY2tOYW1lO1xuICAgICAgfVxuICAgICAgdGlja3MgKz0gZGVsdGFUaW1lO1xuICAgICAgLy8gY29uc29sZS5sb2coJ1RJQ0tTJywgdGlja3MsIGJwbSwgbnVtZXJhdG9yKTtcbiAgICAgIGxhc3RUeXBlQnl0ZSA9IGV2ZW50LnR5cGU7XG4gICAgICBldmVudHMucHVzaCh7XG4gICAgICAgIC4uLmV2ZW50LFxuICAgICAgICB0cmFja0lkLFxuICAgICAgICB0aWNrcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0cmFja3MucHVzaCh0cmFjayk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV2ZW50czogc29ydE1JRElFdmVudHMoZXZlbnRzKSxcbiAgICB0cmFja3MsXG4gICAgaW5pdGlhbFRlbXBvLFxuICAgIGluaXRpYWxOdW1lcmF0b3IsXG4gICAgaW5pdGlhbERlbm9taW5hdG9yLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZUV2ZW50KHJlYWRlcjogQnVmZmVyUmVhZGVyLCBsYXN0VHlwZUJ5dGU6IG51bWJlciB8IG51bGwpOiBQYXJzZWREYXRhIHtcbiAgY29uc3QgZGVsdGFUaW1lID0gcmVhZGVyLm1pZGlJbnQoKTtcbiAgbGV0IHR5cGVCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG5cbiAgLy8gbWV0YSBldmVudHM6IDB4ZmZcbiAgLy8gc3lzdGVtIGV2ZW50czogMHhmMCwgMHhmN1xuICAvLyBtaWRpIGV2ZW50czogYWxsIG90aGVyIGJ5dGVzXG5cbiAgaWYgKHR5cGVCeXRlID09PSAweGZmKSB7XG4gICAgY29uc3Qgc3ViVHlwZUJ5dGUgPSByZWFkZXIudWludDgoKTtcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuXG4gICAgc3dpdGNoIChzdWJUeXBlQnl0ZSkge1xuICAgICAgLy8gc2VxdWVuY2UgbnVtYmVyXG4gICAgICBjYXNlIDB4MDA6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc2VxdWVuY2VOdW1iZXIgZXZlbnQgaXMgMiwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU0VRVUVOQ0VfTlVNQkVSLFxuICAgICAgICAgICAgbnVtYmVyOiByZWFkZXIudWludDE2KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0ZXh0XG4gICAgICBjYXNlIDB4MDE6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogVEVYVCxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNvcHlyaWdodFxuICAgICAgY2FzZSAweDAyOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENPUFlSSUdIVF9OT1RJQ0UsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0cmFjayBuYW1lXG4gICAgICBjYXNlIDB4MDM6XG4gICAgICAgIGNvbnN0IHRyYWNrTmFtZSA9IHJlYWRlci5zdHJpbmcobGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBUUkFDS19OQU1FLFxuICAgICAgICAgICAgdGV4dDogdHJhY2tOYW1lLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICAgIHRyYWNrTmFtZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGluc3RydW1lbnQgbmFtZVxuICAgICAgY2FzZSAweDA0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IElOU1RSVU1FTlRfTkFNRSxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGx5cmljc1xuICAgICAgY2FzZSAweDA1OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IExZUklDUyxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIG1hcmtlclxuICAgICAgY2FzZSAweDA2OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IE1BUktFUixcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGN1ZSBwb2ludFxuICAgICAgY2FzZSAweDA3OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENVRV9QT0lOVCxcbiAgICAgICAgICAgIHRleHQ6IHJlYWRlci5zdHJpbmcobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNoYW5uZWwgcHJlZml4XG4gICAgICBjYXNlIDB4MjA6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3IgbWlkaUNoYW5uZWxQcmVmaXggZXZlbnQgaXMgMSwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogQ0hBTk5FTF9QUkVGSVgsXG4gICAgICAgICAgICBjaGFubmVsOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGVuZCBvZiB0cmFja1xuICAgICAgY2FzZSAweDJmOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIGVuZE9mVHJhY2sgZXZlbnQgaXMgMCwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIGRlc2NyOiBFTkRfT0ZfVFJBQ0ssXG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGVtcG9cbiAgICAgIGNhc2UgMHg1MTpcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBzZXRUZW1wbyBldmVudCBpcyAzLCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWljcm9zZWNvbmRzUGVyQmVhdCA9IChyZWFkZXIudWludDgoKSA8PCAxNikgKyAocmVhZGVyLnVpbnQ4KCkgPDwgOCkgKyByZWFkZXIudWludDgoKTtcbiAgICAgICAgY29uc3QgYnBtID0gNjAwMDAwMDAgLyBtaWNyb3NlY29uZHNQZXJCZWF0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRFTVBPLFxuICAgICAgICAgICAgYnBtLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYnBtLFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHNtcHRlIG9mZnNldFxuICAgICAgY2FzZSAweDU0OlxuICAgICAgICBpZiAobGVuZ3RoICE9IDUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc21wdGVPZmZzZXQgZXZlbnQgaXMgNSwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhvdXJCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU01QVEVfT0ZGU0VULFxuICAgICAgICAgICAgZnJhbWVSYXRlOiBnZXRGcmFtZVJhdGUoaG91ckJ5dGUpLFxuICAgICAgICAgICAgaG91cjogaG91ckJ5dGUgJiAweDFmLFxuICAgICAgICAgICAgbWluOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICAgIHNlYzogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBmcmFtZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBzdWJGcmFtZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyB0aW1lIHNpZ25hdHVyZVxuICAgICAgY2FzZSAweDU4OlxuICAgICAgICBpZiAobGVuZ3RoICE9IDQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3IgdGltZVNpZ25hdHVyZSBldmVudCBpcyA0LCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbnVtZXJhdG9yID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIGNvbnN0IGRlbm9taW5hdG9yID0gTWF0aC5wb3coMiwgcmVhZGVyLnVpbnQ4KCkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRJTUVfU0lHTkFUVVJFLFxuICAgICAgICAgICAgbnVtZXJhdG9yLFxuICAgICAgICAgICAgZGVub21pbmF0b3IsXG4gICAgICAgICAgICBtZXRyb25vbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgdGhpcnR5U2Vjb25kczogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBudW1lcmF0b3IsXG4gICAgICAgICAgZGVub21pbmF0b3IsXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8ga2V5IHNpZ25hdHVyZVxuICAgICAgY2FzZSAweDU5OlxuICAgICAgICBpZiAobGVuZ3RoICE9IDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Iga2V5U2lnbmF0dXJlIGV2ZW50IGlzIDIsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IEtFWV9TSUdOQVRVUkUsXG4gICAgICAgICAgICBrZXk6IHJlYWRlci5pbnQ4KCksXG4gICAgICAgICAgICBzY2FsZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBzZXF1ZW5jZXIgc3BlY2lmaWNcbiAgICAgIGNhc2UgMHg3ZjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBTRVFVRU5DRVJfU1BFQ0lGSUMsXG4gICAgICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdW5kZWZpbmVkXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFwidW5kZWZpbmVkXCIsXG4gICAgICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlQnl0ZSA9PT0gMHhmMCkge1xuICAgIC8vIHN5c3RlbSBleGNsdXNpdmVcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDoge1xuICAgICAgICB0eXBlOiAweGYwLFxuICAgICAgICBkZXNjcjogU1lTVEVNX0VYQ0xVU0lWRSxcbiAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgIH0sXG4gICAgICBkZWx0YVRpbWUsXG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlQnl0ZSA9PT0gMHhmNykge1xuICAgIC8vIGRpdmlkZWQgc3lzdGVtIGV4Y2x1c2l2ZVxuICAgIGNvbnN0IGxlbmd0aCA9IHJlYWRlci5taWRpSW50KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV2ZW50OiB7XG4gICAgICAgIHR5cGU6IDB4ZjAsXG4gICAgICAgIGRlc2NyOiBESVZJREVEX1NZU1RFTV9FWENMVVNJVkUsXG4gICAgICAgIGRhdGE6IHJlYWRlci5yZWFkKGxlbmd0aCksXG4gICAgICB9LFxuICAgICAgZGVsdGFUaW1lLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLyoqXG4gICAgICogcnVubmluZyBzdGF0dXMgLSByZXVzZSBsYXN0RXZlbnRUeXBlQnl0ZSBhcyB0aGUgZXZlbnQgdHlwZVxuICAgICAqIHR5cGVCeXRlIGlzIGFjdHVhbGx5IHRoZSBmaXJzdCBwYXJhbWV0ZXJcbiAgICAgKi9cbiAgICBjb25zdCBpc1J1bm5pbmdTdGF0dXMgPSAodHlwZUJ5dGUgJiAwYjEwMDAwMDAwKSA9PT0gMDtcbiAgICBjb25zdCB2YWx1ZSA9IGlzUnVubmluZ1N0YXR1cyA/IHR5cGVCeXRlIDogcmVhZGVyLnVpbnQ4KCk7XG4gICAgdHlwZUJ5dGUgPSBpc1J1bm5pbmdTdGF0dXMgPyAobGFzdFR5cGVCeXRlID09PSBudWxsID8gMCA6IGxhc3RUeXBlQnl0ZSkgOiB0eXBlQnl0ZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGlzUnVubmluZ1N0YXR1cywgdHlwZUJ5dGUsIHZhbHVlKTtcblxuICAgIGNvbnN0IGNoYW5uZWwgPSB0eXBlQnl0ZSAmIDB4MGY7XG4gICAgLy8gY2hhbm5lbHNbY2hhbm5lbF0gPSB0cnVlO1xuXG4gICAgc3dpdGNoICh0eXBlQnl0ZSA+PiA0KSB7XG4gICAgICAvLyBub3RlIG9mZlxuICAgICAgY2FzZSAweDA4OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweDgwLFxuICAgICAgICAgICAgZGVzY3I6IE5PVEVfT0ZGLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gbm90ZSBvblxuICAgICAgY2FzZSAweDA5OlxuICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB2ZWxvY2l0eSA9PT0gMCA/IDB4ODAgOiAweDkwLFxuICAgICAgICAgICAgZGVzY3I6IHZlbG9jaXR5ID09PSAwID8gTk9URV9PRkYgOiBOT1RFX09OLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmVsb2NpdHksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBub3RlIGFmdGVydG91Y2hcbiAgICAgIGNhc2UgMHgwYTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhhMCxcbiAgICAgICAgICAgIGRlc2NyOiBOT1RFX0FGVEVSVE9VQ0gsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgbm90ZU51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICBhbW91bnQ6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gY29udHJvbGxlclxuICAgICAgY2FzZSAweDBiOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGIwLFxuICAgICAgICAgICAgZGVzY3I6IENPTlRST0xMRVIsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgY29udHJvbGxlck51bWJlcjogdmFsdWUsXG4gICAgICAgICAgICB2YWx1ZTogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBwcm9ncmFtIGNoYW5nZVxuICAgICAgY2FzZSAweDBjOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGMwLFxuICAgICAgICAgICAgZGVzY3I6IFBST0dSQU1fQ0hBTkdFLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIHByb2dyYW06IHZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gY2hhbm5lbCBhZnRlcnRvdWNoXG4gICAgICBjYXNlIDB4MGQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4ZDAsXG4gICAgICAgICAgICBkZXNjcjogQ0hBTk5FTF9BRlRFUlRPVUNILFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIGFtb3VudDogdmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBwaXRjaCBiZW5kXG4gICAgICBjYXNlIDB4MGU6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4ZTAsXG4gICAgICAgICAgICBkZXNjcjogUElUQ0hfQkVORCxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUgKyAocmVhZGVyLnVpbnQ4KCkgPDwgNyksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG5cbiAgICAgIC8vIGRlZmF1bHQ6XG4gICAgICAvLyAgIHJldHVybiB7XG4gICAgICAvLyAgICAgZXZlbnQ6IHtcbiAgICAgIC8vICAgICAgIHR5cGU6IHR5cGVCeXRlID4+IDQsXG4gICAgICAvLyAgICAgICBkZXNjcjogXCJ1bnJlY29nbml6ZWRcIixcbiAgICAgIC8vICAgICAgIGNoYW5uZWwsXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgICBkZWx0YVRpbWUsXG4gICAgICAvLyAgIH07XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGBVbnJlY29nbml6ZWQgTUlESSBldmVudCB0eXBlIGJ5dGU6ICR7dHlwZUJ5dGV9IChmaXggdGhpcylgKTtcbiAgcmV0dXJuIHtcbiAgICBldmVudDoge1xuICAgICAgdHlwZTogdHlwZUJ5dGUgPT09IDI1NSA/IDAgOiB0eXBlQnl0ZSxcbiAgICB9LFxuICAgIGRlbHRhVGltZSxcbiAgfTtcbiAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgTUlESSBldmVudCB0eXBlIGJ5dGU6ICR7dHlwZUJ5dGV9YCk7XG59XG5cbmZ1bmN0aW9uIGdldEZyYW1lUmF0ZShob3VyQnl0ZTogbnVtYmVyKSB7XG4gIHN3aXRjaCAoaG91ckJ5dGUgJiAwYjExMDAwMDApIHtcbiAgICBjYXNlIDB4MDA6XG4gICAgICByZXR1cm4gMjQ7XG4gICAgY2FzZSAweDIwOlxuICAgICAgcmV0dXJuIDI1O1xuICAgIGNhc2UgMHg0MDpcbiAgICAgIHJldHVybiAyOTtcbiAgICBjYXNlIDB4NjA6XG4gICAgICByZXR1cm4gMzA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vY3JlYXRlU29uZ1wiO1xuaW1wb3J0IHsgTUlESUV2ZW50LCBOb3RlT25FdmVudCB9IGZyb20gXCIuL01JRElFdmVudFwiO1xuaW1wb3J0IHsgTk9URV9PTiwgTk9URV9PRkYgfSBmcm9tIFwiLi91dGlsL21pZGlcIjtcblxudHlwZSBBcmdzID0ge1xuICBzb25nOiBTb25nO1xuICBtaWxsaXM6IG51bWJlcjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgb3V0cHV0cz86IFdlYk1pZGkuTUlESU91dHB1dE1hcDtcbn07XG5leHBvcnQgY29uc3Qgc2NoZWR1bGUgPSAoe1xuICBzb25nLFxuICBpbmRleCxcbiAgbWlsbGlzLFxuICBvdXRwdXRzLFxufTogQXJncyk6IHsgbWlsbGlzOiBudW1iZXI7IGluZGV4OiBudW1iZXI7IHNjaGVkdWxlZDogTUlESUV2ZW50W10gfSA9PiB7XG4gIGNvbnN0IHRzID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSBzb25nO1xuICBjb25zdCBzY2hlZHVsZWQgPSBbXTtcbiAgLy8gbGV0IGxhc3ROb3RlTnVtYmVyOiBudW1iZXIgPSAtMTtcbiAgLy8gbGV0IGxhc3ROb3RlVHlwZTogbnVtYmVyID0gLTE7XG4gIHdoaWxlIChpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1tpbmRleF07XG4gICAgaWYgKCFldmVudC5taWxsaXMgfHwgIWV2ZW50LnRyYWNrSWQpIHtcbiAgICAgIC8vIGJyZWFrO1xuICAgICAgaW5kZXgrKztcbiAgICB9IGVsc2UgaWYgKGV2ZW50Lm1pbGxpcyA8IG1pbGxpcyArIHNvbmcuYnVmZmVyVGltZSkge1xuICAgICAgc2NoZWR1bGVkLnB1c2goZXZlbnQpO1xuICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGlja3MsIGV2ZW50LmRlc2NyLCAoZXZlbnQgYXMgTm90ZU9uRXZlbnQpLm5vdGVOdW1iZXIpO1xuICAgICAgY29uc3QgdHJhY2sgPSBzb25nLnRyYWNrc0J5SWRbZXZlbnQudHJhY2tJZF07XG4gICAgICB0cmFjay5vdXRwdXRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuZGVzY3IgPT09IE5PVEVfT04gfHwgZXZlbnQuZGVzY3IgPT09IE5PVEVfT0ZGKSB7XG4gICAgICAgICAgY29uc3QgZSA9IGV2ZW50IGFzIE5vdGVPbkV2ZW50O1xuICAgICAgICAgIGlmIChldmVudC5taWxsaXMpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnR5cGUsIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIpO1xuICAgICAgICAgICAgbGV0IHRpbWUgPSB0cyArIHNvbmcubGF0ZW5jeSArIHRyYWNrLmxhdGVuY3kgKyAoZXZlbnQubWlsbGlzIC0gbWlsbGlzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50W1wibm90ZU51bWJlclwiXSwgZXZlbnQuZGVzY3IsIGV2ZW50Lm1pbGxpcywgbWlsbGlzLCB0aW1lLCB0cywgdGltZSAtIHRzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUubm90ZU51bWJlciwgbGFzdE5vdGVOdW1iZXIsIGxhc3ROb3RlVHlwZSk7XG4gICAgICAgICAgICAvLyBpZiAoZS5ub3RlTnVtYmVyID09PSBsYXN0Tm90ZU51bWJlciAmJiBsYXN0Tm90ZVR5cGUgPT09IDB4OTApIHtcbiAgICAgICAgICAgIC8vICAgaWYgKGUuZGVzY3IgPT09IE5PVEVfT04pIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlcGVhdGluZyBub3Rlc1wiKTtcbiAgICAgICAgICAgIC8vICAgICB0aW1lICs9IDE7XG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGxhc3ROb3RlTnVtYmVyID0gZS5ub3RlTnVtYmVyO1xuICAgICAgICAgICAgLy8gbGFzdE5vdGVUeXBlID0gZS50eXBlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudHlwZSArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5KTtcbiAgICAgICAgICAgIC8vIHF1aWNrIGZpeCBmb3IgcmVwZWF0aW5nIG5vdGVzXG4gICAgICAgICAgICBpZiAoZS5kZXNjciA9PT0gTk9URV9PTikge1xuICAgICAgICAgICAgICB0aW1lICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXRzXG4gICAgICAgICAgICAgID8uZ2V0KGlkKVxuICAgICAgICAgICAgICA/LnNlbmQoW2V2ZW50LnR5cGUgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eV0sIHRpbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgLy8gY29uc29sZS5sb2coJ1tTQ0hFRFVMRURdJywgc2NoZWR1bGVkLm1hcChlID0+IFtlLnRpY2tzLCBlLm1pbGxpc10pKTtcbiAgcmV0dXJuIHsgbWlsbGlzLCBpbmRleCwgc2NoZWR1bGVkIH07XG59O1xuIiwiY29uc3Qgc3RhdHVzID0gKHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8UmVzcG9uc2U+ID0+IHtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hKU09OID0gKHVybDogc3RyaW5nKTogUHJvbWlzZTxKU09OPiA9PlxuICAvLyBmZXRjaCh1cmwsIHtcbiAgLy8gICBtb2RlOiAnbm8tY29ycydcbiAgLy8gfSlcbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHN0YXR1cylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hYTUwgPSAodXJsOiBzdHJpbmcpOiBQcm9taXNlPFhNTERvY3VtZW50PiA9PlxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oc3RhdHVzKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAudGhlbihzdHIgPT4gbmV3IHdpbmRvdy5ET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3RyLCBcInRleHQveG1sXCIpKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXJyYXlidWZmZXIgPSAodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiA9PlxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oc3RhdHVzKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpO1xuIiwiaW1wb3J0IHsgTUlESUV2ZW50IH0gZnJvbSBcIi4uL01JRElFdmVudFwiO1xuXG5leHBvcnQgY29uc3QgU0VRVUVOQ0VfTlVNQkVSID0gXCJzZXF1ZW5jZSBudW1iZXJcIjtcbmV4cG9ydCBjb25zdCBURVhUID0gXCJ0ZXh0XCI7XG5leHBvcnQgY29uc3QgQ09QWVJJR0hUX05PVElDRSA9IFwiY29weXJpZ2h0IG5vdGljZVwiO1xuZXhwb3J0IGNvbnN0IFRSQUNLX05BTUUgPSBcInRyYWNrIG5hbWVcIjtcbmV4cG9ydCBjb25zdCBJTlNUUlVNRU5UX05BTUUgPSBcImluc3RydW1lbnQgbmFtZVwiO1xuZXhwb3J0IGNvbnN0IExZUklDUyA9IFwibHlyaWNzXCI7XG5leHBvcnQgY29uc3QgTUFSS0VSID0gXCJtYXJrZXJcIjtcbmV4cG9ydCBjb25zdCBDVUVfUE9JTlQgPSBcImN1ZSBwb2ludFwiO1xuZXhwb3J0IGNvbnN0IENIQU5ORUxfUFJFRklYID0gXCJjaGFubmVsIHByZWZpeFwiO1xuZXhwb3J0IGNvbnN0IEVORF9PRl9UUkFDSyA9IFwiZW5kIG9mIHRyYWNrXCI7XG5leHBvcnQgY29uc3QgVEVNUE8gPSBcInRlbXBvXCI7XG5leHBvcnQgY29uc3QgU01QVEVfT0ZGU0VUID0gXCJzbXB0ZSBvZmZzZXRcIjtcbmV4cG9ydCBjb25zdCBUSU1FX1NJR05BVFVSRSA9IFwidGltZSBzaWduYXR1cmVcIjtcbmV4cG9ydCBjb25zdCBLRVlfU0lHTkFUVVJFID0gXCJrZXkgc2lnbmF0dXJlXCI7XG5leHBvcnQgY29uc3QgU0VRVUVOQ0VSX1NQRUNJRklDID0gXCJzZXF1ZW5jZXIgc3BlY2lmaWNcIjtcbmV4cG9ydCBjb25zdCBTWVNURU1fRVhDTFVTSVZFID0gXCJzeXN0ZW0gZXhjbHVzaXZlXCI7XG5leHBvcnQgY29uc3QgRElWSURFRF9TWVNURU1fRVhDTFVTSVZFID0gXCJkaXZpZGVkIHN5c3RlbSBleGNsdXNpdmVcIjtcbmV4cG9ydCBjb25zdCBOT1RFX09OID0gXCJub3RlIG9uXCI7XG5leHBvcnQgY29uc3QgTk9URV9PRkYgPSBcIm5vdGUgb2ZmXCI7XG5leHBvcnQgY29uc3QgTk9URV9BRlRFUlRPVUNIID0gXCJub3RlIGFmdGVydG91Y2hcIjtcbmV4cG9ydCBjb25zdCBDT05UUk9MTEVSID0gXCJjb250cm9sbGVyXCI7XG5leHBvcnQgY29uc3QgUFJPR1JBTV9DSEFOR0UgPSBcInByb2dyYW0gY2hhbmdlXCI7XG5leHBvcnQgY29uc3QgQ0hBTk5FTF9BRlRFUlRPVUNIID0gXCJjaGFubmVsIGFmdGVydG91Y2hcIjtcbmV4cG9ydCBjb25zdCBQSVRDSF9CRU5EID0gXCJwaXRjaCBiZW5kXCI7XG5cbmNvbnN0IGRlc2NyaXB0aW9uczogeyBbaW5kZXg6IG51bWJlcl06IHsgW2luZGV4OiBudW1iZXJdOiBzdHJpbmcgfSB8IHN0cmluZyB9ID0ge1xuICAweGZmOiB7XG4gICAgMHgwMDogXCJzZXF1ZW5jZSBudW1iZXJcIixcbiAgICAweDAxOiBcInRleHRcIixcbiAgICAweDAyOiBcImNvcHlyaWdodCBub3RpY2VcIixcbiAgICAweDAzOiBcInRyYWNrIG5hbWVcIixcbiAgICAweDA0OiBcImluc3RydW1lbnQgbmFtZVwiLFxuICAgIDB4MDU6IFwibHlyaWNzXCIsXG4gICAgMHgwNjogXCJtYXJrZXJcIixcbiAgICAweDA3OiBcImN1ZSBwb2ludFwiLFxuICAgIDB4MjA6IFwiY2hhbm5lbCBwcmVmaXhcIixcbiAgICAweDJmOiBcImVuZCBvZiB0cmFja1wiLFxuICAgIDB4NTE6IFwidGVtcG9cIixcbiAgICAweDU0OiBcInNtcHRlIG9mZnNldFwiLFxuICAgIDB4NTg6IFwidGltZSBzaWduYXR1cmVcIixcbiAgICAweDU5OiBcImtleSBzaWduYXR1cmVcIixcbiAgICAweDdmOiBcInNlcXVlbmNlciBzcGVjaWZpY1wiLFxuICB9LFxuICAweGYwOiBcInN5c3RlbSBleGNsdXNpdmVcIixcbiAgMHhmNzogXCJkaXZpZGVkIHN5c2V4XCIsXG4gIDB4ODA6IFwibm90ZSBvblwiLFxuICAweDkwOiBcIm5vdGUgb2ZmXCIsXG4gIDB4YTA6IFwibm90ZSBhZnRlcnRvdWNoXCIsXG4gIDB4YjA6IFwiY29udHJvbGxlclwiLFxuICAweGMwOiBcInByb2dyYW0gY2hhbmdlXCIsXG4gIDB4ZDA6IFwiY2hhbm5lbCBhZnRlcnRvdWNoXCIsXG4gIDB4ZTA6IFwicGl0Y2ggYmVuZFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IG5vdGVOYW1lcyA9IHtcbiAgc2hhcnA6IFtcIkNcIiwgXCJDI1wiLCBcIkRcIiwgXCJEI1wiLCBcIkVcIiwgXCJGXCIsIFwiRiNcIiwgXCJHXCIsIFwiRyNcIiwgXCJBXCIsIFwiQSNcIiwgXCJCXCJdLFxuICBmbGF0OiBbXCJDXCIsIFwiRGJcIiwgXCJEXCIsIFwiRWJcIiwgXCJFXCIsIFwiRlwiLCBcIkdiXCIsIFwiR1wiLCBcIkFiXCIsIFwiQVwiLCBcIkJiXCIsIFwiQlwiXSxcbiAgXCJlbmhhcm1vbmljLXNoYXJwXCI6IFtcIkIjXCIsIFwiQyNcIiwgXCJDIyNcIiwgXCJEI1wiLCBcIkQjI1wiLCBcIkUjXCIsIFwiRiNcIiwgXCJGIyNcIiwgXCJHI1wiLCBcIkcjI1wiLCBcIkEjXCIsIFwiQSMjXCJdLFxuICBcImVuaGFybW9uaWMtZmxhdFwiOiBbXCJEYmJcIiwgXCJEYlwiLCBcIkViYlwiLCBcIkViXCIsIFwiRmJcIiwgXCJHYmJcIiwgXCJHYlwiLCBcIkFiYlwiLCBcIkFiXCIsIFwiQmJiXCIsIFwiQmJcIiwgXCJDYlwiXSxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNaWRpRXZlbnREZXNjcmlwdGlvbiA9ICh0eXBlOiBudW1iZXIsIHN1YlR5cGU/OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBpZiAodHlwZW9mIHN1YlR5cGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRpb25zW3R5cGVdIGFzIHN0cmluZztcbiAgfVxuICByZXR1cm4gZGVzY3JpcHRpb25zW3R5cGVdW3N1YlR5cGVdIHx8IFwidW5kZWZpbmVkXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWlkaU1lc3NhZ2VFdmVudCA9IChldmVudDogTUlESUV2ZW50KTogbnVtYmVyW10gPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmRlc2NyKSB7XG4gICAgY2FzZSBOT1RFX09OOlxuICAgICAgcmV0dXJuIFsweDkwICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHldO1xuICAgIGNhc2UgTk9URV9PRkY6XG4gICAgICByZXR1cm4gWzB4ODAgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eV07XG4gIH1cbiAgcmV0dXJuIFswXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXROb3RlTnVtYmVyID0gKG5hbWU6IHN0cmluZywgb2N0YXZlOiBudW1iZXIsIG1vZGU6IHN0cmluZyA9IFwic2hhcnBcIik6IG51bWJlciA9PiB7XG4gIC8vIGxldCBpbmRleCA9IC0xO1xuICAvLyBjb25zdCBtb2RlcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG5vdGVOYW1lcyk7XG4gIC8vIGZvciAobGV0IGkgPSAwLCBtYXhpID0gbW9kZXMubGVuZ3RoOyBpIDwgbWF4aTsgaSsrKSB7XG4gIC8vICAgY29uc3QgbmFtZXMgPSBtb2Rlc1tpXTtcbiAgLy8gICBmb3IgKGxldCBqID0gMCwgbWF4aiA9IG5hbWVzLmxlbmd0aDsgaiA8IG1heGo7IGorKykge1xuICAvLyAgICAgaWYgKG1vZGVbal0gPT09IG5hbWUpIHtcbiAgLy8gICAgICAgaW5kZXggPSBpO1xuICAvLyAgICAgICBicmVhaztcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cbiAgbGV0IGluZGV4ID0gLTE7XG4gIGNvbnN0IG1vZGVzID0gT2JqZWN0LnZhbHVlcyhub3RlTmFtZXMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZXMgPSBtb2Rlc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhuYW1lc1tqXSwgbmFtZSk7XG4gICAgICBpZiAobmFtZXNbal0gPT09IG5hbWUpIHtcbiAgICAgICAgaW5kZXggPSBqO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gY29uc29sZS5sb2cobmFtZSwgb2N0YXZlLCBpbmRleCk7XG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvL251bWJlciA9IChpbmRleCArIDEyKSArIChvY3RhdmUgKiAxMikgKyAxMjsgLy8g4oaSIGluIEN1YmFzZSBjZW50cmFsIEMgPSBDMyBpbnN0ZWFkIG9mIEM0XG4gIHJldHVybiBpbmRleCArIDEyICsgb2N0YXZlICogMTI7IC8vIOKGkiBtaWRpIHN0YW5kYXJkICsgc2NpZW50aWZpYyBuYW1pbmcsIHNlZTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NaWRkbGVfQyBhbmQgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TY2llbnRpZmljX3BpdGNoX25vdGF0aW9uXG59O1xuXG5leHBvcnQgY29uc3Qgc29ydE1JRElFdmVudHMgPSAoZXZlbnRzOiBNSURJRXZlbnRbXSk6IE1JRElFdmVudFtdID0+XG4gIGV2ZW50cy5zb3J0KChhOiBNSURJRXZlbnQsIGI6IE1JRElFdmVudCkgPT4ge1xuICAgIGlmIChhLnRpY2tzIDwgYi50aWNrcykge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZiAoYS50aWNrcyA+IGIudGlja3MpIHtcbiAgICAgIHJldHVybiAxO1xuICAgICAgLy8gfSBlbHNlIGlmIChhLnR5cGUgPT09IDB4ODAgJiYgYi50eXBlID09PSAweDkwKSB7XG4gICAgICAvLyAgIC8vIG5vdGUgb2ZmIGJlZm9yZSBub3RlIG9uXG4gICAgICAvLyAgIHJldHVybiAtMTtcbiAgICAgIC8vIH0gZWxzZSBpZiAoYS50eXBlID09PSAweDUxIHx8IGEudHlwZSA9PT0gMHg1OCkge1xuICAgICAgLy8gICAvLyB0ZW1wbyBhbmQgdGltZSBzaWduYXR1cmUgZXZlbnRzIGZpcnN0XG4gICAgICAvLyAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRG91YmxlRXZlbnRzID0gKGV2ZW50czogTUlESUV2ZW50W10pOiBNSURJRXZlbnRbXSA9PiB7XG4gIC8vIHZhciBpLCBtYXhpID0gZXZlbnRzLmxlbmd0aCxcbiAgLy8gICBldmVudCwgZXZlbnRJZCwgbGFzdElkLFxuICAvLyAgIHJlc3VsdCA9IFtdO1xuXG4gIC8vIGV2ZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gIC8vICAgcmV0dXJuIGEuZXZlbnROdW1iZXIgLSBiLmV2ZW50TnVtYmVyO1xuICAvLyB9KTtcblxuICAvLyBmb3IgKGkgPSAwOyBpIDwgbWF4aTsgaSsrKSB7XG4gIC8vICAgZXZlbnQgPSBldmVudHNbaV07XG4gIC8vICAgZXZlbnRJZCA9IGV2ZW50LmlkO1xuICAvLyAgIGlmIChldmVudElkICE9PSBsYXN0SWQpIHtcbiAgLy8gICAgIHJlc3VsdC5wdXNoKGV2ZW50KTtcbiAgLy8gICB9XG4gIC8vICAgbGFzdElkID0gZXZlbnRJZDtcbiAgLy8gfVxuICAvLyByZXR1cm4gcmVzdWx0O1xuICByZXR1cm4gW107XG59O1xuIiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMTkgSGFsw6FzeiDDgWTDoW0gPG1haWxAYWRhbWhhbGFzei5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gcHJvY2VzcyAmJiBwcm9jZXNzLnBpZCA/IHByb2Nlc3MucGlkLnRvU3RyaW5nKDM2KSA6ICcnIDtcbnZhciBhZGRyZXNzID0gJyc7XG5pZih0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBuZXR3b3JrSW50ZXJmYWNlcyA9IHJlcXVpcmUoJ29zJykubmV0d29ya0ludGVyZmFjZXMoKTtcbiAgICBmb3IobGV0IGludGVyZmFjZV9rZXkgaW4gbmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gbmV0d29ya0ludGVyZmFjZXNbaW50ZXJmYWNlX2tleV07XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYobmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgbWFjID0gbmV0d29ya0ludGVyZmFjZVtpXS5tYWM7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZHJlc3MgPSBtYWMgPyBwYXJzZUludChtYWMucmVwbGFjZSgvXFw6fFxcRCsvZ2ksICcnKSkudG9TdHJpbmcoMzYpIDogJycgO1xufSBcblxuLy8gIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIGFkZHJlc3MgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy5wcm9jZXNzID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnRpbWUgICAgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxuXG4vLyAgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBub3coKXtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGxhc3QgPSBub3cubGFzdCB8fCB0aW1lO1xuICAgIHJldHVybiBub3cubGFzdCA9IHRpbWUgPiBsYXN0ID8gdGltZSA6IGxhc3QgKyAxO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL211c2ljeG1sL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
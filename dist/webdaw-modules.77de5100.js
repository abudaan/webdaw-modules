// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/fetch_helpers.ts":[function(require,module,exports) {
"use strict"; // fetch helpers

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    fetch(url).then(status).then(json).then(function (data) {
      resolve(data);
    }).catch(function (e) {
      reject(e);
    });
  });
}

exports.fetchJSON = fetchJSON;

function fetchArraybuffer(url) {
  return __awaiter(this, void 0, Promise, function () {
    var response, response_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          console.log('fectch ab', url);
          return [4
          /*yield*/
          , fetch(url)];

        case 1:
          response = _a.sent();
          return [4
          /*yield*/
          , status(response)];

        case 2:
          response_1 = _a.sent();
          return [2
          /*return*/
          , arrayBuffer(response_1)];
      }
    });
  });
}

exports.fetchArraybuffer = fetchArraybuffer;
},{}],"src/bufferreader.ts":[function(require,module,exports) {
"use strict"; // from: https://github.com/pravdomil/jasmid.ts

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BufferReader =
/** @class */
function () {
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
      } else {
        return result + value;
      }
    }
  };

  BufferReader.prototype.midiChunk = function () {
    var id = this.string(4);
    var length = this.uint32();
    var data = this.read(length);
    return {
      id: id,
      length: length,
      data: data
    };
  };

  return BufferReader;
}();

exports.BufferReader = BufferReader;
},{}],"src/midi_utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEQUENCE_NUMBER = 'sequence number';
exports.TEXT = 'text';
exports.COPYRIGHT_NOTICE = 'copyright notice';
exports.TRACK_NAME = 'track name';
exports.INSTRUMENT_NAME = 'instrument name';
exports.LYRICS = 'lyrics';
exports.MARKER = 'marker';
exports.CUE_POINT = 'cue point';
exports.CHANNEL_PREFIX = 'channel prefix';
exports.END_OF_TRACK = 'end of track';
exports.TEMPO = 'tempo';
exports.SMPTE_OFFSET = 'smpte offset';
exports.TIME_SIGNATURE = 'time signature';
exports.KEY_SIGNATURE = 'key signature';
exports.SEQUENCER_SPECIFIC = 'sequencer specific';
exports.SYSTEM_EXCLUSIVE = 'system exclusive';
exports.DIVIDED_SYSTEM_EXCLUSIVE = 'divided system exclusive';
exports.NOTE_ON = 'note on';
exports.NOTE_OFF = 'note off';
exports.NOTE_AFTERTOUCH = 'note aftertouch';
exports.CONTROLLER = 'controller';
exports.PROGRAM_CHANGE = 'program change';
exports.CHANNEL_AFTERTOUCH = 'channel aftertouch';
exports.PITCH_BEND = 'pitch bend';
var descriptions = {
  0xff: {
    0x00: 'sequence number',
    0x01: 'text',
    0x02: 'copyright notice',
    0x03: 'track name',
    0x04: 'instrument name',
    0x05: 'lyrics',
    0x06: 'marker',
    0x07: 'cue point',
    0x20: 'channel prefix',
    0x2f: 'end of track',
    0x51: 'tempo',
    0x54: 'smpte offset',
    0x58: 'time signature',
    0x59: 'key signature',
    0x7f: 'sequencer specific'
  },
  0xf0: 'system exclusive',
  0xf7: 'divided sysex',
  0x80: 'note on',
  0x90: 'note off',
  0xa0: 'note aftertouch',
  0xb0: 'controller',
  0xc0: 'program change',
  0xd0: 'channel aftertouch',
  0xe0: 'pitch bend'
};
exports.noteNames = {
  'sharp': ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  'flat': ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
  'enharmonic-sharp': ['B#', 'C#', 'C##', 'D#', 'D##', 'E#', 'F#', 'F##', 'G#', 'G##', 'A#', 'A##'],
  'enharmonic-flat': ['Dbb', 'Db', 'Ebb', 'Eb', 'Fb', 'Gbb', 'Gb', 'Abb', 'Ab', 'Bbb', 'Bb', 'Cb']
};

exports.getMidiEventDescription = function (type, subType) {
  if (typeof subType === 'undefined') {
    return descriptions[type];
  }

  return descriptions[type][subType] || 'undefined';
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
  if (mode === void 0) {
    mode = 'sharp';
  }

  var index = -1;
  var modes = Object.getOwnPropertyNames(exports.noteNames);

  for (var i = 0, maxi = modes.length; i < maxi; i++) {
    var names = modes[i]; //console.log(key);

    for (var j = 0, maxj = names.length; j < maxj; j++) {
      if (mode[j] === name) {
        index = i;
        break;
      }
    }
  }

  if (index === -1) {
    return -1;
  } //number = (index + 12) + (octave * 12) + 12; // → in Cubase central C = C3 instead of C4


  return index + 12 + octave * 12; // → midi standard + scientific naming, see: http://en.wikipedia.org/wiki/Middle_C and http://en.wikipedia.org/wiki/Scientific_pitch_notation
};
},{}],"src/parse_midi_binary.ts":[function(require,module,exports) {
"use strict"; // based on: https://github.com/pravdomil/jasmid.ts

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { BufferReader } from 'jasmid.ts';

var bufferreader_1 = require("./bufferreader");

var midi_utils_1 = require("./midi_utils");

var playbackSpeed = 1;

function parseMidiFile(buffer) {
  var reader = new bufferreader_1.BufferReader(buffer);
  var header = parseHeader(reader);
  var tracks = parseTracks(reader, header.ticksPerBeat);
  return {
    header: header,
    tracks: tracks
  };
}

exports.parseMidiFile = parseMidiFile;

function parseHeader(reader) {
  var headerChunk = reader.midiChunk();

  if (headerChunk.id !== "MThd" || headerChunk.length !== 6) {
    throw new Error('Bad .mid file, header not found');
  }

  var headerReader = new bufferreader_1.BufferReader(headerChunk.data);
  var formatType = headerReader.uint16();
  var trackCount = headerReader.uint16();
  var timeDivision = headerReader.uint16();

  if (timeDivision & 0x8000) {
    throw new Error('Expressing time division in SMTPE frames is not supported yet');
  }

  var ticksPerBeat = timeDivision;
  return {
    formatType: formatType,
    trackCount: trackCount,
    ticksPerBeat: ticksPerBeat
  };
}

function parseTracks(reader, ppq) {
  var tracks = [];

  while (!reader.eof()) {
    var trackChunk = reader.midiChunk();

    if (trackChunk.id !== "MTrk") {
      throw new Error("Unexpected chunk, expected MTrk, got " + trackChunk.id);
    }

    var trackTrack = new bufferreader_1.BufferReader(trackChunk.data);
    var track = [];
    var ticks = 0;
    var millis = 0;
    var millisPerTick = 0;
    var lastTypeByte = null;

    while (!trackTrack.eof()) {
      var data = parseEvent(trackTrack, lastTypeByte);
      var event = data.event,
          deltaTime = data.deltaTime,
          bpm = data.bpm;
      ticks += deltaTime; // console.log('TICKS', ticks);

      if (bpm) {
        millisPerTick = 1 / playbackSpeed * 60 / bpm / ppq * 1000; // console.log(bpm, ppq, millisPerTick);
      }

      lastTypeByte = event.type[0];
      millis = ticks * millisPerTick;
      track = __spread(track, [__assign(__assign({}, event), {
        ticks: ticks,
        millis: millis
      })]);
    }

    tracks = __spread(tracks, [track]);
  }

  return tracks;
}

function parseEvent(reader, lastTypeByte) {
  var deltaTime = reader.midiInt();
  var typeByte = reader.uint8(); // meta events: 0xff
  // system events: 0xf0, 0xf7
  // midi events: all other bytes

  if (typeByte === 0xff) {
    var subTypeByte = reader.uint8();
    var length = reader.midiInt();

    switch (subTypeByte) {
      // sequence number
      case 0x00:
        if (length !== 2) {
          throw new Error("Expected length for sequenceNumber event is 2, got " + length);
        }

        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.SEQUENCE_NUMBER,
            number: reader.uint16()
          },
          deltaTime: deltaTime
        };
      // text

      case 0x01:
        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.TEXT,
            text: reader.string(length)
          },
          deltaTime: deltaTime
        };
      // copyright

      case 0x02:
        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.COPYRIGHT_NOTICE,
            text: reader.string(length)
          },
          deltaTime: deltaTime
        };
      // track name

      case 0x03:
        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.TRACK_NAME,
            text: reader.string(length)
          },
          deltaTime: deltaTime
        };
      // instrument name

      case 0x04:
        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.INSTRUMENT_NAME,
            text: reader.string(length)
          },
          deltaTime: deltaTime
        };
      // lyrics

      case 0x05:
        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.LYRICS,
            text: reader.string(length)
          },
          deltaTime: deltaTime
        };
      // marker

      case 0x06:
        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.MARKER,
            text: reader.string(length)
          },
          deltaTime: deltaTime
        };
      // cue point

      case 0x07:
        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.CUE_POINT,
            text: reader.string(length)
          },
          deltaTime: deltaTime
        };
      // channel prefix

      case 0x20:
        if (length !== 1) {
          throw new Error("Expected length for midiChannelPrefix event is 1, got " + length);
        }

        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.CHANNEL_PREFIX,
            channel: reader.uint8()
          },
          deltaTime: deltaTime
        };
      // end of track

      case 0x2f:
        if (length !== 0) {
          throw new Error("Expected length for endOfTrack event is 0, got " + length);
        }

        return {
          event: {
            descr: midi_utils_1.END_OF_TRACK,
            type: [typeByte, subTypeByte]
          },
          deltaTime: deltaTime
        };
      // tempo

      case 0x51:
        if (length !== 3) {
          throw new Error("Expected length for setTempo event is 3, got " + length);
        }

        var microsecondsPerBeat = (reader.uint8() << 16) + (reader.uint8() << 8) + reader.uint8();
        var bpm = 60000000 / microsecondsPerBeat;
        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.TEMPO,
            bpm: bpm
          },
          bpm: bpm,
          deltaTime: deltaTime
        };
      // smpte offset

      case 0x54:
        if (length != 5) {
          throw new Error("Expected length for smpteOffset event is 5, got " + length);
        }

        var hourByte = reader.uint8();
        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.SMPTE_OFFSET,
            frameRate: getFrameRate(hourByte),
            hour: hourByte & 0x1f,
            min: reader.uint8(),
            sec: reader.uint8(),
            frame: reader.uint8(),
            subFrame: reader.uint8()
          },
          deltaTime: deltaTime
        };
      // time signature

      case 0x58:
        if (length != 4) {
          throw new Error("Expected length for timeSignature event is 4, got " + length);
        }

        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.TIME_SIGNATURE,
            numerator: reader.uint8(),
            denominator: Math.pow(2, reader.uint8()),
            metronome: reader.uint8(),
            thirtySeconds: reader.uint8()
          },
          deltaTime: deltaTime
        };
      // key signature

      case 0x59:
        if (length != 2) {
          throw new Error("Expected length for keySignature event is 2, got " + length);
        }

        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.KEY_SIGNATURE,
            key: reader.int8(),
            scale: reader.uint8()
          },
          deltaTime: deltaTime
        };
      // sequencer specific

      case 0x7f:
        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: midi_utils_1.SEQUENCER_SPECIFIC,
            data: reader.read(length)
          },
          deltaTime: deltaTime
        };
      // undefined

      default:
        return {
          event: {
            type: [typeByte, subTypeByte],
            descr: 'undefined',
            data: reader.read(length)
          },
          deltaTime: deltaTime
        };
    }
  } else if (typeByte === 0xf0) {
    // system exclusive
    var length = reader.midiInt();
    return {
      event: {
        type: [0xf0],
        descr: midi_utils_1.SYSTEM_EXCLUSIVE,
        data: reader.read(length)
      },
      deltaTime: deltaTime
    };
  } else if (typeByte === 0xf7) {
    // divided system exclusive
    var length = reader.midiInt();
    return {
      event: {
        type: [0xf0],
        descr: midi_utils_1.DIVIDED_SYSTEM_EXCLUSIVE,
        data: reader.read(length)
      },
      deltaTime: deltaTime
    };
  } else {
    /**
     * running status - reuse lastEventTypeByte as the event type
     * typeByte is actually the first parameter
     */
    var isRunningStatus = (typeByte & 128) === 0;
    var value = isRunningStatus ? typeByte : reader.uint8();
    typeByte = isRunningStatus ? lastTypeByte === null ? 0 : lastTypeByte : typeByte; // console.log(isRunningStatus, typeByte, value);

    var channel = typeByte & 0x0f;

    switch (typeByte) {
      // note on
      case 0x80:
        return {
          event: {
            type: [typeByte],
            descr: midi_utils_1.NOTE_ON,
            channel: channel,
            note: value,
            velocity: reader.uint8()
          },
          deltaTime: deltaTime
        };
      // note off

      case 0x90:
        var velocity = reader.uint8();
        return {
          event: {
            type: [velocity === 0 ? 0x90 : 0x80],
            descr: midi_utils_1.NOTE_OFF,
            channel: channel,
            note: value,
            velocity: velocity
          },
          deltaTime: deltaTime
        };
      // note aftertouch

      case 0xa0:
        return {
          event: {
            type: [0xa0],
            descr: midi_utils_1.NOTE_AFTERTOUCH,
            channel: channel,
            note: value,
            amount: reader.uint8()
          },
          deltaTime: deltaTime
        };
      // controller

      case 0xb0:
        return {
          event: {
            type: [0xb0],
            descr: midi_utils_1.CONTROLLER,
            channel: channel,
            controllerNumber: value,
            value: reader.uint8()
          },
          deltaTime: deltaTime
        };
      // program change

      case 0xc0:
        return {
          event: {
            type: [0xc0],
            descr: midi_utils_1.PROGRAM_CHANGE,
            channel: channel,
            program: value
          },
          deltaTime: deltaTime
        };
      // channel aftertouch

      case 0xd0:
        return {
          event: {
            type: [0xd0],
            descr: midi_utils_1.CHANNEL_AFTERTOUCH,
            channel: channel,
            amount: value
          },
          deltaTime: deltaTime
        };
      // pitch bend

      case 0xe0:
        return {
          event: {
            type: [0xe0],
            descr: midi_utils_1.PITCH_BEND,
            channel: channel,
            value: value + (reader.uint8() << 7)
          },
          deltaTime: deltaTime
        };
    }
  }

  throw new Error("Unrecognised MIDI event type byte: " + typeByte);
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
},{"./bufferreader":"src/bufferreader.ts","./midi_utils":"src/midi_utils.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var fetch_helpers_1 = require("./src/fetch_helpers");

var parse_midi_binary_1 = require("./src/parse_midi_binary");

var init = function init() {
  return __awaiter(void 0, void 0, void 0, function () {
    var ab, _a, header, tracks;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , fetch_helpers_1.fetchArraybuffer('./assets/minute_waltz.mid')];

        case 1:
          ab = _b.sent();
          _a = parse_midi_binary_1.parseMidiFile(ab), header = _a.header, tracks = _a.tracks;
          console.log(header);
          console.log(tracks);
          return [2
          /*return*/
          ];
      }
    });
  });
};

init();
},{"./src/fetch_helpers":"src/fetch_helpers.ts","./src/parse_midi_binary":"src/parse_midi_binary.ts"}]},{},["index.ts"], null)
//# sourceMappingURL=/webdaw-modules.77de5100.js.map
// based on: https://github.com/pravdomil/jasmid.ts

// import { BufferReader } from 'jasmid.ts';
import uniquid from "uniqid";
import { BufferReader } from "./bufferreader";
import { MIDIEvent } from "./midi_events";
import {
  SEQUENCE_NUMBER,
  TEXT,
  COPYRIGHT_NOTICE,
  TRACK_NAME,
  INSTRUMENT_NAME,
  LYRICS,
  MARKER,
  CUE_POINT,
  CHANNEL_PREFIX,
  END_OF_TRACK,
  TEMPO,
  SMPTE_OFFSET,
  TIME_SIGNATURE,
  KEY_SIGNATURE,
  SEQUENCER_SPECIFIC,
  SYSTEM_EXCLUSIVE,
  DIVIDED_SYSTEM_EXCLUSIVE,
  NOTE_ON,
  NOTE_OFF,
  NOTE_AFTERTOUCH,
  CONTROLLER,
  PROGRAM_CHANGE,
  CHANNEL_AFTERTOUCH,
  PITCH_BEND,
  sortMIDIEvents,
} from "./midi_utils";
import { calculateMillis } from "./calculateMillis";
import { Track } from "./types";
import { createTrack } from "./sugar_coating";

const playbackSpeed = 1;

export type ParsedData = {
  event: any;
  deltaTime: number;
  bpm?: number;
  numerator?: number;
  denominator?: number;
  trackName?: string;
};

export type ParsedMIDIFile = {
  // header: {
  //   formatType: number;
  //   trackCount: number;
  //   ticksPerBeat: number;
  // };
  ppq: number;
  initialTempo: number;
  initialNumerator: number;
  initialDenominator: number;
  tracks: Track[];
  events: MIDIEvent[];
  // tracks: MIDIEvent[][]
  // timeTrack: MIDIEvent[]
};

export function parseMidiFile(buffer: ArrayBufferLike): ParsedMIDIFile {
  const reader = new BufferReader(buffer);

  const header = parseHeader(reader);
  // const { timeTrack, tracks } = parseTracks(reader, header.ticksPerBeat)
  const { tracks, events, initialTempo, initialNumerator, initialDenominator } = parseTracks(
    reader,
    header.ticksPerBeat
  );

  // return { header, timeTrack, tracks }
  return {
    ppq: header.ticksPerBeat,
    tracks,
    initialTempo,
    initialNumerator,
    initialDenominator,
    events: calculateMillis(events, {
      ppq: header.ticksPerBeat,
      bpm: initialTempo,
    }),
  };
}

function parseHeader(reader: BufferReader) {
  const headerChunk = reader.midiChunk();
  if (headerChunk.id !== "MThd" || headerChunk.length !== 6) {
    throw new Error("Bad .mid file, header not found");
  }

  const headerReader = new BufferReader(headerChunk.data);
  const formatType = headerReader.uint16();
  const trackCount = headerReader.uint16();
  const timeDivision = headerReader.uint16();
  if (timeDivision & 0x8000) {
    throw new Error("Expressing time division in SMTPE frames is not supported yet");
  }
  const ticksPerBeat = timeDivision;

  return { formatType, trackCount, ticksPerBeat };
}

function parseTracks(
  reader: BufferReader,
  ppq: number
): {
  tracks: Track[];
  events: MIDIEvent[];
  initialTempo: number;
  initialNumerator: number;
  initialDenominator: number;
} {
  let initialTempo = -1;
  let initialNumerator = -1;
  let initialDenominator = -1;
  const tracks: Track[] = [];
  const events: MIDIEvent[] = [];
  while (!reader.eof()) {
    const trackChunk = reader.midiChunk();

    if (trackChunk.id !== "MTrk") {
      throw new Error(`Unexpected chunk, expected MTrk, got ${trackChunk.id}`);
    }
    const trackId = `T-${uniquid()}`;
    const track = createTrack(trackId);
    const trackTrack = new BufferReader(trackChunk.data);
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
      events.push({
        ...event,
        trackId,
        ticks,
      });
    }
    tracks.push(track);
  }

  return {
    events: sortMIDIEvents(events),
    tracks,
    initialTempo,
    initialNumerator,
    initialDenominator,
  };
}

function parseEvent(reader: BufferReader, lastTypeByte: number | null): ParsedData {
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
            descr: SEQUENCE_NUMBER,
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
            descr: TEXT,
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
            descr: COPYRIGHT_NOTICE,
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
            descr: TRACK_NAME,
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
            descr: INSTRUMENT_NAME,
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
            descr: LYRICS,
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
            descr: MARKER,
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
            descr: CUE_POINT,
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
            descr: CHANNEL_PREFIX,
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
            descr: END_OF_TRACK,
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
            descr: TEMPO,
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
            descr: SMPTE_OFFSET,
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
            descr: TIME_SIGNATURE,
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
            descr: KEY_SIGNATURE,
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
            descr: SEQUENCER_SPECIFIC,
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
  } else if (typeByte === 0xf0) {
    // system exclusive
    const length = reader.midiInt();
    return {
      event: {
        type: 0xf0,
        descr: SYSTEM_EXCLUSIVE,
        data: reader.read(length),
      },
      deltaTime,
    };
  } else if (typeByte === 0xf7) {
    // divided system exclusive
    const length = reader.midiInt();
    return {
      event: {
        type: 0xf0,
        descr: DIVIDED_SYSTEM_EXCLUSIVE,
        data: reader.read(length),
      },
      deltaTime,
    };
  } else {
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
            descr: NOTE_OFF,
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
            descr: velocity === 0 ? NOTE_OFF : NOTE_ON,
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
            descr: NOTE_AFTERTOUCH,
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
            descr: CONTROLLER,
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
            descr: PROGRAM_CHANGE,
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
            descr: CHANNEL_AFTERTOUCH,
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
            descr: PITCH_BEND,
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

function getFrameRate(hourByte: number) {
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

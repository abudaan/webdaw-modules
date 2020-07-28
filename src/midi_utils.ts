import { MIDIEvent, TempoEvent, TimeSignatureEvent } from "./midi_events";

export const SEQUENCE_NUMBER = "sequence number";
export const TEXT = "text";
export const COPYRIGHT_NOTICE = "copyright notice";
export const TRACK_NAME = "track name";
export const INSTRUMENT_NAME = "instrument name";
export const LYRICS = "lyrics";
export const MARKER = "marker";
export const CUE_POINT = "cue point";
export const CHANNEL_PREFIX = "channel prefix";
export const END_OF_TRACK = "end of track";
export const TEMPO = "tempo";
export const SMPTE_OFFSET = "smpte offset";
export const TIME_SIGNATURE = "time signature";
export const KEY_SIGNATURE = "key signature";
export const SEQUENCER_SPECIFIC = "sequencer specific";
export const SYSTEM_EXCLUSIVE = "system exclusive";
export const DIVIDED_SYSTEM_EXCLUSIVE = "divided system exclusive";
export const NOTE_ON = "note on";
export const NOTE_OFF = "note off";
export const NOTE_AFTERTOUCH = "note aftertouch";
export const CONTROLLER = "controller";
export const PROGRAM_CHANGE = "program change";
export const CHANNEL_AFTERTOUCH = "channel aftertouch";
export const PITCH_BEND = "pitch bend";

const descriptions: { [index: number]: { [index: number]: string } | string } = {
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

export const noteNames = {
  sharp: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  flat: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
  "enharmonic-sharp": ["B#", "C#", "C##", "D#", "D##", "E#", "F#", "F##", "G#", "G##", "A#", "A##"],
  "enharmonic-flat": ["Dbb", "Db", "Ebb", "Eb", "Fb", "Gbb", "Gb", "Abb", "Ab", "Bbb", "Bb", "Cb"],
};

export const getMidiEventDescription = (type: number, subType?: number): string => {
  if (typeof subType === "undefined") {
    return descriptions[type] as string;
  }
  return descriptions[type][subType] || "undefined";
};

export const getMidiMessageEvent = (event: MIDIEvent): number[] => {
  switch (event.descr) {
    case NOTE_ON:
      return [0x90 + event.channel, event.noteNumber, event.velocity];
    case NOTE_OFF:
      return [0x80 + event.channel, event.noteNumber, event.velocity];
  }
  return [0];
};

export const getNoteNumber = (name: string, octave: number, mode: string = "sharp"): number => {
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
  const modes = Object.values(noteNames);
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

export const sortMIDIEvents = (events: MIDIEvent[]): MIDIEvent[] =>
  events.sort((a: MIDIEvent, b: MIDIEvent) => {
    if (a.ticks < b.ticks) {
      return -1;
    } else if (a.ticks > b.ticks) {
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

export const removeDoubleEvents = (events: MIDIEvent[]): MIDIEvent[] => {
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

export type NoteOnEvent = {
  // type: [0x80],
  bytes: number[],
  descr: 'note on',
  ticks: number,
  channel: number,
  millis: number,
  noteNumber: number,
  velocity: number,
}

export type NoteOffEvent = {
  // type: [0x90],
  bytes: number[],
  descr: 'note off',
  ticks: number,
  channel: number,
  millis: number,
  noteNumber: number,
  velocity: 0,
}

export type AftertouchEvent = {
  // type: [0xa0],
  bytes: number[],
  descr: 'note aftertouch',
  ticks: number,
  channel: number,
  millis: number,
  noteNumber: number,
  amount: number,
}

export type ControllerEvent = {
  // type: [0xb0],
  bytes: number[],
  descr: 'controller',
  ticks: number,
  channel: number,
  millis: number,
  value: number,
  controllerNumber: number
}

export type ProgramChangeEvent = {
  // type: [0xc0],
  bytes: number[],
  descr: 'program change',
  ticks: number,
  channel: number,
  millis: number,
  programNumber: number
}

export type ChannelAftertouchEvent = {
  // type: [0xd0],
  bytes: number[],
  descr: 'channel aftertouch',
  ticks: number,
  channel: number,
  millis: number,
  noteNumber: number,
  amount: number,
}

export type PitchBendEvent = {
  // type: [0xe0],
  bytes: number[],
  descr: 'pitch bend',
  ticks: number,
  channel: number,
  millis: number,
  noteNumber: number,
  value: number,
}


// META

export type SequenceNumberEvent = {
  // type: [0xff, 0x00],
  bytes: number[],
  descr: 'sequence number',
  number: number,
  ticks: 0,
  millis: 0,
}

export type TextEvent = {
  // type: [0xff, 0x01],
  bytes: number[],
  descr: 'text',
  text: string,
  ticks: number,
  millis: number,
}

export type CopyrightEvent = {
  // type: [0xff, 0x02],
  bytes: number[],
  descr: 'copyright notice'
  text: string,
  ticks: 0,
  millis: 0,
}

export type TrackNameEvent = {
  // type: [0xff, 0x03],
  bytes: number[],
  descr: 'track name',
  text: string,
  ticks: 0,
  millis: 0,
}

export type InstrumentNameEvent = {
  // type: [0xff, 0x04],
  bytes: number[],
  descr: 'instrument name',
  text: string,
  ticks: number,
  millis: number,
}

export type LyricsEvent = {
  // type: [0xff, 0x05],
  bytes: number[],
  descr: 'lyrics',
  text: string,
  ticks: number,
  millis: number,
}

export type MarkerEvent = {
  // type: [0xff, 0x06],
  bytes: number[],
  descr: 'marker',
  text: string,
  ticks: number,
  millis: number,
}

export type CuePointEvent = {
  // type: [0xff, 0x07],
  bytes: number[],
  descr: 'cue point',
  text: string,
  ticks: number,
  millis: number,
}

export type ChannelPrefixEvent = {
  // type: [0xff, 0x20],
  bytes: number[],
  descr: 'channel prefix',
  channel: number,
  ticks: number,
  millis: number,
}

export type EndOfTrackEvent = {
  // type: [0xff, 0x2f],
  bytes: number[],
  descr: 'end of track',
  channel: number,
  ticks: number,
  millis: number,
}

export type TempoEvent = {
  // type: [0xff, 0x51],
  bytes: number[],
  descr: 'tempo',
  ticks: number,
  millis: number,
  bpm: number,
}

export type SMPTEOffsetEvent = {
  // type: [0xff, 0x54],
  bytes: number[],
  descr: 'smpte offset',
  ticks: number,
  millis: number,
  frameRate: number,
  hour: number,
  min: number,
  sec: number,
  frame: number,
  subFrame: number,
}

export type TimeSignatureEvent = {
  // type: [0xff, 0x58],
  bytes: number[],
  descr: 'time signature',
  ticks: number,
  millis: number,
  numerator: number,
  denominator: number,
  metronome: number,
  thirtySeconds: number,
}

export type KeySignatureEvent = {
  // type: [0xff, 0x59],
  bytes: number[],
  descr: 'key signature',
  ticks: number,
  millis: number,
  key: number,
  scale: number,
}

export type SequenceSpecificEvent = {
  // type: [0xff, 0x7f],
  bytes: number[],
  descr: 'sequencer specific',
  ticks: number,
  millis: number,
  key: number,
  scale: number,
}

export type SysexEvent = {
  // type: [0xf0],
  bytes: number[],
  descr: 'system exclusive',
  ticks: number,
  millis: number,
  data: number,
}

export type DividedSysexEvent = {
  // type: [0xf7],
  bytes: number[],
  descr: 'divided system exclusive',
  ticks: number,
  millis: number,
  data: number,
}


export type MidiEvent =
  // midi
  | NoteOnEvent
  | NoteOffEvent
  | AftertouchEvent
  | ControllerEvent
  | ProgramChangeEvent
  | ChannelAftertouchEvent
  | PitchBendEvent
  // meta
  | SequenceNumberEvent
  | TextEvent
  | CopyrightEvent
  | TrackNameEvent
  | InstrumentNameEvent
  | LyricsEvent
  | MarkerEvent
  | CuePointEvent
  | ChannelPrefixEvent
  | EndOfTrackEvent
  | TempoEvent
  | SMPTEOffsetEvent
  | TimeSignatureEvent
  | KeySignatureEvent
  | SequenceSpecificEvent
  // sysex
  | SysexEvent
  | DividedSysexEvent
  ;





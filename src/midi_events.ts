export interface BaseEvent {
  ticks: number
  descr: string
  trackId: string
  part: string
}

export interface NoteOnEvent extends BaseEvent {
  // type: [0x80],
  type: number[],
  descr: 'note on',
  ticks: number,
  channel: number,
  millis: number,
  noteNumber: number,
  velocity: number,
}

export type NoteOffEvent = {
  // type: [0x90],
  type: number[],
  descr: 'note off',
  ticks: number,
  trackId: string
  channel: number,
  millis: number,
  noteNumber: number,
  velocity: 0,
}

export type AftertouchEvent = {
  // type: [0xa0],
  type: number[],
  descr: 'note aftertouch',
  ticks: number,
  trackId: string
  channel: number,
  millis: number,
  noteNumber: number,
  amount: number,
}

export type ControllerEvent = {
  // type: [0xb0],
  type: number[],
  descr: 'controller',
  ticks: number,
  trackId: string
  channel: number,
  millis: number,
  value: number,
  controllerNumber: number
}

export type ProgramChangeEvent = {
  // type: [0xc0],
  type: number[],
  descr: 'program change',
  ticks: number,
  trackId: string
  channel: number,
  millis: number,
  programNumber: number
}

export type ChannelAftertouchEvent = {
  // type: [0xd0],
  type: number[],
  descr: 'channel aftertouch',
  ticks: number,
  trackId: string
  channel: number,
  millis: number,
  noteNumber: number,
  amount: number,
}

export type PitchBendEvent = {
  // type: [0xe0],
  type: number[],
  descr: 'pitch bend',
  ticks: number,
  trackId: string
  channel: number,
  millis: number,
  noteNumber: number,
  value: number,
}


// META

export type SequenceNumberEvent = {
  // type: [0xff, 0x00],
  type: number[],
  descr: 'sequence number',
  number: number,
  trackId: string
  ticks: 0,
  millis: 0,
}

export type TextEvent = {
  // type: [0xff, 0x01],
  type: number[],
  descr: 'text',
  text: string,
  ticks: number,
  trackId: string
  millis: number,
}

export type CopyrightEvent = {
  // type: [0xff, 0x02],
  type: number[],
  descr: 'copyright notice'
  text: string,
  ticks: 0,
  trackId: string
  millis: 0,
}

export type TrackNameEvent = {
  // type: [0xff, 0x03],
  type: number[],
  descr: 'track name',
  text: string,
  ticks: 0,
  trackId: string
  millis: 0,
}

export type InstrumentNameEvent = {
  // type: [0xff, 0x04],
  type: number[],
  descr: 'instrument name',
  text: string,
  ticks: number,
  trackId: string
  millis: number,
}

export type LyricsEvent = {
  // type: [0xff, 0x05],
  type: number[],
  descr: 'lyrics',
  text: string,
  ticks: number,
  trackId: string
  millis: number,
}

export type MarkerEvent = {
  // type: [0xff, 0x06],
  type: number[],
  descr: 'marker',
  text: string,
  ticks: number,
  trackId: string
  millis: number,
}

export type CuePointEvent = {
  // type: [0xff, 0x07],
  type: number[],
  descr: 'cue point',
  text: string,
  ticks: number,
  trackId: string
  millis: number,
}

export type ChannelPrefixEvent = {
  // type: [0xff, 0x20],
  type: number[],
  descr: 'channel prefix',
  channel: number,
  ticks: number,
  trackId: string
  millis: number,
}

export type EndOfTrackEvent = {
  // type: [0xff, 0x2f],
  type: number[],
  descr: 'end of track',
  channel: number,
  trackId: string
  ticks: number,
  millis: number,
}

export type TempoEvent = {
  // type: [0xff, 0x51],
  type: number[],
  descr: 'tempo',
  ticks: number,
  trackId: string
  millis: number,
  bpm: number,
  millisPerTick: number,
}

export type SMPTEOffsetEvent = {
  // type: [0xff, 0x54],
  type: number[],
  descr: 'smpte offset',
  ticks: number,
  trackId: string
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
  type: number[],
  descr: 'time signature',
  ticks: number,
  trackId: string
  millis: number,
  numerator: number,
  denominator: number,
  metronome: number,
  thirtySeconds: number,
}

export type KeySignatureEvent = {
  // type: [0xff, 0x59],
  type: number[],
  descr: 'key signature',
  ticks: number,
  trackId: string
  millis: number,
  key: number,
  scale: number,
}

export type SequenceSpecificEvent = {
  // type: [0xff, 0x7f],
  type: number[],
  descr: 'sequencer specific',
  ticks: number,
  trackId: string
  millis: number,
  key: number,
  scale: number,
}

export type SysexEvent = {
  // type: [0xf0],
  type: number[],
  descr: 'system exclusive',
  ticks: number,
  trackId: string
  millis: number,
  data: number,
}

export type DividedSysexEvent = {
  // type: [0xf7],
  type: number[],
  descr: 'divided system exclusive',
  ticks: number,
  trackId: string
  millis: number,
  data: number,
}


export type MIDIEvent =
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





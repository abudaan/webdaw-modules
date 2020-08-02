export interface BaseEvent {
  id?: string;
  ticks: number;
  descr: string;
  type: number;
  channel?: number;
  subType?: number;
  millis?: number;
  trackId?: string;
  part?: string;
  bar?: number;
}

export interface NoteOnEvent extends BaseEvent {
  // type: 0x90;
  // type: number;
  descr: "note on";
  channel: number;
  noteNumber: number;
  velocity: number;
}

export interface NoteOffEvent extends BaseEvent {
  // type: 0x80;
  // type: number;
  // descr: "note off";
  // descr: string;
  // ticks: number;
  // trackId: string;
  channel: number;
  // millis?: number;
  noteNumber: number;
  // velocity: 0;
  velocity: number;
}

export interface AftertouchEvent extends BaseEvent {
  type: 0xa0;
  descr: "note aftertouch";
  ticks: number;
  trackId: string;
  channel: number;
  millis: number;
  noteNumber: number;
  amount: number;
}

export interface ControllerEvent extends BaseEvent {
  type: 0xb0;
  descr: "controller";
  ticks: number;
  trackId: string;
  channel: number;
  millis: number;
  value: number;
  controllerNumber: number;
}

export interface ProgramChangeEvent extends BaseEvent {
  type: 0xc0;
  descr: "program change";
  ticks: number;
  trackId: string;
  channel: number;
  millis: number;
  programNumber: number;
}

export interface ChannelAftertouchEvent extends BaseEvent {
  type: 0xd0;
  descr: "channel aftertouch";
  ticks: number;
  trackId: string;
  channel: number;
  millis: number;
  noteNumber: number;
  amount: number;
}

export interface PitchBendEvent extends BaseEvent {
  type: 0xe0;
  descr: "pitch bend";
  ticks: number;
  trackId: string;
  channel: number;
  millis: number;
  noteNumber: number;
  value: number;
}

// META

export interface SequenceNumberEvent extends BaseEvent {
  type: 0xff;
  subType: 0x00;
  descr: "sequence number";
  number: number;
  trackId: string;
  ticks: 0;
  millis: 0;
}

export interface TextEvent extends BaseEvent {
  type: 0xff;
  subType: 0x01;
  descr: "text";
  text: string;
  ticks: number;
  trackId: string;
  millis: number;
}

export interface CopyrightEvent extends BaseEvent {
  type: 0xff;
  subType: 0x02;
  descr: "copyright notice";
  text: string;
  ticks: 0;
  trackId: string;
  millis: 0;
}

export interface TrackNameEvent extends BaseEvent {
  type: 0xff;
  subType: 0x03;
  descr: "track name";
  text: string;
  ticks: 0;
  trackId: string;
  millis: 0;
}

export interface InstrumentNameEvent extends BaseEvent {
  type: 0xff;
  subType: 0x04;
  descr: "instrument name";
  text: string;
  ticks: number;
  trackId: string;
  millis: number;
}

export interface LyricsEvent extends BaseEvent {
  type: 0xff;
  subType: 0x05;
  descr: "lyrics";
  text: string;
  ticks: number;
  trackId: string;
  millis: number;
}

export interface MarkerEvent extends BaseEvent {
  type: 0xff;
  subType: 0x06;
  descr: "marker";
  text: string;
  ticks: number;
  trackId: string;
  millis: number;
}

export interface CuePointEvent extends BaseEvent {
  type: 0xff;
  subType: 0x07;
  descr: "cue point";
  text: string;
  ticks: number;
  trackId: string;
  millis: number;
}

export interface ChannelPrefixEvent extends BaseEvent {
  type: 0xff;
  subType: 0x20;
  descr: "channel prefix";
  channel: number;
  ticks: number;
  trackId: string;
  millis: number;
}

export interface EndOfTrackEvent extends BaseEvent {
  type: 0xff;
  subType: 0x2f;
  descr: "end of track";
  channel: number;
  trackId: string;
  ticks: number;
  millis: number;
}

export interface TempoEvent extends BaseEvent {
  type: 0xff;
  subType: 0x51;
  descr: "tempo";
  bpm: number;
  millisPerTick: number;
}

export interface SMPTEOffsetEvent extends BaseEvent {
  type: 0xff;
  subType: 0x54;
  descr: "smpte offset";
  ticks: number;
  trackId: string;
  millis: number;
  frameRate: number;
  hour: number;
  min: number;
  sec: number;
  frame: number;
  subFrame: number;
}

export interface TimeSignatureEvent extends BaseEvent {
  type: 0xff;
  subType: 0x58;
  descr: "time signature";
  numerator: number;
  denominator: number;
  metronome: number;
  thirtySeconds: number;
}

export interface KeySignatureEvent extends BaseEvent {
  type: 0xff;
  subType: 0x59;
  descr: "key signature";
  ticks: number;
  trackId: string;
  millis: number;
  key: number;
  scale: number;
}

export interface SequenceSpecificEvent extends BaseEvent {
  type: 0xff;
  subType: 0x7f;
  descr: "sequencer specific";
  ticks: number;
  trackId: string;
  millis: number;
  key: number;
  scale: number;
}

export interface SysexEvent extends BaseEvent {
  type: 0xf0;
  descr: "system exclusive";
  ticks: number;
  trackId: string;
  millis: number;
  data: number;
}

export interface DividedSysexEvent extends BaseEvent {
  type: 0xf7;
  descr: "divided system exclusive";
  ticks: number;
  trackId: string;
  millis: number;
  data: number;
}

// like in Java
export type ShortMessage =
  // midi
  | NoteOnEvent
  | NoteOffEvent
  | AftertouchEvent
  | ControllerEvent
  | ProgramChangeEvent
  | ChannelAftertouchEvent
  | PitchBendEvent;

export type MetaMessage =
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
  | SequenceSpecificEvent;

export type SystemMessage =
  // sysex
  SysexEvent | DividedSysexEvent;

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
  | DividedSysexEvent;

export type NoteEvent = NoteOnEvent | NoteOffEvent;

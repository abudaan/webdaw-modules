/// <reference types="webmidi" />

export interface Playable {
  events: MIDIEvent[]
  notes: MIDINote[]
  ppq: number
  bpm: number
}

export interface Song {
  ppq: number
  bpm: number
  events: MIDIEvent[]
  // useMetronome: boolean
  loops: {
    start: number
    end: number
    loop: boolean
  }[]
}

export interface Track extends Playable {
  output?: string
  instrument?: string
  processor?: (event: MIDIEvent | WebMidi.MIDIMessageEvent) => void // a function that processes an event into sound or something else
}

export interface MIDIEvent {
  data1: number
  data2: number
  command: number
  channel: number
  ticks: number
  time: number // the time in seconds that this event is scheduled
}

export interface NoteEvent extends MIDIEvent {
  frequency: number
  noteNumber: number
  noteName: number
  octave: number
}

export interface NoteOnEvent extends NoteEvent {
}

export interface NoteOffEvent extends NoteEvent {
}

export type MIDINote = {
  noteOn: NoteOnEvent
  noteOff?: NoteOffEvent
  endless: boolean // necessary for recording MIDI
}

export type AudioEvent = {
  sample: string
  data: ArrayBuffer
  start: number
  end: number
  volume: number
}

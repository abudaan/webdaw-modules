/// <reference types="webmidi" />

import { MIDIEvent } from "./midi_events";

export interface Song {
  ppq: number
  timeTrack: MIDIEvent[]
  tracks: Track[]
  useMetronome?: boolean
  loop?: boolean
  loops?: {
    start: number
    end: number
  }[],
}

export interface Track {
  input?: string // id of MIDI input
  output?: string // id of MIDI output
  instrument?: string
  processor?: (event: MIDIEvent | WebMidi.MIDIMessageEvent) => void // a function that processes an event into sound or something else
  events: MIDIEvent[]
}

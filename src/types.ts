/// <reference types="webmidi" />

import { MIDIEvent } from "./midi_events";

export interface Song {
  ppq: number
  latency: number
  bufferTime: number
  initialTempo: number
  tracks: Track[]
  tracksById: { [id: string]: Track }
  events: MIDIEvent[]
  // timeTrack: MIDIEvent[]
  // tracks: Track[]
  useMetronome?: boolean
  loop?: boolean
  loops?: {
    start: number
    end: number
  }[],
}

export interface Track {
  id: string
  latency: number
  name?: string
  inputs: string[] // ids of MIDI inputs
  outputs: string[] // ids of MIDI outputs
  instrument?: string
  processor?: (event: MIDIEvent | WebMidi.MIDIMessageEvent) => void // a function that processes an event into sound or something else
}

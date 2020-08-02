/// <reference types="webmidi" />

import { MIDIEvent } from "./MIDIEvent";

export interface Track {
  id: string;
  latency: number;
  name?: string;
  volume?: number;
  inputs: string[]; // ids of MIDI inputs
  outputs: string[]; // ids of MIDI outputs
  instrument?: string;
  processor?: (event: MIDIEvent | WebMidi.MIDIMessageEvent) => void; // a function that processes an event into sound or something else
}
export const createTrack = (id: string): Track => {
  return {
    id,
    latency: 0,
    inputs: [],
    outputs: [],
  };
};

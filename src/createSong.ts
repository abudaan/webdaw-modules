import { Track } from "./createTrack";
import { MIDIEvent } from "./MIDIEvent";
import { MIDINote } from "./createNotes";

export interface Song {
  name?: string;
  ppq: number;
  latency: number;
  bufferTime: number;
  initialTempo: number;
  tracks: Track[];
  tracksById: { [id: string]: Track };
  events: MIDIEvent[];
  notes: MIDINote[];
  durationTicks?: number;
  durationMillis?: number;
  numBars?: number;
  initialNumerator?: number;
  initialDenominator?: number;
  repeats?: number[][];
  scheduler: {
    timestamp: number;
    index: number;
    scheduled: MIDIEvent[];
  };
  positionMillis: number;
  // useMetronome?: boolean;
  // loops?: {
  //   start: number; // in milliseconds
  //   end: number;
  // }[];
}

export const createSong = (name?: string): Song => ({
  name,
  ppq: 960,
  latency: 17, // value in milliseconds -> the length of a single frame @ 60Hz refresh rate
  bufferTime: 100, // value in milliseconds
  tracks: [],
  tracksById: {},
  events: [],
  notes: [],
  initialTempo: 120,
  initialNumerator: 4,
  initialDenominator: 4,
  scheduler: {
    timestamp: 0,
    index: 0,
    scheduled: [],
  },
  positionMillis: 0,
});

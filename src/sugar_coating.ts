import { fetchArraybuffer } from "./fetch_helpers";
import { parseMidiFile } from "./parse_midi_binary";
import { Song, Track } from "./types";
import { createNotes } from "./create_notes";

export const createSongFromMIDIFile = async (arg: string | ArrayBuffer): Promise<Song> => {
  let ab: ArrayBuffer;
  if (typeof arg === "string") {
    ab = await fetchArraybuffer(arg);
  } else {
    ab = arg;
  }
  // const { header, timeTrack, tracks } = parseMidiFile(ab);
  const { ppq, initialTempo, initialNumerator, initialDenominator, events, tracks } = parseMidiFile(
    ab
  );

  const song: Song = {
    ppq,
    latency: 17, // value in milliseconds -> the length of a single frame @ 60Hz refresh rate
    bufferTime: 100, // value in milliseconds
    tracks,
    tracksById: tracks.reduce((acc: { [id: string]: Track }, value) => {
      acc[value.id] = value;
      return acc;
    }, {}),
    events,
    notes: createNotes(events),
    initialTempo,
    numerator: initialNumerator,
    denominator: initialDenominator,
    // timeTrack,
    // tracks: tracks.map(track => ({ events: [...track] })),
  };
  return song;
};

export const setTrackOutput = ({ track, output }: { track: Track; output: string }) => {
  track.outputs.push(output);
};

export const createTrack = (id: string): Track => {
  return {
    id,
    latency: 0,
    inputs: [],
    outputs: [],
  };
};

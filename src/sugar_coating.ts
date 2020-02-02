import { fetchArraybuffer } from './fetch_helpers';
import { parseMidiFile } from './parse_midi_binary';
import { Song, Track } from './types';

export const createSongFromMIDIFile = async (url: string): Promise<Song> => {
  const ab = await fetchArraybuffer(url);
  // const { header, timeTrack, tracks } = parseMidiFile(ab);
  const { header, initialTempo, events, tracks } = parseMidiFile(ab);
  const song: Song = {
    ppq: header.ticksPerBeat,
    tracks,
    tracksById: tracks.reduce((acc: { [id: string]: Track }, value) => {
      acc[value.id] = value;
      return acc;
    }, {}),
    events,
    initialTempo,
    // timeTrack,
    // tracks: tracks.map(track => ({ events: [...track] })),
  }
  return song;
}

export const setTrackOutput = (track: Track, output: WebMidi.MIDIOutput) => {
  track.outputs.push(output);
}

export const createTrack = (id: string): Track => {
  return {
    id,
    latency: 0,
    inputs: [],
    outputs: [],
  }
} 
import { fetchArraybuffer } from './src/fetch_helpers';
import { parseMidiFile } from './src/parse_midi_binary';
import { Song } from './src/types';

export const createSongFromMIDIFile = async (url: string): Promise<Song> => {
  const ab = await fetchArraybuffer(url);
  // const { header, timeTrack, tracks } = parseMidiFile(ab);
  const { header, events } = parseMidiFile(ab);
  const song: Song = {
    ppq: header.ticksPerBeat,
    events,
    // timeTrack,
    // tracks: tracks.map(track => ({ events: [...track] })),
  }
  return song;
}
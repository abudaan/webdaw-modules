import { fetchArraybuffer } from "../fetch_helpers";
import { parseMidiFile } from "../parse_midi_binary";
import { Song } from "../types";

export const createSongFromMIDIFile = async (arg: string | ArrayBuffer): Promise<Song> => {
  let ab: ArrayBuffer;
  if (typeof arg === "string") {
    ab = await fetchArraybuffer(arg);
  } else {
    ab = arg;
  }
  // const { header, timeTrack, tracks } = parseMidiFile(ab);
  return parseMidiFile(ab);
};

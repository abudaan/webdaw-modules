import { fetchArraybuffer } from "./fetch_helpers";
import { parseMIDIFile } from "./parseMIDIFile";
import { Song } from "./types/Song";

export const createSongFromMIDIFile = async (arg: string | ArrayBuffer): Promise<Song> => {
  let ab: ArrayBuffer;
  if (typeof arg === "string") {
    ab = await fetchArraybuffer(arg);
  } else {
    ab = arg;
  }
  // const { header, timeTrack, tracks } = parseMidiFile(ab);
  return parseMIDIFile(ab);
};

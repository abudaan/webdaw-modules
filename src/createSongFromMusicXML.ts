import { fetchXML } from "./util/fetch";
import { Song } from "./createSong";
import { parseMusicXML } from "./musicxml/parser";
import { parsedMusicXMLToSong } from "./musicxml/parsedMusicXMLToSong";

export const createSongFromMusicXML = async (
  arg: XMLDocument | string,
  ppq: number = 960
): Promise<Song> => {
  let xmlDoc: XMLDocument;
  if (typeof arg === "string") {
    xmlDoc = await fetchXML(arg);
  } else {
    xmlDoc = arg;
  }

  const song = parsedMusicXMLToSong(parseMusicXML(xmlDoc));

  if (song === null) {
    throw new Error("MusicXML document not supported");
  }
  return song;
};

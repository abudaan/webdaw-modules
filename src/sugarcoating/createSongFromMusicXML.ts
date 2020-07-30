import { fetchXML } from "../fetch_helpers";
import { parseMusicXML } from "../musicxml/mxml_parser";
import { Song } from "../types";

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

  const song = parseMusicXML(xmlDoc);
  if (song === null) {
    throw new Error("MusicXML document not supported");
  }
  return song;
};

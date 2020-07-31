import { Song } from "../types/Song";
import { ParsedMusicXML } from "./parser";
export declare const parsedMusicXMLToSong: (data: ParsedMusicXML) => Song | null;

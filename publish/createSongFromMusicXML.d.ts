import { Song } from "./types/Song";
export declare const createSongFromMusicXML: (arg: XMLDocument | string, ppq?: number) => Promise<Song>;

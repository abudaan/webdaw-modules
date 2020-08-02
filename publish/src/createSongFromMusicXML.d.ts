import { Song } from "./createSong";
export declare const createSongFromMusicXML: (arg: XMLDocument | string, ppq?: number) => Promise<Song>;

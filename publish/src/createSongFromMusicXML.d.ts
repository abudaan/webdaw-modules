import { Song } from "./createSong";
export declare const createSongFromMusicXML: (arg: string | XMLDocument, ppq?: number) => Promise<Song>;

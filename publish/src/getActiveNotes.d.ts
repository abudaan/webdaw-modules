import { Song } from "./createSong";
import { MIDINote } from "./createNotes";
declare type Args = {
    song: Song;
    index: number;
    millis: number;
    activeNotes: MIDINote[];
};
export declare const getActiveNotes: ({ song, index, millis, activeNotes }: Args) => {
    index: number;
    activeNotes: MIDINote[];
    passiveNotes: MIDINote[];
};
export {};

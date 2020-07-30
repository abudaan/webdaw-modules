import { Song } from "./types/Song";
import { MIDINote } from "./types/MIDINote";
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

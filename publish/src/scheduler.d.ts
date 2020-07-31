/// <reference types="webmidi" />
import { Song } from "./types/Song";
import { MIDIEvent } from "./types/MIDIEvent";
export declare const getCurrentEventIndex: (song: Song, millis: number, startIndex?: number) => number;
declare type Args = {
    song: Song;
    millis: number;
    index: number;
    outputs?: WebMidi.MIDIOutputMap;
};
export declare const schedule: ({ song, index, millis, outputs, }: Args) => {
    millis: number;
    index: number;
    scheduled: MIDIEvent[];
};
export {};

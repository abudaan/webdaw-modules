/// <reference types="webmidi" />
import { Song } from "./createSong";
import { MIDIEvent } from "./MIDIEvent";
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

/// <reference types="webmidi" />
import { Song } from "./types/Song";
export declare const unschedule: (song: Song, outputs?: WebMidi.MIDIOutputMap | undefined) => void;

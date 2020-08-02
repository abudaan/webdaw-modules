/// <reference types="webmidi" />
import { Song } from "./createSong";
export declare const unschedule: (song: Song, outputs?: WebMidi.MIDIOutputMap | undefined) => void;

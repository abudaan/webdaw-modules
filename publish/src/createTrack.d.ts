/// <reference types="webmidi" />
import { MIDIEvent } from "./MIDIEvent";
export interface Track {
    id: string;
    latency: number;
    name?: string;
    volume?: number;
    inputs: string[];
    outputs: string[];
    instrument?: string;
    processor?: (event: MIDIEvent | WebMidi.MIDIMessageEvent) => void;
}
export declare const createTrack: (id: string) => Track;

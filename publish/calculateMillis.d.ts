import { MIDIEvent } from "./types/MIDIEvent";
export declare const calculateMillis: (events: MIDIEvent[], data: {
    ppq: number;
    bpm?: number | undefined;
    playbackSpeed?: number | undefined;
}) => MIDIEvent[];

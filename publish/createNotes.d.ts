import { MIDIEvent, NoteOnEvent, NoteOffEvent } from "./types/MIDIEvent";
export declare type MIDINote = {
    id: string;
    noteOn: NoteOnEvent;
    noteOff: NoteOffEvent;
    durationTicks?: number;
    durationMillis?: number;
    startTicks?: number;
    endTicks?: number;
    startMillis?: number;
    endMillis?: number;
};
export declare const createNotes: (events: MIDIEvent[]) => MIDINote[];

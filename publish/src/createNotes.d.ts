import { MIDIEvent, NoteOnEvent, NoteOffEvent } from "./MIDIEvent";
export interface MIDIEventGeneric {
    id?: string;
    bar?: number;
    ticks: number;
    noteNumber: number;
}
export interface MIDINoteGeneric {
    id: string;
    noteOn: MIDIEventGeneric;
    noteOff: MIDIEventGeneric;
}
export interface MIDINote extends MIDINoteGeneric {
    noteOn: NoteOnEvent;
    noteOff: NoteOffEvent;
    durationTicks?: number;
    durationMillis?: number;
    startTicks?: number;
    endTicks?: number;
    startMillis?: number;
    endMillis?: number;
}
export declare const createNotes: (events: MIDIEvent[]) => MIDINote[];

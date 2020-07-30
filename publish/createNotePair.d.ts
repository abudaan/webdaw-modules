import { MIDIEvent, NoteOnEvent, NoteOffEvent } from "./types/MIDIEvent";
export declare const createNotePair: (events: MIDIEvent[]) => [NoteOnEvent, NoteOffEvent][];

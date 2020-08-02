import { MIDIEvent, NoteOnEvent, NoteOffEvent } from "./MIDIEvent";
export declare const createNotePair: (events: MIDIEvent[]) => [NoteOnEvent, NoteOffEvent][];

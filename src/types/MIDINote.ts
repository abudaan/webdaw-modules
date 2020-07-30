import { NoteOnEvent, NoteOffEvent } from "./MIDIEvent";

export type MIDINote = {
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

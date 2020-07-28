import { MIDIEvent, NoteOnEvent, NoteOffEvent } from "./midi_events";
import { NOTE_ON, NOTE_OFF } from "./midi_utils";

export const createNotePair = (events: MIDIEvent[]): [NoteOnEvent, NoteOffEvent][] => {
  const notes: { [id: string]: [NoteOnEvent, NoteOffEvent] } = {};
  events.forEach(e => {
    const event = e as NoteOnEvent;
    // console.log(e.ticks, event.noteNumber, event.descr, event.channel);
    if (e.descr === NOTE_ON) {
      const event = e as NoteOnEvent;
      notes[`${e.noteNumber}`] = [event, null];
    } else if (e.descr === NOTE_OFF) {
      const event = e as NoteOffEvent;
      if (notes[`${e.noteNumber}`]) {
        notes[`${e.noteNumber}`][1] = event;
      } else {
        console.warn("orphaned MIDI off event!");
      }
    }
  });
  return Object.values(notes);
};

import { MIDIEvent, NoteOnEvent, NoteOffEvent } from "./MIDIEvent";
import { NOTE_ON, NOTE_OFF } from "./util/midi";

export const createNotePair = (events: MIDIEvent[]): [NoteOnEvent, NoteOffEvent][] => {
  const notes: { [id: string]: [NoteOnEvent, NoteOffEvent] } = {};
  const tmpNotes: { [id: string]: NoteOnEvent } = {};
  events.forEach(e => {
    const event = e as NoteOnEvent;
    // console.log(e.ticks, event.noteNumber, event.descr, event.channel);
    if (e.descr === NOTE_ON) {
      const event = e as NoteOnEvent;
      tmpNotes[`${e.noteNumber}`] = event;
    } else if (e.descr === NOTE_OFF) {
      const event = e as NoteOffEvent;
      if (tmpNotes[`${e.noteNumber}`]) {
        notes[`${e.noteNumber}`] = [tmpNotes[`${e.noteNumber}`], event];
      } else {
        console.warn("orphaned MIDI off event!");
      }
    }
  });
  return Object.values(notes);
};

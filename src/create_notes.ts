import { MIDIEvent, NoteEvent } from "./midi_events";
import { MIDINote } from "./types";
import { sortMIDIEvents } from "./midi_utils";

let index = 0;

export const createNotes = (events: MIDIEvent[]): MIDINote[] => {
  let filtered: NoteEvent[] = events.reduce((acc, val) => {
    // console.log(val.type);
    if (val.type === 0x80 || val.type === 0x90) {
      acc.push(val as NoteEvent);
    }
    return acc;
  }, []);
  // filtered = sortMIDIEvents(filtered);
  const notes = [];
  const tmp = {};
  filtered.forEach(e => {
    const id = `${e.trackId}-${e.noteNumber}`;
    // console.log(e.ticks, e.type, id);
    if (e.type === 0x90) {
      if (tmp[id]) {
        // console.warn(`note existed already! ${id}`);
      } else {
        tmp[id] = e;
      }
    } else if (e.type === 0x80) {
      if (!tmp[id]) {
        // console.warn(`note doesn't exist! ${id}`);
      } else {
        const noteOn = tmp[id];
        const note: MIDINote = {
          id: `note-${new Date().getTime()}-${index++}`,
          noteOn,
          noteOff: e,
          // durationTicks: e.ticks - noteOn.ticks,
          // durationMillis: e.millis - noteOn.millis,
          // startTicks: noteOn.ticks,
          // startMillis: noteOn.millis,
          // endTicks: e.ticks,
          // endMillis: e.millis,
        };
        notes.push(note);
        delete tmp[id];
      }
    }
  });
  // console.log(notes);
  return notes;
};

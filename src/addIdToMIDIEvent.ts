import uniqid from "uniqid";
import { MIDIEvent } from "./types/MIDIEvent";

export const addIdToMIDIEvent = (events: MIDIEvent[]): MIDIEvent[] => {
  return events.map(e => {
    e.id = uniqid();
    return e;
  });
};

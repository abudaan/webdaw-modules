import { MIDIEvent, TempoEvent } from "./midi_events";

export const calculateMillis = (
  events: MIDIEvent[],
  data: {
    ppq: number;
    bpm?: number;
    playbackSpeed?: number;
  }
): MIDIEvent[] => {
  let { ppq, bpm = -1, playbackSpeed = 1 } = data;
  let millisPerTick = bpm === -1 ? 0 : (((1 / playbackSpeed) * 60) / bpm / ppq) * 1000;
  let ticks = 0;
  let millis = 0;
  // console.log("bpm", bpm, millis);
  return events.map(event => {
    if ((event as TempoEvent).bpm) {
      ({ bpm } = event as TempoEvent);
      console.log("bpm", bpm, millis);
      millisPerTick = (((1 / playbackSpeed) * 60) / bpm / ppq) * 1000;
    }
    const diffTicks = event.ticks - ticks;
    millis += diffTicks * millisPerTick;
    event.millis = millis;
    ticks = event.ticks;
    return event;
  });
};

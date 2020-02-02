import { Song } from './types';
import { getMIDIAccess } from './init-midi';
import { NoteOnEvent } from './midi_events';
import { NOTE_ON, NOTE_OFF } from './midi_utils';

export const getSchedulerIndex = (song: Song, millis: number): number => {
  const { events } = song;
  let i = 0;
  for (; i < events.length; i++) {
    const event = events[i];
    if (event.millis > millis) {
      break;
    }
  }
  return i;
}

type Args = {
  song: Song,
  millis: number
  index: number
  outputs?: WebMidi.MIDIOutputMap
}
export const schedule = ({ song, index, millis, outputs }: Args): { millis: number, index: number } => {
  const ts = performance.now();
  const { events } = song;
  const scheduled = [];
  while (index < events.length) {
    const event = events[index];
    // console.log(event.millis);
    if (event.millis < (millis + song.bufferTime)) {
      scheduled.push(event);
      const track = song.tracksById[event.trackId];
      track.outputs.forEach(id => {
        if (event.descr === NOTE_ON || event.descr === NOTE_OFF) {
          const time = ts + song.latency + track.latency + (event.millis - millis);
          // console.log(time, ts, time - ts);
          outputs?.get(id)?.send([event.type[0] + event.channel, event.noteNumber, event.velocity], time);
        }
      })
      index++
    } else {
      break;
    }
  }
  // console.log('[SCHEDULED]', scheduled.map(e => [e.ticks, e.millis]));
  return { millis, index };
}
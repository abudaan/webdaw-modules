import { Song } from './types';

const bufferTime = 50; // milliseconds

export const getIndex = (song: Song, millis: number): number => {
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
}
export const schedule = ({ song, index, millis }: Args): { millis: number, index: number } => {
  const ts = performance.now();
  const { events } = song;
  const scheduled = [];
  while (index < events.length) {
    const event = events[index];
    // console.log(event.millis);
    if (event.millis < (millis + bufferTime)) {
      scheduled.push(event);
      index++
    } else {
      break;
    }
  }
  console.log('[SCHEDULED]', scheduled.map(e => [e.ticks, e.millis]));
  return { millis, index };
}
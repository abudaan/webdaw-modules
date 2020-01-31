import { Song } from './types';

type Args = {
  song: Song,
  millis: number
  index: number
}
export const schedule = ({ song, millis = 0, index = 0 }: Args): { millis: number, index: number } => {

  const ts = performance.now();
  console.log(ts);

  if (millis !== 0 && index === 0) {
    // calculate index
  }

  return { millis, index };
}
import { Song } from './types';

const bufferTime = 50; // milliseconds

type Args = {
  song: Song,
  millis: number
  indices: number[]
}
export const schedule = ({ song, millis = 0, indices = [] }: Args): { millis: number, indices: number[] } => {

  const ts = performance.now();
  console.log(ts);

  // if (millis !== 0 && index === 0) {
  //   // calculate index
  // }

  return { millis, indices };
}
import { Song } from "./createSong";

export const getCurrentEventIndex = (
  song: Song,
  millis: number,
  startIndex: number = 0
): number => {
  const { events } = song;
  let i = startIndex;
  for (; i < events.length; i++) {
    const event = events[i];
    // console.log(event.millis, millis);
    if (typeof event.millis === "undefined" || event.millis >= millis) {
      break;
    }
  }
  return i;
};

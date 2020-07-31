import { schedule } from "./scheduler";
import { getCurrentEventIndex } from "./getCurrentEventIndex";
import { unschedule } from "./unschedule";
import { midiAccess } from "./initAudioAndMIDI";
import { Song } from "./types/Song";

export const startMIDI = (song: Song, position: number): Song => {
  const timestamp = performance.now();
  let positionMillis = position < 0 ? 0 : position;
  if (song.durationMillis && position > song.durationMillis) {
    positionMillis = song.durationMillis;
  }
  const index = getCurrentEventIndex(song, position);
  return {
    ...song,
    positionMillis,
    scheduler: {
      ...song.scheduler,
      timestamp,
      index,
    },
  };
};

export const playMIDI = (song: Song): Song => {
  const { index, scheduled } = schedule({
    song,
    millis: song.positionMillis,
    index: song.scheduler.index,
    outputs: midiAccess?.outputs,
  });
  // console.log("scheduled", song.scheduler.scheduled.length);
  const ts = performance.now();
  const millis = song.positionMillis + ts - song.scheduler.timestamp;

  return {
    ...song,
    positionMillis: millis,
    scheduler: {
      index,
      scheduled,
      timestamp: ts,
    },
  };
};

export const stopMIDI = (song: Song): Song => {
  unschedule(song, midiAccess?.outputs);
  return {
    ...song,
    positionMillis: 0,
    scheduler: {
      index: 0,
      scheduled: [],
      timestamp: 0,
    },
  };
};

import {
  heartbeat as sequencer,
  Heartbeat,
  heartbeat_utils,
  songPositionFromScore,
} from "webdaw-modules";
import { stopSong } from "./actions/stopSong";
import { store } from "./store";
import { setSongPosition } from "./actions/setSongPosition";
const { loadJSON, addAssetPack, loadMIDIFile } = heartbeat_utils;

const instrumentName = "TP00-PianoStereo";
const instrumentOgg = `../assets/${instrumentName}.ogg.json`;
const instrumentMp3 = `../assets/${instrumentName}.mp3.json`;

let raqId: number;
let song: Heartbeat.Song;
let keyEditor: Heartbeat.KeyEditor;

const updateSongPosition = () => {
  setSongPosition(song.millis, song.ticks, song.bar);
  raqId = requestAnimationFrame(updateSongPosition);
};

export const getSong = (): Heartbeat.Song => song;

export const localStopSong = () => {
  cancelAnimationFrame(raqId);
  song.stop();
  stopSong();
};

export const setup = async (): Promise<{ cleanup: () => void }> => {
  await sequencer.ready();
  const { midiFileName, midiFile } = store.getState();

  // load MIDI file and setup song
  await loadMIDIFile(midiFile);
  song = sequencer.createSong(sequencer.getMidiFile(midiFileName));
  store.setState({ ppq: song.ppq });
  keyEditor = sequencer.createKeyEditor(song, {});

  // load instrument and setup all tracks
  let url = instrumentMp3;
  if (sequencer.browser === "firefox") {
    url = instrumentOgg;
  }
  const json = await loadJSON(url);
  await addAssetPack(json);
  song.tracks.forEach((track: Heartbeat.Track) => {
    track.setInstrument(instrumentName);
  });

  song.addEventListener("end", () => {
    localStopSong();
  });

  const unsub1 = store.subscribe(
    (songState) => {
      if (songState === "stop") {
        localStopSong();
      } else if (songState === "play") {
        song.play();
        raqId = requestAnimationFrame(updateSongPosition);
      } else if (songState === "pause") {
        song.pause();
        cancelAnimationFrame(raqId);
      }
    },
    (state) => state.songState
  );

  const unsub2 = store.subscribe(
    (measures: number[]) => {
      if (measures.length > 0) {
        console.log("LOOP", measures);
        const { repeats } = store.getState();
        const { barSong: leftBar } = songPositionFromScore(repeats, Math.min(...measures));
        const leftPos = song.getPosition("barsbeats", leftBar, 1, 1, 0);

        const { barSong: rightBar } = songPositionFromScore(repeats, Math.max(...measures) + 1);
        const rightPos = song.getPosition("barsbeats", rightBar, 1, 1, 0);

        song.setLeftLocator("ticks", leftPos.ticks);
        song.setRightLocator("ticks", rightPos.ticks);
        song.setPlayhead("ticks", leftPos.ticks);
        song.setLoop(true);
      } else {
        song.setLoop(false);
      }
    },
    (state) => state.selectedMeasures
  );

  return {
    cleanup: () => {
      unsub1();
      unsub2();
    },
  };
};

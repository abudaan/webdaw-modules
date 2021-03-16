import {
  heartbeat as sequencer,
  Heartbeat,
  heartbeat_utils,
  songPositionFromScore,
  getPlayheadAnchorData,
  LoopData,
} from "webdaw-modules";
import { stopSong } from "./actions/stopSong";
import { store } from "./store";
import { setPlayheadFromSong } from "./actions/setPlayheadFromSong";
import { getOSMD } from "./scoreWrapper";
const { loadJSON, addAssetPack, loadMIDIFile } = heartbeat_utils;

const instrumentName = "TP00-PianoStereo";
const instrumentOgg = `../assets/${instrumentName}.ogg.json`;
const instrumentMp3 = `../assets/${instrumentName}.mp3.json`;

let raqId: number;
let song: Heartbeat.Song;
let keyEditor: Heartbeat.KeyEditor;

const updateSongPosition = () => {
  setPlayheadFromSong(song.millis, song.ticks);
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
  const { files, currentFilesIndex } = store.getState();
  const { name, midiFile } = files[currentFilesIndex];
  // load MIDI file and setup song
  await loadMIDIFile(midiFile);
  // const parsed = sequencer.getMidiFile("mozk545a");
  // const trackOrder = [];
  // for (let i = 0; i < parsed.trackMapping.length; i++) {
  //   const mapping = parsed.trackMapping[i];
  //   if (mapping.usedInSong) {
  //     trackOrder.push(mapping.id);
  //   }
  // }
  // console.log(parsed);
  // console.log(trackOrder);
  const parsed = sequencer.getMidiFile(name);
  song = sequencer.createSong(parsed);
  const keyEditor = sequencer.createKeyEditor(song, {});
  store.setState({ ppq: song.ppq });

  // load instrument and setup all tracks
  let url = instrumentMp3;
  if (sequencer.browser === "firefox") {
    url = instrumentOgg;
  }
  const json = await loadJSON(url);
  await addAssetPack(json);
  song.tracks.forEach((track: Heartbeat.Track) => {
    // console.log(track);
    track.setInstrument(instrumentName);
  });

  song.addEventListener("end", () => {
    localStopSong();
  });

  const subscribes: (() => void)[] = [];

  subscribes[subscribes.length] = store.subscribe(
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

  subscribes[subscribes.length] = store.subscribe(
    (measures: number[]) => {
      const { repeats, ppq } = store.getState();

      if (measures.length > 0) {
        // console.log("LOOP", measures);

        const startBar = Math.min(...measures);
        const endBar = Math.max(...measures);

        const { barSong: leftBar } = songPositionFromScore(repeats, startBar);
        const leftPos = song.getPosition("barsbeats", leftBar, 1, 1, 0);

        const { barSong: rightBar } = songPositionFromScore(repeats, endBar + 1);
        const rightPos = song.getPosition("barsbeats", rightBar, 1, 1, 0);
        const loopData: LoopData = {
          startBar,
          endBar,
          startMillis: leftPos.millis,
          endMillis: rightPos.millis,
          startTicks: leftPos.millis,
          endTicks: rightPos.ticks,
          active: true,
          id: "loop",
        };
        const loops = [loopData];
        const { anchorData } = getPlayheadAnchorData(getOSMD(), repeats, loops, ppq);
        store.setState({
          loops,
          playheadAnchors: anchorData,
        });

        song.setLeftLocator("ticks", leftPos.ticks);
        song.setRightLocator("ticks", rightPos.ticks);
        song.setPlayhead("ticks", leftPos.ticks);
        song.setLoop(true);
      } else {
        song.setLoop(false);
        const { anchorData } = getPlayheadAnchorData(getOSMD(), repeats, [], ppq);
        store.setState({
          loops: [],
          playheadAnchors: anchorData,
        });
      }
    },
    (state) => state.selectedMeasures
  );

  return {
    cleanup: () => {
      subscribes.forEach((sub) => {
        sub();
      });
    },
  };
};

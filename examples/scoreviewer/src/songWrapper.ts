import sequencer from 'heartbeat-sequencer';
import { BoundingBoxMeasure } from 'webdaw-modules';
import { updateBar } from './actions/updateBar';
import { loadJSON, addAssetPack, loadMIDIFile } from './utils/heartbeat-utils';
import { store } from './store';
import { setSongPosition } from './actions/setSongPosition';
import { songPositionFromScore } from './utils/songPositionFromScore';

const instrumentName = 'TP00-PianoStereo';
const instrumentOgg = `./assets/${instrumentName}.ogg.json`;
const instrumentMp3 = `./assets/${instrumentName}.mp3.json`;

let raqId: number;
let song: Heartbeat.Song;
let keyEditor: Heartbeat.KeyEditor;

const updateSongPosition = () => {
  setSongPosition(song.millis);
  raqId = requestAnimationFrame(updateSongPosition);
};

export const getSong = (): Heartbeat.Song => song;

export const stopSong = () => {
  cancelAnimationFrame(raqId);
  song.stop();
  updateBar();
  store.setState({ songState: 'stop', currentBarSong: song.bar });
};

export const setup = async (): Promise<{ cleanup: () => void }> => {
  await sequencer.ready();
  const { midiFileName, midiFile } = store.getState();

  // load MIDI file and setup song
  await loadMIDIFile(midiFile);
  song = sequencer.createSong(sequencer.getMidiFile(midiFileName));
  keyEditor = sequencer.createKeyEditor(song, {});

  // load instrument and setup all tracks
  let url = instrumentMp3;
  if (sequencer.browser === 'firefox') {
    url = instrumentOgg;
  }
  const json = await loadJSON(url);
  await addAssetPack(json);
  song.tracks.forEach(track => {
    // console.log(track.id);
    track.setInstrument(instrumentName);
  });

  song.addEventListener('end', () => {
    stopSong();
  });

  song.addEventListener('position', 'bar', updateBar);

  const unsub1 = store.subscribe(
    songState => {
      if (songState === 'stop') {
        stopSong();
      } else if (songState === 'play') {
        song.play();
        raqId = requestAnimationFrame(updateSongPosition);
      } else if (songState === 'pause') {
        song.pause();
        cancelAnimationFrame(raqId);
      }
    },
    state => state.songState
  );

  const unsub2 = store.subscribe(
    (measures: number[]) => {
      if (measures.length > 0) {
        console.log('LOOP', measures);
        const { repeats, hasRepeated } = store.getState();
        const { barSong: leftBar } = songPositionFromScore(
          repeats,
          hasRepeated,
          Math.min(...measures)
        );
        const leftPos = song.getPosition('barsbeats', leftBar, 1, 1, 0);

        const { barSong: rightBar } = songPositionFromScore(
          repeats,
          hasRepeated,
          Math.max(...measures) + 1
        );
        const rightPos = song.getPosition('barsbeats', rightBar, 1, 1, 0);

        song.setLeftLocator('ticks', leftPos.ticks);
        song.setRightLocator('ticks', rightPos.ticks);
        song.setPlayhead('ticks', leftPos.ticks);
        song.setLoop(true);
        // store.setState({ currentBarSong: song.bar });
        updateBar();
      } else {
        song.setLoop(false);
      }
    },
    state => state.selectedMeasures
  );

  return {
    cleanup: () => {
      unsub1();
      unsub2();
    },
  };
};

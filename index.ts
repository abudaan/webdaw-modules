import 'jzz';
import { schedule, getSchedulerIndex } from './src/scheduler';
import { fetchArraybuffer, arrayBuffer } from './src/fetch_helpers';
import { parseMidiFile } from './src/parse_midi_binary';
import { getMIDIAccess, getMIDIDevices } from './src/init-midi';
import { Song } from './src/types';
import { createSongFromMIDIFile } from './src/sugar_coating';

const url = './assets/minute_waltz.mid';
// const url = './assets/mozk545a.mid';
// const url = './assets/mozk545a_musescore.mid';

const init = async () => {
  const ma = await getMIDIAccess();
  const song = await createSongFromMIDIFile('./assets/minute_waltz.mid');
  const { inputs, outputs } = await getMIDIDevices();
  song.tracks.forEach(track => {
    track.outputs.push(...outputs);
  });
  console.log(song);

  let millis = 30000;
  let index = getSchedulerIndex(song, millis);
  // console.log('START INDEX', index);
  let start: number = performance.now();
  const play = () => {
    const ts = performance.now();
    const progress = ts - start;
    start = ts;
    // console.log(ts);
    if (millis < 60000) {
      ({ index, millis } = schedule({ song, millis, index }));
      millis += progress
      console.log(index, millis);
      requestAnimationFrame(() => {
        play()
      });
    }
  };
  play();
};

init();


// fetch(url)
//   .then(arrayBuffer)
//   .then(ab => {
//     const { header, tracks } = parseMidiFile(ab);
//     console.log(tracks);
//   });

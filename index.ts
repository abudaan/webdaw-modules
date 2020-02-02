import 'jzz';
import { schedule } from './src/scheduler';
import { fetchArraybuffer, arrayBuffer } from './src/fetch_helpers';
import { parseMidiFile } from './src/parse_midi_binary';
import { getMIDIAccess, getMIDIDevices } from './src/init-midi';
import { Song } from './src/types';

const url = './assets/minute_waltz.mid';
// const url = './assets/mozk545a.mid';
// const url = './assets/mozk545a_musescore.mid';

const init = async () => {
  const ma = await getMIDIAccess();
  const ab = await fetchArraybuffer('./assets/minute_waltz.mid');
  const { header, events, initialTempo } = parseMidiFile(ab);
  console.log(header);
  // console.log(events.map(e => [e.ticks, e.millis]));
  // a song is just a plain object, hurray!
  const song: Song = {
    ppq: header.ticksPerBeat,
    initialTempo,
    events,
    // timeTrack,
    // tracks: tracks.map(track => ({ events: [...track] })),
  }
  // console.log(song);
  const { inputs, outputs } = await getMIDIDevices();

  let millis = 0;
  let index = 0;
  let start: number = performance.now();
  const play = () => {
    const ts = performance.now();
    const progress = ts - start;
    start = ts;
    // console.log(ts);
    if (millis < 3000) {
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

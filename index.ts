import 'jzz';
import { schedule } from './src/scheduler';
import { fetchArraybuffer, arrayBuffer } from './src/fetch_helpers';
import { parseMidiFile } from './src/parse_midi_binary';
import { initMIDI, getMIDIDevices } from './src/init-midi';
import { Song } from './src/types';

const url = './assets/minute_waltz.mid';
// const url = './assets/mozk545a.mid';
// const url = './assets/mozk545a_musescore.mid';

const init = async () => {
  const ma = await initMIDI();
  const ab = await fetchArraybuffer('./assets/minute_waltz.mid');
  const { header, timeTrack, tracks } = parseMidiFile(ab);
  console.log(header);
  console.log(tracks);
  // a song is just a plain object, hurray!
  const song: Song = {
    ppq: header.ticksPerBeat,
    timeTrack,
    tracks: tracks.map(track => ({ events: [...track] })),
  }
  console.log(song);
  getMIDIDevices();
  if (ma !== null) {
    const o = ma.outputs.get('6FF5590044F4859ED50C5167BCFE9700A1798E39AA55A628E86D39011FAECD5D');
    // console.log(ma.outputs.keys().next());
    console.log(o);
  }
};

init();


// fetch(url)
//   .then(arrayBuffer)
//   .then(ab => {
//     const { header, tracks } = parseMidiFile(ab);
//     console.log(tracks);
//   });

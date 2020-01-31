import { schedule } from './src/scheduler';
import { fetchArraybuffer, arrayBuffer } from './src/fetch_helpers';
import { parseMidiFile } from './src/parse_midi_binary';

// const init = async () => {
//   const ab = await fetchArraybuffer('./assets/minute_waltz.mid');
//   const { header, tracks } = parseMidiFile(ab);
//   console.log(header);
//   console.log(tracks);
// };

// init();

// const url = './assets/minute_waltz.mid';
const url = './assets/mozk545a.mid';
// const url = './assets/mozk545a_musescore.mid';

fetch(url)
  .then(arrayBuffer)
  .then(ab => {
    const { header, tracks } = parseMidiFile(ab);
    console.log(tracks);
  });

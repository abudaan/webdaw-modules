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

fetch('./assets/minute_waltz.mid')
  .then(arrayBuffer)
  .then(ab => {
    const { header, tracks } = parseMidiFile(ab);
    console.log(tracks);
  });

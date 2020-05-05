import "jzz";
import { schedule, getSchedulerIndex } from "../../src/scheduler";
import { getMIDIAccess, getMIDIDevices } from "../../src/init-midi";
import { Song } from "../../src/types";
import { createSongFromMIDIFile } from "../../src/sugar_coating";

const url = "./assets/minute_waltz.mid";
// const url = './assets/mozk545a.mid';
// const url = './assets/mozk545a_musescore.mid';

const init = async () => {
  const ma = await getMIDIAccess();
  const song = await createSongFromMIDIFile("./assets/minute_waltz.mid");
  const { inputs, outputs } = await getMIDIDevices();
  song.tracks.forEach(track => {
    track.outputs.push(...outputs.map(o => o.id));
  });
  console.log(song);

  let millis = 3000;
  let index = getSchedulerIndex(song, millis);
  // console.log('START INDEX', index);
  let start: number = performance.now();
  const play = (a: number) => {
    const ts = performance.now();
    // console.log(ts, a);
    // const progress = ts - a;
    const progress = ts - start;
    start = ts;
    // const progress = a - start;
    // start = a;
    if (millis < 10000) {
      ({ index, millis } = schedule({
        song,
        millis,
        index,
        outputs: ma?.outputs,
      }));
      millis += progress;
      // console.log(index, millis);
      requestAnimationFrame(a => {
        play(a);
      });
    }
  };
  play(start);
};

init();

// fetch(url)
//   .then(arrayBuffer)
//   .then(ab => {
//     const { header, tracks } = parseMidiFile(ab);
//     console.log(tracks);
//   });

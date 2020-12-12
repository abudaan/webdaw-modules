import { schedule } from "../../src/scheduler";
import { getCurrentEventIndex } from "../../src/getCurrentEventIndex";
import { getMIDIAccess } from "../../src/getMIDIAccess";
import { getMIDIPorts } from "../../src/getMIDIPorts";
import { createSongFromMIDIFile } from "../../src/createSongFromMIDIFile";

const url = "../assets/minute_waltz.mid";
// const url = '../assets/mozk545a.mid';
// const url = '../assets/mozk545a_musescore.mid';

const init = async () => {
  const ma = await getMIDIAccess();
  const song = await createSongFromMIDIFile(url);
  const { inputs, outputs } = getMIDIPorts(ma);
  song.tracks.forEach((track) => {
    track.outputs.push(...outputs.map((o) => o.id));
  });
  console.log(song);

  let millis = 3000;
  let index = getCurrentEventIndex(song, millis);
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
      requestAnimationFrame((a) => {
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

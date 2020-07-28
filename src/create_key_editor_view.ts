import { Song, MIDINote } from "./types";
// import { download } from "../util/download";

export const createKeyEditorView = (song: Song, tickWidth: number = 0.1): void => {
  if (!song.notes) {
    console.warn("create notes");
  }
  const numNotes = song.notes.length - 1;
  const maxTick = song.notes[numNotes].noteOff.ticks;
  const width = maxTick * tickWidth;
  const height = 1000;
  const noteHeight = height / 128;
  // console.log(width, height);
  const canvas = document.createElement("canvas") as HTMLCanvasElement;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  // const columns = song.numBars * song.numerator * song.denominator; // beats
  const columns = 4 * song.numerator * song.denominator; // beats

  ctx.fillStyle = "#496bd8";
  ctx.fillRect(0, 0, width, height);

  // draw lines
  ctx.fillStyle = "#f7bd3e";
  ctx.translate(0.5, 0.5);
  // ctx.fillStyle = 'rgb(' + 100 + ',' + 99 + ',' + (event.velocity * 2) + ')'
  const w = width / columns;
  for (let i = 0; i < columns; i++) {
    const thickness = i % 16 === 0 ? 1 : i % 4 === 0 ? 0.7 : 0.5;
    ctx.fillRect(Math.round(w * i), 0, thickness, height);
  }
  for (let i = 1; i <= 128; i++) {
    ctx.fillRect(0, i * noteHeight, width, 0.7);
  }
  // canvas.toBlob((b: Blob) => {
  //   // , { type: "image/png" }
  //   download(b, "tmp");
  // });
};

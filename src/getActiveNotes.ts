import { Song, MIDINote } from "./types";

type Args = {
  song: Song;
  index: number;
  millis: number;
  activeNotes: MIDINote[];
};
export const getActiveNotes = ({ song, index, millis, activeNotes }: Args) => {
  const { notes } = song;
  // const current = [];
  // let i = index;
  // console.log("highlighter", index);
  // while (i < notes.length) {
  //   const note = notes[i];
  //   // console.log(index, millis, note.noteOn.millis, note.noteOff.millis);
  //   if (millis >= note.noteOn.millis && millis <= note.noteOff.millis) {
  //     i++;
  //     current.push(note);
  //   }

  //   if (millis < note.noteOn.millis || millis > note.noteOff.millis) {
  //     break;
  //   }
  // }
  const current = notes.filter(n => millis >= n.noteOn.millis && millis <= n.noteOff.millis);
  // console.log(millis, current);
  // console.log(activeNotes);
  const passiveNotes: MIDINote[] = activeNotes.filter(note => {
    const i = current.findIndex(n => {
      // console.log("C", n.id, "A", note.id);
      return n.id === note.id;
    });
    // console.log(i);
    if (i === -1) {
      return true;
    }
    return false;
  });
  // console.log("P", passiveNotes);
  // console.log("A", current);

  return {
    // index: i,
    index, // not in use
    activeNotes: current,
    passiveNotes,
  };
};

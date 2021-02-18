import { getNotesInStaff, Heartbeat } from "webdaw-modules";
import { getOSMD } from "./scoreWrapper";
import { getSong } from "./songWrapper";

export const compareScoreAndMIDI = () => {
  const numNotesToTest = 10;
  const osmd = getOSMD();
  const song = getSong();
  const notesScore = getNotesInStaff(osmd, 0, song.ppq, numNotesToTest);
  const notesMidi: Heartbeat.MIDINote[] = song.tracks[1].notes;
  // console.log(notesScore);
  // console.log(notesMidi);
  let match = 0;
  notesScore.forEach((n, i) => {
    const { ticks, noteNumber } = n;
    const midiNote = notesMidi[i];
    // console.log("ticks", ticks, midiNote.noteOn.ticks);
    // console.log("note number", noteNumber, midiNote.noteOn.noteNumber);
    if (midiNote.noteOn.ticks === ticks && noteNumber === midiNote.noteOn.noteNumber) {
      match++;
    }
  });
  // Note that you do not always get back the number of notes that you've requested
  // because sometime a staff has less notes than that. Therefor use the length of
  // the array to calculate the match ratio
  console.log("MATCH", match / notesScore.length);
};

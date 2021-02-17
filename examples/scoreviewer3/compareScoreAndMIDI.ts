import { getNotesInStaff } from "webdaw-modules";
import { getOSMD } from "./scoreWrapper";
import { getSong } from "./songWrapper";

export const compareScoreAndMIDI = () => {
  const osmd = getOSMD();
  const song = getSong();
  const notesScore = getNotesInStaff(osmd, 0, 480, 10);
  const notesMidi = song.tracks[0].events;
  console.log(notesScore);
  console.log(notesMidi);
};

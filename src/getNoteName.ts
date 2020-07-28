const noteNames = {
  sharp: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  flat: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
  "enharmonic-sharp": ["B#", "C#", "C##", "D#", "D##", "E#", "F#", "F##", "G#", "G##", "A#", "A##"],
  "enharmonic-flat": ["Dbb", "Db", "Ebb", "Eb", "Fb", "Gbb", "Gb", "Abb", "Ab", "Bbb", "Bb", "Cb"],
};

export const getNoteName = function(noteNumber: number, mode: string = "sharp"): [number, number] {
  //var octave = Math.floor((number / 12) - 2), // → in Cubase central C = C3 instead of C4
  const octave = Math.floor(noteNumber / 12 - 1);
  const noteName = noteNames[mode][noteNumber % 12];
  return [noteName, octave];
};

// import { midiAccess } from "./initAudioAndMIDI";
import { getMIDIPorts } from "./getMIDIPorts";

export const resetMIDIOutputs = (midiAccess: WebMidi.MIDIAccess | null, offset: number = 100) => {
  if (midiAccess) {
    const { outputs } = getMIDIPorts(midiAccess);
    const time = performance.now() + offset;
    outputs.forEach(output => {
      for (let channel = 0; channel < 16; channel++) {
        output.send([0xb0 + channel, 0x7b, 0x00], time); // stop all notes
        output.send([0xb0 + channel, 0x79, 0x00], time); // reset all controllers
      }
    });
  }
};

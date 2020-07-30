import { getMIDIAccess } from "./getMIDIAccess";

let midiAccess: WebMidi.MIDIAccess | null = null;
let audioContext: AudioContext | null = null;

export const initAudioAndMIDI = async () => {
  midiAccess = await getMIDIAccess();
  audioContext = new AudioContext();
  audioContext.suspend();
};

export const enableAudioContext = async () => {
  if (audioContext !== null) {
    if (audioContext.state === "running") {
      return;
    }
    await audioContext.resume();
  }
  // console.log(audioContext);
};

export { midiAccess, audioContext };

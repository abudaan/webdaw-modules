let midiAccess: WebMidi.MIDIAccess | null;

export const getMIDIAccess = async (): Promise<WebMidi.MIDIAccess | null> => {
  if (midiAccess !== null && typeof midiAccess !== "undefined") {
    return Promise.resolve(midiAccess);
  }

  if (!navigator.requestMIDIAccess) {
    midiAccess = null;
    console.log("WebMIDI not supported");
    return Promise.resolve(null);
  }

  try {
    const ma = await navigator.requestMIDIAccess();
    // midiAccess.onstatechange = (e: WebMidi.MIDIConnectionEvent) => {
    // };
    if (!ma.inputs || !ma.outputs) {
      console.log("Firefox WebMIDI API support is still in progress");
      return null;
    }
    midiAccess = ma;
    return ma;
  } catch (e) {
    console.log("MIDI could not be initialized:", e);
    return null;
  }
};

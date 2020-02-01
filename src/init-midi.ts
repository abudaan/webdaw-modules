let midiAccess: WebMidi.MIDIAccess | null;

export const initMIDI = (): Promise<WebMidi.MIDIAccess | null> => {
  if (midiAccess !== null && typeof midiAccess !== 'undefined') {
    return Promise.resolve(midiAccess);
  }

  if (!navigator.requestMIDIAccess) {
    midiAccess = null;
    console.log('WebMIDI not supported');
    return Promise.resolve(null);
  }

  return navigator.requestMIDIAccess()
    .then(
      function midiAccessOnSuccess(ma: WebMidi.MIDIAccess) {
        // midiAccess.onstatechange = (e: WebMidi.MIDIConnectionEvent) => {
        // };

        if (!ma.inputs || !ma.outputs) {
          console.log('Firefox WebMIDI API support is still in progress');
          return null;
        }
        midiAccess = ma;
        return ma;
      },
      function midiAccessOnError(e) {
        console.log('MIDI could not be initialized:', e);
        return null;
      }
    );
}

// export const getMIDIDevices = async (): Promise<{ inputs: WebMidi.MIDIInput[], outputs: WebMidi.MIDIOutput[] }> => {
export const getMIDIDevices = (): { inputs: WebMidi.MIDIInput[], outputs: WebMidi.MIDIOutput[] } => {
  const inputs: WebMidi.MIDIInput[] = [];
  const outputs: WebMidi.MIDIOutput[] = [];
  if (typeof midiAccess === 'undefined') {
    // midiAccess = await initMIDI();
    console.warn('MIDIAccess not yet initialized, please call initMIDI first');
  } else if (midiAccess !== null) {
    midiAccess.inputs.forEach(i => { inputs.push(i); });
    midiAccess.outputs.forEach(o => { outputs.push(o); });
  }
  console.log(inputs, outputs);
  return { inputs, outputs };
}
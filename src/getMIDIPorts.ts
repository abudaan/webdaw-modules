export const getMIDIPorts = (
  midiAccess: WebMidi.MIDIAccess | null
): {
  inputs: WebMidi.MIDIInput[];
  outputs: WebMidi.MIDIOutput[];
} => {
  // export const getMIDIDevices = (): { inputs: WebMidi.MIDIInput[], outputs: WebMidi.MIDIOutput[] } => {
  const inputs: WebMidi.MIDIInput[] = [];
  const outputs: WebMidi.MIDIOutput[] = [];
  if (midiAccess) {
    midiAccess.inputs.forEach(i => {
      inputs.push(i);
    });
    midiAccess.outputs.forEach(o => {
      outputs.push(o);
    });
  }
  // console.log(inputs, outputs);
  return { inputs, outputs };
};

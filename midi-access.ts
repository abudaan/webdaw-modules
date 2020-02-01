
const initMIDIAccess = async () => {

  navigator.requestMIDIAccess()
    .then(
      // on success
      function midiAccessOnSuccess(midiAccess: WebMidi.MIDIAccess) {
        midiAccess.onstatechange = (e: WebMidi.MIDIConnectionEvent) => {
          return getDevices(midiAccess);
        };

        if (!midiAccess.inputs || !midiAccess.outputs) {
          // Firefox WebMIDI API support is still in progress
          return false;
        }
        return getDevices(midiAccess);
      },
      // on error
      function midiAccessOnError(e) {
        console.log('MIDI could not be initialized:', e);
        return false;
      }
    );
}



const getDevices = (midiAccess: WebMidi.MIDIAccess) => {
  //console.log('getDevices', e);
  const midiInputsOrder: WebMidi.MIDIInput[] = [];
  const midiOutputsOrder: WebMidi.MIDIOutput[] = [];

  const inputs = midiAccess.inputs;

  inputs.forEach(function (input) {
    midiInputsOrder.push({ name: input.name, id: input.id });
    // sequencer.midiInputs[input.id] = input;
  });

  midiInputsOrder.sort(function (a, b) {
    var nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) { //sort string ascending
      return -1;
    } else if (nameA > nameB) {
      return 1;
    }
    return 0; //default return value (no sorting)
  });

  // sequencer.numMidiInputs = midiInputsOrder.length;


  const outputs = midiAccess.outputs;

  outputs.forEach(function (output) {
    midiOutputsOrder.push({ name: output.name, id: output.id });
    sequencer.midiOutputs[output.id] = output;
  });


  midiOutputsOrder.sort(function (a, b) {
    var nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) { //sort string ascending
      return -1;
    } else if (nameA > nameB) {
      return 1;
    }
    return 0; //default return value (no sorting)
  });

  // sequencer.numMidiOutputs = midiOutputsOrder.length;
}

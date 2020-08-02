/// <reference types="webmidi" />
export declare const getMIDIPorts: (midiAccess: WebMidi.MIDIAccess | null) => {
    inputs: WebMidi.MIDIInput[];
    outputs: WebMidi.MIDIOutput[];
};

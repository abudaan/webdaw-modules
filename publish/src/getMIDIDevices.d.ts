/// <reference types="webmidi" />
export declare const getMIDIDevices: (midiAccess: WebMidi.MIDIAccess | null) => Promise<{
    inputs: WebMidi.MIDIInput[];
    outputs: WebMidi.MIDIOutput[];
}>;

/// <reference types="webmidi" />
declare let midiAccess: WebMidi.MIDIAccess | null;
declare let audioContext: AudioContext | null;
export declare const initAudioAndMIDI: () => Promise<void>;
export declare const enableAudioContext: () => Promise<void>;
export { midiAccess, audioContext };

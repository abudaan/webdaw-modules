/// <reference types="webmidi" />
import { Heartbeat } from "../";
declare const loadJSON: (url: string) => Promise<any>;
declare const loadArrayBuffer: (url: string) => Promise<void | ArrayBuffer>;
declare const initSequencer: () => Promise<void>;
declare const getBrowser: () => string;
declare const addMIDIFile: (url: string) => Promise<Heartbeat.MIDIFileJSON>;
declare const addAssetPack: (ap: Heartbeat.AssetPack) => Promise<void>;
declare const addAssetPack2: (url: string) => Promise<Heartbeat.AssetPack>;
declare const createSongFromMIDIFile: (url: string) => Promise<Heartbeat.Song>;
declare type ParseConfig = {
    instrumentSamplesList: Array<[string, {
        [id: string]: string;
    }]>;
    midiInputs: WebMidi.MIDIInput[];
    midiOutputs: WebMidi.MIDIOutput[];
    loadedInstruments: Array<Heartbeat.Instrument>;
};
declare const parseConfig: (config: Heartbeat.Config) => Promise<ParseConfig>;
declare const createMIDIFileList: () => Array<Heartbeat.MIDIFileData>;
declare const getNumUniqueNotes: (part: Heartbeat.Part) => number;
declare const getLowestNote: (events: Heartbeat.MIDIEvent[]) => Heartbeat.MIDIEvent;
declare const getHighestNote: (events: Heartbeat.MIDIEvent[]) => Heartbeat.MIDIEvent;
declare const getAverageNote: (events: Heartbeat.MIDIEvent[]) => number;
declare const loadMIDIFile: (url: string) => Promise<void>;
export { initSequencer, getBrowser, parseConfig, loadJSON, loadArrayBuffer, addAssetPack, addAssetPack2, addMIDIFile, createMIDIFileList, createSongFromMIDIFile, getNumUniqueNotes, getLowestNote, getHighestNote, getAverageNote, loadMIDIFile, };

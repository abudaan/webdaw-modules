/// <reference types="webmidi" />
import { Heartbeat } from "./";
declare type ParseConfig = {
    instrumentSamplesList: Array<[string, {
        [id: string]: string;
    }]>;
    midiInputs: WebMidi.MIDIInput[];
    midiOutputs: WebMidi.MIDIOutput[];
    loadedInstruments: Array<Heartbeat.Instrument>;
};
export declare const heartbeat_utils: {
    initSequencer: () => Promise<void>;
    getBrowser: () => string;
    parseConfig: (config: Heartbeat.Config) => Promise<ParseConfig>;
    loadJSON: (url: string) => Promise<any>;
    loadArrayBuffer: (url: string) => Promise<void | ArrayBuffer>;
    addAssetPack: (ap: Heartbeat.AssetPack) => Promise<void>;
    addAssetPack2: (url: string) => Promise<Heartbeat.AssetPack>;
    addMIDIFile: (url: string) => Promise<Heartbeat.MIDIFileJSON>;
    createMIDIFileList: () => Array<Heartbeat.MIDIFileData>;
    createSongFromMIDIFile: (url: string) => Promise<Heartbeat.Song>;
    getNumUniqueNotes: (part: Heartbeat.Part) => number;
    getLowestNote: (events: Heartbeat.MIDIEvent[]) => Heartbeat.MIDIEvent;
    getHighestNote: (events: Heartbeat.MIDIEvent[]) => Heartbeat.MIDIEvent;
    getAverageNote: (events: Heartbeat.MIDIEvent[]) => number;
    loadMIDIFile: (url: string) => Promise<void>;
    getBarInfo: (song: Heartbeat.Song, bar: number) => {
        durationMillis: number;
        startMillis: any;
    };
};
export {};

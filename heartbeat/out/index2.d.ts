/*
import { Heartbeat } from "./";

declare namespace Sequencer {
  function createSong(config: any): Heartbeat.Song;
  function createTrack(name: string): Heartbeat.Track;
  function createPart(name?: string): Heartbeat.Part;
  function createKeyEditor(song: Heartbeat.Song, config: any): Heartbeat.KeyEditor;
  function getMidiFiles(): Heartbeat.MIDIFileJSON[];
  function getAudioContext(): AudioContext;
  function getMasterGainNode(): GainNode;
  function createAudioEvent(config: any): Heartbeat.AudioEvent;
  function addMidiFile(
    args: { url?: string; arraybuffer?: ArrayBuffer },
    callback: (mf: Heartbeat.MIDIFileJSON) => void
  ): void;
  function addAssetPack(ap: Heartbeat.AssetPack, callback: () => void): void;
  function getInstruments(): Heartbeat.Instrument[];
  function ready(): Promise<boolean>;
  function getNoteNumber(step: string, octave: number): number;
  function createMidiEvent(
    ticks: number,
    type: number,
    data1: number,
    data2?: number
  ): Heartbeat.MIDIEvent;
  function processEvent(event: Heartbeat.MIDIEvent, instrument: string): void;
  function processEvent(event: Heartbeat.MIDIEvent[], instrument: string): void;
  function stopProcessEvents(): void;
  function getMidiFile(id: string): Heartbeat.MIDIFileJSON;
  function getSnapshot(song: Heartbeat.Song, id?: string): Heartbeat.SnapShot;
  const browser: string;
  const midiInputs: WebMidi.MIDIInput[];
  const midiOutputs: WebMidi.MIDIOutput[];
}
*/

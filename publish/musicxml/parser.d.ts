import { MIDIEvent } from "../types/MIDIEvent";
declare type PartData = {
    id: string;
    name: string;
    instrument: string;
    volume: number;
    events: MIDIEvent[];
};
export declare type Repeat = {
    bar: number;
    type: string;
}[];
export declare type ParsedMusicXML = {
    ppq: number;
    parts: PartData[];
    repeats: number[][];
    initialTempo: number;
    initialNumerator: number;
    initialDenominator: number;
} | null;
export declare const parseMusicXML: (xmlDoc: XMLDocument, ppq?: number) => ParsedMusicXML;
export {};

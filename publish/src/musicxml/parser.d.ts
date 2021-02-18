import { MIDIEvent } from "../MIDIEvent";
export declare type PartData = {
    id: string;
    name: string;
    instrument: string;
    volume: number;
    events: MIDIEvent[];
};
export declare type RepeatData = {
    start: number;
    end: number;
    active: boolean;
    id: string;
};
export declare type ParsedMusicXML = {
    ppq: number;
    parts: PartData[];
    repeats: RepeatData[];
    initialTempo: number;
    initialNumerator: number;
    initialDenominator: number;
} | null;
export declare const parseMusicXML: (xmlDoc: XMLDocument, ppq?: number) => ParsedMusicXML;

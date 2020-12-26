import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
export declare type GenericData = {
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare type MeasureData = GenericData;
export declare type StaveData = {
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
    notes: NoteData[];
};
export declare type MusicSystemData = GenericData;
export declare type NoteData = {
    x: number;
    y: number;
    center: {
        x: number;
        y: number;
    };
    ticks: number;
    noteNumber: number;
    isRestFlag: boolean;
    noteLength: {
        numerator: number;
        denominator: number;
        wholeValue: number;
        realValue: number;
    };
};
export declare type OSMDEntityData = {
    containerIndex: number;
    notes: NoteData[];
    measures: MeasureData[];
    staves: StaveData[];
    musicSystem: MusicSystemData;
};
export declare type NoteData2 = {
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
    center: {
        x: number;
        y: number;
    };
    ticks: number;
    noteNumber: number;
    isRestFlag: boolean;
    noteLength: {
        numerator: number;
        denominator: number;
        wholeValue: number;
        realValue: number;
    };
    measureIndex: number;
    staveIndex: number;
    containerIndex: number;
};
export declare type StaveData2 = {
    index: number;
    notes: NoteData2[];
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare type OSMDEntityData2 = {
    measureIndex: number;
    containerIndex: number;
    startX: number;
    notes: NoteData2[];
    staves: StaveData[];
    musicSystem: MusicSystemData;
};
export declare const getEntries: (osmd: OpenSheetMusicDisplay, ppq?: number) => OSMDEntityData[];

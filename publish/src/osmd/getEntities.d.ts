import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
export declare type MusicSystemData = {
    index: number;
    x: number;
    y: number;
};
export declare type NoteData = {
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
    staffIndex: number;
    containerIndex: number;
    multipleRestMeasures: number;
};
export declare type StaveData = {
    index: number;
    timeStamp: {
        numerator: number;
        denominator: number;
        wholeValue: number;
        realValue: number;
    };
    ticks: number;
    x: number;
    y: number;
    width: number;
    height: number;
    notes: NoteData[];
};
export declare type OSMDEntityData = {
    measureIndex: number;
    containerIndex: number;
    startX: number;
    notes: NoteData[];
    staves: StaveData[];
    musicSystem: MusicSystemData;
};
export declare const getEntries: (osmd: OpenSheetMusicDisplay, ppq?: number) => OSMDEntityData[];
export declare const firstTest: (osmd: OpenSheetMusicDisplay, ppq?: number) => StaveData[][];

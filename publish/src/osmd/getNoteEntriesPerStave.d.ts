import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
export declare type OSMDNoteData = {
    x: number;
    y: number;
    center: {
        x: number;
        y: number;
    };
    ticks: number;
    noteNumber: number;
    measureIndex: number;
    stave: {
        index: number;
        x: number;
        y: number;
        width: number;
        height: number;
    };
    isRestFlag: boolean;
    noteLength: {
        numerator: number;
        denominator: number;
        wholeValue: number;
        realValue: number;
    };
    parentMusicSystem: {
        id: number;
        x: number;
        y: number;
        width: number;
        height: number;
    };
};
export declare const getNoteEntriesPerStave: (osmd: OpenSheetMusicDisplay, ppq?: number) => OSMDNoteData[];

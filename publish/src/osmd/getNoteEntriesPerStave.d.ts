import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
export declare type OSMDNoteData = {
    x: number;
    y: number;
    ticks: number;
    noteNumber: number;
    measureIndex: number;
    staveIndex: number;
    isRestFlag: boolean;
    noteLength: {
        numerator: number;
        denominator: number;
        wholeValue: number;
        realValue: number;
    };
};
export declare const getNoteEntriesPerStave: (osmd: OpenSheetMusicDisplay, ppq?: number) => OSMDNoteData[];

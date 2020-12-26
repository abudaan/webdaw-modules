import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
export declare type OSMDNoteData = {
    x: number;
    y: number;
    ticks: number;
    noteNumber: number;
    measureIndex: number;
    staveIndex: number;
};
export declare const getNoteEntriesPerStave: (osmd: OpenSheetMusicDisplay, ppq?: number) => void;

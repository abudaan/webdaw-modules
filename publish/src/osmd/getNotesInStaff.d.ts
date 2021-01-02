import { OpenSheetMusicDisplay } from "opensheetmusicdisplay/build/dist/src";
export declare type NoteInfo = {
    ticks: number;
    noteNumber: number;
    measureIndex: number;
};
export declare const getNotesInStaff: (osmd: OpenSheetMusicDisplay, staffIndex: number, ppq?: number, amount?: number) => NoteInfo[];

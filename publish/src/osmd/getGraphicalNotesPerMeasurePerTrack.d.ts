import { OpenSheetMusicDisplay, MusicSystem } from "opensheetmusicdisplay";
declare type GraphicalNoteData = {
    element: SVGElement;
    ticks: number;
    noteNumber: number;
    bar: number;
    parentMusicSystem: MusicSystem;
};
export declare const getGraphicalNotesPerMeasurePerTrack: (osmd: OpenSheetMusicDisplay, ppq: number) => GraphicalNoteData[][][];
export {};

import { OpenSheetMusicDisplay, Note, BoundingBox } from "opensheetmusicdisplay";
export declare type EntityData = {
    measureIndex: number;
    staveIndex: number;
    vfNote: Vex.Flow.Note;
    sourceNote: Note;
    boundingBox: BoundingBox;
    ticks: number;
    noteNumber: number;
    bar: number;
};
export declare const mapEntityToNote: (osmd: OpenSheetMusicDisplay) => EntityData[];

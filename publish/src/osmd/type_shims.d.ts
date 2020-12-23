import { BoundingBox, Note } from "opensheetmusicdisplay";
export declare type MusicSystemShim = {
    graphicalMeasures: GraphicalMeasureShim[][];
};
export interface GraphicalNoteShim {
    vfnote: Vex.Flow.StaveNote;
    boundingBox: BoundingBox;
    sourceNote: Note;
}
export interface GraphicalMeasureShim {
    measureNumber: number;
    stave: {
        x: number;
        y: number;
        width: number;
        height: number;
        start_x: number;
        end_x: number;
    };
}

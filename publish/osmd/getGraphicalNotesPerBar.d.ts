import { OpenSheetMusicDisplay, MusicSystem } from "opensheetmusicdisplay";
export declare type GraphicalNoteData = {
    element: SVGElement;
    ticks: number;
    noteNumber: number;
    bar: number;
    parentMusicSystem: MusicSystem;
};
export interface VexFlowStaveNote extends Vex.Flow.StaveNote {
    attrs: {
        el: SVGElement;
    };
}
declare const getGraphicalNotesPerBar: (osmd: OpenSheetMusicDisplay, ppq: number) => Promise<GraphicalNoteData[][]>;
export { getGraphicalNotesPerBar };

import { MusicSystem } from "opensheetmusicdisplay";
import { GraphicalNoteData } from "./getGraphicalNotesPerMeasure";
import { MIDINoteGeneric } from "../createNotes";
declare type NoteMappingMIDIToGraphical = {
    [index: string]: {
        element: SVGElement;
        musicSystem: MusicSystem;
    };
};
declare type NoteMappingGraphicalToMIDI = {
    [index: string]: MIDINoteGeneric;
};
export declare const mapMIDINoteIdToGraphicalNotePerTrack: (graphicalNotesPerBarPerTrack: GraphicalNoteData[][][], repeats: number[][], notes: MIDINoteGeneric[]) => {
    score: number;
    midiToGraphical: NoteMappingMIDIToGraphical;
    graphicalToMidi: NoteMappingGraphicalToMIDI;
}[];
export {};

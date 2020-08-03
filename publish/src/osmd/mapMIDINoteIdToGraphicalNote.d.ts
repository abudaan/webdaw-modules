import { MusicSystem } from "opensheetmusicdisplay";
import { GraphicalNoteData } from "./getGraphicalNotesPerMeasure";
import { MIDINoteGeneric } from "../createNotes";
export declare type NoteMappingMIDIToGraphical = {
    [index: string]: {
        element: SVGElement;
        musicSystem: MusicSystem;
    };
};
export declare type NoteMappingGraphicalToMIDI = {
    [index: string]: MIDINoteGeneric;
};
export declare const mapMIDINoteIdToGraphicalNote: (graphicalNotesPerBar: GraphicalNoteData[][], repeats: number[][], notes: MIDINoteGeneric[]) => {
    midiToGraphical: NoteMappingMIDIToGraphical;
    graphicalToMidi: NoteMappingGraphicalToMIDI;
};

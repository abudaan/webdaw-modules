import { MusicSystem } from "opensheetmusicdisplay";
import { GraphicalNoteData } from "./getGraphicalNotesPerMeasure";
import { MIDINoteGeneric } from "../createNotes";
import { RepeatData } from "../musicxml/parser";
declare type NoteMappingMIDIToGraphical = {
    [index: string]: {
        element: SVGElement;
        musicSystem: MusicSystem;
    };
};
declare type NoteMappingGraphicalToMIDI = {
    [index: string]: MIDINoteGeneric;
};
export declare const mapMIDINoteIdToGraphicalNotePerTrack: (graphicalNotesPerBarPerTrack: GraphicalNoteData[][][], repeats: RepeatData[], notes: MIDINoteGeneric[]) => {
    score: number;
    midiToGraphical: NoteMappingMIDIToGraphical;
    graphicalToMidi: NoteMappingGraphicalToMIDI;
}[];
export {};

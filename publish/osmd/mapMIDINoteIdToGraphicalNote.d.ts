import { MusicSystem } from "opensheetmusicdisplay";
import { GraphicalNoteData } from "./getGraphicalNotesPerBar";
import { MIDINote } from "../types/MIDINote";
export declare type NoteMapping = {
    [index: string]: {
        element: SVGElement;
        musicSystem: MusicSystem;
    };
};
export declare const mapMIDINoteIdToGraphicalNote: (graphicalNotesPerBar: GraphicalNoteData[][], repeats: number[][], notes: MIDINote[]) => NoteMapping;

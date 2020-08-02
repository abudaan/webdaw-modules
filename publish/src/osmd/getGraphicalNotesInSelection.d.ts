import { GraphicalNoteData } from "./getGraphicalNotesPerBar";
export declare type SelectedBarRect = {
    top: number;
    bottom: number;
    left: number;
    right: number;
    measureNumber: number;
};
export declare const hasOverlap: (rect1: SelectedBarRect, rect2: SelectedBarRect) => boolean;
export declare const getGraphicalNotesInSelection: (graphicalNotesPerBar: GraphicalNoteData[][], start: {
    x: number;
    y: number;
}, end: {
    x: number;
    y: number;
}) => SelectedBarRect[];

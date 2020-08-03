import { GraphicalNoteData } from "./getGraphicalNotesPerBar";
export interface Rect {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
export interface SelectedBarRect extends Rect {
    measureNumber: number;
}
export declare const hasOverlap: (rect1: Rect, rect2: Rect) => boolean;
export declare const getGraphicalNotesInSelection: (graphicalNotesPerBar: GraphicalNoteData[][], start: {
    x: number;
    y: number;
}, end: {
    x: number;
    y: number;
}) => SelectedBarRect[];

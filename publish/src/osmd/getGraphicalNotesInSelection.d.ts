import { GraphicalNoteData } from "./getGraphicalNotesPerBar";
export interface Rect {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
export interface BoundingBoxMeasure extends Rect {
    measureNumber: number;
}
export declare const hasOverlap: (rect1: Rect, rect2: Rect) => boolean;
export declare const getMeasureBoundingBoxes: (graphicalNotesPerBar: GraphicalNoteData[][]) => BoundingBoxMeasure[];
export declare const getSelectedMeasureBoundingBoxes: (selectedMeasures: number[], graphicalNotesPerBar: GraphicalNoteData[][]) => BoundingBoxMeasure[];
export declare const getSelectedMeasures: (graphicalNotesPerBar: GraphicalNoteData[][], start: {
    x: number;
    y: number;
}, end: {
    x: number;
    y: number;
}) => {
    barNumbers: number[];
    boundingBoxes: BoundingBoxMeasure[];
};

import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { BoundingBox } from "../types";
/**
 * finds all measures that have a overlap with the selection rectangle
 */
export declare const getSelectedMeasures: (osmd: OpenSheetMusicDisplay, start: {
    x: number;
    y: number;
}, end: {
    x: number;
    y: number;
}, upbeat?: boolean) => {
    barNumbers: number[];
    boundingBoxes: BoundingBox[];
};

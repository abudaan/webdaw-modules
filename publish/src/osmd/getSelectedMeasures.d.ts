import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { BoundingBoxMeasure } from "src/types";
export declare const getSelectedMeasures: (osmd: OpenSheetMusicDisplay, start: {
    x: number;
    y: number;
}, end: {
    x: number;
    y: number;
}) => {
    barNumbers: number[];
    boundingBoxes: BoundingBoxMeasure[];
};

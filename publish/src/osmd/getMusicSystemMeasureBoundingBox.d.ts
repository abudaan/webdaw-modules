import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { BoundingBoxMeasure } from "../types";
/**
 * combines per measure the bounding boxes of all staves
 */
export declare const getMusicSystemMeasureBoundingBoxes: (osmd: OpenSheetMusicDisplay) => BoundingBoxMeasure[];

import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { BoundingBox } from "../types";
declare type Result = {
    bbox: BoundingBox;
    measureNumber: number;
    offset: number;
} | null;
export declare const getMeasureAtPoint: (e: PointerEvent, osmd: OpenSheetMusicDisplay, bboxes?: BoundingBox[] | undefined) => Result;
export {};

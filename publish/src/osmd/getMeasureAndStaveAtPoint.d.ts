import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
declare type Result = {
    staveIndex: number;
    measureIndex: number;
};
export declare const getMeasureAndStaveAtPoint: (e: PointerEvent, osmd: OpenSheetMusicDisplay) => Result;
export {};

import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { PartData } from "../musicxml/parser";
import { BBox } from "../types";
export declare const getTicksAtBar: (parts: PartData[]) => void;
export declare type AnchorData = {
    measureNumber: number;
    startTicks: number;
    endTicks: number;
    bbox: BBox;
    bboxMeasure: BBox;
    yPos: number;
    numPixels: number;
    pixelsPerTick: number;
    ghost: boolean;
};
export declare const getPlayheadAnchorData: (osmd: OpenSheetMusicDisplay, repeats: number[][], ppq?: number) => {
    anchorData: AnchorData[];
    measureStartTicks: number[];
};

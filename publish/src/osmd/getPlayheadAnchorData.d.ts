import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { PartData, RepeatData } from "../musicxml/parser";
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
    numTicks: number;
    pixelsPerTick: number;
    ghost: boolean;
};
export declare const getPlayheadAnchorData: (osmd: OpenSheetMusicDisplay, repeats: RepeatData[], loops: RepeatData[], ppq?: number) => {
    anchorData: AnchorData[];
    measureStartTicks: number[];
    upbeat: boolean;
};

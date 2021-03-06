import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { PartData, RepeatData } from "../musicxml/parser";
import { LoopData } from "./types";
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
    nextAnchor: AnchorData | null;
};
export declare const getPlayheadAnchorData: (osmd: OpenSheetMusicDisplay, repeats: RepeatData[], loops: LoopData[], ppq?: number) => {
    anchorData: AnchorData[];
    measureStartTicks: number[];
    upbeat: boolean;
};

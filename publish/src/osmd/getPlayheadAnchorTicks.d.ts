import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { PartData } from "../musicxml/parser";
import { BBox } from "../types";
export declare const getTicksAtBar: (parts: PartData[]) => void;
export declare type AnchorData = {
    measureNumber: number;
    ticks: number;
    bbox: BBox;
};
export declare const getPlayheadAnchorData: (osmd: OpenSheetMusicDisplay, repeats: number[][], ppq?: number) => AnchorData[];

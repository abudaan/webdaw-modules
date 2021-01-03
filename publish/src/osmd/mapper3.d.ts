import { OpenSheetMusicDisplay, BoundingBox } from "opensheetmusicdisplay";
import { BBox } from "../types";
export declare const getBoundingBoxData: (bbox: BoundingBox) => BBox;
export declare const mapper3: (osmd: OpenSheetMusicDisplay) => {
    x: number;
    y: number;
    width: number;
    height: number;
}[];

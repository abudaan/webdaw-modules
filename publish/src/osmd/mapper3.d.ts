import { OpenSheetMusicDisplay, BoundingBox } from "opensheetmusicdisplay";
export declare type BoundingBox2 = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare const getBoundingBoxData: (bbox: BoundingBox) => BoundingBox2;
export declare const mapper3: (osmd: OpenSheetMusicDisplay) => {
    x: number;
    y: number;
    width: number;
    height: number;
}[];

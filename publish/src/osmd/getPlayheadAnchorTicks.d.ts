import { OpenSheetMusicDisplay } from "opensheetmusicdisplay/build/dist/src";
import { BoundingBox2 } from "./mapper3";
export declare const getPlayheadAnchorTicks: (osmd: OpenSheetMusicDisplay, ppq?: number) => {
    ticks: number;
    bbox: BoundingBox2;
}[];

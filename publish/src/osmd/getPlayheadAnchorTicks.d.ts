import { OpenSheetMusicDisplay } from "opensheetmusicdisplay/build/dist/src";
import { BBox } from "../types";
export declare const getPlayheadAnchorTicks: (osmd: OpenSheetMusicDisplay, ppq?: number) => {
    ticks: number;
    bbox: BBox;
}[];

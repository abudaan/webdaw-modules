import { AnchorData } from "./getPlayheadAnchorData";
import { LoopData } from "./types";
declare type Args = {
    ticks: number;
    millis: number;
    endMillis: number;
    currentAnchor: AnchorData | null;
    anchors: AnchorData[];
    loops: LoopData[];
};
export declare const getCurrentAnchor: ({ ticks, millis, endMillis, currentAnchor, anchors, loops, }: Args) => {
    anchor: AnchorData | null;
    updated: boolean;
};
export {};

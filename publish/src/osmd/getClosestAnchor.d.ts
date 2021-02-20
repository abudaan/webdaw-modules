import { AnchorData } from "./getPlayheadAnchorData";
declare type Args = {
    pointerX: number;
    anchors: AnchorData[];
    currentBarSong: number;
};
export declare const getClosestAnchor: ({ pointerX, currentBarSong, anchors }: Args) => AnchorData | null;
export {};

import { OpenSheetMusicDisplay, BoundingBox } from "opensheetmusicdisplay";
import { BoundingBox as BoundingBox2 } from "../types";
export declare const getChildren: (boundingBox: BoundingBox, result: BoundingBox2[]) => void;
export declare const getVerticalStaffEntryContainers: (e: PointerEvent, osmd: OpenSheetMusicDisplay) => [BoundingBox2[], BoundingBox2[]];

import { GraphicalMeasure, OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { BoundingBox } from "../types";
export declare const calculateBoundingBoxMeasure: (staves?: GraphicalMeasure[] | undefined) => BoundingBox;
export declare const getBoundingBoxMeasure: (osmd: OpenSheetMusicDisplay, measureNumber: number) => BoundingBox;
export declare const getBoundingBoxMeasureAll: (osmd: OpenSheetMusicDisplay) => BoundingBox[];
export declare const getStaveAtPoint: (e: PointerEvent, osmd: OpenSheetMusicDisplay) => void;

export declare type GraphicalMeasureShim = {
    measureNumber: number;
    stave: {
        x: number;
        y: number;
        width: number;
        height: number;
        start_x: number;
        end_x: number;
    };
};
export declare type MusicSystemShim = {
    graphicalMeasures: GraphicalMeasureShim[][];
};

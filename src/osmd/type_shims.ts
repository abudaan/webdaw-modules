// wrappers for existing OSMD types to make certain private members accessible

export type GraphicalMeasureShim = {
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
export type MusicSystemShim = {
  graphicalMeasures: GraphicalMeasureShim[][];
};

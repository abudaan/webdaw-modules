export type MusicSystemShim = {
  graphicalMeasures: {
    measureNumber: number;
    stave: {
      x: number;
      y: number;
      width: number;
      height: number;
      start_x: number;
      end_x: number;
    };
  }[][];
};

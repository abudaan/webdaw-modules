import { GraphicalMeasure, OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import { BoundingBox } from 'webdaw-modules';

// generic util methods, will become part of WebDAW

export const calculateBoundingBoxMeasure = (staves?: GraphicalMeasure[]): BoundingBox => {
  let x: number = 0;
  let y: number = 0;
  let width: number = 0;
  let height: number = 0;
  if (staves) {
    const yPos: number[] = [];
    staves.forEach((s, i) => {
      const stave = (s as any).stave;
      // console.log(i, stave);
      ({ x, y, width, height } = stave);
      yPos.push(y);
    });

    const yMin = Math.min(...yPos);
    const yMax = Math.max(...yPos);
    height += yMax - yMin;
    // console.log(yMax, yMin, height, yMax - yMin + height);
    return {
      x: x,
      y: yMin,
      width,
      height,
      top: yMin,
      bottom: yMin + height,
      left: x,
      right: x + width,
    };
  }
  return { x, y, width, height, top: 0, left: 0, bottom: 0, right: 0 };
};

export const getBoundingBoxMeasure = (
  osmd: OpenSheetMusicDisplay,
  measureNumber: number
): BoundingBox => {
  const staves = osmd.GraphicSheet.MeasureList.find(e => e[0]['measureNumber'] === measureNumber);
  return calculateBoundingBoxMeasure(staves);
};

export const getBoundingBoxMeasureAll = (osmd: OpenSheetMusicDisplay): BoundingBox[] =>
  osmd.GraphicSheet.MeasureList.map(staves => calculateBoundingBoxMeasure(staves));

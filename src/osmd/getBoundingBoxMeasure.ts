import { GraphicalMeasure, OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { hasOverlap } from "../util/2d";
import { BoundingBox } from "../types";

let i = 0;
export const calculateBoundingBoxMeasure = (staves?: GraphicalMeasure[]): BoundingBox => {
  let x: number = 0;
  let y: number = 0;
  let width: number = 0;
  let height: number = 0;
  let measureNumber: number = 0;
  // console.log("staves", ++i, staves);
  if (staves) {
    const yPos: number[] = [];
    const filtered = staves.filter(s => typeof s !== "undefined");
    filtered.forEach((s, i) => {
      const stave = (s as any).stave;
      // console.log(stave, stave.multiRestElement);
      measureNumber = s.MeasureNumber;
      const measure = s as any;
      if (typeof measure.multiRestElement !== "undefined") {
        // console.log("multi-bar", measure.multiRestElement.number_of_measures);
      }
      // console.log(i, stave);
      ({ x, y, width, height } = stave);
      yPos.push(y);
    });

    const yMin = Math.min(...yPos);
    const yMax = Math.max(...yPos);
    height = (height / 5) * 4;
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
      measureNumber,
    };
  }
  return { x, y, width, height, top: 0, left: 0, bottom: 0, right: 0 };
};

export const getBoundingBoxMeasure = (osmd: OpenSheetMusicDisplay, measureNumber: number): BoundingBox => {
  const staves = osmd.GraphicSheet.MeasureList.find(e => e[0]["measureNumber"] === measureNumber);
  return calculateBoundingBoxMeasure(staves);
};

export const getBoundingBoxMeasureAll = (osmd: OpenSheetMusicDisplay): BoundingBox[] =>
  osmd.GraphicSheet.MeasureList.map(staves => calculateBoundingBoxMeasure(staves));

/*
export const getStaveAtPoint = (e: PointerEvent, osmd: OpenSheetMusicDisplay) => {
  const offsetX = osmd["container"].offsetLeft;
  const offsetY = osmd["container"].offsetTop;
  const scrollPosX = window.scrollX;
  const scrollPosY = window.scrollY;
  // const x = e.clientX + offsetX + scrollPosX;
  // const y = e.clientY + offsetY + scrollPosY;
  const x = e.clientX - offsetX + scrollPosX;
  const y = e.clientY - offsetY + scrollPosY;
  // console.log(offsetY, scrollPosY, x, y);

  const refClick = {
    top: y,
    bottom: y + 2,
    left: x,
    right: x + 2,
    x,
    y,
    width: 2,
    height: 2,
  };

  console.log(osmd);

  osmd.GraphicSheet.MeasureList.map(staves => {
    staves.forEach((stave, i) => {
      const {
        stave: { x, y, width, height },
      } = stave as any;
      const refStave = {
        x,
        y,
        width,
        height,
        left: x,
        right: x + width,
        top: y,
        bottom: y + height,
      };
      if (hasOverlap(refClick, refStave)) {
        // console.log("stave", i, refClick.x, refClick.y, x, y, width, height);
        console.log("hit", i, refStave, refClick);
        // } else {
        //   console.log("no hit", i, refStave, refClick);
      }
    });
  });
};
*/

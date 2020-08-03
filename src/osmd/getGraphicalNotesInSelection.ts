import { uniq } from "ramda";
import { GraphicalNoteData } from "./getGraphicalNotesPerBar";
import { MusicSystemShim } from "./MusicSystemShim";

// https://stackoverflow.com/questions/12066870/how-to-check-if-an-element-is-overlapping-other-elements
export interface Rect {
  top: number;
  bottom: number;
  left: number;
  right: number;
}
export interface SelectedBarRect extends Rect {
  measureNumber: number;
}
export const hasOverlap = (rect1: Rect, rect2: Rect) => {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
};

export const getGraphicalNotesInSelection = (
  graphicalNotesPerBar: GraphicalNoteData[][],
  start: { x: number; y: number },
  end: { x: number; y: number }
): SelectedBarRect[] => {
  const selectedBars: number[] = [];
  const rect2: SelectedBarRect = {
    left: start.x,
    top: start.y,
    right: end.x,
    bottom: end.y,
    measureNumber: -1,
  };

  const firstNote = graphicalNotesPerBar[0][0];
  const system = firstNote.parentMusicSystem;
  const graphicalMeasures = ((system as unknown) as MusicSystemShim).graphicalMeasures;

  const measureRectsPerSystem: SelectedBarRect[][] = [];
  // measureRectsPerSystem[i] = [];

  graphicalMeasures.forEach((measure, i) => {
    measureRectsPerSystem[i] = [];
    measure.forEach((staffLine, j) => {
      const {
        stave: { x, y, width, height },
        measureNumber,
      } = staffLine;

      const rect1 = {
        measureNumber,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
      };

      let inArray: boolean = false;
      for (let k = 0; k < measureRectsPerSystem[i].length; k++) {
        const val = measureRectsPerSystem[i][k];
        if (val.top === rect1.top) {
          inArray = true;
        }
      }
      if (inArray === false) {
        measureRectsPerSystem[i].push(rect1);
      }
      // console.log("---", measureNumber);
      // console.log("sel", start.x, start.y, end.x, end.y);
      // console.log("bar", Math.round(x), Math.round(y), Math.round(maxX), Math.round(maxY));
      if (hasOverlap(rect1, rect2)) {
        selectedBars.push(measureNumber);
      }
    });
  });
  const u = uniq(selectedBars);
  // console.log(u);
  const a: number[] = [];
  // add missing bar numbers
  for (let i = 0; i < u.length; i++) {
    let value = u[i];
    a.push(value);
    if (i + 1 < u.length) {
      let next = u[i + 1];
      // console.log(value, next);
      while (next - value > 1) {
        // console.log(value);
        a.push(++value);
      }
    }
  }

  // console.log(a.sort());
  // console.log(measureRectsPerSystem);

  return a.map(measureNumber => {
    const staffLines = measureRectsPerSystem[measureNumber - 1];
    const topValues = staffLines.map(s => s.top);
    const bottomValues = staffLines.map(s => s.bottom);
    const leftValues = staffLines.map(s => s.left);
    const rightValues = staffLines.map(s => s.right);
    const heightValues = staffLines.map(s => s.top - s.bottom);
    const widthValues = staffLines.map(s => s.right - s.left);

    return {
      measureNumber,
      top: Math.min(...topValues),
      bottom: Math.max(...bottomValues),
      left: Math.min(...leftValues),
      right: Math.max(...rightValues),
    };
  });
};

import { uniq } from "ramda";
import { GraphicalNoteData } from "./getGraphicalNotesPerBar";
import { MusicSystemShim } from "./MusicSystemShim";

// https://stackoverflow.com/questions/12066870/how-to-check-if-an-element-is-overlapping-other-elements
export type SelectedBarRect = {
  top: number;
  bottom: number;
  left: number;
  right: number;
  measureNumber: number;
};
export const hasOverlap = (rect1: SelectedBarRect, rect2: SelectedBarRect) => {
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
  const measureRects: { [id: number]: SelectedBarRect } = {};
  graphicalNotesPerBar.forEach((bar, i) => {
    bar.forEach((note, j) => {
      const system = note.parentMusicSystem;
      const measures = ((system as unknown) as MusicSystemShim).graphicalMeasures;
      measures.forEach(m => {
        m.forEach(m1 => {
          const {
            stave: { x, y, width, height },
            measureNumber,
          } = m1;
          const rect1 = {
            measureNumber,
            top: y,
            right: x + width,
            bottom: y + height,
            left: x,
          };
          measureRects[measureNumber] = rect1;
          // console.log("---", measureNumber);
          // console.log("sel", start.x, start.y, end.x, end.y);
          // console.log("bar", Math.round(x), Math.round(y), Math.round(maxX), Math.round(maxY));
          if (hasOverlap(rect1, rect2)) {
            selectedBars.push(measureNumber);
          }
        });
      });
    });
  });
  const u = uniq(selectedBars);
  // console.log(u);
  const a = [];
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
  return a.map(bar => measureRects[bar]);
};

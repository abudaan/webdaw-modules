import { GraphicalNoteData } from "./getGraphicalNotesPerBar";
import { MusicSystemShim } from "./MusicSystemShim";

// https://stackoverflow.com/questions/12066870/how-to-check-if-an-element-is-overlapping-other-elements
export interface Rect {
  top: number;
  bottom: number;
  left: number;
  right: number;
}
export interface BoundingBoxMeasure extends Rect {
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

export const getMeasureBoundingBoxes = (
  graphicalNotesPerBar: GraphicalNoteData[][]
): BoundingBoxMeasure[] => {
  const firstNote = graphicalNotesPerBar[0][0];
  const system = firstNote.parentMusicSystem;
  const graphicalMeasures = ((system as unknown) as MusicSystemShim).graphicalMeasures;
  const boundingBoxes: BoundingBoxMeasure[][] = [];

  graphicalMeasures.forEach((measure, i) => {
    boundingBoxes[i] = [];
    measure.forEach((staffLine, j) => {
      const {
        stave: { x, y, width, height },
        measureNumber,
      } = staffLine;

      const bbox = {
        measureNumber,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
      };

      let inArray: boolean = false;
      for (let k = 0; k < boundingBoxes[i].length; k++) {
        const val = boundingBoxes[i][k];
        if (val.top === bbox.top) {
          inArray = true;
        }
      }
      if (inArray === false) {
        boundingBoxes[i].push(bbox);
      }
    });
  });

  const result: BoundingBoxMeasure[] = [];
  for (let i = 0; i < boundingBoxes.length; i++) {
    const staffLines = boundingBoxes[i];
    const topValues = staffLines.map(s => s.top);
    const bottomValues = staffLines.map(s => s.bottom);
    const leftValues = staffLines.map(s => s.left);
    const rightValues = staffLines.map(s => s.right);
    const heightValues = staffLines.map(s => s.top - s.bottom);
    const widthValues = staffLines.map(s => s.right - s.left);

    const t = {
      measureNumber: i + 1,
      top: Math.min(...topValues),
      bottom: Math.max(...bottomValues),
      left: Math.min(...leftValues),
      right: Math.max(...rightValues),
    };
    // console.log("---");
    // console.log(topValues, bottomValues);
    // console.log(leftValues, rightValues);
    // console.log(t);
    result.push(t);
  }
  return result;
};

export const getSelectedMeasureBoundingBoxes = (
  selectedMeasures: number[],
  graphicalNotesPerBar: GraphicalNoteData[][]
): BoundingBoxMeasure[] => {
  const boundingBoxes = getMeasureBoundingBoxes(graphicalNotesPerBar);
  return selectedMeasures.map(num => boundingBoxes[num - 1]);
};

export const getSelectedMeasures = (
  graphicalNotesPerBar: GraphicalNoteData[][],
  start: { x: number; y: number },
  end: { x: number; y: number }
): { barNumbers: number[]; boundingBoxes: BoundingBoxMeasure[] } => {
  const boundingBoxes = getMeasureBoundingBoxes(graphicalNotesPerBar);
  const selectedBars: number[] = [];
  const selectedBoundingBoxes: BoundingBoxMeasure[] = [];
  const selection: Rect = {
    left: start.x,
    top: start.y,
    right: end.x,
    bottom: end.y,
  };
  boundingBoxes.forEach(bbox => {
    if (hasOverlap(bbox, selection)) {
      selectedBars.push(bbox.measureNumber);
      selectedBoundingBoxes.push(bbox);
    }
  });
  // console.log(selectedBars);
  const barNumbers: number[] = [];
  // add missing bar numbers
  for (let i = 0; i < selectedBars.length; i++) {
    let value = selectedBars[i];
    barNumbers.push(value);
    if (i + 1 < selectedBars.length) {
      let next = selectedBars[i + 1];
      // console.log(value, next);
      while (next - value > 1) {
        // console.log(value);
        barNumbers.push(++value);
      }
    }
  }

  return {
    barNumbers,
    boundingBoxes: selectedBoundingBoxes,
  };
};

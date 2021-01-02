import {
  OpenSheetMusicDisplay,
  GraphicalMeasure,
  BoundingBox,
  VexFlowMusicSheetDrawer,
  VerticalGraphicalStaffEntryContainer,
  GraphicalStaffEntry,
  // PointF2D,
} from "opensheetmusicdisplay";

export type BoundingBox2 = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const getBoundingBoxData = (bbox: BoundingBox): BoundingBox2 => {
  let {
    AbsolutePosition: { x, y },
    BorderTop,
    BorderBottom,
    BorderLeft,
    BorderRight,
    // boundingRectangle: { x, y, width, height },
  } = bbox;
  // xAbs *= 10;
  // yAbs *= 10;
  // x *= 10;
  // y *= 10;
  // width *= 10;
  // height *= 10;

  // const topLeft = (drawer as any).applyScreenTransformation(x + BorderLeft, y + BorderTop);
  // const bottomRight = (drawer as any).applyScreenTransformation(
  //   x + BorderRight,
  //   y + BorderBottom
  // );
  const topLeft = { x: (x + BorderLeft) * 10, y: (y + BorderTop) * 10 };
  const bottomRight = { x: (x + BorderRight) * 10, y: (y + BorderBottom) * 10 };
  return {
    x: topLeft.x,
    y: topLeft.y,
    width: bottomRight.x - topLeft.x,
    height: bottomRight.y - topLeft.y,
  };
};

const getBoundingBox = (
  boxes: BoundingBox[],
  result: BoundingBox2[],
  drawer: VexFlowMusicSheetDrawer
): void => {
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    // console.log("SYMBOL", (box as any).isSymbol);
    // console.log("CHILDREN", box.ChildElements.length);
    if ((box as any).isSymbol === true) {
      result.push(getBoundingBoxData(box));
    }

    if (box.ChildElements.length) {
      getBoundingBox(box.ChildElements, result, drawer);
    }
  }
};

export const mapper3 = (osmd: OpenSheetMusicDisplay) => {
  const bboxes: { x: number; y: number; width: number; height: number }[] = [];
  osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(
    (container: VerticalGraphicalStaffEntryContainer) => {
      (container as any).staffEntries.forEach((staffEntry: GraphicalStaffEntry) => {
        bboxes.push(getBoundingBoxData((staffEntry as any).boundingBox));
      });
    }
  );
  return bboxes;
};

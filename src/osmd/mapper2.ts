import {
  OpenSheetMusicDisplay,
  GraphicalMeasure,
  BoundingBox,
  VexFlowMusicSheetDrawer,
  // PointF2D,
} from "opensheetmusicdisplay";

type BoundingBox2 = {
  x: number;
  y: number;
  width: number;
  height: number;
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
      let {
        AbsolutePosition: { x, y },
        BorderTop,
        BorderBottom,
        BorderLeft,
        BorderRight,
        // boundingRectangle: { x, y, width, height },
      } = box;
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
      result.push({
        x: topLeft.x,
        y: topLeft.y,
        width: bottomRight.x - topLeft.x,
        height: bottomRight.y - topLeft.y,
      });
    }

    if (box.ChildElements.length) {
      getBoundingBox(box.ChildElements, result, drawer);
    }
  }
};

export const mapper2 = (osmd: OpenSheetMusicDisplay) => {
  const bboxes: { x: number; y: number; width: number; height: number }[] = [];

  osmd.GraphicSheet.MeasureList.forEach((staffList: GraphicalMeasure[]) => {
    staffList.forEach((measure: GraphicalMeasure) => {
      getBoundingBox([(measure as any).boundingBox], bboxes, osmd.Drawer);
    });
  });
  return bboxes;
};

export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  left: number;
  bottom: number;
  right: number;
  measureNumber?: number;
}

// export interface BoundingBoxMeasure {
//   x: number;
//   y: number;
//   width: number;
//   height: number;
//   top: number;
//   left: number;
//   bottom: number;
//   right: number;
//   measureNumber: number;
// }
export interface BoundingBoxMeasure extends BoundingBox {
  measureNumber: number;
}

export type BBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

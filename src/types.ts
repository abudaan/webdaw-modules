export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export interface BoundingBoxMeasure extends BoundingBox {
  measureNumber: number;
}

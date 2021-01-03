import { BBox } from "webdaw-modules";
import { getOSMD } from "./scoreWrapper";
import { store } from "./store";
import { createDiv } from "./util";

const divPlayhead = document.getElementById("playhead") as HTMLDivElement;

const draw = (dim: { x: number; y: number; width: number; height: number }) => {
  const { x, y, width, height } = dim;
  divPlayhead.style.top = `${y}px`;
  divPlayhead.style.left = `${x - width / 2}px`;
  divPlayhead.style.width = `${width}px`; //`${playhead.width}px`;
  divPlayhead.style.height = `${height}px`;
};

const setupDebug = () => {
  const osmd = getOSMD();
  const offsetX = osmd["container"].offsetLeft;
  const offsetY = osmd["container"].offsetTop;
  const scrollPosX = window.scrollX;
  const scrollPosY = window.scrollY;
  const container = document.createElement("div");
  container.id = "container-staffentries";
  document.body.appendChild(container);
  return {
    drawDebug: (bboxes: BBox[]) => {
      while (container.childNodes.length > 0) {
        if (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
      bboxes.forEach((bbox) => {
        createDiv({ bbox, offsetX, offsetY, scrollPosX, scrollPosY, parent: container });
      });
    },
  };
};

export const setup = (debug: boolean = true) => {
  // setup debug
  let drawDebug: (bboxes: BBox[]) => void;
  if (debug) {
    ({ drawDebug } = setupDebug());
  }

  const unsub1 = store.subscribe(
    (x: number) => {
      divPlayhead.style.left = `${x}px`;
    },
    (state) => state.playhead.x
  );

  const unsub2 = store.subscribe(
    (y: number) => {
      divPlayhead.style.top = `${y}px`;
    },
    (state) => state.playhead.y
  );

  const unsub3 = store.subscribe(
    (height: number) => {
      divPlayhead.style.height = `${height}px`;
    },
    (state) => state.playhead.height
  );

  const unsub4 = store.subscribe(
    () => {
      const { playhead } = store.getState();
      draw(playhead);
      if (debug) {
        drawDebug(store.getState().playheadAnchors.map((d) => d.bbox));
      }
    },
    (state) => state.loaded
  );

  if (debug) {
    const unsub5 = store.subscribe(
      () => {
        drawDebug(store.getState().playheadAnchors.map((d) => d.bbox));
      },
      (state) => state.playheadAnchors
    );
  }

  return {
    cleanup: () => {
      unsub1();
      unsub2();
      unsub3();
      unsub4();
    },
  };
};

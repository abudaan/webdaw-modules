import { AnchorData, BBox, getPlayheadAnchorData } from "webdaw-modules";
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
    drawDebug: (anchors: AnchorData[]) => {
      const bboxes = anchors.map((d) => {
        const { bbox } = d;
        return {
          ...bbox,
          width: d.numPixels,
        };
      });

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
  let drawDebug: (anchors: AnchorData[]) => void;
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
      const { playhead, playheadAnchors } = store.getState();
      playhead.x = playheadAnchors[0].bbox.x;
      draw(playhead);
      if (debug) {
        drawDebug(store.getState().playheadAnchors);
      }
    },
    (state) => state.loaded
  );

  const unsub4a = store.subscribe(
    () => {
      const { playheadAnchors } = store.getState();
      if (debug) {
        drawDebug(playheadAnchors);
      }
    },
    (state) => state.selectedMeasures
  );

  let unsub5 = () => {};
  if (debug) {
    unsub5 = store.subscribe(
      (playheadAnchors: AnchorData[]) => {
        drawDebug(playheadAnchors);
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
      unsub4a();
      unsub5();
    },
  };
};
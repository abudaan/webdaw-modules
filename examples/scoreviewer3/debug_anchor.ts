import { AnchorData } from "webdaw-modules";
import { store } from "./store";
import { getOSMD } from "./scoreWrapper";
import { createDiv } from "./util";

const drawAllAnchors = (container: HTMLDivElement) => {
  const scrollPosX = window.scrollX;
  const scrollPosY = window.scrollY;
  const {
    playheadAnchors,
    offset: { x: offsetX, y: offsetY },
  } = store.getState();

  const bboxes = playheadAnchors.map((d) => {
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
};

export const setup = () => {
  // draw all anchors
  const osmd = getOSMD();
  const containerAllAnchors = document.createElement("div");
  containerAllAnchors.id = "all-anchors";
  document.body.appendChild(containerAllAnchors);

  // draw the anchor that are currently active (playhead is in this anchor)
  const divCurrentAnchor = document.createElement("div");
  divCurrentAnchor.style.position = "absolute";
  document.body.appendChild(divCurrentAnchor);

  const unsub1 = store.subscribe(
    () => {
      drawAllAnchors(containerAllAnchors);
    },
    (state) => state.loaded
  );

  const unsub2 = store.subscribe(
    () => {
      drawAllAnchors(containerAllAnchors);
    },
    (state) => state.width
  );

  const unsub3 = store.subscribe(
    () => {
      drawAllAnchors(containerAllAnchors);
    },
    (state) => state.playheadAnchors
  );

  const unsub4 = store.subscribe(
    (anchor: AnchorData | null) => {
      if (anchor !== null) {
        const {
          offset: { x: offsetX, y: offsetY },
        } = store.getState();
        divCurrentAnchor.style.left = `${anchor.bbox.x + offsetX}px`;
        divCurrentAnchor.style.top = `${anchor.bbox.y + offsetY}px`;
        divCurrentAnchor.style.width = `${anchor.bbox.width}px`;
        divCurrentAnchor.style.height = `${anchor.bbox.height}px`;
        divCurrentAnchor.style.background = "rgba(0,255,0,0.5)";
      }
    },
    (state) => state.currentPlayheadAnchor
  );

  return {
    cleanup: () => {
      unsub1();
      unsub2();
      unsub3();
      unsub4();
    },
  };
};

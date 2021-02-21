import { AnchorData } from "webdaw-modules";
import { store } from "./store";
import { getOSMD } from "./scoreWrapper";
import { createDiv } from "./util";

const drawAllAnchors = (container: HTMLDivElement) => {
  const scrollPosX = 0; //window.scrollX;
  const scrollPosY = 0; // window.scrollY;
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

  const unsubscribes: (() => void)[] = [];

  unsubscribes[unsubscribes.length] = store.subscribe(
    () => {
      drawAllAnchors(containerAllAnchors);
    },
    (state) => state.loaded
  );

  unsubscribes[unsubscribes.length] = store.subscribe(
    () => {
      drawAllAnchors(containerAllAnchors);
    },
    (state) => state.width
  );

  unsubscribes[unsubscribes.length] = store.subscribe(
    () => {
      drawAllAnchors(containerAllAnchors);
    },
    (state) => state.playheadAnchors
  );

  // subs[subs.length] = store.subscribe(
  //   () => {
  //     drawAllAnchors(containerAllAnchors);
  //   },
  //   (state) => state.selectedMeasures
  // );

  unsubscribes[unsubscribes.length] = store.subscribe(
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

  // const subscribes[subscribes.length] = store.subscribe(
  //   (ticks: number[]) => {
  //     ticks.forEach((t, i) => {
  //       const hb = song.getPosition("barsbeats", i + 1, 1, 1, 0).ticks;
  //       console.log(i + 1, t, hb, hb === t);
  //     });
  //   },
  //   (state) => state.measureStartTicks
  // );

  // const subscribes[subscribes.length] = store.subscribe(
  //   (playheadAnchors: AnchorData[]) => {
  //     playheadAnchors.forEach((a, i) => {
  //       console.log(a.measureNumber, a.startTicks);
  //     });
  //   },
  //   (state) => state.playheadAnchors
  // );

  return {
    cleanup: () => {
      unsubscribes.forEach((sub) => {
        sub();
      });
    },
  };
};

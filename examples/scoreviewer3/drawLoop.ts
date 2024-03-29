import {
  BoundingBox,
  getBoundingBoxesOfSelectedMeasures,
  getSelectedMeasures,
} from "webdaw-modules";
import { getOSMD } from "./scoreWrapper";
import { getSong } from "./songWrapper";
import { store } from "./store";

let div: HTMLDivElement;

const song = getSong();

// draw rectangles on the score to indicate the set loop
const drawLoop = (boundingBoxes: BoundingBox[], offsetX: number, offsetY: number) => {
  // div.style.display = 'none';
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  if (boundingBoxes.length > 0) {
    div.style.display = "block";
    boundingBoxes.forEach((bbox) => {
      const d = document.createElement("div");
      d.className = "bar";
      d.style.left = `${bbox.left + offsetX}px`;
      d.style.top = `${bbox.top + offsetY}px`;
      d.style.height = `${bbox.bottom - bbox.top}px`;
      d.style.width = `${bbox.right - bbox.left}px`;
      div.appendChild(d);
    });
  }
};

export const setup = () => {
  div = document.createElement("div");
  div.id = "selected-bars";
  document.body.appendChild(div);
  div.addEventListener("mousedown", (e) => {
    if (e.altKey) {
      store.setState({ selection: [0, 0, 0, 0] });
    }
  });

  const unsubscribes: (() => void)[] = [];

  unsubscribes[unsubscribes.length] = store.subscribe(
    (selection: number[]) => {
      const {
        offset: { x: offsetX, y: offsetY },
        scrollPos: { x: scrollPosX, y: scrollPosY },
        upbeat,
      } = store.getState();
      const { barNumbers, boundingBoxes } = getSelectedMeasures(
        getOSMD(),
        {
          x: selection[0] + scrollPosX - offsetX,
          y: selection[1] + scrollPosY - offsetY,
        },
        {
          x: selection[2] + scrollPosX - offsetX,
          y: selection[3] + scrollPosY - offsetY,
        },
        upbeat
      );
      drawLoop(boundingBoxes, offsetX, offsetY);
      store.setState({ selectedMeasures: barNumbers });
    },
    (state) => state.selection
  );

  unsubscribes[unsubscribes.length] = store.subscribe(
    () => {
      const {
        selectedMeasures,
        offset: { x: offsetX, y: offsetY },
      } = store.getState();
      const boundingBoxes = getBoundingBoxesOfSelectedMeasures(selectedMeasures, getOSMD());
      drawLoop(boundingBoxes, offsetX, offsetY);
    },
    (state) => state.width
  );

  return {
    cleanup: () => {
      unsubscribes.forEach((unsubscribe) => {
        unsubscribe();
      });
    },
  };
};

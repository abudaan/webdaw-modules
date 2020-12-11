import {
  BoundingBoxMeasure,
  getBoundingBoxesOfSelectedMeasures,
  getSelectedMeasures,
} from 'webdaw-modules';
import { getOSMD } from './scoreWrapper';
import { store } from './store';

let div: HTMLDivElement;

// draw rectangles on the score to indicate the set loop
const drawLoop = (boundingBoxes: BoundingBoxMeasure[], offsetX: number, offsetY: number) => {
  // div.style.display = 'none';
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  if (boundingBoxes.length > 0) {
    div.style.display = 'block';
    boundingBoxes.forEach(bbox => {
      const d = document.createElement('div');
      d.className = 'bar';
      d.style.left = `${bbox.left + offsetX}px`;
      d.style.top = `${bbox.top + offsetY}px`;
      d.style.height = `${bbox.bottom - bbox.top}px`;
      d.style.width = `${bbox.right - bbox.left}px`;
      div.appendChild(d);
    });
  }
};

export const setup = () => {
  div = document.createElement('div');
  div.id = 'selected-bars';
  document.body.appendChild(div);
  div.addEventListener('mousedown', e => {
    if (e.shiftKey) {
      store.setState({ selection: [0, 0, 0, 0] });
    }
  });

  const unsub1 = store.subscribe(
    (selection: number[]) => {
      const {
        offset: { x: offsetX, y: offsetY },
        scrollPos: { x: scrollPosX, y: scrollPosY },
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
        }
      );
      // console.log(barNumbers);
      store.setState({ selectedMeasures: barNumbers });

      drawLoop(boundingBoxes, offsetX, offsetY);
    },
    state => state.selection
  );

  const unsub2 = store.subscribe(
    () => {
      const {
        selectedMeasures,
        offset: { x: offsetX, y: offsetY },
      } = store.getState();
      const boundingBoxes = getBoundingBoxesOfSelectedMeasures(selectedMeasures, getOSMD());
      drawLoop(boundingBoxes, offsetX, offsetY);
    },
    state => state.width
  );

  return {
    cleanup: () => {
      unsub1();
      unsub2();
    },
  };
};

import { store } from './store';

let div: HTMLDivElement;
let scrollPosX: number;
let scrollPosY: number;
const selectionStartPoint: { x: number; y: number } = { x: -1, y: -1 };
const selectionEndPoint: { x: number; y: number } = { x: -1, y: -1 };

const drawSelect = (e: MouseEvent) => {
  div.style.left = `${selectionStartPoint.x + scrollPosX}px`;
  div.style.top = `${selectionStartPoint.y + scrollPosY}px`;
  div.style.width = `${e.clientX - selectionStartPoint.x}px`;
  div.style.height = `${e.clientY - selectionStartPoint.y}px`;
  selectionEndPoint.x = e.clientX;
  selectionEndPoint.y = e.clientY;
};

const stopSelect = (e: MouseEvent) => {
  // document.removeEventListener('mousedown', startSelect);
  document.removeEventListener('mouseup', stopSelect);
  document.removeEventListener('mousemove', drawSelect);
  div.style.display = 'none';
  div.style.left = '0px';
  div.style.top = '0px';
  div.style.width = '0px';
  div.style.height = '0px';
  store.setState({
    selection: [
      selectionStartPoint.x,
      selectionStartPoint.y,
      selectionEndPoint.x,
      selectionEndPoint.y,
    ],
  });
};

export const startSelect = (e: MouseEvent) => {
  selectionStartPoint.x = e.clientX;
  selectionStartPoint.y = e.clientY;
  div.style.display = 'block';
  document.addEventListener('mouseup', stopSelect);
  document.addEventListener('mousemove', drawSelect);
};

export const setup = () => {
  div = document.createElement('div');
  div.id = 'selection';
  document.body.appendChild(div);

  ({
    scrollPos: { x: scrollPosX, y: scrollPosY },
  } = store.getState());

  const unsub1 = store.subscribe(
    (pos: { x: number; y: number }) => {
      ({ x: scrollPosX, y: scrollPosY } = pos);
    },
    state => state.scrollPos
  );

  return {
    cleanup: () => {
      unsub1();
    },
  };
};

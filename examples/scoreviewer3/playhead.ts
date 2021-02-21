import { store } from "./store";

const divPlayhead = document.getElementById("playhead") as HTMLDivElement;

const draw = (dim: { x: number; y: number; width: number; height: number }) => {
  const { x, y, width, height } = dim;
  divPlayhead.style.top = `${y}px`;
  divPlayhead.style.left = `${x - width / 2}px`;
  divPlayhead.style.width = `${width}px`; //`${playhead.width}px`;
  divPlayhead.style.height = `${height}px`;
};

export const setup = () => {
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
    },
    (state) => state.loaded
  );

  // const unsub5 = store.subscribe(
  //   () => {
  //     const { currentPlayheadAnchor, playhead } = store.getState();
  //     if (currentPlayheadAnchor) {
  //       playhead.x = currentPlayheadAnchor.bbox.x;
  //     }
  //     draw(playhead);
  //   },
  //   (state) => state.width
  // );

  return {
    cleanup: () => {
      unsub1();
      unsub2();
      unsub3();
      unsub4();
      // unsub5();
    },
  };
};

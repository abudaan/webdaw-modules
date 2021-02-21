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
  const unsubscribes: (() => void)[] = [];

  unsubscribes[unsubscribes.length] = store.subscribe(
    (x: number) => {
      divPlayhead.style.left = `${x}px`;
    },
    (state) => state.playhead.x
  );

  unsubscribes[unsubscribes.length] = store.subscribe(
    (y: number) => {
      divPlayhead.style.top = `${y}px`;
    },
    (state) => state.playhead.y
  );

  unsubscribes[unsubscribes.length] = store.subscribe(
    (height: number) => {
      divPlayhead.style.height = `${height}px`;
    },
    (state) => state.playhead.height
  );

  unsubscribes[unsubscribes.length] = store.subscribe(
    () => {
      const { playhead, playheadAnchors } = store.getState();
      playhead.x = playheadAnchors[0].bbox.x;
      draw(playhead);
    },
    (state) => state.loaded
  );

  // subscribes[subscribes.length] = store.subscribe(
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
      unsubscribes.forEach((sub) => {
        sub();
      });
    },
  };
};

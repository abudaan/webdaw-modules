import { store } from "./store";

export const setup = () => {
  const divContainer = document.getElementById("controls") as HTMLDivElement;
  const songBar = document.createElement("div");
  songBar.style.fontSize = "20px";
  divContainer.appendChild(songBar);

  const scoreBar = document.createElement("div");
  scoreBar.style.fontSize = "20px";
  divContainer.appendChild(scoreBar);

  const hasRepeated = document.createElement("div");
  hasRepeated.style.fontSize = "20px";
  divContainer.appendChild(hasRepeated);

  const unsub1 = store.subscribe(
    (currentBarSong) => {
      songBar.innerHTML = `${currentBarSong}`;
      scoreBar.innerHTML = `${store.getState().currentBarScore}`;
    },
    (state) => state.currentBarSong
  );

  const unsub3 = store.subscribe(
    () => {
      songBar.innerHTML = `${store.getState().currentBarSong}`;
      scoreBar.innerHTML = `${store.getState().currentBarScore}`;
    },
    (state) => state.loaded
  );

  return {
    cleanup: () => {
      unsub1();
      unsub3();
    },
  };
};

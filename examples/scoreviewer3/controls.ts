import { localStopSong } from "./songWrapper";
import { store } from "./store";

const divContainer = document.getElementById("controls") as HTMLDivElement;
const btnPlay = document.getElementById("play") as HTMLButtonElement;
const btnStop = document.getElementById("stop") as HTMLButtonElement;

export const setup = () => {
  btnPlay.disabled = true;
  btnStop.disabled = true;

  const unsub1 = store.subscribe(
    (songState) => {
      if (songState === "play") {
        btnPlay.innerHTML = "pause";
      } else if (songState === "pause") {
        btnPlay.innerHTML = "play";
      } else if (songState === "stop") {
        btnPlay.innerHTML = "play";
      }
    },
    (state) => state.songState
  );

  const unsub2 = store.subscribe(
    (loaded) => {
      if (loaded) {
        btnPlay.disabled = false;
        btnStop.disabled = false;
        const { repeats } = store.getState();
        repeats.forEach((repeat, index) => {
          const cb = document.createElement("input");
          cb.setAttribute("type", "checkbox");
          cb.checked = true;
          cb.addEventListener("click", () => {
            const clone = [...repeats];
            clone[index] = [repeat[0], repeat[1], cb.checked];
            store.setState({ repeats: clone });
          });
          const span = document.createElement("span");
          span.innerHTML = `${repeat[0]} - ${repeat[1]}`;
          const div = document.createElement("div");
          div.appendChild(span);
          div.appendChild(cb);

          divContainer.appendChild(div);
        });
      }
    },
    (state) => state.loaded
  );

  btnPlay.addEventListener("click", () => {
    const state = store.getState().songState;
    if (state === "play") {
      store.setState({ songState: "pause" });
    } else {
      store.setState({ songState: "play" });
    }
  });

  btnStop.addEventListener("click", () => {
    // const state = store.getState().songState;
    // if (state === 'play') {
    //   store.setState({ songState: 'stop' });
    // }
    localStopSong();
  });

  return {
    cleanup: () => {
      unsub1();
      unsub2();
    },
  };
};

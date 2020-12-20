import { store } from './store';

export const setup = () => {
  const divContainer = document.getElementById('controls') as HTMLDivElement;
  const songBar = document.createElement('div');
  songBar.style.fontSize = '20px';
  divContainer.appendChild(songBar);

  const scoreBar = document.createElement('div');
  scoreBar.style.fontSize = '20px';
  divContainer.appendChild(scoreBar);

  const hasRepeated = document.createElement('div');
  hasRepeated.style.fontSize = '20px';
  divContainer.appendChild(hasRepeated);

  const getRepeated = () => {
    const hasRepeated = store.getState().hasRepeated;
    const repeats = store.getState().repeats;
    const s = repeats.map((r, i) => {
      return `${r[0]} - ${r[1]}: ${hasRepeated[i] || false}`;
    });
    return s.join('<br>');
  };

  const unsub1 = store.subscribe(
    currentBarSong => {
      songBar.innerHTML = `${currentBarSong}`;
      scoreBar.innerHTML = `${store.getState().currentBarScore}`;
      hasRepeated.innerHTML = `${getRepeated()}`;
    },
    state => state.currentBarSong
  );

  const unsub2 = store.subscribe(
    () => {
      hasRepeated.innerHTML = `${getRepeated()}`;
    },
    state => state.hasRepeated
  );

  const unsub3 = store.subscribe(
    () => {
      songBar.innerHTML = `${store.getState().currentBarSong}`;
      scoreBar.innerHTML = `${store.getState().currentBarScore}`;
      hasRepeated.innerHTML = `${getRepeated()}`;
    },
    state => state.loaded
  );

  return {
    cleanup: () => {
      unsub1();
      unsub2();
      unsub3();
    },
  };
};

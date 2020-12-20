import { stopSong } from './songWrapper';
import { store } from './store';

const btnPlay = document.getElementById('play') as HTMLButtonElement;
const btnStop = document.getElementById('stop') as HTMLButtonElement;
const btnReset = document.getElementById('reset') as HTMLButtonElement;

export const setup = () => {
  btnPlay.disabled = true;
  btnStop.disabled = true;

  const unsub1 = store.subscribe(
    songState => {
      if (songState === 'play') {
        btnPlay.innerHTML = 'pause';
      } else if (songState === 'pause') {
        btnPlay.innerHTML = 'play';
      } else if (songState === 'stop') {
        btnPlay.innerHTML = 'play';
      }
    },
    state => state.songState
  );

  const unsub2 = store.subscribe(
    loaded => {
      if (loaded) {
        btnPlay.disabled = false;
        btnStop.disabled = false;
        btnReset.disabled = false;
      }
    },
    state => state.loaded
  );

  btnPlay.addEventListener('click', () => {
    const state = store.getState().songState;
    if (state === 'play') {
      store.setState({ songState: 'pause' });
    } else {
      store.setState({ songState: 'play' });
    }
  });

  btnStop.addEventListener('click', () => {
    // const state = store.getState().songState;
    // if (state === 'play') {
    //   store.setState({ songState: 'stop' });
    // }
    stopSong();
  });

  btnReset.addEventListener('click', () => {
    store.setState({ hasRepeated: {} });
  });

  return {
    cleanup: () => {
      unsub1();
      unsub2();
    },
  };
};

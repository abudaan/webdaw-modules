import "./style/index.styl";
import {
  getMeasureAndStaveAtPoint,
  getMeasureBoundingBoxesInStave,
  getVersion,
  BoundingBox,
} from "webdaw-modules";
import { store } from "./store";
import { setup as setupSong } from "./songWrapper";
import { setup as setupScore } from "./scoreWrapper";
import { setup as setupControls } from "./controls";
import { setup as setupDebug } from "./debug";
import { setup as setupPlayhead } from "./playhead";
import { setup as setupDrawLoop } from "./drawLoop";
import { setup as setupDrawSelection, startSelect } from "./drawSelection";
import { setPlayhead } from "./actions/setPlayhead";
import { getOSMD } from "./scoreWrapper";

const scoreDiv = document.getElementById("score") as HTMLDivElement;
const loadingDiv = document.getElementById("loading");

if (scoreDiv === null || loadingDiv === null) {
  throw new Error("element not found");
}

console.log(`WebDAW: ${getVersion()}`);

let raqId: number;

const loop = () => {
  // you can do something here if necessary
  raqId = requestAnimationFrame(loop);
};

const init = async () => {
  await setupSong();
  await setupScore(scoreDiv);
  setupControls();
  // setupDebug();
  setupPlayhead(false);
  setupDrawLoop();
  setupDrawSelection();

  window.addEventListener("resize", () => {
    store.setState({ width: window.innerWidth });
  });

  window.addEventListener("scroll", () => {
    store.setState({ scrollPos: { y: window.scrollY, x: window.scrollX } });
  });

  document.addEventListener("keydown", (e) => {
    // console.log(e.code);
    if (e.code === "Enter") {
      store.setState({ songState: "play" });
    } else if (e.code === "Space") {
      e.preventDefault();
      store.getState().toggleSongState();
    } else if (e.code === "Numpad0") {
      store.setState({ songState: "stop" });
    }
  });

  scoreDiv.addEventListener("mousedown", (e) => {
    if (e.ctrlKey) {
      startSelect(e);
    } else {
      // const { staveIndex } = getMeasureAndStaveAtPoint(e as PointerEvent, getOSMD());
      // const bboxes = getMeasureBoundingBoxesInStave(staveIndex, getOSMD());
      // const container = document.createElement("selected");
      // bboxes.forEach((bbox: BoundingBox) => {
      //   const div = document.createElement("div");
      //   div.style.position = "absolute";
      //   div.style.backgroundColor = "rgba(0, 255, 0, 0.3)";
      //   div.style.top = `${bbox.top}px`;
      //   div.style.left = `${bbox.left}px`;
      //   div.style.width = `${bbox.width}px`;
      //   div.style.height = `${bbox.height}px`;
      //   container.appendChild(div);
      // });
      // container.addEventListener("click", () => {
      //   document.body.removeChild(container);
      // });
      // container.style.position = "absolute";
      // container.style.top = "0px";
      // container.style.left = "0px";
      // container.style.zIndex = "-1";
      // document.body.appendChild(container);
      setPlayhead(e as PointerEvent);
    }
  });

  // main loop during playback
  store.subscribe(
    (songState) => {
      if (songState === "play") {
        raqId = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(raqId);
      }
    },
    (state) => state.songState
  );

  loadingDiv.style.display = "none";
  store.setState({ loaded: true });
};

init();

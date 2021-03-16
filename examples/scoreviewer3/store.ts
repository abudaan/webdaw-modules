import { BoundingBox, AnchorData, RepeatData, LoopData } from "webdaw-modules";
import create from "zustand/vanilla";
import { files, FileData } from "./files";

export type State = {
  offset: { x: number; y: number };
  scrollPos: { x: number; y: number };
  selection: number[];
  songState: "play" | "pause" | "stop";
  currentBarSong: number;
  currentBarScore: number;
  ppq: number;
  upbeat: boolean;
  selectedMeasures: number[];
  width: number;
  loaded: boolean;
  repeats: RepeatData[];
  loops: LoopData[];
  initialTempo: number;
  // boundingBoxesMeasures: BoundingBox[];
  playhead: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  playheadAnchors: AnchorData[];
  currentPlayheadAnchor: AnchorData | null;
  measureStartTicks: number[];
  files: FileData[];
  currentFilesIndex: number;
};

export type Reducers = {
  toggleSongState: () => void;
};

export type Store = State & Reducers;

export const store = create<Store>((set, get) => ({
  playheadPositionPixels: 0,
  offset: { x: 0, y: 0 },
  scrollPos: { x: 0, y: 0 },
  selection: [],
  songState: "stop",
  ppq: 480,
  currentBarSong: 1,
  currentBarScore: 1,
  selectedMeasures: [],
  width: window.innerWidth,
  repeats: [],
  loops: [],
  upbeat: false,
  initialTempo: 90,
  loaded: false,
  playhead: {
    x: 0,
    y: 0,
    width: 3,
    height: 0,
  },
  toggleSongState: () => {
    set((state) => {
      if (state.songState === "play") {
        return { songState: "pause" };
        // } else if (state.songState === 'pause') {
        //   return { songState: 'stop' };
      }
      return { songState: "play" };
    });
  },
  // boundingBoxesMeasures: [],
  playheadAnchors: [],
  currentPlayheadAnchor: null,
  measureStartTicks: [],
  files,
  currentFilesIndex: 0,
  // currentFilesIndex: files.findIndex((f: FileData) => {
  //   // return f.name === "mozk545a_2-bars";
  //   // return f.name === "mozk545a_musescore";
  //   // return f.name === "multibar_rest2";
  //   return f.name === "chopin_valse_op.64_no.1_minute_valse";
  // }),
}));

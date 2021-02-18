import { BoundingBox, AnchorData, RepeatData } from "webdaw-modules";
import create from "zustand/vanilla";
import { midiFileName, midiFile, mxmlFile } from "./files";

export type State = {
  offset: { x: number; y: number };
  scrollPos: { x: number; y: number };
  selection: number[];
  songState: "play" | "pause" | "stop";
  midiFileName: string;
  midiFile: string;
  mxmlFile: string;
  currentBarSong: number;
  currentBarScore: number;
  ppq: number;
  selectedMeasures: number[];
  width: number;
  loaded: boolean;
  repeats: RepeatData[];
  initialTempo: number;
  boundingBoxesMeasures: BoundingBox[];
  playhead: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  playheadAnchors: AnchorData[];
  currentPlayheadAnchor: AnchorData | null;
  measureStartTicks: number[];
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
  midiFileName,
  midiFile,
  mxmlFile,
  ppq: 480,
  currentBarSong: 1,
  currentBarScore: 1,
  selectedMeasures: [],
  width: window.innerWidth,
  repeats: [],
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
  boundingBoxesMeasures: [],
  playheadAnchors: [],
  currentPlayheadAnchor: null,
  measureStartTicks: [],
}));

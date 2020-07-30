import { Track } from "./types/Track";

export const createTrack = (id: string): Track => {
  return {
    id,
    latency: 0,
    inputs: [],
    outputs: [],
  };
};

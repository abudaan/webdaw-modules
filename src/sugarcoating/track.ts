import { Track } from "../types";

export const setTrackOutput = ({ track, output }: { track: Track; output: string }) => {
  track.outputs.push(output);
};

export const createTrack = (id: string): Track => {
  return {
    id,
    latency: 0,
    inputs: [],
    outputs: [],
  };
};

import { Track } from "./createTrack";

export const setTrackOutput = ({ track, output }: { track: Track; output: string }) => {
  track.outputs.push(output);
};

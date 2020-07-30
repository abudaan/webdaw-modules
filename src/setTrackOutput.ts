import { Track } from "./types/Track";

export const setTrackOutput = ({ track, output }: { track: Track; output: string }) => {
  track.outputs.push(output);
};

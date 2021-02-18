/**
 * Used to calculate the position of the song when the user
 * clicks somewhere in the score
 */
import { RepeatData } from "../musicxml/parser";
export declare const songPositionFromScore: (repeats: RepeatData[], barScore: number) => {
    barSong: number;
};

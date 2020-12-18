/**
 * Used to calculate the position of the song when the user
 * clicks somewhere in the score
 */
export declare const songPositionFromScore: (repeats: number[][], hasRepeated: {
    [index: number]: boolean;
}, barScore: number) => {
    barSong: number;
    hasRepeated: {
        [index: number]: boolean;
    };
};

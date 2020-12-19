/**
 * Used to calculate the position of the playhead in the score
 * based on the position of the playhead in the song.
 *
 * Called by the action updateBar.ts
 */
export declare const scorePositionFromSong: (repeats: number[][], hasRepeated: {
    [index: number]: boolean;
}, barSong: number) => {
    bar: number;
    hasRepeated: {
        [index: number]: boolean;
    };
};
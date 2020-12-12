/**
 * Used to calculate the position of the playhead in the score
 * based on the position of the playhead in the song.
 *
 * Called by the action updateBar.ts
 */

export const scorePositionFromSong = (
  repeats: number[][],
  hasRepeated: { [index: number]: boolean },
  barSong: number
): {
  bar: number;
  hasRepeated: { [index: number]: boolean };
} => {
  if (!repeats.length) {
    return { bar: barSong, hasRepeated };
  }
  const hasRepeatedClone = { ...hasRepeated };

  let newBar = barSong;
  for (let i = 0; i < repeats.length; i++) {
    const repeat = repeats[i];
    if (newBar > repeat[1]) {
      newBar -= repeat[1] - repeat[0] + 1;
    }
  }

  let b = barSong;
  for (let i = 0; i < repeats.length; i++) {
    const repeat = repeats[i];
    if (b > repeat[1]) {
      hasRepeatedClone[i] = true;
      b -= repeat[1] - repeat[0] + 1;
    }
  }

  return { bar: newBar, hasRepeated: hasRepeatedClone };
};

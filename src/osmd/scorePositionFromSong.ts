/**
 * Used to calculate the position of the playhead in the score
 * based on the position of the playhead in the song.
 */

export const scorePositionFromSong = (
  repeats: [number, number, boolean][],
  barSong: number
): {
  bar: number;
} => {
  if (!repeats.length) {
    return { bar: barSong };
  }

  let newBar = barSong;
  for (let i = 0; i < repeats.length; i++) {
    const repeat = repeats[i];
    if (newBar > repeat[1]) {
      newBar -= repeat[1] - repeat[0] + 1;
    }
  }

  return { bar: newBar };
};

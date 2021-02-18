/**
 * Used to calculate the position of the song when the user
 * clicks somewhere in the score
 */

import { RepeatData } from "../musicxml/parser";

export const songPositionFromScore = (repeats: RepeatData[], barScore: number): { barSong: number } => {
  if (repeats.length === 0) {
    return { barSong: barScore };
  }
  // const hasRepeatedClone: { [index: number]: boolean } = {};
  // let newBar = bar;
  // let loop = true;
  // let i = 0;
  // while (loop && i < repeats.length) {
  //   const endBar = repeats[i][1];
  //   if (endBar > bar) {
  //     loop = false;
  //   } else {
  //     newBar += repeats[i][1] - repeats[i][0] + 1;
  //     hasRepeatedClone[i] = true;
  //     i++;
  //   }
  // }
  /*
  for (let i = 0; i < repeats.length; i++) {
    const repeat = repeats[i];
    // console.log(bar, repeat[1]);
    if (barScore > repeat[1]) {
      hasRepeatedClone[i] = true;
    }
  }

  let newBar = barScore;
  for (let i = 0; i < repeats.length; i++) {
    const repeat = repeats[i];
    if (hasRepeatedClone[i] === true) {
      newBar += repeat[1] - repeat[0] + 1;
    }
  }
*/
  // console.log(newBar, hasRepeatedClone);
  let newBar = barScore;
  console.log(repeats);
  for (let i = 0; i < repeats.length; i++) {
    const { start, end } = repeats[i];
    const diffBar = end - (start - 1);
    console.log(barScore, start, end, diffBar);
    if (newBar > end) {
      newBar += diffBar;
    }
  }

  return { barSong: newBar };
};

// export const songPositionFromScore = (repeats: number[][], bar: number): number => {
//   if (repeats.length <= 1) {
//     return bar;
//   }
//   let newBar = bar;
//   let loop = true;
//   let i = 0;
//   while (loop && i < repeats.length) {
//     const endBar = repeats[i][1];
//     if (endBar > bar) {
//       loop = false;
//     } else {
//       newBar += repeats[i][1] - repeats[i][0] + 1;
//       i++;
//     }
//   }
//   // console.log(newBar);
//   return newBar;
// };

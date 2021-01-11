"use strict";
/**
 * Used to calculate the position of the song when the user
 * clicks somewhere in the score
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.songPositionFromScore = void 0;
exports.songPositionFromScore = function (repeats, barScore) {
    if (repeats.length <= 1) {
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
    var newBar = barScore;
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
//# sourceMappingURL=songPositionFromScore.js.map
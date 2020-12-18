"use strict";
/**
 * Used to calculate the position of the song when the user
 * clicks somewhere in the score
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.songPositionFromScore = void 0;
exports.songPositionFromScore = function (repeats, hasRepeated, barScore) {
    if (repeats.length <= 1) {
        return { barSong: barScore, hasRepeated: hasRepeated };
    }
    // const hasRepeatedClone: { [index: number]: boolean } = {};
    var hasRepeatedClone = __assign({}, hasRepeated);
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
    for (var i = 0; i < repeats.length; i++) {
        var repeat = repeats[i];
        // console.log(bar, repeat[1]);
        if (barScore > repeat[1]) {
            hasRepeatedClone[i] = true;
        }
    }
    var newBar = barScore;
    for (var i = 0; i < repeats.length; i++) {
        var repeat = repeats[i];
        if (hasRepeatedClone[i] === true) {
            newBar += repeat[1] - repeat[0] + 1;
        }
    }
    // console.log(newBar, hasRepeatedClone);
    return { barSong: newBar, hasRepeated: hasRepeatedClone };
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
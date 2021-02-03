"use strict";
/**
 * Used to calculate the position of the playhead in the score
 * based on the position of the playhead in the song.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.scorePositionFromSong = void 0;
exports.scorePositionFromSong = function (repeats, barSong) {
    if (!repeats.length) {
        return { bar: barSong };
    }
    var newBar = barSong;
    for (var i = 0; i < repeats.length; i++) {
        var repeat = repeats[i];
        if (newBar > repeat[1]) {
            newBar -= repeat[1] - repeat[0] + 1;
        }
    }
    return { bar: newBar };
};
//# sourceMappingURL=scorePositionFromSong.js.map
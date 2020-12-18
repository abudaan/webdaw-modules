"use strict";
/**
 * Used to calculate the position of the playhead in the score
 * based on the position of the playhead in the song.
 *
 * Called by the action updateBar.ts
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
exports.scorePositionFromSong = void 0;
exports.scorePositionFromSong = function (repeats, hasRepeated, barSong) {
    if (!repeats.length) {
        return { bar: barSong, hasRepeated: hasRepeated };
    }
    var hasRepeatedClone = __assign({}, hasRepeated);
    var newBar = barSong;
    for (var i = 0; i < repeats.length; i++) {
        var repeat = repeats[i];
        if (newBar > repeat[1]) {
            newBar -= repeat[1] - repeat[0] + 1;
        }
    }
    var b = barSong;
    for (var i = 0; i < repeats.length; i++) {
        var repeat = repeats[i];
        if (b > repeat[1]) {
            hasRepeatedClone[i] = true;
            b -= repeat[1] - repeat[0] + 1;
        }
    }
    return { bar: newBar, hasRepeated: hasRepeatedClone };
};
//# sourceMappingURL=scorePositionFromSong.js.map
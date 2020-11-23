"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNiceTime = exports.floor = exports.round = void 0;
var mPow = Math.pow;
var mRound = Math.round;
var mFloor = Math.floor;
var mRandom = Math.random;
// see also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
exports.round = function (value, decimals) {
    if (typeof decimals === "undefined" || decimals <= 0) {
        return mRound(value);
    }
    var p = mPow(10, decimals);
    //console.log(p, decimals)
    return mRound(value * p) / p;
};
exports.floor = function (value, decimals) {
    if (typeof decimals === "undefined" || decimals <= 0) {
        return mFloor(value);
    }
    var p = mPow(10, decimals);
    //console.log(p,decimals)
    return mFloor(value * p) / p;
};
exports.getNiceTime = function (millis) {
    var timeAsString = "";
    var seconds = millis / 1000; // → millis to seconds
    var h = exports.floor(seconds / (60 * 60), 0);
    var m = exports.floor((seconds % (60 * 60)) / 60, 0);
    var s = exports.floor(seconds % 60, 0);
    var ms = exports.round((seconds - h * 3600 - m * 60 - s) * 1000, 0);
    timeAsString += h + ":";
    timeAsString += m < 10 ? "0" + m : m;
    timeAsString += ":";
    timeAsString += s < 10 ? "0" + s : s;
    timeAsString += ":";
    timeAsString += ms === 0 ? "000" : ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
    var hS = "" + h;
    var mS = m < 10 ? "0" + m : "" + m;
    var sS = s < 10 ? "0" + s : "" + s;
    var msS = ms === 0 ? "000" : ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : "" + ms;
    //console.log(h, m, s, ms);
    return {
        hour: h,
        minute: m,
        second: s,
        millisecond: ms,
        timeAsString: timeAsString,
        timeAsArray: [h, m, s, ms],
        timeAsArrayString: [hS, mS, sS, msS],
    };
};
//# sourceMappingURL=time.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @TODO: fix this for signature changes!
exports.addBarNumber = function (events, ppq, numerator, denominator) {
    var ticks = 0;
    //   const ticksPerBar = (ppq / (denominator / 4)) * numerator;
    var ticksPerBar = ppq * (numerator * (4 / denominator));
    //   console.log(ticksPerBar);
    events.forEach(function (e) {
        var bar = Math.floor(e.ticks / ticksPerBar);
        // console.log(bar, bar + 1);
        e.bar = bar;
        // console.log(bar, e.ticks, ticksPerBar, ppq);
    });
    return events;
};
//# sourceMappingURL=addBarNumber.js.map
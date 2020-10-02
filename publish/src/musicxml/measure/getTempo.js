"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTempo = function (xmlDoc, measureNode, nsResolver) {
    var bpm = xmlDoc.evaluate("direction/sound/@tempo", measureNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
    if (!isNaN(bpm)) {
        // console.log("BPM", bpm);
        var event_1 = {
            type: 0xff,
            subType: 0x51,
            descr: "tempo",
            ticks: -1,
            millisPerTick: -1,
            bpm: bpm,
        };
        return event_1;
    }
    return null;
};
//# sourceMappingURL=getTempo.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSignature = void 0;
exports.getSignature = function (xmlDoc, measureNode, nsResolver) {
    var numerator = xmlDoc.evaluate("attributes/time/beats", measureNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
    var denominator = xmlDoc.evaluate("attributes/time/beat-type", measureNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
    // console.log(numerator, denominator);
    if (numerator && denominator) {
        var event_1 = {
            type: 0xff,
            subType: 0x58,
            descr: "time signature",
            numerator: numerator,
            denominator: denominator,
            metronome: 0,
            thirtySeconds: 0,
            ticks: -1,
        };
        return event_1;
    }
    return null;
};
//# sourceMappingURL=getSignature.js.map
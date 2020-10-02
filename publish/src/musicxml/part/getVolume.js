"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVolume = function (xmlDoc, partNode, nsResolver) {
    var volume = xmlDoc.evaluate("midi-instrument/volume", partNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
    if (!isNaN(volume)) {
        // velocity = (tmp / 100) * 127;
        return volume;
    }
    return 70;
};
//# sourceMappingURL=getVolume.js.map
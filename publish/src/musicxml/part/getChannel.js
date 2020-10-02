"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannel = function (xmlDoc, partNode, nsResolver) {
    var channel = xmlDoc.evaluate("midi-instrument/midi-channel", partNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
    if (!isNaN(channel)) {
        return channel - 1;
    }
    return 0;
};
//# sourceMappingURL=getChannel.js.map
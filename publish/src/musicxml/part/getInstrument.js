"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstrument = void 0;
exports.getInstrument = function (xmlDoc, partNode, nsResolver) {
    var instrument = xmlDoc.evaluate("score-instrument/instrument-name", partNode, nsResolver, XPathResult.STRING_TYPE, null).stringValue;
    if (!!instrument) {
        return instrument;
    }
    return "piano";
};
//# sourceMappingURL=getInstrument.js.map
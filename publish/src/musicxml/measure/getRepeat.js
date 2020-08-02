"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepeat = void 0;
exports.getRepeat = function (xmlDoc, measureNode, nsResolver) {
    var repeat = xmlDoc.evaluate("barline/repeat/@direction", measureNode, nsResolver, XPathResult.STRING_TYPE, null).stringValue;
    if (repeat !== "") {
        return repeat;
    }
    return null;
};
//# sourceMappingURL=getRepeat.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartName = function (xmlDoc, partNode, nsResolver) {
    // get id and name of the part
    var partId = xmlDoc.evaluate("@id", partNode, nsResolver, XPathResult.STRING_TYPE, null)
        .stringValue;
    var partName = xmlDoc.evaluate("part-name", partNode, nsResolver, XPathResult.STRING_TYPE, null)
        .stringValue;
    return [partId, partName];
};
//# sourceMappingURL=getPartName.js.map
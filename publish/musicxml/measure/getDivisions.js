"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDivisions = void 0;
exports.getDivisions = function (xmlDoc, measureNode, nsResolver, currentDivision) {
    if (currentDivision === void 0) { currentDivision = 24; }
    var divisions = xmlDoc.evaluate("attributes/divisions", measureNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
    if (!isNaN(divisions)) {
        return divisions;
        // console.log('divisions', divisions);
    }
    return currentDivision;
};
//# sourceMappingURL=getDivisions.js.map
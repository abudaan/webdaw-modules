"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeasureNumber = void 0;
exports.getMeasureNumber = function (xmlDoc, measureNode, nsResolver) {
    var measureNumber = xmlDoc.evaluate("@number", measureNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
    return measureNumber;
};
//# sourceMappingURL=getMeasureNumber.js.map
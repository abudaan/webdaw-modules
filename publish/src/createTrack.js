"use strict";
/// <reference types="webmidi" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTrack = void 0;
exports.createTrack = function (id) {
    return {
        id: id,
        latency: 0,
        inputs: [],
        outputs: [],
    };
};
//# sourceMappingURL=createTrack.js.map
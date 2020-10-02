"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startAudioEvent = function (audioContext, audioEvent) {
    // console.log("create audio node");
    var audioNode = audioContext.createBufferSource();
    audioNode.buffer = audioEvent.audioBuffer;
    audioNode
        .connect(audioEvent.gainNode)
        .connect(audioEvent.pannerNode)
        .connect(audioContext.destination);
    audioNode.start(audioEvent.start, audioEvent.offset, audioEvent.duration);
    return __assign(__assign({}, audioEvent), { audioNode: audioNode });
};
exports.stopAudioEvent = function (audioEvent, stopParams) {
    var _a;
    // todo: add stop params such as when to stop and fade out
    (_a = audioEvent.audioNode) === null || _a === void 0 ? void 0 : _a.stop();
    return __assign(__assign({}, audioEvent), { audioNode: null });
};
//# sourceMappingURL=AudioEvent.js.map
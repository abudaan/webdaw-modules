"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { midiAccess } from "./initAudioAndMIDI";
var getMIDIPorts_1 = require("./getMIDIPorts");
// you can use this for a panic button that is common in DAWs
exports.resetMIDIOutputs = function (midiAccess, offset) {
    if (offset === void 0) { offset = 100; }
    if (midiAccess) {
        var outputs = getMIDIPorts_1.getMIDIPorts(midiAccess).outputs;
        var time_1 = performance.now() + offset;
        outputs.forEach(function (output) {
            for (var channel = 0; channel < 16; channel++) {
                output.send([0xb0 + channel, 0x7b, 0x00], time_1); // stop all notes
                output.send([0xb0 + channel, 0x79, 0x00], time_1); // reset all controllers
            }
        });
    }
};
//# sourceMappingURL=resetMIDIOutputs.js.map
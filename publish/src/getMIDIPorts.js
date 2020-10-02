"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMIDIPorts = function (midiAccess) {
    // export const getMIDIDevices = (): { inputs: WebMidi.MIDIInput[], outputs: WebMidi.MIDIOutput[] } => {
    var inputs = [];
    var outputs = [];
    if (midiAccess) {
        midiAccess.inputs.forEach(function (i) {
            inputs.push(i);
        });
        midiAccess.outputs.forEach(function (o) {
            outputs.push(o);
        });
    }
    // console.log(inputs, outputs);
    return { inputs: inputs, outputs: outputs };
};
//# sourceMappingURL=getMIDIPorts.js.map
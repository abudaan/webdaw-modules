"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKeyEditorView = void 0;
// import { download } from "../util/download";
exports.createKeyEditorView = function (song, tickWidth) {
    if (tickWidth === void 0) { tickWidth = 0.1; }
    if (!song.notes) {
        console.warn("create notes");
    }
    var numNotes = song.notes.length - 1;
    var maxTick = song.notes[numNotes].noteOff.ticks;
    var width = maxTick * tickWidth;
    var height = 1000;
    var noteHeight = height / 128;
    // console.log(width, height);
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    // const columns = song.numBars * song.numerator * song.denominator; // beats
    if (!song.initialNumerator || !song.initialDenominator || !ctx) {
        return;
    }
    var columns = 4 * song.initialNumerator * song.initialDenominator; // beats
    ctx.fillStyle = "#496bd8";
    ctx.fillRect(0, 0, width, height);
    // draw lines
    ctx.fillStyle = "#f7bd3e";
    ctx.translate(0.5, 0.5);
    // ctx.fillStyle = 'rgb(' + 100 + ',' + 99 + ',' + (event.velocity * 2) + ')'
    var w = width / columns;
    for (var i = 0; i < columns; i++) {
        var thickness = i % 16 === 0 ? 1 : i % 4 === 0 ? 0.7 : 0.5;
        ctx.fillRect(Math.round(w * i), 0, thickness, height);
    }
    for (var i = 1; i <= 128; i++) {
        ctx.fillRect(0, i * noteHeight, width, 0.7);
    }
    // canvas.toBlob((b: Blob) => {
    //   // , { type: "image/png" }
    //   download(b, "tmp");
    // });
};
//# sourceMappingURL=createKeyEditorView.js.map
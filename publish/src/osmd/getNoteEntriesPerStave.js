"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoteEntriesPerStave = void 0;
exports.getNoteEntriesPerStave = function (osmd, ppq) {
    if (ppq === void 0) { ppq = 960; }
    var noteData = [];
    osmd.GraphicSheet.MeasureList.forEach(function (staves, measureIndex) {
        staves.forEach(function (measure, staveIndex) {
            var _a = measure, _b = _a.boundingBox, _c = _b.absolutePosition, mx = _c.x, my = _c.y, _d = _b.size, mwidth = _d.width, mheight = _d.height, borderLeft = _b.borderLeft, borderBottom = _b.borderBottom, _e = _a.parentMusicSystem, pid = _e.id, _f = _e.boundingBox, px = _f.x, py = _f.y, pwidth = _f.width, pheight = _f.height;
            var measureData = {
                index: measureIndex,
                x: mx,
                y: my,
                width: mwidth,
                height: mheight,
            };
            measure.staffEntries.forEach(function (staffEntry) {
                var data;
                var tmpDatas = [];
                staffEntry.graphicalVoiceEntries.forEach(function (voiceEntry) {
                    voiceEntry.notes.forEach(function (note) {
                        var _a = note, _b = _a.boundingBox.absolutePosition, x = _b.x, y = _b.y, sourceNote = _a.sourceNote;
                        // sx.push(x * 10);
                        // sy.push(y * 10);
                        // console.log((note as any).boundingBox);
                        var _c = note.graphicalNoteLength, numerator = _c.numerator, denominator = _c.denominator, wholeValue = _c.wholeValue, realValue = _c.realValue;
                        data = {
                            center: { x: x * 10, y: 0 },
                            x: (x + borderLeft) * 10,
                            y: y * 10,
                            ticks: measureIndex * ppq * 4 + realValue * ppq * 4,
                            noteNumber: sourceNote.halfTone + 12,
                            isRestFlag: sourceNote.isRestFlag,
                            noteLength: { numerator: numerator, denominator: denominator, wholeValue: wholeValue, realValue: realValue },
                            measure: measureData,
                            stave: {
                                index: staveIndex,
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0,
                            },
                            parentMusicSystem: {
                                index: pid,
                                x: px,
                                y: py,
                                width: pwidth,
                                height: pheight,
                            },
                        };
                        tmpDatas.push(data);
                        // console.log(note);
                    });
                });
                // console.log("SX", sx);
                // console.log("SY", sy);
                // const minX = Math.min(...sx);
                // const maxX = Math.max(...sx);
                // const minY = Math.min(...sy);
                // const maxY = Math.max(...sy);
                tmpDatas.forEach(function (data) {
                    // data.stave.x = minX;
                    // data.stave.y = minY;
                    // data.stave.width = maxX - minX;
                    // data.stave.height = maxY - minY;
                    noteData.push(data);
                });
            });
        });
    });
    return noteData;
};
//# sourceMappingURL=getNoteEntriesPerStave.js.map
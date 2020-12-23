"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapEntityToNote = void 0;
var ppq = 960;
exports.mapEntityToNote = function (osmd) {
    var entities = [];
    var boundingBoxMeasures = [];
    osmd.GraphicSheet.MeasureList.forEach(function (measure, measureIndex) {
        measure.forEach(function (stave, staveIndex) {
            var boundingBox = stave.boundingBox;
            boundingBoxMeasures.push(boundingBox);
            var staffEntries = stave.staffEntries;
            staffEntries.forEach(function (staffEntry) {
                var graphicalVoiceEntries = staffEntry.graphicalVoiceEntries;
                graphicalVoiceEntries.forEach(function (graphicalVoiceEntry) {
                    var notes = graphicalVoiceEntry.notes;
                    notes.forEach(function (graphicalNote) {
                        var _a = graphicalNote, vfNote = _a.vfnote, sourceNote = _a.sourceNote, boundingBox = _a.boundingBox;
                        var relPosInMeasure = sourceNote["voiceEntry"].timestamp.realValue;
                        entities.push({
                            measureIndex: measureIndex,
                            staveIndex: staveIndex,
                            vfNote: vfNote,
                            sourceNote: sourceNote,
                            boundingBox: boundingBox,
                            ticks: measureIndex * ppq * 4 + relPosInMeasure * ppq * 4,
                            noteNumber: sourceNote.halfTone + 12,
                            bar: measureIndex + 1,
                        });
                        // console.log("VFNOTE", vfNote);
                        // console.log("SOURCENOTE", sourceNote);
                        // console.log("----");
                    });
                });
            });
        });
    });
    return entities;
};
//# sourceMappingURL=mapEntityToNote.js.map
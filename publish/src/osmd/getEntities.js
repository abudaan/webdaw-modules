"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstTest = exports.getEntries = void 0;
var ppq = 960;
var getMusicSystemData = function (entryContainer) {
    // console.log(entryContainer);
    var staffEntry = entryContainer.staffEntries[0];
    var i = 1;
    while (typeof staffEntry === "undefined" && i < entryContainer.staffEntries.length) {
        staffEntry = entryContainer.staffEntries[i];
        i++;
    }
    var _a = staffEntry.parentMeasure.parentMusicSystem, _b = _a.boundingBox, _c = _b.absolutePosition, x = _c.x, y = _c.y, _d = _b.size, width = _d.width, height = _d.height, borderTop = _b.borderTop, borderBottom = _b.borderBottom, id = _a.id;
    return {
        index: id,
        x: x,
        y: y,
        width: width,
        height: height,
    };
};
var getMeasureData = function (entryContainer) {
    var measureData = [];
    entryContainer.staffEntries.forEach(function (staffEntry) {
        var _a = staffEntry.parentMeasure, _b = _a.boundingBox, _c = _b.absolutePosition, x = _c.x, y = _c.y, _d = _b.size, width = _d.width, height = _d.height, borderTop = _b.borderTop, borderBottom = _b.borderBottom, measureNumber = _a.measureNumber;
        measureData.push({
            index: measureNumber,
            x: x * 10,
            y: y * 10,
            width: width * 10,
            height: (y + borderBottom - (y - borderTop)) * 10,
        });
    });
    return measureData;
};
var getNoteData = function (entryContainer) {
    var notes = [];
    entryContainer.staffEntries.forEach(function (staffEntry, staffIndex) {
        staffEntry.graphicalVoiceEntries.forEach(function (voiceEntry) {
            var measureIndex = voiceEntry.parentStaffEntry.parentMeasure.measureNumber;
            voiceEntry.notes.forEach(function (note) {
                var _a = note, _b = _a.boundingBox, _c = _b.absolutePosition, x = _c.x, y = _c.y, borderLeft = _b.borderLeft, sourceNote = _a.sourceNote;
                var _d = note.graphicalNoteLength, numerator = _d.numerator, denominator = _d.denominator, wholeValue = _d.wholeValue, realValue = _d.realValue;
                var relPosInMeasure = note.sourceNote.voiceEntry.timestamp.realValue;
                var data = {
                    center: { x: x * 10, y: 0 },
                    x: (x + borderLeft) * 10,
                    y: y * 10,
                    ticks: measureIndex * ppq * 4 + relPosInMeasure * ppq * 4,
                    noteNumber: sourceNote.halfTone + 12,
                    isRestFlag: sourceNote.isRestFlag,
                    noteLength: { numerator: numerator, denominator: denominator, wholeValue: wholeValue, realValue: realValue },
                };
                notes.push(data);
            });
        });
    });
    return notes;
};
var getStaveData = function (entryContainer, containerIndex) {
    var staveData = entryContainer.staffEntries.map(function (staffEntry, staffIndex) {
        var _a = staffEntry.boundingBox, _b = _a.absolutePosition, x = _b.x, y = _b.y, _c = _a.size, width = _c.width, height = _c.height, borderTop = _a.borderTop, borderBottom = _a.borderBottom, borderLeft = _a.borderLeft;
        var notes = [];
        var measureIndex = -1;
        staffEntry.graphicalVoiceEntries.forEach(function (voiceEntry) {
            measureIndex = voiceEntry.parentStaffEntry.parentMeasure.measureNumber;
            voiceEntry.notes.forEach(function (note, noteIndex) {
                var _a = note, _b = _a.boundingBox, _c = _b.absolutePosition, x = _c.x, y = _c.y, _d = _b.size, width = _d.width, height = _d.height, borderLeft = _b.borderLeft, sourceNote = _a.sourceNote;
                var _e = note.graphicalNoteLength, numerator = _e.numerator, denominator = _e.denominator, wholeValue = _e.wholeValue, realValue = _e.realValue;
                var relPosInMeasure = note.sourceNote.voiceEntry.timestamp.realValue;
                var multipleRestMeasures = sourceNote.sourceMeasure.multipleRestMeasures;
                var data = {
                    index: noteIndex,
                    center: { x: x * 10, y: 0 },
                    x: (x + borderLeft) * 10,
                    y: y * 10,
                    width: width * 10,
                    height: height * 10,
                    ticks: measureIndex * ppq * 4 + relPosInMeasure * ppq * 4,
                    noteNumber: sourceNote.halfTone + 12,
                    isRestFlag: sourceNote.isRestFlag,
                    noteLength: { numerator: numerator, denominator: denominator, wholeValue: wholeValue, realValue: realValue },
                    staffIndex: staffIndex,
                    measureIndex: measureIndex,
                    multipleRestMeasures: multipleRestMeasures || 0,
                    containerIndex: containerIndex,
                };
                notes.push(data);
            });
        });
        return {
            notes: notes,
            index: staffIndex,
            measureIndex: measureIndex,
            containerIndex: containerIndex,
            x: (x + borderLeft) * 10,
            y: (y + borderTop) * 10,
            width: width * 10,
            height: height * 10,
        };
    });
    return staveData;
};
var getData = function (entryContainer, containerIndex) {
    return {
        containerIndex: containerIndex,
        notes: getNoteData(entryContainer),
        measures: getMeasureData(entryContainer),
        staves: getStaveData(entryContainer),
        musicSystem: getMusicSystemData(entryContainer),
    };
};
exports.getEntries = function (osmd, ppq) {
    if (ppq === void 0) { ppq = 960; }
    var entityData = [];
    osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(function (entryContainer, containerIndex) {
        entityData.push(getData(entryContainer, containerIndex));
    });
    return entityData;
};
exports.firstTest = function (osmd, ppq) {
    if (ppq === void 0) { ppq = 960; }
    var entries = [];
    osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(function (entryContainer, containerIndex) {
        var s = getStaveData(entryContainer, containerIndex);
        entries.push(s);
    });
    return entries;
};
//# sourceMappingURL=getEntities.js.map
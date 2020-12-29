"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstTest = void 0;
var uniqid_1 = __importDefault(require("uniqid"));
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
var getNoteData = function (_a) {
    var note = _a.note, noteIndex = _a.noteIndex, staffIndex = _a.staffIndex, containerIndex = _a.containerIndex, measureIndex = _a.measureIndex;
    var _b = note, _c = _b.boundingBox, _d = _c.absolutePosition, x = _d.x, y = _d.y, _e = _c.size, width = _e.width, height = _e.height, borderLeft = _c.borderLeft, sourceNote = _b.sourceNote;
    var _f = note.graphicalNoteLength, numerator = _f.numerator, denominator = _f.denominator, wholeValue = _f.wholeValue, realValue = _f.realValue;
    var relPosInMeasure = note.sourceNote.voiceEntry.timestamp.realValue;
    var multipleRestMeasures = sourceNote.sourceMeasure.multipleRestMeasures;
    var data = {
        id: "note-" + uniqid_1.default(),
        index: noteIndex,
        center: { x: x * 10, y: 0 },
        x: (x + borderLeft) * 10,
        y: y * 10,
        width: width * 10,
        height: height * 10,
        ticks: measureIndex * ppq * 4 + relPosInMeasure * ppq * 4,
        noteNumber: sourceNote.halfTone + 12,
        isRestFlag: sourceNote.isRestFlag === true,
        isGraceNote: sourceNote.IsGraceNote === true,
        noteLength: { numerator: numerator, denominator: denominator, wholeValue: wholeValue, realValue: realValue },
        staffIndex: staffIndex,
        measureIndex: measureIndex,
        multipleRestMeasures: multipleRestMeasures || 0,
        containerIndex: containerIndex,
    };
    return data;
};
var getStaveData = function (entryContainer, containerIndex) {
    var staveData = entryContainer.staffEntries.map(function (staffEntry, staffIndex) {
        var _a = staffEntry.boundingBox, _b = _a.absolutePosition, x = _b.x, y = _b.y, _c = _a.size, width = _c.width, height = _c.height, borderTop = _a.borderTop, borderBottom = _a.borderBottom, borderLeft = _a.borderLeft;
        var notes = [];
        var measureIndex = -1;
        staffEntry.graphicalVoiceEntries.forEach(function (voiceEntry) {
            measureIndex = voiceEntry.parentStaffEntry.parentMeasure.measureNumber;
            voiceEntry.notes.forEach(function (note, noteIndex) {
                var n = getNoteData({ note: note, noteIndex: noteIndex, staffIndex: staffIndex, containerIndex: containerIndex, measureIndex: measureIndex });
                notes.push(n);
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
exports.firstTest = function (osmd, ppq) {
    if (ppq === void 0) { ppq = 960; }
    var staveData = [];
    osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.forEach(function (entryContainer, containerIndex) {
        var s = getStaveData(entryContainer, containerIndex);
        staveData.push(s);
    });
    return staveData;
};
//# sourceMappingURL=getEntities.js.map
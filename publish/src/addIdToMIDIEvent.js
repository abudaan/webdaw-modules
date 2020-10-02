"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uniqid_1 = __importDefault(require("uniqid"));
exports.addIdToMIDIEvent = function (events) {
    return events.map(function (e) {
        e.id = uniqid_1.default();
        return e;
    });
};
//# sourceMappingURL=addIdToMIDIEvent.js.map
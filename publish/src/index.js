"use strict";
// import { parseMusicXML, ParsedMusicXML, Repeat } from "./musicxml/parser";
// import { parsedMusicXMLToSong } from "./musicxml/parsedMusicXMLToSong";
// import {
//   GraphicalNoteData,
//   VexFlowStaveNote,
//   getGraphicalNotesPerBar,
// } from "./osmd/getGraphicalNotesPerBar";
// import { setGraphicalNoteColor } from "./osmd/setGraphicalNoteColor";
// import { NoteMapping, mapMIDINoteIdToGraphicalNote } from "./osmd/mapMIDINoteIdToGraphicalNote";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// export {
//   GraphicalNoteData,
//   NoteMapping,
//   ParsedMusicXML,
//   Repeat,
//   VexFlowStaveNote,
//   getGraphicalNotesPerBar,
//   mapMIDINoteIdToGraphicalNote,
//   parseMusicXML,
//   parsedMusicXMLToSong,
//   setGraphicalNoteColor,
// };
__exportStar(require("./musicxml/parser"), exports);
__exportStar(require("./musicxml/parsedMusicXMLToSong"), exports);
__exportStar(require("./osmd/getGraphicalNotesPerBar"), exports);
__exportStar(require("./osmd/setGraphicalNoteColor"), exports);
__exportStar(require("./osmd/getGraphicalNotesInSelection"), exports);
__exportStar(require("./osmd/mapMIDINoteIdToGraphicalNote"), exports);
__exportStar(require("./osmd/MusicSystemShim"), exports);
__exportStar(require("./MIDIEvent"), exports);
__exportStar(require("./util/fetch"), exports);
__exportStar(require("./util/midi"), exports);
__exportStar(require("./util/time"), exports);
__exportStar(require("./addBarNumber"), exports);
__exportStar(require("./addIdToMIDIEvent"), exports);
__exportStar(require("./addIdToMIDIEvent"), exports);
__exportStar(require("./AudioEvent"), exports);
__exportStar(require("./bufferreader"), exports);
__exportStar(require("./calculateMillis"), exports);
__exportStar(require("./createKeyEditorView"), exports);
__exportStar(require("./createNotePair"), exports);
__exportStar(require("./createNotes"), exports);
__exportStar(require("./createSong"), exports);
__exportStar(require("./createSongFromMIDIFile"), exports);
__exportStar(require("./createSongFromMusicXML"), exports);
__exportStar(require("./createTrack"), exports);
__exportStar(require("./getActiveNotes"), exports);
__exportStar(require("./getCurrentEventIndex"), exports);
__exportStar(require("./getMIDIAccess"), exports);
__exportStar(require("./getMIDIPorts"), exports);
__exportStar(require("./getNoteName"), exports);
__exportStar(require("./getVersion"), exports);
__exportStar(require("./initAudioAndMIDI"), exports);
__exportStar(require("./parseMIDIFile"), exports);
__exportStar(require("./resetMIDIOutputs"), exports);
__exportStar(require("./scheduler"), exports);
__exportStar(require("./setTrackOutput"), exports);
__exportStar(require("./transport"), exports);
__exportStar(require("./unschedule"), exports);
//# sourceMappingURL=index.js.map
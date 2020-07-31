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
__exportStar(require("./osmd/mapMIDINoteIdToGraphicalNote"), exports);
__exportStar(require("./types/MIDIEvent"), exports);
__exportStar(require("./types/MIDINote"), exports);
__exportStar(require("./types/Track"), exports);
__exportStar(require("./types/Song"), exports);
__exportStar(require("./util/midi"), exports);
__exportStar(require("./util/time"), exports);
__exportStar(require("./addBarNumber"), exports);
//# sourceMappingURL=index.js.map
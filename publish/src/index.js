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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
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
__export(require("./musicxml/parser"));
__export(require("./musicxml/parsedMusicXMLToSong"));
__export(require("./osmd/getBoundingBoxesOfGraphicalMeasures"));
__export(require("./osmd/getBoundingBoxesOfSelectedMeasures"));
__export(require("./osmd/getGraphicalNotesPerMeasure"));
__export(require("./osmd/getGraphicalNotesPerMeasurePerTrack"));
__export(require("./osmd/getMusicSystemMeasureBoundingBox"));
__export(require("./osmd/getSelectedMeasures"));
__export(require("./osmd/mapMIDINoteIdToGraphicalNote"));
__export(require("./osmd/mapMIDINoteIdToGraphicalNotePerTrack"));
__export(require("./osmd/setGraphicalNoteColor"));
__export(require("./util/2d"));
__export(require("./util/fetch"));
__export(require("./util/midi"));
__export(require("./util/time"));
__export(require("./addBarNumber"));
__export(require("./addIdToMIDIEvent"));
__export(require("./addIdToMIDIEvent"));
__export(require("./AudioEvent"));
__export(require("./bufferreader"));
__export(require("./calculateMillis"));
__export(require("./createKeyEditorView"));
__export(require("./createNotePair"));
__export(require("./createNotes"));
__export(require("./createSong"));
__export(require("./createSongFromMIDIFile"));
__export(require("./createSongFromMusicXML"));
__export(require("./createTrack"));
__export(require("./getActiveNotes"));
__export(require("./getCurrentEventIndex"));
__export(require("./getMIDIAccess"));
__export(require("./getMIDIPorts"));
__export(require("./getNoteName"));
__export(require("./getVersion"));
__export(require("./initAudioAndMIDI"));
__export(require("./parseMIDIFile"));
__export(require("./resetMIDIOutputs"));
__export(require("./scheduler"));
__export(require("./setTrackOutput"));
__export(require("./transport"));
__export(require("./unschedule"));
//# sourceMappingURL=index.js.map
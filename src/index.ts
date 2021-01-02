// /// <reference types="./heartbeat/" />

import { Heartbeat } from "./heartbeat";
export { Heartbeat };

import * as sequencer from "./heartbeat/index";
const heartbeat: Heartbeat.Sequencer = sequencer.default as Heartbeat.Sequencer;
export { heartbeat };

// import { heartbeat_utils } from "./heartbeat/utils";
// export { heartbeat_utils };
export * from "./heartbeat/utils";

import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
export { OpenSheetMusicDisplay };

export * from "./musicxml/parser";
export * from "./musicxml/parsedMusicXMLToSong";
export * from "./musicxml/loadMusicXMLFile";
export * from "./osmd/entityMapper";
export * from "./osmd/getBoundingBoxes";
export * from "./osmd/getBoundingBoxesAtPoint";
export * from "./osmd/getBoundingBoxesOfGraphicalMeasures";
export * from "./osmd/getBoundingBoxesOfSelectedMeasures";
export * from "./osmd/getBoundingBoxMeasure";
export * from "./osmd/getEntities";
export * from "./osmd/getGraphicalNotesPerMeasure";
export * from "./osmd/getGraphicalNotesPerMeasurePerTrack";
export * from "./osmd/getMeasureAndStaveAtPoint";
export * from "./osmd/getMeasureAtPoint";
export * from "./osmd/getMeasureBoundingBoxesInStave";
export * from "./osmd/getBoundingBoxesAtPoint";
export * from "./osmd/getMusicSystemMeasureBoundingBox";
export * from "./osmd/getNoteEntriesPerStave";
export * from "./osmd/getSelectedMeasures";
export * from "./osmd/getVerticalStaffEntryContainers";
export * from "./osmd/mapEntityToNote";
export * from "./osmd/mapMIDINoteIdToGraphicalNote";
export * from "./osmd/mapMIDINoteIdToGraphicalNotePerTrack";
export * from "./osmd/mapper1";
export * from "./osmd/mapper2";
export * from "./osmd/mapper3";
export * from "./osmd/scorePositionFromSong";
export * from "./osmd/setGraphicalNoteColor";
export * from "./osmd/songPositionFromScore";
export * from "./osmd/type_shims";
export * from "./osmd/util";
export * from "./MIDIEvent";
export * from "./util/2d";
export * from "./util/fetch";
export * from "./util/midi";
export * from "./util/time";
export * from "./addBarNumber";
export * from "./addIdToMIDIEvent";
export * from "./addIdToMIDIEvent";
export * from "./AudioEvent";
export * from "./bufferreader";
export * from "./calculateMillis";
export * from "./createKeyEditorView";
export * from "./createNotePair";
export * from "./createNotes";
export * from "./createSong";
export * from "./createSongFromMIDIFile";
export * from "./createSongFromMusicXML";
export * from "./createTrack";
export * from "./getActiveNotes";
export * from "./getCurrentEventIndex";
export * from "./getMIDIAccess";
export * from "./getMIDIPorts";
export * from "./getNoteName";
export * from "./getVersion";
export * from "./initAudioAndMIDI";
export * from "./parseMIDIFile";
export * from "./resetMIDIOutputs";
export * from "./scheduler";
export * from "./setTrackOutput";
export * from "./transport";
export * from "./types";
export * from "./unschedule";

// import { parseMusicXML, ParsedMusicXML, Repeat } from "./musicxml/parser";
// import { parsedMusicXMLToSong } from "./musicxml/parsedMusicXMLToSong";
// import {
//   GraphicalNoteData,
//   VexFlowStaveNote,
//   getGraphicalNotesPerBar,
// } from "./osmd/getGraphicalNotesPerBar";
// import { setGraphicalNoteColor } from "./osmd/setGraphicalNoteColor";
// import { NoteMapping, mapMIDINoteIdToGraphicalNote } from "./osmd/mapMIDINoteIdToGraphicalNote";

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

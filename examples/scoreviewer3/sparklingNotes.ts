import {
  getGraphicalNotesPerMeasurePerTrack,
  mapMIDINoteIdToGraphicalNotePerTrack,
  Heartbeat,
  NoteMappingGraphicalToMIDI,
  NoteMappingMIDIToGraphical,
  setGraphicalNoteColor,
  heartbeat as sequencer,
  OpenSheetMusicDisplay,
  RepeatData,
} from "webdaw-modules";
import { setSongPosition } from "./actions/setPlayheadFromSong";
import { getOSMD } from "./scoreWrapper";
import { getSong } from "./songWrapper";
import { store } from "./store";

const instrumentName = "TP00-PianoStereo";
let midiToGraphical: NoteMappingMIDIToGraphical = {};
let graphicalToMidi: NoteMappingGraphicalToMIDI = {};

// reset all highlighted notes
const resetScore = (midiToGraphical: NoteMappingMIDIToGraphical) => {
  Object.values(midiToGraphical).forEach((g) => {
    const { element } = g;
    setGraphicalNoteColor(element, "black");
  });
};

const prepareScore = (
  osmd: OpenSheetMusicDisplay,
  song: Heartbeat.Song,
  repeats: RepeatData[],
  ppq: number
) => {
  const graphicalNotesPerBarPerTrack = getGraphicalNotesPerMeasurePerTrack(osmd, ppq);
  // console.log(graphicalNotesPerBarPerTrack);
  const mappings: {
    score: number;
    midiToGraphical: NoteMappingMIDIToGraphical;
    graphicalToMidi: NoteMappingGraphicalToMIDI;
  }[] = mapMIDINoteIdToGraphicalNotePerTrack(graphicalNotesPerBarPerTrack, repeats, song.notes);

  mappings.forEach((mapping) => {
    if (mapping.score > 0.5) {
      midiToGraphical = {
        ...midiToGraphical,
        ...mapping.midiToGraphical,
      };
      graphicalToMidi = {
        ...graphicalToMidi,
        ...mapping.graphicalToMidi,
      };
    }
  });

  // setup listeners for every graphical note to make them clickable
  Object.values(midiToGraphical).forEach(({ element }) => {
    element.addEventListener("mousedown", (e) => {
      const midiNote = graphicalToMidi[element.id];
      const noteOn = midiNote.noteOn as Heartbeat.MIDIEvent;
      const noteOff = midiNote.noteOff as Heartbeat.MIDIEvent;
      if (e.altKey) {
        setSongPosition(noteOn.millis, noteOn.ticks);
        song.setPlayhead("ticks", noteOn.ticks);
        resetScore(midiToGraphical);
        setGraphicalNoteColor(element, "red");
        store.setState({ songState: "play" });
      } else {
        setGraphicalNoteColor(element, "red");
        sequencer.processEvent(
          [
            sequencer.createMidiEvent(0, 144, noteOn.noteNumber, noteOn.velocity),
            sequencer.createMidiEvent(noteOff.ticks - noteOn.ticks, 128, noteOff.noteNumber, 0),
          ],
          instrumentName
        );
        console.log("note number:", noteOn.noteNumber, "velocity:", noteOn.velocity);
      }
      e.stopImmediatePropagation();
    });
    element.addEventListener("mouseup", (e) => {
      sequencer.stopProcessEvents();
      setGraphicalNoteColor(element, "black");
    });
  });
};

export const setup = () => {
  const song = getSong();
  const osmd = getOSMD();
  const { ppq, repeats } = store.getState();

  const unsub1 = store.subscribe(
    () => {
      prepareScore(osmd, song, repeats, ppq);
    },
    (state) => state.loaded
  );

  const unsub2 = store.subscribe(
    () => {
      prepareScore(osmd, song, repeats, ppq);
    },
    (state) => state.width
  );

  return {
    cleanup: () => {
      unsub1();
      unsub2();
    },
    update: () => {
      if (Object.keys(midiToGraphical).length === 0) {
        // console.log(":(");
        return;
      }
      // highlight active notes and dim passive notes
      const snapshot = song.keyEditor.getSnapshot("key-editor");
      // console.log(snapshot);
      snapshot.notes.stateChanged.forEach((note: Heartbeat.MIDINote) => {
        const noteId = note.id;
        if (note.active) {
          if (midiToGraphical[noteId]) {
            const { element, musicSystem } = midiToGraphical[noteId];
            setGraphicalNoteColor(element, "red");
          }
        } else if (note.active === false) {
          if (midiToGraphical[noteId]) {
            const { element } = midiToGraphical[noteId];
            setGraphicalNoteColor(element, "black");
          }
        }
      });
    },
  };
};

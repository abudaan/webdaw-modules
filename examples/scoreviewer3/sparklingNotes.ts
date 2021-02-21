import {
  getGraphicalNotesPerMeasurePerTrack,
  mapMIDINoteIdToGraphicalNotePerTrack,
  Heartbeat,
  NoteMappingGraphicalToMIDI,
  NoteMappingMIDIToGraphical,
  setGraphicalNoteColor,
  heartbeat as sequencer,
} from "webdaw-modules";
import { getOSMD } from "./scoreWrapper";
import { getSong } from "./songWrapper";
import { store } from "./store";

const instrumentName = "TP00-PianoStereo";

// reset all highlighted notes
const resetScore = (midiToGraphical: NoteMappingMIDIToGraphical) => {
  Object.values(midiToGraphical).forEach((g) => {
    const { element } = g;
    setGraphicalNoteColor(element, "black");
  });
};

export const setup = () => {
  const song = getSong();
  const osmd = getOSMD();
  const { ppq, repeats } = store.getState();
  const graphicalNotesPerBarPerTrack = getGraphicalNotesPerMeasurePerTrack(osmd, ppq);
  // console.log(graphicalNotesPerBarPerTrack);
  const mappings: {
    score: number;
    midiToGraphical: NoteMappingMIDIToGraphical;
    graphicalToMidi: NoteMappingGraphicalToMIDI;
  }[] = mapMIDINoteIdToGraphicalNotePerTrack(graphicalNotesPerBarPerTrack, repeats, song.notes);

  let midiToGraphical: NoteMappingMIDIToGraphical = {};
  let graphicalToMidi: NoteMappingGraphicalToMIDI = {};
  mappings.forEach((mapping) => {
    if (mapping.score > 0.9) {
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
      if (e.ctrlKey) {
        // @TODO: fix this
        // song.setPlayhead("ticks", noteOn.ticks);
        // if (!song.playing) {
        //   song.play();
        // }
        // resetScore(midiToGraphical);
        // setGraphicalNoteColor(element, "red");
      } else {
        setGraphicalNoteColor(element, "red");
        sequencer.processEvent(
          [
            sequencer.createMidiEvent(0, 144, noteOn.noteNumber, noteOn.velocity),
            sequencer.createMidiEvent(noteOff.ticks - noteOn.ticks, 128, noteOff.noteNumber, 0),
          ],
          instrumentName
        );
      }
      e.stopImmediatePropagation();
    });
    element.addEventListener("mouseup", (e) => {
      sequencer.stopProcessEvents();
      setGraphicalNoteColor(element, "black");
    });
  });

  return {
    update: () => {
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

import { MusicSystem } from "opensheetmusicdisplay";
import { GraphicalNoteData } from "./getGraphicalNotesPerMeasure";
import { MIDIEventGeneric, MIDINoteGeneric } from "../createNotes";
import { MIDIEvent } from "src/MIDIEvent";

/*
  This method maps the notes in the SVG document of the score to MIDI notes in the sequencer
*/

type NoteMappingMIDIToGraphical = {
  [index: string]: {
    // vfnote: Vex.Flow.Note;
    element: SVGElement;
    musicSystem: MusicSystem;
  };
};

type NoteMappingGraphicalToMIDI = {
  [index: string]: MIDINoteGeneric;
};

export const mapMIDINoteIdToGraphicalNotePerTrack = (
  graphicalNotesPerBar: GraphicalNoteData[][],
  repeats: number[][],
  notes: MIDINoteGeneric[]
): { midiToGraphical: NoteMappingMIDIToGraphical; graphicalToMidi: NoteMappingGraphicalToMIDI } => {
  const notesPerTrack: { [id: string]: MIDINoteGeneric[] } = {};
  const trackIds: string[] = [];
  notes.forEach(note => {
    const trackId = note.noteOn.trackId;
    if (typeof notesPerTrack[trackId] === "undefined") {
      notesPerTrack[trackId] = [];
      trackIds.push(trackId);
    }
    notesPerTrack[trackId].push(note);
  });
  console.log(trackIds, graphicalNotesPerBar[0], notesPerTrack[trackIds[0]]);
  return mapMIDINoteIdToGraphicalNote(graphicalNotesPerBar[0], repeats, notesPerTrack[trackIds[0]]);
};

const mapMIDINoteIdToGraphicalNote = (
  graphicalNotesPerBar: GraphicalNoteData[],
  repeats: number[][],
  notes: MIDINoteGeneric[]
): { midiToGraphical: NoteMappingMIDIToGraphical; graphicalToMidi: NoteMappingGraphicalToMIDI } => {
  // console.log(graphicalNotesPerBar);
  let barIndex = -1;
  let barOffset = 1;
  let ticksOffset = 0; // not used, keep for reference
  let repeatIndex: number = 0;
  const hasRepeated: { [index: number]: boolean } = {};
  const numBars = notes[notes.length - 1].noteOff.bar;
  const mapping1: NoteMappingMIDIToGraphical = {};
  const mapping2: NoteMappingGraphicalToMIDI = {};

  // console.log(numBars, graphicalNotesPerBar.length);
  // if (numBars !== graphicalNotesPerBar.length) {
  //   return mapping;
  // }

  while (true) {
    barIndex++;
    // console.log(barIndex, repeatIndex, hasRepeated[repeatIndex], repeats[repeatIndex][1]);
    if (barIndex === repeats[repeatIndex][1]) {
      if (hasRepeated[repeatIndex] !== true) {
        barIndex = repeats[repeatIndex][0] - 1;
        // console.log('REPEAT START', barIndex)
        hasRepeated[repeatIndex] = true;
        barOffset += repeats[repeatIndex][1] - repeats[repeatIndex][0] + 1;
        // ticksOffset += (repeats[repeatIndex][1] - repeats[repeatIndex][0]) * song.numerator * ppq;
      } else {
        // console.log('REPEAT END', barIndex, repeatIndex);
        repeatIndex++;
        if (repeatIndex === repeats.length || barIndex === numBars) {
          break;
        }
      }
    } else {
      // console.log("CONTINUE", barIndex, numBars, repeats);
      if (barIndex === numBars) {
        break;
      }
    }

    try {
      // get all sequencer MIDI events in this bar
      // const filtered = notes.filter(e => e.noteOn.bar === barIndex + 1 + barOffset);
      const filtered = notes.filter(e => e.noteOn.bar === barIndex + barOffset);
      // console.log(barIndex + 1 + barOffset, filtered.length);
      // console.log(barIndex, barOffset, filtered);
      graphicalNotesPerBar[barIndex]
        .sort((a, b) => {
          if (a.ticks < b.ticks) {
            return -1;
          } else if (a.ticks > b.ticks) {
            return 1;
          }
          return 0;
        })
        .forEach(bd => {
          const { element, noteNumber, bar, parentMusicSystem } = bd;
          for (let j = 0; j < filtered.length; j++) {
            const note = filtered[j];
            if (
              !mapping1[note.id] &&
              note.noteOn.bar == bar + barOffset - 1 &&
              note.noteOn.noteNumber == noteNumber
            ) {
              mapping1[note.id] = { element, musicSystem: parentMusicSystem };
              mapping2[element.id] = note;
              // filtered.splice(j, 1);
              break;
            }
          }
        });
    } catch (e) {
      break;
    }
  }

  return { midiToGraphical: mapping1, graphicalToMidi: mapping2 };
};

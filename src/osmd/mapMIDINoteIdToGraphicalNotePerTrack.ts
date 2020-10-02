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
  graphicalNotesPerBarPerTrack: GraphicalNoteData[][][],
  repeats: number[][],
  notes: MIDINoteGeneric[]
): {
  score: number;
  midiToGraphical: NoteMappingMIDIToGraphical;
  graphicalToMidi: NoteMappingGraphicalToMIDI;
}[] => {
  const notesPerTrack: { [id: string]: MIDINoteGeneric[] } = {};
  const trackIds: string[] = [];
  notes.forEach(note => {
    const trackId = note.noteOn.trackId;
    if (trackId !== undefined) {
      if (typeof notesPerTrack[trackId] === "undefined") {
        notesPerTrack[trackId] = [];
        trackIds.push(trackId);
      }
      notesPerTrack[trackId].push(note);
    }
  });
  const tmp: MIDINoteGeneric[][] = [];
  trackIds.forEach(id => {
    tmp.push(notesPerTrack[id]);
  });

  const numMIDITracks = tmp.length;
  const numGraphicalTracks = graphicalNotesPerBarPerTrack.length;
  const mappings = [];
  // console.log(numMIDITracks, numGraphicalTracks);
  for (let i = 0; i < numGraphicalTracks; i++) {
    for (let j = 0; j < numMIDITracks; j++) {
      mappings.push(getMappingPerTrack(graphicalNotesPerBarPerTrack[i], tmp[j], repeats));
    }
  }
  mappings.sort((a, b) => b.score - a.score);
  return mappings;
};

const getMappingPerTrack = (
  graphicalNotes: GraphicalNoteData[][],
  midiNotes: MIDINoteGeneric[],
  repeats: number[][]
): {
  midiToGraphical: NoteMappingMIDIToGraphical;
  graphicalToMidi: NoteMappingGraphicalToMIDI;
  score: number;
} => {
  let barIndex = -1;
  let barOffset = 1;
  let repeatIndex = 0;
  let numMatch = 0;
  const hasRepeated: { [index: number]: boolean } = {};
  const numBars = graphicalNotes.length;
  const numNotes = graphicalNotes.reduce((acc, val) => {
    acc += val.length;
    return acc;
  }, 0);
  const midiToGraphical: NoteMappingMIDIToGraphical = {};
  const graphicalToMidi: NoteMappingGraphicalToMIDI = {};

  // console.log(graphicalNotes);

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
      const filteredMidi = midiNotes.filter(e => e.noteOn.bar === barIndex + barOffset);
      graphicalNotes[barIndex].forEach(bd => {
        const { element, noteNumber, bar, parentMusicSystem } = bd;
        for (let j = 0; j < filteredMidi.length; j++) {
          const note = filteredMidi[j];
          if (
            !midiToGraphical[note.id] &&
            note.noteOn.bar == bar + barOffset - 1 &&
            note.noteOn.noteNumber == noteNumber
          ) {
            numMatch += 1;
            midiToGraphical[note.id] = { element, musicSystem: parentMusicSystem };
            graphicalToMidi[element.id] = note;
            // filtered.splice(j, 1);
            break;
          }
        }
      });
    } catch (e) {
      break;
    }
  }
  return {
    midiToGraphical,
    graphicalToMidi,
    score: numMatch / numNotes,
  };
};

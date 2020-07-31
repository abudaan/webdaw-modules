import { Song } from "../types/Song";
import { Track } from "../types/Track";
import { MIDIEvent } from "../types/MIDIEvent";
import { sortMIDIEvents } from "../util/midi";
import { calculateMillis } from "../calculateMillis";
import { createNotes } from "../createNotes";
import { ParsedMusicXML } from "./parser";

export const parsedMusicXMLToSong = (data: ParsedMusicXML): Song | null => {
  if (data === null) {
    return null;
  }
  const { parts, repeats, ppq, initialTempo, initialNumerator, initialDenominator } = data;
  const { tracks, events }: { tracks: Track[]; events: MIDIEvent[] } = parts.reduce(
    (acc, val, i) => {
      const id = `T-${i++}`;
      acc.events.push(
        ...val.events.map(e => {
          e.trackId = id;
          return e;
        })
      );
      const t: Track = {
        id,
        name: val.name,
        instrument: val.instrument,
        volume: val.volume,
        latency: 0,
        inputs: [],
        outputs: [],
      };

      acc.tracks.push(t);
      return acc;
    },
    { tracks: [], events: [] } as { tracks: Track[]; events: MIDIEvent[] }
  );

  sortMIDIEvents(events);

  return {
    ppq,
    latency: 17, // value in milliseconds -> the length of a single frame @ 60Hz refresh rate
    bufferTime: 100, // value in milliseconds
    tracks,
    tracksById: tracks.reduce((acc: { [id: string]: Track }, value) => {
      acc[value.id] = value;
      return acc;
    }, {}),
    events: calculateMillis(events, {
      ppq,
      bpm: initialTempo === -1 ? 120 : initialTempo,
    }),
    notes: createNotes(events),
    initialTempo,
    initialNumerator,
    initialDenominator,
    repeats,
  } as Song;
};

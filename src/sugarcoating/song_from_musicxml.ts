import { fetchXML } from "../fetch_helpers";
import { parseMusicXML } from "../musicxml/mxml_parser";
import { Song, Track } from "../types";
import { createNotes } from "../create_notes";
import { MIDIEvent } from "../midi_events";
import { sortMIDIEvents } from "../midi_utils";
import { calculateMillis } from "../calculateMillis";

export const createSongFromMusicXML = async (
  arg: XMLDocument | string,
  ppq: number = 960
): Promise<Song> => {
  let xmlDoc: XMLDocument;
  if (typeof arg === "string") {
    xmlDoc = await fetchXML(arg);
  } else {
    xmlDoc = arg;
  }

  const parsed = parseMusicXML(xmlDoc);
  if (parsed === null) {
    throw new Error("MusicXML document not supported");
  }
  const { parts, repeats, initialTempo, initialNumerator, initialDenominator } = parsed;

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

  const song: Song = {
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
    // timeTrack,
    // tracks: tracks.map(track => ({ events: [...track] })),
  };

  return song;
};

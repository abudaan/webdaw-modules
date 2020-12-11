// utils used by ./actions/actions.ts
import sequencer from 'heartbeat-sequencer';
// import { isNil } from 'ramda';

const status = (response: Response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(response.statusText);
};

// generic json loader
const loadJSON = (url: string) =>
  fetch(url)
    .then(status)
    .then(response => response.json())
    .catch(e => console.error(e));

// generic ab loader
const loadArrayBuffer = (url: string) =>
  fetch(url)
    .then(status)
    .then(response => response.arrayBuffer())
    .catch(e => console.error(e));

// const initSequencer = () => sequencer.ready();
const initSequencer = async () => {
  await sequencer.ready();
  console.log(sequencer);
};

const getBrowser = () => sequencer.browser;

const getLoadedMIDIFiles = () =>
  sequencer.getMidiFiles().map((mf: Heartbeat.MIDIFileJSON) => mf.name);

const getLoadedInstruments = () =>
  sequencer
    .getInstruments()
    .map((i: Heartbeat.Instrument, index: number) => [index, i.name])
    .filter((t: [number, string]) => t[1] !== 'metronome');

const addMIDIFile = (url: string): Promise<Heartbeat.MIDIFileJSON> =>
  new Promise(resolve => {
    sequencer.addMidiFile({ url }, (json: Heartbeat.MIDIFileJSON) => {
      // console.log(url);
      // console.log(sequencer.getMidiFiles())
      resolve(json);
    });
  });

const addAssetPack = (ap: Heartbeat.AssetPack): Promise<void> =>
  new Promise(resolve => {
    sequencer.addAssetPack(ap, () => {
      resolve();
    });
  });

const addAssetPacks = (aps: Array<Heartbeat.AssetPack>): Promise<void> =>
  new Promise(resolve => {
    let max = aps.length;
    aps.forEach(ap => {
      sequencer.addAssetPack(ap, () => {
        max--;
        // console.log(max);
        if (max === 0) {
          resolve();
        }
      });
    });
  });

// this version does not work on Android!
const addAssetPack2 = (url: string): Promise<Heartbeat.AssetPack> =>
  new Promise(async resolve => {
    const ap = await loadJSON(url);
    sequencer.addAssetPack(ap, () => {
      resolve(ap);
    });
  });

// load binary MIDI file, add it to the assets and create a song from it
const createSongFromMIDIFile = (url: string): Promise<Heartbeat.Song> =>
  new Promise(resolve => {
    sequencer.addMidiFile({ url }, (json: Heartbeat.MIDIFileJSON) => {
      resolve(sequencer.createSong(json) as Heartbeat.Song);
    });
  });

// load binary MIDI file and create song from it (MIDI file is not added to the assets)
const createSongFromMIDIFile2 = (url: string) =>
  loadArrayBuffer(url)
    .then(ab => sequencer.createMidiFile({ arraybuffer: ab }))
    .then(json => {
      return sequencer.createSong(json);
    })
    .catch(e => console.error(e));

// parse config file and load all assets that are listed in the config file
type ParseConfig = {
  instrumentSamplesList: Array<[string, { [id: string]: string }]>;
  midiInputs: { [id: string]: WebMidi.MIDIInput };
  midiOutputs: { [id: string]: WebMidi.MIDIOutput };
  loadedInstruments: Array<Heartbeat.Instrument>;
};
const parseConfig = async (config: Heartbeat.Config): Promise<ParseConfig> =>
  new Promise(async resolve => {
    if (config.midiFiles) {
      // console.log(config.midiFiles.map(async url => addMIDIFile(url)));
      await Promise.all(config.midiFiles.map(url => addMIDIFile(url)));
    }
    if (config.assetPacks) {
      const aps: Array<Heartbeat.AssetPack> = await Promise.all(
        config.assetPacks.map(url => loadJSON(url))
      );
      await addAssetPacks(aps);
      // await Promise.all(aps.map(ap => addAssetPack(ap)));
    }
    const instrument = sequencer.getInstruments()[0];
    resolve({
      instrumentSamplesList: Object.entries(instrument.mapping),
      midiInputs: sequencer.midiInputs,
      midiOutputs: sequencer.midiOutputs,
      loadedInstruments: sequencer.getInstruments(),
    });
  });

const createMIDIFileList = (): Array<Heartbeat.MIDIFileData> =>
  sequencer.getMidiFiles().map((mf: Heartbeat.MIDIFileJSON) => {
    const result: Heartbeat.MIDIFileData = {
      name: mf.url.substring(mf.url.lastIndexOf('/') + 1),
      tracks: [],
      timeEvents: [...mf.timeEvents],
      ppq: mf.ppq,
      bpm: mf.bpm,
      nominator: mf.nominator,
      denominator: mf.denominator,
    };

    mf.tracks.forEach((t: Heartbeat.Track) => {
      const key = Object.keys(t.partsById)[0];
      const events = Object.values(t.partsById[key].eventsById);
      result.tracks.push({
        name: t.name,
        events,
      });
    });

    return result;
  });

const getNumUniqueNotes = (part: Heartbeat.Part): number => {
  const uniq: { [id: string]: boolean } = {};
  part.events.forEach((e: Heartbeat.MIDIEvent) => {
    uniq[e.noteName] = true;
  });
  return Object.keys(uniq).length;
};

const sortOnNoteNumberAscending = (a: Heartbeat.MIDIEvent, b: Heartbeat.MIDIEvent) => {
  if (a.noteNumber < b.noteNumber) {
    return -1;
  } else if (a.noteNumber > b.noteNumber) {
    return 1;
  } else {
    return 0;
  }
};

const sortOnNoteNumberDescending = (a: Heartbeat.MIDIEvent, b: Heartbeat.MIDIEvent) => {
  if (a.noteNumber > b.noteNumber) {
    return -1;
  } else if (a.noteNumber < b.noteNumber) {
    return 1;
  } else {
    return 0;
  }
};

const getLowestNote = (events: Heartbeat.MIDIEvent[]): Heartbeat.MIDIEvent => {
  const sorted = events.filter(e => e.command === 144).sort(sortOnNoteNumberAscending);
  return sorted[0];
};

const getHighestNote = (events: Heartbeat.MIDIEvent[]): Heartbeat.MIDIEvent => {
  const sorted = events.filter(e => e.command === 144).sort(sortOnNoteNumberDescending);
  return sorted[0];
};

const getAverageNote = (events: Heartbeat.MIDIEvent[]): number => {
  const lowest = getLowestNote(events).noteNumber;
  const highest = getHighestNote(events).noteNumber;
  const average = lowest + (highest - lowest) / 2;
  return Math.round(average);
};

const loadMIDIFile = (url: string): Promise<void> => {
  return new Promise(resolve => {
    sequencer.addMidiFile({ url }, () => {
      resolve();
    });
  });
};

export {
  initSequencer,
  getBrowser,
  parseConfig,
  loadJSON,
  loadArrayBuffer,
  addAssetPack,
  addAssetPack2,
  addMIDIFile,
  getLoadedInstruments,
  createMIDIFileList,
  createSongFromMIDIFile,
  getNumUniqueNotes,
  getLowestNote,
  getHighestNote,
  getAverageNote,
  loadMIDIFile,
};

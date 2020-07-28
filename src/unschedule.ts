import { Song, Track } from "./types";
import { MIDIEvent, NoteOnEvent } from "./midi_events";

// TODO: improve this!
/*
export const unschedule = (song: Song, scheduled: MIDIEvent[], outputs?: WebMidi.MIDIOutputMap) => {
  // console.log(scheduled);
  // const tracks = scheduled.reduce((acc, val): { [id: string]: Track } => {
  //   const id = val.trackId;
  //   if (acc[id]) {
  //     return acc;
  //   }
  //   const track = song.tracksById[id];
  //   acc[id] = track;
  //   return acc;
  // }, {});

  // console.log(tracks);

  Object.values(song.tracks).forEach((track: Track) => {
    const channel = 0;
    track.outputs.forEach(id => {
      let c = 0;
      let time = performance.now() + track.latency + song.latency + song.bufferTime;
      // pure overkill!
      while (c < 16) {
        outputs?.get(id).send([0xb0 + c, 0x7b, 0x00], time); // stop all notes
        outputs?.get(id).send([0xb0 + c, 0x79, 0x00], time); // reset all controllers
        c++;
      }
    });
  });
};
*/

export const unschedule = (song: Song, outputs?: WebMidi.MIDIOutputMap) => {
  const outputIds = Object.keys(
    song.tracks.reduce((acc, val) => {
      val.outputs.forEach(id => {
        acc[id] = true;
      });
      return acc;
    }, {})
  );

  // @TODO optimize this! -> add a propery song.channels, or set channel on track
  const channels = song.events.reduce((acc, val) => {
    const event = val as NoteOnEvent;
    // console.log(event.channel, event.descr);
    if (typeof event.channel !== "undefined") {
      if (acc.findIndex(v => v === event.channel) === -1) {
        acc.push(event.channel);
      }
    }
    return acc;
  }, []);

  // console.log(outputIds, channels);
  // const time = performance.now() + song.latency + track.latency + song.bufferTime;
  const time = performance.now() + song.latency + song.bufferTime;

  outputIds.forEach(id => {
    channels.forEach(channel => {
      outputs?.get(id).send([0xb0 + channel, 0x7b, 0x00], time + 80); // stop all notes
      outputs?.get(id).send([0xb0 + channel, 0x79, 0x00], time + 80); // reset all controllers
    });
  });
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.unschedule = function (song, outputs) {
    // you could use resetMIDIOutputs() here as well though this might be a bit of a rough remedy
    var outputIds = Object.keys(song.tracks.reduce(function (acc, val) {
        val.outputs.forEach(function (id) {
            acc[id] = true;
        });
        return acc;
    }, {}));
    // @TODO optimize this! -> add a propery song.channels, or set channel on track
    var channels = song.events.reduce(function (acc, val) {
        var event = val;
        // console.log(event.channel, event.descr);
        if (typeof event.channel !== "undefined") {
            if (acc.findIndex(function (v) { return v === event.channel; }) === -1) {
                acc.push(event.channel);
            }
        }
        return acc;
    }, []);
    // console.log(outputIds, channels);
    // const time = performance.now() + song.latency + track.latency + song.bufferTime;
    var time = performance.now() + song.latency + song.bufferTime;
    outputIds.forEach(function (id) {
        channels.forEach(function (channel) {
            var _a, _b;
            (_a = outputs === null || outputs === void 0 ? void 0 : outputs.get(id)) === null || _a === void 0 ? void 0 : _a.send([0xb0 + channel, 0x7b, 0x00], time + 80); // stop all notes
            (_b = outputs === null || outputs === void 0 ? void 0 : outputs.get(id)) === null || _b === void 0 ? void 0 : _b.send([0xb0 + channel, 0x79, 0x00], time + 80); // reset all controllers
        });
    });
};
//# sourceMappingURL=unschedule.js.map
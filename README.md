# WebDAW modules

This project is still in a very early stage, eventually it will be a complete set of modules that you can use to build your own web-based DAW. This project is the successor of 2 of my earlier projects: [heartbeat](https://heartbeatjs.org) and [qambi](https://qambi.org), and as such it will contain all functionality of these libraries combined. The current code will be cut into the smallest possible modules for optimal flexibility.

Where heartbeat and qambi need to be imported in their entirety, with the new modular approach you can just import the modules you need for your project. Also you can change the code to your needs without the risk of breaking anything in the rest of the library because all modules will be able to run without the need for a specific context.

Another big difference is that the project will not use classes and, more import, the modules don't hold any state. State management should be implemented in the code of your project (I often refer to this as 'user code', i.e. the code of the user that uses the module). 

Notably heartbeat stored a lot of state inside the library code which oftentimes led to memory leaks or other unwanted behavior. And in qambi some state is kept in the members of the instances of some classes, MIDIEvent for example.

The modules will be basically just functions that transform data structures. Because the data structures will be plain objects, they can be very easily stored in any state management library.

Below 2 examples that show the effect of these changes in a small snippet of code that creates a song from a MIDI file. The first example shows how it is done in qambi, as you can see it makes use of a static class function to create an instance of Song and then a member function (method) is called to start the playback:

```typescript
import { Song } from 'qambi';

const url = 'url/to/your/midifile.mid';
const song = await Song.fromMIDIFile(url);
song.play();

```

The new approach shows a function that transforms binary MIDI data into an data structure that contains the bare necessities for playback; a Playable. The play function takes a Playable and a start time for parameters:

```typescript
import { Playable, play, parseMIDIFile } from 'webdaw-modules';

const url: string = 'url/to/your/midifile.mid';
const p: Playable = parseMIDIFile(url);
play(p, 0);
```

## Roadmap

Here is a quick draft of the order in which I will build the new modules:

- [ ] MIDI file parser
- [ ] MusicXML file parser
- [ ] event scheduler
- [ ] simple synthesizer
- [ ] soundfont player
- [ ] metronome
- [ ] MIIDI recorder
- [ ] audio events
- [ ] utils: quantize, fix note lengths
- [ ] utils: note statistics
- [ ] key editor
- [ ] score view (no editor)
- [ ] audio recorder
- [ ] ....
- [ ] support for MPE
- [ ] sysex support (incl. editor)

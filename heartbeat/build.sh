#!/bin/bash

    # ./license.js
    # ./saveAs.js

files="
    ./open_module.js
    ./asset_manager.js
    ./assetpack.js
    ./audio_event.js
    ./audio_recorder.js
    ./audio_track.js
    ./channel_effects.js
    ./event_statistics.js
    ./find_event.js
    ./instrument.js
    ./instrument_config.js
    ./key_editor.js
    ./key_editor_iterator_factory.js
    ./metronome.js
    ./midi_event.js
    ./midi_event_names.js
    ./midi_file.js
    ./midi_note.js
    ./midi_parse.js
    ./midi_stream.js
    ./midi_system.js
    ./midi_write.js
    ./musicxml_parser.js
    ./note.js
    ./parse_events.js
    ./parse_time_events.js
    ./part.js
    ./playhead.js
    ./position.js
    ./quantize_fixed-length.js
    ./sample.js
    ./samplepack.js
    ./scheduler.js
    ./sequencer.js
    ./song.js
    ./song_event_listener.js
    ./song_follow_event.js
    ./song_grid.js
    ./song_update.js
    ./track.js
    ./transpose.js
    ./util.js
    ./close_module.js"

cat $files >./index.js
cp ./index.js ../publish/src/heartbeat/index.js
cp ./index.js ../src/heartbeat/index.js
# uglifyjs ../build/heartbeat.js -c > ../build/heartbeat.min.js
#echo $files

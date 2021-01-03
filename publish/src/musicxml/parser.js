"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMusicXML = void 0;
var midi_1 = require("../util/midi");
var getVolume_1 = require("./part/getVolume");
var getPartName_1 = require("./part/getPartName");
var getChannel_1 = require("./part/getChannel");
var getInstrument_1 = require("./part/getInstrument");
var getMeasureNumber_1 = require("./measure/getMeasureNumber");
var getDivisions_1 = require("./measure/getDivisions");
var getSignature_1 = require("./measure/getSignature");
var getTempo_1 = require("./measure/getTempo");
var getRepeat_1 = require("./measure/getRepeat");
exports.parseMusicXML = function (xmlDoc, ppq) {
    if (ppq === void 0) { ppq = 960; }
    if (xmlDoc === null) {
        return null;
    }
    var type;
    if (xmlDoc.firstChild !== null && xmlDoc.firstChild.nextSibling !== null) {
        type = xmlDoc.firstChild.nextSibling.nodeName;
        // console.log('type', type, nsResolver);
        if (type === "score-partwise") {
            return parsePartWise(xmlDoc, ppq);
        }
        if (type === "score-timewise") {
            return parseTimeWise(xmlDoc);
        }
    }
    // console.log('unknown type', type);
    return null;
};
var parsePartWise = function (xmlDoc, ppq) {
    if (ppq === void 0) { ppq = 960; }
    if (xmlDoc === null) {
        return null;
    }
    // const nsResolver = xmlDoc.createNSResolver(
    //   xmlDoc.ownerDocument === null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement
    // );
    var nsResolver = xmlDoc.createNSResolver(xmlDoc.documentElement);
    var partIterator = xmlDoc.evaluate("//score-part", xmlDoc, nsResolver, XPathResult.ANY_TYPE, null);
    var parts = [];
    var tiedNotes = {};
    // const repeats: Repeat = [{ bar: 1, type: "forward" }];
    var repeats = [];
    var initialTempo = -1;
    var initialNumerator = -1;
    var initialDenominator = -1;
    var index = -1;
    var partNode;
    while ((partNode = partIterator.iterateNext())) {
        index += 1;
        var _a = __read(getPartName_1.getPartName(xmlDoc, partNode, nsResolver), 2), partId = _a[0], partName = _a[1];
        var volume = getVolume_1.getVolume(xmlDoc, partNode, nsResolver);
        var velocity = (volume / 100) * 127;
        var channel = getChannel_1.getChannel(xmlDoc, partNode, nsResolver);
        var instrument = getInstrument_1.getInstrument(xmlDoc, partNode, nsResolver);
        parts.push({ id: partId, name: partName, volume: volume, instrument: instrument, events: [] });
        var measureIterator = xmlDoc.evaluate('//part[@id="' + partId + '"]/measure', partNode, nsResolver, XPathResult.ANY_TYPE, null);
        var ticks = 0;
        var tmp = void 0;
        var measureNode = void 0;
        var divisions = 24;
        while ((measureNode = measureIterator.iterateNext())) {
            var measureNumber = getMeasureNumber_1.getMeasureNumber(xmlDoc, measureNode, nsResolver);
            divisions = getDivisions_1.getDivisions(xmlDoc, measureNode, nsResolver, divisions);
            var signatureEvent = getSignature_1.getSignature(xmlDoc, measureNode, nsResolver);
            if (signatureEvent !== null) {
                signatureEvent.ticks = ticks;
                signatureEvent.bar = measureNumber;
                parts[index].events.push(signatureEvent);
                if (initialNumerator === -1) {
                    (initialNumerator = signatureEvent.numerator, initialDenominator = signatureEvent.denominator);
                }
            }
            var timeEvent = getTempo_1.getTempo(xmlDoc, measureNode, nsResolver);
            if (timeEvent !== null) {
                timeEvent.ticks = ticks;
                timeEvent.bar = measureNumber;
                parts[index].events.push(timeEvent);
                if (initialTempo === -1) {
                    (initialTempo = timeEvent.bpm);
                }
            }
            var repeat = getRepeat_1.getRepeat(xmlDoc, measureNode, nsResolver);
            if (repeat !== null && measureNumber !== 1) {
                // console.log(repeat, measureNumber);
                repeats.push({ type: repeat, bar: measureNumber });
            }
            // get all notes and backups
            var noteIterator = xmlDoc.evaluate("*[self::note or self::backup or self::forward]", measureNode, nsResolver, XPathResult.ANY_TYPE, null);
            var noteNode = void 0;
            while ((noteNode = noteIterator.iterateNext())) {
                // console.log(noteNode);
                var noteDuration = 0;
                var noteDurationTicks = 0;
                var voice = -1;
                var staff = -1;
                var tieStart = false;
                var tieStop = false;
                var tieIterator = xmlDoc.evaluate("tie", noteNode, nsResolver, XPathResult.ANY_TYPE, null);
                var tieNode = void 0;
                while ((tieNode = tieIterator.iterateNext())) {
                    var tieType = xmlDoc.evaluate("@type", tieNode, nsResolver, XPathResult.STRING_TYPE, null).stringValue;
                    if (tieType === "start") {
                        tieStart = true;
                    }
                    else if (tieType === "stop") {
                        tieStop = true;
                    }
                }
                var rest = xmlDoc.evaluate("rest", noteNode, nsResolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                var chord = xmlDoc.evaluate("chord", noteNode, nsResolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                var grace = xmlDoc.evaluate("grace", noteNode, nsResolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (rest !== null) {
                    noteDuration = xmlDoc.evaluate("duration", noteNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
                    ticks += (noteDuration / divisions) * ppq;
                    // console.log("rest", ticks);
                }
                else if (noteNode.nodeName === "note" && grace === null) {
                    var step = xmlDoc.evaluate("pitch/step", noteNode, nsResolver, XPathResult.STRING_TYPE, null).stringValue;
                    var alter = xmlDoc.evaluate("pitch/alter", noteNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
                    var octave = xmlDoc.evaluate("pitch/octave", noteNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
                    tmp = xmlDoc.evaluate("voice", noteNode, nsResolver, XPathResult.NUMBER_TYPE, null)
                        .numberValue;
                    if (!isNaN(tmp)) {
                        voice = tmp;
                    }
                    tmp = xmlDoc.evaluate("staff", noteNode, nsResolver, XPathResult.NUMBER_TYPE, null)
                        .numberValue;
                    if (!isNaN(tmp)) {
                        staff = tmp;
                    }
                    noteDuration = xmlDoc.evaluate("duration", noteNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
                    noteDurationTicks = (noteDuration / divisions) * ppq;
                    // const noteType = xmlDoc.evaluate('type', noteNode, nsResolver, XPathResult.STRING_TYPE, null).stringValue;
                    var noteName = step;
                    if (!isNaN(alter)) {
                        switch (alter) {
                            case -2:
                                noteName += "bb";
                                break;
                            case -1:
                                noteName += "b";
                                break;
                            case 1:
                                noteName += "#";
                                break;
                            case 2:
                                noteName += "##";
                                break;
                        }
                    }
                    // in case of a chord, move the cursor back
                    if (chord !== null) {
                        ticks -= noteDurationTicks;
                    }
                    // console.log(ticks, measureNumber, chord);
                    var noteNumber = midi_1.getNoteNumber(noteName, octave);
                    // console.log("\t", ticks, "ON", n++);
                    var note = {
                        ticks: ticks,
                        descr: "note on",
                        type: 0x90,
                        channel: channel,
                        noteNumber: noteNumber,
                        velocity: velocity,
                        bar: measureNumber,
                    };
                    ticks += noteDurationTicks;
                    parts[index].events.push(note);
                    //console.log('tie', tieStart, tieStop);
                    if (tieStart === false && tieStop === false) {
                        // no ties
                        //console.log('no ties', measureNumber, voice, noteNumber, tiedNotes);
                        // console.log(ticks, "OFF", index);
                        parts[index].events.push({
                            ticks: ticks,
                            descr: "note off",
                            type: 0x80,
                            channel: channel,
                            noteNumber: noteNumber,
                            velocity: 0,
                            bar: measureNumber,
                        });
                    }
                    else if (tieStart === true && tieStop === false) {
                        // start of tie
                        tiedNotes["N_" + staff + "-" + voice + "-" + noteNumber] = noteDurationTicks;
                        //console.log('start', measureNumber, voice, noteNumber, tiedNotes);
                    }
                    else if (tieStart === true && tieStop === true) {
                        // tied to yet another note
                        tiedNotes["N_" + staff + "-" + voice + "-" + noteNumber] += noteDurationTicks;
                        //console.log('thru', measureNumber, voice, noteNumber, tiedNotes);
                    }
                    else if (tieStart === false && tieStop === true) {
                        // end of tie
                        tiedNotes["N_" + staff + "-" + voice + "-" + noteNumber] += noteDurationTicks;
                        // console.log(ticks, "OFF", index);
                        parts[index].events.push({
                            // command: NOTE_OFF,
                            ticks: tiedNotes["N_" + staff + "-" + voice + "-" + noteNumber],
                            descr: "note off",
                            type: 0x80,
                            channel: channel,
                            noteNumber: noteNumber,
                            velocity: 0,
                            bar: measureNumber,
                        });
                        delete tiedNotes["N_" + staff + "-" + voice + "-" + noteNumber];
                        //console.log('end', measureNumber, voice, noteNumber, tiedNotes);
                    }
                }
                else if (noteNode.nodeName === "backup") {
                    noteDuration = xmlDoc.evaluate("duration", noteNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
                    ticks -= (noteDuration / divisions) * ppq;
                    // console.log("backup", ticks);
                    //console.log(noteDuration, divisions);
                }
                else if (noteNode.nodeName === "forward") {
                    noteDuration = xmlDoc.evaluate("duration", noteNode, nsResolver, XPathResult.NUMBER_TYPE, null).numberValue;
                    ticks += (noteDuration / divisions) * ppq;
                    // console.log('forward', ticks);
                    //console.log(noteDuration, divisions);
                }
            }
        }
    }
    var repeats2 = [];
    var j = -1;
    // console.log(repeats);
    var filtered = [];
    for (var k = 0; k < repeats.length; k++) {
        var r = repeats[k];
        var double = false;
        for (var k1 = 0; k1 < filtered.length; k1++) {
            var r1 = filtered[k1];
            if (r1.bar === r.bar && r1.type === r.type) {
                double = true;
                break;
            }
        }
        if (!double) {
            filtered.push(r);
        }
    }
    filtered.forEach(function (t, i) {
        if (t.type === "forward") {
            j++;
            repeats2[j] = [t.bar];
        }
        else if (t.type === "backward") {
            repeats2[j].push(t.bar);
        }
    });
    // console.log(repeats, repeats2);
    return {
        ppq: ppq,
        parts: parts,
        repeats: repeats2,
        initialTempo: initialTempo,
        initialNumerator: initialNumerator,
        initialDenominator: initialDenominator,
    };
};
var parseTimeWise = function (doc) {
    // to be implemented
    return null;
};
//# sourceMappingURL=parser.js.map
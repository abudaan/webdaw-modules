import { getNoteNumber } from "../util/midi";
import { MIDIEvent } from "../MIDIEvent";
import { getVolume } from "./part/getVolume";
import { getPartName } from "./part/getPartName";
import { getChannel } from "./part/getChannel";
import { getInstrument } from "./part/getInstrument";
import { getMeasureNumber } from "./measure/getMeasureNumber";
import { getDivisions } from "./measure/getDivisions";
import { getSignature } from "./measure/getSignature";
import { getTempo } from "./measure/getTempo";
import { getRepeat } from "./measure/getRepeat";

// let n = 0;

type PartData = {
  id: string;
  name: string;
  instrument: string;
  volume: number;
  events: MIDIEvent[];
};

export type Repeat = {
  bar: number;
  type: string;
}[];

export type ParsedMusicXML = {
  ppq: number;
  parts: PartData[];
  repeats: number[][];
  initialTempo: number;
  initialNumerator: number;
  initialDenominator: number;
} | null;

export const parseMusicXML = (xmlDoc: XMLDocument, ppq: number = 960): ParsedMusicXML => {
  if (xmlDoc === null) {
    return null;
  }
  let type: string;
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

const parsePartWise = (xmlDoc: XMLDocument, ppq: number = 960): ParsedMusicXML => {
  if (xmlDoc === null) {
    return null;
  }
  // const nsResolver = xmlDoc.createNSResolver(
  //   xmlDoc.ownerDocument === null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement
  // );
  const nsResolver = xmlDoc.createNSResolver(xmlDoc.documentElement);
  const partIterator = xmlDoc.evaluate(
    "//score-part",
    xmlDoc,
    nsResolver,
    XPathResult.ANY_TYPE,
    null
  );
  const parts: PartData[] = [];
  const tiedNotes: { [id: string]: number } = {};
  // const repeats: Repeat = [{ bar: 1, type: "forward" }];
  let repeats: Repeat = [];

  let initialTempo = -1;
  let initialNumerator = -1;
  let initialDenominator = -1;
  let index = -1;
  let partNode: Node | null;
  while ((partNode = partIterator.iterateNext())) {
    index += 1;
    const [partId, partName] = getPartName(xmlDoc, partNode, nsResolver);
    const volume = getVolume(xmlDoc, partNode, nsResolver);
    const velocity = (volume / 100) * 127;
    const channel = getChannel(xmlDoc, partNode, nsResolver);
    const instrument = getInstrument(xmlDoc, partNode, nsResolver);
    parts.push({ id: partId, name: partName, volume, instrument, events: [] });

    const measureIterator = xmlDoc.evaluate(
      '//part[@id="' + partId + '"]/measure',
      partNode,
      nsResolver,
      XPathResult.ANY_TYPE,
      null
    );

    let ticks = 0;
    let tmp: any;
    let measureNode: Node | null;
    let divisions: number = 24;
    while ((measureNode = measureIterator.iterateNext())) {
      const measureNumber = getMeasureNumber(xmlDoc, measureNode, nsResolver);
      divisions = getDivisions(xmlDoc, measureNode, nsResolver, divisions);

      const signatureEvent = getSignature(xmlDoc, measureNode, nsResolver);
      if (signatureEvent !== null) {
        signatureEvent.ticks = ticks;
        signatureEvent.bar = measureNumber;
        parts[index].events.push(signatureEvent);
        if (initialNumerator === -1) {
          ({ numerator: initialNumerator, denominator: initialDenominator } = signatureEvent);
        }
      }

      const timeEvent = getTempo(xmlDoc, measureNode, nsResolver);
      if (timeEvent !== null) {
        timeEvent.ticks = ticks;
        timeEvent.bar = measureNumber;
        parts[index].events.push(timeEvent);
        if (initialTempo === -1) {
          ({ bpm: initialTempo } = timeEvent);
        }
      }

      const repeat = getRepeat(xmlDoc, measureNode, nsResolver);
      if (repeat !== null && measureNumber !== 1) {
        // console.log(repeat, measureNumber);
        repeats.push({ type: repeat, bar: measureNumber });
      }

      // get all notes and backups
      const noteIterator = xmlDoc.evaluate(
        "*[self::note or self::backup or self::forward]",
        measureNode,
        nsResolver,
        XPathResult.ANY_TYPE,
        null
      );
      let noteNode: Node | null;
      while ((noteNode = noteIterator.iterateNext())) {
        // console.log(noteNode);
        let noteDuration = 0;
        let noteDurationTicks = 0;
        let voice = -1;
        let staff = -1;

        let tieStart = false;
        let tieStop = false;
        const tieIterator = xmlDoc.evaluate(
          "tie",
          noteNode,
          nsResolver,
          XPathResult.ANY_TYPE,
          null
        );
        let tieNode: Node | null;
        while ((tieNode = tieIterator.iterateNext())) {
          const tieType = xmlDoc.evaluate(
            "@type",
            tieNode,
            nsResolver,
            XPathResult.STRING_TYPE,
            null
          ).stringValue;
          if (tieType === "start") {
            tieStart = true;
          } else if (tieType === "stop") {
            tieStop = true;
          }
        }

        const rest = xmlDoc.evaluate(
          "rest",
          noteNode,
          nsResolver,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;

        const chord = xmlDoc.evaluate(
          "chord",
          noteNode,
          nsResolver,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;

        const grace = xmlDoc.evaluate(
          "grace",
          noteNode,
          nsResolver,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;

        if (rest !== null) {
          noteDuration = xmlDoc.evaluate(
            "duration",
            noteNode,
            nsResolver,
            XPathResult.NUMBER_TYPE,
            null
          ).numberValue;
          ticks += (noteDuration / divisions) * ppq;
          // console.log("rest", ticks);
        } else if (noteNode.nodeName === "note" && grace === null) {
          const step = xmlDoc.evaluate(
            "pitch/step",
            noteNode,
            nsResolver,
            XPathResult.STRING_TYPE,
            null
          ).stringValue;
          const alter = xmlDoc.evaluate(
            "pitch/alter",
            noteNode,
            nsResolver,
            XPathResult.NUMBER_TYPE,
            null
          ).numberValue;
          const octave = xmlDoc.evaluate(
            "pitch/octave",
            noteNode,
            nsResolver,
            XPathResult.NUMBER_TYPE,
            null
          ).numberValue;
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
          noteDuration = xmlDoc.evaluate(
            "duration",
            noteNode,
            nsResolver,
            XPathResult.NUMBER_TYPE,
            null
          ).numberValue;
          noteDurationTicks = (noteDuration / divisions) * ppq;

          // const noteType = xmlDoc.evaluate('type', noteNode, nsResolver, XPathResult.STRING_TYPE, null).stringValue;
          let noteName = step;

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

          const noteNumber = getNoteNumber(noteName, octave);
          // console.log("\t", ticks, "ON", n++);
          const note = {
            ticks,
            descr: "note on",
            type: 0x90,
            channel,
            noteNumber,
            velocity,
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
              ticks,
              descr: "note off",
              type: 0x80,
              channel,
              noteNumber,
              velocity: 0,
              bar: measureNumber,
            });
          } else if (tieStart === true && tieStop === false) {
            // start of tie
            tiedNotes[`N_${staff}-${voice}-${noteNumber}`] = noteDurationTicks;
            //console.log('start', measureNumber, voice, noteNumber, tiedNotes);
          } else if (tieStart === true && tieStop === true) {
            // tied to yet another note
            tiedNotes[`N_${staff}-${voice}-${noteNumber}`] += noteDurationTicks;
            //console.log('thru', measureNumber, voice, noteNumber, tiedNotes);
          } else if (tieStart === false && tieStop === true) {
            // end of tie
            tiedNotes[`N_${staff}-${voice}-${noteNumber}`] += noteDurationTicks;
            // console.log(ticks, "OFF", index);

            parts[index].events.push({
              // command: NOTE_OFF,
              ticks: tiedNotes[`N_${staff}-${voice}-${noteNumber}`],
              descr: "note off",
              type: 0x80,
              channel,
              noteNumber,
              velocity: 0,
              bar: measureNumber,
            });
            delete tiedNotes[`N_${staff}-${voice}-${noteNumber}`];
            //console.log('end', measureNumber, voice, noteNumber, tiedNotes);
          }
        } else if (noteNode.nodeName === "backup") {
          noteDuration = xmlDoc.evaluate(
            "duration",
            noteNode,
            nsResolver,
            XPathResult.NUMBER_TYPE,
            null
          ).numberValue;
          ticks -= (noteDuration / divisions) * ppq;
          // console.log("backup", ticks);
          //console.log(noteDuration, divisions);
        } else if (noteNode.nodeName === "forward") {
          noteDuration = xmlDoc.evaluate(
            "duration",
            noteNode,
            nsResolver,
            XPathResult.NUMBER_TYPE,
            null
          ).numberValue;
          ticks += (noteDuration / divisions) * ppq;
          // console.log('forward', ticks);
          //console.log(noteDuration, divisions);
        }
      }
    }
  }

  const repeats2: number[][] = [];
  let j: number = -1;
  if (repeats.length && repeats[0].type !== "forward") {
    repeats = [{ type: "forward", bar: 1 }, ...repeats];
  }
  // console.log(repeats);

  const filtered = [];
  for (let k = 0; k < repeats.length; k++) {
    const r = repeats[k];
    let double = false;
    for (let k1 = 0; k1 < filtered.length; k1++) {
      const r1 = filtered[k1];
      if (r1.bar === r.bar && r1.type === r.type) {
        double = true;
        break;
      }
    }
    if (!double) {
      filtered.push(r);
    }
  }

  filtered.forEach((t, i) => {
    if (t.type === "forward") {
      j++;
      repeats2[j] = [t.bar];
    } else if (t.type === "backward") {
      repeats2[j].push(t.bar);
    }
  });
  // console.log(repeats, repeats2);

  return {
    ppq,
    parts,
    repeats: repeats2,
    initialTempo,
    initialNumerator,
    initialDenominator,
  };
};

const parseTimeWise = (doc: XMLDocument): ParsedMusicXML => {
  // to be implemented
  return null;
};

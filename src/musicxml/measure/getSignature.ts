import { TimeSignatureEvent } from "../../midi_events";

export const getSignature = (
  xmlDoc: XMLDocument,
  measureNode: Node,
  nsResolver: XPathNSResolver
): TimeSignatureEvent => {
  const numerator = xmlDoc.evaluate(
    "attributes/time/beats",
    measureNode,
    nsResolver,
    XPathResult.NUMBER_TYPE,
    null
  ).numberValue;

  const denominator = xmlDoc.evaluate(
    "attributes/time/beat-type",
    measureNode,
    nsResolver,
    XPathResult.NUMBER_TYPE,
    null
  ).numberValue;

  // console.log(numerator, denominator);

  if (numerator && denominator) {
    const event: TimeSignatureEvent = {
      type: 0xff,
      subType: 0x58,
      descr: "time signature",
      numerator,
      denominator,
      metronome: 0, // @TODO: calculate this
      thirtySeconds: 0,
      ticks: -1, // will be set in mxml_parser
    };
    return event;
  }

  return null;
};

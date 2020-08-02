import { TimeSignatureEvent } from "../../MIDIEvent";
export declare const getSignature: (xmlDoc: XMLDocument, measureNode: Node, nsResolver: XPathNSResolver) => TimeSignatureEvent | null;

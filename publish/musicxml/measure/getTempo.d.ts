import { TempoEvent } from "../../types/MIDIEvent";
export declare const getTempo: (xmlDoc: XMLDocument, measureNode: Node, nsResolver: XPathNSResolver) => TempoEvent | null;

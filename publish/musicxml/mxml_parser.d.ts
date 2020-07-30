import { Song } from "../types/Song";
export declare type Repeat = {
    bar: number;
    type: string;
}[];
declare const parseMusicXML: (xmlDoc: XMLDocument, ppq?: number) => Song | null;
export { parseMusicXML };

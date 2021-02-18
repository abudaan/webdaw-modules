import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
export declare type NoteInfo = {
    ticks: number;
    noteNumber: number;
    measureIndex: number;
};
/**
 * @param {OpenSheetMusicDisplay} osmd
 * @param {number} staffIndex
 * @param {number} [ppq] - default 960
 * @param {number} [amount] - default 100
 *
 * The returned notes are objects that contain the ticks value, the MIDI note number and the measure index.
 * Passing a value for ppq affects the ticks values of the notes, this is handy if you need to match tick values
 * with a MIDI file that has a different ppq value then the score.
 */
export declare const getNotesInStaff: (osmd: OpenSheetMusicDisplay, staffIndex: number, repeats: any, ppq?: number, amount?: number) => NoteInfo[];

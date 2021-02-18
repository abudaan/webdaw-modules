import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { RepeatData } from "../musicxml/parser";
export declare type NoteInfo = {
    ticks: number;
    noteNumber: number;
    measureIndex: number;
};
export declare type NotesInStaffArgs = {
    osmd: OpenSheetMusicDisplay;
    staffIndex: number;
    repeats: RepeatData[];
    ppq?: number;
    amount?: number;
    start?: number;
};
/**
 * @param {NotesInStaffArgs} args
 *
 * The returned notes are objects that contain the ticks value, the MIDI note number and the measure index.
 * Passing a value for ppq affects the ticks values of the notes, this is handy if you need to match tick values
 * with a MIDI file that has a different ppq value then the score.
 */
export declare const getNotesInStaff: ({ osmd, staffIndex, repeats, ppq, amount, start }: NotesInStaffArgs) => NoteInfo[];

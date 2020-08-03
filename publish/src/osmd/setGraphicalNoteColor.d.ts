/**
 * Simple function that changes the color of a note in the SVG document of the OSMD score; by accessing
 * SVG element directly there is no need to re-render the complete OSMD score. Re-rendering the score is
 * a too expensive action.
 */
export declare const setGraphicalNoteColor: (el: SVGElement, color: string) => void;

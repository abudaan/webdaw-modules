"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGraphicalNoteColor = void 0;
/**
 * Simple function that changes the color of a note in the SVG document of the OSMD score; by accessing
 * SVG element directly there is no need to re-render the complete OSMD score. Re-rendering the score is
 * a too expensive action.
 */
exports.setGraphicalNoteColor = function (el, color) {
    var stems = el.getElementsByClassName("vf-stem");
    var noteheads = el.getElementsByClassName("vf-notehead");
    // console.log(noteheads);
    for (var i = 0; i < stems.length; i++) {
        var stem = stems[i];
        if (stem.firstChild !== null) {
            stem.firstChild.setAttribute("fill", color);
            stem.firstChild.setAttribute("stroke", color);
        }
    }
    for (var i = 0; i < noteheads.length; i++) {
        var notehead = noteheads[i];
        if (notehead.firstChild !== null) {
            notehead.firstChild.setAttribute("fill", color);
            notehead.firstChild.setAttribute("stroke", color);
        }
    }
};
//# sourceMappingURL=setGraphicalNoteColor.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapper1 = void 0;
var getEntities_1 = require("./getEntities");
var util_1 = require("./util");
exports.mapper1 = function (osmd) {
    var entryData = getEntities_1.getEntities(osmd);
    // console.log(entryData);
    var noteHeads = [];
    var offsetX = osmd["container"].offsetLeft;
    var offsetY = osmd["container"].offsetTop;
    var scrollPosX = window.scrollX;
    var scrollPosY = window.scrollY;
    var t = document.querySelectorAll(".vf-notehead");
    // const t = document.querySelectorAll(".vf-tabnote");
    t.forEach(function (a, i) {
        util_1.setAttibuteSVGElement(a, "path", "opacity", "0.2");
        var bbox = a.getBoundingClientRect();
        bbox.x -= offsetX;
        bbox.y -= offsetY;
        // createDiv(bbox);
        noteHeads.push({ element: a, bbox: bbox, id: "notehead-" + i });
    });
    console.time("start");
    for (var i = 0; i < entryData.length; i++) {
        // if (i === 354) {
        //   break;
        // }
        var entry = entryData[i];
        var _loop_1 = function (j) {
            var stave = entry[j];
            if (stave) {
                // const maxMatches = stave.notes.reduce((acc, val) => {
                //   if (val.isRestFlag === false) {
                //     return acc + 1;
                //   }
                //   return acc;
                // }, 0);
                var maxMatches = stave.notes.length;
                var matches = {
                    notes: [],
                    graphicalNotes: [],
                };
                for (var s = 0; s < stave.notes.length; s++) {
                    var note = stave.notes[s];
                    for (var k = 0; k < noteHeads.length; k++) {
                        var noteHead = noteHeads[k];
                        var element = noteHead.element, bbox = noteHead.bbox;
                        var margin = 5;
                        // if (note.isRestFlag === false) {
                        if (
                        // match(bbox.x, stave.x, 10) &&
                        bbox.x >= stave.x - margin &&
                            bbox.right <= stave.x + stave.width + margin &&
                            bbox.y >= stave.y - margin &&
                            bbox.bottom <= stave.y + stave.height + margin) {
                            matches.notes.push(note);
                            matches.graphicalNotes.push(noteHead);
                            if (matches.notes.length === maxMatches) {
                                // console.log("reaping done!", k);
                                break;
                            }
                        }
                        // }
                    }
                }
                if (matches.notes.length === 1) {
                    var note_1 = matches.notes[0];
                    var graphical = matches.graphicalNotes[0];
                    if (graphical) {
                        var element = graphical.element;
                        if (note_1.isRestFlag === false) {
                            util_1.setAttibuteSVGElement(element, "path", "fill", "red");
                            element.addEventListener("click", function () {
                                console.log(note_1.measureIndex, note_1.staffIndex, note_1.noteNumber);
                            });
                        }
                    }
                }
                else if (matches.notes.length > 1) {
                    var notes = matches.notes, graphicalNotes = matches.graphicalNotes;
                    var notesById_1 = {};
                    var graphicalNotesById_1 = {};
                    notes.forEach(function (note) {
                        notesById_1[note.id] = note;
                    });
                    notes = Object.values(notesById_1);
                    graphicalNotes.forEach(function (note) {
                        graphicalNotesById_1[note.id] = note;
                    });
                    graphicalNotes = Object.values(graphicalNotesById_1);
                    var _loop_2 = function (i_1) {
                        var note = notes[i_1];
                        var graphical = graphicalNotes[i_1];
                        if (graphical) {
                            if (note.isRestFlag === false) {
                                var element = graphical.element;
                                util_1.setAttibuteSVGElement(element, "path", "fill", "red");
                                element.addEventListener("click", function () {
                                    console.log(note.measureIndex, note.staffIndex, note.noteNumber);
                                });
                            }
                        }
                    };
                    // notes.sort((a, b) => {
                    //   if (a.noteNumber > b.noteNumber) {
                    //     return -1;
                    //   } else if (a.noteNumber > b.noteNumber) {
                    //     return 1;
                    //   }
                    //   return 0;
                    // });
                    // graphicalNotes = graphicalNotes.sort((a, b) => {
                    //   if (a.bbox.y > b.bbox.y) {
                    //     return 1;
                    //   } else if (a.bbox.y < b.bbox.y) {
                    //     return -1;
                    //   }
                    //   return 0;
                    // });
                    for (var i_1 = 0; i_1 < notes.length; i_1++) {
                        _loop_2(i_1);
                    }
                }
                // console.log(stave.measureIndex, stave.containerIndex);
                // console.log(matches.notes);
                // console.log(matches.graphicalNotes);
                // console.log("----");
            }
        };
        for (var j = 0; j < entry.length; j++) {
            _loop_1(j);
        }
    }
    console.timeEnd("start");
};
//# sourceMappingURL=mapper1.js.map
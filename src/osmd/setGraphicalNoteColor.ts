/*
  Simple function that changes the color of a note in the SVG document of the OSMD score; by accessing
  SVG element directly there is no need to re-render the complete OSMD score. Re-rendering the score is
  a too expensive action.
*/

const setStaveNoteColor = (el: SVGElement, color: string) => {
  const stems = el.getElementsByClassName('vf-stem');
  const noteheads = el.getElementsByClassName('vf-notehead');
  // console.log(stem, notehead);
  for (let i = 0; i < stems.length; i++) {
    const stem = stems[i];
    if (stem.firstChild !== null) {
      (stem.firstChild as SVGElement).setAttribute('fill', color);
      (stem.firstChild as SVGElement).setAttribute('stroke', color);
    }
  }
  for (let i = 0; i < noteheads.length; i++) {
    const notehead = noteheads[i];
    if (notehead.firstChild !== null) {
      (notehead.firstChild as SVGElement).setAttribute('fill', color);
      (notehead.firstChild as SVGElement).setAttribute('stroke', color);
    }
  }
}

export { setStaveNoteColor }
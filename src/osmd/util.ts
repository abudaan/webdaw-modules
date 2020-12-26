export const getRandomColor = (alpha: number = 0.3) => {
  const color = [];
  for (var i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 200));
  }
  return `rgba(${color.join(", ")}, ${alpha}`;
};

export const domToSvg = (svg: any, point: any) => {
  var pt = svg.createSVGPoint();
  pt.x = point.x;
  pt.y = point.y;
  var sp = pt.matrixTransform(svg.getScreenCTM().inverse());
  console.log("SP", sp);
  return {
    x: sp.x,
    y: sp.y,
  };
};

export const setAttibuteSVGElement = (
  elem: SVGElement,
  type: string,
  attribute: string,
  value: string
) => {
  if (elem.hasChildNodes()) {
    elem.childNodes.forEach(child => {
      const c = child as SVGElement;
      if (c.tagName && c.tagName.toLowerCase() === type) {
        (c as SVGElement).setAttribute(attribute, value);
      }
      if (c.hasChildNodes()) {
        setAttibuteSVGElement(c, type, attribute, value);
      }
    });
  }
};

export const match = (a: number, b: number, margin: number = 1): boolean => {
  // console.log(a, b);
  // console.log(Math.abs(a - b) < margin);
  // console.log("---");
  if (a === b) {
    return true;
  }
  if (Math.abs(a - b) <= margin) {
    return true;
  }
  return false;
};

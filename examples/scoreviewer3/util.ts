type Arg = {
  bbox: { x: number; y: number; width: number; height: number };
  offsetX: number;
  offsetY: number;
  scrollPosX: number;
  scrollPosY: number;
  parent: HTMLElement;
};

export const createDiv = ({
  bbox,
  offsetX,
  offsetY,
  scrollPosX,
  scrollPosY,
  parent,
}: Arg): void => {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.zIndex = "-101";
  div.style.backgroundColor = "rgba(0, 90, 255, 0.2)"; // getRandomColor(0.6);
  div.style.border = "1px dotted blue";
  div.style.boxSizing = "border-box";

  div.style.width = `${bbox.width}px`;
  div.style.height = `${bbox.height}px`;
  div.style.left = `${bbox.x + offsetX + scrollPosX}px`;
  div.style.top = `${bbox.y + offsetY + scrollPosY}px`;
  div.addEventListener("mousedown", () => {
    console.log(div);
  });
  parent.appendChild(div);
};

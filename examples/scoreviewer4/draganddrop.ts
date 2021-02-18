import { useStore3D, Store3D } from "./store";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

let gen1 = false;
const fileReader = new FileReader();
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
loader.setDRACOLoader(dracoLoader);

fileReader.addEventListener("load", async () => {
  const model = await loader.loadAsync(fileReader.result as string);
  // console.log(model);
  useStore3D.setState({ model: model["scene"], gen1 });
});

const loadFiles = (files: FileList) => {
  const file = files[0];
  const type = file.type;
  const name = file.name;
  gen1 = name.indexOf(".1.glb") !== -1;
  if (name.indexOf(".glb") !== null || type === "glb") {
    fileReader.readAsDataURL(file);
  }
};

export const setupDropArea = () => {
  document.addEventListener(
    "dragover",
    (e) => {
      e.preventDefault();
    },
    false
  );

  document.addEventListener(
    "dragenter",
    (e) => {
      e.preventDefault();
    },
    false
  );

  document.addEventListener(
    "dragleave",
    (e) => {
      e.preventDefault();
    },
    false
  );

  document.addEventListener(
    "drop",
    (e) => {
      e.preventDefault();
      loadFiles(e.dataTransfer.files);
    },
    false
  );
};

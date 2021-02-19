import { AnchorData } from "webdaw-modules";
import { store } from "./store";

export const setup = () => {
  const unsub = store.subscribe(
    (anchor: AnchorData | null) => {
      if (anchor !== null) {
        window.scroll({
          top: anchor.yPos,
          behavior: "smooth",
        });
      }
    },
    (state) => state.currentPlayheadAnchor
  );

  return {
    cleanup: () => {
      unsub();
    },
  };
};

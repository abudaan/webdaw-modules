import { OpenSheetMusicDisplay } from "opensheetmusicdisplay/build/dist/src";
import { getBoundingBoxData, BoundingBox2 } from "./mapper3";

export const getPlayheadAnchorTicks = (osmd: OpenSheetMusicDisplay, ppq: number = 960) => {
  let ticks = 0;
  const anchorTicks: {
    ticks: number;
    bbox: BoundingBox2;
  }[] = osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.map(container => {
    const realValue = container.AbsoluteTimestamp.RealValue;
    // console.log(container.AbsoluteTimestamp);
    const boxes = container.StaffEntries.map(entry => {
      return getBoundingBoxData((entry as any).boundingBox);
    });
    boxes.sort((a, b) => {
      if (a.x < b.x) {
        return -1;
      }
      if (a.x > b.x) {
        return 1;
      }
      return 0;
    });
    // console.log(boxes);
    ticks = ppq * 4 * realValue;
    return { ticks, bbox: boxes[0] };
  });
  return anchorTicks;
};

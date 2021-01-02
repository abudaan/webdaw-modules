"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayheadAnchorTicks = void 0;
var mapper3_1 = require("./mapper3");
exports.getPlayheadAnchorTicks = function (osmd, ppq) {
    if (ppq === void 0) { ppq = 960; }
    var ticks = 0;
    var anchorTicks = osmd.GraphicSheet.VerticalGraphicalStaffEntryContainers.map(function (container) {
        var realValue = container.AbsoluteTimestamp.RealValue;
        // console.log(container.AbsoluteTimestamp);
        var boxes = container.StaffEntries.map(function (entry) {
            return mapper3_1.getBoundingBoxData(entry.boundingBox);
        });
        boxes.sort(function (a, b) {
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
        return { ticks: ticks, bbox: boxes[0] };
    });
    return anchorTicks;
};
//# sourceMappingURL=getPlayheadAnchorTicks.js.map
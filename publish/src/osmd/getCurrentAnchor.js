"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentAnchor = void 0;
exports.getCurrentAnchor = function (_a) {
    // choose to use millis or ticks to check if the playhead has passed the current anchor
    // millis is recommended when you use a low ppq value and your song has a slow tempo
    var ticks = _a.ticks, millis = _a.millis, endMillis = _a.endMillis, currentAnchor = _a.currentAnchor, anchors = _a.anchors, loops = _a.loops;
    var forceUpdate = false;
    if (currentAnchor !== null) {
        if (loops.length) {
            // check if we are in a loop and if we've reached the last anchor before the song repeats
            // presently only a single loop is supported
            var currentLoop = loops[0];
            var diff1 = millis - currentLoop.startMillis;
            var diff2 = currentLoop.endMillis - millis;
            forceUpdate = diff1 < diff2;
        }
        if (forceUpdate === false) {
            if (endMillis !== -1) {
                // check if the position in millis has passed the current anchor
                forceUpdate = millis >= endMillis;
            }
            else {
                // check if the position in ticks has passed the current anchor
                forceUpdate = ticks >= currentAnchor.endTicks;
            }
        }
    }
    var anchor = currentAnchor;
    // find the current anchor
    if (currentAnchor === null || forceUpdate) {
        // console.log("UPDATE");
        forceUpdate = true;
        var i = 0;
        var index = 0;
        for (; i < anchors.length; i++) {
            anchor = anchors[i];
            if ((anchor === null || anchor === void 0 ? void 0 : anchor.startTicks) > ticks) {
                index = i === 0 ? 0 : i - 1;
                anchor = anchors[index];
                break;
            }
        }
    }
    return { anchor: anchor, updated: forceUpdate };
};
//# sourceMappingURL=getCurrentAnchor.js.map
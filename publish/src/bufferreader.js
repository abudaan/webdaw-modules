"use strict";
// from: https://github.com/pravdomil/jasmid.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BufferReader = void 0;
var BufferReader = /** @class */ (function () {
    function BufferReader(buffer) {
        this.position = 0;
        this.data = new DataView(buffer);
    }
    BufferReader.prototype.read = function (length) {
        var value = this.data.buffer.slice(this.position, this.position + length);
        this.position += length;
        return value;
    };
    BufferReader.prototype.int8 = function () {
        var value = this.data.getInt8(this.position);
        this.position += 1;
        return value;
    };
    BufferReader.prototype.uint8 = function () {
        var value = this.data.getUint8(this.position);
        this.position += 1;
        return value;
    };
    BufferReader.prototype.uint16 = function () {
        var value = this.data.getUint16(this.position);
        this.position += 2;
        return value;
    };
    BufferReader.prototype.uint32 = function () {
        var value = this.data.getUint32(this.position);
        this.position += 4;
        return value;
    };
    BufferReader.prototype.string = function (length) {
        return new TextDecoder("ascii").decode(this.read(length));
    };
    BufferReader.prototype.eof = function () {
        return this.position >= this.data.byteLength;
    };
    /**
     * Read a MIDI-style variable-length integer.
     * (big-endian value in groups of 7 bits, with top bit set to signify that another byte follows)
     */
    BufferReader.prototype.midiInt = function () {
        var result = 0;
        while (true) {
            var value = this.uint8();
            if (value & 128) {
                result += value & 127;
                result <<= 7;
            }
            else {
                return result + value;
            }
        }
    };
    BufferReader.prototype.midiChunk = function () {
        var id = this.string(4);
        var length = this.uint32();
        var data = this.read(length);
        return { id: id, length: length, data: data };
    };
    return BufferReader;
}());
exports.BufferReader = BufferReader;
//# sourceMappingURL=bufferreader.js.map
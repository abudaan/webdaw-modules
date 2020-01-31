// from: https://github.com/pravdomil/jasmid.ts

export class BufferReader {
  private position: number
  private data: DataView

  constructor(buffer: ArrayBufferLike) {
    this.position = 0
    this.data = new DataView(buffer)
  }

  read(length: number) {
    const value = this.data.buffer.slice(this.position, this.position + length)
    this.position += length
    return value
  }

  int8() {
    const value = this.data.getInt8(this.position)
    this.position += 1
    return value
  }

  uint8() {
    const value = this.data.getUint8(this.position)
    this.position += 1
    return value
  }

  uint16() {
    const value = this.data.getUint16(this.position)
    this.position += 2
    return value
  }

  uint32() {
    const value = this.data.getUint32(this.position)
    this.position += 4
    return value
  }

  string(length: number) {
    return new TextDecoder("ascii").decode(this.read(length))
  }

  eof() {
    return this.position >= this.data.byteLength
  }

  /**
   * Read a MIDI-style variable-length integer.
   * (big-endian value in groups of 7 bits, with top bit set to signify that another byte follows)
   */
  midiInt() {
    let result = 0
    while (true) {
      const value = this.uint8()
      if (value & 0b10000000) {
        result += value & 0b1111111
        result <<= 7
      } else {
        return result + value
      }
    }
  }

  midiChunk() {
    const id = this.string(4)
    const length = this.uint32()
    const data = this.read(length)
    return { id, length, data }
  }
}

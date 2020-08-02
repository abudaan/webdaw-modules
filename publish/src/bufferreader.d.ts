export declare class BufferReader {
    private position;
    private data;
    constructor(buffer: ArrayBufferLike);
    read(length: number): ArrayBuffer;
    int8(): number;
    uint8(): number;
    uint16(): number;
    uint32(): number;
    string(length: number): string;
    eof(): boolean;
    /**
     * Read a MIDI-style variable-length integer.
     * (big-endian value in groups of 7 bits, with top bit set to signify that another byte follows)
     */
    midiInt(): number;
    midiChunk(): {
        id: string;
        length: number;
        data: ArrayBuffer;
    };
}

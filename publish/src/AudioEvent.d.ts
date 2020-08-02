export declare type AudioEvent = {
    audioBuffer: AudioBuffer;
    audioNode: AudioBufferSourceNode | null;
    gainNode: GainNode;
    pannerNode: PannerNode;
    start: number;
    offset: number;
    duration: number;
};
export declare const startAudioEvent: (audioContext: AudioContext, audioEvent: AudioEvent) => AudioEvent;
export declare const stopAudioEvent: (audioEvent: AudioEvent, stopParams?: any) => AudioEvent;

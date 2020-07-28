export type AudioEvent = {
  audioBuffer: AudioBuffer;
  audioNode: AudioBufferSourceNode;
  gainNode: GainNode;
  pannerNode: PannerNode;
  // todo: more effects can be added such as reverb
  start: number;
  offset: number;
  duration: number;
};

export const startAudioEvent = (audioContext: AudioContext, audioEvent: AudioEvent): AudioEvent => {
  // console.log("create audio node");
  const audioNode = audioContext.createBufferSource();
  audioNode.buffer = audioEvent.audioBuffer;
  audioNode
    .connect(audioEvent.gainNode)
    .connect(audioEvent.pannerNode)
    .connect(audioContext.destination);

  audioNode.start(audioEvent.start, audioEvent.offset, audioEvent.duration);

  return {
    ...audioEvent,
    audioNode,
  };
};

export const stopAudioEvent = (audioEvent: AudioEvent, stopParams?: any): AudioEvent => {
  // todo: add stop params such as when to stop and fade out
  audioEvent.audioNode.stop();
  return {
    ...audioEvent,
    audioNode: null,
  };
};

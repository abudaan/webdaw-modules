export const getBarInfo = (song: Heartbeat.Song, bar: number) => {
  const startMillis = (song.getPosition('barsandbeats', bar, 0, 0, 0) as any).millis;
  const endMillis = (song.getPosition('barsandbeats', bar + 1, 0, 0, 0) as any).millis;
  return {
    durationMillis: endMillis - startMillis,
    startMillis: startMillis,
  };
};

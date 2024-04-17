export const convertSecondsToMinutes = (secondsToConvert) => {
  const minutes = Math.floor(secondsToConvert / 60);
  const seconds = secondsToConvert % 60;
  const timeMinutes = minutes.toString().padStart(2, '0');
  const timeSeconds = seconds.toString().padStart(2, '0');
  return {timeMinutes, timeSeconds}
}
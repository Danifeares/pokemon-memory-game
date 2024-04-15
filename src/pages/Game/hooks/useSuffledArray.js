export const useSuffledArray = (array) => {
  const suffledArray = [...array, ...array];
  suffledArray.sort(() => Math.random() - 0.5);
  return suffledArray;
}
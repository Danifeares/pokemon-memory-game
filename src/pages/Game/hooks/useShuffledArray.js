import { v4 as uuidv4 } from 'uuid';

export const useShuffledArray = (array) => {
  const duplicatedArray = [...array, ...array];
  const shuffledArray = duplicatedArray.map(item => ({
    cardId: uuidv4(),
    isMatched: false,
    ...item
  }))
  shuffledArray.sort(() => Math.random() - 0.5);
  return shuffledArray;
}
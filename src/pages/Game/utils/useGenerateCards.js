import { useGetRandomImgUrl } from "./useGetRandomImgUrl";
import { v4 as uuidv4 } from 'uuid';
import cardBack from '../../../assets/back.png'

export const useGenerateCards = (number) => {
  const arrayCards = [];
  for (let i = 0; i < number; i++) {
    arrayCards.push({
      id: uuidv4(),
      cardBack,
      cardImg: useGetRandomImgUrl(arrayCards),
      isFlipped: true
    })
  }
  return arrayCards;
}
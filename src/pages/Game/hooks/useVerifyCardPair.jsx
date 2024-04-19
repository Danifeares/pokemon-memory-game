import { useEffect, useState } from "react";
import { useGenerateCards } from "../utils/useGenerateCards";
import { useShuffledArray } from "../utils/useShuffledArray";

export function useVerifyCardPair(numberOfCards) {
  const [penalties, setPenalties] = useState(0);
  const [twoCardsFaceUp, setTwoCardsFaceUp] = useState(false);

  const generatedCardsArray = useGenerateCards(Number(numberOfCards));
  const [duplicatedCardsArray, setDuplicatedCardsArray] = useState(useShuffledArray(generatedCardsArray));
  

  const handleMatchedCard = (card) => {
    const mappedMatchedCards = duplicatedCardsArray.map((item) => {
      if (item.id === card.id) {
        return {
          ...item,
          isMatched: true
        }
      }
      return item
    })
    setDuplicatedCardsArray(mappedMatchedCards)
  }

  const handleUnmatchCard = () => {
    const mappedUnmatchCards = duplicatedCardsArray.map((item) => {
      if (!item.isFlipped) {
        return {
          ...item,
          isFlipped: true
        };
      }
      return item;
    })
    setDuplicatedCardsArray(mappedUnmatchCards)
    setPenalties(penalties + 1)
  }

  const cardPairChecker = () => {
    const cardPair = duplicatedCardsArray.filter(card => card.isFlipped === false && card.isMatched === false)

    if (cardPair.length === 2) {
      setTwoCardsFaceUp(true);

      if (cardPair[0].id === cardPair[1].id) {
        handleMatchedCard(cardPair[0]);

      } else {
        setTimeout(() => {
          handleUnmatchCard();
        }, 1000);
      }
    } else {
      setTwoCardsFaceUp(false);
    }
  }

  useEffect(() => {
    cardPairChecker();
  }, [duplicatedCardsArray, cardPairChecker, penalties])
  
  return {
    twoCardsFaceUp,
    duplicatedCardsArray,
    setDuplicatedCardsArray,
    penalties
  }
}
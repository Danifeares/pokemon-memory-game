import { useEffect, useState } from "react";
import gameHit from '../../../assets/sounds/gameHit.mp3'

export function useVerifyCardPair(duplicatedCardsArray, setDuplicatedCardsArray) {
  const [penalties, setPenalties] = useState(0);
  const [twoCardsFaceUp, setTwoCardsFaceUp] = useState(false);

  const gameHitSound = new Audio(gameHit);

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
        gameHitSound.play();

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
    penalties
  }
}
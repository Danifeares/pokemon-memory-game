import { v4 as uuidv4 } from 'uuid';
import cardBack from '../../../assets/back.png'
import { useState } from 'react';

export function useGenerateCards(numberOfCards) {

  const getRandomImgUrl = (arrayCards) => {
    const imageNames = [
      'ampharos.png',
      'arcanine.png',
      'baxcalibur.png',
      'bulbasaur.png',
      'charmander.png',
      'cyclizar.png',
      'dondozo.png',
      'eevee.png',
      'entei.png',
      'espathra.png',
      'flaaffy.png',
      'fuecoco.png',
      'growlithe.png',
      'hawlucha.png',
      'koraidon.png',
      'lucario.png',
      'mimikyu.png',
      'miraidon.png',
      'murkrow.png',
      'ninetales.png',
      'pawmot.png',
      'pelipper.png',
      'pikachu.png',
      'quaquaval.png',
      'quaxly.png',
      'ravavroom.png',
      'smoliv.png',
      'spidops.png',
      'sprigatito.png',
      'squirtle.png',
      'tinkaton.png',
    ];
  
    const notRaffledImages = imageNames.filter(image => !arrayCards.some(card => card.cardImg.endsWith(image)) )
  
    const imagesToChooseFrom = notRaffledImages.length > 0 ? notRaffledImages : imageNames;
  
    const randomImage = imagesToChooseFrom[Math.floor(Math.random() * imagesToChooseFrom.length)];
    
    return `/cards/${randomImage}`;
  }

  const generateCards = (number) => {
    const arrayCards = [];
    for (let i = 0; i < number; i++) {
      arrayCards.push({
        id: uuidv4(),
        cardBack,
        cardImg: getRandomImgUrl(arrayCards),
        isFlipped: true,
        isMatched: false
      })
    }
    return arrayCards;
  }

  const shuffledArray = (array) => {
    const duplicatedArray = [...array, ...array];
    const shuffledArray = duplicatedArray.map(item => ({
      cardId: uuidv4(),
      ...item
    }))
    shuffledArray.sort(() => Math.random() - 0.5);
    return shuffledArray;
  }

  const generatedCardsArray = generateCards(Number(numberOfCards));
  const [duplicatedCardsArray, setDuplicatedCardsArray] = useState(shuffledArray(generatedCardsArray));

  return {
    duplicatedCardsArray,
    setDuplicatedCardsArray
  }
}
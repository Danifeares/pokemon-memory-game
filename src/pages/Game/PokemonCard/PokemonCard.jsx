import { BackFace, Card, FrontFace } from "./styles";
import cardClickSound from '../../../assets/sounds/cardClick.mp3';

const PokemonCard = ({ card, handleFlippedCard, twoCardsFaceUp, cardSelected }) => {
  const {isFlipped, isMatched, cardImg, cardBack, cardId} = card;
 
  const clickSound = new Audio(cardClickSound);

  const handleClick = () => {
    handleFlippedCard(card);
  }

  return (
    <Card
      onClick={() => {handleClick(); clickSound.play();}}
      $isFlipped={isFlipped}
      $isMatched={isMatched}
      $isSelected={cardSelected?.cardId === cardId}
      $twoCardsFaceUp={twoCardsFaceUp}
    >
      <FrontFace $image={cardImg} />
      <BackFace $image={cardBack} />
    </Card>
  )
}

export default PokemonCard;
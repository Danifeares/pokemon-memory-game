import { BackFace, Card, FrontFace } from "./styles";
import cardClickSound from '../../../assets/sounds/cardClick.mp3';

const PokemonCard = ({ card, handleFlippedCard, twoCardsFaceUp }) => {
  const {isFlipped, isMatched, cardImg, cardBack} = card;
 
  const clickSound = new Audio(cardClickSound);

  const handleClick = () => {
    handleFlippedCard(card);
  }

  return (
    <Card
      onClick={() => {handleClick(); clickSound.play();}}
      $isFlipped={isFlipped}
      $isMatched={isMatched}
      $twoCardsFaceUp={twoCardsFaceUp}
    >
      <FrontFace $image={cardImg} />
      <BackFace $image={cardBack} />
    </Card>
  )
}

export default PokemonCard;
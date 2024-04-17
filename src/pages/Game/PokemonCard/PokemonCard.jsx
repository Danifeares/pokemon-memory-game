import { useState } from "react";
import { BackFace, Card, FrontFace } from "./styles";

const PokemonCard = ({ card, handleFlippedCard, twoCardsFaceUp }) => {
  const {isFlipped, isMatched, cardImg, cardBack} = card
  //const [isFlipped, setIsFlipped] = useState(card.isFlipped)

  const handleClick = () => {
    
    handleFlippedCard(card);
  }

  return (
    <Card
      onClick={() => handleClick()}
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
import { useState } from "react";
import { BackFace, Card, FrontFace } from "./styles";

const PokemonCard = ({ card, handleFlippedCard }) => {

  const [isFlipped, setIsFlipped] = useState(card.isFlipped)

  const handleClick = () => {
    setIsFlipped(card.isFlipped);
    handleFlippedCard(card);
  }

  return (
    <Card onClick={() => handleClick()} $isFlipped={isFlipped} >
      <FrontFace $image={card.cardImg} />
      <BackFace $image={card.cardBack} />
    </Card>
  )
}

export default PokemonCard;
import { useState } from "react";
import { BackFace, Card, FrontFace } from "./styles";


const PokemonCard = ({ card }) => {

  const [isFliped, setIsFliped] = useState(true)

  const handleClick = () => {
    setIsFliped(!isFliped)
  }

  return (
    <Card onClick={() => handleClick()} $isFliped={isFliped} >
      <FrontFace $image={card.cardImg} />
      <BackFace $image={card.cardBack} />
    </Card>
  )
}

export default PokemonCard;
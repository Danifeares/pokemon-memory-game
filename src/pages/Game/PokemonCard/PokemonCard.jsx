import { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 120px;
  height: 167px;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: ${({ $isFliped }) => $isFliped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transition: transform 0.5s;
`

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
`;

const FrontFace = styled(CardFace)`
  background-image: url(${({ $image }) => $image});
  transform: rotateY(0);
`

const BackFace = styled(CardFace)`
  background-image: url(${({ $image }) => $image});
  transform: rotateY(180deg);
`

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
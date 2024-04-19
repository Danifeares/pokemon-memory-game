import { BackFace, Card, FrontFace } from "./styles";


const PokemonCard = ({ card, handleFlippedCard, twoCardsFaceUp, cardSelected, difficulty, clickSound }) => {
  const {isFlipped, isMatched, cardImg, cardBack, cardId} = card;

  const handleClick = () => {
    handleFlippedCard(card);
  }

  return (
    <Card
      onClick={() => {handleClick(); clickSound.play();}}
      $size={difficulty}
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
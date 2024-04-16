import { useNavigate } from "react-router-dom";
import NotFound from "../../components/NotFound";
import { useGenerateCards } from "./hooks/useGenerateCards";
import PokemonCard from "./PokemonCard/PokemonCard";
import { useShuffledArray } from "./hooks/useShuffledArray";
import { v4 as uuidv4 } from 'uuid';
import { BackgroundDiv, ContainerMax, ContainerList, ListItem, Navbar, SectionContainerList, CardContainer, NavCardUser, NavButtons } from "./styles";
import TimerCounter from "./TimerCounter";
import { useEffect, useState } from "react";

const Game = ({ userName, numberOfCards, userAvatar }) => {
  const navigate = useNavigate();

  const [gameTime, setGameTime] = useState(0);
  const [flippedCards, setFlippedCards] = useState([])

  const generatedCardsArray = useGenerateCards(Number(numberOfCards));
  const [duplicatedCardsArray, setDuplicatedCardsArray] = useState(useShuffledArray(generatedCardsArray));

  const handleFlippedCard = (card) => {
    const teste = duplicatedCardsArray.map((item) => {
      if (item.cardId === card.cardId) {
        return {
          ...item,
          isFlipped: !item.isFlipped
        }
      }
      return item
    })

    setDuplicatedCardsArray(teste)
  }

  // AINDA NÃO ESTÁ FUNCIONAL:
  // const cardPairChecker = () => {
  //   const cardPair = duplicatedCardsArray.filter(card => card.isFlipped === false)
  //   console.log({ cardPair })
  //   if (cardPair.length === 2) {
  //     if (cardPair[0].cardId === cardPair[1].cardId) {
  //       return console.log('são iguais')
  //     } else {
  //       return console.log('são diferentes')
  //       // setDuplicatedCardsArray(prevState => prevState.map(card => {
  //       //   if (!card.isFlipped) {
  //       //     return {
  //       //       ...card,
  //       //       isFlipped: true
  //       //     };
  //       //   }
  //       //   return card;
  //       // }));
  //     }
  //   } else {
  //     return console.log('ainda não tem dois selecionados')
  //   }
  // }

  // useEffect(() => {
  //   if (duplicatedCardsArray) {
  //     cardPairChecker()
  //   }
  // }, [duplicatedCardsArray, cardPairChecker])


  return (
    <BackgroundDiv>
      <ContainerMax>
        {
          //!userName ? <NotFound /> :
          <>
            <Navbar>
              <NavCardUser>
                <img src={userAvatar} />
                <div>
                  <p>Bem-vindo(a),</p>
                  {userName}!
                </div>
                <TimerCounter setGameTime={setGameTime} />
              </NavCardUser>

              <NavButtons>
                <button
                  onClick={() => navigate('/')}
                >Reiniciar</button>
                <button
                  onClick={() => navigate('/ranking')}
                >Ranking</button>
              </NavButtons>
            </Navbar>

            <SectionContainerList>
              <ContainerList>
                {duplicatedCardsArray.map(card => (
                  <ListItem key={uuidv4()}>
                    <CardContainer $size={numberOfCards}>
                      <PokemonCard handleFlippedCard={handleFlippedCard} card={card} />
                    </CardContainer>
                  </ListItem>
                ))}
              </ContainerList>

            </SectionContainerList>
          </>
        }

      </ContainerMax>
    </BackgroundDiv>
  )
}

export default Game;
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
  const [twoCardsFaceUp, setTwoCardsFaceUp] = useState(false);
  const [userData, setUserData] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);

  const generatedCardsArray = useGenerateCards(Number(numberOfCards));
  const [duplicatedCardsArray, setDuplicatedCardsArray] = useState(useShuffledArray(generatedCardsArray));

  const handleFlippedCard = (card) => {
    const mappedFlippedCards = duplicatedCardsArray.map((item) => {
      if (item.cardId === card.cardId) {
        return {
          ...item,
          isFlipped: !item.isFlipped
        }
      }
      return item
    })
    setDuplicatedCardsArray(mappedFlippedCards)
  }

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
  }

  const cardPairChecker = () => {
    const cardPair = duplicatedCardsArray.filter(card => card.isFlipped === false && card.isMatched === false)

    if (cardPair.length === 2) {
      setTwoCardsFaceUp(true);

      if (cardPair[0].id === cardPair[1].id) {
        handleMatchedCard(cardPair[0]);

      } else {
        setTimeout(() => {
          handleUnmatchCard();
        }, 1000);
      }
    } else {
      setTwoCardsFaceUp(false);
    }
  }

  const verifyEndedGame = () => {
    const mappedAllFlippedCards = duplicatedCardsArray.filter(item => item.isMatched);

    if (!gameEnded && mappedAllFlippedCards.length === duplicatedCardsArray.length) {
      setUserData(prevUserData => [
        ...prevUserData,
        {
          time: gameTime,
          name: userName,
          avatar: userAvatar,
          difficulty: duplicatedCardsArray.length
        }
      ]);
      setGameEnded(true);
    }
  }

  useEffect(() => {
    cardPairChecker();
    verifyEndedGame();
    console.log(userData)
  }, [duplicatedCardsArray, cardPairChecker, gameTime, userName, userAvatar, userData, gameEnded])



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
                <TimerCounter setGameTime={setGameTime} gameEnded={gameEnded} />
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
                      <PokemonCard
                        handleFlippedCard={handleFlippedCard}
                        card={card}
                        twoCardsFaceUp={twoCardsFaceUp}
                      />
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
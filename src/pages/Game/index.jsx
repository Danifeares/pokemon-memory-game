import { useNavigate } from "react-router-dom";
import NotFound from "../../components/NotFound";
import { useGenerateCards } from "./utils/useGenerateCards";
import PokemonCard from "./PokemonCard/PokemonCard";
import { useShuffledArray } from "./utils/useShuffledArray";
import { BackgroundDiv, ContainerMax, ContainerList, ListItem, Navbar, SectionContainerList, NavCardUser, NavButtons, ModalIsOpen } from "./styles";
import TimerCounter from "./TimerCounter";
import { useEffect, useState } from "react";
import EndGameModal from "../../components/EndGameModal";
import cardClickSound from '../../assets/sounds/cardClick.mp3';

const Game = ({ userName, numberOfCards, userAvatar, difficulty, usersData, setUsersData }) => {
  const navigate = useNavigate();
  const clickSound = new Audio(cardClickSound);
  
  const [gameTime, setGameTime] = useState(0);
  const [twoCardsFaceUp, setTwoCardsFaceUp] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [end, setEnd] = useState(false);
  const [openEndGameModal, setOpenEndGameModal] = useState(false);

  const generatedCardsArray = useGenerateCards(Number(numberOfCards));
  const [duplicatedCardsArray, setDuplicatedCardsArray] = useState(useShuffledArray(generatedCardsArray));

  const cardSelected = duplicatedCardsArray.find(card => card.isFlipped === false && card.isMatched === false)

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
      setGameEnded(true);
    }
    if (gameEnded && !end && gameTime) {
      setEnd(true)
      setUsersData(prevUserData => {
        const newUserData = [
          ...prevUserData,
          {
            time: gameTime,
            name: userName,
            avatar: userAvatar,
            difficulty
          }
        ];
        return newUserData;
      });
      setOpenEndGameModal(true);
    }
  }

  useEffect(() => {
    cardPairChecker();
    verifyEndedGame();


  }, [duplicatedCardsArray, cardPairChecker, gameTime, userName, userAvatar, difficulty, usersData, gameEnded])


  return (
    <BackgroundDiv>
      <ContainerMax>
        {
          !userName ? <NotFound /> :
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
                  {duplicatedCardsArray.map((card, i) => (
                    <ListItem key={i}>
                      <PokemonCard
                        difficulty={difficulty}
                        cardSelected={cardSelected}
                        handleFlippedCard={handleFlippedCard}
                        card={card}
                        twoCardsFaceUp={twoCardsFaceUp}
                        clickSound={clickSound}
                      />
                    </ListItem>
                  ))}
                </ContainerList>

              </SectionContainerList>
            </>
        }

      </ContainerMax>
      {
        openEndGameModal &&
        <ModalIsOpen>
          {openEndGameModal && <EndGameModal setOpenEndGameModal={setOpenEndGameModal} userName={userName} gameTime={gameTime} />}
        </ModalIsOpen>
      }
    </BackgroundDiv>
  )
}

export default Game;
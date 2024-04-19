import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useVerifyCardPair } from "./hooks/useVerifyCardPair";
import { useGenerateCards } from "./hooks/useGenerateCards";

import NotFound from "../../components/NotFound";
import EndGameModal from "../../components/EndGameModal";
import PokemonCard from "./PokemonCard";
import TimerCounter from "./TimerCounter";

import cardClickSound from '../../assets/sounds/cardClick.mp3';

import { BackgroundDiv, ContainerMax, ContainerList, ListItem, Navbar, SectionContainerList, NavCardUser, NavButtons, ModalIsOpen } from "./styles";

const Game = ({ userName, numberOfCards, userAvatar, difficulty, usersData, setUsersData }) => {
  const navigate = useNavigate();
  const clickSound = new Audio(cardClickSound);

  const [gameTime, setGameTime] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [end, setEnd] = useState(false);
  const [openEndGameModal, setOpenEndGameModal] = useState(false);

  const { duplicatedCardsArray, setDuplicatedCardsArray } = useGenerateCards(numberOfCards);
  const { twoCardsFaceUp, penalties } = useVerifyCardPair(duplicatedCardsArray, setDuplicatedCardsArray);

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
            penalties,
            difficulty
          }
        ];
        return newUserData;
      });
      setOpenEndGameModal(true);
    }
  }

  useEffect(() => {
    verifyEndedGame();
  }, [duplicatedCardsArray, gameTime, userName, userAvatar, difficulty, usersData, gameEnded])


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
import { useNavigate } from "react-router-dom";

import { useGenerateCards } from "./hooks/useGenerateCards";
import { useVerifyCardPair } from "./hooks/useVerifyCardPair";
import { useVerifyEndedGame } from "./hooks/useVerifyEndedGame";

import NotFound from "../../components/NotFound";
import EndGameModal from "../../components/EndGameModal";
import PokemonCard from "./PokemonCard";
import TimerCounter from "./TimerCounter";

import cardClickSound from '../../assets/sounds/cardClick.mp3';

import { BackgroundDiv, ContainerMax, ContainerList, ListItem, Navbar, SectionContainerList, NavCardUser, NavButtons, ModalIsOpen } from "./styles";

const Game = ({ userName, numberOfCards, userAvatar, difficulty, usersData, setUsersData }) => {
  const navigate = useNavigate();
  const clickSound = new Audio(cardClickSound);

  const { duplicatedCardsArray, setDuplicatedCardsArray } = useGenerateCards(numberOfCards);
  const { twoCardsFaceUp, penalties } = useVerifyCardPair(duplicatedCardsArray, setDuplicatedCardsArray);
  const {gameTime, setGameTime, gameEnded, setOpenEndGameModal, openEndGameModal} = useVerifyEndedGame(penalties, difficulty, usersData, setUsersData, duplicatedCardsArray, userName, userAvatar);

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
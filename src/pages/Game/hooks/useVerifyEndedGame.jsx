import { useEffect, useState } from "react";

export function useVerifyEndedGame(penalties, difficulty, usersData, setUsersData, duplicatedCardsArray, userName, userAvatar) {
  const [end, setEnd] = useState(false)
  const [gameTime, setGameTime] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [openEndGameModal, setOpenEndGameModal] = useState(false);

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
  
  return {
    gameTime,
    setGameTime,
    gameEnded,
    setOpenEndGameModal,
    openEndGameModal
  }
}
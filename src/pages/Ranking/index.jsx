import { useEffect, useState } from "react";
import { ButtonsContainer, RankingContainer, ScoreboardContainer } from "./styles";
import Scoreboard from "./Scoreboard";
import { useNavigate } from "react-router-dom";
import imgRanking from '../../assets/ranking.png'

const Ranking = ({ usersData }) => {
  const navigate = useNavigate();
  const [ranking, setRanking] = useState({ ease: false, regular: false, hard: false });
  const [organizedUsers, setOrganizedUsers] = useState({});

  const generateScore = (time, penalties) => {
    const totalPoints = 3000;
    const score = totalPoints - (time + (penalties * 3));
    return score;
  }

  const organizeUsers = (arrayUsers) => {
    const organizedUsersByDifficulty = {
      ease: [],
      regular: [],
      hard: []
    };

    arrayUsers.forEach(user => {
      const score = generateScore(user.time, user.penalties);
      organizedUsersByDifficulty[user.difficulty].push({...user, score});
    })

    for (const difficulty in organizedUsersByDifficulty) {
      organizedUsersByDifficulty[difficulty].sort((a, b) => b.score - a.score);
    }

    return organizedUsersByDifficulty;
  }

  useEffect(() => {
    setOrganizedUsers(organizeUsers(usersData));
  }, [usersData])

  return (
    <RankingContainer>
      <img src={imgRanking} />
      <ButtonsContainer>
        <div>
          <button onClick={() => navigate('/')} >Home</button>
          <p>Selecione a dificuldade:</p>
        </div>
        <div>
          <button onClick={() => setRanking(
            { ease: !ranking.ease, regular: false, hard: false }
          )} >Fácil</button>

          <button onClick={() => setRanking(
            { ease: false, regular: !ranking.regular, hard: false }
          )} >Normal</button>

          <button onClick={() => setRanking(
            { ease: false, regular: false, hard: !ranking.hard }
          )} >Difícil</button>

        </div>
      </ButtonsContainer>
      <ScoreboardContainer>
        {ranking.ease && <Scoreboard array={organizedUsers['ease']} />}
        {ranking.regular && <Scoreboard array={organizedUsers['regular']} />}
        {ranking.hard && <Scoreboard array={organizedUsers['hard']} />}
      </ScoreboardContainer>
    </RankingContainer>
  )
}

export default Ranking;
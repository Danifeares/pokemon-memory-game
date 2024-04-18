import { useEffect, useState } from "react";
import { ButtonsContainer, RankingContainer, ScoreboardContainer } from "./styles";
import Scoreboard from "./Scoreboard";
import { useNavigate } from "react-router-dom";
import imgRanking from '../../assets/ranking.png'

const Ranking = ({ usersData }) => {
  const navigate = useNavigate();
  const [ranking, setRanking] = useState('');
  const [organizedUsers, setOrganizedUsers] = useState({});

  const generateScore = (time, penalties) => {
    const totalPoints = 3000;
    const score = totalPoints - (time + (penalties * 3));
    return score;
  }

  const organizeUsers = (arrayUsers) => {
    const organizedUsersByDifficulty = {
      easy: [],
      regular: [],
      hard: []
    };

    arrayUsers.forEach(user => {
      const score = generateScore(user.time, user.penalties);
      organizedUsersByDifficulty[user.difficulty].push({...user, score});
    })

    for (const difficulty in organizedUsersByDifficulty) {
      organizedUsersByDifficulty[difficulty].sort((a, b) => b.score - a.score);
      organizedUsersByDifficulty[difficulty] = organizedUsersByDifficulty[difficulty].slice(0, 10);
    }

    return organizedUsersByDifficulty;
  }

  const scoreboards = {
    easy: <Scoreboard array={organizedUsers['easy']} />,
    regular: <Scoreboard array={organizedUsers['regular']} />,
    hard: <Scoreboard array={organizedUsers['hard']} />,
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
          <button onClick={() => setRanking('easy')}>
            Fácil
          </button>

          <button onClick={() => setRanking('regular')}>
            Normal
          </button>

          <button onClick={() => setRanking('hard')}>
            Difícil
          </button>

        </div>
      </ButtonsContainer>
      <ScoreboardContainer>
        {scoreboards[ranking]}
      </ScoreboardContainer>
    </RankingContainer>
  )
}

export default Ranking;
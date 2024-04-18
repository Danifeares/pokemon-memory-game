import { ButtonsContainer, RankingContainer, ScoreboardContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import imgRanking from '../../assets/ranking.png'
import { useOrganizedUsers } from "./hooks/useOrganizedUsers";
import { useShowScoreboard } from "./hooks/useShowScoreboard";

const Ranking = ({ usersData }) => {
  const navigate = useNavigate();

  const organizedUsers = useOrganizedUsers(usersData)
  const {scoreboard, setRanking} = useShowScoreboard(organizedUsers)

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
        {scoreboard}
      </ScoreboardContainer>
    </RankingContainer>
  )
}

export default Ranking;
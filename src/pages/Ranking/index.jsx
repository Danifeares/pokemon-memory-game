import { useState } from "react";
import { ButtonsContainer, RankingContainer } from "./styles";

const Ranking = ({ usersData }) => {
  const [ranking, setRanking] = useState({ ease: false, regular: false, hard: false });

  return (
    <RankingContainer>
      <h1>Ranking com as melhores pontuações:</h1>
      <ButtonsContainer>
        <p>Selecione a dificuldade:</p>
        <button onClick={() => setRanking(
          { ease: !ranking.ease, regular: false, hard: false }
        )} >Fácil</button>

        <button onClick={() => setRanking(
          { ease: false, regular: !ranking.regular, hard: false }
        )} >Normal</button>
        
        <button onClick={() => setRanking(
          { ease: false, regular: false, hard: !ranking.hard })
        } >Difícil</button>
      </ButtonsContainer>
      <section>
        {ranking.ease && 'ranking fácil renderizado'}
        {ranking.regular && 'ranking normal renderizado'}
        {ranking.hard && 'ranking dificil renderizado'}
      </section>
    </RankingContainer>
  )
}

export default Ranking;
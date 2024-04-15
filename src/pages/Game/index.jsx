import { useNavigate } from "react-router-dom";
import NotFound from "../../components/NotFound";
import { useGenerateCards } from "./hooks/useGenerateCards";
import PokemonCard from "./PokemonCard/PokemonCard";
import { useSuffledArray } from "./hooks/useSuffledArray";
import { v4 as uuidv4 } from 'uuid';
import { BackgroundDiv, ContainerMax, ContainerList, ListItem, Navbar } from "./styles";
import TimerCounter from "./TimerCounter";
import { useState } from "react";

const Game = ({ userName, numberOfCards }) => {
  const navigate = useNavigate();
  
  const [gameTime, setGameTime] = useState(0);

  const generatedCardsArray = useGenerateCards(Number(numberOfCards));

  const duplicatedCardsArray = useSuffledArray(generatedCardsArray);

  return (
    <BackgroundDiv>
      <ContainerMax>
        {
          //!userName ? <NotFound /> :
          <>
            <Navbar>
              <button
                onClick={() => navigate('/')}
              >Reiniciar</button>

              <TimerCounter setGameTime={setGameTime} />

              <button
                onClick={() => navigate('/ranking')}
              >Ranking</button>
            </Navbar>

            <section>
              <ContainerList>
                {duplicatedCardsArray.map(card => (
                  <ListItem key={uuidv4()}>
                    <PokemonCard card={card} />
                  </ListItem>
                ))}
              </ContainerList>

            </section>
          </>
        }

      </ContainerMax>
    </BackgroundDiv>
  )
}

export default Game;
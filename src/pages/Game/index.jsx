import { useNavigate } from "react-router-dom";
import NotFound from "../../components/NotFound";
import { useGenerateCards } from "./hooks/useGenerateCards";
import PokemonCard from "./PokemonCard/PokemonCard";
import { useSuffledArray } from "./hooks/useSuffledArray";
import { v4 as uuidv4 } from 'uuid';
import { BackgroundDiv, ContainerMax, ContainerList, ListItem, Navbar } from "./styles";


const Game = ({ userName, numberOfCards }) => {
  const navigate = useNavigate();

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

              <p>Timer será aqui</p>

              <button
                onClick={() => navigate('/ranking')}
              >Ranking</button>
            </Navbar>

            <section>
              <h1>Bem-vindo ao jogo da memória, {userName}</h1>
              <ContainerList>
                {duplicatedCardsArray.map(card => (
                  <ListItem key={uuidv4()}>
                    <PokemonCard card={card} />
                  </ListItem>
                ))}
              </ContainerList>

              <ul>
                <li>Implementação de timer</li>
                <li>
                  É necessário que apenas duas cartas possam ser clicadas por vez,
                  e quando clicadas as duas, e elas serem direfentes, o usuário terá
                  alguns segundos para visualização até que elas sejam fechadas e exibam
                  o verso novamente.
                </li>
                <li>
                  Quando uma carta for igual a outra, elas devem sumir da tela, logo,
                  serão excluídas do array de cartas (esse array receberá objetos cartas,
                  que irão possuir id único.)
                </li>
                <li>
                  Quando as cartas sumirem, eles devem sumir e as demais
                  devem permanecer no local onde já estavam, para não atrapalhar o game.
                  colocar outra coisa no local? não sei.
                </li>
              </ul>
            </section>
          </>
        }

      </ContainerMax>
    </BackgroundDiv>
  )
}

export default Game;
import { useNavigate } from "react-router-dom";
import NotFound from "../../components/NotFound";
import { generateCards } from "./utils/generateCards";
import PokemonCard from "./PokemonCard/PokemonCard";
import { suffledArray } from "./utils/suffledArray";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

const ContainerList = styled.ul`
  display: flex;
  gap: 30px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
`

const ListItem = styled.li`
  list-style: none;
`
const Game = ({ userName, numberOfCards }) => {
  const navigate = useNavigate();

  const generatedCardsArray = generateCards(Number(numberOfCards));
  
  const duplicatedCardsArray = suffledArray(generatedCardsArray)
  console.log(duplicatedCardsArray)
  return (
    <>
      {
        //!userName ? <NotFound /> :
        <>
          <nav>
            <button
              onClick={() => navigate('/')}
            >Reiniciar</button>

            <p>Timer será aqui</p>

            <button
              onClick={() => navigate('/ranking')}
            >Ranking</button>
          </nav>

          <section>
            <h1>Bem-vindo ao jogo da memória, {userName}</h1>
            <ContainerList>
              {duplicatedCardsArray.map(card => (
                <ListItem key={uuidv4()}>
                  <PokemonCard card={card}/>
                </ListItem>
              ))}
            </ContainerList>

            <p>cards renderizados aqui</p>
            <ul>
              <li>
                com base no numero de cartas setadas pelo usuário, irei
                pegar essa quantidade cartas do arquivo de cartas. <strong>OK</strong>
              </li>
              <li>
                As cartas precisarão ser duplicadas, e então exibidas
                na tela de forma aleatória (com o verso em evidência.) <strong>OK</strong>
              </li>
              <li>
                Quando ocorrer o clique nessas cartas, será revelado seu conteúdo. <strong>OK</strong>
              </li>
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

    </>
  )
}

export default Game;
import { useNavigate } from "react-router-dom";
import NotFound from "../../components/NotFound";

const Game = ({ userName }) => {

  const navigate = useNavigate();

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
              <h1>Descubra todos os pares iguais no menor tempo possível!</h1>
              <p>cards renderizados aqui</p>
              <ul>
                <li>
                  com base no numero de cartas setadas pelo usuário, irei 
                  pegar essa quantidade cartas do arquivo de cartas.
                </li>
                <li>
                  As cartas precisarão ser duplicadas, e então exibidas
                  na tela de forma aleatória (com o verso em evidência.)              
                </li>
                <li>
                  Quando ocorrer o clique nessas cartas, será revelado seu conteúdo.             
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
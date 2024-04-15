import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./ErrorModal";
import welcomeGif from '../../assets/welcome.gif'
import { Container, ContainerLogin, ModalIsOpen } from "./styles";

const Home = ({ setUserName, setNumberOfCards }) => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [cards, setCards] = useState('');
  const [openErrorModal, setOpenErrorModal] = useState(false);

  const saveForm = (event) => {
    event.preventDefault();
    if (cards > 15 || cards < 2) {
      setOpenErrorModal(true)
    } else {
      navigate('/game');
      setUserName(name);
      setNumberOfCards(cards);
      setName('');
      setCards('');
    }
  }

  return (
    <Container>
      <ContainerLogin>
        <h1>Bem vindo ao jogo da memória!</h1>

        <img src={welcomeGif} />

        <form onSubmit={saveForm}>
          <input
            placeholder="Digite seu nome"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Quantidade de pares de cartas"
            value={cards}
            onChange={event => setCards(event.target.value)}
            required
          />

          {/* FALTA IMPLEMENTAÇÃO DE NÍVEIS DE DIFICULDADE:
            <select>
            <option value='ease'>Fácil</option>
            <option value='regular'>Normal</option>
            <option value='hard'>Difícil</option>
          </select> */}

          <button>Iniciar</button>
        </form>

        <button onClick={() => navigate('/ranking')} >Ver Ranking</button>
      </ContainerLogin>

      {openErrorModal ?
        <ModalIsOpen>
          {openErrorModal && <ErrorModal setOpenErrorModal={setOpenErrorModal} />}
        </ModalIsOpen>
        : undefined}

    </Container>
  )
}

export default Home;
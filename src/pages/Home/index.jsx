import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./ErrorModal";
import styled from "styled-components";
import welcomeGif from '../../assets/welcome.gif'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContainerLogin = styled.section`
  background-color: #f1c8df;
  padding: 16px;
  width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  color: #2c2525;
  gap: 16px;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;

    input {
      padding: 16px;
      font-size: 24px;
      border-radius: 16px;
      outline: none;
      border: none;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    }
  }

  @media screen and (max-width: 540px) {
    width: 280px;
    
    form > input {
      font-size: 14px;
    }
    img {
      width: 90%;
    }
  }
`

const ModalIsOpen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`

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
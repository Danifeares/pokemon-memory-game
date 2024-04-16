import { useState } from "react";
import { useNavigate } from "react-router-dom";
import welcomeGif from '../../assets/welcome.gif'
import { AvatarSelect, Container, ContainerLogin, ModalIsOpen } from "./styles";
import { CgPokemon } from "react-icons/cg";
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'

const Home = ({ setUserName, setNumberOfCards }) => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [level, setLevel] = useState('');

  const defineNumberOfCards = (level) => {
    switch (level) {
      case 'ease':
        return 5;

      case 'regular':
        return 8;

      case 'hard':
        return 15;

      default:
        break;
    }
  }

  const saveForm = (event) => {
    event.preventDefault();
    navigate('/game');
    setUserName(name);
    setNumberOfCards(defineNumberOfCards(level));
  }

  return (
    <Container>
      <ContainerLogin>
        <h1>Bem vindo ao jogo da memória {<CgPokemon size={35} />}</h1>

        <img src={welcomeGif} />

        <form onSubmit={saveForm}>
          <input
            placeholder="Digite seu nome"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
          <select
            onChange={event => setLevel(event.target.value)}
            required
          >
            <option value=''>Selecione a dificuldade</option>
            <option value='ease'>Fácil</option>
            <option value='regular'>Normal</option>
            <option value='hard'>Difícil</option>
          </select>

          <AvatarSelect>
            <p>Selecione um avatar:</p>
            <div>
              <img src={avatar1} />
              <img src={avatar2} />
              <img src={avatar3} />
            </div>

          </AvatarSelect>

          <button>Iniciar</button>
        </form>

        <button onClick={() => navigate('/ranking')} >Ver Ranking</button>
      </ContainerLogin>

    </Container>
  )
}

export default Home;
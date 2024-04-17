import { useState } from "react";
import { useNavigate } from "react-router-dom";
import welcomeGif from '../../assets/welcome.gif'
import { AvatarSelect, Container, ContainerLogin } from "./styles";
import { CgPokemon } from "react-icons/cg";
import avatarSound from '../../assets/sounds/avatarSound.mp3';

const Home = ({ setUserName, setNumberOfCards, setUserAvatar }) => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('Null');

  const arrayAvatar = [1, 2, 3];
  const selectedAvatarSound = new Audio(avatarSound);

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
    setUserAvatar(`/avatars/avatar${selectedAvatar}.png`);
  }

  return (
    <Container>
      <ContainerLogin>
        <h1>Jogo da memória {<CgPokemon size={35} />}</h1>

        <img src={welcomeGif} alt="Gif do pokemon pikachu dançando"/>

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
              {
                arrayAvatar.map(avatar => (
                  <img 
                    key={avatar}
                    src={`/avatars/avatar${avatar}.png`}
                    alt="imagem do avatar pokemon"
                    selected={selectedAvatar === avatar}
                    onClick={() => {
                      if (selectedAvatar !== avatar) {
                        setSelectedAvatar(avatar);
                        selectedAvatarSound.play();
                      } else {
                        setSelectedAvatar('Null')
                      }
                    }}
                    style={{
                      transform: selectedAvatar === avatar ? 'scale(1.2)' : 'scale(1)',
                      boxShadow: selectedAvatar === avatar ? '1px 1px 30px rgb(206, 76, 182)' : '3px 3px 10px rgba(0, 0, 0, 0.3)',
                    }}
                  />
                ))
              }
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
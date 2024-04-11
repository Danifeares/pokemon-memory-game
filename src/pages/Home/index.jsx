import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ userName, setUserName, numberOfCards, setNumberOfCards }) => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [cards, setCards] = useState('');

  const saveForm = (event) => {
    event.preventDefault();
    navigate('/game');
    setUserName(name);
    setNumberOfCards(cards);
    setName('');
    setCards('');
  }

  return (
    <section>
      <h1>Bem vindo ao jogo da memória</h1>
      <button onClick={() => navigate('/ranking')} >Ranking</button>

      <form onSubmit={saveForm}>
        <input
          placeholder="Digite seu nome"
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantidade de cartas"
          value={cards}
          onChange={event => setCards(event.target.value)}
          required
        />
        <select>
          <option value='ease'>Fácil</option>
          <option value='regular'>Normal</option>
          <option value='hard'>Difícil</option>
        </select>
        <button>Iniciar</button>
      </form>
    </section>
  )
}

export default Home;
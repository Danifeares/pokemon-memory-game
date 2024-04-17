import { useNavigate } from 'react-router-dom';
import errorGif from '../../assets/error.gif'
import { ContainerModal } from './styles';


const GameOverModal = ({ setOpenGameOverModal }) => {
  const navigate = useNavigate();
  return (
    <ContainerModal>
      <img src={errorGif} />
      <h1>Game Over</h1>
      Você excedeu o tempo limite :(
      <button onClick={() => {setOpenGameOverModal(false); navigate('/')}}>Jogar novamente</button>
    </ContainerModal>
  )
}

export default GameOverModal;
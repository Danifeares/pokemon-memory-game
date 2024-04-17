import { useNavigate } from 'react-router-dom';
import happyGif from '../../assets/happyEndGame.gif'
import { ContainerModal } from './styles';
import { convertSecondsToMinutes } from '../../pages/Game/utils/convertSecondsToMinutes';

const EndGameModal = ({ setOpenEndGameModal, userName, gameTime }) => {
  const navigate = useNavigate();
  
  const {timeMinutes, timeSeconds} = convertSecondsToMinutes(gameTime);

  return (
    <ContainerModal>
      <img src={happyGif} />
      <h3>Parabéns, {userName}!</h3>
      <p>Você concluiu o jogo em {timeMinutes}m {timeSeconds}s!</p>
      <button onClick={() => {setOpenEndGameModal(false); navigate('/')}}>Jogar novamente</button>
      <button onClick={() => {setOpenEndGameModal(false); navigate('/ranking')}}>Ver Ranking</button>
    </ContainerModal>
  )
}

export default EndGameModal;
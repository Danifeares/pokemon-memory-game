import { useNavigate } from 'react-router-dom';
import sadGif from '../../assets/sad.gif'
import { ContainerNotFound } from './styles';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <ContainerNotFound>
      <div>
        <p>401 - Não autorizado</p>
        <img src={sadGif} />
        <button onClick={() => navigate('/')} >Home</button>
      </div>
    </ContainerNotFound>
  )
}

export default NotFound;
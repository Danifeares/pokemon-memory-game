import errorGif from '../../../assets/error.gif'
import { ContainerModal } from './styles';


const ErrorModal = ({ setOpenErrorModal }) => {

  return (
    <ContainerModal>
      <img src={errorGif} />
      <h1>Ops...</h1>
      A quantidade de pares de cartas deve ser entre 2 e 15.
      <button onClick={() => setOpenErrorModal(false)}>Voltar para a home</button>
    </ContainerModal>
  )
}

export default ErrorModal;
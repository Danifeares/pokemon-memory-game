import styled from "styled-components";
import errorGif from '../../../assets/error.gif'

const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  flex-direction: column;
  background-color: #fff;
  top: 50%;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 16px;
  box-shadow: var(--box-shadow);
  width: 500px;
  transform: translate(-50%, -50%);
  left: 50%;
  animation: fadeIn 1s ease;
  align-items: center;
  gap: 16px;

  img {
    width: 60%;
  }

  @keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
  }

  @media screen and (max-width: 540px) {
    width: 280px;

    img {
    width: 90%;
    }
  }
`

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
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerLogin = styled.section`
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

export const ModalIsOpen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`
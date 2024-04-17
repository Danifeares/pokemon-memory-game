import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  box-sizing: border-box;
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
  color: #615454;
  gap: 16px;
  align-items: center;
  justify-content: center;
  
  h1 {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 24px;
  }

  img {
    width: 50%;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;

    input {
      padding: 12px;
      font-size: 16px;
      color: #615454;
      font-weight: bold;
      border-radius: 16px;
      text-align: center;
      outline: none;
      border: none;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    }

    select {
      width: 100%;
      padding: 12px;
      font-size: 16px;
      font-weight: bold;
      color: #615454;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
      outline: none;
      border: none;
      border-radius: 16px;
      text-align: center;
    }
    
  }

  @media screen and (max-width: 540px) {
    width: 280px;
    img {
      width: 90%;
    }
  }
`

export const AvatarSelect = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  img {
    border-radius: 50%;
    width: 100px;
    transition: 300ms ease;
    cursor: pointer;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 540px) {
    img {
      width: 65px;
    }
  }
`
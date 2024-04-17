import styled from "styled-components";

export const ContainerNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  > div {
    width: 250px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    > img {
    border-radius: 32px;
    width: 250px;
    margin-bottom: 20px;
  }
  }
`
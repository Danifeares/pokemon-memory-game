import styled from "styled-components";

export const RankingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  gap: 16px;
  width: 80%;
  > p {
    background-color: #f1c8df;
    color: #3b3737;
    font-weight: bold;
    border-radius: 10px;
    text-align: center;
    padding: 16px 0;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.35);
    height: 50px;
    width: 100%;
    box-sizing: border-box;
  }
  
`
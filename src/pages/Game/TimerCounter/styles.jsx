import styled from "styled-components";

export const Clock = styled.div`
  background-color: #f1c8df;
  max-width: 100px;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  line-height: 0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
  font-size: 18px;
  color: #282626;
  @media screen and (max-width: 540px) {
    font-size: 12px;
    gap: 6px;
 }
`
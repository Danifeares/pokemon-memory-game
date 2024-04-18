import styled from "styled-components";

export const ListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0;
`

export const ListItem = styled.li`
  list-style: none;
  background-color: #f1c8df;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  
  > img {
    width: 70px;
    border-radius: 50%;
  }

  > span {
    color: #3b3737;
    font-weight: bold;
  }
`
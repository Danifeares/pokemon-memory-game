import styled from "styled-components";

export const BackgroundDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`

export const ContainerMax = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
`

export const Navbar = styled.nav`
  display: flex;
  gap: 32px;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const NavCardUser = styled.div`
  flex: 1.4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  font-size: 18px;
  background-color: #f1c8df;
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  padding: 8px;
  color: #282626;
  > img {
    border-radius: 50%;
    width: 100px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
  > div {
    text-align: center;
    text-transform: uppercase;
    line-height: 10px;
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 12px;
  }
`

export const NavButtons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`

export const SectionContainerList = styled.section`
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

export const ContainerList = styled.ul`
  display: flex;
  gap: 24px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  @media screen and (max-width: 540px) {
    gap: 12px;
 }
`

export const ListItem = styled.li`
  list-style: none;
`

export const ModalIsOpen = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`
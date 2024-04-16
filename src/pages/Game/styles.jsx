import styled from "styled-components";

const defineCardSize = (size) => {
  switch (size) {
    case 5:
      return {
        desktop: 190,
        mobile: 130
      };
    case 8:
      return {
        desktop: 130,
        mobile: 100
      };
    case 15:
      return {
        desktop: 100,
        mobile: 80
      };

    default:
      break;
  }
}

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
  justify-content: space-around;
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

export const CardContainer = styled.div`
 width: ${({$size}) => defineCardSize($size).desktop}px;
 height: auto;
 aspect-ratio: 0.716;

 @media screen and (max-width: 540px) {
  width: ${({$size}) => defineCardSize($size).mobile}px;
 }
`
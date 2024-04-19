import styled from "styled-components";

const defineCardSize = (size) => {
  switch (size) {
    case 'easy':
      return {
        desktop: 190,
        mobile: 130
      };
    case 'regular':
      return {
        desktop: 140,
        mobile: 95
      };
    case 'hard':
      return {
        desktop: 125,
        mobile: 95
      };

    default:
      break;
  }
}

export const Card = styled.div`
  position: relative;
  width: ${({ $size }) => defineCardSize($size).desktop}px;
  height: auto;
  aspect-ratio: 0.716;
  perspective: 1000px;
  transform-style: preserve-3d;
  opacity: ${({ $isMatched }) => $isMatched ? 0 : 1};
  pointer-events: ${({ $isMatched, $twoCardsFaceUp, $isSelected }) => $isMatched || $twoCardsFaceUp || $isSelected ? 'none' : 'auto'};
  transform: ${({ $isFlipped }) => $isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transition: ${({$isMatched}) => $isMatched ? '2s' : '0.5s'};
  
  @media screen and (max-width: 540px) {
   width: ${({ $size }) => defineCardSize($size).mobile}px;
  }
`

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
`;

export const FrontFace = styled(CardFace)`
  background-image: url(${({ $image }) => $image});
  transform: rotateY(0);
`

export const BackFace = styled(CardFace)`
  background-image: url(${({ $image }) => $image});
  transform: rotateY(180deg);
`
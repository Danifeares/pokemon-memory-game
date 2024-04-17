import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  transform-style: preserve-3d;
  opacity: ${({ $isMatched }) => $isMatched ? 0.3 : 1};
  pointer-events: ${({ $isMatched, $twoCardsFaceUp }) => $isMatched || $twoCardsFaceUp ? 'none' : 'auto'};
  transform: ${({ $isFlipped }) => $isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transition: transform 0.5s;
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
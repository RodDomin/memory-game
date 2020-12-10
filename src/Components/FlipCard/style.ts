import styled from 'styled-components';
import CardPhoto from '../../Assets/card.jpg';

interface FlipContentProps {
  clicked: boolean;
}

export const FlipCardContainer = styled.div`
  margin: 10px;

  cursor: pointer;

  background-color: transparent;
  width: 100px;
  height: 150px;
  border: none;
  perspective: 1000px;
`;

export const FlipCardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;

  ${({ clicked }: FlipContentProps) => clicked && 'transform: rotateY(180deg);'};
`;

export const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  background-color: white;
  color: white;
  transform: rotateY(180deg);

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
`;

export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  background-color: #bbb;
  color: black;
`;

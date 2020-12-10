import styled from 'styled-components';
import WoodenTexture from '../../Assets/wooden.jpg';
import WoodenBackgroundTexture from '../../Assets/wooden-back.jpg';

export const GameContainer = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${WoodenBackgroundTexture});
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardsContainer = styled.div`
  background-image: url(${WoodenTexture});
  background-repeat: repeat;
  padding: 25px 0px;

  border: 10px solid black;

  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  justify-content: center;
  align-items: center;
  gap: 30px 20px;

  max-width: 950px;
  width: 80%;
`;
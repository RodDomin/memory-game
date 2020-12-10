import { useCallback, useContext, useEffect, useState } from 'react';
import { FlipCardContainer, FlipCardContent, FlipCardFront, FlipCardBack } from './style';

import CardPhoto from '../../Assets/card.jpg';
import Card from '../../Entities/Card';
import { UserContext } from '../../Context/UserContenxt';
import { closeCards, openCard } from '../../Context/actions';

interface Props {
  index: number;
}

export default function FlipCard({ index }: Props) {
  const [state, dispatch] = useContext(UserContext);
  const [card, setCard] = useState<Card>(state.cards[index]);
  const [clicked, setClicked] = useState(card?.getOpen() ?? false);

  useEffect(() => {
    setCard(state.cards[index]);
    setClicked(state.cards[index].getOpen());
  }, [state, index]);

  const changeClicked = useCallback(() => {
    return dispatch(card.getOpen() ? closeCards() : openCard(index));
  }, [card, clicked]);

  return (
    <FlipCardContainer>
      <FlipCardContent onClick={changeClicked} clicked={clicked}>
        <FlipCardFront>
          <img src={CardPhoto} alt="Avatar" style={{ width: 100, height: 150 }} />
        </FlipCardFront>
        <FlipCardBack>
          <img src={card.getTech().getPath()} style={{ width: 50, height: 50 }} />
        </FlipCardBack>
      </FlipCardContent>
    </FlipCardContainer>
  )
};

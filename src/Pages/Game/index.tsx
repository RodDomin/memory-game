import { useContext, useEffect } from "react"

import { UserContext } from "../../Context/UserContenxt";
import { setCards } from "../../Context/actions";
import FlipCard from "../../Components/FlipCard";
import GameBuilder from "../../Entities/GameBuilder";

import { CardsContainer, GameContainer } from "./style";

export default function Game() {
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    const game = GameBuilder.build(state.name, state.difficulty);
    dispatch(setCards(game.getCards()));
  }, []);

  const cards = state.cards ?? [];

  return (
    <GameContainer>
      <CardsContainer>
        {cards.map((_: any, index: number) => <FlipCard key={index} index={index} />)}
      </CardsContainer>
    </GameContainer>
  )
}

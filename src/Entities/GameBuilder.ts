import GameMode from "./GameMode";
import Game from "./Game";
import Card from "./Card";
import TechBuider from "./TechBuilder";
import shuffleArray from "../Utils/ShuffleArray";

export default class GameBuilder {
  public static build(player: string, mode: string): Game {
    const gameMode = GameMode.getByString(mode);

    const gameCards = shuffleArray(this.generateRandomicCards(gameMode));

    return new Game(player, gameMode, gameCards);
  }

  private static generateRandomicCards(mode: GameMode): Card[] {
    const size = mode.getSize();
    const cards: Card[] = [];

    for(let i = 0; i < size; i += 2) {
      let tech = TechBuider.buildRandomicTech();
      let techAlreadyRegistred = false;
      
      do {
        tech = TechBuider.buildRandomicTech();

        techAlreadyRegistred = !!(cards.find(card => 
          card.getTech().getTechName() === tech.getTechName())
        );
      } while(techAlreadyRegistred);

      const card = new Card(tech);

      cards.push(card, card);
    }

    return cards;
  }
}


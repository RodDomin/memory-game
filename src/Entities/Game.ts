import Card from "./Card";
import GameMode from "./GameMode";

export default class Game {
  public points = 0;

  constructor(
    private player: string,
    private difficulty = GameMode.EASY,
    private cards: Card[]
  ) {
    this.player = player;
    this.difficulty = difficulty;
  }

  getCard(index: number) {
    return this.cards[index];
  }

  getCards() {
    return this.cards;
  }

  getDifficulty() {
    return this.difficulty;
  }

  setDifficulty(difficulty: GameMode) {
    this.difficulty = difficulty;
  }

  getPlayer() {
    return this.player;
  }

  setPlayer(player: string) {
    this.player = player;
  }
}


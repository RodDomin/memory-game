import Tech from "./Tech";

export default class Card {
  private open: boolean = false;
  private win: boolean = false;

  constructor(
    private readonly tech: Tech,
  ) {}

  setOpen(newValue: boolean) {
    if (!this.win) {
      this.open = newValue;
    }
  }

  setWin(newValue: boolean) {
    this.win = newValue;
  }

  getWin() {
    return this.win;
  }

  getOpen() {
    return this.open;
  }

  getTech() {
    return this.tech;
  }

  clone() {
    const card = new Card(this.tech);
    card.setOpen(this.open);
    card.setWin(this.win);

    return card;
  }
}
export default class GameMode {
  public static EASY = new GameMode(8);
  public static MEDIUM = new GameMode(16);
  public static HARD = new GameMode(24);

  public static getByString(difficulty: string): GameMode {
    const modes = {
      easy: this.EASY,
      medium: this.MEDIUM,
      hard: this.HARD
    } as { [key: string]: GameMode };

    return modes[difficulty] ?? this.MEDIUM;
  }

  constructor(
    private size: number
  ) {}

  setSize(newSize: number) {
    this.size = newSize;
  }

  getSize() {
    return this.size
  }
}

export default class Tech {
  constructor(
    private readonly techName: string,
    private readonly path: string
  ) {}

  getTechName() {
    return this.techName;
  }

  getPath() {
    return this.path;
  }
}

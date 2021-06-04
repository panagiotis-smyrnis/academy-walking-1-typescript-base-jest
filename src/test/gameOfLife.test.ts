import { GameOfLife } from "../main/gameOfLife";

describe("Game Of Life", () => {
  it("should initialise an extinct board of 5x5", () => {
    const gameOfLife = new GameOfLife([
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ]);

    gameOfLife.nextGen();
    expect(gameOfLife.printBoard()).toBe(
      "-,-,-,-,-\n-,-,-,-,-\n-,-,-,-,-\n-,-,-,-,-\n-,-,-,-,-"
    );
  });

  it("any live cell with fewer than two live neighbours dies", () => {
    const gameOfLife = new GameOfLife([
      [true, true, false, false, false],
      [true, true, false, false, false],
      [false, false, true, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ]);

    gameOfLife.nextGen();
    expect(gameOfLife.printBoard()).toBe(
      "+,+,-,-,-\n+,+,-,-,-\n-,-,-,-,-\n-,-,-,-,-\n-,-,-,-,-"
    );
  });
});

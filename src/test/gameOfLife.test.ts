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

  it("Any live cell with two or three live neighbours should live", () => {
    const gameOfLife = new GameOfLife([
      [true, true, false, false, false],
      [true, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ]);

    gameOfLife.nextGen();
    expect(gameOfLife.printBoard()).toBe(
      "+,+,-,-,-\n+,-,-,-,-\n-,-,-,-,-\n-,-,-,-,-\n-,-,-,-,-"
    );
  });
});

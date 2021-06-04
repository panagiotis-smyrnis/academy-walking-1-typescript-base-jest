import { GameOfLife } from "../main/gameOfLife";

describe("Game Of Life", () => {
  it("should initialise an extinct board of 5x5", () => {
    const gameOfLife = new GameOfLife([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);

    gameOfLife.nextGen();
    expect(gameOfLife.printBoard()).toBe(
      "#,#,#,#,#\n#,#,#,#,#\n#,#,#,#,#\n#,#,#,#,#\n#,#,#,#,#"
    );
  });
});

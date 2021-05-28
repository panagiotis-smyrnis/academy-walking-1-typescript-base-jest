import { TicTacToe } from "../main/ticTacToe";

describe("Tic Tac Toe", () => {
  it("create the board", () => {
    const board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    const ticTacToe = new TicTacToe();
    expect(ticTacToe.board).toEqual(board);
  });

  it("should place X in the correct coordinates on first attempt", () => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play(0, 0);

    const board = [
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    expect(ticTacToe.board).toEqual(board);
  });

  it("should place O in the correct coordinates on second attempt", () => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play(0, 0);
    ticTacToe.play(0, 1);
    const board = [
      ["X", "O", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    expect(ticTacToe.board).toEqual(board);
  });

  it("should place X in the correct coordinates on third attempt", () => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play(0, 0);
    ticTacToe.play(0, 1);
    ticTacToe.play(0, 2);
    const board = [
      ["X", "O", "X"],
      ["", "", ""],
      ["", "", ""],
    ];

    expect(ticTacToe.board).toEqual(board);
  });

  it("should place O in the correct coordinates on fourth attempt", () => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play(0, 0);
    ticTacToe.play(0, 1);
    ticTacToe.play(0, 2);
    ticTacToe.play(1, 0);
    const board = [
      ["X", "O", "X"],
      ["O", "", ""],
      ["", "", ""],
    ];

    expect(ticTacToe.board).toEqual(board);
  });

  it("should throw an error if you give coordinates out of the board", () => {
    const ticTacToe = new TicTacToe();

    expect(() => ticTacToe.play(5, 5)).toThrow("off limits");
  });

  it("should throw an error if the coordinate is already taken", () => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play(0, 0);
    expect(() => ticTacToe.play(0, 0)).toThrow("already taken");
  });

  it("should return a winner if 3 symbols in a raw", () => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play(0, 0);
    ticTacToe.play(1, 1);
    ticTacToe.play(0, 1);
    ticTacToe.play(2, 0);
    ticTacToe.play(0, 2);

    expect(ticTacToe.checkIfWinner()).toEqual(true);
    expect(ticTacToe.currentPlayer).toEqual("X");
  });
});

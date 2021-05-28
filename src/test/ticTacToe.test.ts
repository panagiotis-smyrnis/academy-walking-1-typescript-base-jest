import { BoardPosition, TicTacToe } from "../main/ticTacToe";

describe("Tic Tac Toe", () => {
  it("should initialise with an empty 3x3 board", () => {
    const ticTacToe = new TicTacToe();

    expect(ticTacToe.printGame()).toBe("#,#,#,#,#,#,#,#,#");
  });

  it("should show X in the top right when X is placed in the top right", () => {
    const ticTacToe = new TicTacToe();

    ticTacToe.play(BoardPosition.TopRight);

    expect(ticTacToe.printGame()).toBe("#,#,X,#,#,#,#,#,#");
  });

  it("should show X in the top center when X is placed in the top center", () => {
    const ticTacToe = new TicTacToe();

    ticTacToe.play(BoardPosition.TopCenter);

    expect(ticTacToe.printGame()).toBe("#,X,#,#,#,#,#,#,#");
  });

  it("should place O in the top right after X has already played", () => {
    const ticTacToe = new TicTacToe();

    ticTacToe.play(BoardPosition.TopCenter);
    ticTacToe.play(BoardPosition.TopRight);

    expect(ticTacToe.printGame()).toBe("#,X,O,#,#,#,#,#,#");
  });

  it("should place X in the top left after X and O has already played", () => {
    const ticTacToe = new TicTacToe();

    ticTacToe.play(BoardPosition.TopCenter);
    ticTacToe.play(BoardPosition.TopRight);
    ticTacToe.play(BoardPosition.TopLeft);

    expect(ticTacToe.printGame()).toBe("X,X,O,#,#,#,#,#,#");
  });

  it("should not allow a player to play on an already played position", () => {
    const ticTacToe = new TicTacToe();

    ticTacToe.play(BoardPosition.TopCenter);
    ticTacToe.play(BoardPosition.TopCenter);

    expect(ticTacToe.printGame()).toBe("#,X,#,#,#,#,#,#,#");
  });

  it("should not change the player after a play to an already played position failed", () => {
    const ticTacToe = new TicTacToe();

    ticTacToe.play(BoardPosition.TopCenter);
    ticTacToe.play(BoardPosition.TopCenter);
    ticTacToe.play(BoardPosition.TopRight);

    expect(ticTacToe.printGame()).toBe("#,X,O,#,#,#,#,#,#");
  });
});

// BoardPosition
// TopLeft // TopCentre // TopRight
// MiddleLeft // MiddleCentre // MiddleRight
// BottomLeft // BottomCentre // BottomRight

// [0,1,2,3,4,5,6,7,8]

// Empty
// PlayerX
// PlayerO

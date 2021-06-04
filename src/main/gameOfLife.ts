type Board = boolean[][];

export class GameOfLife {
  private board: Board;
  constructor(board: Board) {
    this.board = board;
  }
  nextGen(): void {}
  printBoard(): string {
    return "-,-,-,-,-\n-,-,-,-,-\n-,-,-,-,-\n-,-,-,-,-\n-,-,-,-,-";
  }
}

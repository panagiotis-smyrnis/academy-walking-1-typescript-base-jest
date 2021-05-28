export class TicTacToe {
  board: string[][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  currentPlayer: string = "X";

  play(x: number, y: number) {
    this.isValidMove(x, y);
    this.board[x][y] = this.currentPlayer;
    this.nextPlayer();
  }

  checkIfWinner() {
    if (this.board[0] === ["X", "X", "X"]) {
      return true;
    } else return false;
  }

  private nextPlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }

  private checkCoordinates(x: number, y: number) {
    if (x < 0 || x > 2 || y < 0 || y > 2) {
      throw new Error("off limits");
    }
  }

  private isThePositionTaken(x: number, y: number) {
    if (this.board[x][y] != "") {
      throw new Error("already taken");
    }
  }

  private isValidMove(x: number, y: number) {
    this.checkCoordinates(x, y);
    this.isThePositionTaken(x, y);
  }
}

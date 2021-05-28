export enum BoardPosition {
  TopLeft = 0,
  TopCenter = 1,
  TopRight = 2,
}

export enum Player {
  X = "X",
  O = "O",
  NoPlayer = "#",
}

class Board {
  private board: Array<Player> = new Array<Player>(9);

  constructor() {
    this.board.fill(Player.NoPlayer);
  }

  updateBoard(boardPosition: BoardPosition, currentPlayer: Player): void {
    if (this.board[boardPosition] === Player.NoPlayer) {
      this.board[boardPosition] = currentPlayer;
    }
  }

  printBoard(): string {
    return this.board.toString();
  }
}

export class TicTacToe {
  private board: Board;
  private currentPlayer: Player;

  constructor() {
    this.board = new Board();
    this.currentPlayer = Player.X;
  }

  public printGame(): string {
    return this.board.printBoard();
  }

  public play(boardPosition: BoardPosition) {
    this.board.updateBoard(boardPosition, this.currentPlayer);
    this.switchPlayer();
  }

  private switchPlayer() {
    this.currentPlayer === Player.X
      ? (this.currentPlayer = Player.O)
      : (this.currentPlayer = Player.X);
  }
}

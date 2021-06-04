type Board = boolean[][];

export class GameOfLife {
  private board: Board;
  constructor(board: Board) {
    this.board = board;
  }
  nextGen(): void {
      // this.board.forEach((boardRow, rowIndex) => {
      //     boardRow.forEach((cell, colIndex) => {
      //         let numberOfAliveNeighbours = 0;
      //         let topLeftNeighbour = rowIndex > 0 && colIndex > 0 ? this.board[rowIndex - 1][colIndex - 1] : false;
      //         let topMidNeighbour = rowIndex > 0 ? this.board[rowIndex - 1][colIndex] : false;
      //         let topRightNeighbour = rowIndex < this.board.length && colIndex < this.board.length ? this.board[rowIndex - 1][colIndex + 1] : false;
      //         let leftNeighbour = colIndex > 0 ? boardRow[colIndex - 1] : false;
      //         let rightNeighbour = colIndex < this.board.length ? boardRow[colIndex + 1] : false;
      //         let bottomLeftNeighbour = rowIndex < this.board.length && colIndex > 0 ? this.board[rowIndex + 1][colIndex - 1] : false;
      //         let bottomMidNeighbour = rowIndex < this.board.length ? this.board[rowIndex + 1][colIndex] : false;
      //         let bottomRightNeighbour = rowIndex < this.board.length && colIndex < this.board.length ? this.board[rowIndex + 1][colIndex + 1] : false;
      //
      //         if (topLeftNeighbour) {
      //             numberOfAliveNeighbours++;
      //         }
      //         if (topMidNeighbour) {
      //             numberOfAliveNeighbours++;
      //         }
      //         if (topRightNeighbour) {
      //             numberOfAliveNeighbours++;
      //         }
      //         if (leftNeighbour) {
      //             numberOfAliveNeighbours++;
      //         }
      //         if (rightNeighbour) {
      //             numberOfAliveNeighbours++;
      //         }
      //         if (bottomLeftNeighbour) {
      //             numberOfAliveNeighbours++;
      //         }
      //         if (bottomMidNeighbour) {
      //             numberOfAliveNeighbours++;
      //         }
      //         if (bottomRightNeighbour) {
      //             numberOfAliveNeighbours++;
      //         }
      //
      //
      //         if (numberOfAliveNeighbours !== 2 && numberOfAliveNeighbours !== 3) {
      //             this.board[rowIndex][colIndex] = false;
      //         }
      //     })
      // });
  }

  printBoard(): string {
    return "-,-,-,-,-\n-,-,-,-,-\n-,-,-,-,-\n-,-,-,-,-\n-,-,-,-,-";
  }
}

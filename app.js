// function gameBoard() {
//   const rows = 3;
//   const cols = 3;
//   const board = [];

//   // Create a 2d array that will represent the state of the game board
//   for (let i = 0; i < rows; i++) {
//     board[i] = [];
//     for (let j = 0; j < cols; j++) {
//       board.push(Cell());
//     }
//   }

//   // Getting board
//   const getBoard = () => board;
// }

class GameBoard {

  constructor(rows, cols) {
    this.board = [];
    for (let i = 0; i < rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < cols; j++) {
        this.board[i][j] = null;
      }
    }
  }

  // method to interact with board
  placePiece(row, col, value) {
    this.board[row][col] = value;
  }
}

// usage
const myGameBoard = new GameBoard(3, 3);
let currPlayer = "X";

function makeMove(row, col) {
  myGameBoard.placePiece(row, col, currPlayer);
}

makeMove(1, 0);

console.log(myGameBoard.board);
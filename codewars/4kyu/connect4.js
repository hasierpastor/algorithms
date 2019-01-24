// Connect Four

// The grid is 6 row by 7 columns, those being named from A to G.

// You will receive a list of strings showing the order of the pieces which dropped in columns:

// alt text

//   piecesPositionList = ["A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "G_Red",
//                         "B_Yellow"]

// The list may contain up to 42 moves and shows the order the players are playing.

// The first player who connects four items of the same color is the winner.

// You should return "Yellow", "Red" or "Draw" accordingly.

function whoIsWinner(piecesPositionList) {
  let board = makeBoard();
  let pieceObj = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
  let columnObj = { A: 5, B: 5, C: 5, D: 5, E: 5, F: 5, G: 5 };
  for (let piece of piecesPositionList) {
    piece = piece.split('_');
    let rowIndex = pieceObj[piece[0]];
    let columnIndex = columnObj[piece[0]];
    let color = piece[1];
    if (checkForWin(board, color)) return color;
    else board[columnIndex][rowIndex] = color;
    columnObj[piece[0]] -= 1;
  }
  return 'Draw';
}

function makeBoard() {
  let board = [];
  for (let i = 0; i < 6; i++) {
    board.push(new Array(7).fill(0));
  }
  return board;
}

function checkForWin(board, color) {
  const _win = cells => {
    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < board.length &&
        x >= 0 &&
        x < board[0].length &&
        board[y][x] === color
    );
  };

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

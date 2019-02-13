/**
 * @param {character[][]} board
 * @return {boolean}
 */

function isValidSudoku(board) {
  let row = Array(9).fill({});
  let column = Array(9).fill({});
  let grid = Array(9).fill({});
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let val = board[i][j];
      if (val !== '.') {
        let gridIndex = Math.floor((i / 3) * 3 + j / 3);
        addToFreqCounter(row[i], val);
        addToFreqCounter(column[j], val);
        addToFreqCounter(grid[gridIndex], val);
        if (row[i][val] > 1 || column[j][val] > 1 || grid[gridIndex][val] > 1) {
          return false;
        }
      }
    }
  }
  return true;
}

function addToFreqCounter(object, val) {
  if (val in object) {
    object[val]++;
  } else {
    object[val] = 1;
  }
}

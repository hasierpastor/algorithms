var countBattleships = function(board) {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        count++;
        dfs(board, i, j);
      }
    }
  }
  return count;
};

function dfs(matrix, index1, index2) {
  if (
    index1 < 0 ||
    index1 >= matrix.length ||
    index2 < 0 ||
    index2 >= matrix[0].length ||
    matrix[index1][index2] !== 'X'
  ) {
    return;
  }
  matrix[index1][index2] = '.';
  dfs(matrix, index1 + 1, index2);
  dfs(matrix, index1 - 1, index2);
  dfs(matrix, index1, index2 + 1);
  dfs(matrix, index1, index2 - 1);
}

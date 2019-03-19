var isToeplitzMatrix = function(matrix) {
  let endRow = matrix[0].length - 1;
  let endColumn = matrix.length - 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i !== endColumn && j !== endRow) {
        if (matrix[i][j] !== matrix[i + 1][j + 1]) {
          return false;
        }
      }
    }
  }
  return true;
};

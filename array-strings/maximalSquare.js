/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0 || !matrix) return 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let maxSquare = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if ((matrix[i][j] = '1')) {
        let sqlen = 1;
        let flag = true;
        while (sqlen + i < rows && sqlen + j < cols && flag) {
          for (let k = j; k <= sqlen + j; k++) {
            if (matrix[i + sqlen][k] == '0') {
              flag = false;
              break;
            }
          }
          for (let k = i; k <= sqlen + i; k++) {
            if (matrix[k][j + sqlen] == '0') {
              flag = false;
              break;
            }
          }
          if (flag) sqlen++;
        }
        maxSquare = Math.max(maxSquare, sqlen);
      }
    }
  }
  return maxSquare * maxSquare;
};

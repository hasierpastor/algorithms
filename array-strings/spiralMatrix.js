/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  if (matrix.length === 0 || !matrix) return [];
  let result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let direction = 0;
  while (top <= bottom && left <= right) {
    if (direction === 0) {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = 1;
    } else if (direction === 1) {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = 2;
    } else if (direction === 2) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = 3;
    } else if (direction === 3) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = 0;
    }
  }
  return result;
}

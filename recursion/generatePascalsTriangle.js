// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

function generatePascalsTriangle(numRows, rowNum = 0, pascalsTriangle = []) {
  let row = [];
  let middle = 1;
  if (rowNum === numRows) return pascalsTriangle;
  if (rowNum === 0) pascalsTriangle.push([1]);
  if (rowNum === 1) pascalsTriangle.push([1, 1]);
  if (rowNum > 1) {
    row[0] = 1;
    row[rowNum] = 1;
    let previous = pascalsTriangle[rowNum - 1];
    for (let i = 0; i < previous.length - 1; i++) {
      let sum = previous[i] + previous[i + 1];
      row[middle] = sum;
      middle++;
    }
    pascalsTriangle.push(row);
  }
  return generatePascalsTriangle(numRows, rowNum + 1, pascalsTriangle);
}

function islandPerimeter(grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += checkPerimeter(grid, i, j);
      }
    }
  }
  return perimeter;
}

function checkPerimeter(grid, row, column) {
  let perimeter = 0;
  if (!grid[row + 1] || grid[row + 1][column] === 0) {
    perimeter++;
  }
  if (!grid[row - 1] || grid[row - 1][column] === 0) {
    perimeter++;
  }
  if (!grid[row][column + 1] || grid[row][column + 1] === 0) {
    perimeter++;
  }
  if (!grid[row][column - 1] || grid[row][column - 1] === 0) {
    perimeter++;
  }
  return perimeter;
}

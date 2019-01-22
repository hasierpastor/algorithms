function climbStairs(n) {
  let arraySolutions = [];
  arraySolutions[0] = 1;
  arraySolutions[1] = 1;
  arraySolutions[2] = 2;
  for (let i = 3; i <= n; i++) {
    arraySolutions[i] = arraySolutions[i - 2] + arraySolutions[i - 1];
  }
  return arraySolutions[n];
}

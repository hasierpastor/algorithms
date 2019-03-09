/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortayByParity(A) {
  return A.sort((a, b) => customSort(a, b));
}

function customSort(a, b) {
  if (a % 2 === 0) return -1;
  if (a % 2 === 1) return 1;
  if (b % 2 === 0) return -1;
  if (b % 2 === 1) return 1;
  return 0;
}

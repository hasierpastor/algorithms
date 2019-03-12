/**
 * @param {number} num
 * @return {number}
 */

function addDigits(num, sum = 0) {
  let stringSum = String(num);
  if (stringSum.length === 1) return stringSum;
  for (let i = 0; i < stringSum.length; i++) {
    sum += +stringSum[i];
  }
  return addDigits(sum);
}

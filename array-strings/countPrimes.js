/**
 * @param {number} n
 * @return {number}
 */

function countPrimes(n) {
  var isPrime = [],
    result = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i] == undefined) {
      isPrime[i] = 1;
      result++;
      for (let j = 2; j * i < n; j++) {
        isPrime[i * j] = 0;
      }
    }
  }
  return result;
}

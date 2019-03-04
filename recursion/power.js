function myPow(x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let temp;
  if (n === 0) return 1;
  temp = myPow(x, parseInt(n / 2));
  if (n % 2 === 0) {
    return temp * temp;
  } else {
    return temp * temp * x;
  }
}

console.log(myPow(2, 10));

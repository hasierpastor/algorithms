// You will have a list of rationals in the form

// lst = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ]
// or

// lst = [ (numer_1, denom_1) , ... , (numer_n, denom_n) ]
// where all numbers are positive integers. You have to produce their sum N / D in an irreducible form: this means that N and D have only 1 as a common divisor.

function sumFracts(arr) {
  if (arr.length === 0) {
    return null;
  }
  var denominatorArr = [];
  var numeratorSum = 0;
  for (var i = 0; i < arr.length; i++) {
    denominatorArr.push(arr[i][1]);
  }
  var lcm = denominatorArr.reduce(leastCommonMultiple);
  for (let i = 0; i < arr.length; i++) {
    numeratorSum = numeratorSum + arr[i][0] * (lcm / arr[i][1]);
  }
  if (numeratorSum % lcm === 0) {
    return numeratorSum / lcm;
  } else {
    var gcf = greatestCommonDivisor(numeratorSum, lcm);
    return [numeratorSum / gcf, lcm / gcf];
  }
}

function greatestCommonDivisor(a, b) {
  if (b === 0) return a;
  return greatestCommonDivisor(b, a % b);
}

function leastCommonMultiple(x, y) {
  return (x * y) / greatestCommonDivisor(x, y);
}

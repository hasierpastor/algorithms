// Your task
// X and Y are playing a game. A list will be provided which contains n pairs of strings and integers. They have to add the integeri to the ASCII values of the stringi characters. Then they have to check if any of the new added numbers is prime or not. If for any character of the word the added number is prime then the word will be considered as prime word.

// Can you help X and Y to find the prime words?

// Example:
// prime_word({{"Emma",30},{"Liam",30}}) = {1,1};

function primeWord(arr) {
  var sum;
  var primeArr = [];
  for (var i = 0; i < arr.length; i++) {
    var tempArr = [];
    for (var j = 0; j < arr[i][0].length; j++) {
      sum = arr[i][0].charCodeAt(j) + arr[i][1];
      tempArr.push(sum);
    }
    var bool = tempArr.some(function(val) {
      return isPrime(val);
    });
    if (bool) {
      primeArr.push(1);
    } else {
      primeArr.push(0);
    }
  }
  return primeArr;
}

function isPrime(num) {
  for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

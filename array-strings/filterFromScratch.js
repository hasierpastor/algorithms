function filter(arr, callback) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

let test = [1, 2, 3, 4];
let isEven = function(num) {
  return num % 2 === 0;
};

console.log(filter(test, isEven));

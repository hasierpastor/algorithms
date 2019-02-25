//Sum = 8
//[1,2,3,9] - false
//[1,2,4,4] - true
//[7,1,3,4] - true
//[9,2,3,4] - false

function sumPair(nums, sum) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    let complement = sum - nums[i];
    if (set.has(complement)) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
}

let arr1 = [1, 2, 4, 4]; //true
let arr2 = [1, 2, 3, 9]; //false
let arr3 = [7, 1, 3, 4]; //true
let arr4 = [9, 2, 3, 4]; //false
console.log(sumPair(arr1, 8));
console.log(sumPair(arr2, 8));
console.log(sumPair(arr3, 8));
console.log(sumPair(arr4, 8));

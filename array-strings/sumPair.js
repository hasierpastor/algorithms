//Sum = 8
//[1,2,3,9] - false
//[1,2,4,4] - true
//[7,1,3,4] - true
//[9,2,3,4] - false

function sumPair(nums, sum) {
  // let complements = createComplementObject(nums, sum);
  for (let i = 0; i < nums.length; i++) {
    let complement = sum - nums[i];
    console.log(complement);
    console.log(nums.indexOf(complement));
    if (nums.indexOf(complement) !== -1) {
      return true;
    }
  }
  return false;
}

// function createComplementObject(nums, sum) {
//   let obj = {};
//   for (let num of nums) {
//     let complement = sum - num;
//     obj[num] = complement;
//   }
//   return obj;
// }

let arr1 = [1, 2, 4, 4]; //true
let arr2 = [1, 2, 3, 9]; //false
let arr3 = [7, 1, 3, 4]; //true
let arr4 = [9, 2, 3, 4]; //false
// console.log(sumPair(arr1, 8));
// console.log(sumPair(arr2, 8));
// console.log(sumPair(arr3, 8));
console.log(sumPair(arr4, 8));

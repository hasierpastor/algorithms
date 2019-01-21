// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */

let singleNumber = function(nums) {
  let freqCounter = createFreqCounter(nums);
  for (let i = 0; i < nums.length; i++) {
    if (freqCounter[nums[i]] === 1) return nums[i];
  }
  return false;
};

function createFreqCounter(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}

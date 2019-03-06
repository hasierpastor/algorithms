// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2
/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let majority = nums.length / 2;
  let freqCounter = createFreqCounter(nums);
  for (let key in freqCounter) {
    if (freqCounter[key] > majority) {
      return Number(key);
    }
  }
  throw new Error('No majority element');
}

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

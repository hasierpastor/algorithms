// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
// The maximum number of consecutive 1s is 3.

/**
 * @param {number[]} nums
 * @return {number}
 */

function findMaxConsecutiveOnes(nums) {
  let maxOnes = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    maxOnes = Math.max(maxOnes, count);
  }
  return maxOnes;
}

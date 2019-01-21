// Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.

// Example 1:
// Input: [1,0,1,1,0]
// Output: 4
// Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
// After flipping, the maximum number of consecutive 1s is 4.

/**
 * @param {number[]} nums
 * @return {number}
 */

let findMaxConsecutiveOnes = function(nums) {
  let maxOnes = 0;
  let previous = 0;
  let after = 0;
  for (let i = 0; i < nums.length; i++) {
    after++;
    if (nums[i] !== 1) {
      previous = after;
      after = 0;
    }
    maxOnes = Math.max(maxOnes, previous + after);
  }
  return maxOnes;
};

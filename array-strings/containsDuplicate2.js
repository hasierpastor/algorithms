// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

function containsNearbyDuplicate(nums, k) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    console.log(current);
    if (hashMap[current] !== undefined && i - hashMap[current] <= k) {
      return true;
    } else {
      hashMap[current] = i;
    }
  }
  return false;
}

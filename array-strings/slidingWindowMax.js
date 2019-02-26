// Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
// Output: [3,3,5,5,6,7]
// Explanation:

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Note:
// You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.

//using a deque - solution from: https://www.youtube.com/watch?v=J6o_Wz-UGvc
function slidingWindowMaximum(nums, k) {
  let deque = [];
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    if (deque.length && deque[0] === i - k) {
      deque.shift();
    }
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      results.push(nums[deque[0]]);
    }
  }
  return results;
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

console.log(slidingWindowMaximum(nums, k));

//brute force solution in at least O(n^2) runtime
// function slidingWindowMaximum(nums, k) {
//   let result = [];
//   for (let i = 0; i < nums.length - k; i++) {
//     result.push(Math.max(...nums.slice(i, i + k)));
//   }
//   return result;
// }

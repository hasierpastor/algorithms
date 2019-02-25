// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

// naive approach - time complexity is (O(nlogn))
// function merge(nums1, m, nums2, n) {
//   nums1.length = m;
//   for (let i = 0; i < n; i++) {
//     nums1.push(nums2[i]);
//   }
//   return nums1.sort((a, b) => a - b);
// }

//2 pointer approach - time complexity O(m+n) - similar to merge sort algorithm
function merge(nums1, m, nums2, n) {
  let nums1copy = [...nums1];
  nums1 = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < m && pointer2 < n) {
    if (nums1copy[pointer1] < nums2[pointer2]) {
      nums1.push(nums1copy[pointer1]);
      pointer1++;
    } else {
      nums1.push(nums2[pointer2]);
      pointer2++;
    }
  }
  while (pointer1 < m) {
    nums1.push(nums1copy[pointer1]);
    pointer1++;
  }
  while (pointer2 < n) {
    nums1.push(nums2[pointer2]);
    pointer2++;
  }
  return nums1;
}

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let intersection = function(nums1, nums2) {
  let intersect = [];
  let maxLength = nums1.length > nums2.length ? nums1.length : nums2.length;
  let freqCounter1 = createFreqCounter(nums1);
  let freqCounter2 = createFreqCounter(nums2);
  for (let i = 0; i < maxLength; i++) {
    if (nums1[i] in freqCounter2 && nums2[i] in freqCounter1) {
      intersect.push(nums1[i]);
    }
  }
  return intersect;
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

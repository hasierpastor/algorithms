/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
  let result = [];
  let map = new Map();
  let j;
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], i);
  }
  for (let i = 0; i < nums1.length; i++) {
    let val = map.get(nums1[i]) + 1;
    for (j = val; j < nums2.length; j++) {
      if (nums1[i] < nums2[j]) {
        result[i] = nums2[j];
        break;
      }
    }
    if (j === nums2.length) {
      result[i] = -1;
    }
  }
  return result;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  let range = nums.length + 1;
  let set = new Set(nums);
  for (let i = 0; i < range; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  throw new Error('No numbers are missing');
}

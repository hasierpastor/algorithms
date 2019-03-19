/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = -Infinity;
  while (left <= right) {
    let min = Math.min(height[right], height[left]);
    max = Math.max(max, min * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

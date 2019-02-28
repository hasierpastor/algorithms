//
//Research Dutch National Flag Algorithm

function sortColors(nums) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count0++;
    if (nums[i] === 1) count1++;
    if (nums[i] === 2) count2++;
  }
  for (let j = 0; j < count0; j++) {
    nums[j] = 0;
  }
  for (let k = count0; k < count0 + count1; k++) {
    nums[k] = 1;
  }
  for (let x = count1 + count0; x < nums.length; x++) {
    nums[x] = 2;
  }
  return nums;
}

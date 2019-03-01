// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

function productExceptSelf(nums) {
  let products = [];
  let index = 0;
  while (products.length < nums.length) {
    let product = findProduct(nums, index);
    products.push(product);
    index++;
  }
  return products;
}

function findProduct(arr, idx) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === idx) continue;
    product = product * arr[i];
  }
  return product;
}

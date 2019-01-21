// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
  if (s.length === 0) return true;
  let cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = cleanString.length - 1;
  while (right > left) {
    if (cleanString[right] !== cleanString[left]) {
      return false;
    }
    right--;
    left++;
  }
  return true;
};

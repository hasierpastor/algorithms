// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(string) {
  if (string.length <= 1) return string.length;
  let unique = new Set();
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < string.length) {
    let current = string[right];
    if (!unique.has(current)) {
      unique.add(current);
      max = Math.max(max, right - left + 1);
      right++;
    } else {
      unique.delete(string[left]);
      left++;
    }
  }

  return max;
}

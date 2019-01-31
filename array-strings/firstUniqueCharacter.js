// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */

function firstUniqChar(s) {
  let charObj = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in charObj) {
      charObj[s[i]]++;
    } else {
      charObj[s[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (charObj[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}

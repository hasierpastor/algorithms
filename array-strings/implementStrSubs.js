/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (!needle || needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }
        //could have done this logic with a boolean
        if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }
  return -1;
}

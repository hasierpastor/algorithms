// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */

let isValid = function(s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;
  let stack = [];
  let bracketsMap = new Map();
  bracketsMap.set('(', ')');
  bracketsMap.set('{', '}');
  bracketsMap.set('[', ']');
  for (let i = 0; i < s.length; i++) {
    if (bracketsMap.get(s[i])) {
      stack.push(s[i]);
    } else {
      let current = stack.pop();
      if (bracketsMap.get(current) !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

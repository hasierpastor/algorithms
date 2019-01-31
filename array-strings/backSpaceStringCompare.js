// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

function backspaceCompare(S, T) {
  let sStack = [];
  let tStack = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== '#') {
      sStack.push(S[i]);
    }
    if (S[i] === '#') {
      sStack.pop();
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] !== '#') {
      tStack.push(T[i]);
    }
    if (T[i] === '#') {
      tStack.pop();
    }
  }
  let greaterLength =
    tStack.length > sStack.length ? tStack.length : sStack.length;
  for (let i = 0; i < greaterLength; i++) {
    if (sStack[i] !== tStack[i]) return false;
  }
  return true;
}

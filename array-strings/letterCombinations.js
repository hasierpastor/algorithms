/**
 * @param {string} digits
 * @return {string[]}
 */

function letterCombinations(digits) {
  let result = [];
  if (digits === null || digits.length == 0) {
    return result;
  }
  let mapping = ['0', '1', 'abc', 'ghf', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  letterCombinationsRecurse(result, digits, '', 0, mapping);
  return result;
}

function letterCombinationsRecurse(arr, str, current, idx, map) {
  if (idx === str.length) {
    arr.push(current);
    return;
  }
  let int = +str[idx];
  let letters = map[int];
  for (let i = 0; i < letters.length; i++) {
    letterCombinationsRecurse(arr, str, current + letters[i], idx + 1, map);
  }
}

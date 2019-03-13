// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]

// Note:

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter

/**
 * @param {string[]} A
 * @return {string[]}
 */

function commonChars(arr) {
  let commonChars = createHashTable(arr);
  let res = [];
  for (let key in commonChars) {
    let charDivision = Math.floor(commonChars[key] / arr.length);
    if (charDivision >= 1) {
      for (let i = 0; i < charDivision; i++) {
        res.push(key);
      }
    }
  }
  return res;
}

function createHashTable(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] in obj) obj[arr[i][j]]++;
      else {
        obj[arr[i][j]] = 1;
      }
    }
  }
  return obj;
}

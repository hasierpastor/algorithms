// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
  let longest_string_arr = [];
  let longest_string = Math.max(...inputArray.map(element => element.length));
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === longest_string) {
      longest_string_arr.push(inputArray[i]);
    }
  }
  return longest_string_arr;
}

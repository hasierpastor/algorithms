/**
 * @param {string} s
 * @return {string}
 */

//Recursive function
// function reverseString(str) {
//   if (str === '') return '';
//   else return reverseString(str.substr(1)) + str.charAt(0);
// }

//Iterative function
function reverseString(str) {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }
  return str;
}

//strings are immutable in js
function reverseString(str) {
  if (str === '') return '';
  else return reverseString(str.substr(1)) + str.charAt(0);
}

//this would work if string was not immutable - such as in python
// function reverseString(s, start, end) {
//   let first = 0;
//   let last = s.length - 1;
//   if (first >= last) return s;
//   let tmp = s[first];
//   s[first] = s[last];
//   s[last] = tmp;
//   reverseString(s, first + 1, last - 1);
// }

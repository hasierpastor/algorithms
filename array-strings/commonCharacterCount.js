// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
  let str1_freq_obj = create_freq_obj(s1);
  let str2_freq_obj = create_freq_obj(s2);

  let sum = 0;

  for (let key in str1_freq_obj) {
    if (
      str1_freq_obj.hasOwnProperty(key) &&
      str2_freq_obj.hasOwnProperty(key)
    ) {
      sum += Math.min(str1_freq_obj[key], str2_freq_obj[key]);
    }
  }
  return sum;
}

function create_freq_obj(str) {
  return str.split('').reduce((object, val) => {
    object[val] = object[val] + 1 || 1;
    return object;
  }, {});
}

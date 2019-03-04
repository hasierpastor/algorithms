// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

function frequencySort(s) {
  let result = '';
  let hashMap = createFreqCounter(s);
  let sortedVals = Object.keys(hashMap).sort((a, b) => hashMap[b] - hashMap[a]);
  for (let key of sortedVals) {
    for (let i = 1; i <= hashMap[key]; i++) {
      result += key;
    }
  }
  return result;
}

function createFreqCounter(s) {
  let freqCounter = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in freqCounter) {
      freqCounter[s[i]]++;
    } else {
      freqCounter[s[i]] = 1;
    }
  }
  return freqCounter;
}

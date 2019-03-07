/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isIsomorphic(s, t) {
  let hashMap = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hashMap) {
      if (hashMap[s[i]] !== t[i]) return false;
    } else {
      if (Object.values(hashMap).indexOf(t[i]) > -1) return false;
      hashMap[s[i]] = t[i];
    }
  }
  return true;
}

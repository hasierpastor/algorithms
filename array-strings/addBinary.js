/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let result = '';
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    i >= 0 ? (sum += parseInt(a[i--])) : 0;
    j >= 0 ? (sum += parseInt(b[j--])) : 0;
    result = (sum % 2) + result;
    carry = parseInt(sum / 2);
  }
  if (carry > 0) {
    result = '1' + result;
  }
  return result;
}

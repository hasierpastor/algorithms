/**
 * @param {string} s
 * @return {number}
 */

function romanToInt(s) {
  let mapper = new Map();
  mapper.set('I', 1);
  mapper.set('V', 5);
  mapper.set('X', 10);
  mapper.set('L', 50);
  mapper.set('C', 100);
  mapper.set('D', 500);
  mapper.set('M', 1000);
  let sum = 0;
  let romanArr = s.split('');
  for (let i = 0; i < romanArr.length; i++) {
    if (mapper.get(romanArr[i + 1]) > mapper.get(romanArr[i])) {
      let diff = mapper.get(romanArr[i + 1]) - mapper.get(romanArr[i]);
      sum += diff;
      i += 1;
    } else {
      sum += mapper.get(romanArr[i]);
    }
  }
  return sum;
}

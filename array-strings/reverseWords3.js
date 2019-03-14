function reverseWords(s) {
  let arrWords = s.split(' ');
  console.log(arrWords);
  for (let i = 0; i < arrWords.length; i++) {
    arrWords[i] = reverseWord(arrWords[i]);
  }
  return arrWords.join(' ');
}

//STRINGS ARE IMMUTABLE!!!!!!
function reverseWord(str) {
  let strArr = str.split('');
  let left = 0;
  let right = strArr.length - 1;
  while (left <= right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
  return strArr.join('');
}

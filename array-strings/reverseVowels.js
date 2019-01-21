// write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// reverseVowels("Hello!"); // "Holle!"
// reverseVowels("Tomatoes"); // "Temotaos"
// reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"

function reverseVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var strArray = str.split('');
  var vowelsInArray = [];
  for (var i = 0; i < strArray.length; i++) {
    if (vowels.indexOf(strArray[i]) >= 0) {
      vowelsInArray.push(strArray[i]);
    }
  }
  var lastIndex = vowelsInArray.length - 1;
  for (var j = 0; j < strArray.length; j++) {
    if (vowels.indexOf(strArray[j]) >= 0) {
      strArray[j] = vowelsInArray[lastIndex];
      lastIndex = lastIndex - 1;
    }
  }
  return strArray.join('');
}

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  if (/^\s*$/.test(str) || str.length === 0) {
    return false;
  }
  var strArr = str.split('');
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === ' ' && strArr[i + 1] !== ' ') {
      strArr.splice(i + 1, 1, str[i + 1].toUpperCase());
    }
  }
  if (strArr[0] !== strArr[0].toUpperCase()) {
    strArr.splice(0, 1, str[0].toUpperCase());
  }
  var hashtag = '#' + strArr.join('').replace(/\s/g, '');
  if (hashtag.length > 140) {
    return false;
  }
  return hashtag;
}

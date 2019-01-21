// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse(data) {
  var outputArray = [];
  var output = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i] === 'i') {
      output++;
    }
    if (data[i] === 'd') {
      output--;
    }
    if (data[i] === 's') {
      output = output * output;
    }
    if (data[i] === 'o') {
      outputArray.push(output);
    }
  }
  return outputArray;
}

// Write a sum function which will work properly when invoked using either syntax below.

// sum(2,3);  // Outputs 5
// sum(2)(3); // Outputs 5

function sum(x) {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  }
  return function add(y) {
    return x + y;
  };
}

console.log(sum(2, 3));
console.log(sum(2)(3));

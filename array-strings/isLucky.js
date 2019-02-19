// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

function isLucky(n) {
  let array_numbers = n
    .toString(10)
    .split('')
    .map(Number);
  let sum_first_half = 0;
  let sum_second_half = 0;
  let half = array_numbers.length / 2;

  for (let i = 0; i < half; i++) {
    sum_first_half += array_numbers[i];
  }
  for (let j = half; j < array_numbers.length; j++) {
    sum_second_half += array_numbers[j];
  }

  return sum_first_half === sum_second_half;
}

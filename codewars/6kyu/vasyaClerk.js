// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(arr) {
  var twentyFiveCount = 0;
  var fiftyCount = 0;
  var hundredCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 25) {
      twentyFiveCount++;
    } else if (arr[i] === 50 && twentyFiveCount >= 1) {
      twentyFiveCount--;
      fiftyCount++;
    } else if (arr[i] === 50 && twentyFiveCount < 1) {
      return 'NO';
    } else if (arr[i] === 100 && twentyFiveCount >= 1 && fiftyCount >= 1) {
      twentyFiveCount--;
      fiftyCount--;
      hundredCount++;
    } else if (arr[i] === 100 && twentyFiveCount >= 3) {
      twentyFiveCount = twentyFiveCount - 3;
    } else if (arr[i] === 100 && twentyFiveCount < 3 && fiftyCount < 1) {
      return 'NO';
    }
  }
  return 'YES';
}

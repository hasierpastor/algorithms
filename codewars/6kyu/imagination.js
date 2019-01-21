// We have got a gun that shoots little balls of painting of different colours. We want to calculate the probability in having a certain number of shots with certain colours in a specific order.

// Before start shooting, the balls are mixed in such way that each ball has the same probabilty of being selected to be shot. This action is repeated after each shot.

// For example the gun will be feed with a total of 18 balls: 9 yellow, 4 red and 5 blue. Like the sets we have below.

// source: imgur.com

// We want to know the probabilty for this set of balls (balls_set) in having the following event that has 4 consecutive shots: e1 = ["RD", "YL", "YL", "BL"].

// RD means Red, YL means Yellow and BL means Blue

// The probability will be:

// p(e1) = 4/18 * 9/17 * 8/16 * 5/15 = 1440/73440 = 1/51
// But the following event, for the same balls_set, is impossible for this event of 5 shots: e2 = ["RD", "YL", "YL", "BL", "GN"] p(e2) = 0. The new one here is GN, GN means green. There are no green balls in the set given above.

// You will be given an unordered set of balls with different colours and a desired event. The balls_set has full words for the names of the colours (first letter in Capital letters) as an array. The event is an array, too, but has the corresponding abbreviation for the color. (see the table bellow). You should output the probability of the desired event as a non-reducible fraction with its numerator and denominator in an array, [num, den] (num and den should be co-primes).

// The examples given above will be:

// set_balls = ["Red","Red","Blue","Yellow","Yellow","Yellow","Red", "Yellow","Yellow","Blue","Yellow","Red","Blue","Yellow","Blue","Yellow","Blue",Yellow"]
// e = ["RD", "YL", "YL", "BL"]
// find_prob(set_balls, e1) === [1,51]
// And the above case when the probability is 0, the function will output an array with the word "Impossible" in it.

// set_balls = ["Red","Red","Blue","Yellow","Yellow","Yellow","Red", "Yellow","Yellow","Blue","Yellow","Red","Blue","Yellow","Blue","Yellow","Blue",Yellow"]
// e = ["RD", "YL", "YL", "BL,"GN"]
// find_prob(set_balls, e1) === ['Impossible']
// You sould have in mind that events with very low probability very close to 0 are improbable, but events with probability equals to 0 are impossible The following table shows the correspondent abreviations with all the possible colours of balls that are available for this kata.

const ABBREVIATIONS = {
  AL: 'Aluminum',
  AM: 'Amber',
  BG: 'Beige',
  BK: 'Black',
  BL: 'Blue',
  BN: 'Brown',
  BZ: 'Bronze',
  CH: 'Charcoal',
  CL: 'Clear',
  GD: 'Gold',
  GN: 'Green',
  GY: 'Gray',
  GT: 'Granite',
  IV: 'Ivory',
  LT: 'Light',
  OL: 'Olive',
  OP: 'Opaque',
  OR: 'Orange',
  PK: 'Pink',
  RD: 'Red',
  SM: 'Smoke',
  TL: 'Translucent',
  TN: 'Tan',
  TP: 'Transparent',
  VT: 'Violet',
  WT: 'White',
  YL: 'Yellow'
};
function findProb(ballsSet, event) {
  var colorAmount = {};
  var denominator = 1;
  var numerator = 1;
  var totalBalls = ballsSet.length;
  for (var i = 0; i < ballsSet.length; i++) {
    if (ballsSet[i] in colorAmount) {
      colorAmount[ballsSet[i]]++;
    } else {
      colorAmount[ballsSet[i]] = 1;
    }
  }
  for (var j = 0; j < event.length; j++) {
    if (!colorAmount[ABBREVIATIONS[event[j]]]) {
      return ['Impossible'];
    }
    denominator = denominator * totalBalls;
    numerator = numerator * colorAmount[ABBREVIATIONS[event[j]]];
    totalBalls--;
    colorAmount[ABBREVIATIONS[event[j]]]--;
  }
  var gcd = greatestCommonDenominator(numerator, denominator);
  return [numerator / gcd, denominator / gcd];
}

function greatestCommonDenominator(a, b) {
  if (b === 0) return a;

  return greatestCommonDenominator(b, a % b);
}

// Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.

// rAvg = runningAverage();
// rAvg(10) = 10.0;
// rAvg(11) = 10.5;
// rAvg(12) = 11;

function runningAverage() {
  var store = 0;
  var count = 0;
  return function average(num) {
    count++;
    store = num + store;
    var result = store / count;
    return Number(result.toFixed(2));
  };
}

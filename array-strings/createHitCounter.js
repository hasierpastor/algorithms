// Design a hit counter which counts the number of hits received in the past 5 minutes.

// Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at 1.

// It is possible that several hits arrive roughly at the same time.

// Example:

// HitCounter counter = new HitCounter();

// // hit at timestamp 1.
// counter.hit(1);

// // hit at timestamp 2.
// counter.hit(2);

// // hit at timestamp 3.
// counter.hit(3);

// // get hits at timestamp 4, should return 3.
// counter.getHits(4);

// // hit at timestamp 300.
// counter.hit(300);

// // get hits at timestamp 300, should return 4.
// counter.getHits(300);

// // get hits at timestamp 301, should return 3.
// counter.getHits(301);

/**
 * Initialize your data structure here.
 */
class HitCounter {
  constructor() {
    this.hits = [];
  }

  hit(timestamp) {
    this.hits.push(timestamp);
    return this.hits;
  }

  getHits(timestamp) {
    for (let i in this.hits) {
      if (this.hits[i] > timestamp - 300) {
        return this.hits.length - i;
      }
    }
  }
}

let test = new HitCounter();
console.log(test.hit(1));
console.log(test.hit(2));
console.log(test.hit(3));

console.log(test.getHits(4)); //3

console.log(test.hit(300));

console.log(test.getHits(300)); //4

console.log(test.getHits(301)); //5 minutes have passed so don't need to take into account first hit

class MovingAverage {
  constructor(stream, slidingWindow = [], sum = 0) {
    this.stream = stream;
    this.slidingWindow = slidingWindow;
    this.sum = sum;
  }
  next(val) {
    if (this.slidingWindow.length === this.stream) {
      let deleted = this.slidingWindow.shift();
      this.sum + -deleted;
    }
    this.slidingWindow.push(val);
    this.sum += val;
    return this.sum / this.slidingWindow.length;
  }
}

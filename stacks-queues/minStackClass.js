/**
 * initialize your data structure here.
 */
class MinStack {
  constructor(arr = []) {
    this.arr = arr;
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.arr.push(x);
  }

  /**
   * @return {void}
   */
  pop() {
    this.arr.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.arr[this.arr.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return Math.min(...this.arr);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

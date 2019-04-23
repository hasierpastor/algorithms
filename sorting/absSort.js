function absSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let k = 0; k < i; k++) {
      if (Math.abs(arr[k]) > Math.abs(arr[k + 1])) {
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
      }
    }
  }
  return arr;
}

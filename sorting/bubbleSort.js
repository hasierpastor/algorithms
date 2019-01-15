function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let k = 0; k < i; k++) {
      if (arr[k] > arr[k + 1]) {
        let temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }
  }
  return arr;
}

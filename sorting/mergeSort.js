function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  return mergedArr;
}

console.log(mergeSort([2, 3, 17, 5, 1, 10]));

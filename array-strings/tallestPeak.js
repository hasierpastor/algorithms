//runtime is 0(n)
function peakIndexInMountainArray(A) {
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i + 1] < A[i]) {
      return i;
    }
  }
  throw new Error('Not a mountain');
}

//can use binary search to improve runtime to 0(logN)

function peakIndexInMountainArrayBS(A) {
  let left = 0;
  let right = A.length - 1;
  while (left < right) {
    let middle = Math.floor(left + right / 2);
    if (A[middle] < A[middle + 1]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return left;
}

// [0,2,1,0] => 1

function mySqrt(x) {
  let start = 1;
  let end = x;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === x) return mid;
    else if (mid * mid < x) start = mid + 1;
    else if (mid * mid > x) end = mid - 1;
  }

  return Math.min(start, end);
}

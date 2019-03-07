function absSort(arr) {
  return arr.sort((a, b) => customSort(a, b));
}

function customSort(a, b) {
  if (Math.abs(a) < Math.abs(b)) return -1;
  if (Math.abs(a) > Math.abs(b)) return 1;
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

//Using bubble sofunction absSort(arr) {
// function absSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let k = 0; k < i; k++) {
//       if (Math.abs(arr[k]) > Math.abs(arr[k + 1])) {
//         [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
//       }
//     }
//   }
//   return arr;
// }

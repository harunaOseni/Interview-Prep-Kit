function hourglassSum(arr) {
  // Write your code here
  let array16 = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      if (!Number.isNaN(sum)) {
        array16.push(sum);
      }
      if (array16.length === 16) {
        break;
      }
    }
  }
  let result = Math.max(...array16);
  return result;
}

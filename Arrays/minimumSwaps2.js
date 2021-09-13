function minimumSwaps(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    const correctValue = i + 1;
    if (arr[i] !== correctValue) {
      const swapIndex = arr.indexOf(correctValue, i);
      arr[swapIndex] = arr[i];
      arr[i] = correctValue;
      swaps = swaps + 1;
    }
  }
  return swaps;
}

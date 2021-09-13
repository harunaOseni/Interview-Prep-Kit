function rotLeft(a, d) {
  // Write your code here
  let secondArray = a.slice(d);
  let firstArray = a.slice(0, d);
  let resultArray = [...secondArray, ...firstArray];

  return resultArray;
}
// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralmatrixFunction = function (array) {
  let spiralMatrix = [];
  let startColumn = 0;
  let endColumn = array[0].length - 1;
  let startRow = 0;
  let endRow = array.length - 3;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      spiralMatrix.push(array[startRow][startColumn]);
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      spiralMatrix.push(array[i][endColumn]);
    }
    endColumn--;
    if (startColumn <= endColumn && startRow <= endRow) {
      for (let i = endColumn; i >= startColumn; i--) {
        spiralMatrix.push(array[endRow][i]);
      }
      endRow--;
      for (let i = startColumn; i <= endColumn; i++) {
        spiralMatrix.push(array[endRow][i]);
      }
      startColumn++;
    }
  }
  return spiralMatrix;
};

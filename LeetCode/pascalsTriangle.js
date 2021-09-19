// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

//              1 ----> 0
//             / \
//            1   1  ---> 1
//           / \  / \
//          1    2    1  ----> 2
//  0    1    2
//  |    |    |
// [1 ,  2,   1]

var generate = function (numRows) {
  let triangle = [];
  let mike = numRows;

  for (let i = 0; i < mike; i++) {
    triangle[i] = [];
    triangle[i][0] = 1;

    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][i - j] + triangle[i - 1][j];
    }

    triangle[i][i] = 1;
  }

  return triangle;
};

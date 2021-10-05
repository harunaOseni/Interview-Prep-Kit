// HAPPY NUMBER LEETCODE CHALLENGE

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

// Constraints:

// 1 <= n <= 231 - 1

var happyNumber = function (number) {
  //tie breaker, hash set and conv number to array
  let hashSet = [];
  let numberArray = number.toString().split("");
  let foundHappyNumber = false;

  while (true) {
    let sum = 0;
    for (let index = 0; index < numberArray.length; index++) {
      sum += parseInt(numberArray[index]) * parseInt(numberArray[index]);
    }
    if (sum === 1) {
      foundHappyNumber = true;
      break;
    }
    if (!hashSet.includes(sum)) {
      hashSet.push(sum);
    } else {
      foundHappyNumber = false;
      break;
    }
    numberArray = sum.toString().split("");
  }
  if (foundHappyNumber === true) {
    return true;
  } else {
    return false;
  }
};

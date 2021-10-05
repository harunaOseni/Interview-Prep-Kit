// FIRST BAD VERSION

// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let leftPointer = 0;
    let rightPointer = n;

    while (leftPointer < rightPointer) {
      let midValue = Math.floor(n / 2);
      if (isBadVersion(midValue)) {
        rightPointer = midValue;
      } else {
        leftPointer = leftPointer + midValue;
      }
    }
    return rightPointer;
  };
};

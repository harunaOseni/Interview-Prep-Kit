// VALID PARENTHESES LEETCODE

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function (s) {
  let parenntheyyyyArray = s.split("");
  let stack = [];
  let leftPointer = 0;
  let rightPointer = s.length;

  let hashTable = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  while (leftPointer < rightPointer) {
    if (
      hashTable[parenntheyyyyArray[leftPointer]] === "(" ||
      (hashTable[parenntheyyyyArray[leftPointer]] === "{" &&
        hashTable[parenntheyyyyArray[leftPointer]] === "[")
    ) {
      stack.push(hashTable[parenntheyyyyArray[leftPointer]]);
    } else {
      let parenthesis = stack.pop();
      if (parenthesis !== hashTable[parenntheyyyyArray[leftPointer]]) {
        return false;
      }
    }
    leftPointer++;
  }

  if (stack.length === 0) {
    return true;
  }
};

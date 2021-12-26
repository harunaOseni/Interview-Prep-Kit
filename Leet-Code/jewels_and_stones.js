// JEWELS AND STONES

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  let hashTable = {};

  for (let index = 0; index < stones.length; index++) {
    if (hashTable[stones[index]] == undefined) {
      hashTable[stones[index]] = 1;
    } else {
      hashTable[stones[index]] = hashTable[stones[index]] + 1;
    }
  }

  for (let index = 0; index < jewels.length; index++) {
    if (hashTable[jewels[index]] !== undefined) {
      count += hashTable[jewels[index]];
    } else {
      count += 0;
    }
  }

  return count;
};

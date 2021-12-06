// CHECK IF THE SENTENCE IS A PANGRAM

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.

/**
 * @param {string} sentence
 * @return {boolean}
 */

// Solution 1:

var checkIfPangram = function (sentence) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alphabet.length; i++) {
    if (sentence.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
};

// Solution 2:

var checkIfPangram = function (sentence) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let hash = {};

  for (let i = 0; i < alphabet.length; i++) {
    hash[alphabet[i]] = true;
  }

  for (let i = 0; i < sentence.length; i++) {
    if (hash[sentence[i]]) {
      delete hash[sentence[i]];
    }
  }

  return Object.keys(hash).length === 0;
};

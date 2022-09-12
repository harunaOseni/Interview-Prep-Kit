// DETERMINE IF STRING HALVES ARE ALIKE

// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.
// Example 3:

// Input: s = "MerryChristmas"
// Output: false
// Example 4:

// Input: s = "AbCdEfGh"
// Output: true

// Constraints:

// 2 <= s.length <= 1000
// s.length is even.
// s consists of uppercase and lowercase letters.

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let length = s.length;
  let half = Math.floor(length / 2);
  let vowels = "aeiouAEIOU";
  let sub1 = s.substring(0, half);
  let sub2 = s.substring(half, length);
  let a = 0;
  let b = 0;

  // console.log(sub1);
  // console.log(sub2);

  for (let char of sub1) {
    if (vowels.indexOf(char) !== -1) {
      a++;
    }
  }

  // console.log(a);

  for (let char of sub2) {
    if (vowels.indexOf(char) !== -1) {
      b++;
    }
  }

  // console.log(b);

  if (a === b) {
    return true;
  } else {
    return false;
  }
};

// Length of longest substring without repeating characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0 

//Using hashmaps
var longestSubstring = function(string){
    let hashTable = {};
    let startingIndex = 0;
    let max = 0;

    for(let i=0; i < string.length; i++){
        if(hashTable[string[i]] !== undefined && hashTable[string[i]] >= startingIndex){
            startingIndex = hashTable[string[i]] + 1;
        }
        hashTable[string[i]] = i;
        max = Math.max(max, i - startingIndex + 1);
    }
    return max;
}
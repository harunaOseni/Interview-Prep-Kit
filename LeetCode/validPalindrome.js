// VALID PALINDROME

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

var validPalindrome = function(string){
    let palindrome = string.toLowerCase().replace(/\W/g, "").split("");
    let leftPointer = 0; 
    let rightPointer = string.length - 1; 

    while(leftPointer <= rightPointer){
        if(palindrome[leftPointer] !== palindrome[rightPointer]){
            return false;
        }else{
            leftPointer++; 
            rightPointer--; 
        }
    }
    return true;
}
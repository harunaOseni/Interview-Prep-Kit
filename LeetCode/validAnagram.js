// VALID ANAGRAM!
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var validAnagram = function(s,t){
    let sString = s.split("").sort().join();
    let tString = s.split("").sort().join();

    if(tString.length > sString.length){
        return false;
    }

    for(let i=0; i<sString.length; i++){
        if(sString[i] !== tString[i]){
            return false;
        }
    }
    return true;
}
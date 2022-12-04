// Given an array of integers arr of even length n and an integer k.

// We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.

// Return true If you can find a way to do that or false otherwise.

// Example 1:

// Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
// Output: true
// Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).
// Example 2:

// Input: arr = [1,2,3,4,5,6], k = 7
// Output: true
// Explanation: Pairs are (1,6),(2,5) and(3,4).
// Example 3:

// Input: arr = [1,2,3,4,5,6], k = 10
// Output: false
// Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each with sum divisible by 10.

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
    let hashTable = {};
    arr.forEach((element) => {
        let remainder = element % k;
        if (hashTable[remainder] === undefined) {
        hashTable[remainder] = 1;
        } else {
        hashTable[remainder]++;
        }
    });
    for (let index = 1; index < k; index++) {
        if (hashTable[index] !== hashTable[k - index]) {
        return false;
        }
    }
    if (hashTable[0] % 2 !== 0) {
        return false;
    }
    return true;
};

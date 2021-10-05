// MAJOROTY ELEMENT LEETCODE CHALLENGE 

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1

var majorityElement = function(array){
    let hashTable = {};
    let majorityElement = 0;
    for(let index = 0; index < array.length; index++){
        //Loop checking how many times something was seen adding that to the table!
        if(hashTable[array[index]] !== undefined){
            hashTable[array[index]] = hashTable[array[index]] + 1;
        } else {
            hashTable[array[index]] = 1;
        }
    }

    //console.log(hashTable) for more test or more understanding

    for(let arrayElement in hashTable){
        if(hashTable[arrayElement] !== undefined){
            majorityElement = Math.max(hashTable[arrayElement], majorityElement); 
        }
    }

    let result = Object.keys(hashTable).find((key) => hashTable[key] === majorityElement); 

    return result;
}
// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

var subarraySum = function (nums, k) {
  let countTracking = 0;
  let hashTable = new Map();
  let sum = 0;
  hashTable.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (hashTable.has(sum - k)) {
      countTracking += hashTable.get(sum - k);
    }
    hashTable.set(sum, (hashTable.get(sum) || 0) + 1);
  }
  return countTracking;
};

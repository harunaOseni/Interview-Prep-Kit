// 3 Sums

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []
var threeSums = function (array) {
  array.sort((a, b) => a - b);
  let result = [];
  if (array.length < 3) {
    return result;
  }

  if (i > 0 && array[i] !== array[i - 1]) {
    for (let i = 0; i < array.length; i++) {
      let leftPointer = i + 1;
      let rightPointer = array.length - 1;
      let brianSum = array[i] + array[leftPointer] + array[rightPointer];

      if (brianSum === 0) {
        result.push([array[i], array[leftPointer], array[rightPointer]]);
        while (array[leftPointer] === array[leftPointer + 1]) leftPointer++;
        while (array[rightPointer] === array[rightPointer - 1]) rightPointer--;
        leftPointer++;
        rightPointer++;
      } else if (brianSum > 0) {
        rightPointer--;
      } else if (brianSum < 0) {
        leftPointer++;
      }
    }
  }
  return result;
};

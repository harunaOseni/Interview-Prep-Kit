// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Input:
// [0,0,1]
// Output:
// [0,1,0]
// Expected:
// [1,0,0]

var moveZeroes = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  for (let index = nums.length - 1; index >= 0; index--) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.slice(i, 1);
    }
  }
  return nums;
};

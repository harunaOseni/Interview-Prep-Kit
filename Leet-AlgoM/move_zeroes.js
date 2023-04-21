// Move Zeros

// Given an array of integers, move all the 0s to the back of the array while maintaining the relative order of
// the non-zero elements. Do this in-place using constant auxiliary space.

// Input:

// [1, 0, 2, 0, 0, 7]
// Output:

// [1, 2, 7, 0, 0, 0]

function moveZeros(nums) {
  let i = 0;
  let j = 0;
  let n = nums.length;

  //swap iteration
  while (j < n) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }

  //fill up zero iteration
  while (i < n) {
    nums[i] = 0;
    i++;
  }

  return nums;
}

console.log(moveZeros([1, 0, 2, 0, 0, 7]));

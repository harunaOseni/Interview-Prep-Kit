#SEARCH INSERT POSITION

# Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

# You must write an algorithm with O(log n) runtime complexity.


# Example 1:

# Input: nums = [1,3,5,6], target = 5
# Output: 2
# Example 2:

# Input: nums = [1,3,5,6], target = 2
# Output: 1
# Example 3:

# Input: nums = [1,3,5,6], target = 7
# Output: 4
# Example 4:

# Input: nums = [1,3,5,6], target = 0
# Output: 0
# Example 5:

# Input: nums = [1], target = 0
# Output: 0
 

# Constraints:

# 1 <= nums.length <= 104
# -104 <= nums[i] <= 104
# nums contains distinct values sorted in ascending order.
# -104 <= target <= 104

class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        start_index = 0 
        end_index = len(nums) - 1

        while start_index <= end_index: 
            mid_index = int((start_index + end_index)/2)

            if target == nums[mid_index]: 
                return mid_index
            
            if target < nums[mid_index]: 
                end_index = mid_index - 1
            else: 
                start_index = mid_index + 1
            
        return start_index 
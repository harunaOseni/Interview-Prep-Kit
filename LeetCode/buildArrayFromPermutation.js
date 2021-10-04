/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    // nums -> 0, 2, 1, 5, 3, 4
    //output ->0, 1, 2, 4, 5, 3
    
    //ans = nums[0], nums[1], nums[2].....
    
    let ans = []; 
    
    for(let index = 0; index < nums.length; index++){
        ans.push(nums[nums[index]]);
    }
    return ans;
};
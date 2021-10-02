var runningSum = function(nums) {
    let resultArray = [];
    let sum = 0
    for(let index = 0; index < nums.length; index++){
        if(index === 0){
            resultArray.push(nums[i]); 
            sum += nums[i];
        }else{
            resultArray.push(nums[i] + sum)
            sum += nums[i];
        }
    }
    return resultArray;
}
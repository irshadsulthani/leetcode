/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max = -1
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] > nums[i]){
                max = Math.max(max, nums[j] - nums[i])
            }
        }
    }
    return max
};
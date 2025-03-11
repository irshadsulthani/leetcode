/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort((a,b) => a - b)
    let dupe, missing;
    if (nums[0] !== 1) missing = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[ i - 1]){
            dupe = nums[i]
        }else if( nums[i] > nums[ i - 1] + 1 ){
            missing = nums[i - 1] + 1
        }
    }

    if (!missing) missing = nums.length;
    
    return [ dupe, missing ]
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    const sum = nums.reduce((prev, cur) => prev + cur, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (sum - nums[i] - leftSum === leftSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;

};
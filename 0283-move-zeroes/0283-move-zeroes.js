/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    nums.sort((a, b) => (a === 0) - (b === 0));

};
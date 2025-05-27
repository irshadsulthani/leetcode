/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let sum = nums.filter((val)=> nums.indexOf(val) === nums.lastIndexOf(val))
  .reduce((acc,val) => acc + val ,0)
  return sum
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
   let count = {} , pairs = 0

   for(let num of nums){
    count[num] = (count[num] || 0) +1
    if(count[num] % 2 === 0) pairs++
   }

   return [pairs, nums.length - pairs * 2];
};
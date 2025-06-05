/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {}
    for(let num of nums){
        count[num] = (count[num] || 0 ) +1
    }
    for(let num in count){
        if(count[num] > nums.length/2){
            return Number(num)
        }
    }
};
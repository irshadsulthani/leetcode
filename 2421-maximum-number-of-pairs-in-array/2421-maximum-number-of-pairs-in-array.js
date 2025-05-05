/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    const freq = {}
    let pairs = 0
    for(let num of nums){
        freq[num] = (freq[num] || 0) + 1
    
    if(freq[num] % 2 === 0){
        pairs++
        }
    }
    const left = nums.length - pairs * 2;
    return [pairs, left]
};
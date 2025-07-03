/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    
    let arr = []
    for (let num of nums){
        let spl = num.toString().split('').map(Number)
        arr.push(...spl)
    }
    return arr
};
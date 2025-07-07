/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let averages = [];

    while (nums.length > 1) {
        let min = Math.min(...nums);
        let max = Math.max(...nums);

        nums.splice(nums.indexOf(min), 1);
        nums.splice(nums.indexOf(max), 1);
        
        averages.push((min + max) / 2);
    }
    return Math.min(...averages);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    
    let groups = new Map();

    for (let num of nums) {
        let maxDigit = Math.max(...String(num).split("").map(Number));
        if (!groups.has(maxDigit)) {
            groups.set(maxDigit, []);
        }
        groups.get(maxDigit).push(num);
    }

    let maxPairSum = -1;

    for (let [key, values] of groups) {
        if (values.length > 1) {
            values.sort((a, b) => b - a); 
            maxPairSum = Math.max(maxPairSum, values[0] + values[1]);
        }
    }

    return maxPairSum;
};

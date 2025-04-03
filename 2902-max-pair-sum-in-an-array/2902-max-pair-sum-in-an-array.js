/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let groups = {};

    for (let num of nums) {
        let key = Math.max(...String(num));
        (groups[key] ||= []).push(num);
    }

    return Math.max(
        ...Object.values(groups)
            .map(g => g.sort((a, b) => b - a))
            .filter(g => g.length > 1)
            .map(g => g[0] + g[1]),
        -1
    );
};



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let count = {};
    for (let num of nums) {
        if (count[num]) {
            return true;
        }
        count[num] = 1;
    }
    return false;
};

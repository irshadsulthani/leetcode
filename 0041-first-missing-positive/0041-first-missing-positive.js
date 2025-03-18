/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let numSet = new Set(nums); // Store all numbers in a set
    let i = 1; // Start checking from 1

    while (numSet.has(i)) {
        i++; // Keep checking the next positive integer
    }

    return i; // The first missing positive number
};
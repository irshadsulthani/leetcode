/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let countMap = {};

    for (let num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    let occurrences = new Set(Object.values(countMap));

    return occurrences.size === Object.values(countMap).length
};
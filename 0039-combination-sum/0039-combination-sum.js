/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    const findCombinations = (start, sum, path) => {
        if (sum === target) {
            result.push([...path]);
            return;
        }
        if (sum > target) return;

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            findCombinations(i, sum + candidates[i], path); 
            path.pop(); 
        }
    };

    findCombinations(0, 0, []);
    return result;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];

    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    let result = [''];

    for (let digit of digits) {
        let temp = [];
        for (let combo of result) {
            for (let char of map[digit]) {
                temp.push(combo + char);
            }
        }
        result = temp;
    }
    return result;
};

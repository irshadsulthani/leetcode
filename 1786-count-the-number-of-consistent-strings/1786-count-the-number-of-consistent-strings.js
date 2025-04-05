/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;

    for (let word of words) {
        let isValid = true;
        for (let char of word) {
            if (!allowed.includes(char)) {
                isValid = false;
                break;
            }
        }
        if (isValid) count++;
    }
    return count;

};
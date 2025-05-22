/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    const uniqueChars = new Set(s);
    return uniqueChars.size;
};
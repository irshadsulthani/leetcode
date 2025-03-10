/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    return Math.max(...strs.map(str => {
        return !isNaN(str) ? parseInt(str, 10) : str.length;
    }));
};
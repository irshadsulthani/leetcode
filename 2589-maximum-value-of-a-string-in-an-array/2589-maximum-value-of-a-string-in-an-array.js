/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max = 0;
    for (const str of strs) {
        let isNumber = true;
        for (let i = 0; i < str.length; i++) {
            if (str[i] < '0' || str[i] > '9') {
                isNumber = false;
                break;
            }
        }

        const value = isNumber ? parseInt(str, 10) : str.length;
        if (value > max) {
            max = value;
        }
    }
    return max;
};

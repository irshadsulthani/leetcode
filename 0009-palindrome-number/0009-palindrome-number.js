/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num1 = x.toString().split('').reverse().join('')
    return num1 == x 
};